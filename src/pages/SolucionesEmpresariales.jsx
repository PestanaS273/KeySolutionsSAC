import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SoftwareHero from '../components/ui/SoftwareHero'
import SoftwareServiceCard from '../components/ui/SoftwareServiceCard'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'
import { softwareServices } from '../data/software'
import { useLang } from '../i18n/LangContext'

const reasons = [
  {
    title: 'A medida, no genérico',
    description: 'Cada solución se diseña alrededor de cómo trabaja su empresa, no al revés.',
  },
  {
    title: 'Un mismo equipo, tres frentes',
    description: 'Web, software interno y ERP se piensan como un solo ecosistema, no como proyectos aislados.',
  },
  {
    title: 'Respaldo de una empresa establecida',
    description: 'Más de 20 años operando con instituciones financieras nos exigen rigor, seguridad y cumplimiento.',
  },
  {
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
  const { t } = useLang()
  return (
    <>
      <SEOHead
        title={t("Desarrollo de software en Bolivia y Perú — Web, a medida y Key ERP | Key Solutions")}
        description={t("Además de insumos, Key Solutions desarrolla soluciones empresariales de software: sitios y aplicaciones web modernas, software a medida y Key ERP, nuestro sistema de gestión modular adaptable a cada empresa.")}
        keywords={t("desarrollo software Bolivia, desarrollo software Peru, venta de software, software empresarial Bolivia, software a medida Peru Bolivia, desarrollo web Bolivia, ERP Bolivia, ERP Peru, Key ERP, Key Solutions software")}
        path="/soluciones-empresariales"
        structuredData={structuredData}
      />

      <SoftwareHero
        lines={['Software para empresas', 'que ya saben lo que', 'necesitan.'].map(t)}
        subtitle={t("KeyERP, nuestro sistema de gestión del gasto administrativo, y el desarrollo de sitios web y sistemas a medida. El mismo equipo, la misma exigencia que aprendimos con bancos.")}
        primaryCta={{ label: t('Conocer KeyERP'), href: 'https://keyerp.keysolutionssac.com', external: true }}
        secondaryCta={{ label: t('Hablar con nosotros'), href: '/contacto' }}
      />

      {/* ── SERVICIOS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label={t("Nuestras soluciones")}
            title={t("Tres frentes, un mismo estándar de calidad")}
            subtitle={t("De un sitio web a un sistema de gestión completo — cada solución se construye pensando en el crecimiento de su empresa.")}
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
            label={t("Por qué Key Solutions")}
            title={t("La misma exigencia que aplicamos al sector financiero")}
          />
          <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.06}>
                <dt className="font-semibold text-navy-900">{t(r.title)}</dt>
                <dd className="mt-1.5 text-sm text-gray-700 leading-relaxed">{t(r.description)}</dd>
              </AnimatedSection>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
              {t('¿Qué solución necesita su empresa?')}
            </h2>
            <p className="text-blue-200/75 text-lg mb-9 leading-relaxed">
              {t('Cuéntenos su proceso o su idea y le proponemos el camino más directo para resolverlo.')}
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy-950 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              {t('Conversemos')}
              <ArrowRight size={19} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
