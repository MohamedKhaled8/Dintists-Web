import type { GalleryCase } from "./types";

export const galleryData: GalleryCase[] = [
  {
    id: "case-veneers-emax",
    category: "veneers",
    title: {
      ar: "عدسات الإيماكس التجميلية للأسنان الأمامية",
      en: "Minimal-Prep E-max Front Porcelain Veneers",
    },
    description: {
      ar: "حالة معالجة لتفاوت أطوال وتصبغات الأسنان الأمامية باستخدام ٨ عدسات إيماكس ألمانية عالية الشفافية.",
      en: "Restoration of anterior asymmetry and intrinsic discoloration using 8 German high-translucency E-max veneers.",
    },
    beforeLabel: { ar: "تصبغات حادة وعدم تناسق في الحواف", en: "Uneven margins & intrinsic discoloration" },
    afterLabel: { ar: "تناسق لوني وشكلي طبيعي (درجة Vita BL2)", en: "Natural harmony & shade (Vita BL2)" },
    duration: { ar: "جلستان خلال ٧ أيام", en: "2 visits within 7 days" },
    material: { ar: "خزف E-max الألماني المعتمد", en: "Certified German E-max Ceramic" },
    isSample: true, // [Sample flagged]
  },
  {
    id: "case-implant-single",
    category: "implants",
    title: {
      ar: "زراعة سن أمامي مفرد مع تاج زيركونيا مخصص",
      en: "Single Anterior Dental Implant & Custom Zirconia Crown",
    },
    description: {
      ar: "تعويض دائم لسن أمامي مفقود إثر صدمة سابقة، باستخدام زرعة تيتانيوم موجهة ثلاثية الأبعاد وتاج زيركونيا.",
      en: "Permanent replacement of a lost front tooth following trauma using 3D guided titanium implant and zirconia crown.",
    },
    beforeLabel: { ar: "فقدان القاطع الأمامي وانكماش طفيف", en: "Missing central incisor & localized gap" },
    afterLabel: { ar: "اندماج عظمي ممتاز وتطابق لوني ١٠٠٪", en: "Solid osseointegration & 100% shade match" },
    duration: { ar: "مرحلتان (خلال ٤ أشهر)", en: "2 stages over 4 months" },
    material: { ar: "تيتانيوم طبي درجة 5 وتاج زيركونيا", en: "Grade 5 Titanium & Katana Zirconia" },
    isSample: true, // [Sample flagged]
  },
  {
    id: "case-ortho-crowding",
    category: "orthodontics",
    title: {
      ar: "علاج التزاحم الشديد وتعديل العضة العميقة",
      en: "Severe Crowding Correction & Deep Bite Realignment",
    },
    description: {
      ar: "إعادة ترتيب اصطفاف الأسنان العلوية والسفلية دون الحاجة لخلع دائم، مع تحسين إطباق الفكين.",
      en: "Non-extraction orthodontic realignment correcting lower anterior crowding and leveling the occlusal plane.",
    },
    beforeLabel: { ar: "تزاحم حاد في الفك السفلي وعضة عميقة", en: "Severe lower anterior crowding & deep bite" },
    afterLabel: { ar: "اصطفاف مثالي للأسنان وعضة مستقرة", en: "Ideal Class I alignment & stable occlusion" },
    duration: { ar: "١٤ شهراً مع متابعة شهرية", en: "14 months with monthly adjustments" },
    material: { ar: "تقويم دقيق ومثبت شفاف دائم", en: "Precision brackets & clear retainers" },
    isSample: true, // [Sample flagged]
  },
  {
    id: "case-restoration-molar",
    category: "restorations",
    title: {
      ar: "إعادة بناء ضرس خلفي متهالك بتاج زيركونيا متكامل",
      en: "Full Posterior Molar Rehabilitation with Zirconia Crown",
    },
    description: {
      ar: "ترميم ضرس خلفي تعرض لتسوس عميق بعد علاج العصب، باستخدام تاج زيركون مصمم بتقنية CAD/CAM.",
      en: "Rebuilding a broken posterior molar following endodontic treatment with CAD/CAM milled monolithic zirconia.",
    },
    beforeLabel: { ar: "كسر جدار الضرس وتلف الحشوة القديمة", en: "Fractured cusp & leaking failed filling" },
    afterLabel: { ar: "تاج زيركونيا مقاوم لقوى المضغ الشديدة", en: "Reinforced anatomical monolithic zirconia crown" },
    duration: { ar: "جلستان (أسبوع واحد)", en: "2 visits (1 week)" },
    material: { ar: "زيركونيا يابانية متجانسة الصلابة", en: "Monolithic High-Strength Zirconia" },
    isSample: true, // [Sample flagged]
  },
  {
    id: "case-scaling-polishing",
    category: "scaling",
    title: {
      ar: "إزالة الجير العميق والتصبغات واستعادة صحة اللثة",
      en: "Deep Scaling & Stain Removal for Gingival Health",
    },
    description: {
      ar: "تنظيف احترافي بالموجات فوق الصوتية وتلميع لإزالة رواسب النيكوتين وتكلسات الجير حول أعناق الأسنان.",
      en: "Ultrasonic calculus debridement and fine air-polishing clearing heavy nicotine deposits and tartar buildup.",
    },
    beforeLabel: { ar: "ترسبات جيرية داكنة والتهاب لثوي", en: "Subgingival calculus & marginal erythema" },
    afterLabel: { ar: "لثة وردية سليمة وأسطح ملساء نظيفة", en: "Firm pink gingiva & polished clean enamel" },
    duration: { ar: "جلسة واحدة (٤٥ دقيقة)", en: "1 session (45 minutes)" },
    material: { ar: "معجون تلميع طبي وموجات صوتية", en: "Medical Polishing Paste & Ultrasonic Scaler" },
    isSample: true, // [Sample flagged]
  },
];
