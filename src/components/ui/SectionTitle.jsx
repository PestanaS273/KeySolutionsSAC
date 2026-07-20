import AnimatedSection from './AnimatedSection'

export default function SectionTitle({ label, title, subtitle, center = true }) {
  return (
    <AnimatedSection className={center ? 'text-center' : ''}>
      {label && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-blue mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
