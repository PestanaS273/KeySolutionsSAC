import { motion } from 'framer-motion'

export default function ProductDetailHero({ label, title, subtitle }) {
  return (
    <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-gold mb-5"
        >
          {label}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-300 text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
