import variasTarjetas from '../assets/varias-tarjetas.png'
import tarjetaHotel from '../assets/tarjeta-hotel.png'
import sobreRfid from '../assets/sobre-rfid.jpg'
import rollos from '../assets/rollos.png'
import formatosPreimpresos from '../assets/formatos-preimpresos.webp'

// ─── Overview for home / productos page ───────────────────────────────────────
export const productCategories = [
  {
    id: 'tarjetas-bancarias',
    title: 'Tarjetas PVC Bancarias',
    subtitle: 'EMV · MIFARE · Dual Interface · Spec del banco',
    description:
      'Ofrecemos tarjetas PVC bancarias con múltiples tecnologías de chip: EMV contacto, EMV contactless, dual interface, MIFARE Classic, MIFARE DESFire y chip según especificación. Personalización variable para VISA, Mastercard, Diners Club y más.',
    image: variasTarjetas,
    href: '/tarjetas-bancarias',
    tags: ['EMV', 'MIFARE', 'Dual Interface'],
  },
  {
    id: 'tarjetas-empresa',
    title: 'Tarjetas Empresa',
    subtitle: 'Identificación · Control de Acceso · Hotel',
    description:
      'Tarjetas PVC para hoteles, casinos, empresas y sistemas de transporte. Chip, banda magnética y código de barras disponibles.',
    image: tarjetaHotel,
    href: '/tarjetas-empresa',
    tags: ['PVC', 'Chip', 'Código de barras'],
  },
  {
    id: 'fundas-rfid',
    title: 'Fundas de Bloqueo RFID',
    subtitle: 'Protección anti-clonación',
    description:
      'Fundas de papel aluminio que bloquean señales RFID. Delgadas, impermeables y personalizables con el logo de tu empresa.',
    image: sobreRfid,
    href: '/fundas-rfid',
    tags: ['Anti-RFID', 'Aluminio', 'Waterproof'],
  },
  {
    id: 'rollos-termicos',
    title: 'Rollos Térmicos',
    subtitle: '80×80 · Autocopiante · ATM / POS',
    description:
      'Rollos térmicos de alta calidad para impresoras POS y cajeros automáticos. Calidad garantizada en metraje, peso y diámetro.',
    image: rollos,
    href: '/rollos-termicos',
    tags: ['80×80', 'POS', 'ATM'],
  },
  {
    id: 'sobres-preimpresos',
    title: 'Sobres y Formularios',
    subtitle: 'Formas continuas · PIN Mailer · Ventana',
    description:
      'Sobres con ventana, formularios continuos y sobres PIN Mailer de seguridad para el sector financiero y empresarial.',
    image: formatosPreimpresos,
    href: '/sobres-preimpresos',
    tags: ['PIN Mailer', 'Ventana', 'Formas continuas'],
  },
]

// ─── Detail data per category ──────────────────────────────────────────────────

import visaDebito from '../assets/visa-debito.jpeg'
import mastercardCredito from '../assets/mastercard-credito.png'
import dinner from '../assets/dinner.jpeg'

export const tarjetasBanca = [
  {
    title: 'VISA Débito / Crédito',
    description: 'Tarjeta PVC contactless con chip EMV y banda magnética. Incluye personalización variable (BIN/CVV) y sobre de entrega.',
    image: visaDebito,
    features: ['Chip EMV contactless', 'Banda magnética', 'Grabado en relieve', 'Sobre de entrega'],
  },
  {
    title: 'Mastercard Débito / Crédito',
    description: 'Tarjeta de alta calidad con tecnología de pago sin contacto. Instalaciones certificadas para producción y personalización.',
    image: mastercardCredito,
    features: ['Contactless', 'Programación de chip', 'Codificación de banda', 'Certificación Mastercard'],
  },
  {
    title: 'Diners Club',
    description: 'Tarjeta premium con todas las especificaciones Diners Club. Diseño exclusivo y máxima calidad en materiales.',
    image: dinner,
    features: ['Estándar Diners Club', 'Chip EMV', 'Banda magnética', 'Personalización por lote'],
  },
]

import tarjetaIdentificacion from '../assets/tarjeta-identificacion.avif'
import tarjetaPvcHotel from '../assets/tarjeta-pvc-hotel.png'

export const tarjetasEmpresa = [
  {
    title: 'Tarjeta de Identificación / Acceso',
    description: 'Tarjeta PVC para control de acceso, carnet corporativo y sistemas de identificación. Compatible con lectores de chip y banda.',
    image: tarjetaIdentificacion,
    features: ['Chip + Banda magnética', 'Código de barras', 'Impresión variable', 'Personalización total'],
  },
  {
    title: 'Tarjeta Llave de Hotel',
    description: 'Tarjeta magnética para apertura de habitaciones. Utilizada por hoteles, casinos y complejos residenciales.',
    image: tarjetaPvcHotel,
    features: ['Chip compatible', 'Banda magnética', 'Diseño a medida', 'Durabilidad garantizada'],
  },
]

import unSobre from '../assets/un-sobre.webp'
import sobrerfidPortada from '../assets/sobrerfid-portada.svg'

export const fundasBloqueo = [
  {
    title: 'Funda de Bloqueo RFID Individual',
    description: 'Funda de papel aluminio waterproof que bloquea la señal RFID de tarjetas de crédito, débito y documentos. Diseño slim para bolsillos y billeteras.',
    image: unSobre,
    features: ['Bloqueo RFID 100%', 'Papel aluminio impermeable', 'Perfil delgado', 'Múltiples colores'],
  },
  {
    title: 'Funda RFID Personalizada',
    description: 'Versión con impresión full color para bancos y empresas. Ideal como material de entrega junto a tarjetas bancarias nuevas.',
    image: sobrerfidPortada,
    features: ['Impresión full color', 'Logo corporativo', 'Producción por lote', 'Variedad de tamaños'],
  },
]

import rollos80 from '../assets/rollos80.jpeg'
import rolloAutocopiante from '../assets/rollo-autocopiante.jpeg'

export const rollosTerm = [
  {
    title: 'Rollo Térmico 80×80',
    description: 'Rollo de papel térmico estándar 80mm × 80mm para impresoras POS y terminales de punto de venta. Alta calidad de impresión.',
    image: rollos80,
    features: ['Medida 80×80mm', 'Compatible POS', 'Alta definición', 'Calidad certificada'],
  },
  {
    title: 'Rollo Autocopiante',
    description: 'Rollo de papel autocopiante para matrices y comprobantes con copia. Ideal para cajeros y sistemas que requieren duplicado físico.',
    image: rolloAutocopiante,
    features: ['Autocopiante', 'Compatible cajeros ATM', 'Alta transcripción', 'Tamaños personalizados'],
  },
]

import sobreVentana from '../assets/sobre-ventana.avif'
import pinmailer from '../assets/pinmailer.jpeg'

export const sobres = [
  {
    title: 'Sobre con Ventana',
    description: 'Sobre preimpreso con ventana transparente para envíos corporativos y estados de cuenta. Diseño personalizable.',
    image: sobreVentana,
    features: ['Ventana transparente', 'Preimpreso a medida', 'Papel de calidad', 'Varios formatos'],
  },
  {
    title: 'PIN Mailer de Seguridad',
    description: 'Sobre de seguridad para envío de PINs y datos confidenciales. Utilizado por bancos para la entrega de claves de tarjetas.',
    image: pinmailer,
    features: ['Alta seguridad', 'Anti-manipulación', 'Impresión variable', 'Estándar bancario'],
  },
  {
    title: 'Formas Continuas',
    description: 'Formularios continuos preimpresos para impresoras matriciales. Personalizados con el diseño y datos de cada empresa.',
    image: formatosPreimpresos,
    features: ['Impresión matricial', 'Diseño personalizado', 'Control de calidad', 'Múltiples copias'],
  },
]
