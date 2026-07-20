import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield, Clock, Settings, Globe, ArrowRight, ChevronRight,
  CreditCard, Cpu, Layers, FileText, Wifi, Key, ShieldCheck,
  MapPin, Building2, Star,
} from 'lucide-react'
import { productCategories } from '../data/products'
import { features } from '../data/company'
import ProductCard from '../components/ui/ProductCard'
import ClientsCarousel from '../components/ui/ClientsCarousel'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'
import { blogPosts } from '../data/blog'
import fondoBg from '../assets/fondo.avif'

const blogPreview = blogPosts.slice(0, 3)
const iconMap = { Shield, Clock, Settings, Globe }

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Key Solutions S.A.C',
  image: 'https://keysolutionssac.com/og-image.png',
  url: 'https://keysolutionssac.com',
  telephone: '+51-949-284-735',
  email: 'rpestana@keysolutionssac.com',
  description:
    'Importadora especializada de tarjetas PVC bancarias con múltiples tecnologías de chip (EMV, contactless, dual interface, MIFARE) para bancos y cooperativas, tarjetas de acceso para hoteles y empresas, rollos térmicos POS/ATM, fundas RFID y formularios bancarios en Perú y Bolivia.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Raúl Ferrero 1542',
    addressLocality: 'La Molina',
    addressRegion: 'Lima',
    postalCode: '15026',
    addressCountry: 'PE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -12.0866, longitude: -76.9432 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catálogo Key Solutions S.A.C',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Tarjetas PVC Bancarias con Chip (EMV, Contactless, Dual Interface, MIFARE)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Tarjetas PVC para Hoteles, Acceso y Empresas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Rollos Térmicos POS y ATM 80x80' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Fundas de Bloqueo RFID Anti-Clonación' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Sobres PIN Mailer, Con Ventana y Formas Continuas' } },
    ],
  },
  areaServed: ['PE', 'BO'],
}

const productHighlights = [
  { icon: CreditCard, label: 'Tarjetas bancarias PVC',  sub: 'Múltiples chips y certificaciones' },
  { icon: Cpu,        label: 'Acceso y control',        sub: 'Hotel · Empresa · Campus' },
  { icon: Layers,     label: 'Rollos térmicos',          sub: 'POS · ATM · Autocopiante' },
  { icon: FileText,   label: 'Formularios bancarios',    sub: 'PIN Mailer · Sobres · Formas continuas' },
]

const chipTechs = [
  { icon: CreditCard,  name: 'EMV Contacto',    std: 'ISO 7816' },
  { icon: Wifi,        name: 'EMV Contactless',  std: 'ISO 14443' },
  { icon: Layers,      name: 'Dual Interface',   std: 'Contacto + NFC' },
  { icon: Key,         name: 'MIFARE Classic',   std: 'NXP MIFARE' },
  { icon: ShieldCheck, name: 'MIFARE DESFire',   std: 'EV2 / EV3' },
  { icon: Settings,    name: 'Spec. del banco',  std: 'A pedido' },
]

const presence = [
  {
    icon: MapPin,
    country: 'Perú',
    city: 'Lima — La Molina',
    detail: 'Sede principal · Av. Raúl Ferrero 1542',
    extra: 'RUC 20612618179',
    accent: 'bg-red-50 text-red-600',
  },
  {
    icon: Building2,
    country: 'Bolivia',
    city: 'La Paz · Santa Cruz · Cochabamba',
    detail: 'Distribución a bancos y cooperativas',
    extra: '11+ clientes institucionales',
    accent: 'bg-yellow-50 text-yellow-600',
  },
]

/* Framer Motion variants */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
})

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Home() {
  return (
    <>
      <SEOHead
        title="Importadores de Tarjetas PVC para Bancos y Empresas — Perú y Bolivia | Key Solutions S.A.C"
        description="Importadora especializada de tarjetas PVC bancarias con múltiples tecnologías de chip: EMV, contactless, dual interface, MIFARE y más, según especificaciones. También tarjetas de acceso para hoteles y empresas, rollos térmicos POS/ATM, fundas RFID y formularios bancarios. +20 años en Perú y Bolivia."
        keywords="importadores tarjetas PVC bancos Peru Bolivia, tarjetas PVC bancarias chip Peru, tarjetas PVC chip EMV contactless dual interface Peru, tarjetas MIFARE Peru Bolivia, tarjetas acceso hotel empresa Peru, rollos termicos POS ATM Peru Bolivia, fundas RFID Peru Bolivia, formularios bancarios Peru Bolivia, proveedor insumos bancarios Peru Bolivia, Key Solutions SAC"
        path="/"
        structuredData={homeStructuredData}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy-950">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${fondoBg})` }}
          aria-hidden="true"
        />
        {/* Gradient overlay — always applied regardless of image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(9,25,41,0.97) 0%, rgba(13,43,78,0.93) 50%, rgba(30,111,217,0.75) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}
          <div>
            <motion.span {...fadeUp(0)} className="inline-block px-4 py-1.5 bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-widest uppercase rounded-full mb-6">
              Importadora especializada · Perú y Bolivia
            </motion.span>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]"
            >
              Tarjetas PVC para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
                Bancos y Empresas
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-blue-200 font-bold">
                Importadores en Perú y Bolivia
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 text-lg text-blue-100/80 leading-relaxed max-w-xl"
            >
              Importamos tarjetas PVC bancarias con la tecnología de chip que su institución
              requiere — EMV, contactless, dual interface, MIFARE y más. También rollos
              térmicos, fundas RFID y formularios bancarios. Trabajamos con proveedores
              especializados para cualquier especificación.
            </motion.p>

            {/* Product highlights grid */}
            <motion.div
              {...fadeUp(0.3)}
              className="mt-7 grid grid-cols-2 gap-2.5"
            >
              {productHighlights.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl px-3.5 py-3 border border-white/10"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <Icon size={15} className="text-amber-300 flex-shrink-0" />
                  <div>
                    <p className="text-white text-xs font-semibold leading-tight">{label}</p>
                    <p className="text-blue-200/60 text-[10px] leading-tight mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/productos"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-400 text-navy-950 font-bold rounded-xl hover:bg-amber-300 active:bg-amber-500 transition-colors shadow-lg"
              >
                Ver catálogo completo
                <ArrowRight size={17} />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/25 text-white font-semibold rounded-xl hover:bg-white/10 active:bg-white/5 transition-colors"
              >
                Solicitar cotización
              </Link>
            </motion.div>
          </div>

          {/* Right: stats */}
          <motion.div
            {...scaleIn(0.35)}
            className="grid grid-cols-2 gap-4 lg:justify-self-end w-full max-w-xs"
          >
            {[
              { value: '+20', label: 'Años de experiencia' },
              { value: '11+', label: 'Clientes institucionales' },
              { value: '2',   label: 'Países atendidos' },
              { value: '5',   label: 'Líneas de producto' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl p-5 text-center border border-white/15"
                style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}
              >
                <p className="text-3xl font-extrabold text-amber-300">{s.value}</p>
                <p className="text-xs text-blue-100/70 mt-1 leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
          aria-hidden="true"
        >
          <ChevronRight size={22} className="rotate-90" />
        </motion.div>
      </section>

      {/* ── ¿POR QUÉ ELEGIRNOS? ───────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="¿Por qué elegirnos?"
            title="Importadora con más de 20 años en el sector financiero"
            subtitle="Trabajamos con proveedores especializados para responder a las especificaciones técnicas de cada institución — desde el tipo de chip hasta la certificación requerida."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = iconMap[f.icon]
              return (
                <AnimatedSection key={f.title} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-brand-blue" />
                    </div>
                    <h3 className="font-bold text-navy-900 mb-2 text-base">{f.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CATÁLOGO ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Nuestro catálogo"
            title="Cinco líneas de producto para el sector financiero y empresarial"
            subtitle="Importamos y distribuimos en Perú y Bolivia. Cada producto se adapta a las especificaciones técnicas y comerciales de su institución."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Link
              to="/productos"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors"
            >
              Ver catálogo completo
              <ArrowRight size={17} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TECNOLOGÍAS DE CHIP ───────────────────────────────────────── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <AnimatedSection>
              <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-amber-400/20 text-amber-300 mb-4">
                Tecnologías disponibles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Tarjetas PVC con el chip que su banco necesita
              </h2>
              <p className="mt-4 text-blue-200/70 max-w-2xl mx-auto text-base leading-relaxed">
                Coordinamos con fabricantes certificados para suministrar la tecnología de chip
                exacta que su institución financiera requiere.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {chipTechs.map(({ icon: Icon, name, std }, i) => (
              <AnimatedSection key={name} delay={i * 0.07}>
                <div className="rounded-2xl p-5 text-center flex flex-col items-center gap-3 border border-white/10 hover:border-amber-400/30 hover:bg-white/5 transition-all duration-250 h-full"
                  style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <div className="w-10 h-10 rounded-xl bg-amber-400/15 flex items-center justify-center">
                    <Icon size={18} className="text-amber-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">{name}</p>
                    <p className="text-[10px] text-blue-300/60 mt-1">{std}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              to="/tarjetas-bancarias"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors"
            >
              Ver tarjetas bancarias <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CLIENTES ──────────────────────────────────────────────────── */}
      <ClientsCarousel />

      {/* ── PRESENCIA REGIONAL ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Cobertura regional"
            title="Presencia en Perú y Bolivia"
            subtitle="Atendemos a bancos, cooperativas y empresas del sector financiero con distribución directa y logística eficiente."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {presence.map((c, i) => {
              const Icon = c.icon
              return (
                <AnimatedSection key={c.country} delay={i * 0.1}>
                  <div className="flex items-start gap-5 bg-[#F8FAFC] rounded-2xl p-7 border border-gray-100 hover:shadow-card transition-shadow duration-300">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${c.accent}`}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="font-extrabold text-navy-900 text-xl">{c.country}</p>
                      <p className="text-sm font-semibold text-brand-blue mt-0.5">{c.city}</p>
                      <p className="text-xs text-gray-500 mt-2">{c.detail}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{c.extra}</p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ──────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Recursos y guías"
            title="Blog — Insumos para el sector financiero"
            subtitle="Artículos educativos sobre tarjetas PVC, tipos de chip, contactless, rollos térmicos, fundas RFID y más."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {blogPreview.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.09}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <span className="inline-block text-xs font-semibold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-lg mb-3 w-fit">
                    {post.category}
                  </span>
                  <h3 className="text-sm font-bold text-navy-900 group-hover:text-brand-blue transition-colors leading-snug mb-4 flex-1">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 group-hover:text-brand-blue group-hover:gap-2.5 transition-all duration-200">
                    Leer artículo <ArrowRight size={11} />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-xl hover:bg-navy-900 hover:text-white transition-colors"
            >
              Ver todos los artículos
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #1E6FD9 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <Star size={28} className="text-amber-400 mx-auto mb-5" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              ¿Necesita tarjetas PVC u otros insumos financieros?
            </h2>
            <p className="text-blue-200/75 text-lg mb-9 leading-relaxed">
              Contáctenos con sus especificaciones técnicas y le respondemos con la solución más
              adecuada para su institución.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-9 py-4 bg-amber-400 text-navy-950 font-bold rounded-xl hover:bg-amber-300 active:bg-amber-500 transition-colors text-lg shadow-glow"
            >
              Solicitar cotización
              <ArrowRight size={19} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
