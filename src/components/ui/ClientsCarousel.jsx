import { clients } from '../../data/clients'
import AnimatedSection from './AnimatedSection'

export default function ClientsCarousel() {
  // Duplicate array so the marquee loops seamlessly
  const doubled = [...clients, ...clients]

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <AnimatedSection className="text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
            Empresas que confían en nosotros
          </p>
        </AnimatedSection>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-12 w-max">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center h-14 px-4"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 max-w-[120px] object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
