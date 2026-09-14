"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Instagram, Menu, Star, X } from "lucide-react";
import { useState } from "react";

const nav = [["O nas", "o-nas"], ["Usługi", "uslugi"], ["Galeria", "galeria"], ["Opinie", "opinie"], ["Kontakt", "kontakt"]];
const services = [
  ["01", "Rytuały twarzy", "Autorskie terapie dopasowane do rytmu Twojej skóry.", "od 290 zł"],
  ["02", "Stylizacja brwi", "Precyzyjny kształt, subtelny kolor i naturalny efekt.", "od 120 zł"],
  ["03", "Manicure premium", "Perfekcyjny detal, pielęgnacja i ponadczasowa elegancja.", "od 150 zł"],
  ["04", "Masaż kobido", "Głęboki relaks i naturalny lifting w jednym rytuale.", "od 240 zł"],
];
const photos = [
  ["https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=90", "Zabieg pielęgnacyjny twarzy"],
  ["https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=90", "Kosmetyki premium"],
  ["https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=90", "Pielęgnacja w studio"],
];

const reveal = { initial: { opacity: 0, y: 32 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: .8 } };

export default function Home() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, .35], [0, 90]);
  return <main className="overflow-hidden">
    <motion.div className="fixed left-0 top-0 z-[70] h-[2px] origin-left bg-gold" style={{ scaleX: scrollYProgress }} />
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-cream/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <a href="#start" className="font-serif text-2xl tracking-[.12em]">ÉLITE</a>
        <nav className="hidden items-center gap-9 lg:flex">{nav.map(([label, id]) => <a className="text-[11px] font-semibold uppercase tracking-[.16em] transition-colors hover:text-gold" href={`#${id}`} key={id}>{label}</a>)}</nav>
        <a href="#rezerwacja" className="hidden items-center gap-2 border-b border-ink pb-1 text-[11px] font-bold uppercase tracking-[.16em] transition-colors hover:border-gold hover:text-gold lg:flex">Umów wizytę <ArrowUpRight size={14}/></a>
        <button aria-label={open ? "Zamknij menu" : "Otwórz menu"} onClick={() => setOpen(!open)} className="lg:hidden">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <motion.nav initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} className="border-t border-black/10 bg-cream px-6 py-7 lg:hidden">{nav.map(([label,id]) => <a onClick={()=>setOpen(false)} className="block border-b border-black/10 py-4 font-serif text-3xl" href={`#${id}`} key={id}>{label}</a>)}<a href="#rezerwacja" onClick={()=>setOpen(false)} className="mt-6 inline-flex bg-ink px-6 py-4 text-xs uppercase tracking-widest text-white">Umów wizytę</a></motion.nav>}
    </header>

    <section id="start" className="noise relative min-h-screen pt-[76px]">
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-[1440px] items-center gap-10 px-6 py-12 lg:grid-cols-[1.05fr_.95fr] lg:px-12 lg:py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative z-10 pt-8 lg:pt-0">
          <motion.p initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .2, duration: .7 }} className="eyebrow mb-8 text-gold">Beauty studio · Warszawa</motion.p>
          <motion.h1 initial={{ y: 35, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .35, duration: .9 }} className="display max-w-3xl text-[17vw] sm:text-[8rem] lg:text-[9rem] xl:text-[10.5rem]">Piękno<br/><em className="font-normal">w Twoim</em><br/>rytmie.</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }} className="mt-9 flex items-end justify-between border-t border-black/20 pt-5 sm:max-w-xl">
            <p className="max-w-xs text-sm leading-7 text-black/60">Kameralna przestrzeń, świadoma pielęgnacja i czas, który należy tylko do Ciebie.</p>
            <a href="#o-nas" aria-label="Przejdź niżej" className="rounded-full border border-black/20 p-4 transition-all hover:border-gold hover:bg-gold hover:text-white"><ArrowDown size={18}/></a>
          </motion.div>
        </motion.div>
        <motion.div style={{ y: heroY }} initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 1.2, delay: .15, ease: [0.76,0,0.24,1] }} className="relative h-[62vh] min-h-[520px] lg:h-[78vh]">
          <Image priority fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1600&q=90" alt="Kobieta podczas luksusowego zabiegu beauty" />
          <div className="absolute bottom-0 left-0 bg-cream px-5 py-4"><span className="eyebrow">01 / Natural beauty</span></div>
        </motion.div>
      </div>
    </section>

    <section id="o-nas" className="bg-ink px-6 py-28 text-white lg:px-12 lg:py-44">
      <div className="mx-auto grid max-w-[1340px] gap-16 lg:grid-cols-2">
        <motion.div {...reveal}><p className="eyebrow text-gold">Nasza filozofia</p></motion.div>
        <motion.div {...reveal}><h2 className="display text-5xl sm:text-7xl lg:text-[6.2rem]">Mniej pośpiechu.<br/><em className="text-sand">Więcej Ciebie.</em></h2><p className="mt-10 max-w-xl text-sm leading-8 text-white/55">ÉLITE powstało z potrzeby stworzenia miejsca, w którym nowoczesna kosmetologia spotyka się z uważnością. Nie wierzymy w jeden schemat. Każdy rytuał zaczynamy od rozmowy i projektujemy tylko dla Ciebie.</p><div className="mt-12 grid grid-cols-3 gap-5 border-t border-white/15 pt-8"><div><strong className="font-serif text-4xl">8+</strong><p className="mt-2 text-[10px] uppercase tracking-wider text-white/40">lat doświadczenia</p></div><div><strong className="font-serif text-4xl">2k+</strong><p className="mt-2 text-[10px] uppercase tracking-wider text-white/40">pięknych historii</p></div><div><strong className="font-serif text-4xl">100%</strong><p className="mt-2 text-[10px] uppercase tracking-wider text-white/40">uważności</p></div></div></motion.div>
      </div>
    </section>

    <section id="uslugi" className="px-6 py-28 lg:px-12 lg:py-40"><div className="mx-auto max-w-[1340px]">
      <motion.div {...reveal} className="mb-20 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow mb-6 text-gold">Wybierz swój rytuał</p><h2 className="display text-6xl sm:text-8xl">Nasze usługi</h2></div><p className="max-w-sm text-sm leading-7 text-black/50">Każdy zabieg to połączenie skutecznej technologii, starannie dobranych produktów i kojącego dotyku.</p></motion.div>
      <div>{services.map(([n,title,desc,price],i)=><motion.article {...reveal} transition={{duration:.65,delay:i*.08}} key={title} className="group grid gap-4 border-t border-black/15 py-8 transition-colors hover:border-gold sm:grid-cols-[60px_1fr_1fr_auto] sm:items-center"><span className="text-xs text-gold">{n}</span><h3 className="font-serif text-4xl transition-transform group-hover:translate-x-2 lg:text-5xl">{title}</h3><p className="max-w-sm text-sm leading-6 text-black/45">{desc}</p><span className="text-xs font-semibold uppercase tracking-wider">{price}</span></motion.article>)}</div>
    </div></section>

    <section id="galeria" className="bg-[#e8e0d5] px-6 py-28 lg:px-12 lg:py-40"><div className="mx-auto max-w-[1340px]">
      <motion.div {...reveal} className="mb-16 flex items-end justify-between"><div><p className="eyebrow mb-5 text-gold">Wnętrze & pielęgnacja</p><h2 className="display text-6xl sm:text-8xl">W świecie ÉLITE</h2></div><a href="https://instagram.com" aria-label="Instagram ÉLITE" className="hidden rounded-full border border-black/20 p-4 transition hover:bg-ink hover:text-white sm:block"><Instagram size={18}/></a></motion.div>
      <div className="grid auto-rows-[280px] gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[540px_380px]">{photos.map(([src,alt],i)=><motion.div {...reveal} key={src} className={`image-reveal relative ${i===0?'sm:row-span-2 lg:row-span-1':''} ${i===1?'lg:mt-20':''} ${i===2?'lg:col-start-2 lg:col-span-2':''}`}><Image fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" src={src} alt={alt}/></motion.div>)}</div>
    </div></section>

    <section className="px-6 py-28 lg:px-12 lg:py-44"><div className="mx-auto max-w-[1340px]"><motion.p {...reveal} className="eyebrow text-gold">Dlaczego ÉLITE</motion.p><div className="mt-16 grid gap-12 md:grid-cols-3">{[["01","Indywidualnie","Zaczynamy od potrzeb Twojej skóry, nie od gotowej listy zabiegów."],["02","Świadomie","Pracujemy na sprawdzonych formułach i technologiach o potwierdzonej skuteczności."],["03","Bez pośpiechu","Rezerwujemy czas na rozmowę, rytuał i spokojny powrót do codzienności."]].map(([n,t,d],i)=><motion.div {...reveal} transition={{duration:.7,delay:i*.12}} key={t}><span className="text-xs text-gold">{n}</span><h3 className="mt-7 font-serif text-4xl">{t}</h3><p className="mt-5 max-w-sm text-sm leading-7 text-black/50">{d}</p></motion.div>)}</div></div></section>

    <section id="opinie" className="border-y border-black/10 px-6 py-28 lg:px-12 lg:py-40"><motion.div {...reveal} className="mx-auto max-w-5xl text-center"><div className="mb-10 flex justify-center gap-1 text-gold">{[1,2,3,4,5].map(n=><Star key={n} size={14} fill="currentColor"/>)}</div><blockquote className="display text-5xl sm:text-7xl lg:text-8xl">„Tu naprawdę czuję, że ktoś widzi mnie — nie tylko moją skórę.”</blockquote><p className="eyebrow mt-10">Aleksandra · klientka od 2021</p></motion.div></section>

    <section id="rezerwacja" className="relative bg-ink px-6 py-28 text-white lg:px-12 lg:py-44"><div className="absolute inset-0 opacity-[.06] [background:radial-gradient(circle_at_80%_20%,#d4b47b,transparent_35%)]"/><motion.div {...reveal} className="relative mx-auto max-w-[1340px]"><p className="eyebrow text-gold">Czas dla Ciebie</p><div className="mt-8 flex flex-col justify-between gap-12 lg:flex-row lg:items-end"><h2 className="display text-7xl sm:text-9xl lg:text-[11rem]">Umów<br/><em>wizytę.</em></h2><div className="max-w-sm"><p className="mb-8 text-sm leading-7 text-white/55">Pozwól nam zadbać o Ciebie. Wybierz dogodny termin lub zadzwoń — chętnie pomożemy dobrać rytuał.</p><a href="tel:+48500600700" className="group inline-flex w-full items-center justify-between border border-white/25 px-6 py-5 text-xs font-bold uppercase tracking-[.18em] transition hover:bg-white hover:text-ink">Zarezerwuj termin <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={17}/></a></div></div></motion.div></section>

    <section id="kontakt" className="px-6 py-24 lg:px-12 lg:py-32"><div className="mx-auto grid max-w-[1340px] gap-16 md:grid-cols-2 lg:grid-cols-4"><div><a href="#start" className="font-serif text-3xl tracking-[.12em]">ÉLITE</a><p className="mt-4 text-xs leading-6 text-black/45">Beauty Studio<br/>Piękno w Twoim rytmie.</p></div><div><p className="eyebrow mb-6 text-gold">Odwiedź nas</p><address className="text-sm not-italic leading-7">ul. Mokotowska 48<br/>00–543 Warszawa</address></div><div><p className="eyebrow mb-6 text-gold">Kontakt</p><a className="block text-sm leading-7 hover:text-gold" href="tel:+48500600700">+48 500 600 700</a><a className="text-sm hover:text-gold" href="mailto:hello@elitebeauty.pl">hello@elitebeauty.pl</a></div><div><p className="eyebrow mb-6 text-gold">Godziny</p><p className="text-sm leading-7">Pon – Pt &nbsp; 9:00–20:00<br/>Sobota &nbsp; 9:00–16:00</p></div></div></section>
    <footer className="border-t border-black/10 px-6 py-7 lg:px-12"><div className="mx-auto flex max-w-[1340px] flex-col justify-between gap-3 text-[10px] uppercase tracking-wider text-black/40 sm:flex-row"><p>© 2026 ÉLITE Beauty Studio</p><div className="flex gap-6"><a href="#">Polityka prywatności</a><a href="#">Instagram</a></div></div></footer>
  </main>;
}
