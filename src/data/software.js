// ─── Soluciones empresariales de software ──────────────────────────────────
// Segunda línea de negocio de Key Solutions, junto a la importación de insumos.

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
    title: 'Key ERP',
    tagline: 'Un solo sistema de gestión, adaptable a cada empresa',
    description:
      'Nuestro ERP propio: un motor central con módulos que se activan según lo que su empresa necesita hoy, y crece con usted sin migrar de sistema.',
    href: '/key-erp',
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
  {
    icon: 'Package',
    title: 'Inventario y Almacenes',
    description: 'Control de stock por sede, reposición automática y trazabilidad completa de cada movimiento.',
  },
  {
    icon: 'Calculator',
    title: 'Contabilidad',
    description: 'Asientos contables automáticos por cada evento del negocio, sobre un único libro central.',
  },
  {
    icon: 'ShoppingBag',
    title: 'Compras y Pagos a Proveedores',
    description: 'Verificación automática entre orden, recepción y factura, con cuentas por pagar siempre al día.',
  },
  {
    icon: 'Truck',
    title: 'Activos Fijos',
    description: 'Alta automática desde la factura, depreciación calculada sola cada mes y control de traslados entre sedes.',
  },
  {
    icon: 'FileSignature',
    title: 'Contratos de Servicios',
    description: 'Devengo mensual automático y alertas de vencimiento antes de que un contrato o garantía expire.',
  },
  {
    icon: 'Receipt',
    title: 'Viáticos',
    description: 'Portal de empleado con anticipo precalculado y liquidación balanceada, sin ajustes manuales.',
  },
  {
    icon: 'TrendingUp',
    title: 'Proyectos y Presupuesto',
    description: 'Presupuesto por fase con ejecución en vivo y alertas antes de exceder lo aprobado.',
  },
  {
    icon: 'BarChart3',
    title: 'BI y Reportes Gerenciales',
    description: 'Panel ejecutivo en tiempo real y reportes que se envían solos por correo, sin armarlos a mano.',
  },
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
    title: 'On-premise o en la nube',
    description:
      'Se despliega dentro de la infraestructura de su empresa o en la nube, según sus políticas de seguridad y datos.',
  },
]

export const erpDifferentiators = [
  'Un solo motor contable para todos los módulos: cada documento genera su asiento automáticamente, sin duplicar trabajo entre áreas.',
  'Ciclo de vida de documentos inmutable (borrador → confirmado → contabilizado), pensado para auditorías confiables.',
  'Instalación en horas, no en meses de consultoría — sin depender de un proyecto de implementación externo.',
  'Crece módulo por módulo: no se paga ni se mantiene lo que la empresa todavía no usa.',
]
