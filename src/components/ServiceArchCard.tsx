import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { Service } from "@/data/types";

interface ServiceArchCardProps {
  service: Service;
  index: number;
}

export function ServiceArchCard({ service, index }: ServiceArchCardProps) {
  const { lang, tr } = useI18n();
  const isAr = lang === "ar";
  const cardRef = useRef<HTMLDivElement>(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Subtle 3D tilt
    setRotateX(-normY * 7);
    setRotateY(normX * 7);
    setSpotlightPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  // Resolve dynamic icon
  const iconKey = (service as { iconName?: string; icon?: string }).iconName || (service as { iconName?: string; icon?: string }).icon || "Sparkles";
  const IconComponent =
    (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconKey] ||
    Icons.Sparkles;

  const tagline = (service as { tagline?: { ar: string; en: string }; shortTagline?: { ar: string; en: string } }).tagline ||
    (service as { tagline?: { ar: string; en: string }; shortTagline?: { ar: string; en: string } }).shortTagline;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
      }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.25rem] border border-[#e0d8c7] bg-[#fbf9f4] p-7 shadow-md transition-shadow hover:shadow-xl hover:border-[#c2a06a]"
    >
      {/* Dynamic Cursor Spotlight Light */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(194, 160, 106, 0.15), transparent 70%)`,
        }}
      />

      {/* Top Arch Emblem & Number */}
      <div>
        <div className="flex items-center justify-between border-b border-[#e0d8c7] pb-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0e1f1c] text-[#c2a06a] shadow-sm transition-transform duration-300 group-hover:scale-105">
            <IconComponent className="h-7 w-7 text-[#c2a06a]" />
          </div>

          <span className="font-serif text-sm font-bold text-[#c2a06a]/80">
            0{index + 1}
          </span>
        </div>

        {/* Title & Tagline */}
        <h4 className="mt-5 font-serif text-xl font-bold text-[#0e1f1c] transition-colors group-hover:text-[#c2a06a]">
          {service.name ? tr(service.name) : ""}
        </h4>

        {tagline && (
          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#505c58]">
            {tr(tagline)}
          </p>
        )}

        {/* Quick Highlights Pill */}
        {Array.isArray(service.whatToExpect) && service.whatToExpect.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {service.whatToExpect.slice(0, 2).map((st, i) => (
              <span
                key={i}
                className="rounded-full bg-[#ece6d9] px-2.5 py-0.5 text-[11px] font-semibold text-[#0e1f1c]"
              >
                {st.title ? tr(st.title).split(":")[0] || tr(st.title) : ""}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Action Link */}
      <div className="mt-8 border-t border-[#e0d8c7] pt-4">
        <Link
          to="/services/$slug"
          params={{ slug: service.slug }}
          className="flex items-center justify-between text-xs font-bold text-[#0e1f1c] group-hover:text-[#c2a06a] transition-colors"
        >
          <span>{isAr ? "استكشف تفاصيل الإجراء" : "Explore Procedure"}</span>
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c2a06a]/40 bg-white group-hover:bg-[#0e1f1c] group-hover:text-white transition-colors">
            <ChevronRight className="h-4 w-4 rtl:-scale-x-100" />
          </div>
        </Link>
      </div>
    </div>
  );
}
