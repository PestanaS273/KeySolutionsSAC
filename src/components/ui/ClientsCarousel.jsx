import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { clients } from '../../data/clients'
import { clientsBySector } from '../../data/trayectoria'
import AnimatedSection from './AnimatedSection'
import { useLang } from '../../i18n/LangContext'

const total = clientsBySector.reduce((n, s) => n + s.names.length, 0)

/* Logos en rejilla fija. Un carrusel infinito no deja leer ninguno; una rejilla sí. */
export default function ClientsCarousel() {
  const { t } = useLang()
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-center text-sm font-medium text-gray-500">
            {t('Algunas de las instituciones que han trabajado con nosotros en Perú y Bolivia')}
          </p>
        </AnimatedSection>
        <ul className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8 items-center">
          {clients.map((client, i) => (
            <AnimatedSection key={client.name} delay={i * 0.04}>
              <li className="flex items-center justify-center h-12">
                <img
                  src={client.logo}
                  alt={t(client.name)}
                  loading="lazy"
                  className="max-h-10 max-w-[130px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </li>
            </AnimatedSection>
          ))}
        </ul>
        <AnimatedSection className="mt-8 text-center">
          <Link to="/clientes" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors">
            {t('Más de N instituciones por sector').replace('N', total)} <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
