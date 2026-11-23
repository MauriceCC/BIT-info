/* =========================================================
   PROPUESTAS DE BIT
   Edita esta lista para agregar, quitar o cambiar propuestas.
   - pillar: "B" (Bienestar), "I" (Innovación) o "T" (Transparencia)
   - title:  nombre corto de la propuesta
   - desc:   qué se hará (1–2 frases)
   - portal: true si será un módulo del Portal del Centro de Estudiantes
   ========================================================= */
const PROPOSALS = [
  /* ---------------- BIENESTAR ---------------- */
  {
    pillar: "B",
    title: "Seguimiento en cursos difíciles",
    desc: "Identificaremos los cursos con mayor índice de desaprobación y organizaremos grupos de estudio y reforzamiento para acompañar a quienes los llevan.",
  },
  {
    pillar: "B",
    title: "Apoyo contra la deserción",
    desc: "Acompañamiento cercano a compañeros con segunda o tercera matrícula o en riesgo de dejar la carrera: orientación, tutorías y conexión con los servicios de la universidad.",
  },
  {
    pillar: "B",
    title: "Conversatorios con egresados y años superiores",
    desc: "Estudiantes avanzados y egresados compartirán sus experiencias: cómo llevar la carrera, prácticas, investigación y su camino profesional.",
  },
  {
    pillar: "B",
    title: "Eventos sociales e integración",
    desc: "Actividades para conocernos entre años y fortalecer la comunidad de la Escuela más allá de las aulas.",
  },
  {
    pillar: "B",
    title: "Torneos relámpago",
    desc: "Torneos cortos de los deportes más jugados, con una tabla de posiciones actualizada en línea para seguir cada partido.",
    portal: true,
  },
  {
    pillar: "B",
    title: "Reactivemos el ping pong",
    desc: "Recuperar la mesa de ping pong como espacio de distracción y encuentro entre clases.",
  },
  {
    pillar: "B",
    title: "Coordinación con Tutoría",
    desc: "Trabajaremos de la mano con el área de Tutoría para velar por el bienestar de los estudiantes y derivar a tiempo los casos que necesiten apoyo.",
  },
  {
    pillar: "B",
    title: "Directorio de becas",
    desc: "Reuniremos y difundiremos becas, intercambios y convocatorias para que ninguna oportunidad pase desapercibida.",
    portal: true,
  },

  /* ---------------- INNOVACIÓN ---------------- */
  {
    pillar: "I",
    title: "Club de programación competitiva",
    desc: "Entrenamientos periódicos y preparación de equipos para concursos como el ICPC.",
  },
  {
    pillar: "I",
    title: "Hackathons y game jams internos",
    desc: "Eventos de la Escuela para crear, en equipo y en poco tiempo, soluciones o juegos desde cero.",
  },
  {
    pillar: "I",
    title: "Feria de proyectos",
    desc: "Un espacio para exponer los proyectos de cursos y personales ante compañeros, docentes e invitados.",
  },
  {
    pillar: "I",
    title: "Talleres académicos",
    desc: "Talleres prácticos sobre herramientas y temas que complementan la malla curricular, dictados por estudiantes, egresados e invitados.",
  },
  {
    pillar: "I",
    title: "Showcase de GitHub",
    desc: "Una vitrina con los repositorios y proyectos de estudiantes de la Escuela para dar visibilidad a su trabajo.",
    portal: true,
  },
  {
    pillar: "I",
    title: "Banco de ideas de proyectos",
    desc: "Un repositorio de ideas para proyectos de curso, tesis o emprendimientos al que cualquiera puede aportar o del que puede inspirarse.",
    portal: true,
  },
  {
    pillar: "I",
    title: "Red de estudiantes por intereses",
    desc: "Encuentra compañeros interesados en los mismos temas (IA, videojuegos, ciberseguridad…) para formar equipos y aprender juntos.",
    portal: true,
  },
  {
    pillar: "I",
    title: "Bibliografía por curso",
    desc: "Un espacio para compartir libros, apuntes y material recomendado de cada curso.",
    portal: true,
  },
  {
    pillar: "I",
    title: "Directorio de recursos gratuitos",
    desc: "Cursos, licencias educativas, herramientas y plataformas gratuitas para estudiantes, reunidos en un solo lugar.",
    portal: true,
  },
  {
    pillar: "I",
    title: "Datos curiosos de computación",
    desc: "Una sección con historia, curiosidades y datos sorprendentes del mundo de la computación.",
    portal: true,
  },
  {
    pillar: "I",
    title: "Ofertas laborales y prácticas",
    desc: "Difusión de prácticas preprofesionales, empleos y pasantías dirigidos a estudiantes y egresados.",
    portal: true,
  },

  /* ---------------- TRANSPARENCIA ---------------- */
  {
    pillar: "T",
    title: "Portal del Centro de Estudiantes",
    desc: "Una sola web que reúne todos los servicios del Centro: información, recursos, eventos y rendición de cuentas.",
    portal: true,
  },
  {
    pillar: "T",
    title: "Portal de transparencia",
    desc: "Publicación abierta de actas, acuerdos, actividades realizadas y uso de recursos del Centro de Estudiantes.",
    portal: true,
  },
  {
    pillar: "T",
    title: "Bandeja de sugerencias",
    desc: "Un canal permanente para enviar ideas, reclamos o propuestas, con seguimiento visible de cada una.",
    portal: true,
  },
  {
    pillar: "T",
    title: "Calendario de la Escuela",
    desc: "Fechas de exámenes, entregas, eventos y trámites importantes en un calendario único y actualizado.",
    portal: true,
  },
  {
    pillar: "T",
    title: "Difusión de eventos",
    desc: "Daremos a conocer eventos de la carrera y también actividades culturales, sociales y de cualquier rubro que puedan interesar a los estudiantes.",
    portal: true,
  },
];

const PILLAR_NAMES = { B: "Bienestar", I: "Innovación", T: "Transparencia" };
