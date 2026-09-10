import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function LineReveal({ children, delay = 0 }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

function Cta({ cta, primary }) {
  const cls = primary
    ? 'inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy-950 font-bold rounded-lg hover:bg-blue-50 transition-colors'
    : 'inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors'
  if (cta.external) {
    return (
      <a href={cta.href} className={cls} rel="noopener">
        {cta.label}
        {primary && <ArrowRight size={17} />}
      </a>
    )
  }
  return (
    <Link to={cta.href} className={cls}>
      {cta.label}
      {primary && <ArrowRight size={17} />}
    </Link>
  )
}

/* Cabecera de las páginas de software. Sin rejilla decorativa ni rótulo: el titular manda. */
export default function SoftwareHero({ lines, subtitle, primaryCta, secondaryCta }) {
  return (
    <section className="relative flex items-center overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(closest-side, #1E6FD9, transparent 70%)' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl">
          {lines.map((line, i) => (
            <LineReveal key={line} delay={0.1 + i * 0.12}>
              {line}
            </LineReveal>
          ))}
        </h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-7 text-lg text-blue-100/80 leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            {primaryCta && <Cta cta={primaryCta} primary />}
            {secondaryCta && <Cta cta={secondaryCta} />}
          </motion.div>
        )}
      </div>
    </section>
  )
}
