import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { LangProvider } from './i18n/LangContext'

/*
 * El HTML de cada ruta viene prerenderizado (scripts/prerender.mjs). Antes de que la app vuelva a
 * pintar todo, se retiran los metadatos de página que dejó el prerender para que no queden dobles.
 */
document.querySelectorAll('[data-prerender]').forEach((el) => el.remove())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </HelmetProvider>
  </StrictMode>,
)
