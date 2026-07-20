import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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

export default function SoftwareHero({ eyebrow, lines, subtitle, primaryCta, secondaryCta }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.35])
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.97])

  return (
    <section
      ref={ref}
      className="relative min-h-[78vh] flex items-center overflow-hidden bg-navy-950"
    >
      {/* Subtle grid */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          y: gridY,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 100%)',
        }}
      />
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,111,217,0.22) 0%, transparent 65%)' }}
      />

      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-28 text-center"
      >
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-300/90">
              {eyebrow}
            </span>
          </motion.div>
        )}

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight">
          {lines.map((line, i) => (
            <LineReveal key={line} delay={0.15 + i * 0.13}>
              {line}
            </LineReveal>
          ))}
        </h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-7 text-lg text-blue-100/75 leading-relaxed max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-9 flex flex-wrap gap-4 justify-center"
          >
            {primaryCta && (
              <Link
                to={primaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-400 text-navy-950 font-bold rounded-xl hover:bg-amber-300 active:bg-amber-500 transition-colors shadow-lg"
              >
                {primaryCta.label}
                <ArrowRight size={17} />
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/25 text-white font-semibold rounded-xl hover:bg-white/10 active:bg-white/5 transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
