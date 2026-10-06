import { joiningStepsSection } from "@/config/content/subscription";
import { Container } from "@/components/ui";
import { SectionHeading } from "./section-heading";

export function JoiningStepsSection() {
  const { title, steps } = joiningStepsSection;

  return (
    <section aria-labelledby="steps-title" className="bg-surface-muted py-12 lg:bg-surface-card lg:py-16">
      <Container size="wide" className="flex flex-col gap-8">
        <SectionHeading title={<span id="steps-title">{title}</span>} />
        <ol className="flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:gap-0">
          {steps.map((step, index) => (
            <li key={step} className="flex items-center gap-4 lg:flex-col lg:items-stretch">
              {/* Desktop: each step draws its own segment of the line so the track reads as one continuous rule. */}
              <div className="relative shrink-0 lg:h-14">
                <span aria-hidden="true" className="absolute inset-x-0 top-7 hidden h-px bg-brand lg:block" />
                <span className="relative flex size-12 items-center justify-center rounded-[8px] border border-brand bg-white text-[20px] font-bold text-brand lg:size-14">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="flex-1 text-[18px] font-bold leading-[1.5] text-ink lg:text-[20px] lg:text-content-primary">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
