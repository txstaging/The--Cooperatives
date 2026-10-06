import Image from "next/image";
import { benefitsSection } from "@/config/content/subscription";
import { Container } from "@/components/ui";
import { SectionHeading } from "./section-heading";

export function BenefitsSection() {
  const { title, subtitle, items } = benefitsSection;

  return (
    <section aria-labelledby="benefits-title" className="py-12 lg:py-16">
      <Container size="wide" className="flex flex-col gap-8 px-6 sm:px-6">
        <SectionHeading
          title={<span id="benefits-title">{title}</span>}
          subtitle={subtitle}
          subtitleClassName="sm:text-body-lg lg:text-body-lg"
        />
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.title} className="flex flex-col items-start gap-4 rounded-[8px] bg-surface-muted p-6">
              <Image
                src={item.icon.src}
                alt={item.icon.alt}
                width={item.icon.width}
                height={item.icon.height}
                unoptimized
                className="size-8"
              />
              <h3 className="text-[24px] font-bold leading-[1.5] text-ink lg:text-content-primary">{item.title}</h3>
              <p className="text-body-lg leading-[1.5] text-content-subtle lg:text-content-secondary">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
