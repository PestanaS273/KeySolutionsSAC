import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { EN } from './en'

/*
 * Idioma del sitio. El español es el original (todo el contenido está escrito en español); el
 * inglés sale del diccionario `en.js`, indexado por la frase en español. Si una frase no tiene
 * traducción, se muestra en español: nunca se rompe la página por una entrada que falta.
 *
 * Elección inicial: lo guardado en localStorage; si no hay, el idioma del navegador; si no, español.
 */
const LangContext = createContext({ lang: 'es', setLang: () => {}, t: (s) => s })

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch {}
  // Los rastreadores (Google, Bing, previsualizaciones) reciben siempre español: es el idioma que se indexa.
  if (typeof navigator !== 'undefined' && /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegram|linkedin|prerender|headless/i.test(navigator.userAgent)) return 'es'
  const nav = (navigator.language || '').toLowerCase()
  return nav.startsWith('en') ? 'en' : 'es'
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)
  const setLang = useCallback((l) => {
    setLangState(l)
    try { localStorage.setItem('lang', l) } catch {}
  }, [])
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  const t = useCallback((s) => {
    if (lang === 'es' || typeof s !== 'string') return s
    const key = s.replace(/\s+/g, ' ').trim()
    return EN[key] ?? s
  }, [lang])
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
