import { comparisonSection, plansSection } from "@/config/content/subscription";
import { Container } from "@/components/ui";
import { cn } from "@/lib/cn";
import { SectionHeading } from "./section-heading";

/*
 * The table always fits its container (no sideways scrolling): fixed layout with
 * a percentage feature column on small screens, tighter padding and smaller type.
 */
const cellPadding = "px-1 py-2 min-[400px]:px-2 sm:p-4";

export function ComparisonSection() {
  const { title, featureHeading, rows } = comparisonSection;
  const { plans } = plansSection;

  return (
    <section aria-labelledby="comparison-title" className="bg-surface-card py-14 sm:py-16">
      <Container size="wide" className="flex flex-col gap-8">
        <SectionHeading title={<span id="comparison-title">{title}</span>} />
        <div className="overflow-hidden rounded-[8px] border border-line-soft">
          <table className="w-full table-fixed border-collapse text-[12px] leading-[1.5] min-[400px]:text-[14px] sm:text-[16px]">
            <colgroup>
              <col className="w-[35%] sm:w-[40%] lg:w-[480px]" />
              {plans.map((plan) => (
                <col key={plan.id} />
              ))}
            </colgroup>
            <thead className="bg-brand-deep text-white">
              <tr>
                <th scope="col" className="px-3 py-2 text-start font-bold sm:p-4">
                  {featureHeading}
                </th>
                {plans.map((plan) => (
                  <th key={plan.id} scope="col" className={cn(cellPadding, "text-center font-bold")}>
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-line-soft bg-white even:bg-surface-muted">
                  <th
                    scope="row"
                    className="h-[55px] px-3 py-2 text-start font-medium text-content-primary sm:p-4"
                  >
                    {row.feature}
                  </th>
                  {plans.map((plan, index) => {
                    const available = row.availability[index] ?? false;
                    return (
                      <td
                        key={plan.id}
                        className={cn(
                          "h-[55px] text-center font-bold",
                          cellPadding,
                          available ? "text-brand" : "text-content-secondary",
                          plan.recommended && "bg-surface-highlight",
                        )}
                      >
                        <span aria-hidden="true">{available ? "✓" : "—"}</span>
                        <span className="sr-only">{available ? "متاح" : "غير متاح"}</span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
