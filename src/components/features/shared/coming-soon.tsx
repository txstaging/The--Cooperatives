import { routes } from "@/config/site";
import { ButtonLink, Container } from "@/components/ui";

interface ComingSoonProps {
  title: string;
  description?: string;
}

/** Placeholder for routes that exist in the navigation but have no design yet. */
export function ComingSoon({
  title,
  description = "نعمل على إعداد هذه الصفحة، وستكون متاحة قريبًا.",
}: ComingSoonProps) {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <h1 className="text-[34px] font-bold leading-[1.4] text-ink sm:text-heading">{title}</h1>
      <p className="max-w-xl text-body-lg text-content-secondary">{description}</p>
      <ButtonLink href={routes.home} variant="primary" size="md">
        العودة إلى الرئيسية
      </ButtonLink>
    </Container>
  );
}
