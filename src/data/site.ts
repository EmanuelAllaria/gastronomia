export const siteConfig = {
  name: "Alma & Fuego",
  tagline: "Gastronomía que despierta los sentidos",
  description:
    "Pizzería artesanal, rotisería casera, restaurante de autor y catering premium. El sabor auténtico de la cocina argentina en un solo lugar.",
  url: "https://almayfuego.com.ar",
  phone: "+54 11 4567-8900",
  whatsapp: "5491145678900",
  email: "hola@almayfuego.com.ar",
  address: "Av. Corrientes 2847, Palermo, CABA",
  hours: {
    weekdays: "Lun – Jue: 11:00 – 00:00",
    weekend: "Vie – Dom: 11:00 – 02:00",
  },
  social: {
    instagram: "https://instagram.com/almayfuego",
    facebook: "https://facebook.com/almayfuego",
    tiktok: "https://tiktok.com/@almayfuego",
  },
};

export const stats = [
  { value: "15+", label: "Años de pasión" },
  { value: "50K+", label: "Clientes felices" },
  { value: "120+", label: "Platos en carta" },
  { value: "4.9", label: "Rating promedio" },
];

export const services = [
  {
    id: "pizzeria",
    title: "Pizzería Artesanal",
    subtitle: "Masa madre, horno de leña",
    description:
      "Pizzas napolitanas con fermentación de 48 horas, ingredientes importados y locales de primera calidad. Muzzarella, fugazzeta, especialidades de autor.",
    icon: "pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    features: ["Masa madre 48hs", "Horno de leña", "Delivery en 30 min"],
  },
  {
    id: "rotiseria",
    title: "Rotisería Casera",
    subtitle: "Como en casa de la abuela",
    description:
      "Empanadas horneadas, milanesas crocantes, tartas caseras y guarniciones listas para llevar. El confort food que todos aman.",
    icon: "utensils",
    image:
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=800&q=80",
    features: ["Recetas familiares", "Listo para llevar", "Porciones generosas"],
  },
  {
    id: "restaurante",
    title: "Restaurante de Autor",
    subtitle: "Alta cocina argentina",
    description:
      "Experiencia gastronómica completa con cortes premium, pastas frescas, mariscos y postres de pastelería propia. Ambiente íntimo y elegante.",
    icon: "chef",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    features: ["Chef ejecutivo", "Carta de vinos", "Reservas online"],
  },
  {
    id: "catering",
    title: "Catering & Eventos",
    subtitle: "Tu evento, nuestra pasión",
    description:
      "Servicio integral para cumpleaños, casamientos, eventos corporativos y fiestas privadas. Menús personalizados y montaje completo.",
    icon: "party",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    features: ["Menú a medida", "Montaje incluido", "Desde 20 personas"],
  },
  {
    id: "bar",
    title: "Bar & Coctelería",
    subtitle: "Tragos de autor",
    description:
      "Cócteles signature, cervezas artesanales, vinos seleccionados y tragos clásicos argentinos. Happy hour todos los días.",
    icon: "wine",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    features: ["Coctelería premium", "Happy hour 18-20hs", "Vinos boutique"],
  },
  {
    id: "delivery",
    title: "Delivery Express",
    subtitle: "A tu puerta en minutos",
    description:
      "Pedí por WhatsApp, web o apps. Empaque térmico, seguimiento en vivo y promociones exclusivas para delivery.",
    icon: "truck",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    features: ["Envío gratis +$15.000", "Tracking en vivo", "Pago online"],
  },
];

export type MenuCategory = "pizzas" | "rotiseria" | "restaurante" | "postres" | "bebidas";

export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: "pizzas", label: "Pizzas" },
  { id: "rotiseria", label: "Rotisería" },
  { id: "restaurante", label: "Restaurante" },
  { id: "postres", label: "Postres" },
  { id: "bebidas", label: "Bebidas" },
];

export const menuItems: Record<
  MenuCategory,
  { name: string; description: string; price: number; badge?: string; image: string }[]
> = {
  pizzas: [
    {
      name: "Muzzarella Clásica",
      description: "Salsa de tomate San Marzano, muzzarella fior di latte, orégano fresco",
      price: 8900,
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    },
    {
      name: "Fugazzeta Rellena",
      description: "Cebolla caramelizada, muzzarella, jamón cocido, provolone",
      price: 11500,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    },
    {
      name: "Prosciutto & Rúcula",
      description: "Jamón crudo, rúcula, parmesano, cherry confitados",
      price: 13200,
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=80",
    },
    {
      name: "Cuatro Quesos",
      description: "Muzzarella, gorgonzola, provolone, parmesano, nueces",
      price: 12800,
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&q=80",
    },
    {
      name: "Especial Alma & Fuego",
      description: "Bondiola braseada, cebolla morada, chimichurri, provolone ahumado",
      price: 14500,
      badge: "Chef's Choice",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    },
    {
      name: "Veggie Mediterránea",
      description: "Berenjenas, zucchini, tomates cherry, pesto, queso de cabra",
      price: 11900,
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80",
    },
  ],
  rotiseria: [
    {
      name: "Empanadas x Docena",
      description: "Carne cortada a cuchillo, pollo, jamón y queso, humita",
      price: 9600,
      badge: "Clásico",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
    },
    {
      name: "Milanesa Napolitana",
      description: "Con papas fritas caseras y ensalada mixta",
      price: 11200,
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e7?w=400&q=80",
    },
    {
      name: "Tarta de Verdura",
      description: "Espinaca, ricota, nueces, masa casera integral",
      price: 7800,
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80",
    },
    {
      name: "Pollo al Disco",
      description: "Porción para 4 personas con papas y morrones",
      price: 18500,
      badge: "Para compartir",
      image: "https://images.unsplash.com/photo-1598103442097-8f743ce227b7?w=400&q=80",
    },
    {
      name: "Pastel de Papa",
      description: "Carne desmechada, puré cremoso, gratinado",
      price: 8900,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
    },
    {
      name: "Ensalada César Grande",
      description: "Lechuga romana, pollo grillado, croutons, parmesano",
      price: 9200,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80",
    },
  ],
  restaurante: [
    {
      name: "Bife de Chorizo",
      description: "400g, papas rústicas, vegetales grillados, chimichurri de la casa",
      price: 22800,
      badge: "Signature",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
    },
    {
      name: "Ravioles de Ricota",
      description: "Salsa fileto casera, albahaca fresca, parmesano reggiano",
      price: 14200,
      image: "https://images.unsplash.com/photo-1587743960926-3663f1ebea39?w=400&q=80",
    },
    {
      name: "Salmón a la Plancha",
      description: "Puré de batata, espárragos, salsa de eneldo",
      price: 21500,
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
    },
    {
      name: "Risotto de Hongos",
      description: "Porcini, shiitake, trufa, parmesano 24 meses",
      price: 16800,
      image: "https://images.unsplash.com/photo-1476124366831-00acc2e03978?w=400&q=80",
    },
    {
      name: "Cordero Braseado",
      description: "8 horas de cocción, puré de apio, reducción de malbec",
      price: 24500,
      badge: "Chef's Choice",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
    },
    {
      name: "Tabla de Mar",
      description: "Langostinos, mejillones, calamares, salsa tártara",
      price: 28900,
      image: "https://images.unsplash.com/photo-1559847844-56929f2928f8?w=400&q=80",
    },
  ],
  postres: [
    {
      name: "Tiramisú de la Casa",
      description: "Receta italiana auténtica, mascarpone, café espresso",
      price: 6500,
      badge: "Favorito",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
    },
    {
      name: "Flan Casero",
      description: "Con dulce de leche artesanal y crema",
      price: 5200,
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80",
    },
    {
      name: "Volcán de Chocolate",
      description: "Centro líquido, helado de vainilla bourbon",
      price: 7800,
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80",
    },
    {
      name: "Cheesecake de Frutos Rojos",
      description: "Base de galleta, coulis de frambuesa",
      price: 6900,
      image: "https://images.unsplash.com/photo-1533134242443-7d0ac332a4ce?w=400&q=80",
    },
  ],
  bebidas: [
    {
      name: "Fernet con Coca",
      description: "Medida premium, hielo de la casa",
      price: 4500,
      badge: "Clásico",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80",
    },
    {
      name: "Malbec Reserva",
      description: "Copa — Bodega Catena Zapata",
      price: 5800,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80",
    },
    {
      name: "Limonada de la Casa",
      description: "Menta, jengibre, miel orgánica",
      price: 3200,
      image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe7241?w=400&q=80",
    },
    {
      name: "Cóctel Alma & Fuego",
      description: "Whisky ahumado, miel, limón, romero quemado",
      price: 7200,
      badge: "Signature",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80",
    },
  ],
};

export const pricingPlans = [
  {
    name: "Almuerzo Express",
    price: 8900,
    period: "por persona",
    description: "Perfecto para el mediodía",
    features: [
      "Entrada del día",
      "Plato principal a elección",
      "Agua mineral o gaseosa",
      "Café o té",
    ],
    highlighted: false,
  },
  {
    name: "Experiencia Alma",
    price: 18500,
    period: "por persona",
    description: "Nuestra propuesta estrella",
    features: [
      "Entrada + principal + postre",
      "Copa de vino de la casa",
      "Pan de masa madre",
      "Mesa reservada en salón",
      "10% off en tu próxima visita",
    ],
    highlighted: true,
  },
  {
    name: "Catering Eventos",
    price: 25000,
    period: "por persona",
    description: "Desde 20 invitados",
    features: [
      "Menú personalizado",
      "Montaje y vajilla",
      "Personal de servicio",
      "Barra de tragos opcional",
      "Coordinador de evento",
    ],
    highlighted: false,
  },
];

export const promos = [
  {
    title: "2x1 en Pizzas",
    description: "Martes y miércoles de 19 a 22hs. Válido en salón.",
    discount: "50% OFF",
    code: "PIZZA2X1",
  },
  {
    title: "Combo Familiar",
    description: "2 pizzas + 6 empanadas + gaseosa 2.25L",
    discount: "$24.900",
    code: "FAMILIA",
  },
  {
    title: "Happy Hour",
    description: "Todos los tragos con 30% off de 18 a 20hs",
    discount: "30% OFF",
    code: "HAPPY",
  },
];

export const testimonials = [
  {
    name: "María González",
    role: "Cliente frecuente",
    text: "La mejor pizza de Buenos Aires, sin dudas. La masa es increíble y el ambiente es perfecto para una cena en pareja.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "Carlos Rodríguez",
    role: "Organizador de eventos",
    text: "Contratamos el catering para un evento corporativo de 80 personas. Impecable en todo: comida, servicio y presentación.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Lucía Fernández",
    role: "Food blogger",
    text: "El bife de chorizo es de otro planeta. Y el tiramisú... me lo comí dos veces. Alma & Fuego es obligatorio en Palermo.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "Diego Martínez",
    role: "Vecino del barrio",
    text: "Pedimos delivery todas las semanas. Siempre llega caliente, bien empaquetado y con un detalle de la casa. 10/10.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80",
  "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&q=80",
];

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#carta", label: "Carta" },
  { href: "#precios", label: "Precios" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
