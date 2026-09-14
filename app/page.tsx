"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useRef, useState } from "react";

const navigation = [
  ["Studio", "studio"],
  ["Usługi", "uslugi"],
  ["Galeria", "galeria"],
  ["Głosy", "glosy"],
  ["Kontakt", "kontakt"],
];

const services = [
  { number: "01", name: "Strzyżenie", description: "Forma dopasowana do rysów, struktury włosów i codzienności.", price: "od 180 zł", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85" },
  { number: "02", name: "Koloryzacja", description: "Wielowymiarowy kolor z uwagą na kondycję i naturalny odrost.", price: "od 320 zł", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=85" },
  { number: "03", name: "Balayage", description: "Miękkie rozświetlenie projektowane indywidualnie dla Twojej urody.", price: "od 450 zł", image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85" },
  { number: "04", name: "Pielęgnacja", description: "Rytuały odbudowujące dobrane do aktualnych potrzeb włosów.", price: "od 160 zł", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=85" },
  { number: "05", name: "Modelowanie", description: "Lekkie, trwałe wykończenie na co dzień lub wyjątkową okazję.", price: "od 120 zł", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=85" },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=90", alt: "Precyzyjna stylizacja włosów", className: "gallery-a" },
  { src: "https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=1000&q=90", alt: "Detal fryzury", className: "gallery-b" },
  { src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=90", alt: "Wnętrze nowoczesnego salonu", className: "gallery-c" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=90", alt: "Portret klientki studia", className: "gallery-d" },
];

const opinions = [
  ["ÉLITE zmieniło moje myślenie o wizycie u fryzjera. Nie wychodzę w nowej roli — wychodzę bardziej sobą.", "Marta, klientka od 2022"],
  ["Pierwszy raz ktoś poświęcił tyle uwagi temu, jak żyją moje włosy, a nie tylko temu, jak wyglądają na zdjęciu.", "Klara, Warszawa"],
  ["Spokój, precyzja, zero zbędnych obietnic. Wracam dla efektu i dla tego szczególnego rytmu miejsca.", "Aleksandra, klientka od 2020"],
];

const ease = [0.22, 1, 0.36, 1] as const;

function SplitLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="line-mask block">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.15, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 1, ease }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="#poczatek" className="logo" aria-label="ÉLITE — strona główna">ÉLITE<sup>®</sup></a>
      <nav className="desktop-nav" aria-label="Główna nawigacja">
        {navigation.map(([label, href]) => <a href={`#${href}`} key={href}>{label}</a>)}
      </nav>
      <a className="header-book" href="#kontakt">Rezerwacja <ArrowUpRight size={15} /></a>
      <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Otwórz menu"><Menu /></button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: .7, ease }}>
            <div className="mobile-menu-top"><span className="logo">ÉLITE<sup>®</sup></span><button onClick={() => setMenuOpen(false)} aria-label="Zamknij menu"><X /></button></div>
            <nav>{navigation.map(([label, href], index) => <motion.a initial={{ y: 35, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .15 + index * .06 }} href={`#${href}`} onClick={() => setMenuOpen(false)} key={href}><small>0{index + 1}</small>{label}</motion.a>)}</nav>
            <a className="mobile-contact" href="tel:+48500600700">+48 500 600 700</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="poczatek" className="hero">
        <div className="hero-media">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1800&q=85"
            aria-label="Film prezentujący atmosferę ÉLITE Beauty Studio"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
        </div>

        <div className="hero-type">
          <motion.p className="hero-eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>Salon fryzjerski <span>•</span> Warszawa</motion.p>
          <h1>
            <SplitLine>Włosy, które</SplitLine>
            <SplitLine delay={.1}><em>pasują do Ciebie.</em></SplitLine>
          </h1>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65 }}>Strzyżenie, koloryzacja i pielęgnacja prowadzone z uwagą na detal, kondycję włosów i Twój styl.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 }}><a className="button button-primary" href="#kontakt">Umów wizytę <ArrowUpRight size={16} /></a><a className="button button-secondary" href="#uslugi">Zobacz usługi <ArrowDown size={15} /></a></motion.div>
          <motion.p className="hero-trust" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>Klientki wracają do nas od lat</motion.p>
        </div>
    </section>
  );
}

function TrustStrip() {
  const items = [["Indywidualne podejście", "Każda usługa zaczyna się od konsultacji."], ["Świadoma koloryzacja", "Kolor dopasowany do włosów i stylu."], ["Zdrowe włosy", "Dbamy o wygląd i kondycję włosów."], ["Spokojna atmosfera", "Precyzja bez pośpiechu i presji."]];
  return <section className="trust-strip" aria-label="Dlaczego warto nam zaufać">{items.map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}</section>;
}

function StudioStory() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section id="studio" ref={ref} className="story-section">
      <div className="story-kicker"><span>03</span><p>Dlaczego ÉLITE</p></div>
      <Reveal className="story-statement">
        <h2>Najpierw słuchamy.<br /><em>Potem tworzymy.</em></h2>
      </Reveal>
      <div className="story-composition">
        <motion.figure className="story-image" style={{ y: imageY }}>
          <Image src="https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=1600&q=90" alt="Artystyczna praca stylisty w ÉLITE" fill sizes="(max-width: 768px) 100vw, 58vw" />
        </motion.figure>
        <Reveal className="story-copy">
          <p className="story-label">Piękny efekt także po wizycie</p>
          <p>Zaczynamy od konsultacji. Poznajemy Twoje włosy, styl i codzienny rytm, aby fryzura lub kolor były naprawdę dopasowane.</p>
          <p>Dbamy o kondycję włosów i tworzymy efekt, który łatwo utrzymać również po wyjściu z salonu.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="uslugi" className="services-section">
      <div className="section-intro"><span>02 / Usługi</span><div><h2>Usługi</h2><p>Wybierz usługę odpowiednią dla swoich włosów.</p></div></div>
      <div className="service-list">
        {services.map((service, index) => (
          <motion.a
            href="#kontakt"
            className="service-row"
            key={service.name}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: .7, delay: index * .04, ease }}
          >
            <span className="service-number">{service.number}</span>
            <div className="service-name"><h3>{service.name}</h3><p>{service.description}</p></div>
            <span className="service-price">{service.price}</span>
            <ArrowUpRight className="service-arrow" />
          </motion.a>
        ))}
      </div>
      <AnimatePresence>
        {active !== null && <motion.div className="service-preview" initial={{ opacity: 0, scale: .94, rotate: -3 }} animate={{ opacity: 1, scale: 1, rotate: -2 }} exit={{ opacity: 0, scale: .96 }} transition={{ duration: .35 }}><Image src={services[active].image} alt="" fill sizes="300px" /></motion.div>}
      </AnimatePresence>
      <p className="service-note">Dokładną wycenę koloryzacji potwierdzamy po konsultacji. Każda usługa obejmuje dobór pielęgnacji i spokojne wykończenie.</p>
      <a className="button button-primary services-cta" href="#kontakt">Umów wizytę <ArrowUpRight size={16} /></a>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="gallery-section">
      <div className="gallery-title"><span>04 / Realizacje</span><h2>Efekty mówią <em>same.</em></h2></div>
      <div className="gallery-layout">
        {gallery.map((item, index) => (
          <motion.figure className={`gallery-item ${item.className}`} key={item.src} initial={{ clipPath: "inset(0 0 100% 0)" }} whileInView={{ clipPath: "inset(0 0 0% 0)" }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1.15, delay: index % 2 * .1, ease }}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 92vw, 55vw" />
            <figcaption>ÉLITE / 0{index + 1}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section id="glosy" className="voices-section">
      <div className="section-intro"><span>05 / Opinie</span><div><h2>Dlaczego klientki wracają.</h2><p>Najlepiej opowiadają o nas osoby, które oddają nam swoje włosy.</p></div></div>
      <div className="voices-list">
        {opinions.map(([quote, author], index) => (
          <Reveal className="voice" key={author}>
            <span>0{index + 1}</span>
            <div className="stars" aria-label="5 na 5">★★★★★</div><blockquote>„{quote}”</blockquote>
            <p>{author}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return <section className="final-cta"><Reveal><span>Nowy termin. Nowa energia.</span><h2>Gotowa na zmianę?</h2><p>Zarezerwuj wizytę lub skontaktuj się z nami — pomożemy dobrać odpowiednią usługę.</p><div><a className="button button-acid" href="#kontakt">Umów wizytę <ArrowUpRight size={16} /></a><a className="button button-dark-outline" href="tel:+48500600700">Zadzwoń</a></div></Reveal></section>;
}

function Contact() {
  return (
    <section id="kontakt" className="contact-section">
      <div className="contact-topline"><span>06 / Kontakt</span><span>Warszawa — 52.2297° N</span></div>
      <Reveal><h2>Twój ruch.</h2><p className="contact-lead">Zadzwoń, napisz lub odwiedź nas przy Mokotowskiej.</p></Reveal>
      <div className="contact-grid">
        <div className="contact-action">
          <p>Wybierz usługę online lub zadzwoń. Jeśli nie wiesz, czego potrzebujesz, zacznij od konsultacji.</p>
          <a href="tel:+48500600700">Umów wizytę <ArrowUpRight /></a>
        </div>
        <address><small>Studio</small>ul. Mokotowska 48<br />00–543 Warszawa<br /><a href="https://maps.google.com/?q=Mokotowska+48+Warszawa">Otwórz mapę ↗</a></address>
        <div><small>Kontakt</small><a href="tel:+48500600700">+48 500 600 700</a><a href="mailto:hello@elitebeauty.pl">hello@elitebeauty.pl</a></div>
        <div><small>Godziny</small><p>Pon — Pt, 9:00–20:00<br />Sobota, 9:00–16:00</p></div>
      </div>
    </section>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, restDelta: .001 });

  return (
    <main>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <StudioStory />
      <Gallery />
      <Voices />
      <FinalCta />
      <Contact />
      <footer><span>© 2026 ÉLITE BEAUTY STUDIO</span><span>INSTAGRAM ↗ &nbsp;&nbsp; POLITYKA PRYWATNOŚCI</span><a href="#poczatek">Do góry ↑</a></footer>
      <a className="mobile-book" href="#kontakt">Umów wizytę <ArrowUpRight size={15} /></a>
    </main>
  );
}
