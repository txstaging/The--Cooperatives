import Image from "next/image";
import { ctaBanner } from "@/config/content/shared";
import { AccentText, ButtonLink } from "@/components/ui";
import { cn } from "@/lib/cn";

/** Concentric tilted rings decorating the banner's bottom-left corner (desktop). */
const rings = [
  { box: "left-[-230px] top-[171px] h-[401.86px] w-[493.79px]", ring: "h-[242px] w-[432px]" },
  { box: "left-[-213.58px] top-[212.31px] h-[357.11px] w-[438.88px]", ring: "h-[215px] w-[384px]" },
  { box: "left-[-188.87px] top-[244.93px] h-[313.69px] w-[385.3px]", ring: "h-[189px] w-[337px]" },
] as const;

/**
 * Mobile frames swap them for three concentric circles. The About frame uses the
 * default size; the Home frame a compact one (smaller type, fixed 298px height,
 * rings pushed further out).
 */
const mobileVariants = {
  default: {
    section: "",
    title: "text-[30px]",
    description: "text-[16px]",
    ringTop: "top-[250px]",
    rings: ["left-[-90px]", "left-[-110px]", "left-[-130px]"],
  },
  compact: {
    section: "h-[298px] lg:h-auto",
    title: "text-[21px]",
    description: "text-[12px]",
    ringTop: "top-[157px]",
    rings: ["left-[-153px]", "left-[-173px]", "left-[-193px]"],
  },
} as const;

const ringSizes = [180, 220, 260] as const;

interface CtaBannerProps {
  mobileSize?: keyof typeof mobileVariants;
}

export function CtaBanner({ mobileSize = "default" }: CtaBannerProps) {
  const { eyebrow, title, description, cta } = ctaBanner;
  const mobile = mobileVariants[mobileSize];

  return (
    <section
      aria-labelledby="cta-title"
      className={cn(
        "relative isolate overflow-hidden rounded-4xl bg-cta-gradient px-6 py-10 lg:min-h-[373.7px] lg:px-10 lg:py-[66px]",
        mobile.section,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {rings.map(({ box, ring }) => (
          <div key={box} className={`absolute hidden items-center justify-center lg:flex ${box}`}>
            <div className={`-rotate-[24.99deg] rounded-[216px] border border-white/[0.12] ${ring}`} />
          </div>
        ))}
        {ringSizes.map((size, index) => (
          <Image
            key={size}
            src={`/images/cta-ring-${size}.svg`}
            alt=""
            width={size}
            height={size}
            unoptimized
            className={cn("absolute max-w-none lg:hidden", mobile.ringTop, mobile.rings[index])}
          />
        ))}
      </div>

      <div className="mx-auto flex max-w-[886px] flex-col items-center gap-4 text-center lg:gap-0">
        <div className="flex flex-col items-center gap-4 lg:gap-[15.1px] lg:pb-4 lg:pt-[3.5px]">
          <p className="text-[16px] font-bold leading-[1.6] text-mint-light lg:text-body-lg lg:font-extrabold lg:uppercase lg:leading-[20.4px] lg:tracking-[0.96px]">
            {eyebrow}
          </p>
          <h2 id="cta-title" className={cn("font-bold leading-[1.6] text-white lg:text-cta", mobile.title)}>
            {/* The mobile frame sets the whole title in white. */}
            <AccentText value={title} accentClassName="lg:text-mint-lighter" />
          </h2>
          <p className={cn("leading-[1.6] text-cta-body lg:text-body-lg lg:leading-[27.2px]", mobile.description)}>
            {description}
          </p>
        </div>
        <ButtonLink
          href={cta.href}
          variant="inverse"
          size="lg"
          className="h-12 w-[190px] min-w-0 rounded-sm text-[14px] font-bold leading-[1.5] tracking-[-0.07px] text-footer lg:h-[53px] lg:w-auto lg:min-w-[189px] lg:rounded-md lg:text-[16px] lg:font-extrabold lg:leading-[27.2px] lg:tracking-normal lg:text-brand-deep"
        >
          {cta.label}
        </ButtonLink>
      </div>
    </section>
  );
}
