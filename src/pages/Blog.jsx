import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { blogPosts } from '../data/blog'
import SEOHead from '../components/SEOHead'
import AnimatedSection from '../components/ui/AnimatedSection'
import SectionTitle from '../components/ui/SectionTitle'

const categoryColors = {
  'Tarjetas Bancarias': 'bg-blue-100 text-blue-700',
  'Rollos Térmicos': 'bg-orange-100 text-orange-700',
  'Fundas RFID': 'bg-green-100 text-green-700',
  'Sobres y Formularios': 'bg-purple-100 text-purple-700',
  'Tarjetas Empresa': 'bg-yellow-100 text-yellow-700',
}

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog | Guías sobre Tarjetas PVC, Chip EMV, Rollos Térmicos y más — Key Solutions S.A.C"
        description="Artículos educativos sobre tarjetas PVC bancarias, chip EMV, contactless NFC, rollos térmicos POS/ATM, fundas RFID y formularios bancarios. Recursos para instituciones financieras en Perú y Bolivia."
        keywords="blog tarjetas bancarias PVC, chip EMV que es, contactless NFC tarjeta, rollos termicos POS ATM guia, funda RFID que es, formularios bancarios Peru Bolivia, recursos sector financiero"
        path="/blog"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-gold mb-5"
          >
            Recursos y guías
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
          >
            Blog — Insumos para el Sector Financiero
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-gray-300 text-lg leading-relaxed"
          >
            Guías y recursos sobre tarjetas PVC bancarias, chip EMV, contactless, rollos térmicos, fundas RFID y formularios para bancos y empresas en Perú y Bolivia.
          </motion.p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Artículos"
            title="Guías del sector financiero"
            subtitle="Todo lo que necesitas saber sobre los insumos y tecnologías que usan bancos y cooperativas en Perú y Bolivia."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.07}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full overflow-hidden"
                >
                  {/* Category bar */}
                  <div className="h-1.5 bg-brand-blue" />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                        <Tag size={10} />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-base font-bold text-navy-900 mb-3 leading-snug group-hover:text-brand-blue transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                      {post.summary}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
                      Leer artículo
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <p className="text-gray-500 mb-3 text-sm">¿Necesita tarjetas PVC bancarias, rollos térmicos o fundas RFID?</p>
            <h2 className="text-2xl font-extrabold text-navy-900 mb-6">Solicite una cotización personalizada</h2>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-navy text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors"
            >
              Contactar ahora
              <ArrowRight size={17} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
