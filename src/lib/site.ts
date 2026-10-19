// Centralized, editable content. Everything here requires clinic confirmation before launch.
export const DEMO_MODE = true;

export type Lang = "ar" | "en";
export type L = { ar: string; en: string };

export const clinic = {
  name: { ar: "عيادات يوتوبيا لطب وتجميل وزراعة الأسنان", en: "Utopia Dental Clinics" } as L,
  short: { ar: "يوتوبيا", en: "Utopia" } as L,
  phone: "01117655583",
  phoneIntl: "+20 111 765 5583",
  tel: "tel:+201117655583",
  whatsapp: "https://wa.me/201117655583",
  email: "utopiadental2023@gmail.com",
  address: {
    ar: "116 شارع محيي الدين أبو العز، الطابق التاسع، الدقي، الجيزة، مصر.",
    en: "116 Mohi El Din Abou El Ezz Street, 9th Floor, Dokki, Giza, Egypt.",
  } as L,
  hours: { ar: "يوميًا، من 2:00 م حتى 10:00 م", en: "Daily, 2:00 PM – 10:00 PM" } as L,
  maps: "https://maps.app.goo.gl/xLv9aDGJTvHRCSya7",
  website: "https://utopiadent.com/",
};

export type Service = {
  slug: string;
  icon: string;
  name: L;
  intro: L;
  body: L;
  points: { ar: string[]; en: string[] };
  note?: L;
};

export const services: Service[] = [
  {
    slug: "dental-implants",
    icon: "Anchor",
    name: { ar: "زراعة الأسنان", en: "Dental Implants" },
    intro: {
      ar: "حل ثابت لتعويض الأسنان المفقودة في الدقي.",
      en: "A fixed option for replacing missing teeth, in Dokki.",
    },
    body: {
      ar: "الزرعة دعامة صغيرة توضع في عظم الفك لتحمل سنًا أو جسرًا. يبدأ الأمر بفحص وتقييم لحالة العظم واللثة لتحديد مدى ملاءمة الزراعة لك.",
      en: "An implant is a small post placed in the jawbone to support a crown or bridge. It starts with an examination of bone and gum health to see whether implants suit you.",
    },
    points: {
      ar: ["فحص وتقييم مبدئي", "خطة علاج يشرحها الطبيب", "متابعة بعد التركيب"],
      en: [
        "Initial assessment",
        "A treatment plan explained by your dentist",
        "Follow-up after placement",
      ],
    },
  },
  {
    slug: "scaling-polishing",
    icon: "Sparkles",
    name: { ar: "تنظيف وتلميع الأسنان", en: "Scaling and Polishing" },
    intro: {
      ar: "إزالة الجير والتصبغات للحفاظ على صحة اللثة.",
      en: "Removing tartar and stains to keep gums healthy.",
    },
    body: {
      ar: "جلسة تنظيف احترافية تزيل الجير المتراكم الذي لا تزيله الفرشاة، يليها تلميع لسطح الأسنان، مع نصائح للعناية اليومية.",
      en: "A professional cleaning removes hardened tartar your brush can't reach, followed by polishing and practical home-care advice.",
    },
    points: {
      ar: ["إزالة الجير", "تلميع السطح", "نصائح للعناية المنزلية"],
      en: ["Tartar removal", "Surface polishing", "Home-care guidance"],
    },
  },
  {
    slug: "pediatric-dentistry",
    icon: "Baby",
    name: { ar: "طب أسنان الأطفال", en: "Pediatric Dentistry" },
    intro: {
      ar: "رعاية هادئة ومطمئنة لأسنان أطفالك.",
      en: "Calm, reassuring care for your child's teeth.",
    },
    body: {
      ar: "نهتم بأن تكون زيارة الطفل تجربة مريحة، مع فحص دوري ووقاية وعلاج مناسب لعمره، وإرشاد للوالدين.",
      en: "We aim to make each visit comfortable for children, with check-ups, prevention and age-appropriate treatment, plus guidance for parents.",
    },
    points: {
      ar: ["فحص دوري", "إجراءات وقائية", "إرشاد للوالدين"],
      en: ["Regular check-ups", "Preventive care", "Guidance for parents"],
    },
  },
  {
    slug: "gum-treatment",
    icon: "HeartPulse",
    name: { ar: "علاج اللثة", en: "Gum Treatment" },
    intro: {
      ar: "تشخيص وعلاج التهابات ونزيف اللثة.",
      en: "Assessing and treating gum inflammation and bleeding.",
    },
    body: {
      ar: "نزيف اللثة أو تورمها قد يكون علامة على التهاب يحتاج متابعة. يحدد الطبيب بعد الفحص الخطة المناسبة لحالتك.",
      en: "Bleeding or swollen gums can signal inflammation that needs attention. After an exam, your dentist recommends the right plan for you.",
    },
    points: {
      ar: ["فحص اللثة", "تنظيف عميق عند الحاجة", "متابعة دورية"],
      en: ["Gum examination", "Deep cleaning when needed", "Regular follow-up"],
    },
  },
  {
    slug: "orthodontics",
    icon: "AlignCenter",
    name: { ar: "تقويم الأسنان", en: "Orthodontics" },
    intro: {
      ar: "تقويم الأسنان لتحسين الانتظام والإطباق.",
      en: "Straightening teeth and improving the bite.",
    },
    body: {
      ar: "يساعد التقويم في تحسين انتظام الأسنان والإطباق. يناقش أخصائي التقويم معك الخيارات المتاحة ومدة العلاج المتوقعة بعد التقييم.",
      en: "Orthodontic treatment helps align teeth and improve the bite. After an assessment, the orthodontist discusses available options and expected timelines.",
    },
    points: {
      ar: ["تقييم الإطباق", "مناقشة الخيارات", "زيارات متابعة منتظمة"],
      en: ["Bite assessment", "Discussion of options", "Regular adjustment visits"],
    },
  },
  {
    slug: "dental-veneers",
    icon: "Smile",
    name: { ar: "قشور الأسنان التجميلية", en: "Dental Veneers" },
    intro: {
      ar: "طبقات رقيقة لتحسين شكل ولون الأسنان الأمامية.",
      en: "Thin layers that refine the shape and shade of front teeth.",
    },
    body: {
      ar: "القشور طبقات رقيقة تُثبت على السطح الأمامي للأسنان. يتم تحديد مدى ملاءمتها وتصميم الابتسامة بالتشاور مع الطبيب.",
      en: "Veneers are thin shells bonded to the front surface of teeth. Suitability and smile design are decided together with your dentist.",
    },
    points: {
      ar: ["استشارة تجميلية", "اختيار اللون والشكل", "تثبيت ومتابعة"],
      en: ["Cosmetic consultation", "Shade and shape selection", "Bonding and follow-up"],
    },
  },
  {
    slug: "root-canal",
    icon: "Activity",
    name: { ar: "علاج جذور الأسنان", en: "Root Canal Treatment" },
    intro: {
      ar: "علاج العصب للحفاظ على السن الطبيعي.",
      en: "Treating the nerve to help save your natural tooth.",
    },
    body: {
      ar: "عند وصول التسوس أو الالتهاب إلى عصب السن، يساعد علاج الجذور في تنظيف القنوات وحشوها للحفاظ على السن قدر الإمكان.",
      en: "When decay or infection reaches the nerve, root canal treatment cleans and seals the canals to help preserve the tooth where possible.",
    },
    points: {
      ar: ["تشخيص بالأشعة", "تنظيف وحشو القنوات", "ترميم السن بعد العلاج"],
      en: ["X-ray diagnosis", "Canal cleaning and sealing", "Restoring the tooth afterwards"],
    },
  },
  {
    slug: "dental-fillings",
    icon: "Circle",
    name: { ar: "حشوات الأسنان", en: "Dental Fillings" },
    intro: {
      ar: "ترميم الأسنان المتسوسة بحشوات بلون السن.",
      en: "Restoring decayed teeth with tooth-coloured fillings.",
    },
    body: {
      ar: "تُزال المنطقة المتسوسة ويُرمم السن بحشوة مناسبة. يوضح الطبيب نوع الحشو الأنسب لحالتك.",
      en: "The decayed area is removed and the tooth restored with a suitable filling. Your dentist explains which filling type fits your case.",
    },
    points: {
      ar: ["إزالة التسوس", "حشو بلون السن", "ضبط الإطباق"],
      en: ["Decay removal", "Tooth-coloured filling", "Bite adjustment"],
    },
    note: {
      ar: "تقنيات الحشو بالليزر تحتاج إلى تأكيد من العيادة.",
      en: "Laser filling technology requires clinic confirmation.",
    },
  },
  {
    slug: "fixed-prosthesis",
    icon: "Crown",
    name: { ar: "التركيبات الثابتة (زيركونيا و E.max)", en: "Fixed Prosthesis — Zirconia & E.max" },
    intro: {
      ar: "تيجان وجسور ثابتة بخامات مثل الزيركونيا و E.max.",
      en: "Fixed crowns and bridges in materials like Zirconia and E.max.",
    },
    body: {
      ar: "تعيد التركيبات الثابتة شكل ووظيفة الأسنان المتضررة أو المفقودة. يختار الطبيب الخامة المناسبة حسب موضع السن واحتياجك.",
      en: "Fixed restorations rebuild the form and function of damaged or missing teeth. Your dentist recommends a material based on the tooth's position and your needs.",
    },
    points: {
      ar: ["تيجان", "جسور", "اختيار الخامة المناسبة"],
      en: ["Crowns", "Bridges", "Material selection"],
    },
  },
  {
    slug: "general-anesthesia",
    icon: "Moon",
    name: { ar: "التخدير الكلي لطب الأسنان", en: "General Anesthesia for Dentistry" },
    intro: {
      ar: "خيار لبعض الحالات التي تحتاج علاجًا تحت التخدير الكلي.",
      en: "An option for selected cases that need treatment under general anesthesia.",
    },
    body: {
      ar: "قد يُنصح بالتخدير الكلي لبعض الأطفال أو المرضى في حالات محددة. يتم تقييم كل حالة بشكل فردي قبل اتخاذ القرار.",
      en: "General anesthesia may be recommended for some children or patients in specific situations. Each case is assessed individually first.",
    },
    points: {
      ar: ["تقييم طبي مسبق", "شرح الإجراءات للأسرة", "متابعة بعد العلاج"],
      en: [
        "Prior medical assessment",
        "Clear explanation for families",
        "Post-treatment follow-up",
      ],
    },
    note: {
      ar: "توفر هذه الخدمة حاليًا يحتاج إلى تأكيد من العيادة.",
      en: "Current availability of this service requires clinic confirmation.",
    },
  },
];

// Draft-only services — NOT published until confirmed.
export const draftServices = ["Teeth whitening", "Oral surgery", "Removable dentures"];

export type Doctor = { id: string; name: L; role: L; services: string[]; photo?: string };
export const doctors: Doctor[] = [
  {
    id: "ahmed-karam",
    name: { ar: "د. أحمد كرم", en: "Dr. Ahmed Karam" },
    role: { ar: "مدير العيادة", en: "Clinic Manager" },
    services: [],
  },
  {
    id: "amr-adel",
    name: { ar: "د. عمرو عادل", en: "Dr. Amr Adel" },
    role: {
      ar: "أخصائي زراعة الأسنان وجراحة الفم",
      en: "Dental Implant & Oral Surgery Specialist",
    },
    services: ["dental-implants"],
    photo: "/src/assets/doctor-consultant.jpg",
  },
  {
    id: "ahmed-hany",
    name: { ar: "د. أحمد هاني", en: "Dr. Ahmed Hany" },
    role: {
      ar: "أخصائي زراعة الأسنان وجراحة الفم",
      en: "Dental Implant & Oral Surgery Specialist",
    },
    services: ["dental-implants"],
    photo: "/src/assets/doctor-consultant.jpg",
  },
  {
    id: "sherif-fathy",
    name: { ar: "د. شريف فتحي", en: "Dr. Sherif Fathy" },
    role: { ar: "أخصائي تقويم الأسنان", en: "Orthodontics Specialist" },
    services: ["orthodontics"],
  },
  {
    id: "omar-makhlouf",
    name: { ar: "د. عمر مخلوف", en: "Dr. Omar Makhlouf" },
    role: { ar: "أخصائي طب أسنان الأطفال", en: "Pediatric Dentistry Specialist" },
    services: ["pediatric-dentistry"],
    photo: "/src/assets/doctor-female.jpg",
  },
];

export type Post = { slug: string; title: L; excerpt: L; body: L };
export const posts: Post[] = [
  {
    slug: "childs-first-dental-visit",
    title: { ar: "زيارة طفلك الأولى لطبيب الأسنان", en: "Your Child's First Dental Visit" },
    excerpt: {
      ar: "كيف تجعل الزيارة الأولى تجربة هادئة ومريحة.",
      en: "How to make the first visit calm and comfortable.",
    },
    body: {
      ar: "تحدث مع طفلك عن الزيارة بلغة بسيطة وإيجابية، واختر وقتًا يكون فيه مرتاحًا. يساعد الفحص المبكر على الوقاية واكتشاف أي مشكلة مبكرًا.",
      en: "Talk about the visit in simple, positive words and choose a time when your child is rested. Early check-ups support prevention and early detection.",
    },
  },
  {
    slug: "understanding-dental-implants",
    title: { ar: "ما الذي يجب أن تعرفه عن زراعة الأسنان", en: "Understanding Dental Implants" },
    excerpt: {
      ar: "نظرة مبسطة على خطوات الزراعة وما يسبقها.",
      en: "A simple overview of the implant journey.",
    },
    body: {
      ar: "تبدأ رحلة الزراعة بالفحص والأشعة لتقييم العظم واللثة، ثم يناقش الطبيب معك الخطة والبدائل. لكل حالة ظروفها الخاصة.",
      en: "The journey begins with an examination and X-rays to assess bone and gums, then your dentist discusses the plan and alternatives. Every case is individual.",
    },
  },
  {
    slug: "daily-oral-hygiene",
    title: { ar: "عادات يومية لصحة الفم", en: "Daily Habits for Oral Health" },
    excerpt: {
      ar: "خطوات بسيطة تحافظ بها على أسنانك ولثتك.",
      en: "Simple steps to protect your teeth and gums.",
    },
    body: {
      ar: "نظّف أسنانك مرتين يوميًا، واستخدم الخيط، وقلل السكريات، وواظب على الفحص الدوري والتنظيف الاحترافي.",
      en: "Brush twice daily, floss, limit sugary snacks, and keep up with regular check-ups and professional cleaning.",
    },
  },
];

export const t = {
  nav: {
    home: { ar: "الرئيسية", en: "Home" },
    about: { ar: "من نحن", en: "About" },
    services: { ar: "الخدمات", en: "Services" },
    doctors: { ar: "الأطباء", en: "Doctors" },
    gallery: { ar: "قبل وبعد", en: "Gallery" },
    reviews: { ar: "الآراء", en: "Reviews" },
    blog: { ar: "المدونة", en: "Blog" },
    contact: { ar: "تواصل معنا", en: "Contact" },
    privacy: { ar: "الخصوصية", en: "Privacy" },
    book: { ar: "احجز موعدًا", en: "Book Appointment" },
  },
  book: { ar: "احجز موعدًا", en: "Book Appointment" },
  call: { ar: "اتصل بنا", en: "Call Us" },
  whatsapp: { ar: "واتساب", en: "WhatsApp" },
  explore: { ar: "استكشف الخدمات", en: "Explore Services" },
  learnMore: { ar: "اعرف المزيد", en: "Learn more" },
  viewAll: { ar: "عرض الكل", en: "View all" },
  demo: {
    ar: "نموذج تصميم مقترح للموقع — بانتظار موافقة العيادة",
    en: "Website Redesign Concept — Pending Clinic Approval",
  },
  heroTitle: {
    ar: "رعاية متكاملة لأسنانك.. وابتسامة تثق بها.",
    en: "Exceptional Dental Care. Confident Smiles.",
  },
  heroSub: {
    ar: "عيادات أسنان في الدقي تقدم الزراعة والتقويم وطب أسنان الأطفال والتجميل في مكان واحد.",
    en: "A dental clinic in Dokki offering implants, orthodontics, pediatric and cosmetic dentistry under one roof.",
  },
  introEyebrow: { ar: "عن العيادة", en: "The clinic" },
  introTitle: {
    ar: "رعاية هادئة، شرح واضح، وفريق متخصص",
    en: "Calm care, clear explanations, a specialist team",
  },
  introBody: {
    ar: "نؤمن بأن الزيارة المريحة تبدأ بالاستماع. يشرح أطباؤنا كل خطوة قبل البدء، لتتخذ قرارك بثقة.",
    en: "We believe a comfortable visit starts with listening. Our dentists explain each step before treatment so you can decide with confidence.",
  },
  servicesTitle: { ar: "خدماتنا العلاجية والتجميلية", en: "Our dental services" },
  doctorsTitle: { ar: "تعرّف على فريقنا", en: "Meet our team" },
  galleryTitle: { ar: "تحولات الابتسامة", en: "Smile transformations" },
  galleryNote: {
    ar: "ستُعرض هنا صور حقيقية فقط بعد موافقة المرضى وإذن العيادة. لا نعرض نتائج مصطنعة.",
    en: "Genuine images will appear here only after patient consent and clinic authorization. No fabricated results.",
  },
  reviewsTitle: { ar: "آراء المرضى", en: "Patient reviews" },
  reviewsBody: {
    ar: "اقرأ تجارب المرضى الحقيقية مباشرة على صفحتنا في خرائط جوجل.",
    en: "Read genuine patient experiences directly on our Google Maps listing.",
  },
  reviewsCta: { ar: "اقرأ التقييمات على جوجل", en: "Read reviews on Google" },
  whyTitle: { ar: "لماذا يوتوبيا", en: "Why Utopia" },
  why: [
    { ar: "عشر خدمات أسنان في مكان واحد", en: "Ten dental services in one place" },
    {
      ar: "أطباء متخصصون في الزراعة والتقويم والأطفال",
      en: "Specialists in implants, orthodontics and pediatrics",
    },
    { ar: "مواعيد يومية من 2 م حتى 10 م", en: "Open daily, 2 PM – 10 PM" },
    { ar: "موقع مركزي في الدقي، الجيزة", en: "Central location in Dokki, Giza" },
  ],
  contactTitle: { ar: "احجز زيارتك", en: "Plan your visit" },
  phone: { ar: "الهاتف", en: "Phone" },
  email: { ar: "البريد الإلكتروني", en: "Email" },
  address: { ar: "العنوان", en: "Address" },
  hours: { ar: "مواعيد العمل", en: "Working hours" },
  map: { ar: "افتح في خرائط جوجل", en: "Open in Google Maps" },
  form: {
    title: { ar: "طلب موعد", en: "Appointment request" },
    name: { ar: "الاسم", en: "Name" },
    phone: { ar: "رقم الهاتف", en: "Phone number" },
    service: { ar: "الخدمة المطلوبة", en: "Preferred service" },
    choose: { ar: "اختر خدمة", en: "Choose a service" },
    date: { ar: "التاريخ والوقت المفضل (اختياري)", en: "Preferred date/time (optional)" },
    message: { ar: "رسالة (اختياري)", en: "Message (optional)" },
    submit: { ar: "إرسال الطلب", en: "Send request" },
    required: { ar: "هذا الحقل مطلوب", en: "This field is required" },
    badPhone: { ar: "أدخل رقم هاتف صحيح", en: "Enter a valid phone number" },
    demoNote: {
      ar: "وضع العرض: لن يتم إرسال أو حفظ أي بيانات، ولا يعتبر الطلب تأكيدًا للموعد. للحجز الفعلي اتصل بنا أو راسلنا على واتساب.",
      en: "Demo mode: nothing is sent or stored, and no appointment is confirmed. To book, please call or message us on WhatsApp.",
    },
    success: {
      ar: "شكرًا! تم التحقق من طلبك (عرض تجريبي فقط — لم يُرسل).",
      en: "Thank you! Your request was validated (demo only — not sent).",
    },
    again: { ar: "طلب جديد", en: "New request" },
  },
  draft: { ar: "مسودة — غير منشورة حتى الموافقة", en: "Draft — unpublished until approved" },
  related: { ar: "خدمات ذات صلة", en: "Related services" },
  portraitPending: { ar: "الصورة بانتظار الموافقة", en: "Portrait pending approval" },
  bioPending: {
    ar: "النبذة التعريفية بانتظار تأكيد العيادة.",
    en: "Biography pending clinic confirmation.",
  },
  contactDoctor: { ar: "احجز مع الطبيب", en: "Book with this doctor" },
  before: { ar: "قبل", en: "Before" },
  after: { ar: "بعد", en: "After" },
  close: { ar: "إغلاق", en: "Close" },
  rights: {
    ar: "نموذج تصميم مستقل — ليس الموقع الرسمي.",
    en: "Independent design concept — not the official website.",
  },
  aboutTitle: { ar: "عن عيادات يوتوبيا", en: "About Utopia Dental Clinics" },
  philosophyTitle: { ar: "فلسفتنا في العلاج", en: "Our treatment philosophy" },
  philosophy: {
    ar: "علاج مبني على الفحص الدقيق والشرح الواضح واحترام وقتك وراحتك. لا نعد بنتائج مضمونة، بل نلتزم برعاية أمينة.",
    en: "Care built on careful examination, clear explanation and respect for your time and comfort. We don't promise guaranteed outcomes; we commit to honest care.",
  },
  journeyTitle: { ar: "رحلتك معنا", en: "Your journey" },
  journey: [
    { ar: "تواصل وحجز", en: "Get in touch" },
    { ar: "فحص واستشارة", en: "Examination" },
    { ar: "خطة علاج واضحة", en: "Clear plan" },
    { ar: "علاج ومتابعة", en: "Treatment & follow-up" },
  ],
  privacyTitle: { ar: "إشعار الخصوصية", en: "Privacy notice" },
  privacyBody: {
    ar: "هذا نموذج عرض. لا يجمع الموقع أي بيانات شخصية ولا يستخدم أدوات تتبع. سيتم إعداد سياسة خصوصية كاملة بعد موافقة العيادة.",
    en: "This is a demo concept. The site collects no personal data and runs no tracking. A full privacy policy will be prepared after clinic approval.",
  },
  serviceNote: {
    ar: "المعلومات عامة ولا تغني عن الفحص. يحدد الطبيب الأنسب لحالتك.",
    en: "General information only — not a diagnosis. Your dentist will advise what suits you.",
  },
} as const;
