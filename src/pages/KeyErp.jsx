import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SoftwareHero from '../components/ui/SoftwareHero'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'
import { erpModules, erpCustomization, erpDifferentiators } from '../data/software'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Key ERP',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web / On-premise',
  provider: { '@type': 'Organization', name: 'Key Solutions S.A.C' },
  description:
    'Key ERP: sistema de gestión empresarial modular, con módulos de inventario, compras, contabilidad, activos fijos, contratos, viáticos, proyectos y BI que se activan según cada empresa.',
}

export default function KeyErp() {
  return (
    <>
      <SEOHead
        title="Key ERP — Sistema de Gestión Empresarial Modular y Adaptable"
        description="Key ERP es nuestro sistema de gestión propio: un motor central con módulos de inventario, compras, contabilidad, activos fijos, contratos, viáticos, proyectos y BI que se activan según lo que cada empresa necesita."
        keywords="ERP empresarial modular, sistema de gestion empresarial Peru Bolivia, ERP adaptable por cliente, software de gestion inventario compras contabilidad, Key ERP"
        path="/key-erp"
        structuredData={structuredData}
      />

      <SoftwareHero
        eyebrow="Key ERP"
        lines={['Un solo sistema,', 'adaptable a su empresa']}
        subtitle="Key ERP es nuestro sistema de gestión propio: un motor central sobre el que se activan los módulos que su empresa necesita, con los parámetros configurados a su medida."
        primaryCta={{ label: 'Solicitar información', href: '/contacto' }}
        secondaryCta={{ label: 'Ver todas las soluciones', href: '/soluciones-empresariales' }}
      />

      {/* ── MÓDULOS ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Módulos"
            title="Un motor central, ocho módulos activables"
            subtitle="Cada empresa empieza con lo que necesita hoy y suma módulos a medida que crece — sin migrar datos ni reinstalar nada."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {erpModules.map((m, i) => {
              const Icon = Icons[m.icon]
              return (
                <AnimatedSection key={m.title} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="relative bg-[#F8FAFC] rounded-2xl p-6 h-full border border-gray-100 hover:border-brand-blue/20 overflow-hidden transition-colors duration-300"
                  >
                    <span
                      aria-hidden="true"
                      className="font-display absolute -top-2 right-3 text-6xl font-bold text-navy-100 select-none"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="relative w-11 h-11 rounded-xl bg-navy-900 flex items-center justify-center mb-4">
                      {Icon && <Icon size={19} className="text-amber-300" />}
                    </div>
                    <h3 className="relative font-display font-bold text-navy-900 mb-2 text-sm tracking-tight">
                      {m.title}
                    </h3>
                    <p className="relative text-xs text-gray-500 leading-relaxed">{m.description}</p>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CUSTOMIZACIÓN ─────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <AnimatedSection>
              <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-400/20 text-amber-300 mb-4">
                Customización integrada
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto">
                No es un ERP genérico — es el suyo
              </h2>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {erpCustomization.map((c, i) => {
              const Icon = Icons[c.icon]
              return (
                <AnimatedSection key={c.title} delay={i * 0.08}>
                  <div
                    className="rounded-2xl p-6 h-full border border-white/10 hover:border-amber-400/30 transition-colors duration-300"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-amber-400/15 flex items-center justify-center mb-4">
                      {Icon && <Icon size={19} className="text-amber-300" />}
                    </div>
                    <h3 className="font-display font-bold text-white mb-2 text-sm tracking-tight">
                      {c.title}
                    </h3>
                    <p className="text-xs text-blue-200/70 leading-relaxed">{c.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIADORES ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Por qué Key ERP"
            title="Pensado para instalarse rápido y crecer sin fricción"
          />
          <div className="mt-10 space-y-4">
            {erpDifferentiators.map((d, i) => (
              <AnimatedSection key={d} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-[#F8FAFC] rounded-2xl p-5">
                  <CheckCircle2 size={20} className="text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-relaxed">{d}</p>
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
              ¿Qué módulo necesita su empresa primero?
            </h2>
            <p className="text-blue-200/75 text-lg mb-9 leading-relaxed">
              Conversemos sobre su operación y le mostramos cómo Key ERP se adapta a su empresa.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-9 py-4 bg-amber-400 text-navy-950 font-bold rounded-xl hover:bg-amber-300 active:bg-amber-500 transition-colors text-lg shadow-glow"
            >
              Solicitar información
              <ArrowRight size={19} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
