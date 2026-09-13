import { useLang } from '../../i18n/LangContext'

/* ES | EN. Botón único, sin banderas: el idioma no es un país. */
export default function LangToggle({ dark = false }) {
  const { lang, setLang } = useLang()
  const base = 'px-2 py-1 text-xs font-semibold rounded transition-colors'
  const on = dark ? 'bg-white text-navy-900' : 'bg-navy-900 text-white'
  const off = dark ? 'text-white/70 hover:text-white' : 'text-gray-500 hover:text-navy-900'
  return (
    <div
      className={`inline-flex items-center rounded-md border p-0.5 ${dark ? 'border-white/25' : 'border-gray-200'}`}
      role="group"
      aria-label="Idioma / Language"
    >
      {['es', 'en'].map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`${base} ${lang === l ? on : off}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
