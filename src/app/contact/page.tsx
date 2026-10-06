import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { ContactForm, ContactHero, ContactInfoCard } from "@/components/features/contact";

export const metadata: Metadata = {
  title: "التواصل معنا",
  description:
    "سواء كنت صاحب مشروع، تعاونية، مستثمرًا أو شريكًا استراتيجيًا، فريقنا جاهز للتواصل معك.",
};

export default function ContactPage() {
  return (
    <Container className="flex flex-col gap-12 pb-12 pt-9 lg:gap-[180px] lg:pb-[105px] lg:pt-[75px]">
      <ContactHero />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,413fr)_minmax(0,767fr)] lg:gap-8 xl:gap-[60px]">
        <ContactInfoCard />
        <ContactForm />
      </div>
    </Container>
  );
}
