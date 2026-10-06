import Image from "next/image";
import { homeHero } from "@/config/content/home";
import { AccentText, ButtonLink, Container } from "@/components/ui";

export function HomeHero() {
  const { title, titleSecondLine, description, primaryCta, secondaryCta, image } = homeHero;

  return (
    <section aria-labelledby="home-hero-title">
      <Container size="wide" className="lg:p-[10px]">
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,604px)_minmax(0,521px)] lg:items-start lg:justify-between lg:gap-12 xl:gap-[105px]">
          {/* Mobile: centered stack, 20px gaps, title wraps freely. */}
          <div className="flex flex-col items-center gap-5 lg:items-stretch lg:gap-0">
            <h1
              id="home-hero-title"
              className="text-center text-[28px] font-bold leading-[1.4] text-ink lg:pt-[17px] lg:text-start lg:text-display"
            >
              <AccentText value={title} />{" "}
              <br className="hidden lg:block" />
              {titleSecondLine}
            </h1>
            <p className="max-w-[326px] text-center text-[14px] leading-[1.6] text-content-secondary lg:max-w-[576px] lg:pt-[17px] lg:text-start lg:text-body-lg lg:leading-[1.6]">
              {description}
            </p>
            <div className="flex h-[55px] items-center justify-center gap-[10px] lg:h-auto lg:flex-wrap lg:justify-start lg:gap-3 lg:pt-7">
              <ButtonLink
                href={primaryCta.href}
                variant="primary"
                size="md"
                className="h-[37px] w-[138px] text-[14px] tracking-[-0.07px] lg:h-[51px] lg:w-auto lg:text-body-sm lg:tracking-normal"
              >
                {primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={secondaryCta.href}
                variant="outline"
                size="md"
                className="h-[37px] w-[138px] border-line text-[14px] tracking-[-0.07px] text-footer lg:h-[51px] lg:w-auto lg:border-line-strong lg:text-body-sm lg:tracking-normal lg:text-brand-deep"
              >
                {secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto aspect-[521/444] w-full max-w-[521px] lg:mx-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 521px, (min-width: 640px) 521px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
