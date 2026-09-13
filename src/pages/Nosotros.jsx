import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import ClientsCarousel from '../components/ui/ClientsCarousel'
import SEOHead from '../components/SEOHead'
import { company } from '../data/company'
import { tracks, installedSystems, partners, presence, directors } from '../data/trayectoria'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Nosotros — Key Solutions S.A.C',
  url: 'https://keysolutionssac.com/nosotros',
  mainEntity: {
    '@type': 'Organization',
    name: 'Key Solutions S.A.C',
    url: 'https://keysolutionssac.com',
    foundingLocation: 'Lima, Perú',
    areaServed: ['PE', 'BO'],
    knowsAbout: [
      'Tarjetas bancarias EMV',
      'Insumos para operación bancaria',
      'Canales electrónicos bancarios',
      'Administración de filas',
      'Mensajería SWIFT',
      'ERP de gasto administrativo',
    ],
  },
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Nosotros() {
  return (
    <>
      <SEOHead
        title="Nosotros | Key Solutions S.A.C — Más de 20 años con el sector financiero de Perú y Bolivia"
        description="Key Solutions S.A.C y ACOVI Solutions Bolivia: más de 20 años proveyendo tarjetas bancarias, insumos de operación y software a bancos, cooperativas y mutuales de Perú y Bolivia. Canales electrónicos, administración de filas, SWIFT y KeyERP."
        keywords="Key Solutions SAC, ACOVI Solutions Bolivia, proveedor sector financiero Peru Bolivia, tarjetas bancarias EMV, canales electronicos bancarios, administracion de filas, SWIFT comercio exterior, KeyERP"
        path="/nosotros"
        structuredData={structuredData}
      />

      {/* Cabecera */}
      <section className="bg-navy-950 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h1
            {...fade(0.05)}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight max-w-4xl text-balance"
          >
            Más de veinte años trabajando para el sector financiero de Perú y Bolivia.
          </motion.h1>
          <motion.p {...fade(0.18)} className="mt-7 text-lg text-blue-100/80 leading-relaxed max-w-2xl">
            Empezamos proveyendo tarjetas bancarias y los insumos con los que opera una agencia.
            Después construimos el software que corre detrás del mostrador: canales electrónicos,
            filas, mensajería SWIFT. Hoy ese recorrido está en KeyERP, nuestro producto.
          </motion.p>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionTitle center={false} title="Dos empresas, un mismo equipo" />
          <AnimatedSection>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Key Solutions S.A.C. opera desde Lima y atiende a clientes en Perú y Bolivia. En
                Bolivia, las ventas y la atención se hacen a través de ACOVI Solutions Bolivia S.R.L.,
                con presencia en La Paz, Santa Cruz y Cochabamba. Las dos empresas comparten el
                mismo equipo y la misma forma de trabajar.
              </p>
              <p>
                Nuestros clientes son bancos, cooperativas de ahorro y crédito, mutuales, fondos,
                aseguradoras, empresas de telecomunicaciones y entidades públicas. Lo que tienen en
                común es que exigen especificaciones exactas, plazos que se cumplen y un proveedor
                que sigue ahí el año siguiente.
              </p>
            </div>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              {presence.map((p) => (
                <div key={p.country} className="border-t border-gray-200 pt-5">
                  <dt className="font-display text-xl font-bold text-navy-900">{p.country}</dt>
                  <dd className="mt-2 text-sm text-gray-700 leading-relaxed">
                    {p.company}
                    <br />
                    {p.cities}
                    <br />
                    <span className="text-gray-500">{p.detail}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </section>

      {/* Dirección: oculta por decisión del 2026-09-13. Para mostrarla, cambiar `false` por `true`. */}
      {false && (
        <>
      {/* Dirección */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionTitle
            center={false}
            title="Quiénes están al frente"
            subtitle="Dos socios con el mismo peso en la empresa, cada uno al frente de un área."
          />
          <AnimatedSection>
            <dl className="grid gap-8 sm:grid-cols-2">
              {directors.map((d) => (
                <div key={d.name} className="border-t-2 border-navy-900 pt-5">
                  <dt className="font-display text-xl font-bold text-navy-900">{d.name}</dt>
                  <dd className="mt-1 text-sm font-semibold text-brand-blue">{d.role}</dd>
                  <dd className="mt-3 text-sm text-gray-700 leading-relaxed">{d.body}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </section>

        </>
      )}

      {/* Líneas de trabajo */}
      <section className="py-20 bg-[#F8FAFC] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            center={false}
            title="Tres líneas de trabajo, una misma exigencia"
            subtitle="Cada una nació de una necesidad concreta de una institución financiera y se quedó porque siguió resolviéndola."
          />
          <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
            {tracks.map((t, i) => (
              <AnimatedSection key={t.title} delay={i * 0.06}>
                <div className="grid gap-4 py-8 lg:grid-cols-[1fr_1.4fr_1fr] lg:gap-12">
                  <h3 className="font-display text-2xl font-bold text-navy-900 tracking-tight">{t.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{t.body}</p>
                  <ul className="space-y-1.5 text-sm text-gray-700">
                    {t.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <Check size={15} className="mt-1 shrink-0 text-brand-blue" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos de software */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <SectionTitle
              center={false}
              title="Software que ya corre en instituciones financieras"
              subtitle="Sistemas que desarrollamos e instalamos en los bancos, cooperativas y mutuales que confiaron en nosotros. Es el mismo equipo que hoy construye KeyERP."
            />
            <a
              href={company.erpUrl}
              rel="noopener"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              Conocer KeyERP
              <ArrowUpRight size={16} />
            </a>
          </div>
          <AnimatedSection>
            <dl className="divide-y divide-gray-200 border-y border-gray-200">
              {installedSystems.map((p) => (
                <div key={p.system} className="grid gap-1 py-4 sm:grid-cols-[15rem_1fr] sm:gap-6">
                  <dt className="font-semibold text-navy-900">{p.system}</dt>
                  <dd className="text-sm text-gray-700 leading-relaxed">{p.body}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </section>

      {/* Colaboradores */}
      <section className="py-20 bg-[#F8FAFC] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionTitle
            center={false}
            title="Con quiénes trabajamos"
            subtitle="Fabricantes y especialistas con los que producimos. Cada uno cubre una parte que no tiene sentido hacer solos."
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

      <ClientsCarousel />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-700">La lista completa de instituciones, por sector, está en la página de clientes.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/clientes" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-navy-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Ver clientes
            </Link>
            <Link to="/contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors">
              Contacto <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
