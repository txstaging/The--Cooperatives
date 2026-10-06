import { purposeStatements } from "@/config/content/about";

export function PurposeSection() {
  return (
    <section aria-label="رؤيتنا ورسالتنا" className="mx-auto w-full max-w-[1164px]">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-[34px]">
        {purposeStatements.map((statement) => (
          <li
            key={statement.eyebrow}
            className="flex flex-col gap-[14px] rounded-xl bg-brand p-6 text-white lg:min-h-[222px] lg:gap-[19.3px] lg:px-8 lg:pb-4 lg:pt-[21px]"
          >
            <p className="text-body-lg font-bold leading-[1.6] lg:font-extrabold lg:uppercase lg:leading-[19.25px] lg:tracking-[0.88px]">
              {statement.eyebrow}
            </p>
            <h2 className="text-[24px] font-bold leading-[1.6] lg:leading-[42px]">{statement.title}</h2>
            <p className="text-body leading-[1.6] lg:leading-[28px]">{statement.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
