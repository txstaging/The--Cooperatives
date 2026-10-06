import Image from "next/image";
import { subscriptionHero } from "@/config/content/subscription";
import { ButtonLink, Container } from "@/components/ui";

export function SubscriptionHero() {
  const { title, description, cta, image } = subscriptionHero;

  return (
    <section aria-labelledby="subscription-hero-title" className="pb-14 pt-10 sm:pt-14 lg:pb-[90px] lg:pt-[100px]">
      <Container size="wide">
        {/* Text and CTA share the right column; the image spans the left one. */}
        <div className="grid max-w-container grid-cols-1 gap-8 lg:grid-cols-2 lg:grid-rows-[360px_auto] lg:gap-x-[60px] lg:gap-y-0">
          {/* Figma pins the text block 76.5px below the row top rather than centering it. */}
          <div className="lg:col-start-1 lg:row-start-1 lg:pt-[76.5px]">
            <h1
              id="subscription-hero-title"
              className="text-[36px] font-extrabold leading-[1.25] text-content-primary sm:pt-[10px] sm:text-[48px] lg:text-[56px]"
            >
              {title}
            </h1>
            <p className="py-4 text-[18px] leading-[1.5] text-content-secondary sm:text-[20px] lg:text-[24px]">
              {description}
            </p>
          </div>

          <ButtonLink
            href={cta.href}
            variant="primary"
            size="action"
            className="w-[176px] lg:col-start-1 lg:row-start-2 lg:-mt-[5px]"
          >
            {cta.label}
          </ButtonLink>

          <div className="relative aspect-[3/2] w-full max-w-[540px] justify-self-center lg:col-start-2 lg:row-start-1 lg:h-[360px] lg:w-[540px] lg:justify-self-end">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 640px) 540px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
