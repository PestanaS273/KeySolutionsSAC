import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { sobres } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import ProductDetailHero from '../components/ui/ProductDetailHero'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'

const features = [
  'Diseño personalizado con identidad corporativa',
  'Impresión offset de alta definición',
  'Control de calidad en cada lote',
  'Tamaños estándar y a medida',
  'Papel de calidad certificada',
  'Sobres de seguridad anti-manipulación',
  'Ventana transparente en formatos carta',
  'Compatibles con sistemas de impresión variable',
]

export default function SobresPreimpresos() {
  return (
    <>
      <SEOHead
        title="Sobres PIN Mailer, Con Ventana y Formas Continuas Bancarias | Key Solutions S.A.C"
        description="Sobres de seguridad PIN Mailer para entrega de claves de tarjetas bancarias, sobres con ventana y formularios continuos preimpresos para el sector financiero. Fabricación a medida en Perú y Bolivia."
        keywords="sobre PIN mailer banco, PIN mailer seguridad tarjetas, sobre con ventana preimpreso, formas continuas bancarias, formularios continuos preimpresos, sobre seguridad bancario, sobre entrega tarjeta credito, formularios bancarios Peru Bolivia"
        path="/sobres-preimpresos"
      />

      <ProductDetailHero
        label="Formularios y sobres"
        title="Sobres y Formularios Preimpresos"
        subtitle="Formas continuas · PIN Mailer · Sobres con ventana — Para el sector financiero y empresarial"
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Catálogo"
            title="Formatos para cada necesidad"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sobres.map((item, i) => (
              <ProductCard key={item.title} product={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Características"
            title="Formularios hechos a su medida"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <AnimatedSection key={f} delay={i * 0.07}>
                <div className="flex items-start gap-3 p-4 bg-brand-light rounded-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue flex-shrink-0 mt-1.5" />
                  <p className="text-gray-700">{f}</p>
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
