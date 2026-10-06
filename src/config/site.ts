import type { CallToAction, FooterColumn, NavLink } from "@/types";

export const routes = {
  home: "/",
  about: "/about",
  subscription: "/subscription",
  contact: "/contact",
} as const;

export const siteConfig = {
  name: "التعاونيات",
  title: "التعاونيات — منظومة وطنية لتمكين التعاونيات",
  description:
    "منظومة وطنية لتمكين التعاونيات وأصحاب المشروعات الصغيرة من النمو والتحول الرقمي وبناء قيمة مستدامة.",
  locale: "ar",
  direction: "rtl",
} as const;

export const mainNav: readonly NavLink[] = [
  { label: "الرئيسية", href: routes.home },
  { label: "عن التعاونيات", href: routes.about },
  { label: "الاشتراك", href: routes.subscription },
  { label: "التواصل معنا", href: routes.contact },
];

export const joinCta: CallToAction = { label: "انضم الآن", href: routes.subscription };

export const footerTagline =
  "منظومة وطنية لتمكين التعاونيات وأصحاب المشروعات الصغيرة من النمو والتحول الرقمي وبناء قيمة مستدامة.";

export const footerColumns: readonly FooterColumn[] = [
  {
    title: "المنظومة",
    links: [
      { label: "عن التعاونيات", href: routes.about },
      { label: "التحول الرقمي", href: `${routes.about}#vision-2030` },
      { label: "الاشتراك", href: routes.subscription },
    ],
  },
  {
    title: "للأعمال",
    desktopOnly: true,
    links: [
      { label: "أصحاب المشروعات", href: routes.subscription },
      { label: "المستثمرون", href: routes.subscription },
      { label: "الشراكات", href: routes.contact },
    ],
  },
  {
    title: "التواصل",
    links: [
      { label: "تواصل معنا", href: routes.contact },
      { label: "الأسئلة الشائعة", href: routes.contact },
      { label: "طلب خدمة", href: routes.contact },
    ],
  },
];

export const copyright = "© 2026 جمعية التعاونيات — جميع الحقوق محفوظة";
