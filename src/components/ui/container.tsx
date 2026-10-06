import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType> = {
  as?: T;
  size?: "default" | "wide";
} & Omit<ComponentPropsWithoutRef<T>, "as">;

const sizeClasses = {
  default: "max-w-container-gutter",
  wide: "max-w-wide-gutter",
} as const;

export function Container<T extends ElementType = "div">({
  as,
  size = "default",
  className,
  ...props
}: ContainerProps<T>) {
  const Component: ElementType = as ?? "div";
  return (
    <Component
      className={cn("mx-auto w-full px-8", sizeClasses[size], className)}
      {...props}
    />
  );
}
