export default {
  name: 'home',
  title: 'Página de Inicio',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Título Principal (Hero)',
      type: 'string',
    },
    {
      name: 'heroSubtitle',
      title: 'Subtítulo (Efecto Máquina de Escribir)',
      type: 'string',
    },
    {
      name: 'aboutMission',
      title: 'Nuestra Misión',
      type: 'text',
    },
    {
      name: 'aboutVision',
      title: 'Nuestra Visión',
      type: 'text',
    },
    {
      name: 'aboutImage',
      title: 'Imagen de Nosotros',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'servicesList',
      title: 'Lista de Servicios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Título del Servicio', type: 'string' },
            { name: 'description', title: 'Descripción', type: 'text' },
            { name: 'icon', title: 'Emoji del Ícono (ej: 🌐, 🛒, 📅, 📍, 🤖, 🔧)', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'contactTitle',
      title: 'Título de Contacto',
      type: 'string',
    },
    {
      name: 'contactDescription',
      title: 'Descripción de Contacto',
      type: 'text',
    },
    {
      name: 'whatsappNumber',
      title: 'Número de WhatsApp',
      type: 'string',
    }
  ]
}
