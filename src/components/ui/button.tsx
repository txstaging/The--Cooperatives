import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "outline" | "brand-outline" | "inverse" | "inverse-outline";
export type ButtonSize = "sm" | "md" | "lg" | "action";

interface ButtonStyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-brand text-content-inverse hover:bg-brand-strong",
  outline: "border-line-strong bg-surface text-brand-deep hover:border-brand hover:text-brand",
  "brand-outline": "border-brand bg-transparent text-brand hover:bg-brand hover:text-content-inverse",
  inverse: "border-transparent bg-white text-brand-deep hover:bg-mint-lighter",
  "inverse-outline": "border-line-inverse bg-transparent text-white hover:bg-white/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-[51px] rounded-sm px-5 text-label-sm font-extrabold",
  md: "h-[51px] rounded-sm px-5 text-body-sm font-bold",
  lg: "h-[53px] min-w-[189px] rounded-md px-[15px] text-[16px] leading-[27.2px] font-extrabold",
  action: "h-12 rounded-[8px] px-6 text-[16px] font-bold leading-[1.5] tracking-[-0.08px]",
};

/** Shared button styles so links and buttons look identical. */
export function buttonVariants({
  variant = "primary",
  size = "md",
  fullWidth = false,
}: ButtonStyleOptions = {}): string {
  return cn(
    "inline-flex shrink-0 items-center justify-center whitespace-nowrap border-thin transition-colors duration-200",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & ButtonStyleOptions;

export function ButtonLink({ variant, size, fullWidth, className, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonVariants({ variant, size, fullWidth }), className)} {...props} />;
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & ButtonStyleOptions;

export function Button({ variant, size, fullWidth, className, type = "button", ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(buttonVariants({ variant, size, fullWidth }), className)} {...props} />
  );
}
