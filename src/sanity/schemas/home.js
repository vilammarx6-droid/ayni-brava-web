export default {
  name: 'home',
  title: 'Página de Inicio',
  type: 'document',
  preview: {
    prepare() {
      return { title: 'Ayni Brava - Página de Inicio' }
    }
  },
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
    navCtaText: 'Hablemos de tu proyecto',
    servicesList: [
      { title: 'Webs Corporativas y Landing Pages', description: 'Tu presencia en internet, construida para transmitir confianza. Diseñamos páginas que muestran la verdadera autoridad de tu negocio y te ayudan a conseguir clientes todos los días.', icon: '🌐' },
      { title: 'Tiendas Online (E-commerce)', description: 'Vende sin fronteras y sin estrés. Armamos tu tienda digital fácil de manejar, para que tú te enfoques en tu producto mientras el sistema atiende a tus clientes 24 horas al día.', icon: '🛒' },
      { title: 'Sistemas de Reserva Automáticos', description: 'Orden y tranquilidad para tu hotel o agencia. Un asistente digital que organiza tus reservas y cobros automáticamente, ahorrándote dolores de cabeza y evitando cruces de horarios.', icon: '📅' },
      { title: 'Diseño Responsivo y SEO Local', description: 'Haz que tus vecinos y turistas te encuentren primero. Tu web cargará al instante en cualquier celular y destacará en las búsquedas de Google en Cusco y Chumbivilcas.', icon: '📍' },
      { title: 'Automatización WhatsApp + IA', description: 'Tu recepcionista virtual incansable. Usamos Inteligencia Artificial para responder rápido a tus clientes por WhatsApp, sin que tú tengas que estar pegado al teléfono todo el día.', icon: '🤖' },
      { title: 'Mantenimiento y Soporte Técnico', description: 'Nosotros cuidamos la tecnología, tú cuidas tu negocio. Respaldamos tu información y mantenemos todo funcionando sin interrupciones. ¡Nuestro equipo es tu equipo!', icon: '🔧' }
    ],
    aboutMission: 'Acompañar a los empresarios y emprendedores de Cusco y Chumbivilcas en su evolución digital. No solo entregamos sistemas web; compartimos nuestro conocimiento técnico para proteger tu capital, optimizar tu tiempo y hacer que tu negocio compita al más alto nivel, siempre bajo el principio de reciprocidad y ayuda mutua.',
    aboutVision: 'Soñamos con un ecosistema donde la tecnología avanzada no sea un lujo exclusivo de las grandes ciudades. Queremos potenciar el talento de nuestras zonas rurales y lograr que la Inteligencia Artificial sea una herramienta del día a día: cercana, accesible y económica para tu negocio. Creemos en eliminar las brechas tecnológicas, creando soluciones hechas a medida que funcionen incluso sin internet, porque el desarrollo debe ser para todos, avanzando de socio a socio.',
    contactTitle: '¿Conversamos sobre el futuro de tu negocio?',
    contactDescription: 'Te ofrecemos una asesoría técnica gratuita y honesta, de socio a socio, para evaluar tu situación en Cusco o Chumbivilcas. Hablemos sin compromisos y descubramos juntos cómo la tecnología puede proteger tu capital.',
    facebookUrl: '',
    tiktokUrl: ''
  },
  groups: [
    { name: 'navigation', title: 'Navegación & Menú' },
    { name: 'hero', title: 'Sección Principal (Hero)' },
    { name: 'about', title: 'Nosotros & Misión' },
    { name: 'services', title: 'Servicios' },
    { name: 'socialFeed', title: 'Publicaciones Destacadas' },
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
    },
    {
      name: 'facebookUrl',
      title: 'Enlace de Facebook',
      description: 'Pega aquí el enlace de tu página de Facebook. Déjalo en blanco si no quieres que aparezca el ícono.',
      type: 'url',
      group: 'contact',
    },
    {
      name: 'tiktokUrl',
      title: 'Enlace de TikTok',
      description: 'Pega aquí el enlace de tu cuenta de TikTok. Déjalo en blanco si no quieres que aparezca el ícono.',
      type: 'url',
      group: 'contact',
    },
    {
      name: 'latestTikTokUrl',
      title: 'Enlace del Video de TikTok',
      description: 'Pega el enlace completo de tu último video de TikTok para mostrarlo en la web. Ejemplo: https://www.tiktok.com/@ayniglobalsolutions/video/123456789',
      type: 'url',
      group: 'socialFeed',
    },
    {
      name: 'latestFacebookUrl',
      title: 'Enlace de la Publicación de Facebook',
      description: 'Pega el enlace de la publicación. IMPORTANTE: Usa el link directo (ej. https://www.facebook.com/10000.../posts/12345...). NO uses links acortados como /share/p/... porque Facebook bloqueará la previsualización.',
      type: 'url',
      group: 'socialFeed',
    },
    {
      name: 'latestYoutubeUrl',
      title: 'Enlace del Video de YouTube',
      description: 'Pega el enlace de tu último video de YouTube. Ejemplo: https://www.youtube.com/watch?v=123456789',
      type: 'url',
      group: 'socialFeed',
    }
  ]
}
