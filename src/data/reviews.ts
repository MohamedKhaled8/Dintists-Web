import type { Review } from "./types";

export const reviewsData: Review[] = [
  {
    id: "rev-1",
    author: { ar: "م. أحمد عثمان", en: "Eng. Ahmed Othman" },
    treatment: { ar: "زراعة أسنان", en: "Dental Implants" },
    text: {
      ar: "عيادة نموذجية في شارع محيي الدين أبو العز بالدقي. الدكتور شرح لي خطوات الزراعة بالتفصيل، والإجراء تم بأعلى درجات الراحة وبدون ألم. نظافة وتعقيم واهتمام بالمواعيد.",
      en: "An exemplary clinic in Mohy El-Din Abu El-Ezz, Dokki. The specialist mapped out the implant steps clearly with total comfort and zero pain. 100% sterile and punctual.",
    },
    stars: 5,
    date: { ar: "منذ أسبوعين", en: "2 weeks ago" },
    isSample: true, // [Sample flagged]
  },
  {
    id: "rev-2",
    author: { ar: "د. هبة عبد المنعم", en: "Dr. Heba Abdelmonem" },
    treatment: { ar: "عدسات الفينيرز والابتسامة", en: "Veneers & Smile Design" },
    text: {
      ar: "التناسق واللون للأسنان الأمامية طبيعي جداً ومبهر بدون أي مبالغة. تعامل راقٍ واحترام تام لوقت المريض وشرح وافٍ لكل التفاصيل. أنصح بها بشدة في الدقي.",
      en: "The shade and symmetry of the front veneers look remarkably natural. Highly courteous team and absolute respect for appointment timings. Strongly recommended in Dokki.",
    },
    stars: 5,
    date: { ar: "منذ شهر", en: "1 month ago" },
    isSample: true, // [Sample flagged]
  },
  {
    id: "rev-3",
    author: { ar: "أ. طارق عبد الوهاب", en: "Tarek Abdelwahab" },
    treatment: { ar: "طب أسنان الأطفال", en: "Pediatric Dentistry" },
    text: {
      ar: "أول زيارة لابني لطبيب أسنان دون أي خوف أو بكاء. أسلوب دكتور الأطفال هادئ ومطمئن جداً جعل التجربة إيجابية ومحفزة للطفل بدلاً من التوتر.",
      en: "My son's first dental visit with zero fear or tears. The pediatric specialist's gentle, reassuring demeanor turned a nerve-wracking visit into a truly positive milestone.",
    },
    stars: 5,
    date: { ar: "منذ شهرين", en: "2 months ago" },
    isSample: true, // [Sample flagged]
  },
  {
    id: "rev-4",
    author: { ar: "سارة الجوهري", en: "Sarah El-Gohary" },
    treatment: { ar: "تنظيف وتلميع الأسنان", en: "Scaling & Polishing" },
    text: {
      ar: "جلسة تنظيف الأسنان كانت دقيقة ومريحة جداً. أسلوب التمريض والاستقبال محترم ومحترف، واستمتعت بإطلالة العيادة الهادئة في الطابق التاسع بالدقي.",
      en: "The dental scaling was remarkably thorough and comfortable. The reception and nursing team are very professional, with a serene 9th-floor clinic ambiance.",
    },
    stars: 5,
    date: { ar: "منذ شهرين", en: "2 months ago" },
    isSample: true, // [Sample flagged]
  },
  {
    id: "rev-5",
    author: { ar: "كريم رضوان", en: "Karim Radwan" },
    treatment: { ar: "علاج الجذور والتركيبات", en: "Root Canal & Zirconia Crown" },
    text: {
      ar: "كنت أعاني من ألم شديد بالضرس، تم علاج العصب في جلستين بدون أي انزعاج وتركيب تاج زيركون مطابق تماماً لأسنان الطبيعية. اهتمام ومتابعة بعد العلاج.",
      en: "Arrived with severe toothache; the root canal was completed smoothly in two visits with a Zirconia crown matching my adjacent molars. Attentive post-care follow-up.",
    },
    stars: 5,
    date: { ar: "منذ ٣ أشهر", en: "3 months ago" },
    isSample: true, // [Sample flagged]
  },
  {
    id: "rev-6",
    author: { ar: "ميادة الشافعي", en: "Mayada El-Shafei" },
    treatment: { ar: "تقويم الأسنان", en: "Orthodontics" },
    text: {
      ar: "أتابع مع دكتور التقويم منذ ٨ أشهر، والفرق في تراجع التزاحم واضح جداً ومرضي. أهم ميزة هي الالتزام الصارم بمواعيد الحجز وشرح تطور الحالة في كل زيارة.",
      en: "Under orthodontic care for 8 months now; the crowding correction has been noticeable and reassuring. Punctual scheduling and clear monthly progress updates.",
    },
    stars: 5,
    date: { ar: "منذ ٤ أشهر", en: "4 months ago" },
    isSample: true, // [Sample flagged]
  },
];
