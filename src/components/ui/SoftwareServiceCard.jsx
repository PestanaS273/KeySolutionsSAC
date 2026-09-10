import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

/* Una fila por servicio, sin icono en caja ni tarjeta: título, texto y enlace. */
export default function SoftwareServiceCard({ service, index = 0 }) {
  const linkCls =
    'inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all duration-200'
  return (
    <AnimatedSection delay={index * 0.08} className="h-full">
      <div className="h-full flex flex-col border-t-2 border-navy-900 pt-5">
        <h3 className="font-display text-xl font-bold text-navy-900 tracking-tight">{service.title}</h3>
        <p className="mt-1 text-sm font-medium text-gray-500">{service.tagline}</p>
        <p className="mt-3 text-[0.95rem] text-gray-700 leading-relaxed flex-1">{service.description}</p>
        {service.external ? (
          <a href={service.href} className={linkCls} rel="noopener">
            Ver KeyERP <ArrowUpRight size={15} />
          </a>
        ) : (
          <Link to={service.href} className={linkCls}>
            Conocer más <ArrowRight size={15} />
          </Link>
        )}
      </div>
    </AnimatedSection>
  )
}
