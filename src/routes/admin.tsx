import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ShieldAlert,
  Lock,
  Unlock,
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  Trash2,
  Filter,
  User,
  Calendar,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { listBookings, updateBookingStatus, deleteBooking } from "@/lib/repository";
import type { BookingRequest } from "@/data/types";
import { servicesData } from "@/data/services";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

/**
 * CLIENT-SIDE PASSCODE CONSTANT
 * NOTE: This is a front-end preview passcode. When Supabase is connected,
 * replace this entire mock gate with Supabase Auth (Email/Password or Magic Link)
 * and PostgreSQL Row Level Security (RLS) policies on the 'bookings' table.
 */
const ADMIN_PASSCODE = "utopia2026";

function AdminPage() {
  const { lang } = useI18n();
  const isAr = lang === "ar";
  const queryClient = useQueryClient();

  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === "undefined" || typeof sessionStorage === "undefined") {
      return false;
    }
    try {
      return sessionStorage.getItem("utopia_admin_auth") === "true";
    } catch {
      return false;
    }
  });
  const [authError, setAuthError] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const { data: bookings = [], isLoading, refetch } = useQuery<BookingRequest[]>({
    queryKey: ["admin_bookings"],
    queryFn: () => listBookings(),
    enabled: isAuthenticated,
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: BookingRequest["status"] }) =>
      updateBookingStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_bookings"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteBooking(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_bookings"] });
    },
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem("utopia_admin_auth", "true");
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("utopia_admin_auth");
  };

  const filteredBookings = bookings.filter((b) => {
    if (filterStatus === "all") return true;
    return b.status === filterStatus;
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#FBF9F4] flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-3xl border border-[#C2A06A]/30 bg-white p-8 shadow-xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#0E1F1C] text-[#C2A06A] flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7" />
          </div>

          <h1 className="font-display text-2xl font-bold text-[#0E1F1C]">
            {isAr ? "بوابة إدارة الحجوزات" : "Utopia Bookings Portal"}
          </h1>
          <p className="mt-1 text-xs text-[#16372F]/70">
            {isAr
              ? "منطقة إدارة طلبات الحجز المبدئية لعيادات يوتوبيا بالدقي"
              : "Review preliminary patient visit requests"}
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder={isAr ? "أدخل رمز المرور (utopia2026)" : "Enter passcode (utopia2026)"}
                className="w-full rounded-xl border border-[#C2A06A]/30 bg-[#FBF9F4] px-4 py-3 text-center text-sm font-mono tracking-widest text-[#0E1F1C] focus:border-[#C2A06A] focus:outline-none"
              />
              {authError && (
                <p className="mt-2 text-xs font-semibold text-red-600">
                  {isAr ? "رمز المرور غير صحيح" : "Incorrect passcode"}
                </p>
              )}
            </div>

            <button type="submit" className="btn-primary w-full justify-center text-xs py-3">
              <Unlock className="w-4 h-4" />
              <span>{isAr ? "دخول لوحة التحكم" : "Enter Portal"}</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-border text-[11px] text-[#16372F]/50">
            {isAr ? "رمز الدخول التجريبي: utopia2026" : "Demo passcode: utopia2026"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#0E1F1C]">
      {/* Top Banner */}
      <section className="border-b border-[#C2A06A]/20 bg-[#0E1F1C] text-white py-10">
        <div className="container-x flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase font-mono tracking-wider text-[#C2A06A]">
                {isAr ? "لوحة الإدارة المؤقتة" : "Admin Workspace"}
              </span>
            </div>
            <h1 className="mt-1 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              {isAr ? "إدارة طلبات الحجز المبدئية" : "Patient Booking Requests"}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => refetch()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 text-xs font-medium text-white/80 hover:bg-white/10"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{isAr ? "تحديث" : "Refresh"}</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-medium text-white hover:bg-white/20"
            >
              {isAr ? "تسجيل الخروج" : "Logout"}
            </button>
          </div>
        </div>
      </section>

      {/* Supabase Migration Notice Banner */}
      <div className="bg-[#D98E73]/15 border-b border-[#D98E73]/30 py-3 px-4 text-center text-xs text-[#0E1F1C]">
        <div className="container-x flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-[#D98E73] shrink-0" />
          <span>
            {isAr
              ? "ملاحظة تقنية: هذه اللوحة تعمل حالياً عبر التخزين المحلي (localStorage). عند ربط قاعدة بيانات Supabase، سيتم استبدالها بـ Supabase Auth & RLS."
              : "Technical notice: This portal uses local storage. When connecting Supabase, replace this with Supabase Auth and Row Level Security."}
          </span>
        </div>
      </div>

      {/* Controls & Table */}
      <main className="container-x py-10">
        {/* Filter bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#C2A06A]" />
            <span className="text-xs font-bold text-[#16372F]/70">
              {isAr ? "تصفية حسب الحالة:" : "Filter status:"}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { k: "all", label: isAr ? "الكل" : "All" },
                { k: "new", label: isAr ? "جديد" : "New" },
                { k: "contacted", label: isAr ? "تم التواصل" : "Contacted" },
                { k: "confirmed", label: isAr ? "مؤكد" : "Confirmed" },
                { k: "cancelled", label: isAr ? "ملغي" : "Cancelled" },
              ].map((f) => (
                <button
                  key={f.k}
                  onClick={() => setFilterStatus(f.k)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    filterStatus === f.k
                      ? "bg-[#0E1F1C] text-[#C2A06A]"
                      : "bg-white border border-[#C2A06A]/20 text-[#16372F]/70 hover:bg-[#F6F1E7]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs font-bold text-[#16372F]/60">
            {isAr ? "إجمالي الطلبات:" : "Total Requests:"}{" "}
            <span className="text-[#0E1F1C] font-mono">{filteredBookings.length}</span>
          </div>
        </div>

        {/* Bookings List */}
        {filteredBookings.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[#C2A06A]/30 bg-white p-12 text-center">
            <Calendar className="w-10 h-10 text-[#C2A06A]/40 mx-auto mb-3" />
            <h3 className="font-bold text-base text-[#0E1F1C]">
              {isAr ? "لا توجد طلبات حجز حالياً" : "No booking requests found"}
            </h3>
            <p className="mt-1 text-xs text-[#16372F]/60">
              {isAr
                ? "يمكنك تجربة إرسال طلب جديد من صفحة الحجز لاختبار المنظومة."
                : "You can submit a test request from the /book page."}
            </p>
            <div className="mt-4">
              <Link to="/book" className="btn-clay text-xs py-2 px-4">
                {isAr ? "الانتقال لنموذج الحجز" : "Go to Booking Form"}
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredBookings.map((b) => {
              const serviceNames = b.serviceIds
                .map((sId) => {
                  const s = servicesData.find((item) => item.slug === sId);
                  return s ? s.name[lang] : sId;
                })
                .join(", ");

              const waMessage = encodeURIComponent(
                `مرحباً أ/ ${b.patientName}، نتواصل معك من عيادات يوتوبيا لطب الأسنان بالدقي بخصوص طلب الحجز رقم #${b.id.slice(-6)}.`
              );

              return (
                <article
                  key={b.id}
                  className="rounded-2xl border border-[#C2A06A]/20 bg-white p-5 md:p-6 shadow-xs hover:border-[#C2A06A]/50 transition-all"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#C2A06A]">
                          #{b.id.slice(-6)}
                        </span>
                        <span className="text-[11px] text-[#16372F]/50">
                          {new Date(b.createdAt).toLocaleDateString()}
                        </span>
                        {b.isChild && (
                          <span className="rounded-full bg-[#D98E73]/20 px-2 py-0.5 text-[10px] font-bold text-[#D98E73]">
                            {isAr ? "طفل 👶" : "Child 👶"}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-2 font-display text-lg font-bold text-[#0E1F1C]">
                        {b.patientName}
                      </h3>

                      <p className="text-xs text-[#16372F]/70 mt-1">
                        <span className="font-bold text-[#0E1F1C]">{isAr ? "الخدمات:" : "Services:"}</span>{" "}
                        {serviceNames || (isAr ? "استشارة عامة" : "General consultation")}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#16372F]/80">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#C2A06A]" />
                          <span>{b.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#C2A06A]" />
                          <span>
                            {b.timeWindow === "afternoon"
                              ? isAr
                                ? "مسائي (٢-٦)"
                                : "Afternoon (2-6)"
                              : isAr
                              ? "سهرة (٦-١٠)"
                              : "Evening (6-10)"}
                          </span>
                        </div>
                        {b.doctorId && (
                          <div className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-[#C2A06A]" />
                            <span>{b.doctorId}</span>
                          </div>
                        )}
                      </div>

                      {b.notes && (
                        <p className="mt-3 rounded-lg bg-[#FBF9F4] p-3 text-xs text-[#16372F]/80 border border-[#C2A06A]/10">
                          <span className="font-bold">{isAr ? "ملاحظة المريض:" : "Note:"}</span> {b.notes}
                        </p>
                      )}
                    </div>

                    {/* Actions and Status */}
                    <div className="flex flex-col items-end gap-3">
                      <div className="flex items-center gap-2">
                        <label className="text-[11px] font-bold text-[#16372F]/60">
                          {isAr ? "الحالة:" : "Status:"}
                        </label>
                        <select
                          value={b.status}
                          onChange={(e) =>
                            updateStatusMutation.mutate({
                              id: b.id,
                              status: e.target.value as BookingRequest["status"],
                            })
                          }
                          className="rounded-lg border border-[#C2A06A]/30 bg-[#FBF9F4] px-2.5 py-1 text-xs font-bold text-[#0E1F1C] focus:outline-none"
                        >
                          <option value="new">{isAr ? "جديد (New)" : "New"}</option>
                          <option value="contacted">{isAr ? "تم التواصل (Contacted)" : "Contacted"}</option>
                          <option value="confirmed">{isAr ? "مؤكد (Confirmed)" : "Confirmed"}</option>
                          <option value="cancelled">{isAr ? "ملغي (Cancelled)" : "Cancelled"}</option>
                        </select>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${b.phone}`}
                          className="p-2 rounded-lg bg-[#F6F1E7] text-[#16372F] hover:bg-[#C2A06A] hover:text-white transition-colors"
                          title={b.phone}
                        >
                          <Phone className="w-4 h-4" />
                        </a>

                        <a
                          href={`https://wa.me/${b.phone.replace(/[^0-9]/g, "")}?text=${waMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
                          title="WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>

                        <button
                          onClick={() => {
                            if (window.confirm(isAr ? "هل تريد حذف هذا الطلب؟" : "Delete this request?")) {
                              deleteMutation.mutate(b.id);
                            }
                          }}
                          className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
