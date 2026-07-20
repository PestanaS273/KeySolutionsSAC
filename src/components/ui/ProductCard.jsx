import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-50">
        <motion.img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {product.subtitle && (
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue mb-2">
            {product.subtitle}
          </span>
        )}
        <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-brand-blue transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">
          {product.description}
        </p>

        {/* Tags */}
        {product.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-navy-50 text-navy-700 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Features list */}
        {product.features && (
          <ul className="mt-4 space-y-1.5">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}

        {/* Link */}
        {product.href && (
          <Link
            to={product.href}
            className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all duration-200"
          >
            Ver más
            <ArrowRight size={15} />
          </Link>
        )}
      </div>
    </motion.div>
  )
}
