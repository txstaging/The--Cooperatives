import { joinCta } from "@/config/site";
import type { CallToAction, ContactDetail, ImageAsset } from "@/types";

export const contactHero = {
  title: "لنبدأ حوارًا يصنع فرقًا.",
  description:
    "سواء كنت صاحب مشروع، تعاونية، مستثمرًا أو شريكًا استراتيجيًا، فريقنا جاهز للتواصل معك.",
  cta: joinCta satisfies CallToAction,
  image: {
    src: "/images/contact-hero.png",
    alt: "موظفة خدمة عملاء سعودية تعمل على حاسوب محمول وسط أيقونات تواصل ومعالم الرياض والعلم السعودي",
    width: 1536,
    height: 1024,
  } satisfies ImageAsset,
};

export const contactInfo = {
  title: "معلومات التواصل",
  details: [
    { label: "العنوان", value: "جدة السعودية" },
    {
      label: "البريد الإلكتروني",
      value: "info@cooperatives.gov",
      href: "mailto:info@cooperatives.gov",
      dir: "ltr",
    },
    { label: "الهاتف", value: "+20 11 123 4567", href: "tel:+20111234567", dir: "ltr" },
    { label: "ساعات العمل", value: "الأحد — الخميس · 9:00 ص — 4:00 م" },
  ] satisfies ContactDetail[],
};

/* Fields are in reading (RTL) order: the first one renders right-most. */
export const contactForm = {
  fields: {
    name: { name: "name", label: "الاسم الكامل" },
    email: { name: "email", label: "البريد الإلكتروني" },
    phone: { name: "phone", label: "رقم الجوال" },
    topic: { name: "topic", label: "نوع التواصل" },
    message: { name: "message", label: "رسالتك" },
  },
  topics: ["استفسار عام", "الاشتراك والعضوية", "الشراكات والاستثمار", "طلب خدمة", "الدعم الفني"],
  submitLabel: "إرسال الرسالة",
  successMessage: "شكرًا لتواصلك معنا، سيتواصل معك فريقنا قريبًا.",
};
