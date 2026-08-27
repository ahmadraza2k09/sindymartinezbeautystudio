import { useState, useEffect } from "react";
const logo = "https://res.cloudinary.com/zse1lija/image/upload/f_auto,q_auto,w_600/v1787755000/b3162c4d-f06b-4a7e-874a-2d0c29d137df_xkgyku.png";
import sindyPhoto from "./imports/sindy_photo.jpg";

type Lang = "es" | "en";

const WHATSAPP_PHONE = "14694392021";

function getWhatsAppDefaultUrl(lang: Lang) {
  const text =
    lang === "es"
      ? "Hola Sindy! Me gustaría agendar una cita o consultar sobre tus servicios en Sindy Martinez Beauty Studio. ¿Qué disponibilidad tienes?"
      : "Hello Sindy! I'd like to book an appointment or inquire about your services at Sindy Martinez Beauty Studio. What is your availability?";
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}



function getServiceWhatsAppUrl(serviceTitle: string, duration: string, price: string, lang: Lang) {
  const text =
    lang === "es"
      ? `Hola Sindy! Quisiera agendar una cita para el servicio de:\n\n*Servicio:* ${serviceTitle}\n*Duración:* ${duration}\n*Precio:* ${price}\n\n¿Qué días u horarios tienes disponibles en el estudio? ¡Gracias!`
      : `Hello Sindy! I would like to book an appointment for:\n\n*Service:* ${serviceTitle}\n*Duration:* ${duration}\n*Price:* ${price}\n\nWhat days or times do you have available at the studio? Thank you!`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

const IMAGES = {
  corteCabello: "https://i.pinimg.com/736x/73/c0/46/73c04676738efbd05c9890f8a639da5b.jpg",
  color: "https://res.cloudinary.com/zse1lija/image/upload/f_auto,q_auto,w_800/v1787730552/Colour_okpnan.jpg",
  balayage: "https://res.cloudinary.com/zse1lija/image/upload/f_auto,q_auto,w_800/v1787730552/Balayage_evgrxo.jpg",
  reflejos: "https://res.cloudinary.com/zse1lija/image/upload/f_auto,q_auto,w_800/v1787730553/Reflejos_x8xlux.jpg",
  alisado: "https://res.cloudinary.com/zse1lija/image/upload/f_auto,q_auto,w_800/v1787730552/Alisado_Organico_lnortv.jpg",
  botox: "https://res.cloudinary.com/zse1lija/image/upload/f_auto,q_auto,w_800/v1787730551/Botox_Capilar_zwihav.jpg",
  aminoacidos: "https://res.cloudinary.com/zse1lija/image/upload/f_auto,q_auto,w_800/v1787730554/Aminoa%CC%81cidos_jxwh3y.jpg",
  secado: "https://res.cloudinary.com/zse1lija/image/upload/f_auto,q_auto,w_800/v1787730554/Lavado_y_secado_jirymd.jpg",
  reconstructor: "https://res.cloudinary.com/zse1lija/image/upload/f_auto,q_auto,w_800/v1787730553/Tratamiento_reconstructor_bwjjuc.jpg",
  cejas: "https://res.cloudinary.com/zse1lija/image/upload/f_auto,q_auto,w_800/v1787730558/Laminado_y_depilacion_de_ceja_con_tinte_fnhmoy.jpg",
  igPhoneMockup: "https://res.cloudinary.com/zse1lija/image/upload/f_auto,q_auto,w_800/v1787728869/6cc6ac47-6e4f-4e7b-b699-7aebc992121b_Background_Removed_dmg9bi.png",
  heroBackgroundVideoPoster: "https://res.cloudinary.com/zse1lija/video/upload/so_0,f_auto,q_auto,w_1280/v1787730941/f94ef99e-eedf-4e2d-b5b3-7dccdf4320a8_zhg0ei.jpg",
  heroBackgroundVideoWebm: "https://res.cloudinary.com/zse1lija/video/upload/f_webm,q_auto:eco,w_720/v1787730941/f94ef99e-eedf-4e2d-b5b3-7dccdf4320a8_zhg0ei.webm",
  heroBackgroundVideoMp4: "https://res.cloudinary.com/zse1lija/video/upload/f_mp4,q_auto:eco,w_720/v1787730941/f94ef99e-eedf-4e2d-b5b3-7dccdf4320a8_zhg0ei.mp4",
};

const t = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      reviews: "Reseñas",
      faq: "FAQ",
      policies: "Políticas",
      contact: "Contacto",
      bookNow: "AGENDA TU CITA",
    },
    hero: {
      title: "Sindy Martinez Beauty Studio",
      p1: "Nos especializamos en la transformación capilar, combinando excelencia, técnicas avanzadas y productos de alta gama sin formol.",
      p2: "Brindamos una experiencia de bienestar exclusiva y personalizada para lograr un cabello saludable, radiante y duradero.",
      bookBtn: "AGENDA TU CITA",
    },
    featuredServices: {
      title: "Nuestros Servicios Destacados",
      card1: {
        title: "Alisados y Transformación",
        desc: "Tratamientos especializados para eliminar el frizz, alisar el cabello y lograr un acabado suave, brillante y de larga duración.",
        btn: "Conoce Más",
      },
      card2: {
        title: "Reparación y Cuidado Capilar",
        desc: "Recuperamos la salud del cabello con tratamientos intensivos que hidratan, nutren y reconstruyen la fibra capilar.",
        btn: "Conoce Más",
      },
      card3: {
        title: "Corte y Mantenimiento",
        desc: "Servicios diseñados para mantener tu cabello saludable, fuerte y con un aspecto impecable.",
        btn: "Conoce Más",
      },
      card4: {
        title: "Colorimetría y Balayage",
        desc: "Técnicas avanzadas de coloración profesional, Balayage e iluminación para lograr un tono personalizado y radiante.",
        btn: "Conoce Más",
      },
    },
    founder: {
      name: "Sindy Martinez",
      tag: "Fundadora & Cosmetóloga Licenciada",
      aboutText:
        "Beautystudio_SindyM es un estudio de belleza gestionado por una estilista profesional con una pasión por realzar la belleza a través de servicios de alta calidad. Nos especializamos en el cuidado capilar Alisado permanente Orgánico, Terapias de Hidratación, Reparación, Botox Capilar Aminoácidos, Cortes de cabello, Color profesional, Balayage, Highlights, en Beautystudio_SindyM te garantizamos un servicio excepcional que resalta tu belleza natural y te hace sentir radiante en cada visita. ¡Déjanos consentirte y resaltar tu belleza única!",
      waBtn: "Hablar por WhatsApp",
      igBtn: "Ver Instagram",
    },
    faq: {
      title: "Preguntas Frecuentes",
      sub: "Resolvemos tus dudas principales para brindarte la mejor experiencia en el estudio.",
      items: [
        {
          q: "¿Qué diferencia tiene el Alisado Orgánico de otros tratamientos tradicionales?",
          a: "Nuestro Alisado Orgánico es 100% libre de formol y químicos agresivos. Nutre y restaura la fibra capilar mientras elimina el frizz y alinea el cabello de forma segura, dejando un acabado sedoso, natural y con brillo radiante.",
        },
        {
          q: "¿Cuánto tiempo duran los tratamientos de alisado y botox capilar?",
          a: "El Alisado Orgánico dura entre 3 y 6 meses dependiendo del tipo de cabello y los cuidados posteriores. El Botox Capilar y los Aminoácidos ofrecen hidratación profunda y control de frizz por aproximadamente 2 a 3 meses.",
        },
        {
          q: "¿Cómo puedo agendar una cita en el estudio?",
          a: "Puedes agendar tu cita haciendo clic en cualquier botón de 'AGENDA TU CITA' en nuestro sitio web para contactarnos directamente por WhatsApp (+1 469-439-2021) o completando el formulario de contacto al final de la página.",
        },
        {
          q: "¿Necesito una consulta previa antes de un Balayage o cambio de color drástico?",
          a: "Sí, para servicios de Balayage o aclaraciones intensas recomendamos realizar una evaluación de la salud de tu hebra capilar por WhatsApp o presencial para garantizar el mejor resultado sin comprometer tu cabello.",
        },
        {
          q: "¿Qué cuidados se recomiendan después de un alisado u otro servicio capilar?",
          a: "Recomendamos lavar el cabello con shampoos libres de sulfatos y aplicar mascarillas nutritivas periódicamente para prolongar la suavidad y el brillo natural.",
        },
        {
          q: "¿Cuáles son las políticas de reprogramación y puntualidad?",
          a: "Agradecemos llegar a tiempo a tu cita. Si necesitas cancelar o reprogramar, por favor notifícalo con la mayor antelación posible vía WhatsApp para ajustar la agenda del estudio.",
        },
      ],
    },
    policies: {
      title: "Políticas y Términos / Policy and Terms",
      text: "Al reservar con SindyM_BeautyStudio, usted acepta estas Políticas y Términos. SindyM_BeautyStudio puede cancelar o reprogramar una cita confirmada si es necesario y le notificará lo antes posible. Por favor, llegue a tiempo; llegar tarde puede reducir la duración de su servicio o requerir una reprogramación. Si necesita cancelar o reprogramar, hágalo con la mayor antelación posible; las cancelaciones tardías y las ausencias pueden generar un cargo.",
    },
    testimonials: {
      title: "Reseñas de Clientes",
      r1: {
        text: "Excelente experiencia en SINDY MARTINEZ BEAUTY STUDIO. Desde que llegué me hicieron sentir súper cómoda. El resultado me encantó, mi cabello quedó hermoso, suave y con un brillo increíble. Se nota el profesionalismo y el cuidado en cada detalle.",
        author: "- Emma Pirela",
      },
      r2: {
        text: "La mejor experiencia y cuidado para mi cabello y mis cejitas! Atención, profesionalismo, calidad de servicios y productos TODO 10/10 y el calor, humedad y cariño con el que te reciben siempre vale oro. ME ENCANTA aquí",
        author: "- Gabriela González",
      },
      r3: {
        text: "Soy clienta desde hace más de 3 años y ¡estoy encantada! Siempre me hago el alisado y el corte de pelo aquí, y el resultado siempre es impecable. El servicio es excelente: muy atento y profesional. ¡Los recomiendo ampliamente!",
        author: "- Emilia Alegre da Silva",
      },
    },
    fullServicesShowcase: {
      title: "Servicios & Precios",
      sub: "Procedimientos realizados con productos de alta gama sin formol y técnicas avanzadas.",
      bookBtn: "Reservar Cita por WhatsApp",
    },
    contact: {
      title: "Hablemos",
      desc: "Descubre el tratamiento perfecto para un cabello saludable y radiante.",
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      service: "Servicio de Interés",
      message: "Mensaje / Consulta",
      submitBtn: "ENVIAR MENSAJE VIA WHATSAPP",
    },
    hours: {
      title: "Horarios de Atención",
      sunday: "Domingo: Cerrado",
      monday: "Lunes: 9:00 AM - 6:00 PM",
      tuesday: "Martes: 9:00 AM - 6:00 PM",
      wednesday: "Miércoles: 9:00 AM - 6:00 PM",
      thursday: "Jueves: 9:00 AM - 6:00 PM",
      friday: "Viernes: 9:00 AM - 6:00 PM",
      saturday: "Sábado: 9:00 AM - 4:00 PM",
    },
    footer: {
      about: "Sindy Martinez Beauty Studio en Irving, TX. Especialistas en balayage, colorimetría y tratamientos de restauración capilar.",
      navTitle: "Navegación",
      locationTitle: "Ubicación & Horarios",
      followUs: "Síguenos",
      rights: "Sindy Martinez Beauty Studio. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      reviews: "Reviews",
      faq: "FAQ",
      policies: "Policies",
      contact: "Contact",
      bookNow: "BOOK APPOINTMENT",
    },
    hero: {
      title: "Sindy Martinez Beauty Studio",
      p1: "We specialize in hair transformation, combining excellence, advanced techniques, and premium formaldehyde-free products.",
      p2: "We deliver an exclusive, personalized wellness experience focused on achieving healthy, radiant, long-lasting hair.",
      bookBtn: "BOOK APPOINTMENT",
    },
    featuredServices: {
      title: "Our Featured Services",
      card1: {
        title: "Straightening & Transformation",
        desc: "Specialized treatments to eliminate frizz, smooth hair, and achieve a soft, shiny, long-lasting finish.",
        btn: "Learn More",
      },
      card2: {
        title: "Hair Repair & Care",
        desc: "We restore hair health with intensive treatments that hydrate, nourish, and rebuild the hair fiber.",
        btn: "Learn More",
      },
      card3: {
        title: "Cut & Maintenance",
        desc: "Services designed to keep your hair healthy, strong, and looking flawless at all times.",
        btn: "Learn More",
      },
      card4: {
        title: "Hair Color & Balayage",
        desc: "Advanced coloring, Balayage, and custom highlight techniques tailored to enhance your style.",
        btn: "Learn More",
      },
    },
    founder: {
      name: "Sindy Martinez",
      tag: "Founder & Licensed Cosmetologist",
      aboutText:
        "Beautystudio_SindyM is a beauty studio managed by a professional stylist passionate about enhancing beauty through high-quality services. We specialize in hair care including Organic Permanent Straightening, Hydration & Repair Therapies, Hair Botox, Amino Acids, Haircuts, Professional Hair Color, Balayage, and Highlights. At Beautystudio_SindyM, we guarantee exceptional service that highlights your natural beauty and leaves you feeling radiant on every visit. Let us pamper you and bring out your unique beauty!",
      waBtn: "Chat on WhatsApp",
      igBtn: "View Instagram",
    },
    faq: {
      title: "Frequently Asked Questions",
      sub: "Find answers to common questions about our studio services and booking.",
      items: [
        {
          q: "How is Organic Straightening different from traditional chemical treatments?",
          a: "Our Organic Straightening is 100% formaldehyde-free with no harsh fumes. It deeply nourishes and repairs the hair fiber while eliminating frizz, delivering silky, radiant, and smooth hair safely.",
        },
        {
          q: "How long do straightening and Hair Botox treatments last?",
          a: "Organic Straightening lasts between 3 to 6 months depending on hair type and post-treatment home care. Hair Botox and Amino Acid treatments keep hair hydrated and frizz-free for 2 to 3 months.",
        },
        {
          q: "How can I book an appointment at the studio?",
          a: "You can book easily by clicking any 'BOOK APPOINTMENT' button on our site to chat directly via WhatsApp (+1 469-439-2021) or by submitting the contact form at the bottom of the page.",
        },
        {
          q: "Do I need a prior consultation before a Balayage or major color transformation?",
          a: "Yes! For Balayage and major lightening transformations, we recommend a hair health evaluation via WhatsApp or in person to guarantee gorgeous results while keeping your hair strong.",
        },
        {
          q: "What maintenance care is recommended after an organic straightening or hair therapy?",
          a: "We recommend using sulfate-free shampoos and applying deep hydrating masks periodically to preserve long-lasting smoothness and radiant shine.",
        },
        {
          q: "What are your punctuality and rescheduling policies?",
          a: "We kindly ask clients to arrive on time. If you need to reschedule or cancel your appointment, please let us know as far in advance as possible via WhatsApp.",
        },
      ],
    },
    policies: {
      title: "Policy and Terms",
      text: "By booking with SindyM_BeautyStudio, you agree to these Policies and Terms. SindyM_BeautyStudio may cancel or reschedule a confirmed appointment if necessary and will notify you as soon as possible. Please arrive on time; arriving late may reduce the duration of your service or require rescheduling. If you need to cancel or reschedule, please do so as far in advance as possible; late cancellations and no-shows may incur a fee.",
    },
    testimonials: {
      title: "Client Reviews",
      r1: {
        text: "Excellent experience at SINDY MARTINEZ BEAUTY STUDIO. From the moment I arrived, they made me feel super comfortable. I loved the result—my hair turned out beautiful, soft, and amazingly shiny. Professionalism and care in every detail!",
        author: "- Emma Pirela",
      },
      r2: {
        text: "The best experience and hair care for my hair and brows! Attention, professionalism, quality of services and products 10/10. The warmth and care you receive here is worth gold. I LOVE it here!",
        author: "- Gabriela González",
      },
      r3: {
        text: "I've been a client for over 3 years and I'm delighted! I always get my hair straightening and haircut here, and the result is always impeccable. Excellent service!",
        author: "- Emilia Alegre da Silva",
      },
    },
    fullServicesShowcase: {
      title: "Full Services Showcase",
      sub: "Procedures performed with formaldehyde-free premium products and advanced techniques.",
      bookBtn: "Book via WhatsApp",
    },
    contact: {
      title: "Let's Talk",
      desc: "Discover the perfect treatment for healthy, radiant hair.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      service: "Service of Interest",
      message: "Message / Query",
      submitBtn: "SEND WHATSAPP MESSAGE",
    },
    hours: {
      title: "Operating Hours",
      sunday: "Sunday: Closed",
      monday: "Monday: 9:00 AM - 6:00 PM",
      tuesday: "Tuesday: 9:00 AM - 6:00 PM",
      wednesday: "Wednesday: 9:00 AM - 6:00 PM",
      thursday: "Thursday: 9:00 AM - 6:00 PM",
      friday: "Friday: 9:00 AM - 6:00 PM",
      saturday: "Saturday: 9:00 AM - 4:00 PM",
    },
    footer: {
      about: "Sindy Martinez Beauty Studio en Irving, TX. Especialistas en balayage, colorimetría y tratamientos de restauración capilar.",
      navTitle: "Navigation",
      locationTitle: "Location & Hours",
      followUs: "Follow Us",
      rights: "Sindy Martinez Beauty Studio. All rights reserved.",
    },
  },
};

// ─── HEADER / NAVIGATION (CLEAN PURE BLACK LOGO) ──────────────────────────────
function Header({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const cur = t[lang].nav;

  const leftLinks = [
    { label: cur.home, href: "#home" },
    { label: cur.about, href: "#about" },
    { label: cur.services, href: "#services" },
  ];

  const rightLinks = [
    { label: cur.reviews, href: "#reviews" },
    { label: cur.faq, href: "#faq" },
    { label: cur.policies, href: "#policies" },
    { label: cur.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <nav
        className="w-full transition-all duration-300 border-b border-gray-300 shadow-md"
        style={{
          background: scrolled
            ? "linear-gradient(180deg, rgba(255,255,255,0.99) 0%, rgba(245,240,232,0.97) 100%)"
            : "linear-gradient(180deg, rgba(253,251,247,0.98) 0%, rgba(247,243,235,0.95) 100%)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08), inset 0 -1px 0 rgba(0,0,0,0.05)",
        }}
      >
        <div className="mx-auto flex h-20 md:h-24 max-w-[1400px] items-center justify-between px-6 gap-4">
          
          {/* Mobile Logo */}
          <div className="flex items-center gap-3 lg:hidden z-20">
            <a href="#home" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Sindy Martinez Beauty Studio Logo"
                className="h-12 sm:h-14 w-auto max-w-[170px] object-contain py-1"
              />
            </a>
          </div>

          {/* Desktop Left Nav Links */}
          <div className="hidden lg:flex items-center justify-end gap-5 xl:gap-8 flex-1 z-10">
            {leftLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-sans text-xs tracking-widest uppercase font-semibold text-[#0A0A0A] hover:text-[#D4AF37] transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop Center Brand Logo */}
          <div className="hidden lg:flex items-center justify-center shrink-0 px-4 xl:px-8 z-20">
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Sindy Martinez Beauty Studio Logo"
                className="h-14 md:h-16 lg:h-18 max-h-18 w-auto max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105 py-1"
              />
            </a>
          </div>

          {/* Desktop Right Links + Lang Switcher + 3D CTA Button */}
          <div className="hidden lg:flex items-center justify-start gap-5 xl:gap-7 flex-1 z-10">
            {rightLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-sans text-xs tracking-widest uppercase font-semibold text-[#0A0A0A] hover:text-[#D4AF37] transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="inline-flex items-center bg-white rounded-full px-2.5 py-1 border border-gray-300 shadow-inner cursor-pointer shrink-0">
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  lang === "es" ? "skeuo-btn-black text-white" : "text-[#0A0A0A]/70 hover:text-black"
                }`}
              >
                ES
              </button>
              <span className="text-black/30 mx-1">|</span>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  lang === "en" ? "skeuo-btn-black text-white" : "text-[#0A0A0A]/70 hover:text-black"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={getWhatsAppDefaultUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="skeuo-btn-black text-[#FDFBF7] px-6 py-3 text-xs font-semibold tracking-widest uppercase whitespace-nowrap shrink-0"
            >
              {cur.bookNow}
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="lg:hidden ml-auto z-10 flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="text-xs font-bold px-3 py-1 skeuo-btn-black text-white rounded-full"
            >
              {lang.toUpperCase()}
            </button>
            <button
              className="text-[#0A0A0A] p-2 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <span className="text-xl font-bold">✕</span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <div className="lg:hidden px-6 py-6 border-t border-gray-200 flex flex-col gap-4 bg-[#FDFBF7] shadow-xl">
            {[...leftLinks, ...rightLinks].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-sans text-xs tracking-widest uppercase text-[#0A0A0A] hover:text-[#D4AF37] py-1 border-b border-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={getWhatsAppDefaultUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center py-3.5 font-sans text-xs font-semibold tracking-widest uppercase skeuo-btn-black text-white"
            >
              {cur.bookNow}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

// ─── HERO SECTION (100% FULL SCREEN VIEWPORT VIDEO COVER) ─────────────────────
function Hero({ lang }: { lang: Lang }) {
  const cur = t[lang].hero;

  return (
    <section id="home" className="bg-[#FDFBF7] border-b border-gray-300 relative overflow-hidden min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-96px)] flex flex-col justify-center items-center py-16 sm:py-24">
      
      {/* Full Page Viewport Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={IMAGES.heroBackgroundVideoPoster}
          className="w-full h-full object-cover object-[center_22%] filter contrast-105 brightness-100 opacity-90"
        >
          <source src={IMAGES.heroBackgroundVideoWebm} type="video/webm" />
          <source src={IMAGES.heroBackgroundVideoMp4} type="video/mp4" />
        </video>
        {/* Subtle, soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/60 via-[#FDFBF7]/35 to-[#FDFBF7]/75" />
      </div>

      <div className="mx-auto max-w-4xl px-6 relative z-10 flex flex-col items-center text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0A0A] font-light leading-[1.15] mb-6 tracking-tight drop-shadow-md">
          Sindy Martinez <br />
          <span className="font-normal text-[#1A1A1A]">Beauty Studio</span>
        </h1>

        {/* Clean Natural Description Text */}
        <div className="space-y-4 text-sm sm:text-base text-[#0A0A0A] leading-relaxed font-sans max-w-2xl text-center font-normal">
          <p>{cur.p1}</p>
          <p>{cur.p2}</p>
        </div>

        <div className="mt-9">
          <a
            href={getWhatsAppDefaultUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="skeuo-btn-black text-white px-9 py-4 text-xs font-bold tracking-[0.18em] uppercase inline-flex items-center gap-2 shadow-2xl"
          >
            <span>{cur.bookBtn}</span>
            <span className="text-sm">➔</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURED SERVICES SECTION ───────────────────────────────────────────────
function FeaturedServices({ lang }: { lang: Lang }) {
  const cur = t[lang].featuredServices;

  const cards = [
    { ...cur.card1, key: "c1" },
    { ...cur.card2, key: "c2" },
    { ...cur.card3, key: "c3" },
    { ...cur.card4, key: "c4" },
  ];

  return (
    <section id="services" className="bg-[#0A0A0A] text-white px-6 py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.corteCabello})` }}
      />
      
      <div className="max-w-[1350px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="script-title text-4xl sm:text-5xl text-[#FDFBF7] font-normal drop-shadow-md">
            {cur.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <div
              key={c.key}
              className="skeuo-card-dark p-8 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-center mb-6 text-[#D4AF37] filter drop-shadow">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-center text-white font-medium mb-4 leading-snug drop-shadow-sm">
                  {c.title}
                </h3>

                <p className="font-sans text-xs text-white/75 text-center leading-relaxed mb-8">
                  {c.desc}
                </p>
              </div>

              <div className="text-center pt-4">
                <a
                  href="#full-services"
                  className="pill-btn text-xs font-sans"
                >
                  <span>{c.btn}</span>
                  <span className="w-5 h-5 rounded-full skeuo-btn-black text-white flex items-center justify-center text-[10px] font-bold">
                    ➔
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOUNDER & ABOUT SECTION ──────────────────────────────────────────────────
function Founder({ lang }: { lang: Lang }) {
  const cur = t[lang].founder;

  const tickerText =
    "Where Beauty Meets Healthy Hair • Premium Hair Transformations • Luxury Salon Experience • Personalized Care • Professional Results • ";

  return (
    <section id="about" className="bg-[#FDFBF7] px-6 py-24 border-b border-gray-300">
      <div className="mx-auto max-w-[1300px] grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Sindy Photo */}
        <div className="relative overflow-hidden rounded-2xl skeuo-card-light p-2">
          <div className="rounded-xl overflow-hidden relative">
            <img
              src={sindyPhoto}
              alt="Sindy Martinez Founder & Cosmetologist"
              loading="eager"
              decoding="async"
              className="w-full h-[540px] object-cover object-top"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-[#0A0A0A] text-[#FDFBF7] py-3.5 overflow-hidden border-t border-[#D4AF37]/40 shadow-2xl">
              <div className="animate-marquee whitespace-nowrap font-sans text-[11px] uppercase tracking-widest font-medium opacity-95 flex gap-4">
                <span>{tickerText}</span>
                <span>{tickerText}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: About Text */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h2 className="script-title text-5xl sm:text-6xl lg:text-7xl text-[#0A0A0A] mb-8 font-normal drop-shadow-sm w-full text-center lg:text-left">
            {cur.name}
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-[#0A0A0A]/85 leading-relaxed font-sans bg-white p-7 rounded-2xl border border-gray-200 shadow-sm text-center lg:text-left w-full">
            <p className="font-sans">{cur.aboutText}</p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 font-sans w-full">
            <a
              href={getWhatsAppDefaultUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="skeuo-btn-black text-white px-8 py-3.5 text-xs font-bold tracking-[0.16em] uppercase rounded-xl"
            >
              {cur.waBtn}
            </a>
            <a
              href="https://instagram.com/sindym_beautystudio"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#0A0A0A] text-[#0A0A0A] px-8 py-3.5 text-xs font-bold tracking-[0.16em] uppercase rounded-xl hover:bg-[#0A0A0A] hover:text-white transition-all shadow-sm"
            >
              {cur.igBtn}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── REVIEWS / TESTIMONIALS SECTION ───────────────────────────────────────────
function Testimonials({ lang }: { lang: Lang }) {
  const cur = t[lang].testimonials;

  const reviews = [
    { ...cur.r1, key: "r1" },
    { ...cur.r2, key: "r2" },
    { ...cur.r3, key: "r3" },
  ];

  return (
    <section id="reviews" className="bg-[#FDFBF7] px-6 py-24 border-b border-gray-300">
      <div className="max-w-[1300px] mx-auto">
        
        <div className="mb-14 text-center">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#B88E1C] block mb-1">
            {lang === "es" ? "OPINIONES Y EXPERIENCIAS" : "CLIENT EXPERIENCES"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-[#0A0A0A] font-light">
            {cur.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.key} className="skeuo-card-light p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden">
              <div>
                <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/85 leading-relaxed mb-6 italic">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/80">
                <p className="font-sans text-xs font-bold text-[#0A0A0A] tracking-wide">
                  {r.author}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── INSTAGRAM SECTION ────────────────────────────────────────────────────────
function InstagramSection({ lang }: { lang: Lang }) {
  return (
    <section className="bg-[#FDFBF7] px-6 py-24 border-b border-gray-300">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Title above Instagram frame */}
        <p className="script-title text-3xl sm:text-4xl text-[#D4AF37] mb-2 font-normal">
          @sindym_beautystudio
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] font-light uppercase tracking-wider mb-8">
          {lang === "es"
            ? "Visita nuestro estudio y síguenos en Instagram"
            : "View our salon and follow us on Instagram"}
        </h2>

        {/* Centered Instagram Phone Frame Image */}
        <div className="flex justify-center my-4">
          <a
            href="https://instagram.com/sindym_beautystudio"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group transition-all duration-500 hover:scale-105 block"
          >
            <img
              src={IMAGES.igPhoneMockup}
              alt="SindyM Beauty Studio Instagram Profile"
              loading="lazy"
              decoding="async"
              className="w-[320px] sm:w-[380px] md:w-[420px] h-auto object-contain filter drop-shadow-2xl"
            />
          </a>
        </div>

        {/* Follow CTA Button */}
        <div className="mt-8">
          <a
            href="https://instagram.com/sindym_beautystudio"
            target="_blank"
            rel="noopener noreferrer"
            className="skeuo-btn-black text-white px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase rounded-xl inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current text-[#D4AF37]" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>{lang === "es" ? "Síguenos en Instagram" : "Follow Us on Instagram"}</span>
          </a>
        </div>

      </div>
    </section>
  );
}

// ─── POLICY AND TERMS SECTION ─────────────────────────────────────────────────
function PoliciesAndTerms({ lang }: { lang: Lang }) {
  const cur = t[lang].policies;

  const points =
    lang === "es"
      ? [
          {
            num: "01",
            title: "Aceptación de Términos",
            desc: "Al reservar en SindyM_BeautyStudio, usted acepta íntegramente nuestras políticas y condiciones de servicio.",
          },
          {
            num: "02",
            title: "Cancelaciones y Reprogramación",
            desc: "El estudio se reserva el derecho de reprogramar o cancelar una cita si es necesario, notificándole a la brevedad.",
          },
          {
            num: "03",
            title: "Puntualidad Requerida",
            desc: "Llegar a tiempo es indispensable. Los retrasos pueden acortar la duración del servicio o requerir una nueva fecha.",
          },
          {
            num: "04",
            title: "Cancelaciones Tardías y Ausencias",
            desc: "Agradecemos notificar cambios con la mayor antelación posible. Las cancelaciones de último momento o ausencias pueden generar cargos.",
          },
        ]
      : [
          {
            num: "01",
            title: "Terms Acceptance",
            desc: "By booking at SindyM_BeautyStudio, you fully accept our policies and service conditions.",
          },
          {
            num: "02",
            title: "Cancellation & Rescheduling",
            desc: "The studio reserves the right to reschedule or cancel appointments when necessary, notifying you as early as possible.",
          },
          {
            num: "03",
            title: "Punctuality Required",
            desc: "Arriving on time is essential. Delays may shorten your service duration or require rescheduling.",
          },
          {
            num: "04",
            title: "Late Cancellations & No-Shows",
            desc: "Please notify changes as far in advance as possible. Last-minute cancellations or no-shows may incur fees.",
          },
        ];

  return (
    <section id="policies" className="bg-[#FDFBF7] px-4 sm:px-6 py-20 border-b border-gray-300">
      <div className="max-w-4xl mx-auto skeuo-card-light p-6 sm:p-12 rounded-3xl">
        <div className="text-center mb-10">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#B88E1C]">
            {lang === "es" ? "CONDICIONES DEL ESTUDIO" : "STUDIO TERMS"}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#0A0A0A] uppercase tracking-wider font-light mt-1">
            {cur.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {points.map((pt) => (
            <div
              key={pt.num}
              className="bg-white/90 border border-gray-200/90 rounded-2xl p-5 sm:p-6 shadow-sm flex items-start gap-4"
            >
              <span className="font-serif font-bold text-xs text-[#D4AF37] shrink-0 w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center shadow-md">
                {pt.num}
              </span>
              <div className="text-left">
                <h3 className="font-serif font-bold text-sm sm:text-base text-[#0A0A0A] mb-1">
                  {pt.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/80 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT SECTION ──────────────────────────────────────────────────────────
function Contact({ lang }: { lang: Lang }) {
  const cur = t[lang].contact;
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      lang === "es"
        ? `Hola Sindy! Me gustaría agendar una cita / consulta:\n\n*Nombre:* ${form.name}\n*Email:* ${form.email}\n*Teléfono:* ${form.phone}\n*Servicio:* ${form.service}\n*Mensaje:* ${form.notes}`
        : `Hello Sindy! I'd like to book an appointment:\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Phone:* ${form.phone}\n*Service:* ${form.service}\n*Message:* ${form.notes}`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="bg-white px-6 py-24 border-b border-gray-300">
      <div className="max-w-xl mx-auto text-left skeuo-card-light p-8 sm:p-10 rounded-3xl">
        <h2 className="script-title text-5xl sm:text-6xl text-[#0A0A0A] mb-2 font-normal">
          {cur.title}
        </h2>
        <p className="font-sans text-xs text-[#0A0A0A]/70 mb-8">
          {cur.desc}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 font-sans">
          <div>
            <label className="text-xs font-semibold block mb-1 text-[#0A0A0A]">{cur.name}</label>
            <input
              type="text"
              required
              placeholder={lang === "es" ? "Tu nombre" : "Your name"}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full skeuo-input rounded-xl px-4 py-3 text-sm text-[#0A0A0A]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold block mb-1 text-[#0A0A0A]">{cur.email}</label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full skeuo-input rounded-xl px-4 py-3 text-sm text-[#0A0A0A]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold block mb-1 text-[#0A0A0A]">{cur.phone}</label>
            <input
              type="tel"
              placeholder="(469) 000-0000"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full skeuo-input rounded-xl px-4 py-3 text-sm text-[#0A0A0A]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold block mb-1 text-[#0A0A0A]">{cur.service}</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full skeuo-input rounded-xl px-4 py-3 text-sm text-[#0A0A0A]"
            >
              <option value="">{lang === "es" ? "Selecciona un servicio…" : "Select a service…"}</option>
              <option value="Corte de cabello">Corte de cabello ($30)</option>
              <option value="Color">Color ($160+)</option>
              <option value="Balayage">Balayage ($380+)</option>
              <option value="Reflejos">Reflejos ($380+)</option>
              <option value="Alisado Orgánico">Alisado Orgánico ($240+)</option>
              <option value="Botox Capilar">Botox Capilar ($100 - $150)</option>
              <option value="Aminoácidos">Aminoácidos ($130 - $160)</option>
              <option value="Lavado y secado">Lavado y secado ($50 - $80)</option>
              <option value="Tratamiento Reconstructor">Tratamiento Reconstructor ($120)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold block mb-1 text-[#0A0A0A]">{cur.message}</label>
            <textarea
              rows={3}
              placeholder={lang === "es" ? "Escribe tu consulta o preferencia de fecha…" : "Your message or preferred date…"}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full skeuo-input rounded-xl px-4 py-3 text-sm text-[#0A0A0A] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full skeuo-btn-black text-white py-4 font-sans font-bold text-xs tracking-[0.18em] uppercase rounded-xl mt-4"
          >
            {cur.submitBtn}
          </button>
        </form>
      </div>
    </section>
  );
}

// ─── FULL VISUAL SERVICES SHOWCASE ────────────────────────────────────────────
function FullServicesShowcase({ lang }: { lang: Lang }) {
  const cur = t[lang].fullServicesShowcase;

  const allServices = [
    {
      id: 1,
      categoryLabel: lang === "es" ? "Cortes de Cabello" : "Haircuts & Styling",
      title: lang === "es" ? "Corte de cabello ($30)" : "Haircut ($30)",
      price: "$30",
      duration: "40 min",
      desc: lang === "es" ? "Corte de cabello profesional adaptado a la forma de tu rostro y tu estilo único." : "Professional haircut tailored to frame your face and suit your unique style.",
      image: IMAGES.corteCabello,
      tag: "ESTILO",
    },
    {
      id: 2,
      categoryLabel: lang === "es" ? "Colorimetría Avanzada" : "Hair Color",
      title: lang === "es" ? "Color Profesional ($160+)" : "Hair Color ($160+)",
      price: "$160+",
      duration: "2 h 30 min",
      desc: lang === "es" ? "Servicio de coloración profesional para el cabello con tonos personalizados de alta duración." : "Professional hair coloring service. Wide range of shades and custom techniques.",
      image: IMAGES.color,
    },
    {
      id: 3,
      categoryLabel: lang === "es" ? "Balayage & Iluminación" : "Balayage",
      title: lang === "es" ? "Balayage Profesional ($380+)" : "Balayage ($380+)",
      price: "$380+",
      duration: "7 h",
      desc: lang === "es" ? "Balayage con efecto degradado natural. Ideal para iluminar y dar máxima dimensión al cabello." : "Balayage hair coloring creating a natural gradient effect. Ideal to illuminate and add dimension.",
      image: IMAGES.balayage,
      tag: "POPULAR",
    },
    {
      id: 4,
      categoryLabel: lang === "es" ? "Reflejos & Highlights" : "Highlights",
      title: lang === "es" ? "Reflejos (Highlights) ($380+)" : "Highlights (Reflejos) ($380+)",
      price: "$380+",
      duration: "7 h",
      desc: lang === "es" ? "Reflejos e iluminaciones con técnicas de precisión para resaltar tu belleza natural." : "Expert highlighting services in a relaxing environment to bring out natural beauty.",
      image: IMAGES.reflejos,
    },
    {
      id: 5,
      categoryLabel: lang === "es" ? "Alisados Orgánicos" : "Organic Smoothing",
      title: lang === "es" ? "Alisado Orgánico ($240+)" : "Organic Straightening ($240+)",
      price: "$240+",
      duration: "5 h 30 min",
      desc: lang === "es" ? "Tratamiento de keratina orgánica para un cabello suave, brillante y 100% sin frizz." : "Keratin smoothing treatment for soft, shiny, frizz-free hair. Restores hair fiber.",
      image: IMAGES.alisado,
      tag: "TRATAMIENTO ESTRELLA",
    },
    {
      id: 6,
      categoryLabel: lang === "es" ? "Botox Capilar" : "Hair Botox",
      title: lang === "es" ? "Botox Capilar ($100 - $150)" : "Hair Botox ($100 - $150)",
      price: "$100 - $150",
      duration: "2 h",
      desc: lang === "es" ? "Tratamiento intensivo que restaura la salud del cabello, aumenta el brillo y suavidad extrema." : "Intensive treatment restoring hair health, softness, and brilliant mirror shine.",
      image: IMAGES.botox,
    },
    {
      id: 7,
      categoryLabel: lang === "es" ? "Terapias Capilares" : "Hair Therapies",
      title: lang === "es" ? "Tratamiento de Aminoácidos ($130 - $160)" : "Amino Acids Treatment ($130 - $160)",
      price: "$130 - $160",
      duration: "3 h",
      desc: lang === "es" ? "Nutrición intensiva que restaura y aporta brillo al cabello eliminando el frizz hasta por 3 meses." : "Intensive treatment restoring shine and eliminating frizz for up to 3 months.",
      image: IMAGES.aminoacidos,
    },
    {
      id: 8,
      categoryLabel: lang === "es" ? "Lavado & Peinado" : "Wash & Blowout",
      title: lang === "es" ? "Lavado y secado ($50 - $80)" : "Wash & Blowout ($50 - $80)",
      price: "$50 - $80",
      duration: "1 h 30 min",
      desc: lang === "es" ? "Lavado con shampoo profesional, mascarilla exprés y un secado o peinado con ondas impecables." : "Wash with professional shampoo, express hair mask, and a blowout or wavy styling.",
      image: IMAGES.secado,
    },
    {
      id: 9,
      categoryLabel: lang === "es" ? "Reconstrucción Capilar" : "Reconstructive Treatment",
      title: lang === "es" ? "Tratamiento Reconstructor ($120)" : "Reconstructive Treatment ($120)",
      price: "$120",
      duration: "2 h",
      desc: lang === "es" ? "Tratamiento reconstructor intensivo para reparar profundamente la hebra capilar maltratada." : "Intensive reconstruction treatment to deeply repair damaged hair strands.",
      image: IMAGES.reconstructor,
    },
  ];

  return (
    <section id="full-services" className="bg-[#FDFBF7] px-6 py-24 border-b border-gray-300">
      <div className="max-w-[1350px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-[#0A0A0A] font-light mb-3">
            {cur.title}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/70 max-w-xl mx-auto">
            {cur.sub}
          </p>
        </div>

        {/* 9 Hair Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allServices.map((item) => (
            <div
              key={item.id}
              className="skeuo-card-light rounded-2xl overflow-hidden flex flex-col justify-between group p-2.5 relative"
            >
              {item.tag && (
                <span className="absolute top-5 right-5 z-10 skeuo-btn-black text-[#D4AF37] font-sans font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  {item.tag}
                </span>
              )}

              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 bg-black/85 text-white font-sans font-bold text-xs px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20">
                  {item.price}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between text-left">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#B88E1C]">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[11px] font-sans text-gray-500 font-medium">
                      ⏱ {item.duration}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#0A0A0A] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-[#0A0A0A]/75 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <a
                  href={getServiceWhatsAppUrl(item.title, item.duration, item.price, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 text-xs font-sans font-bold uppercase tracking-wider skeuo-btn-black text-white rounded-xl gap-1 mt-auto"
                >
                  <span>{cur.bookBtn}</span>
                  <span className="text-sm">➔</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ SECTION ──────────────────────────────────────────────────────────────
function FaqSection({ lang }: { lang: Lang }) {
  const cur = t[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="bg-[#FDFBF7] px-4 sm:px-6 py-24 border-b border-gray-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#B88E1C] block mb-1">
            {lang === "es" ? "PREGUNTAS Y RESPUESTAS" : "QUESTIONS & ANSWERS"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-[#0A0A0A] font-light mb-3">
            {cur.title}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#0A0A0A]/70 max-w-xl mx-auto">
            {cur.sub}
          </p>
        </div>

        <div className="space-y-4">
          {cur.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="skeuo-card-light rounded-2xl overflow-hidden transition-all duration-300 border border-gray-200/90"
              >
                <button
                  onClick={() => toggleIndex(i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-semibold text-base sm:text-lg text-[#0A0A0A] pr-2">
                    {item.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#0A0A0A] text-[#D4AF37] shrink-0 flex items-center justify-center text-xs font-bold shadow-md transition-transform duration-300" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#0A0A0A]/80 leading-relaxed font-sans border-t border-gray-100 pt-4 animate-fade-in">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ lang }: { lang: Lang }) {
  const cur = t[lang].footer;
  const hours = t[lang].hours;

  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-12 px-6 lg:px-12 border-t border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-1">
            <span className="block font-serif text-xl tracking-widest font-normal uppercase text-white">
              SINDY MARTINEZ
            </span>
            <span className="mt-0.5 block font-sans text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase">
              BEAUTY STUDIO
            </span>
            <p className="font-sans text-xs text-white/60 leading-relaxed mt-4">
              {cur.about}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              {cur.navTitle}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-white/70">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">{t[lang].nav.home}</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">{t[lang].nav.about}</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">{t[lang].nav.services}</a></li>
              <li><a href="#reviews" className="hover:text-[#D4AF37] transition-colors">{t[lang].nav.reviews}</a></li>
              <li><a href="#faq" className="hover:text-[#D4AF37] transition-colors">{t[lang].nav.faq}</a></li>
              <li><a href="#policies" className="hover:text-[#D4AF37] transition-colors">{t[lang].nav.policies}</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">{t[lang].nav.contact}</a></li>
            </ul>
          </div>

          {/* Col 3: Location & Hours */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              {hours.title}
            </h4>
            <div className="space-y-2 font-sans text-xs text-white/80">
              <p className="font-semibold text-white">1425 W Pioneer Dr, Irving, TX 75061</p>
              <p className="text-[#D4AF37] font-semibold mb-2">+1 (469) 439-2021</p>
              <div className="pt-2 border-t border-[#D4AF37]/20 space-y-1 text-[11px]">
                <p><span className="font-semibold text-white/90">Lunes – Viernes:</span> 9:00 AM – 6:00 PM</p>
                <p><span className="font-semibold text-white/90">Sábado:</span> 9:00 AM – 4:00 PM</p>
                <p className="text-white/40"><span className="font-medium">Domingo:</span> Cerrado</p>
              </div>
            </div>
          </div>

          {/* Col 4: Logo Emblem & Social Links */}
          <div className="flex flex-col items-start md:items-center justify-center">
            <img
              src={logo}
              alt="Sindy Martinez Logo Symbol"
              className="h-16 w-auto object-contain mb-4 opacity-90"
            />
            <p className="font-sans text-[11px] text-[#D4AF37] uppercase tracking-wider mb-3">
              {cur.followUs}
            </p>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/sindym_beautystudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A0A0A] text-white flex items-center justify-center transition-colors border border-white/20 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={getWhatsAppDefaultUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A0A0A] text-white flex items-center justify-center transition-colors border border-white/20 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.156 4.229 4.316-1.134z" />
                </svg>
              </a>

              {/* Location Map */}
              <a
                href="https://maps.google.com/?q=1425+W+Pioneer+Dr,+Irving,+TX+75061"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Location Map"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A0A0A] text-white flex items-center justify-center transition-colors border border-white/20 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-4.198 0-7.6 3.402-7.6 7.6 0 5.7 7.6 16.4 7.6 16.4s7.6-10.7 7.6-16.4c0-4.198-3.402-7.6-7.6-7.6zm0 10c-1.325 0-2.4-1.075-2.4-2.4s1.075-2.4 2.4-2.4 2.4 1.075 2.4 2.4-1.075 2.4-2.4 2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/50">
          <p>© {new Date().getFullYear()}, {cur.rights}</p>
          <p>Irving, TX · Dallas–Fort Worth Area</p>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN APP COMPONENT ───────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#0A0A0A] selection:text-[#D4AF37]" style={{ background: "#FDFBF7" }}>
      <Header lang={lang} setLang={setLang} />
      <main className="flex-1">
        <Hero lang={lang} />
        <Founder lang={lang} />
        <FeaturedServices lang={lang} />
        <FullServicesShowcase lang={lang} />
        <Testimonials lang={lang} />
        <InstagramSection lang={lang} />
        <FaqSection lang={lang} />
        <PoliciesAndTerms lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
