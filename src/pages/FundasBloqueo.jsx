import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { fundasBloqueo } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import ProductDetailHero from '../components/ui/ProductDetailHero'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'

const benefits = [
  'Bloquea señales RFID / NFC al 100%',
  'Papel aluminio de alta calidad resistente al agua',
  'Diseño slim — cabe en cualquier billetera',
  'Impresión full color con logo corporativo',
  'Disponible en múltiples colores y tamaños',
  'Producción por lote para distribución masiva',
]

export default function FundasBloqueo() {
  return (
    <>
      <SEOHead
        title="Fundas de Bloqueo RFID Anti-Clonación para Tarjetas Bancarias | Key Solutions S.A.C"
        description="Fundas de papel aluminio para bloqueo RFID: proteja sus tarjetas de crédito y débito contra clonación NFC. Diseño slim, impermeables y personalizables con logo corporativo. Distribución en Perú y Bolivia."
        keywords="fundas bloqueo RFID, funda anti clonacion tarjetas, protector RFID tarjeta credito debito, sobre aluminio RFID, bloqueo NFC tarjetas bancarias, funda rfid personalizada banco, proteccion tarjetas contactless Peru Bolivia"
        path="/fundas-rfid"
      />

      <ProductDetailHero
        label="Seguridad de tarjetas"
        title="Fundas de Bloqueo RFID"
        subtitle="Protección anti-clonación para tarjetas de débito, crédito y documentos personales"
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Modelos disponibles"
            title="Protección que se adapta a su marca"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {fundasBloqueo.map((item, i) => (
              <ProductCard key={item.title} product={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Características"
            title="Por qué elegir nuestras fundas RFID"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <AnimatedSection key={b} delay={i * 0.07}>
                <div className="flex items-start gap-3 p-4 bg-brand-light rounded-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue flex-shrink-0 mt-1.5" />
                  <p className="text-gray-700">{b}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-navy text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors"
            >
              Solicitar cotización
              <ArrowRight size={17} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
