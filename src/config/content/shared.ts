import { routes } from "@/config/site";
import type { AccentText, CallToAction } from "@/types";

export const ctaBanner = {
  eyebrow: "ابدأ الآن",
  title: { text: "جاهز لتحويل ", accent: "فكرتك إلى نمو؟" } satisfies AccentText,
  description: "انضم إلى منظومة التعاونيات وابدأ رحلة أكثر وضوحًا نحو التحول، الكفاءة والفرص.",
  cta: { label: "انضم إلى المنظومة", href: routes.subscription } satisfies CallToAction,
};
