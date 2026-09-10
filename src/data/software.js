// ─── Soluciones empresariales de software ──────────────────────────────────
// Segunda línea de negocio de Key Solutions, junto a la provisión de insumos.

export const softwareServices = [
  {
    id: 'desarrollo-web',
    icon: 'Globe',
    title: 'Desarrollo Web',
    tagline: 'Sitios y aplicaciones web modernas, a medida y escalables',
    description:
      'Diseño y construcción de sitios corporativos, landing pages y tiendas online con tecnología actual, rendimiento alto y una arquitectura pensada para crecer con su negocio.',
    href: '/desarrollo-web',
  },
  {
    id: 'software-a-medida',
    icon: 'LayoutGrid',
    title: 'Software a Medida',
    tagline: 'Aplicaciones y automatización para procesos internos',
    description:
      'Desarrollamos el sistema que su operación necesita: paneles de gestión, integraciones entre plataformas existentes y automatización de procesos manuales.',
    href: '/software-a-medida',
  },
  {
    id: 'key-erp',
    icon: 'Boxes',
    title: 'KeyERP',
    tagline: 'Gestión del gasto administrativo con rastro completo',
    description:
      'Nuestro producto principal: compras, cuentas por pagar, contabilidad, activos, contratos, viáticos, caja chica y presupuesto en un solo sistema, instalado en los servidores de su empresa.',
    href: 'https://keyerp.keysolutionssac.com',
    external: true,
  },
]

// ─── Desarrollo Web ─────────────────────────────────────────────────────────

export const webDevServices = [
  {
    icon: 'MonitorSmartphone',
    title: 'Landing Pages',
    description:
      'Páginas de una sola vista, pensadas para convertir: carga rápida, mensaje claro y formulario de contacto conectado a su equipo comercial.',
  },
  {
    icon: 'Building2',
    title: 'Sitios Corporativos',
    description:
      'Presencia web multi-página para su empresa: institucional, servicios, equipo y contacto, con una estructura de contenido ordenada y fácil de mantener.',
  },
  {
    icon: 'ShoppingCart',
    title: 'E-commerce',
    description:
      'Tiendas online con catálogo, carrito y pagos integrados. Preparadas para operar desde el primer día y para escalar cuando el catálogo crece.',
  },
  {
    icon: 'FileStack',
    title: 'Portales y CMS',
    description:
      'Blogs, portales de contenido y paneles administrables para que su equipo publique sin depender de un desarrollador para cada cambio.',
  },
]

export const webDevStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS',
  'PostgreSQL', 'APIs REST', 'Infraestructura Cloud',
]

export const webDevProcess = [
  {
    step: '01',
    title: 'Descubrimiento',
    description: 'Entendemos su negocio, su público y lo que el sitio necesita lograr antes de diseñar nada.',
  },
  {
    step: '02',
    title: 'Diseño',
    description: 'Propuesta visual a medida, alineada a su marca — sin plantillas genéricas.',
  },
  {
    step: '03',
    title: 'Desarrollo',
    description: 'Construcción con tecnología moderna, código ordenado y rendimiento como prioridad.',
  },
  {
    step: '04',
    title: 'Lanzamiento y soporte',
    description: 'Publicación, monitoreo y acompañamiento continuo después de salir en vivo.',
  },
]

// ─── Software a Medida ──────────────────────────────────────────────────────

export const customSoftwareUseCases = [
  {
    icon: 'Workflow',
    title: 'Automatización de procesos',
    description:
      'Reemplazamos hojas de cálculo y tareas repetitivas por flujos automáticos: aprobaciones, cálculos, generación de documentos y notificaciones.',
  },
  {
    icon: 'GitMerge',
    title: 'Integraciones entre sistemas',
    description:
      'Conectamos las plataformas que ya usa su empresa — facturación, bancos, proveedores — para que la información viaje sola entre ellas.',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Paneles de gestión',
    description:
      'Tableros a medida para que cada área vea sus indicadores clave en tiempo real, sin armar reportes manualmente cada mes.',
  },
  {
    icon: 'Building',
    title: 'Aplicaciones internas',
    description:
      'Sistemas de uso interno para operación diaria: control de inventario, gestión de personal, seguimiento de proyectos y más.',
  },
]

export const customSoftwareApproach = [
  {
    title: 'Levantamiento del proceso real',
    description: 'Mapeamos cómo trabaja su equipo hoy, no cómo debería trabajar en teoría.',
  },
  {
    title: 'Arquitectura a medida',
    description: 'Diseñamos el sistema alrededor de su proceso, no al revés.',
  },
  {
    title: 'Entregas incrementales',
    description: 'Ponemos en uso cada módulo apenas está listo, sin esperar meses para ver resultados.',
  },
  {
    title: 'Soporte y evolución',
    description: 'El software crece con su empresa: nuevos módulos, nuevas reglas, nuevas integraciones.',
  },
]

// ─── Key ERP ────────────────────────────────────────────────────────────────

export const erpModules = [
  { title: 'Compras', description: 'Requisición, cotización con puntaje, orden de compra y recepción. Cada documento cita al anterior.' },
  { title: 'Cuentas por pagar', description: 'Factura conciliada en tres vías contra orden y recepción, retenciones calculadas y pago cruzado con el banco.' },
  { title: 'Contabilidad', description: 'Cada factura, pago y depreciación genera su asiento sobre el plan de cuentas de la empresa.' },
  { title: 'Activos fijos', description: 'Alta desde la orden de compra, depreciación mensual, traslados entre sedes y baja con asiento.' },
  { title: 'Contratos de servicio', description: 'Cuotas, devengo mensual y alertas antes de que un contrato venza sin nadie mirando.' },
  { title: 'Viáticos', description: 'Solicitud, anticipo, rendición con comprobantes y saldo calculado.' },
  { title: 'Caja chica', description: 'Fondos por sede con reposición automática al llegar al umbral.' },
  { title: 'Presupuesto', description: 'Comprometido al emitir la orden y ejecutado al facturar: el disponible es real en todo momento.' },
  { title: 'Paneles', description: 'Gasto por sede, proveedor y categoría, con detección de duplicados y desvíos.' },
]

export const erpCustomization = [
  {
    icon: 'ToggleRight',
    title: 'Módulos que se activan a demanda',
    description:
      'Cada empresa empieza con lo que necesita — inventario, por ejemplo — y suma módulos cuando los necesita, sin migrar datos ni reinstalar nada.',
  },
  {
    icon: 'Sliders',
    title: 'Parámetros configurables por cliente',
    description:
      'Flujos de aprobación, tolerancias, umbrales de alerta y reglas de negocio se configuran para cada empresa, sin tocar una línea de código.',
  },
  {
    icon: 'Palette',
    title: 'Marca propia por despliegue',
    description:
      'Cada instalación puede llevar el nombre y la identidad visual de su empresa.',
  },
  {
    icon: 'Server',
    title: 'Instalado en su empresa',
    description:
      'Corre en los servidores de su empresa. Ninguna cifra, documento ni usuario viaja a un tercero.',
  },
]

export const erpDifferentiators = [
  'Cada documento cita al anterior: la pregunta «¿de dónde salió este gasto?» se contesta con un clic, no con una reunión.',
  'El presupuesto se compromete al emitir la orden, así que nadie descubre el sobregiro a fin de mes.',
  'Cada cambio queda con quién, cuándo y por qué. Pensado para pasar auditoría en poco tiempo.',
  'Se licencia por módulos y se instala en los servidores de la empresa; sumar un módulo después no exige reinstalar nada.',
]
