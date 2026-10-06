import Image from "next/image";
import { subscriptionHero } from "@/config/content/subscription";
import { ButtonLink, Container } from "@/components/ui";

export function SubscriptionHero() {
  const { title, description, cta, image } = subscriptionHero;

  return (
    <section aria-labelledby="subscription-hero-title" className="py-12 lg:pb-[90px] lg:pt-[100px]">
      <Container size="wide">
        <div className="grid max-w-container grid-cols-1 gap-6 lg:grid-cols-2 lg:grid-rows-[360px_auto] lg:gap-x-[60px] lg:gap-y-0">
          {/* Figma pins the desktop text block 76.5px below the row top rather than centering it. */}
          <div className="flex flex-col gap-4 text-center lg:col-start-1 lg:row-start-1 lg:block lg:pt-[76.5px] lg:text-start">
            <h1
              id="subscription-hero-title"
              className="text-[36px] font-extrabold leading-[1.25] text-brand-deep lg:pt-[10px] lg:text-[56px] lg:text-content-primary"
            >
              {title}
            </h1>
            <p className="text-[18px] leading-[1.5] text-content-subtle lg:py-4 lg:text-[24px] lg:text-content-secondary">
              {description}
            </p>
          </div>

          <ButtonLink
            href={cta.href}
            variant="primary"
            size="action"
            className="w-[176px] justify-self-center lg:col-start-1 lg:row-start-2 lg:-mt-[5px] lg:justify-self-start"
          >
            {cta.label}
          </ButtonLink>

          <div className="relative aspect-[3/2] w-full max-w-[297px] justify-self-center lg:col-start-2 lg:row-start-1 lg:aspect-auto lg:h-[360px] lg:w-[540px] lg:max-w-none lg:justify-self-end">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 540px, 297px"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
