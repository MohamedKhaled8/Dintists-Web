import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { clinicData } from "@/data/clinic";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = (window.scrollY / totalScroll) * 100;
        setProgress(Math.min(100, Math.max(0, current)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none"
      style={{ backgroundColor: "rgba(194, 160, 106, 0.15)" }}
    >
      <div
        className="h-full bg-gradient-to-r from-[#C2A06A] via-[#D98E73] to-[#C2A06A] transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function DesktopFloatingWhatsApp() {
  const { tr, lang } = useI18n();
  const isAr = lang === "ar";

  return (
    <aside
      aria-label={isAr ? "محادثة فورية عبر واتساب" : "WhatsApp Quick Chat"}
      className="hidden md:flex fixed bottom-8 end-8 z-40 items-center group"
    >
      <a
        href={clinicData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isAr ? "تواصل معنا مباشرة عبر واتساب" : "Chat on WhatsApp"}
        className="relative flex items-center gap-3 bg-[#0E1F1C] text-white px-5 py-3 rounded-full border border-[#C2A06A]/40 shadow-xl hover:border-[#C2A06A] hover:bg-[#16372F] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
        <span className="text-xs font-semibold tracking-wide">
          {isAr ? "محادثة واتساب سريعة" : "WhatsApp Desk"}
        </span>
      </a>
    </aside>
  );
}

export function MobileBottomBar() {
  const { tr, lang } = useI18n();
  const isAr = lang === "ar";

  return (
    <nav
      aria-label={isAr ? "خيارات الاتصال والحجز السريعة" : "Quick Actions"}
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0E1F1C]/95 backdrop-blur-md border-t border-[#C2A06A]/30 py-2.5 px-3 flex items-center justify-between gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
    >
      {/* Call */}
      <a
        href={clinicData.tel || clinicData.phoneTel}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
      >
        <Phone className="w-4 h-4 text-[#C2A06A] mb-0.5" />
        <span className="text-[10px] font-bold tracking-tight">
          {isAr ? "اتصال" : "Call"}
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href={clinicData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
      >
        <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
        <span className="text-[10px] font-bold tracking-tight">
          {isAr ? "واتساب" : "WhatsApp"}
        </span>
      </a>

      {/* Book Button (Clay Accent) */}
      <Link
        to="/book"
        className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-gradient-to-r from-[#D98E73] to-[#C2A06A] text-[#0E1F1C] font-bold text-xs shadow-md active:scale-95 transition-transform"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>{isAr ? "طلب حجز" : "Book Visit"}</span>
      </Link>
    </nav>
  );
}

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("input") ||
          target.closest("select") ||
          target.closest(".interactive"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="hidden md:block pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      <div
        className={`rounded-full border border-[#C2A06A] transition-all duration-200 ${
          isHovered
            ? "w-10 h-10 bg-[#C2A06A]/15 scale-125 border-[#D98E73]"
            : "w-5 h-5 bg-transparent"
        }`}
      />
    </div>
  );
}
