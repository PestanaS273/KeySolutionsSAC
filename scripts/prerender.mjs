/*
 * Prerender: sirve dist/ con `vite preview`, visita cada ruta del sitemap con un navegador real y
 * guarda el HTML ya renderizado en dist/<ruta>/index.html. Buscadores, asistentes de IA y
 * previsualizaciones de enlaces reciben el contenido completo sin ejecutar JavaScript; el
 * navegador del visitante carga la app encima. Es el mismo mecanismo que el sitio de KeyERP.
 *
 * - Las rutas salen de public/sitemap.xml: una ruta pública nueva entra al sitemap y con eso se
 *   prerenderiza.
 * - Corre en ESPAÑOL (es lo que se indexa) y con movimiento reducido.
 * - Recorre cada página hasta abajo antes de guardarla: las secciones que entran al hacer scroll
 *   quedarían si no con opacidad 0, que un buscador lee como texto oculto.
 * - index.html trae título, descripción y etiquetas OG por defecto, y cada página agrega las suyas
 *   detrás. De cada etiqueta repetida se guarda sólo la última (la de la página) y se marca con
 *   `data-prerender`, igual que el JSON-LD propio de la página. Al arrancar, `src/main.jsx` borra lo
 *   marcado antes de que la app vuelva a pintarlo: así nunca hay dos títulos ni dos canónicas.
 * - La portada se escribe al final: `vite preview` sirve dist/index.html como plantilla de todas
 *   las rutas, y si la portada ya estuviera prerenderizada cada página heredaría su <head>.
 */
import { spawn } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { chromium } from '@playwright/test'

const PORT = 7434
const ORIGIN = `http://localhost:${PORT}`
const SITE_URL = 'https://keysolutionssac.com'

const sitemap = await readFile('public/sitemap.xml', 'utf8')
const ROUTES = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].replace(SITE_URL, '') || '/')
  .sort((a, b) => (a === '/') - (b === '/'))
const template = await readFile('dist/index.html', 'utf8')
const templateLd = (template.match(/application\/ld\+json/g) || []).length

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { stdio: 'ignore' })
const waitFor = async () => {
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(ORIGIN)).ok) return
    } catch {}
    await new Promise((r) => setTimeout(r, 250))
  }
  throw new Error('vite preview no arrancó')
}

try {
  await waitFor()
  const browser = await chromium.launch()
  const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 }, reducedMotion: 'reduce', locale: 'es-PE' })
  await ctx.addInitScript(() => localStorage.setItem('lang', 'es'))
  const page = await ctx.newPage()
  for (const route of ROUTES) {
    await page.goto(ORIGIN + route, { waitUntil: 'networkidle' })
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) {
        window.scrollTo(0, y)
        await new Promise((r) => setTimeout(r, 60))
      }
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(700)
    await page.evaluate(([templateLd, template]) => {
      const key = (el) =>
        el.tagName === 'TITLE'
          ? 'title'
          : el.tagName === 'LINK'
            ? `link:${el.getAttribute('rel')}`
            : `meta:${el.getAttribute('name') || el.getAttribute('property')}`
      const els = [...document.head.querySelectorAll('title, meta[name], meta[property], link[rel=canonical]')]
      /* Una etiqueta es «de la plantilla» si su texto o su content aparece tal cual en index.html. */
      const fromTemplate = (el) => {
        const v = el.tagName === 'TITLE' ? el.textContent : el.getAttribute('content') ?? el.getAttribute('href')
        return Boolean(v) && (template.includes(v) || template.includes(v.replace(/&/g, '&amp;')))
      }
      const groups = new Map()
      els.forEach((el) => groups.set(key(el), [...(groups.get(key(el)) || []), el]))
      groups.forEach((list) => {
        if (list.length < 2) return
        const page = list.filter((el) => !fromTemplate(el))
        const keep = page.length ? page[page.length - 1] : list[list.length - 1]
        list.forEach((el) => (el === keep ? el.setAttribute('data-prerender', '') : el.remove()))
      })
      ;[...document.querySelectorAll('script[type="application/ld+json"]')]
        .slice(templateLd)
        .forEach((el) => el.setAttribute('data-prerender', ''))
    }, [templateLd, template])
    let html = await page.content()
    if (!html.startsWith('<!DOCTYPE')) html = '<!DOCTYPE html>\n' + html
    const dir = join('dist', route === '/' ? '' : route)
    await mkdir(dir, { recursive: true })
    await writeFile(join(dir, 'index.html'), html)
    const stats = await page.evaluate(() => ({
      titles: document.head.querySelectorAll('title').length,
      h1: document.querySelectorAll('h1').length,
      hidden: [...document.querySelectorAll('[style*="opacity: 0"]')].filter((e) => e.textContent.trim() && !e.closest('a[href*="wa.me"]')).length,
    }))
    console.log(`prerender ${route.padEnd(58)} ${(html.length / 1024).toFixed(0)} kB  t${stats.titles} h${stats.h1} oculto:${stats.hidden}`)
  }
  await browser.close()
} finally {
  server.kill()
}
