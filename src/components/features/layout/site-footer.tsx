import Link from "next/link";
import { copyright, footerColumns, footerTagline } from "@/config/site";
import { Container, Logo } from "@/components/ui";
import { cn } from "@/lib/cn";

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep pb-6 pt-14 lg:bg-footer lg:pb-[25px] lg:pt-[65px]">
      <Container className="px-6 sm:px-6">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[300px_repeat(3,minmax(0,1fr))] lg:gap-x-10 lg:gap-y-10 xl:flex xl:flex-row xl:items-start xl:gap-0">
          <div className="flex flex-col gap-4 lg:col-span-1 lg:gap-0 xl:me-[117px] xl:w-[300px] xl:shrink-0">
            {/* Mobile: 32px mark, 20px wordmark, 8px gap. */}
            <Logo
              tone="light"
              className="self-start max-lg:gap-2"
              markClassName="max-lg:-m-px max-lg:scale-[0.9412]"
              textClassName="max-lg:text-[20px]"
            />
            <p className="max-w-[329px] text-[14px] leading-[1.5] text-line-inverse lg:max-w-[252px] lg:py-[11px] lg:text-caption lg:text-footer-text">
              {footerTagline}
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:contents xl:flex xl:flex-row xl:gap-[135px]">
            {footerColumns.map((column) => (
              <nav
                key={column.title}
                aria-label={column.title}
                className={cn("flex flex-col gap-2 xl:w-[160px]", column.desktopOnly && "max-lg:hidden")}
              >
                <h2 className="text-body-lg font-bold leading-[1.5] text-content-inverse lg:pb-[7px] lg:leading-[19.25px]">
                  {column.title}
                </h2>
                <ul className="flex flex-col gap-2 text-[16px] leading-[1.5] lg:leading-[19.25px]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[16px] leading-[1.5] text-line-inverse transition-colors hover:text-content-inverse lg:leading-[19.25px] lg:text-footer-link"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.13] pt-6 text-center lg:mt-[45px] lg:border-t-thin lg:border-white/[0.07] lg:pt-5">
          <p className="text-[14px] leading-[1.5] text-line-inverse lg:leading-[17.5px] lg:text-footer-copy">
            {copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
