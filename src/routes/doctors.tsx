import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Award, ShieldCheck, Calendar, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { getDoctors } from "@/lib/repository";
import { PageHero } from "@/components/site";
import { DoctorCapsuleCard } from "@/components/DoctorCapsuleCard";
import type { DoctorItem } from "@/data/types";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      {
        title: "أطباء واستشاريو عيادات يوتوبيا لطب الأسنان بالدقي | Doctors & Specialists",
      },
      {
        name: "description",
        content:
          "تعرف على الفريق الطبي واستشاريي عيادات يوتوبيا في الدقي: زراعة الأسنان، جراحة الفم، تقويم الأسنان، وطب أسنان الأطفال.",
      },
    ],
  }),
  component: DoctorsRouteComponent,
});

function DoctorsRouteComponent() {
  const routerState = useRouterState();
  const path = routerState.location.pathname.replace(/\/$/, "");
  if (path !== "/doctors") {
    return <Outlet />;
  }
  return <DoctorsPage />;
}

function DoctorsPage() {
  const { lang } = useI18n();
  const isAr = lang === "ar";

  const { data: doctors = [] } = useQuery<DoctorItem[]>({
    queryKey: ["doctors"],
    queryFn: () => getDoctors(),
  });

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#0E1F1C]">
      <PageHero
        title={isAr ? "نخبة أطباء واستشاريي يوتوبيا" : "Specialists & Clinic Leadership"}
        sub={
          isAr
            ? "فريق طبي متكامل يجمع بين التخصص الأكاديمي الدقيق والخبرة الإكلينيكية المتقدمة بالدقي."
            : "A multidisciplinary team of certified dental consultants dedicated to precision, clinical comfort, and patient care in Dokki."
        }
        crumb={isAr ? "الفريق الطبي" : "Doctors"}
      />

      {/* Qualifications Banner */}
      <section className="container-x py-14">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl border border-[#C2A06A]/30 bg-white p-6 shadow-xs">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0E1F1C] text-[#C2A06A]">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-[#0E1F1C]">
                {isAr ? "استشاريون معتمدون" : "Certified Specialists"}
              </h3>
              <p className="mt-0.5 text-xs text-[#16372F]/70">
                {isAr ? "خبرات علاجية وأكاديمية متقدمة بالدقي" : "Advanced clinical expertise"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[#C2A06A]/30 bg-white p-6 shadow-xs">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0E1F1C] text-[#C2A06A]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-[#0E1F1C]">
                {isAr ? "رعاية فردية مخصصة" : "Personalized Care"}
              </h3>
              <p className="mt-0.5 text-xs text-[#16372F]/70">
                {isAr ? "خطة علاج مصممة لكل مراجع" : "Tailored treatment mapping"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[#C2A06A]/30 bg-white p-6 shadow-xs">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0E1F1C] text-[#C2A06A]">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-[#0E1F1C]">
                {isAr ? "مواعيد يومية منتظمة" : "Daily Consultations"}
              </h3>
              <p className="mt-0.5 text-xs text-[#16372F]/70">
                {isAr ? "يوميًا ٢:٠٠ م حتى ١٠:٠٠ م" : "Daily 2:00 PM – 10:00 PM"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Cards Directory */}
      <section className="container-x pb-24">
        <div className="mb-10">
          <span className="eyebrow">
            <Sparkles className="w-3.5 h-3.5 text-[#C2A06A]" />
            <span>{isAr ? "الأطباء المعتمدون" : "Active Medical Staff"}</span>
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-[#0E1F1C]">
            {isAr ? "استشاريو عيادات يوتوبيا بالدقي" : "Attending Specialists"}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {doctors.map((doctor) => (
            <DoctorCapsuleCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>
    </div>
  );
}
