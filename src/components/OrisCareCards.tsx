import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scan,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Smile,
  Award,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CareCardItem {
  number: string;
  category: string;
  title: string;
  desc: string;
  highlight: string;
  icon: typeof Scan;
  badgeColor: string;
}

const CARE_CARDS: CareCardItem[] = [
  {
    number: "01",
    category: "3D Diagnostics",
    title: "Digital CBCT & Intraoral Scan",
    desc: "Comprehensive bone density evaluation and 3D computer-guided surgical planning without uncomfortable impression molds.",
    highlight: "Zero Discomfort · Precision Mapping",
    icon: Scan,
    badgeColor: "bg-blue-50 text-[#3365e2] border-blue-200/60",
  },
  {
    number: "02",
    category: "Restoration",
    title: "Guided Titanium Dental Implants",
    desc: "Biocompatible titanium root fixtures placed under local anesthesia to support permanent, lifelike Zirconia crowns.",
    highlight: "Lifetime Osseointegration · Bone Care",
    icon: ShieldCheck,
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
  },
  {
    number: "03",
    category: "Orthodontics",
    title: "Clear Aligners & Aesthetic Braces",
    desc: "Custom transparent aligner trays tailored to correct crowding and spacing while keeping treatment discreet and removable.",
    highlight: "Invisible Trays · Perfect Bite Balance",
    icon: Sparkles,
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/60",
  },
  {
    number: "04",
    category: "Hygiene",
    title: "Ultrasonic Scaling & Periodontics",
    desc: "Micro-vibration tartar removal beneath the gumline followed by gentle polishing to protect against bleeding and sensitivity.",
    highlight: "Deep Gum Health · Enamel Polishing",
    icon: HeartHandshake,
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
  },
  {
    number: "05",
    category: "Pediatric Care",
    title: "Gentle Child-Friendly Dentistry",
    desc: "A warm, psychologically reassuring environment that eliminates dental anxiety and establishes positive lifelong oral hygiene.",
    highlight: "Fear-Free Visits · Fluoride Protection",
    icon: Smile,
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200/60",
  },
  {
    number: "06",
    category: "Aesthetics",
    title: "Bespoke Veneers & Zirconia Crowns",
    desc: "Individually calibrated porcelain restorations matched to facial symmetry and natural tooth translucency for radiant confidence.",
    highlight: "Handcrafted E-max · Natural Translucency",
    icon: Award,
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200/60",
  },
];

export function OrisCareCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".care-card-anim");
    gsap.set(cards, { y: 40, opacity: 0 });

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
        });
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  const scrollTrack = (direction: "prev" | "next") => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.firstElementChild?.clientWidth || 360;
    const scrollAmount = (cardWidth + 24) * (direction === "next" ? 1 : -1);
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section
      id="care-comfort"
      ref={containerRef}
      className="w-full bg-[#fbfbfd] relative z-10 pt-16 pb-8 overflow-hidden text-oris-secondary border-t border-slate-100"
    >
      {/* Header with tighter, balanced rhythm */}
      <div className="oris-paddx mb-8 flex justify-between items-end max-[1025px]:flex-col max-[1025px]:items-start max-[1025px]:gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#3365e2] text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3365e2]" />
            <span>Clinical Protocols & Standards · معايير الرعاية المتطورة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0B1B3A] leading-tight">
            Care Designed for Your{" "}
            <span className="text-[#3365e2] font-semibold">Lasting Comfort</span>
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2 max-[1025px]:self-end">
          <button
            type="button"
            onClick={() => scrollTrack("prev")}
            aria-label="Previous card"
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:border-[#3365e2] hover:bg-blue-50 text-slate-700 hover:text-[#3365e2] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollTrack("next")}
            aria-label="Next card"
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:border-[#3365e2] hover:bg-blue-50 text-slate-700 hover:text-[#3365e2] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Draggable Double-Bezel Luxury Cards Track */}
      <div className="w-full relative">
        <div
          ref={trackRef}
          className="w-full overflow-x-auto scrollbar-none flex select-none cursor-grab active:cursor-grabbing py-3 pl-[4vw] gap-6"
          style={{ touchAction: "pan-y" }}
        >
          {CARE_CARDS.map((card, idx) => {
            const Icon = card.icon;

            return (
              <div
                key={idx}
                className="care-card-anim shrink-0 w-[340px] sm:w-[380px] group will-change-transform"
              >
                {/* Outer Double-Bezel Shell */}
                <div className="p-2 rounded-[2rem] bg-gradient-to-b from-slate-100 to-slate-50 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(11,27,58,0.05)] transition-all duration-300 group-hover:shadow-[0_16px_36px_-6px_rgba(51,101,226,0.15)] group-hover:border-blue-300/80 group-hover:-translate-y-1">
                  {/* Inner Core Surface */}
                  <div className="rounded-[calc(2rem-0.5rem)] bg-white p-7 flex flex-col justify-between h-[390px] border border-slate-100 relative overflow-hidden">
                    {/* Subtle Top Ambient Gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-100/60 transition-colors" />

                    {/* Top Row: Number and Category Badge */}
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        {card.number}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${card.badgeColor}`}
                      >
                        {card.category}
                      </span>
                    </div>

                    {/* Middle Area: Icon & Typography */}
                    <div className="relative z-10 my-auto pt-4">
                      {/* Refined Icon Container */}
                      <div className="w-13 h-13 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-[#3365e2] mb-5 shadow-xs group-hover:bg-[#3365e2] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>

                      <h3 className="text-xl font-semibold tracking-tight text-[#0B1B3A] mb-2.5 leading-snug group-hover:text-[#3365e2] transition-colors">
                        {card.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {card.desc}
                      </p>
                    </div>

                    {/* Bottom Area: Highlight Tag & Quick Trigger */}
                    <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate max-w-[210px]">{card.highlight}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => window.dispatchEvent(new CustomEvent("open-quick-book"))}
                        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#3365e2] text-slate-600 hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
                        title="Book consultation"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
