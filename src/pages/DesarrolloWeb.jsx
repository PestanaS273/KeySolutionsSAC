import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import SoftwareHero from '../components/ui/SoftwareHero'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'
import { webDevServices, webDevStack, webDevProcess } from '../data/software'
import { useLang } from '../i18n/LangContext'

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
  const { t } = useLang()

  return (
    <>
      <SEOHead
        title={t("Desarrollo Web Moderno y a Medida — Sitios, E-commerce y Portales")}
        description={t("Diseño y desarrollo de sitios web corporativos, landing pages, e-commerce y portales con tecnología moderna, código propio y arquitectura pensada para escalar. Perú y Bolivia.")}
        keywords={t("desarrollo web a medida Peru, diseño de paginas web empresas, desarrollo web escalable, e-commerce a medida Peru Bolivia, sitios web corporativos Peru")}
        path="/desarrollo-web"
        structuredData={structuredData}
      />

      <SoftwareHero
        lines={['Sitios web que', 'representan su marca'].map(t)}
        subtitle={t("Diseño y desarrollo a medida, con tecnología moderna y una arquitectura pensada para escalar junto a su negocio — sin plantillas genéricas.")}
        primaryCta={{ label: t('Cotizar mi sitio'), href: '/contacto' }}
        secondaryCta={{ label: t('Ver todas las soluciones'), href: '/soluciones-empresariales' }}
      />

      {/* ── SERVICIOS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label={t("Qué construimos")}
            title={t("De una landing simple a una tienda completa")}
            subtitle={t("Cada proyecto se diseña a medida — el punto de partida cambia según lo que su negocio necesita.")}
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
                      {t(s.title)}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{t(s.description)}</p>
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
            <p className="text-sm font-medium text-blue-100/70">
              {t('Tecnología moderna, sin ataduras a un solo proveedor')}
            </p>
          </AnimatedSection>
        </div>
        <ul className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-3">
          {webDevStack.map((tech) => (
            <li
              key={tech}
              className="px-4 py-2 rounded-lg border border-white/15 text-sm font-medium text-blue-100/85"
            >
              {t(tech)}
            </li>
          ))}
        </ul>
      </section>

      {/* ── PROCESO ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label={t("Cómo trabajamos")}
            title={t("Un proceso claro, de principio a fin")}
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {webDevProcess.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.1}>
                <div className="relative">
                  <span className="font-display text-5xl font-bold text-navy-100 leading-none">
                    {t(p.step)}
                  </span>
                  <h3 className="font-display font-bold text-navy-900 mt-3 mb-2 tracking-tight">
                    {t(p.title)}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{t(p.description)}</p>
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
              {t('¿Listo para renovar su presencia web?')}
            </h2>
            <p className="text-blue-200/75 text-lg mb-9 leading-relaxed">
              {t('Cuéntenos sobre su proyecto y le proponemos una solución a medida, sin compromiso.')}
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-9 py-4 bg-amber-400 text-navy-950 font-bold rounded-xl hover:bg-amber-300 active:bg-amber-500 transition-colors text-lg shadow-glow"
            >
              {t('Cotizar mi proyecto')}
              <ArrowRight size={19} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
