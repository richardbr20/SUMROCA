/* SUMROCA — internationalization (EN / ES)
   Persists choice in localStorage under "sumroca_lang". */

'use strict';

const translations = {
  en: {
    meta_title: 'SUMROCA — Industrial Construction & Oil & Gas Services',
    skip_link: 'Skip to content',
    brand_home: 'SUMROCA — back to top',
    lang_group: 'Language selection',
    nav_menu: 'Menu',
    nav_main: 'Main navigation',
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    hero_tagline: 'Excellence in Industrial Construction & Oil & Gas Services',
    hero_subtagline: 'Consolidated track record since 2006 · Anaco, Venezuela',
    hero_scroll: 'Scroll to About section',

    mission_title: 'Our Mission',
    mission_body: "The mission of SUMRO, C.A. is to deliver services that satisfy our customers' requirements — ensuring the highest levels of quality and safety, and maintaining a harmonious, respectful relationship with the environment and the communities surrounding our operations. This commitment supports the profitability that sustains our long-term growth and continuity in the domestic market.",
    mission_1_title: 'Consolidated Track Record',
    mission_1_body: "Two decades of sectoral experience serving Venezuela's leading oil and gas operators.",
    mission_2_title: 'Management Excellence',
    mission_2_body: 'Leadership team with 20+ years of business experience, operating a project-based management model (GP) that scales with each engagement.',
    mission_3_title: 'Robust Infrastructure',
    mission_3_body: 'Capacity to commit over 10,000 man-hours per year of payroll personnel, expandable through contract personnel and strategic partnerships.',

    services_title: 'What We Do',
    services_intro: 'SUMROCA delivers integrated industrial and mechanical construction solutions for the oil, gas, and heavy industry sectors.',
    learn_more: 'Learn more →',
    modal_close_label: 'Close',
    common_brochure_download: 'Download brochure',
    services_01_brochure_label: 'Download brochure',

    services_01_title: 'Flexible Pipe — Sale, Installation, Engineering & Technical Advisory',
    services_01_preview: 'Advisory, engineering, design, sale, and installation of RTP, TCP, and SCP flexible piping — onshore and offshore.',
    services_01_heading_1: 'Exclusive Representation of Flexible Pipe Supplies in Venezuela',
    services_01_body_1: 'As part of our commitment to excellence and innovation, SUMROCA strengthens its solutions portfolio through its strategic alliance and exclusive representation of Flexible Pipe Supplies (FPS) for Venezuela.',
    services_01_body_2: "This partnership enables us to deliver flexible piping systems, accessories, and specialized solutions with direct manufacturer support — guaranteeing cutting-edge technology, expert technical assistance, and a service focused on maximizing safety, efficiency, and reliability of our clients' operations.",
    services_01_body_3: 'At SUMROCA, we connect the Venezuelan industry with world-class solutions, consolidating our role as a strategic partner for the oil & gas, energy, and industrial sectors.',

    services_02_title: 'GENCO ESP Penetrators — Sale, Supply & Installation',
    services_02_preview: 'High-integrity electrical connectivity solutions from GENCO for electric submersible pump systems.',
    services_02_body_1: 'We supply and install high-integrity electrical connectivity solutions from the GENCO brand for electric submersible pump systems. We guarantee hermetic sealing and secure power transmission under the most critical downhole conditions — preventing insulation failures and gas migration.',
    services_02_heading_1: 'Exclusive Representation of GENCO in Venezuela',
    services_02_body_2: 'At SUMROCA we continue to drive high-value solutions for the industry. Through our strategic alliance and exclusive representation of GENCO for Venezuela, we bring our clients the backing of a leading manufacturer recognized for the quality, innovation, and reliability of its products and services.',
    services_02_body_3: "This alliance allows us to offer direct attention, specialized technical support, and integrated solutions that meet the industry's highest standards — reaffirming our commitment to being a strategic partner for each project's success.",

    services_03_title: 'ESP Cable Protectors and Injection Lines — Supply & Installation',
    services_03_preview: 'Robust protection for the critical components of your well completion.',
    services_03_body_1: 'We supply and install custom-designed protectors for ESP power cables, TEC lines, capillary tubes, and chemical injection lines — safeguarding their integrity against impact and friction during string running operations.',

    services_04_title: 'Spooler Services for ESP Cables and Capillary Lines',
    services_04_preview: 'State-of-the-art spooler units with certified technical staff for safe cable and line handling.',
    services_04_body_1: 'State-of-the-art spooler units and certified technical staff for the safe handling, laying, tensioning, and recovery of power cables and capillary lines. Minimizes on-site operating time and eliminates the risk of mechanical damage to lines during maneuvers.',

    services_05_title: 'ESP Pump Installation Services',
    services_05_preview: 'Specialized technical support in ESP system running, assembly, and installation.',
    services_05_body_1: "Specialized technical support in the running, assembly, and installation of electric submersible pump (ESP) systems. We align with the strictest oil & gas industry standards to ensure optimal commissioning — focused on extending the equipment's operational life (Run Life).",

    services_06_title: 'Wellhead Pipe Inspection (Real-Time Scanning)',
    services_06_preview: 'Predictive evaluation of production tubing and drill pipe directly at the wellhead.',
    services_06_body_1: 'Predictive evaluation of production tubing and drill pipe directly at the wellhead. Using real-time electromagnetic scanning technology during pipe extraction, we instantly detect corrosion, wear, or crack problems to prevent catastrophic failures.',

    services_07_title: 'Pipe Inspection with Yard Scanner',
    services_07_preview: 'Quality control and integrity certification before field mobilization.',
    services_07_body_1: 'Comprehensive diagnostics via advanced scanner in storage yards, evaluating the internal and external condition of your strings before field mobilization — ensuring only fit material enters operation.',

    gallery_label: 'Project photo gallery',
    alt_photo_1: 'Offshore platform deck with interconnected piping runs and lifting cranes',
    alt_photo_2: 'Offshore production facility with process equipment and module structures',
    alt_photo_3: 'Yellow steel pipe spools staged on an offshore platform deck',
    alt_photo_4: 'Yellow piping structure installed on an offshore platform',
    alt_photo_5: 'Offshore platform base under construction beside a support barge',
    alt_photo_6: 'Offshore platform viewed from a support vessel at sea',
    alt_photo_7: 'Truck transporting heavy industrial equipment along a dirt road',
    alt_photo_8: 'Bulldozer performing earthwork during site preparation',
    alt_photo_9: 'Dump truck working on ground leveling and site preparation',
    alt_photo_10: 'Supply vessels docked for marine logistics operations',
    alt_photo_11: 'Refinery complex illuminated at night',
    alt_photo_12: 'Excavator moving a sand stockpile at a construction site',

    projects_title: 'Portfolio of Executed Services',
    projects_intro: "SUMROCA has delivered mission-critical projects for Venezuela's leading oil and gas operators.",
    prj_pdvsagas_1: 'Maintenance of the Anaco–Puerto Ordaz methane gas transportation and distribution system, Puerto Ordaz operational area, Eastern region.',
    prj_gasanaco_1: 'Lubricant transportation, loading, and transfer from the Cardón plant and similar facilities to the operational and industrial areas of PDVSA Gas Central East production management.',
    prj_sp_1: 'Sheet acquisition for logistics, supplies, and moving management — Junín Division.',
    prj_sp_2: 'Sheet acquisition for logistics, supplies, and moving management — Ayacucho Division.',
    prj_pet_1: 'Supply of lubricated plug valves.',
    prj_pet_2: 'Acquisition of rubber casings and protective rubber rings — Carabobo PSPSA Division.',
    prj_pq_1: 'Supply of check valves and ball valves.',
    prj_pq_2: 'Instrumentation equipment procurement for manifold and flow lines — Tropical Field.',
    prj_pq_3: 'Mechanical accessories procurement for manifold and flow lines — Tropical Field.',
    prj_ps_1: 'Wellhead Platform (WHP) adaptation for future interconnection to the bridge and CPF.',
    prj_ps_2: 'Works associated with the IPF Phase II adaptation project.',
    prj_ps_3: 'Gas manifold interconnection with the gas lift injection manifold on the wellhead platform.',
    prj_ps_4: 'Wellhead plant adjustment bracket for the February 4 platform.',
    prj_pp_1: 'Oil wells cluster platform construction — B5-2.',
    prj_pp_2: 'Asphalting and access roads for oil wells cluster B5-2.',
    prj_pp_3: 'Construction and drilling of H-F2-C03 waterfront monitoring wells.',
    prj_pp_4: 'Road construction for East Block 01 in the Huyapari field.',
    prj_pp_5: 'East Block cluster of oil wells platform construction and movement.',
    prj_pp_6: 'COB Campo Bare industrial canteen.',
    prj_bv_1: 'Different diameter flange supplies.',
    prj_bv_2: 'Pig launch and receive traps with quick open-and-close lids.',
    prj_bv_3: '2" A/I hole plate supplies.',
    prj_bv_4: 'Dry film roughness and anchor profile measurement equipment supplies.',
    prj_bv_5: 'Glycerin bimetallic thermometer supplies.',
    prj_bv_6: 'Swagelok valve supplies.',
    prj_bv_7: '2000V single conductor cable supplies.',
    prj_sv_1: 'Completion of Type II Ambulatory construction — Joaquín, El Tigre Municipality, Monagas — VHICOA.',
    prj_sv_2: 'Fiber optic splicing interconnection between CPF and WHP.',
    prj_sv_3: 'Pigtail, patchcord, and certification services.',
    prj_kr_1: 'Laying of 13 kilometers of 16" pipe, San Joaquín to Anaco section.',
    prj_pt_1: 'Expansion of the low-pressure separation capacity in the EPJ-2 (Module X).',

    contact_title: 'Contact Us',
    contact_intro: 'For inquiries, proposals, or partnership opportunities, reach out to our team.',
    contact_email_label: 'Email',
    contact_address_label: 'Address',
    contact_founded_label: 'Founded',
    contact_founded_value: 'March 22, 2006',
    form_first: 'First name',
    form_last: 'Last name',
    form_email: 'Email',
    form_phone: 'Phone',
    form_company: 'Company',
    form_subject: 'Subject',
    form_message: 'Message',
    form_submit: 'Submit',
    form_sending: 'Sending...',
    form_success: 'Thank you. We have received your message and will get back to you shortly.',
    form_error: 'Something went wrong. Please email us directly at ejdesilva@sumroca.com',

    footer_contact: 'Contact',
    footer_navigate: 'Navigate',
    footer_company: 'Company',
    footer_founded: 'Founded 2006',
    footer_rights: '© 2026 SUMRO, C.A. All rights reserved.'
  },

  es: {
    meta_title: 'SUMROCA — Construcción Industrial y Servicios de Petróleo y Gas',
    skip_link: 'Saltar al contenido',
    brand_home: 'SUMROCA — volver al inicio',
    lang_group: 'Selección de idioma',
    nav_menu: 'Menú',
    nav_main: 'Navegación principal',
    nav_home: 'Inicio',
    nav_about: 'Nosotros',
    nav_services: 'Servicios',
    nav_projects: 'Proyectos',
    nav_contact: 'Contacto',
    hero_tagline: 'Excelencia en Construcción Industrial y Servicios de Petróleo y Gas',
    hero_subtagline: 'Trayectoria consolidada desde 2006 · Anaco, Venezuela',
    hero_scroll: 'Desplazarse a la sección Nosotros',

    mission_title: 'Nuestra Misión',
    mission_body: 'La misión de SUMRO, C.A. es prestar servicios que satisfagan los requerimientos de nuestros clientes — garantizando los más altos niveles de calidad y seguridad, y manteniendo una relación armoniosa y respetuosa con el ambiente y las comunidades que rodean nuestras operaciones. Este compromiso sustenta la rentabilidad que asegura nuestro crecimiento y permanencia a largo plazo en el mercado nacional.',
    mission_1_title: 'Trayectoria Consolidada',
    mission_1_body: 'Dos décadas de experiencia sectorial al servicio de las principales operadoras de petróleo y gas de Venezuela.',
    mission_2_title: 'Excelencia en la Gestión',
    mission_2_body: 'Equipo directivo con más de 20 años de experiencia empresarial, que opera un modelo de gestión por proyectos (GP) escalable para cada contrato.',
    mission_3_title: 'Infraestructura Sólida',
    mission_3_body: 'Capacidad para comprometer más de 10.000 horas-hombre anuales de personal de nómina, ampliable mediante personal contratado y alianzas estratégicas.',

    services_title: 'Qué Hacemos',
    services_intro: 'SUMROCA ofrece soluciones integrales de construcción industrial y mecánica para los sectores de petróleo, gas e industria pesada.',
    learn_more: 'Ver más →',
    modal_close_label: 'Cerrar',
    common_brochure_download: 'Descargar brochure',
    services_01_brochure_label: 'Descargar brochure',

    services_01_title: 'Tubería Flexible — Venta, Instalación, Ingeniería y Asesoramiento Técnico',
    services_01_preview: 'Asesoramiento, ingeniería, diseño, venta e instalación de tubería flexible tipo RTP, TCP y SCP tanto en tierra como en alta mar.',
    services_01_heading_1: 'Representación Exclusiva de Flexible Pipe Supplies en Venezuela',
    services_01_body_1: 'Como parte de nuestro compromiso con la excelencia y la innovación, SUMROCA fortalece su portafolio de soluciones a través de su alianza estratégica y representación exclusiva de Flexible Pipe Supplies (FPS) para Venezuela.',
    services_01_body_2: 'Esta alianza nos permite ofrecer sistemas de tubería flexible, accesorios y soluciones especializadas con respaldo directo del fabricante, garantizando tecnología de vanguardia, asistencia técnica experta y un servicio enfocado en maximizar la seguridad, eficiencia y confiabilidad de las operaciones de nuestros clientes.',
    services_01_body_3: 'En SUMROCA, conectamos a la industria venezolana con soluciones de clase mundial, consolidando nuestro rol como socio estratégico para los sectores de petróleo y gas, energía e industrial.',

    services_02_title: 'Penetradores ESP GENCO — Venta, Suministro e Instalación',
    services_02_preview: 'Soluciones de conectividad eléctrica de alta integridad de la marca GENCO para sistemas de bombeo electrosumergible.',
    services_02_body_1: 'Suministramos e instalamos soluciones de conectividad eléctrica de alta integridad de la marca GENCO para sistemas de bombeo electrosumergible. Garantizamos un sellado hermético y una transmisión de potencia segura bajo las condiciones más críticas de fondo de pozo, previniendo fallas de aislamiento y migración de gas.',
    services_02_heading_1: 'Representación Exclusiva de GENCO en Venezuela',
    services_02_body_2: 'En SUMROCA seguimos impulsando soluciones de alto valor para la industria. A través de nuestra alianza estratégica y representación exclusiva de GENCO para Venezuela, llevamos a nuestros clientes el respaldo de un fabricante líder, reconocido por la calidad, innovación y confiabilidad de sus productos y servicios.',
    services_02_body_3: 'Esta alianza nos permite ofrecer atención directa, soporte técnico especializado y soluciones integradas que cumplen con los más altos estándares de la industria, reafirmando nuestro compromiso de ser un socio estratégico para el éxito de cada proyecto.',

    services_03_title: 'Protectores de Cable ESP y Líneas de Inyección — Suministro e Instalación',
    services_03_preview: 'Protección robusta para los componentes críticos de su completación.',
    services_03_body_1: 'Proveemos e instalamos protectores diseñados a la medida para cables de potencia ESP, líneas TEC, tubos capilares y líneas de inyección química, asegurando su integridad contra impactos y fricción durante la bajada del aparejo.',

    services_04_title: 'Servicios de Spoolers para Cables ESP y Líneas Capilares',
    services_04_preview: 'Unidades de spooler de última generación y personal técnico certificado.',
    services_04_body_1: 'Unidades de spooler de última generación y personal técnico certificado para el manejo, tendido, tensión y recuperación segura de cables de potencia y líneas capilares. Minimizamos los tiempos operativos en sitio y eliminamos el riesgo de daños mecánicos en las líneas durante las maniobras.',

    services_05_title: 'Servicios de Instalación de Bombas ESP',
    services_05_preview: 'Soporte técnico especializado en la bajada, ensamble e instalación de sistemas de bombeo electrosumergible.',
    services_05_body_1: 'Soporte técnico especializado en la bajada, ensamble e instalación de sistemas de bombeo electrosumergible (ESP). Nos alineamos con los estándares más estrictos de la industria petrolera para asegurar una puesta en marcha óptima, orientada a extender la vida útil operacional (Run Life) del equipo.',

    services_06_title: 'Inspección de Tubería en Boca de Pozo (Escaneo en Tiempo Real)',
    services_06_preview: 'Evaluación predictiva de tuberías de producción (tubing) y perforación (drill pipe) directamente en la boca del pozo.',
    services_06_body_1: 'Evaluación predictiva de tuberías de producción (tubing) y perforación (drill pipe) directamente en la boca del pozo. Utilizando tecnología de escaneo electromagnético en tiempo real durante la extracción, detectamos al instante problemas de corrosión, desgaste o grietas para evitar fallas catastróficas.',

    services_07_title: 'Inspección de Tubería con Escáner en Patios',
    services_07_preview: 'Control de calidad y certificación de integridad antes de la movilización al campo.',
    services_07_body_1: 'Realizamos un diagnóstico exhaustivo mediante escáner avanzado en patios de almacenamiento para evaluar el estado interno y externo de sus sartas, garantizando que solo el material apto ingrese a la operación.',

    gallery_label: 'Galería de fotos de proyectos',
    alt_photo_1: 'Cubierta de plataforma costa afuera con tuberías interconectadas y grúas de izamiento',
    alt_photo_2: 'Instalación de producción costa afuera con equipos de proceso y estructuras modulares',
    alt_photo_3: 'Spools de tubería de acero amarillos dispuestos en la cubierta de una plataforma costa afuera',
    alt_photo_4: 'Estructura de tubería amarilla instalada en una plataforma costa afuera',
    alt_photo_5: 'Base de plataforma costa afuera en construcción junto a una gabarra de apoyo',
    alt_photo_6: 'Plataforma costa afuera vista desde una embarcación de apoyo en el mar',
    alt_photo_7: 'Camión transportando equipos industriales pesados por una vía de tierra',
    alt_photo_8: 'Bulldozer realizando movimiento de tierra durante la preparación del sitio',
    alt_photo_9: 'Camión volteo trabajando en nivelación de terreno y preparación del sitio',
    alt_photo_10: 'Embarcaciones de suministro atracadas para operaciones de logística marina',
    alt_photo_11: 'Complejo de refinería iluminado de noche',
    alt_photo_12: 'Excavadora moviendo un montículo de arena en un sitio de construcción',

    projects_title: 'Portafolio de Servicios Ejecutados',
    projects_intro: 'SUMROCA ha ejecutado proyectos de misión crítica para las principales operadoras de petróleo y gas de Venezuela.',
    prj_pdvsagas_1: 'Mantenimiento del sistema de transporte y distribución de gas metano Anaco–Puerto Ordaz, área operacional Puerto Ordaz, región Oriente.',
    prj_gasanaco_1: 'Transporte, carga y trasvase de lubricantes desde la planta Cardón e instalaciones similares hacia las áreas operacionales e industriales de la gerencia de producción de PDVSA Gas Centro Oriente.',
    prj_sp_1: 'Adquisición de láminas para la gerencia de logística, suministros y mudanzas — División Junín.',
    prj_sp_2: 'Adquisición de láminas para la gerencia de logística, suministros y mudanzas — División Ayacucho.',
    prj_pet_1: 'Suministro de válvulas de tapón lubricadas.',
    prj_pet_2: 'Adquisición de revestimientos de goma y anillos protectores de goma — División Carabobo PSPSA.',
    prj_pq_1: 'Suministro de válvulas de retención y válvulas de bola.',
    prj_pq_2: 'Procura de equipos de instrumentación para múltiple y líneas de flujo — Campo Tropical.',
    prj_pq_3: 'Procura de accesorios mecánicos para múltiple y líneas de flujo — Campo Tropical.',
    prj_ps_1: 'Adecuación de la plataforma de cabezal de pozo (WHP) para su futura interconexión con el puente y el CPF.',
    prj_ps_2: 'Obras asociadas al proyecto de adecuación del IPF Fase II.',
    prj_ps_3: 'Interconexión del múltiple de gas con el múltiple de inyección de gas lift en la plataforma de cabezal de pozo.',
    prj_ps_4: 'Soporte de ajuste de la planta de cabezal de pozo para la plataforma 4 de Febrero.',
    prj_pp_1: 'Construcción de plataforma de macolla de pozos petroleros — B5-2.',
    prj_pp_2: 'Asfaltado y vías de acceso para la macolla de pozos petroleros B5-2.',
    prj_pp_3: 'Construcción y perforación de pozos de monitoreo del frente de agua H-F2-C03.',
    prj_pp_4: 'Construcción de vialidad para el Bloque Este 01 en el campo Huyapari.',
    prj_pp_5: 'Construcción y movimiento de plataforma de macolla de pozos petroleros del Bloque Este.',
    prj_pp_6: 'Comedor industrial COB Campo Bare.',
    prj_bv_1: 'Suministro de bridas de diferentes diámetros.',
    prj_bv_2: 'Trampas de envío y recibo de cochinos con tapas de apertura y cierre rápido.',
    prj_bv_3: 'Suministro de placas de orificio de 2" A/I.',
    prj_bv_4: 'Suministro de equipos de medición de rugosidad de película seca y perfil de anclaje.',
    prj_bv_5: 'Suministro de termómetros bimetálicos de glicerina.',
    prj_bv_6: 'Suministro de válvulas Swagelok.',
    prj_bv_7: 'Suministro de cable monoconductor de 2000 V.',
    prj_sv_1: 'Culminación de la construcción del Ambulatorio Tipo II — Joaquín, Municipio El Tigre, Monagas — VHICOA.',
    prj_sv_2: 'Interconexión por empalme de fibra óptica entre el CPF y la WHP.',
    prj_sv_3: 'Servicios de pigtail, patchcord y certificación.',
    prj_kr_1: 'Tendido de 13 kilómetros de tubería de 16", tramo San Joaquín–Anaco.',
    prj_pt_1: 'Ampliación de la capacidad de separación de baja presión en la EPJ-2 (Módulo X).',

    contact_title: 'Contáctenos',
    contact_intro: 'Para consultas, propuestas u oportunidades de asociación, comuníquese con nuestro equipo.',
    contact_email_label: 'Correo electrónico',
    contact_address_label: 'Dirección',
    contact_founded_label: 'Fundación',
    contact_founded_value: '22 de marzo de 2006',
    form_first: 'Nombre',
    form_last: 'Apellido',
    form_email: 'Correo electrónico',
    form_phone: 'Teléfono',
    form_company: 'Empresa',
    form_subject: 'Asunto',
    form_message: 'Mensaje',
    form_submit: 'Enviar',
    form_sending: 'Enviando...',
    form_success: 'Gracias. Hemos recibido su mensaje y le responderemos a la brevedad.',
    form_error: 'Ocurrió un error. Por favor escríbanos directamente a ejdesilva@sumroca.com',

    footer_contact: 'Contacto',
    footer_navigate: 'Navegación',
    footer_company: 'Empresa',
    footer_founded: 'Fundada en 2006',
    footer_rights: '© 2026 SUMRO, C.A. Todos los derechos reservados.'
  }
};

const I18N_STORAGE_KEY = 'sumroca_lang';

function getStoredLang() {
  try {
    const stored = localStorage.getItem(I18N_STORAGE_KEY);
    return stored === 'es' || stored === 'en' ? stored : 'en';
  } catch (err) {
    return 'en';
  }
}

let currentLang = getStoredLang();

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;
  currentLang = lang;

  document.documentElement.lang = lang;
  document.title = dict.meta_title;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  try {
    localStorage.setItem(I18N_STORAGE_KEY, lang);
  } catch (err) {
    /* private browsing: keep the choice for this page view only */
  }

  document.dispatchEvent(new CustomEvent('sumroca:langchange', { detail: { lang } }));
}

/* Translate helper shared with main.js */
function t(key) {
  const dict = translations[currentLang] || translations.en;
  return dict[key] !== undefined ? dict[key] : key;
}

/* Apply immediately (script is deferred, so the DOM is parsed) and wire the toggle. */
applyLanguage(currentLang);

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});
