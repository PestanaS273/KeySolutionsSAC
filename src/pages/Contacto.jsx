import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import ContactForm from '../components/ui/ContactForm'
import AnimatedSection from '../components/ui/AnimatedSection'
import { company } from '../data/company'

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Contacto() {
  return (
    <>
      <SEOHead
        title="Contacto y cotización | Key Solutions S.A.C — Perú y Bolivia"
        description="Solicite cotización de tarjetas PVC bancarias, rollos térmicos, fundas RFID o formularios, o una demo de KeyERP. Key Solutions en Lima, Perú, y ACOVI Solutions en La Paz, Bolivia. contacto@keysolutionssac.com."
        keywords="cotización tarjetas bancarias PVC, contacto Key Solutions SAC, demo KeyERP, proveedor tarjetas bancarias Lima Peru, insumos financieros Bolivia Peru"
        path="/contacto"
      />

      <section className="bg-navy-950 py-20 px-4 sm:px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05] max-w-3xl text-balance"
          >
            Cuéntenos qué necesita y le respondemos con una propuesta concreta.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-5 text-lg text-blue-100/80 max-w-2xl"
          >
            Cotización de insumos con sus especificaciones técnicas, o una demo de KeyERP con los
            datos de su empresa.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
          <AnimatedSection>
            <address className="not-italic space-y-6 text-gray-700">
              <div>
                <p className="text-sm font-medium text-gray-500">Correo</p>
                <a href={`mailto:${company.email}`} className="mt-1 inline-flex items-center gap-2 font-semibold text-navy-900 hover:underline">
                  <Mail size={16} className="text-gray-400" /> {company.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Teléfono y WhatsApp</p>
                <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-2 font-semibold text-navy-900 hover:underline">
                  <Phone size={16} className="text-gray-400" /> {company.phone}
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Perú</p>
                <p className="mt-1 flex items-start gap-2">
                  <MapPin size={16} className="mt-1 shrink-0 text-gray-400" />
                  <span>
                    Key Solutions S.A.C.
                    <br />
                    {company.address}
                    <br />
                    <span className="text-sm text-gray-500">RUC {company.ruc}</span>
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Bolivia</p>
                <p className="mt-1 flex items-start gap-2">
                  <MapPin size={16} className="mt-1 shrink-0 text-gray-400" />
                  <span>{company.bolivia}</span>
                </p>
              </div>
              <div>
                <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:underline">
                  <LinkedInIcon size={16} /> LinkedIn
                </a>
              </div>
              <p className="text-sm text-gray-500">Lunes a viernes, 9:00 a 18:00</p>
            </address>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
