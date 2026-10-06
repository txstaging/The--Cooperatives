import Link from "next/link";
import { siteConfig, routes } from "@/config/site";
import { cn } from "@/lib/cn";

interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
  markClassName?: string;
  textClassName?: string;
}

/** Brand mark: rounded square with a gold ring and a tilted green leaf. */
function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("relative block size-[34px] shrink-0 rounded-[10px] border-thin border-brand", className)}
    >
      <span className="absolute left-[6.81px] top-[6.75px] size-[18.2px] rounded-full border-thin border-gold" />
      <span className="absolute left-[7.41px] top-[7.39px] flex size-[17px] items-center justify-center">
        <span className="block h-[18px] w-[6px] rotate-45 rounded-[4px] bg-brand" />
      </span>
    </span>
  );
}

export function Logo({ tone = "dark", className, markClassName, textClassName }: LogoProps) {
  return (
    <Link
      href={routes.home}
      aria-label={`${siteConfig.name} — الصفحة الرئيسية`}
      className={cn("inline-flex items-center gap-[10px]", className)}
    >
      <LogoMark className={markClassName} />
      <span
        className={cn(
          "whitespace-nowrap text-[19px] font-extrabold leading-[33.25px]",
          tone === "dark" ? "text-ink" : "text-content-inverse",
          textClassName,
        )}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
