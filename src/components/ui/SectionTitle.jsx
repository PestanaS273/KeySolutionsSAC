import AnimatedSection from './AnimatedSection'

/* `label` se acepta por compatibilidad pero ya no se pinta: el rótulo pequeño en mayúsculas sobre
   cada título era ruido, no jerarquía. */
export default function SectionTitle({ title, subtitle, center = true }) {
  return (
    <AnimatedSection className={center ? 'text-center' : ''}>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 leading-[1.08] tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-gray-600 text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
