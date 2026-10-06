import { joinBanner } from "@/config/content/subscription";
import { ButtonLink, Container } from "@/components/ui";

export function JoinBanner() {
  const { title, description, primaryCta, secondaryCta } = joinBanner;

  return (
    <section aria-labelledby="join-banner-title" className="pb-20 lg:pb-[159px]">
      <Container size="wide">
        {/* The banner is 1270px in Figma — 10px wider than the page content on each side. */}
        <div className="flex flex-col items-center gap-6 rounded-[32px] bg-brand-deep px-5 py-12 text-center sm:px-12 lg:rounded-[48px] lg:px-24 lg:py-16 xl:-mx-[10px]">
          <h2 id="join-banner-title" className="text-[30px] font-bold leading-[1.25] text-white sm:text-[40px]">
            {title}
          </h2>
          <p className="text-body-lg leading-[1.5] text-mint-pale sm:text-[20px]">{description}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 py-2">
            <ButtonLink href={primaryCta.href} variant="inverse" size="action" className="w-[176px]">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="inverse-outline" size="action" className="w-[200px]">
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
