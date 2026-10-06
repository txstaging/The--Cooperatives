import Image from "next/image";
import { faqSection, minusIcon, plusIcon } from "@/config/content/subscription";
import { Container } from "@/components/ui";
import { SectionHeading } from "./section-heading";

export function FaqSection() {
  const { title, items } = faqSection;

  return (
    <section aria-labelledby="faq-title" className="bg-surface-muted py-12 lg:bg-surface-card lg:pb-[137px] lg:pt-16">
      <Container size="wide" className="flex flex-col gap-8 px-6 sm:px-6">
        <SectionHeading title={<span id="faq-title">{title}</span>} />
        {/* Native exclusive accordion: details elements sharing a `name` close each other. */}
        <div className="flex flex-col gap-2 lg:min-h-[637px]">
          {items.map((item, index) => (
            <details
              key={item.question}
              name="subscription-faq"
              open={index === 0}
              className="group rounded-[8px] border border-line-soft bg-white p-6 transition-colors open:border-brand"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 [&::-webkit-details-marker]:hidden">
                <span className="flex-1 text-body-lg font-bold leading-[1.5] text-ink lg:text-content-primary">
                  {item.question}
                </span>
                <Image
                  src={plusIcon.src}
                  alt={plusIcon.alt}
                  width={plusIcon.width}
                  height={plusIcon.height}
                  unoptimized
                  className="size-5 shrink-0 group-open:hidden"
                />
                <Image
                  src={minusIcon.src}
                  alt={minusIcon.alt}
                  width={minusIcon.width}
                  height={minusIcon.height}
                  unoptimized
                  className="hidden size-5 shrink-0 group-open:block"
                />
              </summary>
              <p className="pt-4 text-[16px] leading-[1.5] text-content-subtle lg:text-content-secondary">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
