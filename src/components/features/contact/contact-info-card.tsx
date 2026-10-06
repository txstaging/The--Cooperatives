import { contactInfo } from "@/config/content/contact";

export function ContactInfoCard() {
  const { title, details } = contactInfo;

  return (
    <section
      aria-labelledby="contact-info-title"
      className="flex flex-col gap-2 rounded-[14px] bg-surface-card p-6 lg:block lg:p-[30px]"
    >
      <h2
        id="contact-info-title"
        className="text-[14px] font-bold leading-[1.6] text-content-secondary lg:pb-[6px] lg:pt-[3px] lg:text-caption lg:font-extrabold lg:tracking-[0.88px]"
      >
        {title}
      </h2>
      <dl className="flex flex-col gap-2 lg:block">
        {details.map((detail) => (
          <div
            key={detail.label}
            className="flex flex-col gap-[10px] border-b border-line-neutral py-4 lg:block lg:border-b-thin lg:py-[17px]"
          >
            <dt className="text-body-lg font-bold leading-[1.6] text-content-primary lg:leading-[21px]">
              {detail.label}
            </dt>
            <dd className="text-body-sm leading-[1.6] text-content-secondary lg:mt-3 lg:leading-[19.25px]">
              {detail.href ? (
                <a
                  href={detail.href}
                  dir={detail.dir}
                  className="inline-block transition-colors hover:text-brand"
                >
                  {detail.value}
                </a>
              ) : (
                <span dir={detail.dir}>{detail.value}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
