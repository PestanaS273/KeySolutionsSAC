import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SoftwareHero from '../components/ui/SoftwareHero'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'
import { customSoftwareUseCases, customSoftwareApproach } from '../data/software'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Desarrollo de software a medida',
  provider: { '@type': 'Organization', name: 'Key Solutions S.A.C' },
  areaServed: ['PE', 'BO'],
  description:
    'Desarrollo de software a medida: automatización de procesos, integraciones entre sistemas y aplicaciones internas de gestión.',
}

export default function SoftwareAMedida() {
  return (
    <>
      <SEOHead
        title="Software a Medida — Automatización, Integraciones y Apps Internas"
        description="Desarrollamos el software que su operación necesita: automatización de procesos, integraciones entre sistemas existentes, paneles de gestión y aplicaciones internas. Perú y Bolivia."
        keywords="desarrollo software a medida empresas, automatizacion de procesos software, integraciones de sistemas empresariales, aplicaciones internas de gestion, software empresarial Peru Bolivia"
        path="/software-a-medida"
        structuredData={structuredData}
      />

      <SoftwareHero
        eyebrow="Software a Medida"
        lines={['El sistema que su', 'operación necesita']}
        subtitle="Diseñamos el software alrededor de cómo trabaja su equipo hoy: automatización de procesos, integraciones y herramientas internas que se adaptan a su empresa, no al revés."
        primaryCta={{ label: 'Contar mi proceso', href: '/contacto' }}
        secondaryCta={{ label: 'Ver todas las soluciones', href: '/soluciones-empresariales' }}
      />

      {/* ── CASOS DE USO ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Qué resolvemos"
            title="Software para los procesos que hoy dependen de hojas de cálculo"
            subtitle="Cada empresa tiene procesos que ya funcionan, pero que consumen tiempo y son propensos a errores manuales."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {customSoftwareUseCases.map((u, i) => {
              const Icon = Icons[u.icon]
              return (
                <AnimatedSection key={u.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="flex items-start gap-5 bg-[#F8FAFC] rounded-2xl p-7 border border-gray-100 hover:shadow-card transition-all duration-300 h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      {Icon && <Icon size={22} className="text-brand-blue" />}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-navy-900 mb-2 tracking-tight">
                        {u.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{u.description}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ENFOQUE DE TRABAJO ───────────────────────────────────────── */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-300/90">
                  Nuestro enfoque
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Software construido sobre su proceso real
              </h2>
            </AnimatedSection>
          </div>
          <div className="space-y-5">
            {customSoftwareApproach.map((a, i) => (
              <AnimatedSection key={a.title} delay={i * 0.1}>
                <div className="flex items-start gap-5 rounded-2xl p-6 border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <CheckCircle2 size={22} className="text-amber-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-white mb-1 tracking-tight">{a.title}</h3>
                    <p className="text-sm text-blue-200/70 leading-relaxed">{a.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight tracking-tight">
              ¿Qué proceso quiere dejar de hacer a mano?
            </h2>
            <p className="text-gray-500 text-lg mb-9 leading-relaxed">
              Cuéntenos cómo trabaja hoy su equipo y le proponemos una solución concreta.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-9 py-4 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 transition-colors text-lg"
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
