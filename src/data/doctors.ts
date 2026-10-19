import type { Doctor } from "./types";

export const doctorsData: Doctor[] = [
  {
    id: "ahmed-karam",
    slug: "dr-ahmed-karam",
    name: {
      ar: "د. أحمد كرم",
      en: "Dr. Ahmed Karam",
    },
    role: {
      ar: "مدير العيادة واستشاري طب الأسنان",
      en: "Clinic Director & Dental Consultant",
    },
    specialty: {
      ar: "إدارة الرعاية السريرية والعلاج الشامل",
      en: "Clinical Governance & Comprehensive Dental Care",
    },
    bio: {
      ar: "يشرف د. أحمد كرم على المسار العلاجي وتنسيق الرعاية متعددة التخصصات داخل عيادات يوتوبيا بالدقي، مع التركيز على راحة المراجع وتكامل التشخيص بين الأطباء.",
      en: "Dr. Ahmed Karam oversees clinical governance and multidisciplinary coordination at Utopia Clinics Dokki, focusing on calm patient journeys and integrated treatment planning.",
    },
    credentials: [
      { ar: "استشاري طب وجراحة الفم والأسنان", en: "Consultant in Oral & Dental Medicine" },
      { ar: "مدير الفريق الطبي في عيادات يوتوبيا", en: "Clinical Director, Utopia Dental Clinics" },
    ],
    services: ["scaling-polishing", "dental-fillings"],
    photoUrl: null,
    initials: { ar: "أ ك", en: "AK" },
    visible: true,
    needsConfirmation: false,
  },
  {
    id: "amr-adel",
    slug: "dr-amr-adel",
    name: {
      ar: "د. عمرو عادل",
      en: "Dr. Amr Adel",
    },
    role: {
      ar: "أخصائي زراعة الأسنان وجراحة الفم",
      en: "Dental Implants & Oral Surgery Specialist",
    },
    specialty: {
      ar: "زراعة الأسنان، زراعة العظم، والجراحة الموجهة",
      en: "Dental Implantology, Bone Augmentation & Guided Surgery",
    },
    bio: {
      ar: "متخصص في إجراءات زراعة الأسنان الثابتة وتعويض الفقد الجزئي والكامل باستخدام التوجيه الحاسوبي ثلاثي الأبعاد لضمان أعلى نسب النجاح البيولوجي.",
      en: "Specializing in fixed dental implant solutions and 3D computer-guided placement for lasting osseointegration and natural tissue contours.",
    },
    credentials: [
      { ar: "ماجستير جراحة الفم وزراعة الأسنان", en: "MSc in Oral Surgery & Dental Implantology" },
      { ar: "عضو الجمعية الدولية لزراعة الأسنان (ITI)", en: "Member, International Team for Implantology (ITI)" },
    ],
    services: ["dental-implants", "fixed-prosthesis"],
    photoUrl: null,
    initials: { ar: "ع ع", en: "AA" },
    visible: true,
    needsConfirmation: false,
  },
  {
    id: "ahmed-hany",
    slug: "dr-ahmed-hany",
    name: {
      ar: "د. أحمد هاني",
      en: "Dr. Ahmed Hany",
    },
    role: {
      ar: "أخصائي زراعة الأسنان وجراحة الفم",
      en: "Dental Implants & Oral Surgery Specialist",
    },
    specialty: {
      ar: "زراعة الأسنان المتقدمة والتركيبات المثبتة",
      en: "Advanced Implantology & Implant-Supported Restorations",
    },
    bio: {
      ar: "يركز د. أحمد هاني على الدقة التشريحية في زراعة الأسنان وإعادة بناء العظم، مع الشرح الواضح لكل خطوة علاجية للمراجع قبل البدء.",
      en: "Dedicated to anatomical precision in implant placement and guided bone regeneration, ensuring clear patient communication at every step.",
    },
    credentials: [
      { ar: "أخصائي جراحة الفم والوجه والفكين وزراعة الأسنان", en: "Specialist in Oral Surgery & Implantology" },
      { ar: "خبرة متخصصة في الأشعة المقطعية ثلاثية الأبعاد CBCT", en: "Certified in 3D CBCT Diagnostic Surgical Planning" },
    ],
    services: ["dental-implants", "fixed-prosthesis"],
    photoUrl: null,
    initials: { ar: "أ هـ", en: "AH" },
    visible: true,
    needsConfirmation: false,
  },
  {
    id: "sherif-fathy",
    slug: "dr-sherif-fathy",
    name: {
      ar: "د. شريف فتحي",
      en: "Dr. Sherif Fathy",
    },
    role: {
      ar: "أخصائي تقويم الأسنان وتعديل الإطباق",
      en: "Orthodontics Specialist",
    },
    specialty: {
      ar: "تقويم الأسنان الثابت والشفاف وتعديل الإطباق",
      en: "Fixed Braces, Clear Aligners & Occlusal Rehabilitation",
    },
    bio: {
      ar: "يصمم خطط تقويم الأسنان للمراهقين والبالغين لتحسين تناسق الابتسامة ومحاذاة الأسنان وتوازن العضة الوظيفية برعاية دورية منتظمة.",
      en: "Designs tailored orthodontic plans for teens and adults to enhance smile harmony, dental alignment, and healthy masticatory balance.",
    },
    credentials: [
      { ar: "ماجستير تقويم الأسنان وتعديل الفكين", en: "MSc in Orthodontics & Dentofacial Orthopedics" },
      { ar: "عضو الجمعية المصرية لتقويم الأسنان (EOS)", en: "Member, Egyptian Orthodontic Society" },
    ],
    services: ["orthodontics"],
    photoUrl: null,
    initials: { ar: "ش ف", en: "SF" },
    visible: true,
    needsConfirmation: false,
  },
  {
    id: "omar-makhlouf",
    slug: "dr-omar-makhlouf",
    name: {
      ar: "د. عمر مخلوف",
      en: "Dr. Omar Makhlouf",
    },
    role: {
      ar: "أخصائي طب أسنان الأطفال",
      en: "Pediatric Dentistry Specialist",
    },
    specialty: {
      ar: "رعاية أسنان الأطفال والوقاية المبكرة وإزالة القلق",
      en: "Pediatric Oral Health, Preventive Care & Behavioral Guidance",
    },
    bio: {
      ar: "يتميز د. عمر مخلوف بأسلوب هادئ ومطمئن يحول زيارة طبيب الأسنان إلى تجربة ممتعة للأطفال، مع التركيز على الوقاية المبكرة ومتابعة تبديل الأسنان.",
      en: "Known for a gentle, reassuring approach that turns dental appointments into a joyful, fear-free milestone for children and their parents.",
    },
    credentials: [
      { ar: "ماجستير طب أسنان الأطفال وصحة الفم", en: "MSc in Pediatric Dentistry" },
      { ar: "تدريب متخصص في إدارة سلوك الطفل والتخدير الآمن", en: "Specialized in Pediatric Behavioral Comfort & Conscious Sedation" },
    ],
    services: ["pediatric-dentistry", "general-anesthesia"],
    photoUrl: null,
    initials: { ar: "ع م", en: "OM" },
    visible: true,
    needsConfirmation: false,
  },

  // Unconfirmed doctors seen only in third-party directories (NOT rendered by default)
  {
    id: "baraa-hafez",
    slug: "dr-baraa-hafez",
    name: {
      ar: "د. براء حافظ",
      en: "Dr. Baraa Hafez",
    },
    role: {
      ar: "علاج الجذور والحشوات التجميلية [بانتظار التأكيد]",
      en: "Root Canal & Cosmetic Fillings [CONFIRM]",
    },
    specialty: {
      ar: "علاج العصب والحشوات",
      en: "Endodontics & Restorative Dentistry",
    },
    bio: {
      ar: "طبيب مذكور في أدلة خارجية غير رسمية — بانتظار التأكيد من إدارة العيادة.",
      en: "Listed in third-party directory — pending verification with clinic management.",
    },
    credentials: [],
    services: ["root-canal", "dental-fillings"],
    photoUrl: null,
    initials: { ar: "ب ح", en: "BH" },
    visible: false,
    needsConfirmation: true,
  },
  {
    id: "yara-hany",
    slug: "dr-yara-hany",
    name: {
      ar: "د. يارا هاني",
      en: "Dr. Yara Hany",
    },
    role: {
      ar: "الحشوات التجميلية والفينيرز [بانتظار التأكيد]",
      en: "Cosmetic Fillings & Veneers [CONFIRM]",
    },
    specialty: {
      ar: "تجميل الأسنان والحشوات",
      en: "Aesthetic Dentistry & Veneers",
    },
    bio: {
      ar: "طبيبة مذكورة في أدلة خارجية غير رسمية — بانتظار التأكيد من إدارة العيادة.",
      en: "Listed in third-party directory — pending verification with clinic management.",
    },
    credentials: [],
    services: ["dental-veneers", "dental-fillings"],
    photoUrl: null,
    initials: { ar: "ي هـ", en: "YH" },
    visible: false,
    needsConfirmation: true,
  },
  {
    id: "youssef-nour",
    slug: "dr-youssef-nour-eldin",
    name: {
      ar: "د. يوسف نور الدين",
      en: "Dr. Youssef Nour El-Din",
    },
    role: {
      ar: "التركيبات المتحركة [بانتظار التأكيد]",
      en: "Removable Prosthetics [CONFIRM]",
    },
    specialty: {
      ar: "التركيبات المتحركة والاستعاضة الصناعية",
      en: "Removable Prosthetics",
    },
    bio: {
      ar: "طبيب مذكور في أدلة خارجية غير رسمية — بانتظار التأكيد من إدارة العيادة.",
      en: "Listed in third-party directory — pending verification with clinic management.",
    },
    credentials: [],
    services: ["fixed-prosthesis"],
    photoUrl: null,
    initials: { ar: "ي ن", en: "YN" },
    visible: false,
    needsConfirmation: true,
  },
];
