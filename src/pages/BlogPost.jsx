import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Clock, Tag, Calendar } from 'lucide-react'
import { blogPosts } from '../data/blog'
import SEOHead from '../components/SEOHead'
import AnimatedSection from '../components/ui/AnimatedSection'

const categoryColors = {
  'Tarjetas Bancarias': 'bg-blue-100 text-blue-700',
  'Rollos Térmicos': 'bg-orange-100 text-orange-700',
  'Fundas RFID': 'bg-green-100 text-green-700',
  'Sobres y Formularios': 'bg-purple-100 text-purple-700',
  'Tarjetas Empresa': 'bg-yellow-100 text-yellow-700',
}

function ContentRenderer({ blocks }) {
  return (
    <div className="prose-custom">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return <p key={i} className="text-gray-700 leading-relaxed mb-5">{block.text}</p>
          case 'h2':
            return <h2 key={i} className="text-xl font-extrabold text-navy-900 mt-9 mb-3">{block.text}</h2>
          case 'h3':
            return <h3 key={i} className="text-base font-bold text-navy-800 mt-6 mb-2">{block.text}</h3>
          case 'ul':
            return (
              <ul key={i} className="mb-5 space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i} className="mb-5 space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-bold mt-0.5">{j + 1}</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            )
          case 'highlight':
            return (
              <div key={i} className="my-7 p-5 bg-blue-50 border-l-4 border-brand-blue rounded-r-xl">
                <p className="text-brand-blue font-medium leading-relaxed">{block.text}</p>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = blogPosts[currentIndex - 1]
  const nextPost = blogPosts[currentIndex + 1]
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Key Solutions S.A.C', url: 'https://keysolutionssac.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Key Solutions S.A.C',
      url: 'https://keysolutionssac.com',
      logo: { '@type': 'ImageObject', url: 'https://keysolutionssac.com/favicon.svg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://keysolutionssac.com/blog/${post.slug}` },
  }

  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        path={`/blog/${post.slug}`}
        type="article"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft size={14} />
              Blog
            </Link>
            <span className="text-gray-600">/</span>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-gray-700 text-gray-200'}`}>
              <Tag size={10} />
              {post.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 text-sm text-gray-400"
          >
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {new Date(post.date).toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime} de lectura
            </span>
            <span className="text-brand-gold font-medium">Key Solutions S.A.C</span>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Summary */}
          <div className="mb-8 p-5 bg-brand-light rounded-2xl border border-gray-100">
            <p className="text-gray-600 italic leading-relaxed">{post.summary}</p>
          </div>

          <ContentRenderer blocks={post.content} />

          {/* Divider */}
          <div className="border-t border-gray-100 mt-12 pt-8">
            <p className="text-xs text-gray-400 text-center">
              Artículo publicado por <strong>Key Solutions S.A.C</strong> — Proveedor de insumos para el sector financiero en Perú y Bolivia.
            </p>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      {(prevPost || nextPost) && (
        <section className="py-10 bg-brand-light border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row gap-4 justify-between">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="flex items-center gap-3 group text-left flex-1"
              >
                <ArrowLeft size={18} className="text-gray-400 group-hover:text-brand-blue transition-colors flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 mb-1">Artículo anterior</p>
                  <p className="text-sm font-semibold text-navy-900 group-hover:text-brand-blue transition-colors leading-snug">{prevPost.title}</p>
                </div>
              </Link>
            ) : <div className="flex-1" />}
            {nextPost && (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="flex items-center gap-3 group text-right flex-1 justify-end"
              >
                <div>
                  <p className="text-xs text-gray-400 mb-1">Artículo siguiente</p>
                  <p className="text-sm font-semibold text-navy-900 group-hover:text-brand-blue transition-colors leading-snug">{nextPost.title}</p>
                </div>
                <ArrowRight size={18} className="text-gray-400 group-hover:text-brand-blue transition-colors flex-shrink-0" />
              </Link>
            )}
          </div>
        </section>
      )}

      {/* Related posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-extrabold text-navy-900 mb-8">Más artículos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedPosts.map((related) => (
              <AnimatedSection key={related.slug}>
                <Link
                  to={`/blog/${related.slug}`}
                  className="group block bg-brand-light rounded-2xl p-5 hover:shadow-card transition-shadow"
                >
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold mb-3 ${categoryColors[related.category] || 'bg-gray-100 text-gray-600'}`}>
                    {related.category}
                  </span>
                  <h3 className="text-sm font-bold text-navy-900 group-hover:text-brand-blue transition-colors leading-snug mb-2">{related.title}</h3>
                  <span className="text-xs text-brand-blue font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leer <ArrowRight size={11} />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-navy-900 to-brand-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-white mb-3">
              ¿Necesita este producto para su institución?
            </h2>
            <p className="text-gray-300 mb-6 text-sm">
              Somos proveedores especializados en Perú y Bolivia. Solicite una cotización personalizada.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-gold text-navy-950 font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-glow"
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
