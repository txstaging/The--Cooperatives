import Image from "next/image";
import { contactHero } from "@/config/content/contact";
import { ButtonLink } from "@/components/ui";

export function ContactHero() {
  const { title, description, cta, image } = contactHero;

  return (
    <section
      aria-labelledby="contact-hero-title"
      className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-[60px]"
    >
      {/* Figma pins the desktop text block 76.5px below the row top rather than centering it. */}
      <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-0 lg:self-start lg:pt-[76.5px]">
        <h1
          id="contact-hero-title"
          className="text-center text-[28px] font-bold leading-[1.6] text-ink lg:text-start lg:text-heading-md lg:leading-[68.44px] lg:tracking-[-1.2px]"
        >
          {title}
        </h1>
        <p className="text-center text-body leading-[1.6] text-content-secondary lg:max-w-[464px] lg:py-4 lg:text-start lg:leading-[28px]">
          {description}
        </p>
        <ButtonLink
          href={cta.href}
          variant="primary"
          size="action"
          className="h-[38px] w-[112px] rounded-sm text-[14px] tracking-[-0.07px] lg:mt-7 lg:h-12 lg:w-[176px] lg:rounded-[8px] lg:text-[16px] lg:tracking-[-0.08px]"
        >
          {cta.label}
        </ButtonLink>
      </div>

      <div className="relative aspect-[590/360] w-full overflow-hidden rounded-[16px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(min-width: 1240px) 590px, (min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
