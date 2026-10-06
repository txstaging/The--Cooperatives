import Image from "next/image";
import { checkIcon, packagesAnchor, plansSection } from "@/config/content/subscription";
import { ButtonLink, Container } from "@/components/ui";
import type { Plan } from "@/types";
import { cn } from "@/lib/cn";
import { SectionHeading } from "./section-heading";

function PlanCard({ plan }: { plan: Plan }) {
  const { recommended = false } = plan;

  return (
    <li
      className={cn(
        "flex flex-col overflow-hidden rounded-[8px] border-brand bg-white",
        recommended ? "border-2 p-[2px] drop-shadow-[0_8px_12px_rgba(6,63,49,0.07)]" : "border p-px",
      )}
    >
      <div
        className={cn(
          "flex min-h-[208px] flex-col items-start gap-2 rounded-t-[6px] p-6 sm:p-8",
          recommended && "bg-brand-deep",
        )}
      >
        {plan.badge ? (
          <p className="h-[26px] rounded-[4px] bg-surface-card px-4 pt-[6px] text-[14px] font-bold leading-[normal] text-brand-deep">
            {plan.badge}
          </p>
        ) : (
          <p className="text-[14px] font-bold leading-[1.5] text-content-secondary">{plan.eyebrow}</p>
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
            recommended ? "text-mint-pale" : "text-content-secondary",
          )}
        >
          {plan.description}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
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
              <span className="text-[16px] font-medium leading-[1.5] text-content-primary">{feature}</span>
            </li>
          ))}
        </ul>
        {/* Regular cards center their buttons in the 128px action area; the recommended one pins it to the top. */}
        <div
          className={cn(
            "mt-auto flex flex-col gap-4 lg:min-h-[128px]",
            !recommended && "lg:justify-center lg:px-[5px]",
          )}
        >
          {plan.actions.map((action) => (
            <ButtonLink
              key={action.label}
              href={action.href}
              variant={action.variant === "primary" ? "primary" : "brand-outline"}
              size="action"
              fullWidth
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
      className="scroll-mt-[82px] pb-14 pt-6 sm:pb-20 lg:pb-[98px] lg:pt-[71px]"
    >
      <Container size="wide" className="flex flex-col gap-8">
        <SectionHeading
          align="center"
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
