import Image from "next/image";
import { growthSection } from "@/config/content/home";
import { NumberedList } from "@/components/ui";

export function GrowthSection() {
  const { title, description, image, steps } = growthSection;

  return (
    <section
      aria-labelledby="growth-title"
      className="flex flex-col gap-5 lg:grid lg:grid-cols-[minmax(0,587px)_minmax(0,505px)] lg:items-center lg:justify-between lg:gap-12"
    >
      <div className="flex flex-col gap-5 lg:gap-6">
        <div className="flex flex-col gap-5 lg:gap-[25px] lg:p-[10px]">
          <h2 id="growth-title" className="text-[28px] font-bold leading-[1.6] text-ink lg:text-heading-md">
            {title}
          </h2>
          <p className="text-[16px] leading-[1.6] text-content-secondary lg:text-title">{description}</p>
        </div>
        <div className="w-full lg:max-w-[457px] lg:p-[10px]">
          <NumberedList items={steps} className="gap-5" />
        </div>
      </div>

      <div className="relative mx-auto aspect-[505/461] w-full max-w-[505px] lg:mx-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 640px) 505px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
