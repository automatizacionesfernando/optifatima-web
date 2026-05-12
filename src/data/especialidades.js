// ============================================================
// OPTIFATIMA · ESPECIALIDADES Y SERVICIOS
// ============================================================
// Cada especialidad long-tail tiene su sub-página dedicada bajo
// /pages/<slug>.astro. La estructura es idéntica para las 7,
// por eso los datos viven aquí en un único array.
// ============================================================

export const especialidades = [
  {
    id: "audifonos",
    slug: "audifonos-alcobendas",
    titulo_corto: "Audífonos y centro auditivo",
    titulo_largo: "Audífonos en Alcobendas · Centro auditivo Optifatima",
    seo: {
      title: "Audífonos en Alcobendas · Reparación 24h | Optifatima",
      description: "Centro auditivo en Alcobendas atendido por Técnico Superior en Audiología Protésica. Adaptación de audífonos y reparación en 24 horas. Calle Gobernador 1.",
      keywords: [
        "audífonos alcobendas",
        "centro auditivo alcobendas",
        "reparación audífonos alcobendas",
        "audiólogo alcobendas",
        "audioprotesista alcobendas",
      ],
    },
    hero: {
      eyebrow: "Centro auditivo",
      h1: "Audífonos en Alcobendas",
      subtitulo: "Te atiende Bruno Martín Tamayo, Técnico Superior en Audiología Protésica con más de 25 años en el sector. Reparación de audífonos en 24 horas.",
    },
    credenciales_relevantes: [
      "Técnico Superior en Audiología Protésica",
      "+25 años de experiencia en óptica y audiología",
      "Ex-director técnico en Lenticon",
    ],
    que_hacemos: [
      {
        titulo: "Revisión auditiva completa",
        descripcion: "Audiometría tonal y verbal para detectar el grado y tipo de pérdida auditiva. Sin coste, sin compromiso.",
      },
      {
        titulo: "Adaptación de audífonos",
        descripcion: "Selección, programación y adaptación personalizada al estilo de vida de cada persona. Probadores para usar antes de decidir.",
      },
      {
        titulo: "Reparación en 24 horas",
        descripcion: "Servicio técnico propio. Para quien depende del audífono cada día, no es un extra: es lo que separa una semana sin oír de un día.",
      },
      {
        titulo: "Seguimiento y ajustes",
        descripcion: "Citas de seguimiento incluidas. La audición evoluciona; los ajustes deben acompañarla.",
      },
    ],
    por_que_importa: {
      titulo: "Por qué la reparación en 24h cambia las cosas",
      texto: "Quien lleva audífonos sabe que un fallo no es un inconveniente: es perder el contacto con la familia, con la televisión, con una conversación en el supermercado. La mayoría de centros envían el audífono al fabricante y tardan entre 7 y 21 días. En Optifatima reparamos en 24 horas porque entendemos lo que está en juego cada uno de esos días.",
    },
    faq: [
      {
        pregunta: "¿La revisión auditiva tiene coste?",
        respuesta: "No. La primera revisión es gratuita y sin compromiso, igual que la revisión visual.",
      },
      {
        pregunta: "¿Cuánto cuesta un audífono?",
        respuesta: "Depende del tipo de pérdida auditiva y del estilo de vida. Hay opciones desde audífonos básicos hasta dispositivos recargables conectados al móvil. En la primera cita explicamos las opciones reales para tu caso, sin presión por vender.",
      },
      {
        pregunta: "¿Puedo probar un audífono antes de decidir?",
        respuesta: "Sí. Disponemos de audífonos de prueba para que te los lleves a casa unos días y compruebes la diferencia en tu rutina real, no solo en la consulta.",
      },
      {
        pregunta: "¿Qué garantía tienen los audífonos?",
        respuesta: "Garantía del fabricante (habitualmente 2-3 años según marca) más la garantía de adaptación y los ajustes incluidos durante el primer año.",
      },
      {
        pregunta: "¿Reparáis audífonos comprados en otra óptica?",
        respuesta: "Sí, reparamos audífonos de la mayoría de marcas con independencia de dónde se compraron. Si trabajamos con el fabricante, la reparación en 24h sigue siendo posible.",
      },
    ],
  },

  {
    id: "ortoqueratologia",
    slug: "ortoqueratologia-alcobendas",
    titulo_corto: "Ortoqueratología (Orto-K)",
    titulo_largo: "Ortoqueratología y Orto-K en Alcobendas",
    seo: {
      title: "Ortoqueratología (Orto-K) en Alcobendas | Optifatima",
      description: "Adaptación de lentes Orto-K en Alcobendas. Corrige la miopía durante el día sin gafas ni cirugía, usando las lentes solo por la noche.",
      keywords: [
        "ortoqueratología alcobendas",
        "orto-k alcobendas",
        "lentes nocturnas miopía alcobendas",
      ],
    },
    hero: {
      eyebrow: "Especialidad clínica",
      h1: "Ortoqueratología en Alcobendas",
      subtitulo: "Lentes nocturnas que corrigen la miopía mientras duermes. Vives el día sin gafas y sin lentes, sin cirugía.",
    },
    credenciales_relevantes: [
      "+25 años en contactología avanzada",
      "Ex-director técnico en Lenticon",
    ],
    que_hacemos: [
      { titulo: "Estudio previo de viabilidad", descripcion: "Topografía corneal y evaluación de la córnea para confirmar que la Orto-K es adecuada para ti." },
      { titulo: "Diseño y adaptación", descripcion: "Lentes personalizadas a la geometría de tu córnea. Adaptación supervisada paso a paso." },
      { titulo: "Seguimiento clínico", descripcion: "Revisiones programadas durante el primer mes y mantenimiento periódico para asegurar resultados estables." },
    ],
    por_que_importa: {
      titulo: "Para quién tiene sentido",
      texto: "La Orto-K es especialmente útil en adultos jóvenes activos (deportistas, profesiones con polvo o pantallas) y en niños con miopía en progresión. En este último caso, además de corregir, ralentiza el avance de la miopía.",
    },
    faq: [
      { pregunta: "¿Es reversible?", respuesta: "Sí. Si dejas de usar las lentes, la córnea vuelve a su forma original en pocos días o semanas." },
      { pregunta: "¿Sirve para cualquier graduación?", respuesta: "Funciona muy bien en miopías hasta 5-6 dioptrías, con o sin astigmatismo moderado. En el estudio previo confirmamos si es viable en tu caso." },
      { pregunta: "¿Se puede usar en niños?", respuesta: "Sí, y es uno de los principales usos. En niños con miopía en progresión, además de corregir, frena el avance." },
    ],
  },

  {
    id: "control-miopia-infantil",
    slug: "control-miopia-infantil-alcobendas",
    titulo_corto: "Control de miopía infantil",
    titulo_largo: "Control de miopía infantil en Alcobendas",
    seo: {
      title: "Control de miopía infantil en Alcobendas | Optifatima",
      description: "Programa de control de miopía infantil en Alcobendas: Orto-K, lentes de control y seguimiento personalizado. Frena el avance de la miopía en niños.",
      keywords: [
        "control miopía infantil alcobendas",
        "miopía niños alcobendas",
        "frenar miopía niños alcobendas",
      ],
    },
    hero: {
      eyebrow: "Salud visual infantil",
      h1: "Control de miopía infantil en Alcobendas",
      subtitulo: "La miopía infantil no solo se corrige: se puede frenar. Ortoqueratología, lentes de control y seguimiento clínico personalizado.",
    },
    credenciales_relevantes: [
      "+25 años en contactología avanzada",
      "Especialista en adaptación pediátrica",
    ],
    que_hacemos: [
      { titulo: "Estudio inicial", descripcion: "Evaluación completa para entender la evolución de la miopía y elegir la estrategia adecuada." },
      { titulo: "Plan personalizado", descripcion: "Combinación de Orto-K, lentes de contacto de control o lentes de gafa de control según el caso." },
      { titulo: "Seguimiento periódico", descripcion: "Revisiones cada 6 meses para ajustar el plan y medir si la progresión se está frenando." },
    ],
    por_que_importa: {
      titulo: "Por qué importa frenar la miopía, no solo corregirla",
      texto: "Cuanta más miopía acumula un niño antes de los 18 años, mayor es el riesgo de problemas visuales serios en la edad adulta. Las estrategias de control han demostrado reducir la progresión entre un 40 y un 60 % en niños bien seguidos.",
    },
    faq: [
      { pregunta: "¿Desde qué edad se puede empezar?", respuesta: "Habitualmente desde los 7-8 años, cuando el niño es capaz de colaborar en la higiene de las lentes. En casos antes evaluamos individualmente." },
      { pregunta: "¿Qué resultados puedo esperar?", respuesta: "Reducción de la progresión miópica entre 40 y 60 % en niños con seguimiento adecuado, según estudios clínicos publicados." },
    ],
  },

  {
    id: "lentes-rgp",
    slug: "lentes-rgp-alcobendas",
    titulo_corto: "Lentes RGP (rígidas permeables)",
    titulo_largo: "Lentes de contacto RGP en Alcobendas",
    seo: {
      title: "Lentes de contacto RGP en Alcobendas | Optifatima",
      description: "Adaptación de lentes de contacto rígidas permeables al gas (RGP) en Alcobendas. Para córneas complejas, astigmatismos altos y queratocono.",
      keywords: [
        "lentes rgp alcobendas",
        "lentes rígidas permeables alcobendas",
        "contactología avanzada alcobendas",
      ],
    },
    hero: {
      eyebrow: "Contactología avanzada",
      h1: "Lentes RGP en Alcobendas",
      subtitulo: "Para córneas que las lentes blandas no resuelven. Astigmatismos altos, irregularidades corneales y casos complejos.",
    },
    credenciales_relevantes: [
      "Ex-director técnico en Lenticon (laboratorio de contactología)",
      "+25 años adaptando lentes especiales",
    ],
    que_hacemos: [
      { titulo: "Topografía y estudio corneal", descripcion: "Análisis detallado de la forma de la córnea para diseñar la lente correcta." },
      { titulo: "Diseño personalizado", descripcion: "Cada RGP se fabrica a medida para tu córnea. No hay tallas estándar." },
      { titulo: "Adaptación supervisada", descripcion: "Acompañamiento durante las primeras semanas para que la lente se asiente bien y la visión sea estable." },
    ],
    por_que_importa: {
      titulo: "Cuándo se necesita una RGP",
      texto: "Cuando las lentes blandas no dan agudeza suficiente, cuando la córnea tiene una forma irregular (queratocono, post-cirugía), o cuando el astigmatismo es muy elevado. Son lentes técnicas que requieren un profesional con experiencia específica.",
    },
    faq: [
      { pregunta: "¿Cuesta adaptarse a ellas?", respuesta: "Sí, requieren unos días de adaptación. Pero la agudeza visual que ofrecen suele compensar el periodo inicial." },
      { pregunta: "¿Duran más que las blandas?", respuesta: "Sí, una RGP bien cuidada puede durar 1-2 años, frente a los pocos meses de las blandas mensuales." },
    ],
  },

  {
    id: "queratocono",
    slug: "queratocono-alcobendas",
    titulo_corto: "Queratocono",
    titulo_largo: "Queratocono y ectasias corneales en Alcobendas",
    seo: {
      title: "Queratocono en Alcobendas · Lentes especiales | Optifatima",
      description: "Adaptación de lentes especiales para queratocono y ectasias corneales en Alcobendas. RGP, esclerales y lentes de geometría compleja.",
      keywords: [
        "queratocono alcobendas",
        "lentes queratocono alcobendas",
        "ectasia corneal alcobendas",
        "lentes esclerales alcobendas",
      ],
    },
    hero: {
      eyebrow: "Especialidad clínica",
      h1: "Queratocono en Alcobendas",
      subtitulo: "Lentes especiales diseñadas para córneas con queratocono y ectasias. Recuperar agudeza visual cuando las gafas y las lentes convencionales no bastan.",
    },
    credenciales_relevantes: [
      "Ex-director técnico en Lenticon",
      "+25 años adaptando lentes para córneas complejas",
    ],
    que_hacemos: [
      { titulo: "Diagnóstico y topografía", descripcion: "Mapa corneal detallado para entender el grado y la localización del queratocono." },
      { titulo: "Selección del tipo de lente", descripcion: "RGP, esclerales o híbridas según el caso. No hay una solución única." },
      { titulo: "Adaptación y revisiones", descripcion: "Seguimiento cercano durante las primeras semanas hasta lograr estabilidad y comodidad." },
    ],
    por_que_importa: {
      titulo: "Cuándo acudir",
      texto: "Si te han diagnosticado queratocono, si las gafas ya no te dan visión nítida o si llevas lentes que se mueven y molestan, hay opciones técnicas que sí funcionan. La clave es trabajar con un especialista que adapte de forma personalizada, no con catálogos estándar.",
    },
    faq: [
      { pregunta: "¿Es lo mismo queratocono que astigmatismo?", respuesta: "No. El queratocono es una deformación progresiva de la córnea; el astigmatismo, una variación de su curvatura. Pueden coexistir, pero requieren enfoques distintos." },
      { pregunta: "¿Reemplazan a la cirugía?", respuesta: "En muchos casos sí, especialmente en queratocono leve o moderado. En casos avanzados, complementan la cirugía o el crosslinking." },
    ],
  },

  {
    id: "baja-vision",
    slug: "baja-vision-alcobendas",
    titulo_corto: "Baja visión",
    titulo_largo: "Baja visión en Alcobendas",
    seo: {
      title: "Baja visión en Alcobendas · Ayudas ópticas | Optifatima",
      description: "Centro de baja visión en Alcobendas. Ayudas ópticas, lupas, telelupas y filtros para personas con resto visual reducido. Estudio personalizado.",
      keywords: [
        "baja visión alcobendas",
        "ayudas baja visión alcobendas",
        "lupas baja visión alcobendas",
      ],
    },
    hero: {
      eyebrow: "Rehabilitación visual",
      h1: "Baja visión en Alcobendas",
      subtitulo: "Cuando la graduación convencional ya no da respuesta, hay ayudas ópticas que sí: lupas, telelupas, filtros y entrenamiento del resto visual.",
    },
    credenciales_relevantes: [
      "Estudios avanzados en baja visión",
      "+25 años acompañando a pacientes con pérdida visual progresiva",
    ],
    que_hacemos: [
      { titulo: "Estudio del resto visual", descripcion: "Evaluación funcional para entender qué se ve, cómo y a qué distancia." },
      { titulo: "Selección de ayudas", descripcion: "Lupas, telelupas, filtros selectivos, sistemas electrónicos. La ayuda correcta para cada actividad." },
      { titulo: "Entrenamiento y seguimiento", descripcion: "Aprender a usar las ayudas en el día a día. Sin entrenamiento, la mejor lupa se queda en un cajón." },
    ],
    por_que_importa: {
      titulo: "Para quién es",
      texto: "Personas con degeneración macular, retinopatía diabética, glaucoma avanzado, retinosis pigmentaria u otras condiciones que reducen el resto visual. La baja visión no se cura con gafas convencionales, pero sí se puede aprovechar al máximo.",
    },
    faq: [
      { pregunta: "¿Necesito derivación médica?", respuesta: "No es imprescindible, pero ayuda tener el informe oftalmológico para preparar mejor la consulta." },
      { pregunta: "¿Las ayudas tienen cobertura pública?", respuesta: "Algunas comunidades ofrecen ayudas. Te informamos en consulta sobre las opciones disponibles." },
    ],
  },

  {
    id: "terapia-visual",
    slug: "terapia-visual-alcobendas",
    titulo_corto: "Terapia visual",
    titulo_largo: "Terapia visual en Alcobendas",
    seo: {
      title: "Terapia visual en Alcobendas · Niños y adultos | Optifatima",
      description: "Terapia visual en Alcobendas para niños y adultos. Tratamiento de problemas de enfoque, convergencia, lectura y rendimiento escolar.",
      keywords: [
        "terapia visual alcobendas",
        "terapia visual niños alcobendas",
        "terapia visual adultos alcobendas",
      ],
    },
    hero: {
      eyebrow: "Rehabilitación visual",
      h1: "Terapia visual en Alcobendas",
      subtitulo: "Para problemas de enfoque, convergencia, lectura o rendimiento escolar. Tratamiento personalizado para niños y adultos.",
    },
    credenciales_relevantes: [
      "Estudios avanzados en terapia visual",
      "Especialista en adaptación pediátrica y adulta",
    ],
    que_hacemos: [
      { titulo: "Evaluación funcional", descripcion: "Análisis detallado de cómo trabajan los dos ojos juntos: enfoque, convergencia, motilidad." },
      { titulo: "Plan de tratamiento", descripcion: "Sesiones programadas de entrenamiento visual, con ejercicios para hacer también en casa." },
      { titulo: "Seguimiento de progreso", descripcion: "Medición objetiva de las mejoras a lo largo del tratamiento." },
    ],
    por_que_importa: {
      titulo: "Para quién es",
      texto: "Niños con dificultades de lectura, fatiga al estudiar, pérdida de línea o dolor de cabeza al final del día. Adultos con vista cansada precoz, problemas tras una conmoción cerebral o trabajadores con alta demanda visual.",
    },
    faq: [
      { pregunta: "¿Cuánto dura el tratamiento?", respuesta: "Depende del caso. Lo habitual son entre 3 y 9 meses, con sesiones semanales o quincenales." },
      { pregunta: "¿Sirve para adultos?", respuesta: "Sí. La terapia visual no es solo infantil; muchos problemas funcionales se mantienen o aparecen en la edad adulta." },
    ],
  },
];

// Servicios generales (no requieren sub-página propia)
export const servicios_generales = [
  {
    titulo: "Revisión visual completa",
    descripcion: "Examen de 30 minutos. Refracción, salud ocular y consejo personalizado. Gratuita y sin compromiso.",
  },
  {
    titulo: "Gafas graduadas",
    descripcion: "Monturas de primeras marcas con lentes personalizadas. Garantía de 3 años en monturas y lentes.",
  },
  {
    titulo: "Gafas de sol",
    descripcion: "Protección UV 100 % y estilo, con o sin graduación. Modelos para cualquier edad.",
  },
  {
    titulo: "Lentes de contacto",
    descripcion: "Adaptación personalizada y seguimiento. Blandas, RGP y especiales para casos complejos.",
  },
  {
    titulo: "Reparación y ajuste",
    descripcion: "Ajustes inmediatos sin coste para nuestros clientes. Reparaciones técnicas con presupuesto previo.",
  },
  {
    titulo: "Financiación",
    descripcion: "Hasta 12 meses sin intereses para que la solución correcta no dependa del presupuesto del mes.",
  },
];
