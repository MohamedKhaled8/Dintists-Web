import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { clinicData } from "@/data/clinic";

export function OrisFooter() {
  const FOOTER_SECTIONS = [
    {
      title: "Specialized Treatments",
      links: [
        { label: "Dental Implants (زراعة)", href: "#dental-treatments" },
        { label: "Clear Aligners (تقويم)", href: "#dental-treatments" },
        { label: "Veneers & Aesthetics (تجميل)", href: "#dental-treatments" },
        { label: "Ultrasonic Scaling (تنظيف)", href: "#dental-treatments" },
        { label: "Pediatric Dentistry (أطفال)", href: "#dental-treatments" },
      ],
    },
    {
      title: "Clinic Information",
      links: [
        { label: "Dokki Medical Team", href: "#passion-meet-purpose" },
        { label: "3D CBCT Technology", href: "#about-oris" },
        { label: "Verified Reviews (4.9 ★)", href: "#reviews" },
        { label: "Hospital Sterilization", href: "#passion-meet-purpose" },
      ],
    },
    {
      title: "Quick Contact",
      links: [
        { label: "Call: 0111 765 5583", href: clinicData.phoneTel },
        { label: "WhatsApp Direct", href: clinicData.whatsappUrl },
        { label: "Google Maps Location", href: clinicData.googleMapsUrl },
        { label: "Email: utopiadental2023@gmail.com", href: `mailto:${clinicData.email}` },
      ],
    },
    {
      title: "Hours & Location",
      links: [
        { label: "116 Mohy El-Din Abu El-Ezz, 9th Fl.", href: clinicData.googleMapsUrl },
        { label: "Dokki, Giza, Egypt", href: clinicData.googleMapsUrl },
        { label: "Daily: 2:00 PM – 10:00 PM", href: "#oris-form" },
        { label: "Friday: By Appointment", href: "#oris-form" },
      ],
    },
  ];

  return (
    <footer
      id="oris-footer"
      className="w-full bg-gradient-to-b from-[#3365e2] via-[#1d4ed8] to-[#0B1B3A] text-white overflow-hidden oris-paddx pt-16 pb-6 flex flex-col justify-between relative min-h-[75vh]"
    >
      {/* Top Heading & Immediate Booking Button */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 max-w-full pb-10 border-b border-white/10">
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-200 block mb-2">
            Utopia Dental Clinics · Dokki
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white max-w-2xl leading-tight">
            Brighten your smile with calm, specialist care.
          </h2>
        </div>

        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("open-quick-book"))}
          className="self-start lg:self-center px-8 py-4 rounded-full bg-white text-[#0B1B3A] font-semibold text-sm hover:bg-blue-50 transition-all shadow-xl hover:scale-103 cursor-pointer shrink-0"
        >
          Book Consultation Now
        </button>
      </div>

      {/* Nav Columns */}
      <nav
        aria-label="Footer"
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 my-10"
      >
        {FOOTER_SECTIONS.map((col, idx) => (
          <div key={idx} className="footer-col flex flex-col gap-3">
            <p className="text-white text-base font-semibold whitespace-nowrap">
              {col.title}
            </p>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center no-underline text-white/80 hover:text-white transition-colors text-xs sm:text-sm relative w-fit py-0.5"
                  >
                    <span>{link.label}</span>
                    <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Copyright */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/10 text-white/70 text-xs">
        <p>© 2026 Utopia Dental Clinics (عيادات يوتوبيا بالدقي). All Rights Reserved.</p>
        <p className="text-white/60 mt-1 sm:mt-0 tracking-wide">
          Specialist Dentistry · Implants · Orthodontics · Veneers
        </p>
      </div>

      {/* Giant Architectural Wordmark: UTOPIA DENTAL (Replacing OrisDental SVG) */}
      <div className="relative z-10 w-full flex justify-center items-end select-none pointer-events-none mt-8 pt-4 overflow-hidden">
        <div className="w-full text-center tracking-[-0.03em] font-extrabold text-[12vw] sm:text-[14vw] leading-none text-white/15 uppercase select-none drop-shadow-sm font-sans">
          UTOPIA
        </div>
      </div>
    </footer>
  );
}
