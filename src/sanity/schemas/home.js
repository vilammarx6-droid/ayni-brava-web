export default {
  name: 'home',
  title: 'Página de Inicio',
  type: 'document',
  initialValue: {
    navItems: [
      {
        label: '¿Qué Hacemos?',
        url: '/servicios',
        isVisible: true,
        isPronto: false,
        dropdownItems: [
          { label: 'Webs Corporativas', url: '/servicios#service-0' },
          { label: 'Tiendas Online', url: '/servicios#service-1' },
          { label: 'Sistemas de Reserva', url: '/servicios#service-2' },
          { label: 'SEO Local', url: '/servicios#service-3' },
          { label: 'Misión y Visión', url: '/nosotros' }
        ]
      },
      { label: 'Agencia de IA', url: '/nosotros', isVisible: true, isPronto: true },
      { label: 'Blog', url: '/', isVisible: true, isPronto: true }
    ],
    navCtaText: 'Cotizar Gratis',
    servicesList: [
      { title: 'Webs Corporativas y Landing Pages', description: 'Diseñamos sitios profesionales y de alta conversión que proyectan autoridad y captan clientes potenciales de forma automatizada.', icon: '🌐' },
      { title: 'Tiendas Online (E-commerce)', description: 'Catálogos digitales autoadministrables con carritos de compra y pasarelas de pago listas para vender tus productos 24/7.', icon: '🛒' },
      { title: 'Sistemas de Reserva Automáticos', description: 'Perfecto para turismo y hoteles. Sistemas que sincronizan disponibilidad y pagos sin intervención humana.', icon: '📅' },
      { title: 'Diseño Responsivo y SEO Local', description: 'Webs ultra rápidas en celulares y optimizadas a nivel de código para aparecer primero en Google Maps y búsquedas locales.', icon: '📍' },
      { title: 'Automatización WhatsApp + IA', description: 'Conectamos tu web a herramientas de inteligencia artificial para responder consultas y agendar clientes vía WhatsApp.', icon: '🤖' },
      { title: 'Mantenimiento y Soporte Técnico', description: 'Nos encargamos de los servidores, copias de seguridad y actualizaciones para que tu tecnología nunca se detenga.', icon: '🔧' }
    ],
    aboutVision: 'Ser el ecosistema referente en descentralización tecnológica y optimización del trabajo en zonas rurales. Logramos que la Inteligencia Artificial sea una herramienta accesible, económica y funcional que opere incluso sin conexión a internet para eliminar las brechas de conectividad.',
    contactTitle: '¿Listo para optimizar tu negocio?',
    contactDescription: 'Brindamos consultoría técnica gratuita para evaluar la situación digital de tu negocio en Chumbivilcas y Cusco. Habla directamente con nosotros y descubre cómo podemos proteger tu capital.',
  },
  groups: [
    { name: 'navigation', title: 'Navegación & Menú' },
    { name: 'hero', title: 'Sección Principal (Hero)' },
    { name: 'about', title: 'Nosotros & Misión' },
    { name: 'services', title: 'Servicios' },
    { name: 'contact', title: 'Contacto & CTA' },
  ],
  fields: [
    // --- NAVEGACIÓN ---
    {
      name: 'navItems',
      title: 'Pestañas del Menú Superior',
      description: 'Crea, oculta o reordena los enlaces del menú principal.',
      type: 'array',
      group: 'navigation',
      of: [
        {
          type: 'object',
          preview: {
            select: { title: 'label', subtitle: 'url' }
          },
          fields: [
            { name: 'label', title: 'Nombre de la Pestaña', type: 'string' },
            { name: 'url', title: 'Enlace (ej: /servicios o /)', type: 'string' },
            { name: 'isVisible', title: '¿Mostrar en la web?', type: 'boolean', initialValue: true },
            { name: 'isPronto', title: '¿Mostrar etiqueta "PRONTO"?', type: 'boolean', initialValue: false },
            {
              name: 'dropdownItems',
              title: 'Submenú (Elementos Desplegables)',
              description: 'Opcional. Si agregas elementos aquí, esta pestaña tendrá una flecha desplegable.',
              type: 'array',
              of: [
                {
                  type: 'object',
                  preview: {
                    select: { title: 'label', subtitle: 'url' }
                  },
                  fields: [
                    { name: 'label', title: 'Nombre', type: 'string' },
                    { name: 'url', title: 'Enlace (ej: /servicios#service-0)', type: 'string' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'navCtaText',
      title: 'Texto del Botón Superior',
      type: 'string',
      group: 'navigation',
      initialValue: 'Cotizar Gratis',
    },
    
    // --- HERO ---
    {
      name: 'heroTitle',
      title: 'Título Principal',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroSubtitle',
      title: 'Subtítulo (Efecto Máquina de Escribir)',
      type: 'string',
      group: 'hero',
    },

    // --- ABOUT ---
    {
      name: 'aboutMission',
      title: 'Nuestra Misión',
      type: 'text',
      group: 'about',
    },
    {
      name: 'aboutVision',
      title: 'Nuestra Visión',
      type: 'text',
      group: 'about',
    },
    {
      name: 'aboutImage',
      title: 'Imagen de Nosotros',
      type: 'image',
      group: 'about',
      options: { hotspot: true }
    },

    // --- SERVICES ---
    {
      name: 'servicesList',
      title: 'Lista de Servicios',
      type: 'array',
      group: 'services',
      of: [
        {
          type: 'object',
          preview: {
            select: { title: 'title', subtitle: 'description' }
          },
          fields: [
            { name: 'title', title: 'Título del Servicio', type: 'string' },
            { name: 'description', title: 'Descripción', type: 'text' },
            { name: 'icon', title: 'Emoji del Ícono (ej: 🌐, 🛒, 📅, 📍, 🤖, 🔧)', type: 'string' }
          ]
        }
      ]
    },

    // --- CONTACT ---
    {
      name: 'contactTitle',
      title: 'Título de Contacto',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'contactDescription',
      title: 'Descripción de Contacto',
      type: 'text',
      group: 'contact',
    },
    {
      name: 'whatsappNumber',
      title: 'Número de WhatsApp',
      type: 'string',
      group: 'contact',
    }
  ]
}
