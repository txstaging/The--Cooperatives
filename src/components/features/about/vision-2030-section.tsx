import { vision2030Section } from "@/config/content/about";

export function Vision2030Section() {
  const { id, eyebrow, title, description, pillars } = vision2030Section;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="grid scroll-mt-28 grid-cols-1 gap-6 overflow-hidden rounded-4xl bg-surface-card p-6 lg:min-h-[623px] lg:rounded-6xl lg:font-kufi lg:grid-cols-[minmax(0,521px)_minmax(0,438px)] lg:justify-center lg:gap-10 lg:px-8 lg:py-0 xl:justify-start xl:gap-[57px] xl:pe-[95px] xl:ps-[156px]"
    >
      {/* Text column: pinned 66px (+17px padding) from the top, as in Figma. */}
      {/* Mobile: centered Tajawal stack; desktop: Kufi, start-aligned, pinned 66px (+17px) from the top. */}
      <div className="flex flex-col gap-6 text-center lg:gap-[17px] lg:self-start lg:pb-10 lg:pt-[83px] lg:text-start">
        <p className="flex items-center justify-center gap-[9px] text-[14px] font-bold leading-[1.85] text-content-primary lg:justify-start lg:text-[17px] lg:font-extrabold lg:leading-[19px]">
          {eyebrow}
          <span aria-hidden="true" className="hidden h-0.5 w-7 bg-slate lg:block" />
        </p>
        <h2
          id={`${id}-title`}
          className="text-[24px] font-bold leading-[1.6] text-brand lg:min-h-[177px] lg:pt-[14px] lg:text-[40px] lg:leading-[1.85]"
        >
          {title}
        </h2>
        <p className="text-[15px] leading-[1.85] text-content-secondary lg:max-w-[482px] lg:pb-[11px] lg:pt-[15px] lg:text-[18px] lg:leading-[1.9]">
          {description}
        </p>
      </div>

      <ol className="flex flex-col gap-6 lg:self-center">
        {pillars.map((pillar) => (
          <li
            key={pillar.index}
            className="flex flex-col gap-[6px] rounded-3xl bg-surface-tint/5 p-5 lg:min-h-[117.4px] lg:gap-0 lg:border-thin lg:border-surface-tint/10 lg:px-[22px] lg:pb-[22px] lg:pt-3"
          >
            <span className="text-[12px] font-bold leading-[1.85] text-brand lg:leading-[22.8px]">{pillar.index}</span>
            <h3 className="text-[16px] font-bold leading-[1.85] text-content-secondary lg:pt-1 lg:leading-[1.6]">
              {pillar.title}
            </h3>
            <p className="text-[13px] leading-[1.85] text-content-secondary lg:pt-[6px] lg:text-[14px] lg:leading-[1.4]">
              {pillar.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
