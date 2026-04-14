import { persistentAtom } from '@nanostores/persistent';

export type Language = 'es' | 'en';

// Store persistente: guarda el idioma en localStorage automáticamente
export const currentLang = persistentAtom<Language>('selected-lang', 'es');

export const translations: Record<Language, any> = {
  es: {
    hero: {
      title1: "Creamos",
      title2: "el Futuro",
      meta: "Arquitectura digital de <span class='text-main-text font-semibold'>alto impacto</span> y rendimiento optimizado.",
      cta: "Iniciar Proyecto",
      catalog: "Ver Catálogo"
    },
    services: {
      mainTitle: "Servicios de Personalización",
      titles: ["Textil & Estampado", "Mugs & Tazas", "Diseño Gráfico", "Fotos Polaroid", "Láminas de Aluminio", "Papelería Creativa"],
      descs: [
        "Sublimación y DFT de alta definición en franelas y prendas.",
        "Personalización premium de tazas con colores vibrantes.",
        "Vectorización y artes listos para impresión profesional.",
        "Fotos tipo Polaroid con laminados de alta protección.",
        "Impresiones de lujo sobre aluminio para reconocimientos.",
        "Stickers y empaques que elevan tu identidad de marca."
      ]
    },
    about: {
      subtitle: "Nuestra Esencia",
      title: "Donde el Diseño encuentra la Materia",
      p1: "En <span class='text-cyan-500 font-bold'>Midnight Studio</span>, no solo estampamos; construimos identidades visuales de alto impacto.",
      p2: "Combinamos técnicas avanzadas de sublimación y DFT con un ojo crítico en el diseño gráfico para transformar ideas en piezas tangibles de lujo.",
      feature1: "Calidad Premium",
      feature2: "Diseño Único",
      feature3: "Detalle"
    },
    cart: {
      title: "Finalizar Pedido",
      subtitle: "Completa tus datos de envío",
      name: "Nombre",
      id: "Cédula",
      phone: "WhatsApp",
      method: "Método",
      date: "Fecha",
      address: "Dirección",
      payment: "Pago",
      summary: "Resumen de Comanda",
      total: "Total estimado",
      send: "Confirmar por WhatsApp"
    },
    product: {
      price: "Precio"
    },
    gallery: {
  title: "Gallerya Creativa",
  subtitle: "Proyectos Recientes",
  viewWork: "Ver Detalle"
},contact: {
  subtitle: "Hablemos de tu marca",
  title: "Transforma tus <br/> ideas en materia",
  name: "Nombre / Empresa",
  email: "Correo Electrónico",
  message: "Cuéntanos sobre tu próximo proyecto...",
  send: "Enviar Solicitud",
  socials: "Conecta con el estudio",
  success: "Tu mensaje ha sido recibido. Nos pondremos en contacto pronto."
},
footer: {
  description: "Elevando el diseño y la producción textil a un nivel superior.",
  schedule_title: "Horario de Atención",
  schedule_days: "Martes a Domingo",
  schedule_hours: "10:00 AM - 10:00 PM",
  quick_links: "Enlaces Rápidos",
  rights: "Todos los derechos reservados."
},
  },
  en: {
    hero: {
      title1: "Building",
      title2: "the Future",
      meta: "High-impact <span class='text-main-text font-semibold'>digital architecture</span> and optimized performance.",
      cta: "Start Project",
      catalog: "View Catalog"
    },
    services: {
      mainTitle: "Customization Services",
      titles: ["Textiles & Printing", "Mugs & Cups", "Graphic Design", "Polaroid Photos", "Aluminum Sheets", "Creative Stationery"],
      descs: [
        "High-definition sublimation and DFT on various garments.",
        "Premium customization of mugs with vibrant colors.",
        "Professional vectorization and print-ready artwork.",
        "Polaroid-style photos with protective special finishes.",
        "Luxury aluminum prints for plaques and awards.",
        "Custom stickers and packaging to boost your brand."
      ]
    },
    about: {
      subtitle: "Our Essence",
      title: "Where Design Meets Matter",
      p1: "At <span class='text-cyan-500 font-bold'>Midnight Studio</span>, we don't just print; we build high-impact visual identities.",
      p2: "We combine advanced sublimation and DFT techniques with a critical eye on graphic design to transform ideas into tangible luxury pieces.",
      feature1: "Premium Quality",
      feature2: "Unique Design",
      feature3: "Detail"
    },
    cart: {
      title: "Checkout",
      subtitle: "Complete your shipping details",
      name: "Full Name",
      id: "ID Number",
      phone: "WhatsApp Number",
      method: "Method",
      date: "Date",
      address: "Address",
      payment: "Payment",
      summary: "Order Summary",
      total: "Estimated Total",
      send: "Confirm via WhatsApp"
    },
    product: {
      price: "Price"
    },
    gallery: {
  title: "Creative Showcase",
  subtitle: "Recent Projects",
  viewWork: "View Detail"
},
contact: {
  subtitle: "Let's talk branding",
  title: "Turning your <br/> ideas into matter",
  name: "Name / Company",
  email: "Email Address",
  message: "Tell us about your next project...",
  send: "Send Inquiry",
  socials: "Connect with the studio",
  success: "Inquiry received. We will get back to you shortly."
},footer: {
  description: "Elevating design and textile production to a higher level.",
  schedule_title: "Opening Hours",
  schedule_days: "Tuesday to Sunday",
  schedule_hours: "10:00 AM - 10:00 PM",
  quick_links: "Quick Links",
  rights: "All rights reserved."
}
  }
};