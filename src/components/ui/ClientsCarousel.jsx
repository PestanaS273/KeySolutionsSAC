import { clients } from '../../data/clients'
import AnimatedSection from './AnimatedSection'

/* Logos en rejilla fija. Un carrusel infinito no deja leer ninguno; una rejilla sí. */
export default function ClientsCarousel() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-center text-sm font-medium text-gray-500">
            Instituciones financieras que trabajan con nosotros en Perú y Bolivia
          </p>
        </AnimatedSection>
        <ul className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8 items-center">
          {clients.map((client, i) => (
            <AnimatedSection key={client.name} delay={i * 0.04}>
              <li className="flex items-center justify-center h-12">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-h-10 max-w-[130px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </li>
            </AnimatedSection>
          ))}
        </ul>
      </div>
    </section>
  )
}
