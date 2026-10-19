import { createFileRoute } from "@tanstack/react-router";
import { OrisDentalTemplate } from "@/components/OrisDentalTemplate";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Utopia Dental Clinics — Calm, Specialist Care in Dokki | عيادات يوتوبيا",
      },
      {
        name: "description",
        content:
          "Specialist dental care in Dokki, Giza: 3D guided implants, clear aligners, pediatric dentistry, and veneers on the 9th floor of 116 Mohy El-Din Abu El-Ezz. Call 01117655583.",
      },
      {
        property: "og:title",
        content: "Utopia Dental Clinics Dokki | عيادات يوتوبيا للأسنان",
      },
      {
        property: "og:description",
        content:
          "Gentle, personalized dental care with 3D CBCT digital planning, guided implants, and certified consultants in Dokki.",
      },
    ],
  }),
  component: OrisDentalTemplate,
});
