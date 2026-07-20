import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Wifi, Layers, ShieldCheck, CreditCard, Settings } from 'lucide-react'
import { tarjetasBanca } from '../data/products'
import ProductCard from '../components/ui/ProductCard'
import ProductDetailHero from '../components/ui/ProductDetailHero'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/SEOHead'
import tres from '../assets/3tarjetas.png'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Tarjetas PVC Bancarias — Key Solutions S.A.C',
  description:
    'Importación y distribución de tarjetas PVC bancarias con múltiples tecnologías de chip: EMV contacto, EMV contactless, dual interface, MIFARE Classic, MIFARE DESFire y chip según especificación del banco. Perú y Bolivia.',
  url: 'https://keysolutionssac.com/tarjetas-bancarias',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Tarjeta PVC Bancaria con Chip EMV Contacto (ISO 7816)',
        description:
          'Tarjeta PVC bancaria con chip EMV de contacto estándar ISO 7816. Compatible con redes VISA, Mastercard y Diners Club. Personalización variable BIN/CVV. Estándar CR-80 (85.6×54 mm).',
        offers: {
          '@type': 'Offer',
          seller: { '@type': 'Organization', name: 'Key Solutions S.A.C' },
          areaServed: ['PE', 'BO'],
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Tarjeta PVC Bancaria con Chip EMV Contactless (ISO 14443)',
        description:
          'Tarjeta PVC bancaria con chip EMV contactless NFC estándar ISO 14443. Pago sin contacto certificado para bancos en Perú y Bolivia.',
        offers: {
          '@type': 'Offer',
          seller: { '@type': 'Organization', name: 'Key Solutions S.A.C' },
          areaServed: ['PE', 'BO'],
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Tarjeta PVC Dual Interface (Contacto + Contactless)',
        description:
          'Tarjeta PVC bancaria dual interface con chip EMV de contacto y contactless en un solo plástico. Máxima versatilidad para bancos.',
        offers: {
          '@type': 'Offer',
          seller: { '@type': 'Organization', name: 'Key Solutions S.A.C' },
          areaServed: ['PE', 'BO'],
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Tarjeta PVC con Chip MIFARE Classic / DESFire',
        description:
          'Tarjeta PVC con chip MIFARE Classic o MIFARE DESFire EV2/EV3 para control de acceso, fidelización y aplicaciones bancarias de alta seguridad.',
        offers: {
          '@type': 'Offer',
          seller: { '@type': 'Organization', name: 'Key Solutions S.A.C' },
          areaServed: ['PE', 'BO'],
        },
      },
    },
  ],
}

const chipTechs = [
  {
    icon: Cpu,
    name: 'EMV Contacto',
    standard: 'ISO 7816',
    desc: 'Chip de inserción estándar para tarjetas de crédito y débito. Certificación EMV obligatoria para redes bancarias internacionales.',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: Wifi,
    name: 'EMV Contactless',
    standard: 'ISO 14443',
    desc: 'Pago sin contacto por aproximación NFC. Compatible con terminales POS contactless y pagos móviles.',
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    icon: Layers,
    name: 'Dual Interface',
    standard: 'Contacto + NFC',
    desc: 'Un solo chip que opera por contacto y contactless. La opción más versátil para bancos que ofrecen ambas modalidades.',
    color: 'text-violet-600 bg-violet-50',
  },
  {
    icon: ShieldCheck,
    name: 'MIFARE Classic',
    standard: 'ISO 14443-A',
    desc: 'Chip RFID ampliamente usado en control de acceso, fidelización y sistemas de transporte en entornos bancarios y empresariales.',
    color: 'text-orange-600 bg-orange-50',
  },
  {
    icon: ShieldCheck,
    name: 'MIFARE DESFire',
    standard: 'EV2 / EV3',
    desc: 'Alta seguridad con cifrado AES. Ideal para bancos que requieren mayor protección criptográfica en programas de fidelización y acceso.',
    color: 'text-rose-600 bg-rose-50',
  },
  {
    icon: Settings,
    name: 'Spec del banco',
    standard: 'Cualquier requerimiento',
    desc: 'Coordinamos con proveedores especializados para suministrar el chip exacto que su institución requiere, según pliego técnico.',
    color: 'text-gray-600 bg-gray-100',
  },
]

const specs = [
  'Material: PVC de alta calidad (0.76 mm)',
  'Dimensiones: CR-80 (85.6 × 54 mm)',
  'Chip según especificación del banco',
  'Banda magnética triple pista (opcional)',
  'Personalización variable por lote (BIN/CVV)',
  'Grabado en relieve disponible',
  'Impresión full color — anverso y reverso',
  'Hologramas de seguridad disponibles',
]

const certBadges = [
  'EMV Certified',
  'ISO 7816',
  'ISO 14443',
  'PCI DSS',
  'MIFARE Compatible',
  'CR-80 Standard',
  'Contactless NFC',
  'AES 128 / AES 256',
]

export default function TarjetasBanca() {
  return (
    <>
      <SEOHead
        title="Tarjetas PVC Bancarias — EMV, MIFARE, Dual Interface | Importadora Perú y Bolivia — Key Solutions S.A.C"
        description="Importadora de tarjetas PVC bancarias con múltiples tecnologías de chip: EMV contacto (ISO 7816), EMV contactless (ISO 14443), dual interface, MIFARE Classic, MIFARE DESFire EV2/EV3 y chip según especificación del banco. Proveedor para bancos, cooperativas y financieras en Perú y Bolivia. VISA · Mastercard · Diners Club."
        keywords="tarjetas PVC bancarias Peru, chip EMV Peru Bolivia, tarjetas debito credito PVC Peru, MIFARE DESFire tarjetas banco, dual interface tarjeta bancaria, tarjetas contactless NFC bancarias, proveedor tarjetas PVC banco Lima, importadora tarjetas PVC financiero, tarjetas VISA Mastercard PVC Peru, chip ISO 7816 ISO 14443 banco, tarjetas bancarias Bolivia, personalización variable tarjetas banco"
        path="/tarjetas-bancarias"
        structuredData={structuredData}
      />

      <ProductDetailHero
        label="Importadora especializada — Perú y Bolivia"
        title="Tarjetas PVC Bancarias con Múltiples Tecnologías de Chip"
        subtitle="EMV Contacto · EMV Contactless · Dual Interface · MIFARE · Chip según especificación — Para bancos, cooperativas y financieras"
      />

      {/* Chip technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Tecnologías disponibles"
            title="Cualquier chip que su banco requiera"
            subtitle="Trabajamos con proveedores especializados para suministrar la tecnología de chip exacta que su institución financiera necesita, con todas las certificaciones correspondientes."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chipTechs.map((tech, i) => {
              const Icon = tech.icon
              return (
                <AnimatedSection key={tech.name} delay={i * 0.07}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow h-full">
                    <div className={`inline-flex p-3 rounded-xl mb-4 ${tech.color}`}>
                      <Icon size={22} />
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-base font-bold text-navy-900">{tech.name}</h3>
                      <span className="text-xs font-medium text-gray-400">{tech.standard}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{tech.desc}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle
            label="Ejemplos de producción"
            title="Tarjetas para las principales redes de pago"
            subtitle="Producción certificada con la tecnología de chip y personalización variable que cada red requiere."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tarjetasBanca.map((card, i) => (
              <ProductCard key={card.title} product={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Specs + image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <AnimatedSection direction="left">
            <img
              src={tres}
              alt="Tarjetas PVC bancarias con chip — Key Solutions"
              className="w-full max-w-md mx-auto rounded-2xl shadow-card-hover animate-float"
            />
          </AnimatedSection>
          <AnimatedSection direction="right">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue">
              Especificaciones técnicas
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-navy-900 mb-6">
              Estándar internacional de calidad
            </h2>
            <ul className="space-y-3">
              {specs.map((s) => (
                <li key={s} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-brand-blue flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-brand-navy text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors"
            >
              Solicitar cotización
              <ArrowRight size={17} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-blue">
              Certificaciones y estándares
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-navy-900 mb-3">
              Chip y certificación según lo que su banco exige
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-2xl mx-auto">
              Coordinamos directamente con fabricantes y proveedores certificados para garantizar que cada lote cumpla los estándares técnicos y de seguridad requeridos por su institución financiera.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {certBadges.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-semibold rounded-full shadow-sm"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-card px-8 py-6 max-w-2xl mx-auto">
              <CreditCard className="mx-auto mb-3 text-brand-blue" size={28} />
              <p className="text-navy-900 font-semibold text-base mb-1">
                ¿Tiene un pliego técnico específico?
              </p>
              <p className="text-gray-500 text-sm mb-5">
                Envíenos las especificaciones de chip, red de pago, certificación y personalización. Evaluamos con nuestros proveedores y le presentamos una propuesta.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white text-sm font-semibold rounded-xl hover:bg-navy-800 transition-colors"
              >
                Enviar especificaciones
                <ArrowRight size={15} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
