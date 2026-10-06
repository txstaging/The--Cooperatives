import Image from "next/image";
import { journeySection } from "@/config/content/home";
import { AccentText, NumberedList } from "@/components/ui";

export function JourneySection() {
  const { title, description, image, steps } = journeySection;

  return (
    <section
      aria-labelledby="journey-title"
      className="rounded-5xl border-hairline border-brand-deep/40 bg-surface-card p-[22px] lg:border lg:px-10 lg:pb-[76px] lg:pt-16 xl:px-[70px]"
    >
      <div className="flex flex-col gap-[18px] lg:grid lg:grid-cols-[minmax(0,437px)_minmax(0,522px)] lg:items-center lg:justify-between lg:gap-10">
        <div className="flex flex-col gap-[18px] lg:gap-0">
          <h2
            id="journey-title"
            className="text-[26px] font-bold leading-[1.5] text-ink lg:pt-[20px] lg:text-heading-sm lg:text-content-primary"
          >
            <AccentText value={title} accentClassName="text-brand-strong" />
          </h2>
          <p className="text-[16px] leading-[1.6] text-content-primary lg:pt-3 lg:text-body-lg">{description}</p>
          <div className="lg:pt-[19px]">
            <NumberedList items={steps} bordered closed={false} className="gap-[18px]" />
          </div>
        </div>

        {/* The source render is cropped inside a framed viewport, as in the design. */}
        <div className="relative mx-auto h-[250px] w-full max-w-[522px] overflow-hidden rounded-[14px] border border-mint lg:mx-0 lg:aspect-[522/426] lg:h-auto lg:rounded-3xl">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 640px) 650px, 125vw"
            className="absolute left-[-21.38%] top-[0.03%] h-[103.14%] w-[124.58%] max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
