import Image from "next/image";
import { aboutHero } from "@/config/content/about";
import { ButtonLink } from "@/components/ui";

export function AboutHero() {
  const { titleLines, description, cta, image } = aboutHero;

  return (
    <section
      aria-labelledby="about-hero-title"
      className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-[60px]"
    >
      {/* Figma pins the text block 76.5px below the row top rather than centering it. */}
      {/* Mobile: centered stack with 20px gaps; the heading wraps freely instead of breaking per line. */}
      <div className="flex flex-col items-center gap-5 lg:items-start lg:gap-0 lg:self-start lg:pt-[76.5px]">
        <h1
          id="about-hero-title"
          className="self-stretch text-[36px] font-bold leading-[1.6] text-ink lg:pt-[10px] lg:text-display-lg"
        >
          {titleLines.map((line, index) => (
            <span key={line} className="lg:block">
              {line}
              {index < titleLines.length - 1 ? " " : null}
            </span>
          ))}
        </h1>
        <p className="text-center text-body leading-[1.6] text-content-secondary lg:max-w-[600px] lg:py-4 lg:text-start lg:leading-[28px]">
          {description}
        </p>
        <ButtonLink
          href={cta.href}
          variant="primary"
          size="md"
          className="h-[37px] w-[155px] text-[14px] tracking-[-0.07px] lg:h-[51px] lg:w-auto lg:text-body-sm lg:tracking-normal"
        >
          {cta.label}
        </ButtonLink>
      </div>

      <div className="relative mx-auto aspect-[3/2] w-full max-w-[540px] lg:mx-0 lg:justify-self-end">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(min-width: 640px) 540px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
