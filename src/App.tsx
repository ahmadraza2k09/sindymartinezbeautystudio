import { useState, useEffect, useRef } from "react";
import logo from "./imports/725ba1ef-9472-4701-a137-134ea36dd236-removebg-preview.png";

const WHATSAPP_URL = "https://wa.me/14694392021";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1774897778836-3b13763e71b3?w=900&h=1100&fit=crop&auto=format",
  salonInterior: "https://images.unsplash.com/photo-1629397685944-7073f5589754?w=900&h=700&fit=crop&auto=format",
  founder: "https://images.unsplash.com/photo-1774897795948-851e87f6d638?w=700&h=900&fit=crop&auto=format",
  portfolio1: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=700&h=700&fit=crop&auto=format",
  portfolio2: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=700&h=700&fit=crop&auto=format",
  portfolio3: "https://images.unsplash.com/photo-1605980766335-d3a41c7332a1?w=700&h=700&fit=crop&auto=format",
  product1: "https://images.unsplash.com/photo-1782768323220-316b13e8c3f5?w=400&h=400&fit=crop&auto=format",
  product2: "https://images.unsplash.com/photo-1760895535234-2c39c57cf187?w=400&h=400&fit=crop&auto=format",
  product3: "https://images.unsplash.com/photo-1650529192647-ce4eb5fb3314?w=400&h=400&fit=crop&auto=format",
  product4: "https://images.unsplash.com/photo-1773565744218-d8d11de58362?w=400&h=400&fit=crop&auto=format",
  ig1: "https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=300&h=300&fit=crop&auto=format",
  ig2: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=300&h=300&fit=crop&auto=format",
  ig3: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&h=300&fit=crop&auto=format",
  ig4: "https://images.unsplash.com/photo-1638064432604-8da1fc75de09?w=300&h=300&fit=crop&auto=format",
  ig5: "https://images.unsplash.com/photo-1605980625600-88b46abafa8d?w=300&h=300&fit=crop&auto=format",
  ig6: "https://images.unsplash.com/photo-1774897795463-e6e4618a4997?w=300&h=300&fit=crop&auto=format",
};

function GoldDivider() {
  return <div className="gold-divider my-4" />;
}

function BookButton({ label = "Book Appointment", className = "" }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-7 py-3 text-sm font-sans font-semibold tracking-widest uppercase transition-all duration-300 ${className}`}
      style={{
        background: "linear-gradient(135deg, #D4AF37 0%, #E8C84A 50%, #B8963E 100%)",
        color: "#0A0A0A",
        letterSpacing: "0.12em",
      }}
    >
      {label}
    </a>
  );
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Home", "About", "Services", "Products", "Location", "Contact"];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.97)"
          : "rgba(10,10,10,0.55)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.18)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.slice(0, 3).map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-sans text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: "rgba(253,251,247,0.7)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253,251,247,0.7)")}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Center logo */}
        <div className="flex items-center justify-center">
          <img src={logo} alt="Sindy Martinez Beauty Studio" className="h-12 w-auto" />
        </div>

        {/* Right links + CTA */}
        <div className="hidden lg:flex items-center gap-7">
          {links.slice(3).map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-sans text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: "rgba(253,251,247,0.7)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253,251,247,0.7)")}
            >
              {l}
            </a>
          ))}
          <BookButton label="Book Appointment" className="text-xs px-5 py-2.5" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px transition-all duration-300"
              style={{ background: "#D4AF37" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-6 py-6 flex flex-col gap-5"
          style={{ background: "rgba(10,10,10,0.98)" }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-sans text-xs tracking-widest uppercase"
              style={{ color: "rgba(253,251,247,0.8)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <BookButton label="Book Appointment" />
        </div>
      )}
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-stretch overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Left: portrait */}
      <div className="relative w-full lg:w-1/2 min-h-[60vh] lg:min-h-screen">
        <img
          src={IMAGES.hero}
          alt="Luxury hair salon model with sleek styling"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ objectPosition: "50% 15%" }}
        />
        {/* Gradient overlay fading right into black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0) 40%, rgba(10,10,10,0.85) 80%, #0A0A0A 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #0A0A0A 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Right: copy */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full lg:w-1/2 ml-auto px-8 lg:px-16 xl:px-20 pt-24 pb-16 flex flex-col justify-center">
          {/* Script watermark SM */}
          <div
            className="font-script text-right select-none pointer-events-none absolute top-20 right-8 lg:right-12 opacity-10"
            style={{ fontSize: "clamp(8rem, 18vw, 22rem)", color: "#D4AF37", lineHeight: 1 }}
          >
            SM
          </div>

          <div className="relative z-10">
            {/* Logo image in hero */}
            <div className="mb-8">
              <img src={logo} alt="SM logo" className="h-20 w-auto opacity-90" />
            </div>

            <p
              className="font-script mb-2"
              style={{ color: "#D4AF37", fontSize: "clamp(1.2rem, 3vw, 1.8rem)" }}
            >
              Beauty & Style
            </p>

            <h1
              className="font-serif font-bold mb-4 leading-tight"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 5rem)",
                color: "#FDFBF7",
              }}
            >
              Experience
            </h1>

            <p
              className="font-sans font-light tracking-widest uppercase mb-8 text-sm"
              style={{ color: "rgba(212,175,55,0.85)", letterSpacing: "0.22em" }}
            >
              Luxury Treatments For Your Best Look
            </p>

            <div className="w-16 h-px mb-8" style={{ background: "#D4AF37" }} />

            <p className="font-sans font-light mb-10 max-w-md" style={{ color: "rgba(253,251,247,0.65)", lineHeight: 1.8, fontSize: "0.92rem" }}>
              Professional colorimetry, balayage artistry, and advanced hair restoration therapies in Irving, Texas. Where luxury meets transformation.
            </p>

            <div className="flex flex-wrap gap-4">
              <BookButton label="Schedule Appointment" />
              <a
                href="#services"
                className="inline-block px-7 py-3 text-sm font-sans font-semibold tracking-widest uppercase border transition-all duration-300"
                style={{ borderColor: "rgba(212,175,55,0.5)", color: "#FDFBF7", letterSpacing: "0.12em" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37";
                  (e.currentTarget as HTMLElement).style.color = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.5)";
                  (e.currentTarget as HTMLElement).style.color = "#FDFBF7";
                }}
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-sans text-xs tracking-widest uppercase" style={{ color: "#D4AF37", fontSize: "0.65rem" }}>
          Scroll
        </span>
        <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, #D4AF37, transparent)" }} />
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 lg:py-32" style={{ background: "#FDFBF7" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div>
            <p
              className="font-script mb-3"
              style={{ color: "#D4AF37", fontSize: "2rem" }}
            >
              Our Story
            </p>
            <h2
              className="font-serif font-bold mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0A0A0A", lineHeight: 1.2 }}
            >
              About Sindy Beauty Salon
            </h2>
            <GoldDivider />
            <div className="mt-8 space-y-5" style={{ color: "rgba(10,10,10,0.7)", lineHeight: 1.9, fontSize: "0.95rem" }}>
              <p>
                At Sindy Martinez Beauty Studio, we believe every client deserves a transformative, deeply personalized experience. Located in the heart of Irving, TX, our salon is a sanctuary for those who demand the extraordinary.
              </p>
              <p>
                Sindy Martinez — licensed cosmetologist and professional colorist — has dedicated her career to mastering the art of professional colorimetry, balayage, organic straightening, and advanced hair restoration therapies. Her precision and passion are woven into every appointment.
              </p>
              <p>
                From bespoke color journeys to intensive scalp therapies, each service is crafted to honor the unique texture, tone, and vision of every individual who sits in our chair.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="#services"
                className="inline-block px-8 py-3.5 font-sans text-sm font-semibold tracking-widest uppercase border-2 transition-all duration-300"
                style={{ borderColor: "#D4AF37", color: "#0A0A0A" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div
              className="absolute -top-4 -right-4 w-full h-full border"
              style={{ borderColor: "rgba(212,175,55,0.3)" }}
            />
            <img
              src={IMAGES.salonInterior}
              alt="Sindy Martinez Beauty Studio interior workstations"
              className="relative w-full h-[520px] object-cover"
              style={{ filter: "brightness(0.95)" }}
            />
            <div
              className="absolute bottom-6 left-6 px-5 py-4"
              style={{ background: "rgba(10,10,10,0.88)", backdropFilter: "blur(8px)" }}
            >
              <p className="font-script text-2xl" style={{ color: "#D4AF37" }}>Irving, Texas</p>
              <p className="font-sans text-xs tracking-widest uppercase mt-1" style={{ color: "rgba(253,251,247,0.6)" }}>
                Serving the Dallas–Fort Worth Area
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: "✦",
      es: "Color & Balayage",
      en: "Hair Color Artistry",
      desc: "Professional colorimetry, custom tones, balayage, highlights, and seamless blends tailored to your unique features.",
      tag: "PROFESSIONAL COLORIMETRY",
      cta: "View Options",
    },
    {
      icon: "✦",
      es: "Corte de Cabello",
      en: "Expert Cuts & Styling",
      desc: "Precision cuts and elevated styling sessions designed to frame your face and elevate your signature look.",
      tag: "FROM $40 • 1 HR",
      cta: "Book a Cut",
    },
    {
      icon: "✦",
      es: "Alisado Avanzado",
      en: "Hair Smoothing",
      desc: "Botox Capilar, Cirugía Capilar, and organic straightening treatments for silky, frizz-free hair.",
      tag: "FROM $150–$200",
      cta: "Book Smoothing",
    },
    {
      icon: "✦",
      es: "Terapias Capilares",
      en: "Hydration & Scalp Therapy",
      desc: "Ozo-Terapia, Pantanox, Aminoácidos, and Wash & Ozone treatments for deep restoration and radiant shine.",
      tag: "FROM $100–$200",
      cta: "Book Therapy",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      style={{ background: "#0A0A0A" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-script mb-3"
            style={{ color: "#D4AF37", fontSize: "2.2rem" }}
          >
            Nuestros Servicios
          </p>
          <h2
            className="font-serif font-bold"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#FDFBF7" }}
          >
            Our Specialized Treatments
          </h2>
          <GoldDivider />
          <p
            className="mt-6 font-sans max-w-xl mx-auto"
            style={{ color: "rgba(253,251,247,0.5)", fontSize: "0.9rem", lineHeight: 1.8 }}
          >
            Each treatment is designed for the discerning client who expects nothing less than excellence.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(212,175,55,0.12)" }}>
          {services.map((s, i) => (
            <div
              key={i}
              className="card-lift p-8 flex flex-col group cursor-pointer"
              style={{ background: "#0A0A0A" }}
            >
              <span
                className="text-2xl mb-6 transition-colors duration-300"
                style={{ color: "#D4AF37" }}
              >
                {s.icon}
              </span>
              <p
                className="font-script mb-1 transition-colors duration-300"
                style={{ color: "rgba(212,175,55,0.6)", fontSize: "1.3rem" }}
              >
                {s.es}
              </p>
              <h3
                className="font-serif font-semibold mb-4 leading-snug"
                style={{ fontSize: "1.1rem", color: "#FDFBF7" }}
              >
                {s.en}
              </h3>
              <span
                className="font-sans text-xs tracking-widest uppercase mb-5 inline-block"
                style={{ color: "#D4AF37", letterSpacing: "0.14em", fontSize: "0.65rem" }}
              >
                {s.tag}
              </span>
              <p
                className="font-sans mb-8 flex-1"
                style={{ color: "rgba(253,251,247,0.5)", fontSize: "0.85rem", lineHeight: 1.8 }}
              >
                {s.desc}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs tracking-widest uppercase font-semibold flex items-center gap-2 transition-colors duration-300"
                style={{ color: "#D4AF37", letterSpacing: "0.14em" }}
              >
                {s.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOUNDER SPOTLIGHT ────────────────────────────────────────────────────────
function Founder() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden" style={{ background: "#FDFBF7" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-0 items-stretch">
          {/* Image: takes 2/5 */}
          <div className="lg:col-span-2 relative min-h-[500px]">
            <img
              src={IMAGES.founder}
              alt="Sindy Martinez, Licensed Cosmetologist and Professional Colorist"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, transparent 60%, #FDFBF7 100%)",
              }}
            />
          </div>

          {/* Copy: takes 3/5 */}
          <div
            className="lg:col-span-3 flex flex-col justify-center px-10 lg:px-16 py-16"
            style={{ background: "#FDFBF7" }}
          >
            <p
              className="font-sans text-xs tracking-widest uppercase mb-4"
              style={{ color: "#D4AF37", letterSpacing: "0.2em" }}
            >
              Meet the Artist
            </p>
            <h2
              className="font-script mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#0A0A0A", lineHeight: 1 }}
            >
              Sindy Martinez
            </h2>
            <div className="w-12 h-px mb-8" style={{ background: "#D4AF37" }} />
            <div
              className="space-y-5 font-sans"
              style={{ color: "rgba(10,10,10,0.68)", lineHeight: 1.9, fontSize: "0.95rem" }}
            >
              <p>
                With over a decade of hands-on expertise, Sindy Martinez holds a full cosmetology license and has become one of the most sought-after colorists in the Dallas–Fort Worth region. Her specializations in Balayage, Hair Botox, and personalized hair repair have earned her a devoted clientele.
              </p>
              <p>
                Sindy approaches every client as a unique canvas — analyzing texture, scalp health, and lifestyle before crafting a treatment plan that delivers results that last. Her studio is where artistry and science converge.
              </p>
              <p>
                "Every strand tells a story. My mission is to help yours shine."
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <BookButton label="Book with Sindy" />
              <a
                href="https://instagram.com/sindym_beautystudio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm tracking-widest uppercase font-medium flex items-center gap-2"
                style={{ color: "#D4AF37" }}
              >
                @sindym_beautystudio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
function Reviews() {
  const reviews = [
    {
      name: "Maria G.",
      location: "Irving, TX",
      text: "Sindy completely transformed my hair! The balayage she created was exactly what I envisioned — soft, natural, and so beautifully blended. I've never felt more confident walking out of a salon.",
    },
    {
      name: "Claudia R.",
      location: "Dallas, TX",
      text: "The Hair Botox treatment gave me the silkiest, most manageable hair I've ever had. Sindy took the time to explain every step and the results lasted months. Absolutely worth every penny.",
    },
    {
      name: "Alejandra M.",
      location: "Grand Prairie, TX",
      text: "From the moment you walk in, the experience is luxury. Sindy's studio is immaculate, her technique is flawless, and the ozone therapy made my hair feel completely reborn. 100% recommend.",
    },
  ];

  const Stars = () => (
    <div className="flex gap-1 mb-5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 star" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-24 lg:py-32" style={{ background: "#F5F0E8" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-script mb-3" style={{ color: "#D4AF37", fontSize: "2rem" }}>
            Client Love
          </p>
          <h2
            className="font-serif font-bold"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#0A0A0A" }}
          >
            What Our Clients Say
          </h2>
          <GoldDivider />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="card-lift p-8"
              style={{
                background: "#FDFBF7",
                borderTop: "3px solid #D4AF37",
                boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
              }}
            >
              <Stars />
              <p
                className="font-sans mb-8 italic leading-relaxed"
                style={{ color: "rgba(10,10,10,0.7)", fontSize: "0.92rem", lineHeight: 1.85 }}
              >
                "{r.text}"
              </p>
              <div className="flex items-center gap-3 pt-5" style={{ borderTop: "1px solid rgba(212,175,55,0.2)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-sans font-semibold text-sm"
                  style={{ background: "linear-gradient(135deg, #D4AF37, #B8963E)", color: "#0A0A0A" }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm" style={{ color: "#0A0A0A" }}>{r.name}</p>
                  <p className="font-sans text-xs" style={{ color: "rgba(10,10,10,0.45)" }}>{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────
function Portfolio() {
  const tiles = [
    { src: IMAGES.portfolio1, label: "Precision Cuts & Styling", sub: "Tailored to your face shape" },
    { src: IMAGES.portfolio2, label: "Blow-Out & Finish", sub: "Silk smooth results" },
    { src: IMAGES.portfolio3, label: "Balayage & Color", sub: "Sun-kissed natural blends" },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-script mb-3" style={{ color: "#D4AF37", fontSize: "2rem" }}>
            Portfolio
          </p>
          <h2
            className="font-serif font-bold"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#FDFBF7" }}
          >
            Visual Gallery
          </h2>
          <GoldDivider />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {tiles.map((t, i) => (
            <div
              key={i}
              className="relative overflow-hidden group cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={t.src}
                alt={t.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-sans text-xs tracking-widest uppercase mb-2" style={{ color: "#D4AF37", letterSpacing: "0.18em" }}>
                  {t.sub}
                </p>
                <p className="font-serif font-semibold text-xl" style={{ color: "#FDFBF7" }}>
                  {t.label}
                </p>
              </div>
              {/* Gold corner accent */}
              <div
                className="absolute top-5 right-5 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ borderTop: "2px solid #D4AF37", borderRight: "2px solid #D4AF37" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
function Products() {
  const products = [
    { img: IMAGES.product1, name: "Aceite de Argán", sub: "Argan Oil Treatment", price: "$25" },
    { img: IMAGES.product2, name: "Mascarilla Hidratante", sub: "Hydrating Mask", price: "$30" },
    { img: IMAGES.product3, name: "Shampoo Line", sub: "Professional Cleansing", price: "$30–$35" },
    { img: IMAGES.product4, name: "Bálsamo Acondicionador", sub: "Conditioning Balm", price: "$30" },
    { img: IMAGES.product2, name: "Máscara Reparadora", sub: "Repair Treatment Mask", price: "$30" },
    { img: IMAGES.product1, name: "Termoprotector Spray", sub: "Heat Protectant Spray", price: "$30" },
  ];

  return (
    <section id="products" className="py-24 lg:py-32" style={{ background: "#FDFBF7" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-script mb-3" style={{ color: "#D4AF37", fontSize: "2rem" }}>
            Take Home the Luxury
          </p>
          <h2
            className="font-serif font-bold"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#0A0A0A" }}
          >
            Professional Hair Care Line
          </h2>
          <GoldDivider />
          <p
            className="mt-6 font-sans max-w-xl mx-auto"
            style={{ color: "rgba(10,10,10,0.55)", fontSize: "0.9rem", lineHeight: 1.8 }}
          >
            Extend your salon results with our curated selection of professional-grade at-home treatments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="card-lift group flex flex-col"
            >
              <div
                className="relative overflow-hidden mb-4"
                style={{ aspectRatio: "1/1", background: "#F0EBE1" }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(10,10,10,0.4)" }}
                >
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 font-sans text-xs font-semibold tracking-widest uppercase"
                    style={{ background: "#D4AF37", color: "#0A0A0A" }}
                  >
                    Order
                  </a>
                </div>
              </div>
              <p className="font-serif font-semibold text-sm mb-0.5" style={{ color: "#0A0A0A" }}>
                {p.name}
              </p>
              <p className="font-sans text-xs mb-2" style={{ color: "rgba(10,10,10,0.45)" }}>
                {p.sub}
              </p>
              <p className="font-sans font-semibold text-sm mt-auto" style={{ color: "#D4AF37" }}>
                {p.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT & INSTAGRAM ──────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Sindy! I'd like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred Date: ${form.date}\nNotes: ${form.notes}`
    );
    window.open(`https://wa.me/14694392021?text=${msg}`, "_blank");
  };

  const igPosts = [IMAGES.ig1, IMAGES.ig2, IMAGES.ig3, IMAGES.ig4, IMAGES.ig5, IMAGES.ig6];

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(212,175,55,0.25)",
    color: "#FDFBF7",
    padding: "12px 14px",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.88rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="py-24 lg:py-32" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-script mb-3" style={{ color: "#D4AF37", fontSize: "2rem" }}>
            Reserve Your Session
          </p>
          <h2
            className="font-serif font-bold"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#FDFBF7" }}
          >
            Contact & Booking
          </h2>
          <GoldDivider />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: form + info */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4 mb-10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: "rgba(212,175,55,0.7)" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputBase}
                  />
                </div>
                <div>
                  <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: "rgba(212,175,55,0.7)" }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(469) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={inputBase}
                  />
                </div>
              </div>
              <div>
                <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: "rgba(212,175,55,0.7)" }}>
                  Service
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  style={{ ...inputBase, appearance: "none" }}
                >
                  <option value="" style={{ background: "#111" }}>Select a service…</option>
                  <option value="Hair Color & Balayage" style={{ background: "#111" }}>Hair Color & Balayage</option>
                  <option value="Expert Cut & Styling" style={{ background: "#111" }}>Expert Cut & Styling</option>
                  <option value="Hair Smoothing / Botox Capilar" style={{ background: "#111" }}>Hair Smoothing / Botox Capilar</option>
                  <option value="Hydration & Scalp Therapy" style={{ background: "#111" }}>Hydration & Scalp Therapy</option>
                </select>
              </div>
              <div>
                <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: "rgba(212,175,55,0.7)" }}>
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  style={{ ...inputBase, colorScheme: "dark" }}
                />
              </div>
              <div>
                <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: "rgba(212,175,55,0.7)" }}>
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your hair goals…"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  style={{ ...inputBase, resize: "none" }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 font-sans font-semibold text-sm tracking-widest uppercase transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #E8C84A 50%, #B8963E 100%)",
                  color: "#0A0A0A",
                  letterSpacing: "0.15em",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.9")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              >
                ✦ Submit / Book via WhatsApp
              </button>
            </form>

            {/* Info block */}
            <div className="grid grid-cols-1 gap-5">
              {[
                { icon: "📍", label: "Location", val: "1425 W Pioneer Dr, Irving, TX 75061" },
                { icon: "📞", label: "Phone / WhatsApp", val: "+1 (469) 439-2021" },
                { icon: "🕐", label: "Hours", val: "Mon–Sat: 10:00 AM – 6:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase mb-0.5" style={{ color: "#D4AF37" }}>
                      {item.label}
                    </p>
                    <p className="font-sans text-sm" style={{ color: "rgba(253,251,247,0.7)" }}>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Instagram phone mockup */}
          <div id="location" className="flex justify-center">
            <div
              className="relative w-72"
              style={{
                background: "#1A1A1A",
                border: "8px solid #2A2A2A",
                borderRadius: "40px",
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.2)",
              }}
            >
              {/* Phone top notch */}
              <div className="h-7 flex items-center justify-center" style={{ background: "#1A1A1A" }}>
                <div className="w-20 h-3 rounded-full" style={{ background: "#0A0A0A" }} />
              </div>

              {/* Instagram-style header */}
              <div className="px-4 py-3" style={{ background: "#0A0A0A" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #D4AF37, #B8963E)",
                      padding: "2px",
                    }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src={IMAGES.hero}
                        alt="profile"
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "50% 15%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-sm" style={{ color: "#FDFBF7" }}>
                      sindym_beautystudio
                    </p>
                    <div className="flex gap-4 mt-1 text-center">
                      <div>
                        <p className="font-sans font-bold text-xs" style={{ color: "#FDFBF7" }}>248</p>
                        <p className="font-sans text-xs" style={{ color: "rgba(253,251,247,0.4)", fontSize: "0.6rem" }}>posts</p>
                      </div>
                      <div>
                        <p className="font-sans font-bold text-xs" style={{ color: "#FDFBF7" }}>4.2K</p>
                        <p className="font-sans text-xs" style={{ color: "rgba(253,251,247,0.4)", fontSize: "0.6rem" }}>followers</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://instagram.com/sindym_beautystudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-1.5 text-center font-sans text-xs font-semibold"
                  style={{ border: "1px solid rgba(253,251,247,0.3)", color: "#FDFBF7", borderRadius: "4px" }}
                >
                  Follow
                </a>
              </div>

              {/* IG grid */}
              <div className="instagram-grid grid grid-cols-3 gap-px" style={{ background: "#0A0A0A" }}>
                {igPosts.map((src, i) => (
                  <a
                    key={i}
                    href="https://instagram.com/sindym_beautystudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden"
                    style={{ aspectRatio: "1/1" }}
                  >
                    <img
                      src={src}
                      alt={`Instagram post ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </a>
                ))}
              </div>

              {/* Phone bottom bar */}
              <div className="h-6 flex items-center justify-center" style={{ background: "#0A0A0A" }}>
                <div className="w-24 h-1 rounded-full" style={{ background: "#333" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PRE-FOOTER CTA ───────────────────────────────────────────────────────────
function PreFooterCTA() {
  return (
    <section
      className="relative py-24 text-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #B8963E 0%, #D4AF37 40%, #E8C84A 60%, #B8963E 100%)",
      }}
    >
      {/* Decorative overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <p
          className="font-script mb-4"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "rgba(10,10,10,0.6)" }}
        >
          Your best look awaits
        </p>
        <h2
          className="font-serif font-bold mb-8"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0A0A0A", lineHeight: 1.2 }}
        >
          Ready for a Transformation?
        </h2>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 font-sans font-semibold text-sm tracking-widest uppercase transition-all duration-300"
          style={{
            background: "#0A0A0A",
            color: "#D4AF37",
            letterSpacing: "0.18em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#1A1A1A";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(10,10,10,0.3)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#0A0A0A";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          Book Now
        </a>
        <p
          className="mt-6 font-sans text-xs tracking-widest"
          style={{ color: "rgba(10,10,10,0.55)", letterSpacing: "0.14em" }}
        >
          IRVING, TX · MON–SAT 10AM–6PM · +1 (469) 439-2021
        </p>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo column */}
          <div className="md:col-span-1">
            <img src={logo} alt="Sindy Martinez Beauty Studio" className="h-16 w-auto mb-4 opacity-90" />
            <p
              className="font-sans text-xs leading-relaxed"
              style={{ color: "rgba(253,251,247,0.4)", lineHeight: 1.8 }}
            >
              Luxury hair artistry in Irving, Texas. Where every strand is a work of art.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="font-sans text-xs tracking-widest uppercase mb-5 font-semibold"
              style={{ color: "#D4AF37", letterSpacing: "0.18em" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Products", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="font-sans text-xs transition-colors duration-200"
                    style={{ color: "rgba(253,251,247,0.4)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D4AF37")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(253,251,247,0.4)")}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4
              className="font-sans text-xs tracking-widest uppercase mb-5 font-semibold"
              style={{ color: "#D4AF37", letterSpacing: "0.18em" }}
            >
              Hours
            </h4>
            <div className="space-y-2 font-sans text-xs" style={{ color: "rgba(253,251,247,0.45)", lineHeight: 1.7 }}>
              <p>Monday – Saturday</p>
              <p>10:00 AM – 6:00 PM</p>
              <p className="mt-3" style={{ color: "rgba(253,251,247,0.25)" }}>Sunday: Closed</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-sans text-xs tracking-widest uppercase mb-5 font-semibold"
              style={{ color: "#D4AF37", letterSpacing: "0.18em" }}
            >
              Contact
            </h4>
            <div className="space-y-3 font-sans text-xs" style={{ color: "rgba(253,251,247,0.45)", lineHeight: 1.7 }}>
              <p>1425 W Pioneer Dr<br />Irving, TX 75061</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors duration-200"
                style={{ color: "rgba(253,251,247,0.45)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D4AF37")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(253,251,247,0.45)")}
              >
                +1 (469) 439-2021
              </a>
              <a
                href="https://instagram.com/sindym_beautystudio"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors duration-200"
                style={{ color: "rgba(253,251,247,0.45)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#D4AF37")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(253,251,247,0.45)")}
              >
                @sindym_beautystudio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}
        >
          <p className="font-sans text-xs" style={{ color: "rgba(253,251,247,0.25)" }}>
            © {new Date().getFullYear()} Sindy Martinez Beauty Studio. All rights reserved.
          </p>
          <p className="font-sans text-xs" style={{ color: "rgba(253,251,247,0.25)" }}>
            Irving, TX · Dallas–Fort Worth Area
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif" }}>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Founder />
      <Reviews />
      <Portfolio />
      <Products />
      <Contact />
      <PreFooterCTA />
      <Footer />
    </div>
  );
}
