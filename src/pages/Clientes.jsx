import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { clients } from '../data/clients'
import SEOHead from '../components/SEOHead'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'

const clientesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Clientes — Key Solutions S.A.C',
  description: 'Instituciones financieras y bancarias de Bolivia y Perú que confían en Key Solutions S.A.C como proveedor de tarjetas PVC bancarias, rollos térmicos y fundas RFID.',
  url: 'https://keysolutionssac.com/clientes',
  mainEntity: {
    '@type': 'Organization',
    name: 'Key Solutions S.A.C',
    url: 'https://keysolutionssac.com',
    knowsAbout: 'Tarjetas PVC bancarias chip EMV, rollos térmicos POS ATM, fundas RFID',
  },
}

export default function Clientes() {
  return (
    <>
      <SEOHead
        title="Clientes y Casos de Éxito | Bancos y Cooperativas — Key Solutions S.A.C"
        description="Instituciones financieras de Bolivia y Perú que confían en Key Solutions S.A.C como proveedor de tarjetas PVC bancarias con chip EMV, rollos térmicos y fundas RFID. Banco Bisa, BNB, Banco Unión, Red Enlace y más."
        keywords="clientes tarjetas bancarias PVC Peru Bolivia, bancos Bolivia proveedor tarjetas, Banco Bisa tarjetas, BNB Bolivia tarjetas PVC, Banco Union Bolivia, Red Enlace Bolivia, cooperativas Bolivia tarjetas, sector bancario Bolivia Peru proveedor insumos"
        path="/clientes"
        structuredData={clientesStructuredData}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-gold mb-5"
          >
            Confianza del sector financiero
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
          >
            Instituciones que confían en nosotros
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-gray-300 text-lg leading-relaxed"
          >
            Más de 11 instituciones financieras en Bolivia y Perú nos eligen como
            proveedor de tarjetas PVC bancarias, rollos térmicos y fundas RFID.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-brand-light border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: '11+', label: 'Clientes institucionales' },
              { value: '+20', label: 'Años de experiencia' },
              { value: '2', label: 'Países atendidos' },
              { value: '100%', label: 'Satisfacción garantizada' },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.08}>
                <div className="text-center bg-white rounded-2xl p-5 shadow-card">
                  <p className="text-3xl font-extrabold text-brand-blue">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Nuestros clientes"
            title="Instituciones del sector financiero"
            subtitle="Bancos, cooperativas y redes de pago en Bolivia y Perú que confían en Key Solutions S.A.C."
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, i) => (
              <AnimatedSection key={client.name} delay={i * 0.06}>
                <div className="bg-brand-light rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-card transition-shadow duration-300 h-32">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="h-12 max-w-[120px] object-contain"
                    loading="lazy"
                  />
                  <p className="text-xs font-medium text-gray-500 text-center">{client.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Confidencialidad */}
      <section className="py-14 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-sm text-gray-500 italic mb-6">
              Por acuerdos de confidencialidad con nuestros clientes del sector financiero, algunos nombres e instituciones no se muestran públicamente. Puede solicitar referencias directas a través de nuestro formulario de contacto.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-navy text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors"
            >
              Solicitar referencias
              <ArrowRight size={17} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-brand-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              ¿Su institución necesita tarjetas PVC bancarias?
            </h2>
            <p className="text-gray-300 mb-8">
              Únase a las instituciones financieras que ya confían en Key Solutions S.A.C. Solicite una cotización personalizada.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-navy-950 font-bold rounded-xl hover:bg-yellow-400 transition-colors text-lg shadow-glow"
            >
              Solicitar cotización
              <ArrowRight size={19} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
