import { joiningStepsSection } from "@/config/content/subscription";
import { Container } from "@/components/ui";
import { SectionHeading } from "./section-heading";

export function JoiningStepsSection() {
  const { title, steps } = joiningStepsSection;

  return (
    <section aria-labelledby="steps-title" className="bg-surface-card py-14 sm:py-16">
      <Container size="wide" className="flex flex-col gap-8">
        <SectionHeading title={<span id="steps-title">{title}</span>} />
        <ol className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step} className="flex flex-col gap-4">
              {/* Each step draws its own segment of the line so the track reads as one continuous rule. */}
              <div className="relative h-14">
                <span aria-hidden="true" className="absolute inset-x-0 top-7 h-px bg-brand" />
                <span className="relative flex size-14 items-center justify-center rounded-[8px] border border-brand bg-white text-[20px] font-bold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-[18px] font-bold leading-[1.5] text-content-primary sm:text-[20px]">{step}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
