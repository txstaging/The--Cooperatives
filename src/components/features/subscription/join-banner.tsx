import { joinBanner } from "@/config/content/subscription";
import { ButtonLink, Container } from "@/components/ui";

export function JoinBanner() {
  const { title, description, primaryCta, secondaryCta } = joinBanner;

  return (
    <section aria-labelledby="join-banner-title" className="bg-surface-muted pb-14 lg:bg-transparent lg:pb-[159px]">
      <Container size="wide" className="px-0 lg:px-8">
        {/* Mobile: full-bleed band. Desktop: the banner is 1270px in Figma, 10px wider
            than the page content on each side. */}
        <div className="flex flex-col items-center gap-6 bg-brand-deep px-8 py-16 text-center lg:rounded-[48px] lg:px-24 min-[1324px]:-mx-[10px]">
          <h2 id="join-banner-title" className="text-[32px] font-bold leading-[1.25] text-white lg:text-[40px]">
            {title}
          </h2>
          <p className="text-[20px] leading-[1.5] text-mint-pale">{description}</p>
          <div className="flex w-full flex-col items-center gap-4 lg:w-auto lg:flex-row lg:flex-wrap lg:justify-center lg:py-2">
            <ButtonLink
              href={primaryCta.href}
              variant="inverse"
              size="action"
              className="w-full max-w-[326px] lg:w-[176px] lg:max-w-none"
            >
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink
              href={secondaryCta.href}
              variant="inverse-outline"
              size="action"
              className="w-full max-w-[326px] lg:w-[200px] lg:max-w-none"
            >
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
