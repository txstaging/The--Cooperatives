import { routes } from "@/config/site";
import type {
  CallToAction,
  FaqItem,
  IconFeature,
  ImageAsset,
  Plan,
  PlanComparisonRow,
} from "@/types";

/* Lists are ordered in reading (RTL) order: the first item renders right-most. */

export const packagesAnchor = "packages";

const icon = (name: string, size: number): ImageAsset => ({
  src: `/icons/${name}.svg`,
  alt: "",
  width: size,
  height: size,
});

export const checkIcon = icon("check", 20);
export const plusIcon = icon("plus", 20);
export const minusIcon = icon("minus", 20);

export const subscriptionHero = {
  title: "اختر المسار المناسب لنموك",
  description:
    "حلول وبرامج وخدمات مصممة لتلبية احتياجات التعاونيات وأصحاب المشروعات الصغيرة وأصحاب الأموال والشركاء.",
  cta: { label: "انضم الآن", href: `#${packagesAnchor}` } satisfies CallToAction,
  image: {
    src: "/images/subscription-hero.png",
    alt: "بطاقات الباقات الأساسية والمتقدمة والمميزة محاطة بلوحات بيانات وعملات ذهبية وسهم نمو",
    width: 1536,
    height: 1024,
  } satisfies ImageAsset,
};

export const plansSection = {
  title: "اختر الباقة التي تناسب احتياجاتك",
  subtitle: "ابدأ بالمسار المناسب لك، واستفد من الخدمات والفرص المصممة لدعم النمو.",
  plans: [
    {
      id: "basic",
      name: "الأساسية",
      eyebrow: "بداية التطوير",
      description: "للمشروعات والتعاونيات التي تبدأ رحلة التطوير.",
      features: [
        "التسجيل في المنظومة",
        "الملف التعريفي الرقمي",
        "الوصول إلى الموارد الأساسية",
        "الأخبار والفرص",
        "المشاركة في الفعاليات",
        "الدعم الأساسي",
      ],
      actions: [{ label: "ابدأ الآن", href: routes.contact, variant: "outline" }],
    },
    {
      id: "growth",
      name: "النمو",
      badge: "الأكثر اختيارًا",
      description: "لمن يريد الانتقال من التطوير إلى النمو والتوسع.",
      features: [
        "جميع مزايا الأساسية",
        "دعم التحول الرقمي",
        "برامج تطوير القدرات",
        "الوصول إلى فرص وشراكات",
        "أدوات تحليل ومتابعة",
        "أولوية في بعض البرامج",
        "استشارات تطويرية",
      ],
      actions: [{ label: "ابدأ رحلة النمو", href: routes.contact, variant: "primary" }],
      recommended: true,
    },
    {
      id: "partnership",
      name: "الشراكة",
      eyebrow: "تعاون استراتيجي",
      description: "للجهات والمستثمرين والشركاء الباحثين عن تعاون استراتيجي.",
      features: [
        "جميع مزايا النمو",
        "فرص شراكات استراتيجية",
        "برامج ومبادرات مشتركة",
        "وصول إلى فرص استثمارية",
        "تقارير وتحليلات متقدمة",
        "دعم مخصص",
        "حلول حسب الاحتياج",
      ],
      actions: [
        { label: "اطلب عرضًا مخصصًا", href: routes.contact, variant: "primary" },
        { label: "تواصل معنا", href: routes.contact, variant: "outline" },
      ],
    },
  ] satisfies Plan[],
};

export const comparisonSection = {
  title: "قارن بين الباقات",
  featureHeading: "الميزة",
  // Availability follows `plansSection.plans` order: الأساسية، النمو، الشراكة.
  rows: [
    { feature: "التسجيل في المنظومة", availability: [true, true, true] },
    { feature: "الملف التعريفي", availability: [true, true, true] },
    { feature: "الموارد الرقمية", availability: [true, true, true] },
    { feature: "الأخبار والفرص", availability: [true, true, true] },
    { feature: "الفعاليات", availability: [true, true, true] },
    { feature: "الدعم", availability: [true, true, true] },
    { feature: "التحول الرقمي", availability: [false, true, true] },
    { feature: "برامج التدريب", availability: [false, true, true] },
    { feature: "الشراكات", availability: [false, true, true] },
    { feature: "فرص الاستثمار", availability: [false, false, true] },
    { feature: "التقارير والتحليلات", availability: [false, true, true] },
    { feature: "الدعم المخصص", availability: [false, false, true] },
  ] satisfies PlanComparisonRow[],
};

export const benefitsSection = {
  title: "أكثر من مجرد اشتراك",
  subtitle: "أنت لا تنضم إلى منصة فقط، بل إلى منظومة تساعدك على النمو.",
  items: [
    { title: "الوصول", description: "الوصول إلى فرص وأسواق وشراكات جديدة.", icon: icon("network", 32) },
    { title: "التحول", description: "حلول تساعدك على تطوير العمليات رقميًا.", icon: icon("workflow", 32) },
    { title: "المعرفة", description: "برامج ومحتوى يساعدك على تطوير قدراتك.", icon: icon("book-open", 32) },
    { title: "النمو", description: "منظومة متكاملة تساعدك على بناء نمو مستدام.", icon: icon("sprout", 32) },
  ] satisfies IconFeature[],
};

export const joiningStepsSection = {
  title: "خطوات واضحة للانضمام",
  steps: ["اختر الباقة", "سجل بياناتك", "نراجع احتياجاتك", "ابدأ الاستفادة"],
};

export const trustSection = {
  title: "لماذا تثق في منظومة التعاونيات؟",
  points: [
    { title: "منظومة وطنية", icon: icon("landmark-outline", 24) },
    { title: "حوكمة وشفافية", icon: icon("scale", 24) },
    { title: "حماية البيانات", icon: icon("shield-check", 24) },
    { title: "دعم مستمر", icon: icon("headset", 24) },
    { title: "شراكات موثوقة", icon: icon("handshake", 24) },
  ] satisfies IconFeature[],
  image: {
    src: "/images/cooperative-collaboration.jpg",
    alt: "رجلان وامرأة سعوديون يراجعون تقارير أعمال حول طاولة اجتماعات في مكتب",
    width: 1152,
    height: 928,
  } satisfies ImageAsset,
};

/*
 * Only the first answer comes from the design; the others are draft copy
 * written from the plan details above and should be reviewed.
 */
export const faqSection = {
  title: "كل ما تحتاج معرفته قبل أن تبدأ.",
  items: [
    {
      question: "ما الفرق بين الباقات؟",
      answer:
        "الأساسية توفر التسجيل والملف التعريفي والموارد والأخبار والفعاليات والدعم الأساسي. النمو تضيف دعم التحول الرقمي وتطوير القدرات وأدوات التحليل وفرص الشراكات. الشراكة تضيف فرص الاستثمار والبرامج المشتركة والتقارير المتقدمة والدعم المخصص.",
    },
    {
      question: "هل يمكنني تغيير الباقة لاحقًا؟",
      answer:
        "نعم، يمكنك الانتقال إلى باقة أخرى في أي وقت بحسب احتياجاتك ومرحلة نمو مشروعك، وسيساعدك فريقنا في إتمام الانتقال.",
    },
    {
      question: "من يمكنه الاشتراك؟",
      answer:
        "الاشتراك متاح للتعاونيات وأصحاب المشروعات الصغيرة وأصحاب الأموال والجهات والشركاء الراغبين في التعاون ضمن المنظومة.",
    },
    {
      question: "هل الاشتراك متاح للأفراد؟",
      answer:
        "نعم، يمكن لأصحاب المشروعات الصغيرة الاشتراك بصفتهم الفردية والاستفادة من خدمات المنظومة وبرامجها.",
    },
    {
      question: "هل توجد برامج مخصصة للتعاونيات؟",
      answer:
        "نعم، نقدم برامج لتطوير القدرات ودعم التحول الرقمي صُممت خصيصًا لاحتياجات التعاونيات بمختلف أنواعها.",
    },
    {
      question: "كيف أعرف الباقة المناسبة لي؟",
      answer:
        "قارن بين مزايا الباقات في الجدول أعلاه، أو تواصل مع فريقنا ليساعدك في اختيار الباقة الأنسب لمرحلة مشروعك.",
    },
    {
      question: "هل يمكن طلب شراكة مخصصة؟",
      answer:
        "نعم، توفر باقة الشراكة حلولًا حسب الاحتياج. اطلب عرضًا مخصصًا وسيتواصل معك فريقنا لمناقشة تفاصيل التعاون.",
    },
  ] satisfies FaqItem[],
};

export const joinBanner = {
  title: "مستعد تبدأ رحلة النمو؟",
  description: "اختر الباقة المناسبة وانضم إلى منظومة التعاونيات.",
  primaryCta: { label: "انضم الآن", href: `#${packagesAnchor}` } satisfies CallToAction,
  secondaryCta: { label: "تحدث مع فريقنا", href: routes.contact } satisfies CallToAction,
};
