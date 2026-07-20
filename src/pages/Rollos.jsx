import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { rollosTerm } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import ProductDetailHero from '../components/ui/ProductDetailHero'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'

const specs = [
  'Medida estándar: 80 mm × 80 mm',
  'Compatible con impresoras POS y terminales',
  'Calidad certificada en metraje y diámetro',
  'Alta definición de impresión térmica',
  'Tamaños personalizados para ATM',
  'Rol autocopiante disponible',
  'Papel térmico libre de BPA',
  'Embalaje por rollos o cajas',
]

export default function Rollos() {
  return (
    <>
      <SEOHead
        title="Rollos Térmicos 80x80 para POS y ATM | Autocopiante — Key Solutions S.A.C Perú Bolivia"
        description="Rollos de papel térmico 80x80mm y autocopiante para impresoras POS y cajeros automáticos ATM. Alta calidad de impresión, metraje certificado y libre de BPA. Proveedor en Perú y Bolivia."
        keywords="rollos termicos 80x80, papel termico POS, rollos termicos ATM, rollo autocopiante, papel termico cajero automatico, rollo termico impresora punto venta, insumos POS termico Peru Bolivia, rollo termico banco"
        path="/rollos-termicos"
      />

      <ProductDetailHero
        label="Insumos para POS y ATM"
        title="Rollos Térmicos"
        subtitle="80×80 · Autocopiante · Tamaños personalizados para cajeros automáticos y terminales de pago"
      />

      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Tipos disponibles"
            title="Rollos para cada terminal"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {rollosTerm.map((item, i) => (
              <ProductCard key={item.title} product={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Especificaciones"
            title="Calidad garantizada en cada rollo"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specs.map((s, i) => (
              <AnimatedSection key={s} delay={i * 0.07}>
                <div className="flex items-start gap-3 p-4 bg-brand-light rounded-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue flex-shrink-0 mt-1.5" />
                  <p className="text-gray-700">{s}</p>
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
