import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { needsBanner, setConsent } from '../../lib/analytics'
import { useLang } from '../../i18n/LangContext'

/*
 * Aviso de cookies. Sólo existe si el sitio tiene analítica configurada (`VITE_GA_ID`). Aceptar y
 * rechazar pesan lo mismo. Se vuelve a abrir desde la página de privacidad.
 */
export default function CookieBanner() {
  const { t } = useLang()
  const [open, setOpen] = useState(needsBanner)

  useEffect(() => {
    const reopen = () => setOpen(true)
    window.addEventListener('open-cookie-banner', reopen)
    return () => window.removeEventListener('open-cookie-banner', reopen)
  }, [])

  if (!open) return null
  const choose = (v) => {
    setConsent(v)
    setOpen(false)
  }
  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t('Aviso de cookies')}
      className="fixed inset-x-3 bottom-3 z-60 mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-5 shadow-2xl sm:inset-x-6 sm:bottom-6 sm:flex sm:items-center sm:gap-6"
    >
      <p className="text-sm leading-relaxed text-gray-700">
        {t('Usamos cookies de Google Analytics para contar visitas de forma agregada. Sólo se activan si usted acepta.')}{' '}
        <Link to="/privacidad" className="font-medium text-brand-blue underline underline-offset-2">
          {t('Más información')}
        </Link>
      </p>
      <div className="mt-4 flex shrink-0 gap-2 sm:mt-0">
        <button
          type="button"
          onClick={() => choose('denied')}
          className="h-10 rounded-lg border border-gray-300 px-4 text-sm font-semibold text-navy-900 hover:bg-gray-50"
        >
          {t('Rechazar')}
        </button>
        <button
          type="button"
          onClick={() => choose('granted')}
          className="h-10 rounded-lg bg-brand-blue px-4 text-sm font-semibold text-white hover:opacity-90"
        >
          {t('Aceptar')}
        </button>
      </div>
    </div>
  )
}
