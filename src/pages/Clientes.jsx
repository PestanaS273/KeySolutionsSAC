import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { clients } from '../data/clients'
import { clientsBySector, partners } from '../data/trayectoria'
import SEOHead from '../components/SEOHead'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Clientes — Key Solutions S.A.C',
  description:
    'Bancos, cooperativas, mutuales, aseguradoras, telecomunicaciones y entidades públicas de Bolivia y Perú que han trabajado con Key Solutions.',
  url: 'https://keysolutionssac.com/clientes',
  mainEntity: { '@type': 'Organization', name: 'Key Solutions S.A.C', url: 'https://keysolutionssac.com' },
}

const total = clientsBySector.reduce((n, s) => n + s.names.length, 0)

export default function Clientes() {
  return (
    <>
      <SEOHead
        title="Clientes | Bancos, cooperativas y mutuales de Bolivia y Perú — Key Solutions S.A.C"
        description={`${total} instituciones de Bolivia y Perú han trabajado con Key Solutions: Banco Bisa, Banco Mercantil Santa Cruz, Banco Sol, Banco Unión, BNB, Banco FIE, Banco Económico, cooperativas, mutuales, AFP, aseguradoras y telecomunicaciones.`}
        keywords="clientes Key Solutions, bancos Bolivia proveedor tarjetas, Banco Bisa, Banco Mercantil Santa Cruz, Banco Sol, Banco Union, BNB, Banco FIE, cooperativas Bolivia, mutuales Bolivia, Red Enlace, ATC Bolivia"
        path="/clientes"
        structuredData={structuredData}
      />

      <section className="bg-navy-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-4xl text-balance"
          >
            Instituciones que han trabajado con nosotros.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 text-lg text-blue-100/80 max-w-2xl leading-relaxed"
          >
            Bancos, cooperativas, mutuales, fondos, aseguradoras, empresas de telecomunicaciones y
            entidades públicas de Bolivia y Perú, a lo largo de más de veinte años. Tarjetas,
            insumos de operación y software.
          </motion.p>
        </div>
      </section>

      {/* Logos */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10 items-center">
            {clients.map((client, i) => (
              <AnimatedSection key={client.name} delay={i * 0.04}>
                <li className="flex items-center justify-center h-12">
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    className="max-h-11 max-w-[140px] object-contain"
                  />
                </li>
              </AnimatedSection>
            ))}
          </ul>
        </div>
      </section>

      {/* Por sector */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle center={false} title="Por sector" />
          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {clientsBySector.map((s, i) => (
              <AnimatedSection key={s.sector} delay={i * 0.05}>
                <h3 className="border-t-2 border-navy-900 pt-4 font-display text-lg font-bold text-navy-900">
                  {s.sector}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
                  {s.names.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12 max-w-3xl">
            <p className="text-sm text-gray-500 leading-relaxed">
              Algunas instituciones han cambiado de nombre o se han integrado a otras desde que
              trabajamos con ellas; se mencionan con el nombre con el que se contrató. Por acuerdos de
              confidencialidad, otras no se listan. Podemos dar referencias directas a pedido.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Colaboradores */}
      <section className="py-20 bg-[#F8FAFC] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionTitle
            center={false}
            title="Empresas con las que colaboramos"
            subtitle="Fabricantes y especialistas con los que producimos tarjetas, valorados e impresos."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {partners.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.08}>
                <div className="border-t-2 border-navy-900 pt-5 h-full">
                  <img src={p.logo} alt={p.name} className="h-9 w-auto object-contain" loading="lazy" />
                  <h3 className="mt-3 font-display text-xl font-bold text-navy-900">{p.name}</h3>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">{p.body}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
                  >
                    {p.url.replace('https://', '')} <ArrowUpRight size={14} />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-700">¿Su institución necesita una cotización o referencias directas?</p>
          <Link to="/contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors">
            Contacto <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
