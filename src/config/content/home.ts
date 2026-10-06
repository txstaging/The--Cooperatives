import { routes } from "@/config/site";
import type {
  AccentText,
  CallToAction,
  Challenge,
  CooperativeType,
  ImageAsset,
  Stat,
  Step,
} from "@/types";

/* Lists are ordered in reading (RTL) order: the first item renders right-most. */

export const homeHero = {
  title: { text: "معًا نبني تعاونيات ", accent: "أقوى" } satisfies AccentText,
  titleSecondLine: "واقتصادًا أكثر نموًا.",
  description:
    "نمكن أصحاب الأموال والمشروعات الصغيرة والتعاونيات من الوصول إلى أدوات النمو، والتحول الرقمي، والشراكات التي تساعدهم على بناء أعمال أكثر كفاءة واستدامة.",
  primaryCta: { label: "ابدأ رحلة النمو", href: routes.subscription } satisfies CallToAction,
  secondaryCta: { label: "اكتشف المنظومة", href: routes.about } satisfies CallToAction,
  image: {
    src: "/images/hero-vision-2030.png",
    alt: "رجل أعمال سعودي يحمل جهازًا لوحيًا وسط مشهد لنمو المدن والاقتصاد ضمن رؤية 2030",
    width: 1358,
    height: 1159,
  } satisfies ImageAsset,
};

export const homeStats: readonly Stat[] = [
  { value: "850+", label: "جمعية تعاونية", caption: "ضمن المنظومة" },
  { value: "12,500+", label: "مستفيد", caption: "من الخدمات و البرامج" },
  { value: "320+", label: "مشروعًا", caption: "و مبادرة للنمو" },
  { value: "24/7", label: "متاح من أي مكان", caption: "ضمن المنظومة" },
];

export const challengesSection = {
  title: { text: "التحديات لا يجب أن تكون ", accent: "حدودًا للنمو" } satisfies AccentText,
  subtitle: "المنظومة تحول هذه التحديات إلى مسارات قابلة للقياس والنمو.",
  items: [
    {
      index: "01",
      title: "بيانات متفرقة",
      description: "بيانات موزعة بين ملفات وأنظمة مختلفة تجعل الرؤية واتخاذ القرار أكثر صعوبة.",
    },
    {
      index: "02",
      title: "عمليات يدوية",
      description: "إجراءات متكررة تستهلك الوقت والموارد ويمكن أتمتتها رقميًا.",
    },
    {
      index: "03",
      title: "حوكمة أقل وضوحًا",
      description: "الحاجة إلى صلاحيات وسجلات وتقارير تساعد على الشفافية والامتثال.",
    },
    {
      index: "04",
      title: "فرص غير مستغلة",
      description: "صعوبة الوصول إلى أسواق وشراكات واستثمارات جديدة تحد من التوسع.",
    },
  ] satisfies Challenge[],
};

export const growthSection = {
  title: "منظومة متكاملة من النمو",
  description:
    "نربط الإدارة الرقمية بالحوكمة والبيانات والفرص، لنخلق بيئة تساعد التعاونيات وأصحاب المشروعات على التحرك بثقة.",
  image: {
    src: "/images/growth-ecosystem.png",
    alt: "مخطط منظومة النمو المستدام: رأس المال، التعاونية، المشروع، السوق، والشريك",
    width: 1312,
    height: 1199,
  } satisfies ImageAsset,
  steps: [
    { index: "01", title: "رقمنة", description: "بيانات وعمليات موحدة" },
    { index: "02", title: "تمكين", description: "أدوات وقرارات أفضل" },
    { index: "03", title: "توسع", description: "أسواق وشراكات وفرص" },
  ] satisfies Step[],
};

export const journeySection = {
  title: { text: "رحلة واضحة من ", accent: "التحول إلى التوسع" } satisfies AccentText,
  description: "من تقييم الوضع الحالي إلى الرقمنة والحوكمة، ثم الوصول إلى فرص جديدة للنمو.",
  image: {
    src: "/images/dashboard-preview.png",
    alt: "لوحة تحكم المنظومة تعرض مؤشرات الجاهزية الرقمية والحوكمة ونمو الجمعية",
    width: 1536,
    height: 1024,
  } satisfies ImageAsset,
  steps: [
    { index: "01", title: "تقييم", description: "فهم الاحتياجات والجاهزية" },
    { index: "02", title: "تحول رقمي", description: "رقمنة العمليات والبيانات" },
    { index: "03", title: "تمكين", description: "أدوات وقرارات أفضل" },
    { index: "04", title: "نمو", description: "أسواق وشراكات وفرص" },
  ] satisfies Step[],
};

const icon = (name: string, size: number, height = size): ImageAsset => ({
  src: `/icons/${name}.svg`,
  alt: "",
  width: size,
  height,
});

const mobileIcon = (name: string, size: number): ImageAsset => icon(`mobile/${name}`, size);

export const cooperativeTypesSection = {
  title: { text: "منظومة واحدة، ", accent: "احتياجات متعددة." } satisfies AccentText,
  subtitle: "مصممة لجميع أنواع الجمعيات التعاونية",
  items: [
    {
      label: "الجمعية الاستهلاكية",
      icon: icon("shopping-cart-minus", 66),
      mobileIcon: mobileIcon("shopping-cart-minus", 25),
    },
    {
      label: "جمعية صيد وأسماك",
      icon: icon("fish", 75),
      mobileIcon: mobileIcon("fish", 31),
      mobileIconFlipped: true,
    },
    {
      label: "جمعية متعددة الأغراض",
      icon: icon("building-complex", 79, 75),
      mobileIcon: mobileIcon("building-complex", 29),
    },
    {
      label: "جمعية ادخارية وائتمانية",
      icon: icon("landmark", 65),
      mobileIcon: mobileIcon("landmark", 41),
    },
    { label: "جمعية زراعية", icon: icon("plant-pot", 64), mobileIcon: mobileIcon("plant-pot", 35) },
    { label: "جمعية إسكانية", icon: icon("house", 75), mobileIcon: mobileIcon("house", 31) },
    { label: "جمعية تسويقية", icon: icon("truck", 75), mobileIcon: mobileIcon("truck", 35) },
    { label: "جمعية نحالين", icon: icon("bug", 58), mobileIcon: mobileIcon("bug", 33) },
  ] satisfies CooperativeType[],
};
