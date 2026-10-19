# Utopia Dental Clinics — Pixel-Faithful Build of Reference Design (Dokki, Giza)

A bilingual (Arabic RTL default + English LTR) pixel-faithful implementation of the reference dental care design for **Utopia Dental Clinics** (عيادات يوتوبيا لطب وتجميل وزراعة الأسنان), Dokki, Giza, Egypt.

### Visual Spec & Design Tokens
- `--primary`: Royal Blue `#0B4FC7` (buttons, icons, accents, hero headline second line)
- `--navy`: `#0B1B3A` (headings, body copy, footer bar)
- `--tint`: `#EEF4FB` (light blue band behind Doctors and Contact sections)
- `--card`: `#FFFFFF` with 1px border `#E3EAF3`, radius 10–12px, subtle shadow
- Typography: Clean geometric sans (`Inter` for English; `IBM Plex Sans Arabic` & `Tajawal` for Arabic).
- Original Utopia Logo: Vector tooth-and-arch outline mark in `#0B4FC7` + navy wordmark + blue caption.

---

## 1. Quick Start

```bash
bun install  # or npm install
bun run dev  # or npm run dev
```

---

## 2. Swappable Data Architecture (`/src/data/` & `/src/lib/repository.ts`)

All content is cleanly decoupled from UI components:
- `clinic.ts`: Clinic metadata (Dokki address, phone `01117655583`, hours, Google rating 4.9 / 164 reviews [CONFIRM]).
- `doctors.ts`: Confirmed medical team with monogram initials + hidden unconfirmed records (`visible: false, needsConfirmation: true`).
- `services.ts`: All 10 specialized dental services with educational overviews, what to expect, and FAQs.
- `reviews.ts`: Realistic sample patient reviews (`isSample: true`) linking to Google Maps.
- `gallery.ts`: Demonstration cases (`isSample: true`) for the before/after slider.
- `posts.ts`: 4 educational clinical blog articles.
- `faqs.ts`: General patient FAQs.
- `process.ts`: 5-step visit experience workflow.

All UI components query data exclusively via `@/lib/repository.ts`.

---

## 3. How to Connect Supabase

Currently, `repository.ts` reads from the typed data files and persists booking requests to browser `localStorage`. When you are ready to connect your Supabase database:

1. Install Supabase client:
   ```bash
   bun add @supabase/supabase-js
   ```

2. Add environment variables to `.env.local`:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

3. Initialize client in `src/lib/supabase.ts`:
   ```ts
   import { createClient } from "@supabase/supabase-js";
   export const supabase = createClient(
     import.meta.env.VITE_SUPABASE_URL,
     import.meta.env.VITE_SUPABASE_ANON_KEY
   );
   ```

4. Create the required tables in Supabase:
   - `clinic`
   - `doctors`
   - `services`
   - `reviews`
   - `gallery_cases`
   - `posts`
   - `faqs`
   - `bookings` (with columns: `id`, `created_at`, `service_ids`, `doctor_id`, `date`, `time_window`, `patient_name`, `phone`, `email`, `is_child`, `notes`, `status`)

5. In `src/lib/repository.ts`, uncomment the Supabase query lines inside each function (e.g. `supabase.from('services').select('*')` and `supabase.from('bookings').insert(...)`).

6. Protect the `/admin` portal with Supabase Auth & Row Level Security (RLS) instead of the temporary preview passcode (`utopia2026`).

---

## 4. Key Pages & Features

- **Home (`/`)**: 12 complete sections including 3D Pearl Crown, 10-service horizontal showcase, 5-step visit journey, 3D Smile Journey, doctors monogram directory, before/after slider, Google review highlights, pediatric spotlight, and booking CTA.
- **Services (`/services`, `/services/:slug`)**: All 10 specialized clinical services with complete educational overviews, steps, and FAQs.
- **Doctors (`/doctors`, `/doctors/:slug`)**: Clinical profiles with monogram initials and related services.
- **Gallery (`/gallery`)**: Category-filtered before/after transformation slider with sample data flags.
- **Reviews (`/reviews`)**: Dokki patient themes, 4.9 rating summary, and link to Google Maps.
- **Blog (`/blog`, `/blog/:slug`)**: 4 educational oral health guides.
- **Book (`/book`)**: Multi-step booking request with Egyptian phone validation, `.ics` calendar export, and WhatsApp prefill.
- **Admin (`/admin`)**: Passcode-gated bookings dashboard (`utopia2026`) for managing request statuses.
- **Contact (`/contact`)**: Dokki clinic details, working hours, and embedded Google Map.
- **Terms & Privacy (`/terms`, `/privacy`)**: Clinical disclaimers and patient confidentiality notices.
