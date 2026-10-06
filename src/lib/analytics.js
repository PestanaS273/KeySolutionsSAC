/*
 * Google Analytics 4, sólo con consentimiento. Sin `VITE_GA_ID` en `.env` no se carga nada y el
 * aviso de cookies no aparece. Con el ID, nada se descarga de Google hasta que el visitante acepta;
 * si rechaza, no hay ni script ni cookies. La elección se guarda en el navegador (`consent`).
 * Las vistas de página de la navegación interna, los clics a otros sitios (WhatsApp incluido) y
 * el scroll los mide GA4 solo (medición mejorada). Los eventos propios van con `track()`:
 * `generate_lead` (formulario enviado), `video_start` y `video_sound_on` (video de KeyERP).
 */
export const GA_ID = import.meta.env.VITE_GA_ID ?? ''
const KEY = 'consent'


export function getConsent() {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

let loaded = false
function load() {
  if (loaded || !GA_ID) return
  loaded = true
  const w = window
  w.dataLayer = w.dataLayer || []
  w.gtag = function gtag() {
    // gtag necesita el objeto `arguments`, no un arreglo.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments)
  }
  w.gtag('js', new Date())
  w.gtag('config', GA_ID)
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
}

/* Quita las cookies de GA del dominio (al pasar de aceptar a rechazar). */
function clearGaCookies() {
  const host = location.hostname.split('.').slice(-2).join('.')
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim()
    if (name.startsWith('_ga')) {
      for (const domain of ['', `; domain=.${host}`, `; domain=${location.hostname}`]) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`
      }
    }
  })
}

export function setConsent(v) {
  try {
    localStorage.setItem(KEY, v)
  } catch {
    /* sin storage: la elección vale sólo para esta visita */
  }
  if (v === 'granted') load()
  else if (loaded) {
    clearGaCookies()
    location.reload()
  }
  window.dispatchEvent(new Event('consent-change'))
}

/* Evento propio. Sin consentimiento (o sin ID) no hace nada. */
export function track(name, params = {}) {
  if (loaded && window.gtag) window.gtag('event', name, params)
}

/* Al arrancar: si ya aceptó en una visita anterior, se carga. Nunca en el prerender. */
export function initAnalytics() {
  if (navigator.webdriver) return
  if (getConsent() === 'granted') load()
}

/* El aviso se muestra si hay ID, no hay elección guardada y no es un navegador automatizado. */
export const needsBanner = () => Boolean(GA_ID) && !navigator.webdriver && getConsent() === null
