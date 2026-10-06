import Image from "next/image";
import { checkIcon, packagesAnchor, plansSection } from "@/config/content/subscription";
import { ButtonLink, Container } from "@/components/ui";
import type { Plan } from "@/types";
import { cn } from "@/lib/cn";
import { SectionHeading } from "./section-heading";

/**
 * Button sizes from the Figma mobile frame, keyed by `${plan.id}-${actionIndex}`.
 * The recommended plan's button is full width at 48px on every breakpoint.
 */
const mobileActionSizes: Record<string, string> = {
  "basic-0": "h-[46px] max-w-[268px]",
  "partnership-0": "h-10 max-w-[259px]",
  "partnership-1": "h-[35px] max-w-[268px]",
};

function PlanCard({ plan }: { plan: Plan }) {
  const { recommended = false } = plan;

  return (
    <li
      className={cn(
        "flex flex-col overflow-hidden rounded-[8px] bg-white",
        recommended
          ? "border-2 border-brand p-[2px] drop-shadow-[0_8px_12px_rgba(6,63,49,0.07)]"
          : "border border-line-soft p-px lg:border-brand",
      )}
    >
      <div
        className={cn(
          "flex flex-col items-start gap-2 rounded-t-[6px] p-8 lg:min-h-[208px]",
          recommended && "bg-brand-deep",
        )}
      >
        {plan.badge ? (
          <p className="rounded-[4px] bg-gold-light px-4 py-1 text-[14px] font-bold leading-[normal] text-brand-deep lg:h-[26px] lg:bg-surface-card lg:pb-0 lg:pt-[6px]">
            {plan.badge}
          </p>
        ) : (
          <p className="text-[14px] font-bold leading-[1.5] text-content-subtle lg:text-content-secondary">
            {plan.eyebrow}
          </p>
        )}
        <h3
          className={cn(
            "text-[32px] font-bold leading-[1.25]",
            recommended ? "text-white" : "text-brand-deep",
          )}
        >
          {plan.name}
        </h3>
        <p
          className={cn(
            "text-body-lg leading-[1.5]",
            recommended ? "text-mint-pale" : "text-content-subtle lg:text-content-secondary",
          )}
        >
          {plan.description}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-6 p-8">
        <ul className="flex flex-col gap-4 lg:min-h-[328px]">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Image
                src={checkIcon.src}
                alt={checkIcon.alt}
                width={checkIcon.width}
                height={checkIcon.height}
                unoptimized
                className="size-5 shrink-0"
              />
              <span className="text-[16px] font-medium leading-[1.5] text-ink lg:text-content-primary">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <div
          className={cn(
            "mt-auto flex flex-col gap-4 lg:min-h-[128px]",
            !recommended && "lg:justify-center lg:px-[5px]",
          )}
        >
          {plan.actions.map((action, index) => (
            <ButtonLink
              key={action.label}
              href={action.href}
              variant={action.variant === "primary" ? "primary" : "brand-outline"}
              size="action"
              fullWidth
              className={cn(
                !recommended && "self-center lg:h-12 lg:max-w-none lg:self-stretch",
                !recommended && mobileActionSizes[`${plan.id}-${index}`],
                action.variant === "outline" && "border-line-soft lg:border-brand",
              )}
            >
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </li>
  );
}

export function PlansSection() {
  const { title, subtitle, plans } = plansSection;

  return (
    <section
      id={packagesAnchor}
      aria-labelledby="plans-title"
      className="scroll-mt-[82px] py-12 lg:pb-[98px] lg:pt-[71px]"
    >
      <Container size="wide" className="flex flex-col gap-8">
        <SectionHeading
          align="center"
          className="items-start text-start lg:items-center lg:text-center"
          title={<span id="plans-title">{title}</span>}
          subtitle={subtitle}
          subtitleClassName="lg:text-[24px]"
        />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
