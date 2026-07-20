import { motion } from 'framer-motion'
import { productCategories } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import SectionTitle from '../components/ui/SectionTitle'
import ClientsCarousel from '../components/ui/ClientsCarousel'
import SEOHead from '../components/SEOHead'

export default function Productos() {
  return (
    <>
      <SEOHead
        title="Catálogo de Productos | Tarjetas PVC, Rollos Térmicos, Fundas RFID — Key Solutions S.A.C"
        description="Catálogo completo: tarjetas PVC bancarias VISA/Mastercard con chip EMV, rollos térmicos POS/ATM 80x80, fundas RFID anti-clonación, sobres PIN Mailer y formularios preimpresos para el sector financiero en Perú y Bolivia."
        keywords="catalogo tarjetas bancarias PVC, rollos termicos POS ATM, fundas RFID anticlon, sobres PIN mailer, formularios bancarios, productos sector financiero Peru Bolivia, insumos bancarios, tarjetas credito debito"
        path="/productos"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-gold mb-5"
          >
            Catálogo completo
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white"
          >
            Productos y Servicios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-300 text-lg"
          >
            Soluciones integrales para instituciones financieras y empresas en Perú y Bolivia.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Nuestro portafolio"
            title="Todo lo que necesita su institución"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ClientsCarousel />
    </>
  )
}
