import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MapPin,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Calendar,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Send,
  Navigation,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { clinicData } from "@/data/clinic";
import { ContactList, PageHero } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "تواصل مع عيادات يوتوبيا بالدقي | Contact & Location — Dokki, Giza",
      },
      {
        name: "description",
        content:
          "عنوان وأرقام عيادات يوتوبيا لطب وتجميل وزراعة الأسنان في الدقي: ١١٦ شارع محيي الدين أبو العز، الطابق التاسع. هاتف: 01117655583. يومياً ٢ - ١٠ م.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang } = useI18n();
  const isAr = lang === "ar";

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#0E1F1C]">
      <PageHero
        title={isAr ? "تواصل مع عيادات يوتوبيا" : "Contact & Visit Dokki"}
        sub={
          isAr
            ? "يسعدنا استقبال استفساراتكم ومواعيدكم يومياً من ٢:٠٠ ظهراً حتى ١٠:٠٠ مساءً في فرعنا بالدقي."
            : "We welcome your inquiries and visits daily from 2:00 PM to 10:00 PM on the 9th floor in Dokki, Giza."
        }
        crumb={isAr ? "اتصل بنا" : "Contact"}
      />

      <section className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] items-start">
          {/* Left Column: Direct Contact Info & Directions */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-[#C2A06A]/30 bg-white p-8 shadow-sm">
              <span className="eyebrow">
                <MapPin className="w-3.5 h-3.5 text-[#C2A06A]" />
                <span>{isAr ? "مقر العيادة بالدقي" : "Clinic Location"}</span>
              </span>

              <h2 className="mt-3 font-display text-2xl font-bold text-[#0E1F1C]">
                {clinicData.name[lang]}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-[#16372F]/70">
                {clinicData.address[lang]}
              </p>

              <div className="mt-6 border-t border-[#C2A06A]/15 pt-6">
                <ContactList />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={clinicData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-clay flex items-center gap-2 text-xs shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{isAr ? "تواصل عبر واتساب" : "WhatsApp"}</span>
                </a>

                <a
                  href={clinicData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2 text-xs"
                >
                  <Navigation className="w-4 h-4 text-[#C2A06A]" />
                  <span>{isAr ? "احصل على الاتجاهات" : "Get Directions"}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="rounded-2xl border border-[#C2A06A]/20 bg-[#F6F1E7] p-6 shadow-xs flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0E1F1C] text-[#C2A06A]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#16372F]/60">
                  {isAr ? "ساعات العمل الرسمية" : "Operating Schedule"}
                </p>
                <p className="text-sm font-bold text-[#0E1F1C] mt-0.5">
                  {clinicData.hours[lang]}
                </p>
                <p className="text-[11px] text-[#16372F]/50 mt-0.5">
                  {isAr ? "طوال أيام الأسبوع" : "7 Days a Week"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Booking Link */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-[#C2A06A]/30 bg-white p-6 md:p-8 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C2A06A]" />
                  <h3 className="font-display text-lg font-bold text-[#0E1F1C]">
                    {isAr ? "موقع العيادة على الخريطة" : "Location on Map"}
                  </h3>
                </div>
                <a
                  href={clinicData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#C2A06A] hover:underline flex items-center gap-1"
                >
                  <span>{isAr ? "فتح في خرائط جوجل" : "Open in Google Maps"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#C2A06A]/20 bg-[#F6F1E7]">
                <iframe
                  title="Utopia Dental Clinics Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6496924840427!2d31.2030067!3d30.0468925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584144365287f3%3A0x7d671239ce343868!2zMTE2INi02KfYsdi5INmF2K3ZitmKINin2YTYr9mK2YYg2KPYqNmIINin2YTYudiy2Iwg2KfZhNiv2YLZitiMINin2YTYrNmK2LLYqQ!5e0!3m2!1sar!2seg!4v1700000000000!5m2!1sar!2seg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Quick Booking CTA Box */}
              <div className="mt-6 rounded-2xl border border-[#C2A06A]/20 bg-[#FBF9F4] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm text-[#0E1F1C]">
                    {isAr ? "هل ترغب بطلب حجز موعد مباشر؟" : "Ready to Schedule a Consultation?"}
                  </h4>
                  <p className="text-xs text-[#16372F]/70 mt-0.5">
                    {isAr
                      ? "استخدم نموذج الحجز المبدئي لاختيار الخدمة والموعد المناسب."
                      : "Use our multi-step booking request form to pick your date and doctor."}
                  </p>
                </div>

                <Link to="/book" className="btn-clay text-xs py-2.5 px-5 shrink-0 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{isAr ? "الانتقال لنموذج الحجز" : "Go to Booking Form"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
