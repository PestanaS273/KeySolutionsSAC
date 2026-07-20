import { Link } from 'react-router-dom'
import { Layers, ShieldCheck, Settings, Clock, ArrowRight } from 'lucide-react'
import SoftwareHero from '../components/ui/SoftwareHero'
import SoftwareServiceCard from '../components/ui/SoftwareServiceCard'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'
import { softwareServices } from '../data/software'

const reasons = [
  {
    icon: Settings,
    title: 'A medida, no genérico',
    description: 'Cada solución se diseña alrededor de cómo trabaja su empresa, no al revés.',
  },
  {
    icon: Layers,
    title: 'Un mismo equipo, tres frentes',
    description: 'Web, software interno y ERP se piensan como un solo ecosistema, no como proyectos aislados.',
  },
  {
    icon: ShieldCheck,
    title: 'Respaldo de una empresa establecida',
    description: 'Más de 20 años operando con instituciones financieras nos exigen rigor, seguridad y cumplimiento.',
  },
  {
    icon: Clock,
    title: 'Evolución continua',
    description: 'El software crece con módulos y funciones nuevas a medida que su negocio lo requiere.',
  },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Soluciones empresariales de software',
  provider: { '@type': 'Organization', name: 'Key Solutions S.A.C' },
  areaServed: ['PE', 'BO'],
  description:
    'Desarrollo web, software a medida y Key ERP: soluciones empresariales de tecnología para negocios en Perú y Bolivia.',
}

export default function SolucionesEmpresariales() {
  return (
    <>
      <SEOHead
        title="Soluciones Empresariales de Software — Desarrollo Web, Software a Medida y ERP"
        description="Además de insumos, Key Solutions desarrolla soluciones empresariales de software: sitios y aplicaciones web modernas, software a medida y Key ERP, nuestro sistema de gestión modular adaptable a cada empresa."
        keywords="soluciones empresariales software Peru, desarrollo software a medida Peru Bolivia, ERP empresarial modular, desarrollo web empresas Peru, Key Solutions software"
        path="/soluciones-empresariales"
        structuredData={structuredData}
      />

      <SoftwareHero
        eyebrow="Soluciones empresariales"
        lines={['Tecnología a medida', 'para su empresa']}
        subtitle="Además de insumos para el sector financiero, desarrollamos el software que su operación necesita: sitios web, sistemas internos y un ERP propio, modular y adaptable a cada cliente."
        primaryCta={{ label: 'Hablar con un asesor', href: '/contacto' }}
        secondaryCta={{ label: 'Conocer Key ERP', href: '/key-erp' }}
      />

      {/* ── SERVICIOS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Nuestras soluciones"
            title="Tres frentes, un mismo estándar de calidad"
            subtitle="De un sitio web a un sistema de gestión completo — cada solución se construye pensando en el crecimiento de su empresa."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareServices.map((service, i) => (
              <SoftwareServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIRNOS ────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Por qué Key Solutions"
            title="La misma exigencia que aplicamos al sector financiero"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.08}>
                <div className="bg-[#F8FAFC] rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <r.icon size={22} className="text-brand-blue" />
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2 text-base">{r.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{r.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #1E6FD9 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              ¿Qué solución necesita su empresa?
            </h2>
            <p className="text-blue-200/75 text-lg mb-9 leading-relaxed">
              Cuéntenos su proceso o su idea y le proponemos el camino más directo para resolverlo.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-9 py-4 bg-amber-400 text-navy-950 font-bold rounded-xl hover:bg-amber-300 active:bg-amber-500 transition-colors text-lg shadow-glow"
            >
              Conversemos
              <ArrowRight size={19} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
