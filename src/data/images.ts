export type ImageStatus = "placeholder" | "licensed" | "clinic-approved";

export interface ImageSlot {
  src: string;
  alt: { ar: string; en: string };
  source: string;
  license: string;
  status: ImageStatus;
}

export const imagesData: Record<string, ImageSlot> = {
  heroBackground: {
    src: "/images/hero_dental_clinic.jpg",
    alt: {
      ar: "عيادة أسنان حديثة ومجهزة في الدقي مع طبيب ومريضة في بيئة علاجية مريحة",
      en: "Bright modern dental clinic in Dokki with dentist and patient in a calm atmosphere",
    },
    source: "Antigravity AI Medical Atmosphere Generator",
    license: "Commercial Use",
    status: "placeholder",
  },
  clinicInteriorPlaceholder: {
    src: "/images/hero_dental_clinic.jpg",
    alt: {
      ar: "تصميم داخلي معقم لغرفة علاج الأسنان",
      en: "Sterile modern dental clinic treatment operatory",
    },
    source: "Utopia Dokki Interior Slot",
    license: "Clinic Proprietary",
    status: "clinic-approved",
  },
};
