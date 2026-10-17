import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Info, MapPin, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { clinic, services, t } from "@/lib/site";
import { ContactList, PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("تواصل واحجز | Contact & Appointments — Utopia, Dokki", "اتصل بعيادات يوتوبيا في الدقي أو راسلنا على واتساب. Contact Utopia Dental Clinics in Dokki, Giza."),
  component: Contact,
});

type Errors = Partial<Record<"name" | "phone" | "service", string>>;

function Contact() {
  const { tr } = useI18n();
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const err: Errors = {};
    const name = String(f.get("name") || "").trim();
    const phone = String(f.get("phone") || "").replace(/[\s-]/g, "");
    if (!name) err.name = tr(t.form.required);
    if (!phone) err.phone = tr(t.form.required);
    else if (!/^\+?\d{8,15}$/.test(phone)) err.phone = tr(t.form.badPhone);
    if (!f.get("service")) err.service = tr(t.form.required);
    setErrors(err);
    if (Object.keys(err).length === 0) setDone(true); // DEMO_MODE: nothing sent or stored
  };

  const Field = ({ id, label, children }: { id: keyof Errors | "date" | "message"; label: string; children: React.ReactNode }) => (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      {children}
      {id in errors && errors[id as keyof Errors] && <p id={`${id}-err`} className="mt-1 text-sm text-destructive">{errors[id as keyof Errors]}</p>}
    </div>
  );

  return (
    <>
      <PageHero title={tr(t.contactTitle)} sub={tr(clinic.hours)} />
      <section className="container-x mt-16 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-8">
          <ContactList />
          <div className="flex flex-wrap gap-3">
            <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary"><MessageCircle className="h-4 w-4" /> {tr(t.whatsapp)}</a>
            <a href={clinic.maps} target="_blank" rel="noopener noreferrer" className="btn-outline"><MapPin className="h-4 w-4" /> {tr(t.map)}</a>
          </div>
        </div>
        <div className="card-lift p-6 md:p-8">
          <h2 className="font-display text-2xl text-primary">{tr(t.form.title)}</h2>
          <p className="mt-3 flex gap-2 rounded-2xl bg-accent/25 p-3 text-sm"><Info className="mt-0.5 h-4 w-4 shrink-0" /> {tr(t.form.demoNote)}</p>
          {done ? (
            <div className="py-10 text-center" role="status">
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
              <p className="mt-4 font-medium">{tr(t.form.success)}</p>
              <button onClick={() => setDone(false)} className="btn-outline mt-6">{tr(t.form.again)}</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field id="name" label={tr(t.form.name)}><input id="name" name="name" className="field" autoComplete="name" aria-invalid={!!errors.name} /></Field>
              <Field id="phone" label={tr(t.form.phone)}><input id="phone" name="phone" type="tel" dir="ltr" className="field" autoComplete="tel" aria-invalid={!!errors.phone} /></Field>
              <div className="sm:col-span-2">
                <Field id="service" label={tr(t.form.service)}>
                  <select id="service" name="service" className="field" defaultValue="" aria-invalid={!!errors.service}>
                    <option value="" disabled>{tr(t.form.choose)}</option>
                    {services.map((s) => <option key={s.slug} value={s.slug}>{tr(s.name)}</option>)}
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2"><Field id="date" label={tr(t.form.date)}><input id="date" name="date" type="datetime-local" className="field" /></Field></div>
              <div className="sm:col-span-2"><Field id="message" label={tr(t.form.message)}><textarea id="message" name="message" rows={4} className="field" /></Field></div>
              <button type="submit" className="btn-primary sm:col-span-2">{tr(t.form.submit)}</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
