"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { contactForm } from "@/config/content/contact";
import type { ContactFormField } from "@/types";
import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";

const controlClasses =
  "w-full rounded-sm border-thin border-line-neutral bg-surface transition-colors focus:border-brand";

interface FieldProps {
  field: ContactFormField;
  className?: string;
  children: (id: string) => ReactNode;
}

function Field({ field, className, children }: FieldProps) {
  const id = `contact-${field.name}`;
  return (
    <div className={cn("flex flex-col gap-2 lg:gap-[7px]", className)}>
      <label
        htmlFor={id}
        className="text-[13px] font-bold leading-[1.6] text-content-secondary lg:text-caption lg:font-extrabold"
      >
        {field.label}
      </label>
      {children(id)}
    </div>
  );
}

export function ContactForm() {
  const { fields, topics, submitLabel, successMessage } = contactForm;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: send the message to the backend once the contact endpoint exists.
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => setSubmitted(false)}
      aria-label="نموذج التواصل"
      className="rounded-[14px] border border-line-neutral bg-surface-card p-6 lg:border-thin lg:p-[30px]"
    >
      <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-2 lg:gap-[15px]">
        <Field field={fields.name}>
          {(id) => (
            <input
              id={id}
              name={fields.name.name}
              type="text"
              autoComplete="name"
              required
              className={cn(controlClasses, "h-12 px-3 lg:h-[47.45px] lg:px-4 text-body-sm")}
            />
          )}
        </Field>
        <Field field={fields.email}>
          {(id) => (
            <input
              id={id}
              name={fields.email.name}
              type="email"
              dir="ltr"
              autoComplete="email"
              required
              className={cn(controlClasses, "h-12 px-3 lg:h-[47.45px] lg:px-4 text-end text-body-sm")}
            />
          )}
        </Field>
        <Field field={fields.phone}>
          {(id) => (
            <input
              id={id}
              name={fields.phone.name}
              type="tel"
              dir="ltr"
              autoComplete="tel"
              className={cn(controlClasses, "h-12 px-3 lg:h-[47.45px] lg:px-4 text-end text-body-sm")}
            />
          )}
        </Field>
        <Field field={fields.topic}>
          {(id) => (
            <div className="relative">
              <select
                id={id}
                name={fields.topic.name}
                defaultValue={topics[0]}
                className={cn(controlClasses, "h-12 appearance-none pe-3 ps-3 text-[13px] leading-[1.6] text-content-primary lg:h-[44.86px] lg:pe-9 lg:ps-[16.78px] lg:text-[11px] lg:leading-normal lg:text-black")}
              >
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute end-3 top-1/2 hidden size-4 -translate-y-1/2 text-content-muted lg:block"
              />
            </div>
          )}
        </Field>
        <Field field={fields.message} className="lg:col-span-2">
          {(id) => (
            <textarea
              id={id}
              name={fields.message.name}
              required
              rows={4}
              className={cn(controlClasses, "h-[126px] min-h-[126px] resize-y p-3 text-body-sm lg:h-auto lg:min-h-[115px] lg:px-4")}
            />
          )}
        </Field>
      </div>

      <div className="mt-[18px] flex flex-col lg:mt-[17px] lg:flex-row lg:gap-4 lg:flex-wrap lg:items-center">
        <Button
          type="submit"
          variant="primary"
          size="sm"
          className="h-12 w-full text-[14px] font-bold leading-[1.5] tracking-[-0.07px] lg:h-[51px] lg:w-auto lg:text-label-sm lg:font-extrabold lg:tracking-normal"
        >
          {submitLabel}
        </Button>
        {/* Empty until submit, so it adds no space below the button on mobile. */}
        <p role="status" className={cn("text-body-sm text-brand", submitted && "mt-4 lg:mt-0")}>
          {submitted ? successMessage : null}
        </p>
      </div>
    </form>
  );
}
