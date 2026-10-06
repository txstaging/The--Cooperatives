import Image from "next/image";
import { trustSection } from "@/config/content/subscription";
import { Container } from "@/components/ui";

export function TrustSection() {
  const { title, points, image } = trustSection;

  return (
    <section aria-labelledby="trust-title" className="py-12 lg:py-16">
      <Container
        size="wide"
        className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,590fr)_minmax(0,587fr)] lg:gap-x-[71px]"
      >
        <div className="flex flex-col gap-6">
          <h2
            id="trust-title"
            className="text-[28px] font-bold leading-[1.25] text-ink lg:text-[24px] lg:text-content-primary"
          >
            {title}
          </h2>
          <ul className="flex flex-col gap-4">
            {points.map((point) => (
              <li
                key={point.title}
                className="flex w-full items-center gap-4 lg:h-12 lg:max-w-[521px] lg:rounded-[15px] lg:border-[0.5px] lg:border-content-secondary/[0.13] lg:bg-surface-card lg:p-4"
              >
                <Image
                  src={point.icon.src}
                  alt={point.icon.alt}
                  width={point.icon.width}
                  height={point.icon.height}
                  unoptimized
                  className="size-6 shrink-0"
                />
                <span className="text-body-lg font-medium leading-[1.5] text-ink lg:text-content-primary">
                  {point.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[208px] w-full overflow-hidden rounded-[8px] lg:aspect-[587/360] lg:h-auto">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1250px) 587px, (min-width: 1024px) 47vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
