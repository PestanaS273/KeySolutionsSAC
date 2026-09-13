import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { company } from '../../data/company'
import { INTERESTS } from '../../data/contact'
import { useLang } from '../../i18n/LangContext'


const inputClass =
  'w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-[0.95rem] text-gray-900 placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-colors disabled:opacity-60'
const errorClass = 'mt-1 text-xs text-red-600'
const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5'

/*
 * Un solo formulario para la portada y la página de contacto. Envía por Web3Forms; la clave decide
 * a qué buzón llega (contacto@keysolutionssac.com).
 */
export default function ContactForm({ defaultInterest, compact = false }) {
  const { t } = useLang()
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      interests: INTERESTS.map((i) => i === defaultInterest),
    },
  })

  const onSubmit = async (data) => {
    if (data.website) return /* honeypot */
    setStatus('loading')
    try {
      const interests = INTERESTS.filter((_, i) => data.interests?.[i])
      const payload = {
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        subject: `Consulta web de ${data.nombre}${data.empresa ? ` (${data.empresa})` : ''}`,
        replyto: data.email,
        from_name: 'Web Key Solutions',
        message: [
          `Nombre:     ${data.nombre}`,
          `Empresa:    ${data.empresa || 'No indicada'}`,
          `Email:      ${data.email}`,
          `Teléfono:   ${data.telefono || 'No proporcionado'}`,
          '',
          `Interés:    ${interests.length ? interests.join(', ') : 'No especificado'}`,
          '',
          'Mensaje:',
          data.mensaje,
        ].join('\n'),
        botcheck: '',
      }
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        reset()
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8" role="status">
        <CheckCircle size={32} className="text-green-600 mb-3" />
        <h3 className="text-xl font-bold text-navy-900">{t('Mensaje recibido.')}</h3>
        <p className="mt-2 text-gray-700">Respondemos en el día hábil siguiente a {company.email}.</p>
        <button
          onClick={() => setStatus(null)}
          className="mt-5 text-sm font-semibold text-brand-blue hover:underline"
        >
          {t('Enviar otro mensaje')}
        </button>
      </div>
    )
  }

  const busy = status === 'loading'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register('website')} />

      <div>
        <label htmlFor="cf-nombre" className={labelClass}>{t('Nombre y apellido')}</label>
        <input id="cf-nombre" {...register('nombre', { required: 'Campo obligatorio' })} autoComplete="name" className={inputClass} disabled={busy} />
        {errors.nombre && <p className={errorClass}>{errors.nombre.message}</p>}
      </div>
      <div>
        <label htmlFor="cf-empresa" className={labelClass}>{t('Empresa o institución')}</label>
        <input id="cf-empresa" {...register('empresa')} autoComplete="organization" className={inputClass} disabled={busy} />
      </div>
      <div>
        <label htmlFor="cf-email" className={labelClass}>{t('Correo')}</label>
        <input
          id="cf-email"
          type="email"
          autoComplete="email"
          {...register('email', {
            required: 'Campo obligatorio',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Correo inválido' },
          })}
          className={inputClass}
          disabled={busy}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="cf-telefono" className={labelClass}>{t('Teléfono (opcional)')}</label>
        <input id="cf-telefono" type="tel" autoComplete="tel" placeholder="+51 …" {...register('telefono')} className={inputClass} disabled={busy} />
      </div>

      <fieldset className="sm:col-span-2">
        <legend className={labelClass}>{t('Qué le interesa')}</legend>
        <div className={`grid gap-x-4 gap-y-2 ${compact ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
          {INTERESTS.map((p, i) => (
            <label key={p} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" {...register(`interests.${i}`)} className="w-4 h-4 accent-brand-blue" disabled={busy} />
              {t(p)}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <label htmlFor="cf-mensaje" className={labelClass}>{t('Mensaje')}</label>
        <textarea
          id="cf-mensaje"
          rows={compact ? 3 : 5}
          {...register('mensaje', { required: 'Campo obligatorio' })}
          placeholder={t("Cantidades, especificaciones, o cómo manejan hoy el gasto administrativo.")}
          className={`${inputClass} resize-none`}
          disabled={busy}
        />
        {errors.mensaje && <p className={errorClass}>{errors.mensaje.message}</p>}
      </div>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={busy}
          className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors disabled:opacity-70"
        >
          {busy ? (
            <>
              <Loader2 size={17} className="animate-spin" /> {t('Enviando')}
            </>
          ) : (
            'Enviar consulta'
          )}
        </button>
        {status === 'error' ? (
          <span role="alert" className="flex items-center gap-1.5 text-sm text-red-600">
            <AlertCircle size={15} /> No se pudo enviar. Escríbanos a {company.email}.
          </span>
        ) : (
          <span className="text-sm text-gray-500">{t('Respondemos en el día hábil siguiente.')}</span>
        )}
      </div>
    </form>
  )
}
