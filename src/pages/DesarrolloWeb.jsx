import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import SoftwareHero from '../components/ui/SoftwareHero'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'
import { webDevServices, webDevStack, webDevProcess } from '../data/software'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Desarrollo web',
  provider: { '@type': 'Organization', name: 'Key Solutions S.A.C' },
  areaServed: ['PE', 'BO'],
  description:
    'Desarrollo de sitios web, landing pages, e-commerce y portales con tecnología moderna, diseño a medida y arquitectura escalable.',
}

export default function DesarrolloWeb() {
  const stackDoubled = [...webDevStack, ...webDevStack]

  return (
    <>
      <SEOHead
        title="Desarrollo Web Moderno y a Medida — Sitios, E-commerce y Portales"
        description="Diseño y desarrollo de sitios web corporativos, landing pages, e-commerce y portales con tecnología moderna, código propio y arquitectura pensada para escalar. Perú y Bolivia."
        keywords="desarrollo web a medida Peru, diseño de paginas web empresas, desarrollo web escalable, e-commerce a medida Peru Bolivia, sitios web corporativos Peru"
        path="/desarrollo-web"
        structuredData={structuredData}
      />

      <SoftwareHero
        eyebrow="Desarrollo Web"
        lines={['Sitios web que', 'representan su marca']}
        subtitle="Diseño y desarrollo a medida, con tecnología moderna y una arquitectura pensada para escalar junto a su negocio — sin plantillas genéricas."
        primaryCta={{ label: 'Cotizar mi sitio', href: '/contacto' }}
        secondaryCta={{ label: 'Ver todas las soluciones', href: '/soluciones-empresariales' }}
      />

      {/* ── SERVICIOS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Qué construimos"
            title="De una landing simple a una tienda completa"
            subtitle="Cada proyecto se diseña a medida — el punto de partida cambia según lo que su negocio necesita."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {webDevServices.map((s, i) => {
              const Icon = Icons[s.icon]
              return (
                <AnimatedSection key={s.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="bg-[#F8FAFC] rounded-2xl p-6 h-full border border-gray-100 hover:border-brand-blue/20 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center mb-4">
                      {Icon && <Icon size={20} className="text-amber-300" />}
                    </div>
                    <h3 className="font-display font-bold text-navy-900 mb-2 text-base tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── STACK TECNOLÓGICO ────────────────────────────────────────── */}
      <section className="py-16 bg-navy-950 border-y border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
          <AnimatedSection className="text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-300/60">
              Tecnología moderna, sin ataduras a un solo proveedor
            </p>
          </AnimatedSection>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee gap-4 w-max">
            {stackDoubled.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="flex-shrink-0 px-5 py-2.5 rounded-full border border-white/10 text-sm font-semibold text-blue-100/80"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Cómo trabajamos"
            title="Un proceso claro, de principio a fin"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {webDevProcess.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.1}>
                <div className="relative">
                  <span className="font-display text-5xl font-bold text-navy-100 leading-none">
                    {p.step}
                  </span>
                  <h3 className="font-display font-bold text-navy-900 mt-3 mb-2 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
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
              ¿Listo para renovar su presencia web?
            </h2>
            <p className="text-blue-200/75 text-lg mb-9 leading-relaxed">
              Cuéntenos sobre su proyecto y le proponemos una solución a medida, sin compromiso.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-9 py-4 bg-amber-400 text-navy-950 font-bold rounded-xl hover:bg-amber-300 active:bg-amber-500 transition-colors text-lg shadow-glow"
            >
              Cotizar mi proyecto
              <ArrowRight size={19} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
