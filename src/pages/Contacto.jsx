import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import SEOHead from '../components/SEOHead'

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
import { company } from '../data/company'
import AnimatedSection from '../components/ui/AnimatedSection'

const PRODUCTS = [
  'Tarjetas Bancarias',
  'Tarjetas Empresa',
  'Fundas RFID',
  'Rollos Térmicos',
  'Sobres y Formularios',
]

export default function Contacto() {
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setStatus('loading')
    try {
      const products = PRODUCTS.filter((_, i) => data.products?.[i])
      const productsList = products.length > 0 ? products.join(', ') : 'No especificado'
      const phone = data.telefono
        ? `${data.codigoPais || ''} ${data.telefono}`.trim()
        : 'No proporcionado'

      const payload = {
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        // Web3Forms envía el correo al email con el que se registró la access_key
        subject: `Nueva consulta web de ${data.nombre} ${data.apellido}`,
        // replyto permite responder directamente al cliente desde el correo recibido
        replyto: data.email,
        from_name: 'Web Key Solutions',
        // Cuerpo del mensaje formateado para lectura fácil
        message: `
Nombre:     ${data.nombre} ${data.apellido}
Email:      ${data.email}
Teléfono:   ${phone}

Productos de interés:
${productsList}

Mensaje:
${data.mensaje}
        `.trim(),
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
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors bg-white'
  const errorClass = 'mt-1 text-xs text-red-500'
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5'

  return (
    <>
      <SEOHead
        title="Contacto y Cotización | Key Solutions S.A.C — Tarjetas PVC Bancarias Lima Perú"
        description="Solicite cotización de tarjetas PVC bancarias, rollos térmicos, fundas RFID o formularios. Atendemos a bancos y empresas en Perú y Bolivia. Av. Raúl Ferrero 1542, La Molina, Lima. Tel: (+51) 949 284 735."
        keywords="cotización tarjetas bancarias PVC, contacto Key Solutions SAC, proveedor tarjetas bancarias Lima Peru, solicitar cotizacion rollos termicos fundas RFID, insumos financieros Bolivia Peru, La Molina Lima"
        path="/contacto"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-gold mb-5"
          >
            Estamos para ayudarle
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white"
          >
            Contáctenos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-300 text-lg"
          >
            Complete el formulario y nos comunicaremos a la brevedad con su cotización.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info sidebar */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="bg-navy-900 rounded-2xl p-8 text-white h-full">
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Teléfono</p>
                    <a href={`tel:${company.phone}`} className="hover:text-brand-gold transition-colors">
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                    <a href={`mailto:${company.email}`} className="hover:text-brand-gold transition-colors break-all">
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Dirección</p>
                    <span className="text-gray-200">{company.address}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <LinkedInIcon size={18} />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">LinkedIn</p>
                    <a
                      href={company.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-gold transition-colors"
                    >
                      Ver perfil
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-navy-700 text-xs text-gray-500">
                <p>RUC: {company.ruc}</p>
                <p className="mt-1">Atención: Lunes a Viernes</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-card p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={56} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-gray-500 mb-6">
                    Gracias por contactarnos. Le responderemos a la brevedad.
                  </p>
                  <button
                    onClick={() => setStatus(null)}
                    className="px-6 py-2.5 bg-brand-navy text-white rounded-xl text-sm font-semibold hover:bg-navy-800 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <h3 className="text-xl font-bold text-navy-900 mb-6">Envíenos su consulta</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nombre */}
                    <div>
                      <label className={labelClass}>Nombre *</label>
                      <input
                        {...register('nombre', { required: 'Campo obligatorio' })}
                        placeholder="Juan"
                        className={inputClass}
                      />
                      {errors.nombre && <p className={errorClass}>{errors.nombre.message}</p>}
                    </div>

                    {/* Apellido */}
                    <div>
                      <label className={labelClass}>Apellido *</label>
                      <input
                        {...register('apellido', { required: 'Campo obligatorio' })}
                        placeholder="Pérez"
                        className={inputClass}
                      />
                      {errors.apellido && <p className={errorClass}>{errors.apellido.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Correo electrónico *</label>
                      <input
                        type="email"
                        {...register('email', {
                          required: 'Campo obligatorio',
                          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' },
                        })}
                        placeholder="juan@empresa.com"
                        className={inputClass}
                      />
                      {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label className={labelClass}>Código de país</label>
                      <input
                        {...register('codigoPais')}
                        placeholder="+51"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Teléfono</label>
                      <input
                        type="tel"
                        {...register('telefono')}
                        placeholder="949 284 735"
                        className={inputClass}
                      />
                    </div>

                    {/* Products */}
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Productos de interés</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {PRODUCTS.map((p, i) => (
                          <label key={p} className="flex items-center gap-2.5 cursor-pointer group">
                            <input
                              type="checkbox"
                              {...register(`products.${i}`)}
                              className="w-4 h-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue/30 accent-brand-blue"
                            />
                            <span className="text-sm text-gray-700 group-hover:text-brand-blue transition-colors">
                              {p}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Mensaje *</label>
                      <textarea
                        rows={4}
                        {...register('mensaje', { required: 'Campo obligatorio' })}
                        placeholder="Cuéntenos sus necesidades o consultas..."
                        className={`${inputClass} resize-none`}
                      />
                      {errors.mensaje && <p className={errorClass}>{errors.mensaje.message}</p>}
                    </div>
                  </div>

                  {/* Error banner */}
                  {status === 'error' && (
                    <div className="mt-4 flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                      <AlertCircle size={16} />
                      Error al enviar el mensaje. Inténtelo nuevamente.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-6 w-full py-3.5 bg-brand-navy text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      'Enviar mensaje'
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
