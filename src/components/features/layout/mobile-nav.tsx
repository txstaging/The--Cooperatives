"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import type { CallToAction, NavLink } from "@/types";
import { ButtonLink, Logo } from "@/components/ui";
import { cn } from "@/lib/cn";
import { LanguageSwitch } from "./language-switch";
import { useActivePath } from "./use-active-path";

interface MobileNavProps {
  links: readonly NavLink[];
  cta: CallToAction;
}

const DESKTOP_QUERY = "(min-width: 1024px)";

/** Hamburger button + slide-in drawer shown below the `lg` breakpoint. */
export function MobileNav({ links, cta }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname();
  const isActive = useActivePath();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close the drawer whenever the route changes (state sync during render).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
      toggle?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="فتح القائمة"
        onClick={() => setOpen(true)}
        // Figma sits the icon in a 53px box with 10px bottom padding; the negative
        // margin widens the tap target without moving the icon.
        className="-mx-3 flex h-[53px] items-center px-3 pb-[10px] transition-opacity hover:opacity-70"
      >
        <Image src="/icons/menu.svg" alt="" width={21} height={24} unoptimized />
      </button>

      <div
        className={cn(
          // overflow-hidden clips the off-canvas panel so it never widens the page (iOS Safari);
          // invisible removes it from hit-testing and layout overflow once the fade ends.
          "fixed inset-0 z-50 overflow-hidden transition-[opacity,visibility] duration-300",
          open ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0",
        )}
        inert={!open}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]" onClick={close} />

        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="القائمة الرئيسية"
          className={cn(
            "absolute inset-y-0 right-0 flex w-[min(320px,85vw)] flex-col bg-surface shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-header shrink-0 items-center justify-between border-b-thin border-line px-4">
            <Logo />
            <button
              ref={closeRef}
              type="button"
              aria-label="إغلاق القائمة"
              onClick={close}
              className="flex size-11 items-center justify-center rounded-sm text-ink transition-colors hover:text-brand"
            >
              <X className="size-6" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="القائمة الرئيسية" className="flex-1 overflow-y-auto p-4">
            <ul className="flex flex-col gap-1">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onClick={close}
                      className={cn(
                        "flex min-h-12 items-center rounded-sm px-3 text-body-lg transition-colors",
                        active
                          ? "bg-brand/5 font-bold text-brand"
                          : "text-content-secondary hover:bg-surface-card hover:text-brand",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-4 border-t-thin border-line p-4">
            <ButtonLink href={cta.href} variant="primary" size="sm" className="min-w-0 flex-1" onClick={close}>
              {cta.label}
            </ButtonLink>
            <LanguageSwitch className="px-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
