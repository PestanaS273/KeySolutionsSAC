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
import HeroVideo from '../components/ui/HeroVideo'
import SEOHead from '../components/SEOHead'
import { blogPosts } from '../data/blog'
import keyerpLogo from '../assets/keyerp-logo.png'
import { useLang } from '../i18n/LangContext'

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
  const { t } = useLang()
  return (
    <>
      <SEOHead
        title={t("Key Solutions | Tarjetas PVC bancarias, insumos financieros y Key ERP (KeyERP) — Perú y Bolivia")}
        description={t("Tarjetas PVC bancarias con chip EMV, contactless y MIFARE, rollos térmicos, fundas RFID y formularios para bancos de Perú y Bolivia. Desarrollo de software empresarial y Key ERP (KeyERP), el ERP para banca y empresas de Bolivia y Perú. Más de 20 años en el sector financiero.")}
        keywords={t("Key ERP, KeyERP, Key ERP Bolivia, Key ERP Peru, ERP Bolivia, ERP Peru, ERP banca, ERP para bancos, tarjetas PVC Peru, tarjetas PVC Bolivia, chips bancarios Bolivia, tarjetas chip EMV Bolivia Peru, rollos termicos POS ATM, fundas RFID, formularios bancarios, desarrollo software Bolivia, desarrollo software Peru, venta de software empresarial, software a medida, Key Solutions SAC")}
        path="/"
        structuredData={homeStructuredData}
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      {/* El -mt-16 mete el hero por debajo de la barra, que en la portada arranca transparente. */}
      <section className="relative isolate -mt-16 flex min-h-[38rem] items-end overflow-hidden bg-navy-950 text-white lg:min-h-[min(92vh,50rem)]">
        <HeroVideo />
        {/* Oscurecido en dos tiempos: arriba para que se lea la barra, abajo para el titular. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(9,25,41,0.66) 0%, rgba(9,25,41,0.46) 32%, rgba(9,25,41,0.74) 62%, rgba(9,25,41,0.90) 82%, rgba(9,25,41,0.96) 100%)',
          }}
        />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pt-28 lg:pb-20 lg:pt-40">
          <motion.h1
            {...fadeUp(0.05)}
            className="font-display max-w-[16ch] text-[clamp(2.4rem,5.8vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.025em] text-balance"
          >
            {t('Insumos y desarrollo de software para el sector financiero.')}
          </motion.h1>
          <motion.p
            {...fadeUp(0.18)}
            className="mt-5 max-w-[58ch] text-pretty text-base leading-[1.6] text-blue-50/85 sm:mt-6 lg:text-lg lg:leading-[1.7]"
          >
            {t('Más de 20 años proveyendo tarjetas PVC con chip, rollos térmicos, fundas RFID y formularios a bancos y cooperativas de Perú y Bolivia. Y KeyERP, nuestro sistema de gestión del gasto administrativo, instalado en los servidores de cada cliente.')}
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap gap-3 sm:mt-9">
            <Link
              to="/productos"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 font-bold text-navy-950 transition-colors duration-200 hover:bg-blue-50"
            >
              {t('Ver catálogo de insumos')}
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={company.erpUrl}
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg border border-white/35 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/60 hover:bg-white/15"
            >
              {t('Conocer KeyERP')}
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
          <motion.ul
            {...fadeUp(0.42)}
            className="mt-10 flex flex-col gap-y-2 border-t border-white/15 pt-5 text-sm text-blue-50/70 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-x-10"
          >
            <li>{t('Más de 20 años en el sector financiero')}</li>
            <li>{t('Más de N instituciones atendidas').replace('N', totalClients)}</li>
            <li>{t('Perú y Bolivia')}</li>
          </motion.ul>
        </div>
      </section>

      {/* ── CATÁLOGO ─────────────────────────────────────────────────── */}
      <section className="seccion bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            center={false}
            title={t("Cinco líneas de insumos para bancos, cooperativas y empresas")}
            subtitle={t("Cada producto se fabrica a la especificación técnica de su institución: tipo de chip, red de pago, certificación, personalización y formato.")}
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <AnimatedSection className="mt-14 border-t border-gray-200 pt-8">
            <div className="grid gap-8 lg:grid-cols-[14rem_1fr]">
              <h3 className="font-display text-lg font-bold text-navy-900">{t('Tecnologías de chip disponibles')}</h3>
              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
                {chipTechs.map(([name, std]) => (
                  <div key={name}>
                    <dt className="text-sm font-semibold text-navy-900">{t(name)}</dt>
                    <dd className="text-sm text-gray-500">{t(std)}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/productos"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
              >
                {t('Catálogo completo')}
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/tarjetas-bancarias"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-navy-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t('Tarjetas bancarias')}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── KEYERP ───────────────────────────────────────────────────── */}
      <section className="seccion-amplia relative overflow-hidden bg-navy-900 text-white">
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
                {t('Key')}<span className="text-sky-300">{t('ERP')}</span>
              </span>
            </div>
            <h2 className="font-display mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-balance">
              {t('Nuestro producto: el gasto administrativo de su empresa, con rastro de punta a punta.')}
            </h2>
            <p className="mt-6 text-lg text-blue-100/80 leading-relaxed max-w-xl">
              {t('KeyERP lleva cada solicitud hasta su asiento contable. La requisición se aprueba, se cotiza, se convierte en orden de compra que compromete presupuesto, se concilia con la factura y se paga. Cada documento cita al anterior, y cada cambio queda con quién, cuándo y por qué.')}
            </p>
            <ul className="mt-7 space-y-2.5 text-[0.95rem] text-blue-50/90">
              {[
                'Se instala en los servidores de su empresa; ningún dato sale de su perímetro.',
                'Se licencia por módulos: empieza con lo que necesita y suma después sin reinstalar.',
                'Pensado para pasar auditoría: separación de funciones y rastro completo.',
              ].map((txt) => (
                <li key={txt} className="flex items-start gap-2.5">
                  <Check size={17} className="mt-0.5 shrink-0 text-sky-300" aria-hidden="true" />
                  {t(txt)}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={company.erpUrl}
                rel="noopener"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy-950 font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                {t('Ver KeyERP')}
                <ArrowUpRight size={17} />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {t('Solicitar una demo')}
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-sm font-medium text-blue-100/60">{t('Nueve módulos sobre un mismo núcleo')}</p>
            <ol className="mt-4 divide-y divide-white/10 border-y border-white/10">
              {erpModules.map((m) => (
                <li key={m.title} className="grid gap-1 py-3.5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <h3 className="text-[0.95rem] font-semibold text-white">{t(m.title)}</h3>
                  <p className="text-sm text-blue-100/70 leading-relaxed">{t(m.description)}</p>
                </li>
              ))}
            </ol>
          </AnimatedSection>
        </div>
      </section>

      {/* ── DESARROLLO DE SOFTWARE ───────────────────────────────────── */}
      <section className="seccion bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            center={false}
            title={t("También construimos el software que su operación necesita")}
            subtitle={t("El mismo equipo que desarrolla KeyERP hace sitios web y sistemas a medida. La exigencia es la que aprendimos trabajando con bancos.")}
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div className="border-t-2 border-navy-900 pt-5">
                <h3 className="font-display text-2xl font-bold text-navy-900 tracking-tight">{t('Desarrollo web')}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {t('Sitios corporativos, landing pages, tiendas y portales administrables. Rápidos, bien posicionados y con un formulario que llega a su equipo comercial.')}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
                  {webDevServices.map((s) => (
                    <li key={s.title} className="flex items-start gap-2">
                      <Check size={15} className="mt-1 shrink-0 text-brand-blue" aria-hidden="true" />
                      {t(s.title)}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/desarrollo-web"
                  className="group inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-blue transition-colors"
                >
                  {t('Desarrollo web')} <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="border-t-2 border-navy-900 pt-5">
                <h3 className="font-display text-2xl font-bold text-navy-900 tracking-tight">{t('Software a medida')}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {t('Cuando el proceso no cabe en un producto de estante: automatización, integraciones entre sistemas, paneles y aplicaciones internas construidas alrededor de cómo trabaja su equipo.')}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
                  {customSoftwareUseCases.map((s) => (
                    <li key={s.title} className="flex items-start gap-2">
                      <Check size={15} className="mt-1 shrink-0 text-brand-blue" aria-hidden="true" />
                      {t(s.title)}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/software-a-medida"
                  className="group inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-blue transition-colors"
                >
                  {t('Software a medida')} <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CLIENTES ──────────────────────────────────────────────────── */}
      <ClientsCarousel />

      {/* ── PRESENCIA ─────────────────────────────────────────────────── */}
      <section className="seccion-compacta bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionTitle
            center={false}
            title={t("Dos empresas, un mismo equipo")}
            subtitle={t("Key Solutions atiende desde Lima. En Bolivia, las ventas y la atención se hacen a través de ACOVI Solutions Bolivia.")}
          />
          <AnimatedSection>
            <dl className="grid gap-8 sm:grid-cols-2">
              <div className="border-t border-gray-200 pt-5">
                <dt className="font-display text-xl font-bold text-navy-900">{t('Perú')}</dt>
                <dd className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {t('Key Solutions S.A.C.')}
                  <br />
                  {company.address}
                  <br />
                  <span className="text-gray-500">RUC {company.ruc}</span>
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-5">
                <dt className="font-display text-xl font-bold text-navy-900">{t('Bolivia')}</dt>
                <dd className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {t('ACOVI Solutions Bolivia S.R.L.')}
                  <br />
                  {t('Sede en La Paz · presencia a nivel nacional')}
                  <br />
                  <span className="text-gray-500">{t('Ventas y atención a instituciones en todo el país')}</span>
                </dd>
              </div>
            </dl>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONTACTO ──────────────────────────────────────────────────── */}
      <section id="contacto" className="seccion-amplia scroll-mt-20 bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 leading-[1.08] tracking-tight text-balance">
              {t('Cuéntenos qué necesita.')}
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {t('Una cotización de insumos con sus especificaciones, o una demo de KeyERP con los datos de su empresa. Respondemos en el día hábil siguiente.')}
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
              <p className="text-gray-500">{t('Lunes a viernes, 9:00 a 18:00')}</p>
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
      <section className="seccion-compacta bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 lg:grid-cols-[14rem_1fr] lg:gap-20">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold text-navy-900 tracking-tight">{t('Guías del sector')}</h2>
            <Link to="/blog" className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors">
              {t('Todos los artículos')} <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
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
                      <span className="block text-xs font-medium text-gray-500">{t(post.category)}</span>
                      <span className="block mt-0.5 font-semibold text-navy-900 group-hover:text-brand-blue transition-colors">
                        {t(post.title)}
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
