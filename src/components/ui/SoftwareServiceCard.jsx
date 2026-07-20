import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export default function SoftwareServiceCard({ service, index = 0 }) {
  const Icon = Icons[service.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <div className="relative w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center mb-5 group-hover:bg-brand-blue transition-colors duration-300">
        {Icon && <Icon size={22} className="text-amber-300" />}
      </div>
      <p className="relative text-xs font-semibold tracking-widest uppercase text-brand-blue mb-2">
        {service.tagline}
      </p>
      <h3 className="relative font-display text-xl font-bold text-navy-900 mb-3 tracking-tight">
        {service.title}
      </h3>
      <p className="relative text-sm text-gray-500 leading-relaxed flex-1">
        {service.description}
      </p>
      <Link
        to={service.href}
        className="relative inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-navy-900 group-hover:text-brand-blue group-hover:gap-2.5 transition-all duration-200"
      >
        Conocer más
        <ArrowRight size={15} />
      </Link>
    </motion.div>
  )
}
