import type { FaqItem } from "./types";

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    question: {
      ar: "أين تقع عيادات يوتوبيا تحديداً في الدقي؟ وما هي أقرب العلامات المميزة؟",
      en: "Where is Utopia Dental Clinics located in Dokki?",
    },
    answer: {
      ar: "تقع العيادة في ١١٦ شارع محيي الدين أبو العز، الطابق التاسع، الدقي، الجيزة. الموقع مركزي وهادئ مع إطلالة بانورامية ومصاعد مريحة لخدمة المراجعين.",
      en: "We are located at 116 Mohy El-Din Abu El-Ezz Street, 9th Floor, Dokki, Giza. Centrally situated with convenient access, modern elevators, and tranquil views.",
    },
    category: "general",
  },
  {
    id: "faq-2",
    question: {
      ar: "ما هي مواعيد العمل اليومية للعيادة؟",
      en: "What are your daily clinic working hours?",
    },
    answer: {
      ar: "نستقبل المراجعين يومياً من الساعة ٢:٠٠ ظهراً حتى ١٠:٠٠ مساءً، لتناسب مختلف الجداول اليومية بعد ساعات العمل والدراسة.",
      en: "We welcome patients daily from 2:00 PM to 10:00 PM, accommodating convenient afternoon and evening schedules.",
    },
    category: "general",
  },
  {
    id: "faq-3",
    question: {
      ar: "كيف تتم بروتوكولات التعقيم والنظافة في عيادات يوتوبيا؟",
      en: "What infection control and sterilization standards do you follow?",
    },
    answer: {
      ar: "نتبع بروتوكول تعقيم جراحي صارم من الفئة (Class B Autoclave) المعتمدة بالمستشفيات الدولية. تُحفظ الأدوات في أكياس محكمة الغلق لا تُفتح إلا أمام المراجع مباشرة، مع تعقيم وتطهير كامل لمقعد العلاج والأسطح بين كل مراجع وآخر.",
      en: "We adhere strictly to hospital-grade Class B autoclave sterilization cycles. Instruments are hermetically sealed and opened exclusively in front of the patient, with deep surface disinfection between visits.",
    },
    category: "safety",
  },
  {
    id: "faq-4",
    question: {
      ar: "كيف أعرف التكلفة المتوقعة للعلاج قبل البدء؟",
      en: "How are treatment costs determined and communicated?",
    },
    answer: {
      ar: "نؤمن بالشفافية التامة؛ لا توجد أي تكاليف خفية أو مفاجئة. بعد الفحص السريري والأشعة، يشرح لك الطبيب خطة العلاج بالتفصيل والخيارات المتاحة مع بيان مالي دقيق لكل مرحلة قبل اتخاذ أي قرار.",
      en: "We believe in total transparency with zero hidden surprises. Following your clinical exam and imaging, your doctor outlines the recommended roadmap with clear, itemized options before any procedure commences.",
    },
    category: "booking",
  },
  {
    id: "faq-5",
    question: {
      ar: "هل يمكنني حجز موعد عاجل أو طارئ في نفس اليوم؟",
      en: "Can I request a same-day urgent appointment for acute pain?",
    },
    answer: {
      ar: "نعم، نبذل أقصى جهدنا لاستيعاب حالات الألم الحاد وطوارئ الأسنان في نفس اليوم. يمكنك التواصل الفوري عبر الهاتف (01117655583) أو عبر واتساب للتنسيق العاجل.",
      en: "Yes, we reserve dedicated slots for acute toothache and trauma. Please call us directly at 01117655583 or message us on WhatsApp for prompt prioritization.",
    },
    category: "booking",
  },
  {
    id: "faq-6",
    question: {
      ar: "طفلي يخاف بشدة من طبيب الأسنان، كيف تتعاملون مع هذا القلق؟",
      en: "My child has acute dental fear. How do your specialists handle anxiety?",
    },
    answer: {
      ar: "أخصائي طب أسنان الأطفال د. عمر مخلوف مدرب خصيصاً على التوجيه السلوكي المريح وخلق بيئة مرحة دون إكراه، حيث نبدأ بجلسة تعارف وودية لكسر حاجز الخوف أولاً.",
      en: "Our pediatric specialist, Dr. Omar Makhlouf, uses gentle behavioral techniques and warm child-centered communication to build confidence without pressure.",
    },
    category: "services",
  },
  {
    id: "faq-7",
    question: {
      ar: "هل أحتاج إلى كشف مسبق قبل اختيار إجراء معين مثل الفينيرز أو الزراعة؟",
      en: "Do I need a consultation before deciding on veneers or implants?",
    },
    answer: {
      ar: "نعم، الفحص السريري الدقيق هو الخطوة الأولى الضرورية لتقييم صحة اللثة والعظم وملاءمة الإجراء لحالتك لضمان استقرار ونجاح النتيجة على المدى البعيد.",
      en: "Yes. Thorough clinical and radiological evaluation is essential to confirm gum health and bone support, ensuring predictable, lasting aesthetic and functional results.",
    },
    category: "services",
  },
  {
    id: "faq-8",
    question: {
      ar: "هل يمكنني التواصل والمتابعة بعد انتهاء الجلسة العلاجية؟",
      en: "Is direct post-treatment support available after my visit?",
    },
    answer: {
      ar: "بالتأكيد؛ يقدم فريق العيادة إرشادات مكتوبة ومفصلة بعد كل إجراء، ويبقى خط واتساب المباشر متاحاً للإجابة عن أي استفسار أو متابعة التئام الحالة.",
      en: "Absolutely. Written post-care instructions are provided after every procedure, and our direct WhatsApp concierge remains open for any follow-up questions.",
    },
    category: "general",
  },
];
