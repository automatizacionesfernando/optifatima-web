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
    // coordenadas reales del local (Google Maps, marcador de Optifatima)
    lat: 40.5444613,
    lng: -3.6410378,
  },

  // Horarios — Bruno trabaja solo, cierra sábados, domingos y festivos
  horarios: {
    lunes_viernes: "11:00 — 14:00 y 17:45 — 20:00",
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
      { empresa: "Ópticas Carrefour", ubicacion: "Las Rozas",          rol: "Óptico adjunto de tienda" },
      { empresa: "Alain Afflelou",    ubicacion: "Las Rozas",          rol: "Responsable y gestión de óptica" },
      { empresa: "Óptica 2000",       ubicacion: "Pozuelo de Alarcón", rol: "Responsable y gestor de óptica y audiología" },
      { empresa: "Visionlab",         ubicacion: "Torrelodones",       rol: "Responsable de tienda" },
      { empresa: "General Óptica",    ubicacion: "Palma de Mallorca",  rol: "Director general y gestor de tiendas en Mallorca" },
      {
        empresa: "Lenticon",
        ubicacion: "Tres Cantos",
        rol: "Director técnico y docente",
        detalle: "Formación a ópticos y oftalmólogos en ortoqueratología avanzada y ectasias corneales, impartida en clínicas oftalmológicas de Madrid (Clínica Coro, Lasik Center, Novovisión).",
      },
    ],
    estudios_avanzados: [
      "Baja visión",
      "Terapia visual",
    ],
  },

  // Reseñas (reales — actualizar mensualmente)
  resenas: {
    rating: 4.6,
    total: 34,
    plataforma: "Google",
    ultima_actualizacion: "2026-06",
    // Perfil real de Google Maps (place_id de Optifatima)
    url_perfil: "https://www.google.com/maps/place/?q=place_id:ChIJe6Bk3_IsQg0R7Q0pFn2v5pw",
    // 3 reseñas reales destacadas en la home
    destacadas: [
      {
        autor: "Zaida López Arroyo",
        estrellas: 5,
        fecha: "Hace un mes",
        texto: "Excelente atención. El dueño es un gran profesional y súper atento. Me sorprendió lo detallado que fue el examen de la vista y la gran selección de monturas que tienen, ¡hay para todos los gustos! El trato humano y la calidad del servicio son de lo mejor. ¡Muy recomendable!",
      },
      {
        autor: "Javier Álvarez",
        estrellas: 5,
        fecha: "Hace una semana",
        texto: "Una vez más Bruno me soluciona mi problema con mis gafas, cristales nuevos a muy buen precio y de una calidad espectacular. Como siempre, mi óptica de confianza.",
      },
      {
        autor: "Rodrigo",
        estrellas: 5,
        fecha: "Hace 4 meses",
        texto: "Ayer estuve por urgencia en esta óptica, pidiendo presupuesto para un tema imposible. Lo normal es que por ello me despachara en 2 minutos. Pues no. El óptico fue increíble y estuvo dándome todas las soluciones que pudo, por difícil que fuera. Se preocupó tanto como si fuera suyo el problema. Y por ello os recomiendo esta óptica. El trato al cliente fue excelente y os aconsejo que la visitéis porque conmigo ha ganado un cliente por esto. ¡100% recomendable! ¡Gracias por todo!",
      },
    ],
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
    google_maps: "https://www.google.com/maps/place/?q=place_id:ChIJe6Bk3_IsQg0R7Q0pFn2v5pw",
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
