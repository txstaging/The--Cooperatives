import { routes } from "@/config/site";
import type {
  CallToAction,
  ImageAsset,
  Principle,
  PurposeStatement,
  VisionPillar,
} from "@/types";

/* Lists are ordered in reading (RTL) order: the first item renders right-most. */

export const aboutHero = {
  titleLines: ["منظومة وطنية", "تصنع أثرًا مستدامًا."],
  description:
    "جمعية تعمل على تمكين التعاونيات وأصحاب المشروعات الصغيرة من خلال حلول وبرامج تساعدهم على تطوير أعمالهم، وتحسين الكفاءة، وتعزيز الوصول إلى الفرص والأسواق.",
  cta: { label: "ابدأ رحلة النمو", href: routes.subscription } satisfies CallToAction,
  image: {
    src: "/images/about-hero.png",
    alt: "رواد أعمال سعوديون أمام مشهد لمدينة حديثة ومزارع وأسواق تعبر عن نمو التعاونيات",
    width: 1536,
    height: 1024,
  } satisfies ImageAsset,
};

export const purposeStatements: readonly PurposeStatement[] = [
  {
    eyebrow: "رؤيتنا",
    title: "تعاونيات حديثة، رقمية وقادرة على المنافسة.",
    description:
      "نطمح إلى بناء منظومة تعاونية أكثر كفاءة وشفافية واستدامة، تساهم في دعم الاقتصاد وتمكين أصحاب المشروعات ورؤوس الأموال.",
  },
  {
    eyebrow: "رسالتنا",
    // The trailing period is filled with the card color in Figma, i.e. invisible.
    title: "تمكين حقيقي يبدأ من الاحتياج",
    description:
      "نوفر مسارات وخدمات تساعد التعاونيات والمشروعات على بناء القدرات، التحول الرقمي، الوصول للتمويل والشراكات والأسواق.",
  },
];

export const principlesSection = {
  title: "المبادئ التي تقود عملنا",
  items: [
    { label: "الشفافية", symbol: "◈", symbolSize: "sm" },
    { label: "الابتكار", symbol: "✦", symbolSize: "sm" },
    { label: "الشراكة", symbol: "⌁", symbolSize: "lg" },
    { label: "الاستدامة", symbol: "✓", symbolSize: "sm" },
    { label: "التمكين", symbol: "♧", symbolSize: "md" },
  ] satisfies Principle[],
};

export const vision2030Section = {
  id: "vision-2030",
  eyebrow: "رؤية السعودية 2030",
  title: "منظومة تعاونية أكثر رقمية وشفافية واستدامة",
  description:
    "رؤية 2030 تضع التحول الرقمي، تطوير الاقتصاد الرقمي، رفع كفاءة الخدمات، وتعزيز الشفافية والمساءلة وتمكين القطاع غير الربحي ضمن أهدافها الاستراتيجية. وهنا يأتي دور المنصة في تحويل هذه الاتجاهات إلى ممارسات تشغيلية داخل الجمعية.",
  pillars: [
    { index: "01", title: "التحول الرقمي", description: "رقمنة العمليات والخدمات." },
    { index: "02", title: "الوطن الطموح", description: "كفاءة وشفافية ومساءلة أفضل." },
    { index: "03", title: "المجتمع الحيوي", description: "تمكين المشاركة والمساهمة المجتمعية." },
  ] satisfies VisionPillar[],
};
