"use client";

import Link from "next/link";
import type { NavLink } from "@/types";
import { cn } from "@/lib/cn";
import { useActivePath } from "./use-active-path";

interface DesktopNavProps {
  links: readonly NavLink[];
}

export function DesktopNav({ links }: DesktopNavProps) {
  const isActive = useActivePath();

  return (
    <nav aria-label="القائمة الرئيسية" className="hidden lg:block">
      <ul className="flex items-center gap-[30px]">
        {links.map((link) => {
          const active = isActive(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "block whitespace-nowrap py-7 text-body-lg leading-[22.75px] transition-colors",
                  active
                    ? "text-brand underline decoration-[8%] underline-offset-[6px]"
                    : "text-content-secondary hover:text-brand",
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
