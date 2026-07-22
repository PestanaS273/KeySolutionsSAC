import { motion } from 'framer-motion'
import { Shield, Award, Globe, Users } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import ClientsCarousel from '../components/ui/ClientsCarousel'
import StatCounter from '../components/ui/StatCounter'
import SEOHead from '../components/SEOHead'
import { company } from '../data/company'
import logo from '../assets/logo.png'

const values = [
  {
    icon: Shield,
    title: 'Calidad garantizada',
    description: 'Cada producto es sometido a rigurosos controles de calidad antes de llegar a nuestros clientes.',
  },
  {
    icon: Award,
    title: 'Experiencia comprobada',
    description: 'Más de 20 años operando en el sector financiero de Perú y Bolivia nos otorgan un conocimiento único del mercado.',
  },
  {
    icon: Globe,
    title: 'Cobertura regional',
    description: 'Atendemos a instituciones en Perú y Bolivia, con logística directa y tiempos de entrega eficientes.',
  },
  {
    icon: Users,
    title: 'Equipo especializado',
    description: 'Profesionales altamente capacitados con amplia experiencia en el sector financiero e industrial.',
  },
]

export default function Nosotros() {
  return (
    <>
      <SEOHead
        title="Nosotros | Key Solutions S.A.C — Proveedores Especializados Tarjetas PVC Bancarias +20 Años en Perú"
        description="Key Solutions S.A.C: proveedores especializados de tarjetas PVC bancarias VISA, Mastercard y Diners Club con chip EMV en Perú y Bolivia. Más de 20 años de experiencia en el sector financiero. RUC 20612618179."
        keywords="Key Solutions SAC Peru, proveedores especializados tarjetas PVC bancarias Lima, proveedor insumos bancarios Peru Bolivia, empresa tarjetas bancarias chip EMV Peru, RUC 20612618179, distribuidor VISA Mastercard Peru, sector financiero insumos Peru"
        path="/nosotros"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-950 to-navy-800 py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-gold mb-5"
          >
            Nuestra empresa
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight"
          >
            Quiénes somos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-gray-300 text-lg leading-relaxed"
          >
            {company.description}
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection direction="left">
            <img src={logo} alt="Key Solutions" className="h-20 w-auto mb-6" />
            <h2 className="text-3xl font-extrabold text-navy-900 mb-4">
              Nuestra misión
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Proveer soluciones personalizadas y de alta calidad para el sector financiero y empresarial,
              adaptadas a los requisitos específicos de diseño, materiales e impresión de cada cliente.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Trabajamos con bancos, cooperativas, hoteles, casinos y empresas del sector privado en
              Perú y Bolivia, entregando productos que cumplen con los más altos estándares internacionales.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 20, prefix: '+', label: 'Años de experiencia' },
                { value: 11, suffix: '+', label: 'Clientes institucionales' },
                { value: 2, label: 'Países' },
                { value: 5, label: 'Líneas de producto' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-brand-light rounded-2xl p-6 text-center shadow-card"
                >
                  <StatCounter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    className="font-display block text-4xl font-bold text-brand-blue"
                  />
                  <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Nuestros valores"
            title="Lo que nos diferencia"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <v.icon size={22} className="text-brand-blue" />
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas y estándares */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Marcas y certificaciones"
            title="Proveedores especializados para las principales redes"
            subtitle="Trabajamos con las redes de pago más importantes del mundo bajo estándares internacionales de seguridad."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Redes de pago',
                items: ['VISA — Débito y Crédito', 'Mastercard — Débito y Crédito', 'Diners Club — Crédito'],
                color: 'text-brand-blue',
                bg: 'bg-blue-50',
              },
              {
                title: 'Estándares técnicos',
                items: ['EMV Chip Certification', 'ISO 7816 (Chip Contact)', 'ISO 14443 (Contactless NFC)', 'CR-80 Dimensiones'],
                color: 'text-brand-gold',
                bg: 'bg-yellow-50',
              },
              {
                title: 'Seguridad y cumplimiento',
                items: ['PCI DSS Compliance', 'Banda magnética triple pista', 'Personalización BIN/CVV', 'Anti-skimming'],
                color: 'text-green-600',
                bg: 'bg-green-50',
              },
            ].map((group) => (
              <AnimatedSection key={group.title}>
                <div className={`${group.bg} rounded-2xl p-6 h-full`}>
                  <h3 className={`font-bold ${group.color} mb-4`}>{group.title}</h3>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className={`w-1.5 h-1.5 rounded-full ${group.color.replace('text-', 'bg-')} flex-shrink-0 mt-1.5`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 bg-navy-950 rounded-2xl p-8 text-white text-center">
            <p className="text-sm text-gray-400 mb-2">Empresa peruana con presencia en</p>
            <p className="text-2xl font-extrabold text-brand-gold mb-4">Perú y Bolivia</p>
            <p className="text-gray-300 text-sm max-w-2xl mx-auto">
              Proveedor de tarjetas PVC bancarias, rollos térmicos, fundas RFID y formularios para bancos, cooperativas y empresas del sector financiero. RUC: <span className="text-white font-semibold">20612618179</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Clients */}
      <ClientsCarousel />
    </>
  )
}
