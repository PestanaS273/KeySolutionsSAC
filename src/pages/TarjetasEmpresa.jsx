import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { tarjetasEmpresa } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import ProductDetailHero from '../components/ui/ProductDetailHero'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'
import frenteReverso from '../assets/frente-reverso.avif'

const sectors = [
  'Hoteles y complejos hoteleros',
  'Casinos y entretenimiento',
  'Empresas de seguros',
  'Sistemas de transporte',
  'Instituciones educativas',
  'Corporaciones y empresas',
]

export default function TarjetasEmpresa() {
  return (
    <>
      <SEOHead
        title="Tarjetas PVC Empresa, Hotel y Control de Acceso | Key Solutions S.A.C"
        description="Tarjetas PVC para hoteles, casinos, corporaciones y sistemas de control de acceso. Chip, banda magnética y código de barras. Impresión personalizada. Perú y Bolivia."
        keywords="tarjetas PVC empresa, tarjetas hotel llave, tarjetas control acceso, tarjetas identificacion corporativa, tarjeta magnetica hotel, tarjetas PVC personalizadas, carnet corporativo, tarjeta casino, tarjeta acceso Peru Bolivia"
        path="/tarjetas-empresa"
      />

      <ProductDetailHero
        label="Tarjetas corporativas"
        title="Tarjetas Empresa"
        subtitle="Identificación · Control de acceso · Llaves de hotel — Soluciones PVC para el sector empresarial"
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Tipos disponibles"
            title="Tarjetas para cada necesidad empresarial"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {tarjetasEmpresa.map((card, i) => (
              <ProductCard key={card.title} product={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection direction="right" className="order-2 lg:order-1">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue">
              Sectores que atendemos
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy-900 mb-6">
              Diseñadas para su industria
            </h2>
            <ul className="space-y-3">
              {sectors.map((s) => (
                <li key={s} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-brand-navy text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors"
            >
              Solicitar cotización
              <ArrowRight size={17} />
            </Link>
          </AnimatedSection>
          <AnimatedSection direction="left" className="order-1 lg:order-2">
            <img
              src={frenteReverso}
              alt="Tarjeta empresa"
              className="w-full max-w-md mx-auto rounded-2xl shadow-card-hover animate-float"
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
