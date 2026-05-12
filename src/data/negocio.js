// ============================================================
// OPTIFATIMA · DATOS DEL NEGOCIO
// ============================================================
// FUENTE ÚNICA DE VERDAD. Cualquier cambio aquí se propaga a
// todas las páginas y componentes. NO duplicar estos datos en
// otros archivos.
// ============================================================

export const negocio = {
  // Identidad
  nombre: "Optifatima",
  tagline: "Óptica y audiología familiar en Alcobendas",
  año_fundacion: 2013,

  // Contacto
  telefono: "687 843 611",
  telefono_internacional: "+34687843611", // formato para links tel:
  whatsapp: "+34687843611",               // formato para links wa.me
  whatsapp_display: "+34 687 843 611",
  email: "optifatimaalcobendas@gmail.com",

  // Dirección
  direccion: {
    calle: "Calle Gobernador 1",
    cp: "28100",
    ciudad: "Alcobendas",
    provincia: "Madrid",
    pais: "España",
    formato_corto: "Calle Gobernador 1, 28100 Alcobendas",
    // coordenadas a confirmar — sustituir por las reales
    lat: 40.5470, // PLACEHOLDER — confirmar
    lng: -3.6420, // PLACEHOLDER — confirmar
  },

  // Horarios — Bruno trabaja solo, cierra sábados, domingos y festivos
  // ⚠️ HORARIOS L-V POR CONFIRMAR CON BRUNO (estos son típicos del sector)
  horarios: {
    lunes_viernes: "10:00 — 14:00 y 17:00 — 20:30", // POR CONFIRMAR
    sabados: "Cerrado",
    domingos: "Cerrado",
    festivos: "Cerrado",
  },

  // Equipo (Bruno trabaja solo)
  profesional: {
    nombre: "Bruno Martín Tamayo",
    nombre_corto: "Bruno",
    titulaciones: [
      "Óptico-Optometrista",
      "Técnico Superior en Audiología Protésica",
    ],
    años_experiencia: 25,
    trayectoria: [
      { empresa: "Alain Afflelou",   rol: "Director" },
      { empresa: "General Óptica",   rol: "Director" },
      { empresa: "Visionlab",        rol: "Director" },
      { empresa: "Óptica 2000",      rol: "Director" },
      { empresa: "Lenticon",         rol: "Director técnico" },
    ],
    estudios_avanzados: [
      "Baja visión",
      "Terapia visual",
    ],
  },

  // Reseñas (reales — actualizar mensualmente)
  resenas: {
    rating: 4.4,
    total: 23,
    plataforma: "Google",
    ultima_actualizacion: "2026-05",
  },

  // Garantías y condiciones comerciales
  garantias: {
    monturas_y_lentes: "3 años",
    financiacion: "0% interés",
    revision_visual: "Gratuita",
  },

  // Servicios diferenciales (orden de prioridad estratégica)
  diferenciales: [
    "Misma persona te atiende de principio a fin",
    "Reparación de audífonos en 24 horas",
    "Garantía de 3 años en monturas y lentes",
    "Financiación al 0%",
    "Revisión visual gratuita",
  ],

  // URLs y redes
  urls: {
    google_maps: "https://maps.google.com", // PLACEHOLDER — sustituir por enlace real al GBP
    sitio_web: "https://optifatima.es",     // PLACEHOLDER — dominio final
  },

  // Marcas (lista cerrada para datos estructurados; visualización aparte)
  // ⚠️ HASTA QUE BRUNO CONFIRME LA LISTA NOMINAL COMPLETA, mostrar en
  // la web como "primeras marcas" genérico. Estas son las confirmadas
  // en el doc 07 del Project Knowledge.
  marcas_confirmadas: [
    "Chanel",
    "Tom Ford",
    "Mykita",
    "Ray-Ban",
    "Prada",
  ],
};

// Datos para Schema.org / SEO técnico
export const schemaOrg = {
  tipo_principal: "Optician",
  tipos_adicionales: ["HearingAidStore", "LocalBusiness"],
  categorias_gbp: [
    "Óptica",              // principal
    "Audioprotesista",     // secundaria — captura GAP #6
    "Optometrista",
    "Tienda de gafas",
    "Tienda de gafas de sol",
  ],
};
