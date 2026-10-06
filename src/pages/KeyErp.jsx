import { ArrowUpRight, Check } from 'lucide-react'
import SoftwareHero from '../components/ui/SoftwareHero'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'
import { company } from '../data/company'
import { erpModules, erpCustomization, erpDifferentiators } from '../data/software'
import { useLang } from '../i18n/LangContext'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'KeyERP',
  url: company.erpUrl,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  provider: { '@type': 'Organization', name: 'Key Solutions S.A.C' },
  description:
    'KeyERP: ERP del gasto administrativo para bancos, cooperativas e instituciones financieras de Bolivia y Perú. Almacenes, compras y cuentas por pagar, conciliación bancaria, contabilidad y presupuesto, activos y patrimonio, contratos y seguros, viáticos, proyectos, bóveda de valorados, paneles y Keia, un asistente con IA. Instalado en los servidores de la institución.',
}

/* Página puente: resume el producto y manda al sitio propio de KeyERP, que es donde está el detalle. */
export default function KeyErp() {
  const { t } = useLang()
  return (
    <>
      <SEOHead
        title={t("Key ERP (KeyERP) — ERP para bancos, cooperativas e instituciones financieras de Bolivia y Perú")}
        description={t("Key ERP (KeyERP) es el ERP de Key Solutions para bancos, cooperativas, IFD y cajas de Bolivia y Perú: once módulos —compras, contabilidad, activos, contratos, bóveda de valorados y más— y Keia, un asistente con IA. Se instala en los servidores de la institución y se licencia por módulos.")}
        keywords={t("Key ERP, KeyERP, Key ERP Bolivia, Key ERP Peru, ERP para bancos, ERP para cooperativas, ERP instituciones financieras, ERP Bolivia, ERP Peru, ERP banca, ERP bancario, ERP con inteligencia artificial, ERP gasto administrativo, venta software ERP, Key Solutions")}
        path="/key-erp"
        structuredData={structuredData}
      />

      <SoftwareHero
        lines={['KeyERP: el gasto', 'administrativo, con rastro', 'de punta a punta.'].map(t)}
        subtitle={t("Nuestro producto principal. Cada solicitud llega hasta su asiento contable con quién, cuándo y por qué. El sitio de KeyERP tiene el detalle de cada módulo, la seguridad y cómo se instala.")}
        primaryCta={{ label: t('Ir al sitio de KeyERP'), href: company.erpUrl, external: true }}
        secondaryCta={{ label: t('Solicitar una demo'), href: '/contacto' }}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionTitle
            center={false}
            title={t("Once módulos sobre un mismo núcleo")}
            subtitle={t("Almacenes y abastecimiento viene con toda instalación; los otros diez se activan por licencia. Comparten proveedores, centros de costo, aprobaciones y plan de cuentas.")}
          />
          <AnimatedSection>
            <ol className="divide-y divide-gray-200 border-y border-gray-200">
              {erpModules.map((m) => (
                <li key={m.title} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                  <h3 className="font-semibold text-navy-900">{t(m.title)}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{t(m.description)}</p>
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionTitle center={false} title={t("Configurado para cada empresa, sin tocar el programa")} />
          <AnimatedSection>
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {erpCustomization.map((c) => (
                <div key={c.title}>
                  <dt className="font-semibold text-navy-900">{t(c.title)}</dt>
                  <dd className="mt-1.5 text-sm text-gray-700 leading-relaxed">{t(c.description)}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionTitle center={false} title={t("Por qué KeyERP")} />
          <AnimatedSection>
            <ul className="space-y-4">
              {erpDifferentiators.map((d) => (
                <li key={d} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                  <Check size={18} className="mt-1 shrink-0 text-brand-blue" aria-hidden="true" />
                  {t(d)}
                </li>
              ))}
            </ul>
            <a
              href={company.erpUrl}
              rel="noopener"
              className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              {t('Ver KeyERP en detalle')}
              <ArrowUpRight size={17} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
