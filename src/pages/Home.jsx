import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { productCategories } from '../data/products'
import { company } from '../data/company'
import { erpModules, webDevServices, customSoftwareUseCases } from '../data/software'
import { clientsBySector } from '../data/trayectoria'
import ProductCard from '../components/ui/ProductCard'
import ClientsCarousel from '../components/ui/ClientsCarousel'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import ContactForm from '../components/ui/ContactForm'
import SEOHead from '../components/SEOHead'
import { blogPosts } from '../data/blog'
import heroImg from '../assets/tarjetascarousel.png'
import keyerpLogo from '../assets/keyerp-logo.png'

const blogPreview = blogPosts.slice(0, 3)

const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Key Solutions S.A.C',
  image: 'https://keysolutionssac.com/og-image.png',
  url: 'https://keysolutionssac.com',
  telephone: '+51-949-284-735',
  email: company.email,
  description:
    'Proveedores de tarjetas PVC bancarias con chip EMV, contactless, dual interface y MIFARE, rollos térmicos POS/ATM, fundas RFID y formularios bancarios en Perú y Bolivia. Desarrolladores de KeyERP, sistema de gestión del gasto administrativo.',
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
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tarjetas PVC Bancarias con Chip (EMV, Contactless, Dual Interface, MIFARE)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tarjetas PVC para Hoteles, Acceso y Empresas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rollos Térmicos POS y ATM 80x80' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fundas de Bloqueo RFID Anti-Clonación' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sobres PIN Mailer, Con Ventana y Formas Continuas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'KeyERP — Gestión del gasto administrativo', url: 'https://keyerp.keysolutionssac.com' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desarrollo Web a Medida' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software Empresarial a Medida' } },
    ],
  },
  areaServed: ['PE', 'BO'],
}

const totalClients = clientsBySector.reduce((n, s) => n + s.names.length, 0)

const chipTechs = [
  ['EMV contacto', 'ISO 7816'],
  ['EMV contactless', 'ISO 14443'],
  ['Dual interface', 'Contacto y NFC'],
  ['MIFARE Classic', 'NXP'],
  ['MIFARE DESFire', 'EV2 / EV3'],
  ['Especificación del banco', 'A pedido'],
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Home() {
  return (
    <>
      <SEOHead
        title="Tarjetas PVC bancarias, insumos financieros y KeyERP — Perú y Bolivia | Key Solutions S.A.C"
        description="Proveedores de tarjetas PVC bancarias (EMV, contactless, dual interface, MIFARE), rollos térmicos POS/ATM, fundas RFID y formularios para bancos de Perú y Bolivia. Desarrolladores de KeyERP, sistema de gestión del gasto administrativo. Más de 20 años en el sector financiero."
        keywords="proveedores tarjetas PVC bancos Peru Bolivia, tarjetas PVC chip EMV contactless, tarjetas MIFARE, rollos termicos POS ATM, fundas RFID, formularios bancarios, KeyERP, ERP gasto administrativo, software a medida Peru, Key Solutions SAC"
        path="/"
        structuredData={homeStructuredData}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div
          aria-hidden="true"
          className="absolute -top-48 -right-48 h-[40rem] w-[40rem] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(closest-side, #1E6FD9, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.h1
              {...fadeUp(0.05)}
              className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.05] tracking-tight text-balance"
            >
              Insumos para el sector financiero y el sistema que ordena su gasto.
            </motion.h1>
            <motion.p {...fadeUp(0.18)} className="mt-7 text-lg text-blue-100/80 leading-relaxed max-w-xl">
              Más de 20 años proveyendo tarjetas PVC con chip, rollos térmicos, fundas RFID y
              formularios a bancos y cooperativas de Perú y Bolivia. Y KeyERP, nuestro sistema de
              gestión del gasto administrativo, instalado en los servidores de cada cliente.
            </motion.p>
            <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/productos"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy-950 font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Ver catálogo de insumos
                <ArrowRight size={17} />
              </Link>
              <a
                href={company.erpUrl}
                rel="noopener"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Conocer KeyERP
                <ArrowUpRight size={17} />
              </a>
            </motion.div>
            <motion.ul {...fadeUp(0.42)} className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-blue-100/60">
              <li>Más de 20 años en el sector financiero</li>
              <li>Más de {totalClients} instituciones atendidas</li>
              <li>Lima y La Paz, con presencia en toda Bolivia</li>
            </motion.ul>
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="relative"
          >
            <img
              src={heroImg}
              alt="Tarjetas bancarias con chip EMV, apiladas sobre una mesa"
              width={640}
              height={335}
              className="w-full rounded-xl object-cover shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
              fetchPriority="high"
            />
            <figcaption className="mt-3 text-xs text-blue-100/50">
              Tarjetas PVC con chip EMV: la especificación la define el banco, nosotros la cumplimos.
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* ── CATÁLOGO ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            center={false}
            title="Cinco líneas de insumos para bancos, cooperativas y empresas"
            subtitle="Cada producto se fabrica a la especificación técnica de su institución: tipo de chip, red de pago, certificación, personalización y formato."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <AnimatedSection className="mt-14 border-t border-gray-200 pt-8">
            <div className="grid gap-8 lg:grid-cols-[14rem_1fr]">
              <h3 className="font-display text-lg font-bold text-navy-900">Tecnologías de chip disponibles</h3>
              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
                {chipTechs.map(([name, std]) => (
                  <div key={name}>
                    <dt className="text-sm font-semibold text-navy-900">{name}</dt>
                    <dd className="text-sm text-gray-500">{std}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/productos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
              >
                Catálogo completo
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/tarjetas-bancarias"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-navy-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Tarjetas bancarias
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── KEYERP ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-900 text-white py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute top-1/2 -right-40 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(closest-side, #5BB8F5, transparent 70%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20 items-start">
          <AnimatedSection>
            <div className="flex items-center gap-3">
              <img src={keyerpLogo} alt="" width={40} height={43} className="h-10 w-auto rounded-md bg-white p-1" />
              <span className="text-2xl font-bold tracking-tight">
                Key<span className="text-sky-300">ERP</span>
              </span>
            </div>
            <h2 className="font-display mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-balance">
              Nuestro producto: el gasto administrativo de su empresa, con rastro de punta a punta.
            </h2>
            <p className="mt-6 text-lg text-blue-100/80 leading-relaxed max-w-xl">
              KeyERP lleva cada solicitud hasta su asiento contable. La requisición se aprueba, se
              cotiza, se convierte en orden de compra que compromete presupuesto, se concilia con la
              factura y se paga. Cada documento cita al anterior, y cada cambio queda con quién,
              cuándo y por qué.
            </p>
            <ul className="mt-7 space-y-2.5 text-[0.95rem] text-blue-50/90">
              {[
                'Se instala en los servidores de su empresa; ningún dato sale de su perímetro.',
                'Se licencia por módulos: empieza con lo que necesita y suma después sin reinstalar.',
                'Pensado para pasar auditoría: separación de funciones y rastro completo.',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <Check size={17} className="mt-0.5 shrink-0 text-sky-300" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={company.erpUrl}
                rel="noopener"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy-950 font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Ver KeyERP
                <ArrowUpRight size={17} />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Solicitar una demo
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-sm font-medium text-blue-100/60">Nueve módulos sobre un mismo núcleo</p>
            <ol className="mt-4 divide-y divide-white/10 border-y border-white/10">
              {erpModules.map((m) => (
                <li key={m.title} className="grid gap-1 py-3.5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <h3 className="text-[0.95rem] font-semibold text-white">{m.title}</h3>
                  <p className="text-sm text-blue-100/70 leading-relaxed">{m.description}</p>
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </div>
      </section>

      {/* ── DESARROLLO DE SOFTWARE ───────────────────────────────────── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            center={false}
            title="También construimos el software que su operación necesita"
            subtitle="El mismo equipo que desarrolla KeyERP hace sitios web y sistemas a medida. La exigencia es la que aprendimos trabajando con bancos."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div className="border-t-2 border-navy-900 pt-5">
                <h3 className="font-display text-2xl font-bold text-navy-900 tracking-tight">Desarrollo web</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Sitios corporativos, landing pages, tiendas y portales administrables. Rápidos,
                  bien posicionados y con un formulario que llega a su equipo comercial.
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
                  {webDevServices.map((s) => (
                    <li key={s.title} className="flex items-start gap-2">
                      <Check size={15} className="mt-1 shrink-0 text-brand-blue" aria-hidden="true" />
                      {s.title}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/desarrollo-web"
                  className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all"
                >
                  Desarrollo web <ArrowRight size={15} />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="border-t-2 border-navy-900 pt-5">
                <h3 className="font-display text-2xl font-bold text-navy-900 tracking-tight">Software a medida</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Cuando el proceso no cabe en un producto de estante: automatización, integraciones
                  entre sistemas, paneles y aplicaciones internas construidas alrededor de cómo
                  trabaja su equipo.
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
                  {customSoftwareUseCases.map((s) => (
                    <li key={s.title} className="flex items-start gap-2">
                      <Check size={15} className="mt-1 shrink-0 text-brand-blue" aria-hidden="true" />
                      {s.title}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/software-a-medida"
                  className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all"
                >
                  Software a medida <ArrowRight size={15} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CLIENTES ──────────────────────────────────────────────────── */}
      <ClientsCarousel />

      {/* ── PRESENCIA ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionTitle
            center={false}
            title="Dos empresas, un mismo equipo"
            subtitle="Key Solutions atiende desde Lima. En Bolivia, las ventas y la atención se hacen a través de ACOVI Solutions Bolivia."
          />
          <AnimatedSection>
            <dl className="grid gap-8 sm:grid-cols-2">
              <div className="border-t border-gray-200 pt-5">
                <dt className="font-display text-xl font-bold text-navy-900">Perú</dt>
                <dd className="mt-2 text-sm text-gray-700 leading-relaxed">
                  Key Solutions S.A.C.
                  <br />
                  {company.address}
                  <br />
                  <span className="text-gray-500">RUC {company.ruc}</span>
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <dt className="font-display text-xl font-bold text-navy-900">Bolivia</dt>
                <dd className="mt-2 text-sm text-gray-700 leading-relaxed">
                  ACOVI Solutions Bolivia S.R.L.
                  <br />
                  Sede en La Paz · presencia a nivel nacional
                  <br />
                  <span className="text-gray-500">Ventas y atención a instituciones en todo el país</span>
                </dd>
              </div>
            </dl>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONTACTO ──────────────────────────────────────────────────── */}
      <section id="contacto" className="scroll-mt-20 py-24 bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 leading-[1.08] tracking-tight text-balance">
              Cuéntenos qué necesita.
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Una cotización de insumos con sus especificaciones, o una demo de KeyERP con los datos
              de su empresa. Respondemos en el día hábil siguiente.
            </p>
            <address className="mt-8 space-y-2 text-[0.95rem] not-italic text-gray-700">
              <p>
                <a href={`mailto:${company.email}`} className="font-medium text-navy-900 hover:underline">
                  {company.email}
                </a>
              </p>
              <p>
                <a href={`https://wa.me/${company.whatsapp}`} rel="noopener noreferrer" target="_blank" className="hover:text-navy-900">
                  {company.phone} · WhatsApp
                </a>
              </p>
              <p className="text-gray-500">Lunes a viernes, 9:00 a 18:00</p>
            </address>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BLOG ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-[14rem_1fr] lg:gap-20">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold text-navy-900 tracking-tight">Guías del sector</h2>
            <Link to="/blog" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
              Todos los artículos <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
          <ul className="divide-y divide-gray-200 border-y border-gray-200">
            {blogPreview.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.06}>
                <li>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex items-center justify-between gap-6 py-4"
                  >
                    <span>
                      <span className="block text-xs font-medium text-gray-500">{post.category}</span>
                      <span className="block mt-0.5 font-semibold text-navy-900 group-hover:text-brand-blue transition-colors">
                        {post.title}
                      </span>
                    </span>
                    <ArrowRight size={16} className="shrink-0 text-gray-400 group-hover:text-brand-blue transition-colors" />
                  </Link>
                </li>
              </AnimatedSection>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
