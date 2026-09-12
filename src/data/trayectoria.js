import partner2ps from '../assets/partner2ps.png'
import partnerEnotria from '../assets/partnerEnotria.png'

/*
 * Trayectoria de la empresa: líneas de trabajo, proyectos de software entregados, clientes por
 * sector y empresas con las que colaboramos. Es la fuente de Nosotros, Clientes y la portada.
 * Sólo nombres de instituciones públicas y conocidas; sin datos internos.
 */

export const tracks = [
  {
    title: 'Tarjetas bancarias y de identificación',
    body: 'Tarjetas de débito y crédito Visa, Mastercard y Diners Club con el chip que cada emisor requiere, y tarjetas de identificación, telefonía, control de acceso y llaves de hotel. Producción con fabricantes certificados y personalización según la especificación del banco.',
    items: ['Débito y crédito EMV, contactless y dual interface', 'Identificación de asociados y personal', 'Llaves magnéticas para hotelería', 'Tarjetas de telefonía y de fidelidad'],
  },
  {
    title: 'Insumos para la operación bancaria',
    body: 'Formas continuas, sobres PIN mailer y con ventana, cheques y giros en papel de seguridad para valorados, rollos térmicos para cajeros automáticos y puntos de venta, y fundas de bloqueo RFID.',
    items: ['Cheques y giros en papel de seguridad', 'Sobres PIN mailer y formas continuas', 'Rollos térmicos para ATM y POS', 'Fundas de bloqueo RFID'],
  },
  {
    title: 'Software y canales electrónicos',
    body: 'Desarrollo e integración de sistemas para instituciones financieras: canales electrónicos, administración de filas y kioscos con hardware propio, sistemas de cobranza y recarga, y herramientas para la operación SWIFT y comercio exterior. Hoy, además, KeyERP.',
    items: ['Home banking, banca telefónica y switch de cajeros', 'Administración de filas y kioscos multimedia', 'Cobranzas y recarga de saldo a celulares', 'Herramientas para mensajería SWIFT y comercio exterior', 'KeyERP: gestión del gasto administrativo'],
  },
]

/* Sistemas instalados en instituciones financieras. Sin decir cuál en cuál: eso es de cada cliente. */
export const installedSystems = [
  { system: 'Administración de filas', body: 'Con hardware propio y mantenimiento local, en bancos, mutuales, cooperativas y una AFP.' },
  { system: 'Switch para cajeros automáticos', body: 'Operando la red de ATM de bancos del sistema financiero boliviano.' },
  { system: 'Home banking y banca telefónica', body: 'Canales electrónicos con IVR para clientes de banca de personas.' },
  { system: 'Pasarela con la procesadora de tarjetas', body: 'Comunicación entre el núcleo bancario y la administradora de tarjetas de crédito.' },
  { system: 'Herramientas para mensajería SWIFT', body: 'Resúmenes, estados de cuenta, órdenes de pago y envío automático a clientes, para el área de comercio exterior.' },
  { system: 'Cobranza y recarga de saldo', body: 'Soluciones de pago e IVR para venta de minutos y recarga a celulares.' },
  { system: 'Kioscos multimedia', body: 'Autoservicio en agencias, con diseño propio.' },
]

/* Instituciones que han confiado en el equipo a lo largo de su trayectoria, por sector. */
export const clientsBySector = [
  {
    sector: 'Bancos',
    names: [
      'Banco Bisa', 'Banco de Crédito', 'Banco Económico', 'Banco Ecofuturo', 'Banco Fassil',
      'Banco FIE', 'Banco Fortaleza', 'Banco Ganadero', 'Banco Los Andes', 'Banco Mercantil Santa Cruz',
      'Banco Nacional de Bolivia', 'Banco Prodem', 'Banco PyME de la Comunidad', 'Banco Sol', 'Banco Unión',
      'Banco de la Nación Argentina', 'Banco do Brasil',
    ],
  },
  {
    sector: 'Redes de pago y procesadoras',
    names: ['ATC', 'Linkser', 'Red Enlace', 'ServiRed'],
  },
  {
    sector: 'Cooperativas de ahorro y crédito',
    names: [
      'Jesús Nazareno', 'Jerusalén', 'La Merced', 'La Trinidad', 'San Mateo', 'El Buen Samaritano',
      'Fátima', 'Hospicio', 'Montero', 'San Gabriel', 'San Luis', 'San Martín de Porres', 'San Pedro',
    ],
  },
  {
    sector: 'Mutuales, fondos y AFP',
    names: ['AFP Futuro', 'Mutual La Paz', 'Mutual La Primera', 'Mutual La Promotora', 'Mutual Paititi', 'Mutual Pando', 'Mutual La Plata', 'Fortaleza SAFI'],
  },
  {
    sector: 'Seguros',
    names: ['Boliviana Ciacruz de Seguros y Reaseguros', 'Seguros Alianza'],
  },
  {
    sector: 'Telecomunicaciones',
    names: ['ENTEL', 'COTAS', 'COTEATRI', 'Multivisión'],
  },
  {
    sector: 'Sector público',
    names: ['Impuestos Nacionales', 'Ministerio de Relaciones Exteriores', 'Ministerio de Trabajo', 'Caja de Salud de Cochabamba'],
  },
  {
    sector: 'Hotelería y comercio',
    names: ['Hotel Los Tajibos', 'Hotel Europa', 'Hotel Casa Blanca', 'Hotel Garden Plaza', 'Hotel Santa Cruz', 'Burger King', 'Joyería Carrasco'],
  },
]

/* Empresas con las que colaboramos hoy. */
export const partners = [
  {
    name: '2PSecure',
    url: 'https://www.2ps.pe',
    logo: partner2ps,
    body: 'Soluciones para medios de pago con más de 20 años en el sector: arquitectura de TI, ciberseguridad, impresión fija y variable de tarjetas financieras y gestión de valorados.',
  },
  {
    name: 'Enotria',
    url: 'https://www.enotria.pe',
    logo: partnerEnotria,
    body: 'Impresión de formas continuas, valorados y cheques, tarjetas PVC de identificación, llaves de hotel y tarjetas de fidelidad.',
  },
]

export const presence = [
  { country: 'Perú', company: 'Key Solutions S.A.C.', cities: 'Lima', detail: 'Av. Raúl Ferrero 1542, La Molina · RUC 20612618179' },
  { country: 'Bolivia', company: 'ACOVI Solutions Bolivia S.R.L.', cities: 'La Paz, Santa Cruz y Cochabamba', detail: 'Ventas y atención a instituciones en todo el país' },
]
