import { useState, useEffect } from "react";
import logo from "./imports/logo_modified_transparent.png";
import sindyPhoto from "./imports/sindy_photo.png";

type Lang = "es" | "en";

const WHATSAPP_PHONE = "14694392021";

function getWhatsAppDefaultUrl(lang: Lang) {
  const text =
    lang === "es"
      ? "Hola Sindy! Me gustaría agendar una cita o consultar sobre tus servicios en Sindy Martinez Beauty Studio. ¿Qué disponibilidad tienes?"
      : "Hello Sindy! I'd like to book an appointment or inquire about your services at Sindy Martinez Beauty Studio. What is your availability?";
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

function getProductWhatsAppUrl(productName: string, price: string, lang: Lang) {
  const text =
    lang === "es"
      ? `Hola Sindy! Me gustaría realizar un pedido del siguiente producto:\n\n*Producto:* ${productName}\n*Precio:* ${price}\n\n¿Me podrías indicar los pasos para completar la compra y la entrega? ¡Muchas gracias!`
      : `Hello Sindy! I would like to place an order for the following product:\n\n*Product:* ${productName}\n*Price:* ${price}\n\nCould you please let me know how to complete the purchase and delivery? Thank you very much!`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

function getServiceWhatsAppUrl(serviceTitle: string, duration: string, price: string, lang: Lang) {
  const text =
    lang === "es"
      ? `Hola Sindy! Quisiera agendar una cita para el servicio de:\n\n*Servicio:* ${serviceTitle}\n*Duración:* ${duration}\n*Precio:* ${price}\n\n¿Qué días u horarios tienes disponibles en el estudio? ¡Gracias!`
      : `Hello Sindy! I would like to book an appointment for:\n\n*Service:* ${serviceTitle}\n*Duration:* ${duration}\n*Price:* ${price}\n\nWhat days or times do you have available at the studio? Thank you!`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

function getPortfolioWhatsAppUrl(itemTitle: string, categoryLabel: string, lang: Lang) {
  const text =
    lang === "es"
      ? `Hola Sindy! Vi este look en tu galería de portfolio y me encantó:\n\n*Look:* ${itemTitle}\n*Categoría:* ${categoryLabel}\n\n¿Me podrías dar información y disponibilidad para hacerme este trabajo? ¡Gracias!`
      : `Hello Sindy! I saw this look in your portfolio gallery and loved it:\n\n*Look:* ${itemTitle}\n*Category:* ${categoryLabel}\n\nCould you give me information and availability to get this look done? Thank you!`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

const IMAGES = {
  heroHome: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&h=1000&fit=crop&auto=format",
  salonInterior: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000&h=1000&fit=crop&auto=format",
  graffiti: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=1000&fit=crop&auto=format",
  editorialCap: "https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?w=800&h=1000&fit=crop&auto=format",
  portfolio1: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&h=1000&fit=crop&auto=format",
  portfolio2: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=1000&fit=crop&auto=format",
  portfolio3: "https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?w=800&h=1000&fit=crop&auto=format",
  portfolio4: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=1000&fit=crop&auto=format",
  portfolio5: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=1000&fit=crop&auto=format",
  portfolio6: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=1000&fit=crop&auto=format",
  ctaDark: "https://images.unsplash.com/photo-1629397685944-7073f5589754?w=1600&h=800&fit=crop&auto=format",
  product1: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop&auto=format",
  product2: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&h=500&fit=crop&auto=format",
  product3: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&h=500&fit=crop&auto=format",
  product4: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop&auto=format",
  ig1: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&fit=crop&auto=format",
  ig2: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop&auto=format",
  ig3: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&h=300&fit=crop&auto=format",
  ig4: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=300&h=300&fit=crop&auto=format",
  ig5: "https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?w=300&h=300&fit=crop&auto=format",
  ig6: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop&auto=format",
};

const t = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      portfolio: "Galería",
      products: "Productos",
      contact: "Contacto",
      bookNow: "AGENDA TU CITA",
    },
    topBar: {
      hours: "Lun–Vie: 9:00 AM – 6:00 PM | Sáb: 9:00 AM – 4:00 PM",
    },
    hero: {
      title1: "Bienvenido a",
      title2: "Sindy Martinez Beauty Studio",
      subtitle: "Especialistas en balayage, colorimetría avanzada, alisados orgánicos y tratamientos de restauración profunda en Irving, Texas.",
      bookBtn: "AGENDA TU CITA",
      servicesBtn: "VER SERVICIOS",
      yearsExp: "10+ Años",
      yearsExpSub: "De Experiencia",
      custom: "100%",
      customSub: "Personalizado",
      rating: "5.0 ★★★★★",
      ratingSub: "Clientes Felices",
    },
    editorial: {
      sub: "Experiencia Exclusiva,",
      titleLine1: "BALAYAGE,",
      titleLine2: "BOTOX ORGÁNICO",
      titleLine3: "Y RESTAURACIÓN CAPILAR",
      desc: "Cada cita está diseñada para restaurar, fortalecer y embellecer la textura única de tu cabello con resultados duraderos.",
    },
    services: {
      subtitle: "Nuestros Servicios",
      title: "Menú de Servicios & Precios",
      desc: "Procedimientos realizados con productos de alta gama sin formol y técnicas avanzadas de colorimetría.",
      bookBtn: "Reservar Cita",
    },
    founder: {
      sub: "Mi nombre es,",
      title: "Sindy Martinez",
      tag: "Fundadora & Cosmetóloga Licenciada",
      p1: "Mi pasión es transformar la salud y la belleza del cabello a través de técnicas especializadas, productos de alta calidad y una atención completamente personalizada.",
      p2: "Creo que cada persona merece sentirse segura, hermosa y bien cuidada, por eso me esfuerzo en ofrecer una experiencia exclusiva donde el bienestar y la excelencia están presentes en cada detalle.",
      p3: "Mi compromiso es ayudarte a descubrir la mejor versión de tu cabello con resultados saludables, naturales y duraderos.",
      waBtn: "Hablar por WhatsApp",
      igBtn: "Ver Instagram",
    },
    portfolio: {
      title: "Galería de Trabajos",
      sub: "Resultados Reales en Nuestro Estudio",
      all: "Todos",
      balayage: "Balayage & Color",
      smoothing: "Alisados & Botox",
      cuts: "Cortes & Peinados",
      therapy: "Terapias Capilares",
      inquireBtn: "Consultar Este Look",
    },
    testimonials: {
      sub: "Opiniones de Clientes",
      title: "Reseñas & Experiencias Reales",
    },
    cta: {
      title: "¿Nos vemos pronto?",
      desc: "Agenda tu cita hoy mismo y dale a tu cabello el cuidado profesional que merece.",
      bookBtn: "Reservar Cita Ahora",
    },
    products: {
      sub: "Cuida Tu Cabello En Casa",
      title: "Línea de Productos Profesionales",
      orderBtn: "Ordenar por WhatsApp",
    },
    contact: {
      sub: "Hablemos",
      title: "Contacto & Citas",
      desc: "Descubre el tratamiento perfecto para un cabello saludable y radiante.",
      name: "Nombre Completo",
      email: "Email",
      phone: "Teléfono",
      service: "Servicio de Interés",
      message: "Mensaje / Consulta",
      submitBtn: "ENVIAR MENSAJE VIA WHATSAPP",
    },
    footer: {
      about: "Sindy Martinez Beauty Studio en Irving, TX. Especialistas en balayage, colorimetría y tratamientos de restauración capilar.",
      navTitle: "Navegación",
      specialtiesTitle: "Especialidades",
      locationTitle: "Ubicación & Horarios",
      mondayFri: "Lunes a Viernes: 9:00 AM – 6:00 PM",
      saturday: "Sábado: 9:00 AM – 4:00 PM",
      sunday: "Domingo: Cerrado",
      followUs: "Síguenos",
      rights: "Sindy Martinez Beauty Studio. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      portfolio: "Gallery",
      products: "Shop",
      contact: "Contact",
      bookNow: "BOOK APPOINTMENT",
    },
    topBar: {
      hours: "Mon–Fri: 9:00 AM – 6:00 PM | Sat: 9:00 AM – 4:00 PM",
    },
    hero: {
      title1: "Meet me at",
      title2: "Sindy Martinez Beauty Studio",
      subtitle: "Specialists in balayage, advanced colorimetry, organic smoothing, and deep hair restoration therapies in Irving, Texas.",
      bookBtn: "BOOK APPOINTMENT",
      servicesBtn: "VIEW SERVICES",
      yearsExp: "10+ Years",
      yearsExpSub: "Of Experience",
      custom: "100%",
      customSub: "Personalized",
      rating: "5.0 ★★★★★",
      ratingSub: "Happy Clients",
    },
    editorial: {
      sub: "Exclusive Experience,",
      titleLine1: "BALAYAGE,",
      titleLine2: "ORGANIC BOTOX",
      titleLine3: "& HAIR RESTORATION",
      desc: "Every appointment is tailored to restore, strengthen, and elevate your signature look with long-lasting results.",
    },
    services: {
      subtitle: "Our Services",
      title: "Services Menu & Pricing",
      desc: "Procedures performed with formaldehyde-free premium products and advanced colorimetry techniques.",
      bookBtn: "Book Appointment",
    },
    founder: {
      sub: "My name is,",
      title: "Sindy Martinez",
      tag: "Founder & Licensed Cosmetologist",
      p1: "My passion is transforming the health and beauty of hair through specialized techniques, high quality products, and completely personalized attention.",
      p2: "I believe everyone deserves to feel confident, beautiful, and cared for, which is why I strive to offer an exclusive experience where well-being and excellence are present in every detail.",
      p3: "My commitment is to help you discover the best version of your hair with healthy, natural, and long-lasting results.",
      waBtn: "Chat on WhatsApp",
      igBtn: "View Instagram",
    },
    portfolio: {
      title: "Work Gallery",
      sub: "Real Results at Our Studio",
      all: "All",
      balayage: "Balayage & Color",
      smoothing: "Smoothing & Botox",
      cuts: "Cuts & Styling",
      therapy: "Hair Therapies",
      inquireBtn: "Inquire This Look",
    },
    testimonials: {
      sub: "Client Reviews",
      title: "Real Experiences & Reviews",
    },
    cta: {
      title: "See You Soon",
      desc: "Book your appointment today and give your hair the professional care it deserves.",
      bookBtn: "Book Appointment Now",
    },
    products: {
      sub: "Care For Your Hair At Home",
      title: "Professional Hair Care Line",
      orderBtn: "Order via WhatsApp",
    },
    contact: {
      sub: "Let's Talk",
      title: "Contact & Appointments",
      desc: "Discover the perfect treatment for healthy, radiant hair.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      service: "Service of Interest",
      message: "Message / Query",
      submitBtn: "SEND WHATSAPP MESSAGE",
    },
    footer: {
      about: "Sindy Martinez Beauty Studio in Irving, TX. Specialists in balayage, colorimetry, and professional hair restoration therapies.",
      navTitle: "Navigation",
      specialtiesTitle: "Specialties",
      locationTitle: "Location & Hours",
      mondayFri: "Monday – Friday: 9:00 AM – 6:00 PM",
      saturday: "Saturday: 9:00 AM – 4:00 PM",
      sunday: "Sunday: Closed",
      followUs: "Follow Us",
      rights: "Sindy Martinez Beauty Studio. All rights reserved.",
    },
  },
};

// ─── EXACT REAL SALON SERVICES MENU LIST ──────────────────────────────────────
const SERVICES_MENU = {
  es: [
    {
      title: "Corte de cabello",
      duration: "40 min",
      price: "$30",
      desc: "Corte de cabello profesional adaptado a la forma de tu rostro y tu estilo único.",
    },
    {
      title: "Color",
      duration: "2 h 30 min",
      price: "$160+",
      desc: "Servicio de coloración profesional para el cabello. Ofrecemos una amplia gama de tonos y técnicas para satisfacer tus necesidades de color personalizado. ¡Reserva tu cita hoy!",
    },
    {
      title: "Balayage",
      duration: "7 h",
      price: "$380+",
      desc: "Balayage es un servicio de coloración de cabello que crea un efecto degradado y natural. Ideal para iluminar y dar dimensión al cabello.",
      tag: "POPULAR",
    },
    {
      title: "Reflejos",
      duration: "7 h",
      price: "$380+",
      desc: "Reflejos ofrece servicios de peluquería y belleza en un ambiente relajante y acogedor. Nuestros profesionales expertos te ayudarán a resaltar tu belleza natural.",
    },
    {
      title: "Alisado Orgánico",
      duration: "5 h 30 min",
      price: "$240+",
      desc: "Tratamiento de keratina para un cabello suave, brillante y sin frizz. Restaura y fortalece el cabello, dejándolo más manejable y saludable. ¡Reserva tu cita ahora!",
      tag: "TRATAMIENTO ESTRELLA",
    },
    {
      title: "Botox Capilar",
      duration: "2 h",
      price: "$100 - $150",
      desc: "Botox Capilar es un tratamiento intensivo que restaura la salud del cabello, aumenta el brillo y suavidad, y reduce el frizz. Resultados inmediatos y duraderos.",
    },
    {
      title: "Aminoácidos",
      duration: "3 h",
      price: "$130 - $160",
      desc: "Tratamiento intensivo para restaurar y darle brillo al cabello eliminando el frizz hasta por 3 meses.",
    },
    {
      title: "Lavado y secado",
      duration: "1 h 30 min",
      price: "$50 - $80",
      desc: "Lavado con shampoo profesional, mascarilla exprés y un secado o peinado con ondas impecables.",
    },
    {
      title: "Tratamiento Reconstructor",
      duration: "2 h",
      price: "$120",
      desc: "Tratamiento reconstructor intensivo para reparar profundamente la hebra capilar maltratada.",
    },
    {
      title: "Laminado y Depilación de Ceja con Tinte",
      duration: "45 min",
      price: "Consulta WhatsApp",
      desc: "Cejas perfectas, definidas y con un efecto natural. El laminado de cejas ayuda a alinear, dar forma y crear una apariencia más llena por semanas.",
    },
  ],
  en: [
    {
      title: "Haircut",
      duration: "40 min",
      price: "$30",
      desc: "Professional haircut tailored to frame your face and suit your unique style.",
    },
    {
      title: "Hair Color",
      duration: "2 h 30 min",
      price: "$160+",
      desc: "Professional hair coloring service. We offer a wide range of shades and custom techniques to meet your color goals.",
    },
    {
      title: "Balayage",
      duration: "7 h",
      price: "$380+",
      desc: "Balayage hair coloring service that creates a natural gradient effect. Ideal to brighten and add dimension to hair.",
      tag: "POPULAR",
    },
    {
      title: "Highlights (Reflejos)",
      duration: "7 h",
      price: "$380+",
      desc: "Expert highlighting services in a relaxing environment. Our professional stylists help highlight your natural beauty.",
    },
    {
      title: "Organic Straightening (Alisado)",
      duration: "5 h 30 min",
      price: "$240+",
      desc: "Keratin smoothing treatment for soft, shiny, frizz-free hair. Restores and strengthens the hair fiber.",
      tag: "STAR TREATMENT",
    },
    {
      title: "Hair Botox",
      duration: "2 h",
      price: "$100 - $150",
      desc: "Intensive treatment that restores hair health, increases shine and softness, and reduces frizz. Immediate results.",
    },
    {
      title: "Amino Acids Treatment",
      duration: "3 h",
      price: "$130 - $160",
      desc: "Intensive treatment to restore and give shine to hair while eliminating frizz for up to 3 months.",
    },
    {
      title: "Wash & Blowout (Secado)",
      duration: "1 h 30 min",
      price: "$50 - $80",
      desc: "Wash with professional shampoo, express hair mask, and a flawless blowout or wavy styling.",
    },
    {
      title: "Reconstructive Treatment",
      duration: "2 h",
      price: "$120",
      desc: "Intensive reconstruction treatment to deeply repair damaged hair strands.",
    },
    {
      title: "Eyebrow Lamination, Shaping & Tint",
      duration: "45 min",
      price: "Inquire WhatsApp",
      desc: "Perfect, defined, natural-looking brows. Lamination helps align, shape, and create a fuller appearance for weeks.",
    },
  ],
};

// ─── MINIMALIST HEADER & NAVBAR ───────────────────────────────────────────────
function Header({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
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
    { label: cur.portfolio, href: "#portfolio" },
    { label: cur.products, href: "#products" },
    { label: cur.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <nav
        className="w-full transition-all duration-300 border-b border-[#D4AF37]/25"
        style={{
          background: scrolled ? "rgba(10, 10, 10, 0.98)" : "rgba(10, 10, 10, 0.94)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="mx-auto flex h-24 md:h-28 max-w-[1400px] items-center justify-between px-6 relative">
          
          {/* MOBILE LEFT PURE WHITE TEXT LOGO (PROMINENT HD SIZE) */}
          <div className="flex items-center gap-3 lg:hidden z-20">
            <a href="#home" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Sindy Martinez Beauty Studio Logo"
                className="h-14 sm:h-16 w-auto object-contain filter brightness-0 invert py-1"
              />
            </a>
          </div>

          {/* Desktop Left Navigation Links */}
          <div className="hidden lg:flex items-center gap-9 z-10">
            {leftLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-sans text-xs tracking-wider uppercase font-medium text-[#FDFBF7]/85 hover:text-[#D4AF37] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* DESKTOP CENTER PURE WHITE TEXT LOGO (PROMINENT HD SIZE) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
            <a href="#home" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="Sindy Martinez Beauty Studio Logo"
                className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-0 invert py-1"
              />
            </a>
          </div>

          {/* Right Navigation Links + Language Toggle + Pill CTA */}
          <div className="hidden lg:flex items-center gap-8 z-10">
            {rightLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-sans text-xs tracking-wider uppercase font-medium text-[#FDFBF7]/85 hover:text-[#D4AF37] transition-colors"
              >
                {l.label}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="inline-flex items-center bg-white/10 rounded-full px-2.5 py-0.5 border border-[#D4AF37]/40 cursor-pointer">
              <button
                onClick={() => setLang("es")}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  lang === "es" ? "bg-[#D4AF37] text-[#0A0A0A]" : "text-white/70 hover:text-white"
                }`}
              >
                ES
              </button>
              <span className="text-white/40 mx-1">|</span>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  lang === "en" ? "bg-[#D4AF37] text-[#0A0A0A]" : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={getWhatsAppDefaultUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-7 py-3 text-xs font-semibold tracking-wide uppercase transition-all bg-[#D4AF37] text-[#0A0A0A] hover:bg-white hover:text-[#0A0A0A] shadow-sm"
            >
              {cur.bookNow}
            </a>
          </div>

          {/* Mobile Hamburger & Mobile Language Switcher */}
          <div className="lg:hidden ml-auto z-10 flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="text-xs font-bold px-3 py-1 bg-[#D4AF37] text-[#0A0A0A] rounded-full"
            >
              {lang.toUpperCase()}
            </button>
            <button
              className="text-[#D4AF37] p-2 focus:outline-none"
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

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="lg:hidden px-6 py-6 border-t border-white/10 flex flex-col gap-4 bg-[#0A0A0A]">
            {[...leftLinks, ...rightLinks].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-sans text-xs tracking-widest uppercase text-[#FDFBF7]/80 hover:text-[#D4AF37] py-1 border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={getWhatsAppDefaultUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center rounded-full py-3.5 font-sans text-xs font-semibold tracking-widest uppercase bg-[#D4AF37] text-[#0A0A0A]"
            >
              {cur.bookNow}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
function Hero({ lang }: { lang: Lang }) {
  const cur = t[lang].hero;

  return (
    <section id="home" className="relative">
      <img
        src={IMAGES.heroHome}
        alt="Luxury hair salon model"
        width="1600"
        height="1008"
        className="h-[calc(100vh-5rem)] min-h-[520px] w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/40" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-3xl text-center text-[#FDFBF7]">
          <p className="font-sans text-xs sm:text-sm tracking-[0.25em] text-[#FDFBF7]/85 uppercase font-medium mb-3">
            {cur.title1}
          </p>

          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-[#D4AF37] font-normal leading-none drop-shadow-md mb-2">
            Sindy Martinez
          </h1>

          <p className="font-serif tracking-[0.35em] text-[#FDFBF7] uppercase font-bold text-lg sm:text-2xl md:text-3xl border-y border-[#D4AF37]/30 py-2 px-6 inline-block my-2">
            BEAUTY STUDIO
          </p>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed opacity-90 font-sans">
            {cur.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4 font-sans">
            <a
              href={getWhatsAppDefaultUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[9.5rem] items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-wider uppercase font-semibold transition-all bg-[#D4AF37] text-[#0A0A0A] hover:bg-white hover:text-[#0A0A0A] shadow-md"
            >
              {cur.bookBtn}
            </a>
            <a
              href="#services"
              className="inline-flex min-w-[9.5rem] items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-wider uppercase font-semibold transition-all border border-white text-white hover:bg-white/10"
            >
              {cur.servicesBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── EDITORIAL SPLIT BANNER SECTION ───────────────────────────────────────────
function EditorialBanner({ lang }: { lang: Lang }) {
  const cur = t[lang].editorial;

  return (
    <section className="grid md:grid-cols-2">
      <div className="flex flex-col justify-center bg-[#0A0A0A] px-8 py-16 text-[#FDFBF7] md:px-14">
        <p className="script-title text-3xl md:text-4xl text-[#FDFBF7]/90">
          {cur.sub}
        </p>
        <h2 className="deco-title mt-2 text-3xl uppercase leading-[1.35] tracking-[0.08em] text-[#D4AF37] md:text-4xl">
          {cur.titleLine1}<br />
          {cur.titleLine2}<br />
          {cur.titleLine3}
        </h2>
        <p className="mt-8 max-w-md text-sm leading-relaxed opacity-90 font-sans">
          {cur.desc}
        </p>
      </div>

      <div className="grid grid-cols-2 p-4 bg-[#0A0A0A] gap-4">
        <img
          src={IMAGES.graffiti}
          alt="Luxury salon work 1"
          width="800"
          height="1000"
          loading="lazy"
          className="h-full w-full object-cover min-h-[320px] rounded-2xl"
        />
        <img
          src={IMAGES.editorialCap}
          alt="Luxury salon work 2"
          width="1008"
          height="1008"
          loading="lazy"
          className="h-full w-full object-cover min-h-[320px] rounded-2xl"
        />
      </div>
    </section>
  );
}

// ─── MINIMALIST SERVICES SECTION (WITH ALL 10 EXACT REAL SALON SERVICES) ─────
function Services({ lang }: { lang: Lang }) {
  const cur = t[lang].services;
  const list = SERVICES_MENU[lang];

  return (
    <section id="services" className="bg-[#FDFBF7] px-6 py-20">
      <div className="text-center mb-16">
        <p className="font-script text-[#D4AF37] text-3xl md:text-4xl mb-1">
          {cur.subtitle}
        </p>
        <h2 className="deco-title text-center text-3xl md:text-4xl uppercase tracking-[0.14em] text-[#0A0A0A]">
          {cur.title}
        </h2>
        <p className="font-sans text-xs md:text-sm text-[#0A0A0A]/60 max-w-lg mx-auto mt-3">
          {cur.desc}
        </p>
      </div>

      <div className="mx-auto max-w-[1300px] grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {list.map((s, i) => (
          <article
            key={i}
            className="border border-[#D4AF37]/25 bg-white p-7 text-left transition-all duration-300 hover:border-[#D4AF37] shadow-sm hover:shadow-md rounded-2xl flex flex-col justify-between relative group"
          >
            {s.tag && (
              <span className="absolute -top-3 right-6 bg-[#D4AF37] text-[#0A0A0A] font-sans font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                {s.tag}
              </span>
            )}
            <div>
              <div className="flex items-center justify-between gap-4 mb-3 border-b border-gray-100 pb-3">
                <h3 className="font-serif font-bold text-lg md:text-xl text-[#0A0A0A] leading-snug">
                  {s.title}
                </h3>
                <span className="font-sans font-bold text-sm text-[#D4AF37] bg-[#0A0A0A] px-3 py-1 rounded-full whitespace-nowrap">
                  {s.price}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-sans font-medium mb-3">
                <span className="text-[#D4AF37]">⏱</span>
                <span>{s.duration}</span>
              </div>

              <p className="font-sans text-xs leading-relaxed text-[#0A0A0A]/75 mb-6">
                {s.desc}
              </p>
            </div>

            <a
              href={getServiceWhatsAppUrl(s.title, s.duration, s.price, lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 rounded-full text-xs font-sans font-bold tracking-wider uppercase bg-[#0A0A0A] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all shadow-sm mt-auto"
            >
              {cur.bookBtn} <span className="ml-1 text-sm">➔</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── MEET THE FOUNDER SECTION (SINDY MARTINEZ) ───────────────────────────────
function Founder({ lang }: { lang: Lang }) {
  const cur = t[lang].founder;

  return (
    <section id="about" className="bg-[#FDFBF7] px-6 py-20 border-t border-gray-200">
      <div className="mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Sindy Photo */}
        <div className="relative">
          <img
            src={sindyPhoto}
            alt="Sindy Martinez, Licensed Cosmetologist"
            className="w-full h-[520px] object-cover object-top border border-gray-200 shadow-md rounded-2xl"
          />
          <div className="absolute bottom-6 right-6 bg-white p-4 shadow-xl border border-gray-200 rounded-2xl max-w-[220px]">
            <p className="deco-title text-sm uppercase tracking-wider text-[#0A0A0A]">
              Sindy Martinez
            </p>
            <p className="font-sans text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">
              {cur.tag}
            </p>
          </div>
        </div>

        {/* Right Column: Bio */}
        <div className="flex flex-col justify-center">
          <p className="script-title text-3xl md:text-4xl text-[#D4AF37]">
            {cur.sub}
          </p>
          <h2 className="deco-title text-4xl md:text-5xl uppercase tracking-wider text-[#0A0A0A] mt-1 mb-6">
            {cur.title}
          </h2>

          <div className="space-y-4 text-sm text-[#0A0A0A]/80 leading-relaxed font-sans">
            <p>{cur.p1}</p>
            <p>{cur.p2}</p>
            <p>{cur.p3}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 font-sans">
            <a
              href={getWhatsAppDefaultUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-wider uppercase font-semibold transition-all bg-[#0A0A0A] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
            >
              {cur.waBtn}
            </a>
            <a
              href="https://instagram.com/sindym_beautystudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-wider uppercase font-semibold transition-all border border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#D4AF37]"
            >
              {cur.igBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── INTERACTIVE PORTFOLIO GALLERY (EXACT SALON WORK MATCH) ───────────────────
function Portfolio({ lang }: { lang: Lang }) {
  const cur = t[lang].portfolio;
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: cur.all },
    { id: "balayage", label: cur.balayage },
    { id: "smoothing", label: cur.smoothing },
    { id: "cuts", label: cur.cuts },
    { id: "therapy", label: cur.therapy },
    { id: "brows", label: lang === "es" ? "Cejas & Depilación" : "Brows & Shaping" },
  ];

  const items = [
    {
      id: 1,
      category: "balayage",
      categoryLabel: cur.balayage,
      title: lang === "es" ? "Balayage Dorado & Miel ($380+)" : "Golden Honey Balayage ($380+)",
      desc: lang === "es" ? "Degradado suave en tonos miel con máxima protección y dimensión." : "Soft honey balayage gradient with maximum protection and dimension.",
      image: IMAGES.portfolio1,
      duration: "7 h",
    },
    {
      id: 2,
      category: "smoothing",
      categoryLabel: cur.smoothing,
      title: lang === "es" ? "Alisado Orgánico Termo-Protector ($240+)" : "Organic Straightening ($240+)",
      desc: lang === "es" ? "Alisado de keratina orgánica para un cabello suave, brillante y 100% sin frizz." : "Organic keratin treatment for silky, glossy, 100% frizz-free hair.",
      image: IMAGES.portfolio6,
      duration: "5 h 30 min",
    },
    {
      id: 3,
      category: "balayage",
      categoryLabel: cur.balayage,
      title: lang === "es" ? "Reflejos & Babylights ($380+)" : "Reflejos & Contour Babylights ($380+)",
      desc: lang === "es" ? "Iluminación facial en tonos fríos y cálidos para aportar luz natural." : "Facial contouring and fine babylights for natural brightness.",
      image: IMAGES.portfolio2,
      duration: "7 h",
    },
    {
      id: 4,
      category: "cuts",
      categoryLabel: cur.cuts,
      title: lang === "es" ? "Corte de Cabello & Blowout ($30)" : "Haircut & Blowout ($30)",
      desc: lang === "es" ? "Corte de precisión y peinado con secado o ondas según tu estilo." : "Precision haircut and styling blowout tailored to your facial structure.",
      image: IMAGES.portfolio4,
      duration: "40 min",
    },
    {
      id: 5,
      category: "smoothing",
      categoryLabel: cur.smoothing,
      title: lang === "es" ? "Botox Capilar Restaurador ($100-$150)" : "Restorative Hair Botox ($100-$150)",
      desc: lang === "es" ? "Tratamiento intensivo que restaura la salud del cabello y aporta brillo espejo." : "Intensive treatment restoring hair vitality, softness, and mirror shine.",
      image: IMAGES.portfolio3,
      duration: "2 h",
    },
    {
      id: 6,
      category: "therapy",
      categoryLabel: cur.therapy,
      title: lang === "es" ? "Tratamiento Reconstructor / Ozo-Terapia ($120)" : "Reconstructive / Ozone Therapy ($120)",
      desc: lang === "es" ? "Desintoxicación del cuero cabelludo y reconstrucción profunda de la hebra." : "Scalp detox and deep reconstruction of damaged hair fiber.",
      image: IMAGES.portfolio5,
      duration: "2 h",
    },
    {
      id: 7,
      category: "smoothing",
      categoryLabel: cur.smoothing,
      title: lang === "es" ? "Tratamiento de Aminoácidos ($130-$160)" : "Amino Acids Treatment ($130-$160)",
      desc: lang === "es" ? "Nutrición intensiva que elimina el frizz hasta por 3 meses." : "Intensive nutrition eliminating frizz for up to 3 months.",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&h=1000&fit=crop&auto=format",
      duration: "3 h",
    },
    {
      id: 8,
      category: "brows",
      categoryLabel: lang === "es" ? "Cejas & Depilación" : "Brows & Shaping",
      title: lang === "es" ? "Laminado y Depilación de Ceja con Tinte" : "Eyebrow Lamination & Tint",
      desc: lang === "es" ? "Cejas impecables, alineadas y definidas con un efecto natural y duradero." : "Impeccable, aligned, defined brows with a natural, long-lasting finish.",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&h=1000&fit=crop&auto=format",
      duration: "45 min",
    },
  ];

  const filteredItems =
    activeTab === "all" ? items : items.filter((it) => it.category === activeTab);

  return (
    <section id="portfolio" className="bg-[#FDFBF7] px-6 py-20 border-t border-gray-200">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="deco-title text-center text-3xl md:text-4xl uppercase tracking-[0.14em] text-[#D4AF37] mb-3">
          {cur.title}
        </h2>
        <p className="script-title text-center text-2xl text-[#0A0A0A] mb-10">
          {cur.sub}
        </p>

        {/* Filter Tabs (Responsive Mobile Scroll & Alignment Fix) */}
        <div className="flex overflow-x-auto sm:flex-wrap justify-start sm:justify-center gap-2.5 pb-4 sm:pb-0 mb-10 font-sans no-scrollbar scroll-smooth px-1">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-4 py-2 sm:px-6 sm:py-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-full border whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === c.id
                  ? "bg-[#0A0A0A] text-[#D4AF37] border-[#0A0A0A] shadow-md scale-[1.02]"
                  : "bg-white text-[#0A0A0A]/80 border-gray-300 hover:border-[#D4AF37] hover:text-[#0A0A0A]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{
                    background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%)",
                  }}
                >
                  <span className="px-3 py-1 bg-[#D4AF37] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {item.categoryLabel} • {item.duration}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between text-center">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#0A0A0A] mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#0A0A0A]/70 leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                <a
                  href={getPortfolioWhatsAppUrl(item.title, item.categoryLabel, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full px-5 py-2.5 text-[10px] font-sans font-bold uppercase tracking-wider bg-[#0A0A0A] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors mt-auto"
                >
                  {cur.inquireBtn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── INTERACTIVE TESTIMONIALS SECTION ─────────────────────────────────────────
function Testimonials({ lang }: { lang: Lang }) {
  const cur = t[lang].testimonials;

  const testimonials = [
    {
      quote: "Shaylynne really brought what I had in my head to reality! I had hair below my butt that was boring and bland. She truly made cutting off 12 inches of hair feel better, and the reception was so warm throughout.",
      author: "Cheyanne Fransen",
    },
    {
      quote: "Excelente experiencia en Sindy Martinez Beauty Studio. Desde que llegué me hicieron sentir súper cómoda. El resultado me encantó, mi cabello quedó hermoso, suave y con un brillo increíble.",
      author: "Emma Pirela",
    },
    {
      quote: "La mejor experiencia y cuidado para mi cabello. Atención, profesionalismo, calidad de servicios y productos 10/10. El cariño con el que te reciben siempre vale oro.",
      author: "Gabriela González",
    },
    {
      quote: "Soy clienta desde hace más de 3 años y ¡estoy encantada! Siempre me hago el alisado y el corte aquí, y el resultado siempre es impecable.",
      author: "Emilia Allegro da Silva",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="bg-[#F5F0E8] px-6 py-20">
      <div className="mx-auto max-w-3xl bg-[#FDFBF7] px-8 py-14 text-center border border-gray-200 rounded-3xl shadow-sm relative">
        <span className="deco-title text-3xl text-[#D4AF37]">”</span>
        <h2 className="script-title mt-1 text-3xl md:text-4xl text-[#0A0A0A]">
          {cur.title}
        </h2>
        <div className="mt-6 min-h-24">
          <p className="text-xs md:text-sm italic leading-relaxed text-[#0A0A0A]/75 font-sans">
            "{testimonials[activeIdx].quote}"
          </p>
          <p className="mt-4 text-xs font-sans font-medium tracking-wide text-[#0A0A0A]">
            — {testimonials[activeIdx].author}
          </p>
        </div>

        {/* Indicators */}
        <div className="mt-6 flex justify-center items-center gap-3">
          <button
            onClick={() =>
              setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)
            }
            className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs text-[#0A0A0A] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIdx === idx ? "w-6 bg-[#D4AF37]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveIdx((prev) => (prev + 1) % testimonials.length)}
            className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center text-xs text-[#0A0A0A] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── "SEE YOU SOON" CTA SECTION ───────────────────────────────────────────────
function CTASection({ lang }: { lang: Lang }) {
  const cur = t[lang].cta;

  return (
    <section className="relative">
      <img
        src={IMAGES.ctaDark}
        alt="Salon ambient background"
        width="1600"
        height="800"
        loading="lazy"
        className="h-[420px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/55" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-[#FDFBF7]">
        <h2 className="script-title text-4xl md:text-5xl">{cur.title}</h2>
        <p className="mt-4 max-w-lg text-sm opacity-90 font-sans">
          {cur.desc}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 font-sans">
          <a
            href={getWhatsAppDefaultUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[9.5rem] items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-wider uppercase font-semibold transition-all bg-[#D4AF37] text-[#0A0A0A] hover:bg-white hover:text-[#0A0A0A] shadow-md"
          >
            {cur.bookBtn}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCTS SHOWCASE ────────────────────────────────────────────────────────
function Products({ lang }: { lang: Lang }) {
  const cur = t[lang].products;

  const products =
    lang === "es"
      ? [
          { img: IMAGES.product1, name: "Aceite de Argán", price: "$25" },
          { img: IMAGES.product2, name: "Mascarilla Hidratante", price: "$30" },
          { img: IMAGES.product3, name: "Shampoo Profesional", price: "$30–$35" },
          { img: IMAGES.product4, name: "Bálsamo Acondicionador", price: "$30" },
        ]
      : [
          { img: IMAGES.product1, name: "Argan Oil Serum", price: "$25" },
          { img: IMAGES.product2, name: "Hydrating Mask", price: "$30" },
          { img: IMAGES.product3, name: "Professional Shampoo", price: "$30–$35" },
          { img: IMAGES.product4, name: "Conditioning Balm", price: "$30" },
        ];

  return (
    <section id="products" className="bg-[#FDFBF7] px-6 py-20 border-t border-gray-200">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="deco-title text-center text-3xl md:text-4xl uppercase tracking-[0.14em] text-[#D4AF37] mb-12">
          {cur.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div key={i} className="bg-white border border-gray-200 p-6 text-center transition-all duration-300 hover:border-[#D4AF37] shadow-sm hover:shadow-md rounded-2xl flex flex-col justify-between group">
              <div>
                <div className="overflow-hidden rounded-xl mb-4 aspect-square">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#0A0A0A]">{p.name}</h3>
                <p className="font-sans text-xs text-[#D4AF37] font-semibold mt-1 mb-5">{p.price}</p>
              </div>
              <a
                href={getProductWhatsAppUrl(p.name, p.price, lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full py-3 px-4 text-xs font-sans font-bold uppercase tracking-wider bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#D4AF37] transition-all duration-300 shadow-sm mt-auto flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.156 4.229 4.316-1.134z" />
                </svg>
                <span>{lang === "es" ? "Ordenar por WhatsApp" : "Order via WhatsApp"}</span>
              </a>
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

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#FFFFFF",
    border: "1px solid #D1D5DB",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "0.875rem",
    color: "#0A0A0A",
    outline: "none",
  };

  return (
    <section id="contact" className="bg-[#FDFBF7] px-6 py-20 border-t border-gray-200">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="script-title text-4xl md:text-5xl text-[#D4AF37]">{cur.title}</h2>
        <p className="font-sans text-xs uppercase tracking-wider text-[#0A0A0A]/70 mt-2 mb-8">
          {cur.sub}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left font-sans">
          <div>
            <label className="text-xs uppercase tracking-wider block mb-1 text-[#0A0A0A]/70">{cur.name}</label>
            <input
              type="text"
              required
              placeholder={lang === "es" ? "Tu nombre" : "Your name"}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider block mb-1 text-[#0A0A0A]/70">{cur.email}</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider block mb-1 text-[#0A0A0A]/70">{cur.phone}</label>
              <input
                type="tel"
                placeholder="(469) 000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={inputStyle}
              />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider block mb-1 text-[#0A0A0A]/70">{cur.service}</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              style={{ ...inputStyle, appearance: "none" }}
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
              <option value="Laminado y Depilación de Ceja">Laminado y Depilación de Ceja</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider block mb-1 text-[#0A0A0A]/70">{cur.message}</label>
            <textarea
              rows={3}
              placeholder={lang === "es" ? "Escribe tu consulta o preferencia de fecha…" : "Your message or preferred date…"}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              style={{ ...inputStyle, resize: "none" }}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full py-4 font-sans font-semibold text-xs tracking-[0.18em] uppercase transition-all bg-[#0A0A0A] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
          >
            {cur.submitBtn}
          </button>
        </form>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ lang }: { lang: Lang }) {
  const cur = t[lang].footer;

  return (
    <footer className="bg-[#0A0A0A] text-[#FDFBF7] pt-16 pb-12 px-6 lg:px-12 border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-1">
            <span className="block deco-title text-xl tracking-[0.28em] font-serif uppercase text-[#D4AF37]">
              SINDY MARTINEZ
            </span>
            <span className="mt-1 block font-sans text-[0.6rem] tracking-[0.45em] text-white/70 uppercase">
              BEAUTY STUDIO
            </span>
            <p className="font-sans text-xs text-white/60 leading-relaxed mt-4">
              {cur.about}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37] mb-4">
              {cur.navTitle}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-white/70">
              <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">{t[lang].nav.home}</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">{t[lang].nav.about}</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37] transition-colors">{t[lang].nav.services}</a></li>
              <li><a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">{t[lang].nav.portfolio}</a></li>
              <li><a href="#products" className="hover:text-[#D4AF37] transition-colors">{t[lang].nav.products}</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">{t[lang].nav.contact}</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37] mb-4">
              {cur.locationTitle}
            </h4>
            <div className="space-y-2.5 font-sans text-xs text-white/70">
              <p className="font-semibold text-white">1425 W Pioneer Dr, Irving, TX 75061</p>
              <p className="text-[#D4AF37] font-semibold">+1 (469) 439-2021</p>
              <div className="pt-2 border-t border-white/10 space-y-1 text-[11px]">
                <p><span className="font-semibold text-[#D4AF37]">{lang === "es" ? "Lunes a Viernes:" : "Mon – Fri:"}</span> 9:00 AM – 6:00 PM</p>
                <p><span className="font-semibold text-[#D4AF37]">{lang === "es" ? "Sábado:" : "Saturday:"}</span> 9:00 AM – 4:00 PM</p>
                <p className="text-white/40"><span className="font-medium">{lang === "es" ? "Domingo:" : "Sunday:"}</span> {lang === "es" ? "Cerrado" : "Closed"}</p>
              </div>
            </div>
          </div>

          {/* Col 4: Logo Emblem & Social Links (FB REMOVED) */}
          <div className="flex flex-col items-start md:items-center justify-center">
            <img
              src={logo}
              alt="Sindy Martinez Logo Symbol"
              className="h-16 w-auto object-contain filter brightness-0 invert mb-4 opacity-90"
            />
            <p className="font-sans text-[11px] text-[#D4AF37] uppercase tracking-wider mb-3">
              {cur.followUs}
            </p>
            {/* SOCIAL MEDIA ICONS BAR (IG, WA, MAP ONLY) */}
            <div className="flex items-center gap-3">
              {/* Instagram Icon */}
              <a
                href="https://instagram.com/sindym_beautystudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A0A0A] text-white flex items-center justify-center transition-colors border border-white/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a
                href={getWhatsAppDefaultUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A0A0A] text-white flex items-center justify-center transition-colors border border-white/20"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.156 4.229 4.316-1.134z" />
                </svg>
              </a>

              {/* Map Location Icon */}
              <a
                href="https://maps.google.com/?q=1425+W+Pioneer+Dr,+Irving,+TX+75061"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Location Map"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A0A0A] text-white flex items-center justify-center transition-colors border border-white/20"
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

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#0A0A0A]" style={{ background: "#FDFBF7" }}>
      <Header lang={lang} setLang={setLang} />
      <main className="flex-1">
        <Hero lang={lang} />
        <EditorialBanner lang={lang} />
        <Services lang={lang} />
        <Founder lang={lang} />
        <Portfolio lang={lang} />
        <Testimonials lang={lang} />
        <CTASection lang={lang} />
        <Products lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
