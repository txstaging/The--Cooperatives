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
    <section aria-labelledby="comparison-title" className="bg-surface-muted py-12 lg:bg-surface-card lg:py-16">
      <Container size="wide" className="flex flex-col gap-8">
        <SectionHeading title={<span id="comparison-title">{title}</span>} />

        {/* Phones (Figma mobile frame): one block per feature with the three plans side by side. */}
        <ul className="overflow-hidden rounded-[8px] border border-line-soft md:hidden">
          {rows.map((row) => (
            <li
              key={row.feature}
              className="flex flex-col gap-2 border-b border-line-soft bg-white p-4 leading-[1.5] last:border-b-0 even:bg-surface-muted"
            >
              <h3 className="text-[18px] font-bold text-ink">{row.feature}</h3>
              <dl className="grid grid-cols-3 gap-2 text-center">
                {plans.map((plan, index) => {
                  const available = row.availability[index] ?? false;
                  return (
                    <div
                      key={plan.id}
                      className={cn(
                        "flex flex-col gap-1 p-2",
                        plan.recommended && "bg-surface-highlight",
                      )}
                    >
                      <dt className="text-[14px] font-medium text-content-subtle">{plan.name}</dt>
                      <dd
                        className={cn(
                          "text-[20px] font-bold",
                          available ? "text-brand" : "text-content-subtle",
                        )}
                      >
                        <span aria-hidden="true">{available ? "✓" : "—"}</span>
                        <span className="sr-only">{available ? "متاح" : "غير متاح"}</span>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </li>
          ))}
        </ul>

        <div className="hidden overflow-hidden rounded-[8px] border border-line-soft md:block">
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
