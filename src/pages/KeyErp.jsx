import { ArrowUpRight, Check } from 'lucide-react'
import SoftwareHero from '../components/ui/SoftwareHero'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'
import { company } from '../data/company'
import { erpModules, erpCustomization, erpDifferentiators } from '../data/software'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'KeyERP',
  url: company.erpUrl,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  provider: { '@type': 'Organization', name: 'Key Solutions S.A.C' },
  description:
    'KeyERP: sistema de gestión del gasto administrativo. Compras, cuentas por pagar, contabilidad, activos fijos, contratos, viáticos, caja chica, presupuesto y paneles, instalado en los servidores de la empresa.',
}

/* Página puente: resume el producto y manda al sitio propio de KeyERP, que es donde está el detalle. */
export default function KeyErp() {
  return (
    <>
      <SEOHead
        title="KeyERP — Sistema de gestión del gasto administrativo"
        description="KeyERP es el sistema de Key Solutions para el gasto administrativo: compras, cuentas por pagar, contabilidad, activos fijos, contratos, viáticos, caja chica y presupuesto. Se instala en los servidores de la empresa y se licencia por módulos."
        keywords="KeyERP, ERP gasto administrativo, sistema de compras y cuentas por pagar, control de presupuesto, ERP Peru Bolivia, Key Solutions"
        path="/key-erp"
        structuredData={structuredData}
      />

      <SoftwareHero
        lines={['KeyERP: el gasto', 'administrativo, con rastro', 'de punta a punta.']}
        subtitle="Nuestro producto principal. Cada solicitud llega hasta su asiento contable con quién, cuándo y por qué. El sitio de KeyERP tiene el detalle de cada módulo, la seguridad y cómo se instala."
        primaryCta={{ label: 'Ir al sitio de KeyERP', href: company.erpUrl, external: true }}
        secondaryCta={{ label: 'Solicitar una demo', href: '/contacto' }}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionTitle
            center={false}
            title="Nueve módulos sobre un mismo núcleo"
            subtitle="Comparten proveedores, centros de costo, aprobaciones y plan de cuentas. Se activan por licencia; sumar uno después no exige reinstalar nada."
          />
          <AnimatedSection>
            <ol className="divide-y divide-gray-200 border-y border-gray-200">
              {erpModules.map((m) => (
                <li key={m.title} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                  <h3 className="font-semibold text-navy-900">{m.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{m.description}</p>
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionTitle center={false} title="Configurado para cada empresa, sin tocar el programa" />
          <AnimatedSection>
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {erpCustomization.map((c) => (
                <div key={c.title}>
                  <dt className="font-semibold text-navy-900">{c.title}</dt>
                  <dd className="mt-1.5 text-sm text-gray-700 leading-relaxed">{c.description}</dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionTitle center={false} title="Por qué KeyERP" />
          <AnimatedSection>
            <ul className="space-y-4">
              {erpDifferentiators.map((d) => (
                <li key={d} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                  <Check size={18} className="mt-1 shrink-0 text-brand-blue" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
            <a
              href={company.erpUrl}
              rel="noopener"
              className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              Ver KeyERP en detalle
              <ArrowUpRight size={17} />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
