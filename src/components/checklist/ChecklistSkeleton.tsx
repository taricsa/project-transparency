import { checklistHeading, checklistItems } from "@/content/checklist";

export function ChecklistSkeleton() {
  return (
    <section
      aria-labelledby="checklist-heading-skeleton"
      className="rounded-lg bg-card p-6 ring-1 ring-muted"
    >
      <header className="mb-6">
        <h2 id="checklist-heading-skeleton" className="text-2xl font-semibold text-foreground">
          {checklistHeading.title}
        </h2>
        <p className="mt-2 text-sm text-foreground/75">{checklistHeading.description}</p>
        <p className="mt-3 text-sm font-medium text-primary">
          0 of {checklistItems.length} complete
        </p>
      </header>

      <ul className="space-y-3">
        {checklistItems.map((item) => (
          <li
            key={item.id}
            className="rounded-md border border-muted bg-background p-4"
          >
            <p className="font-medium text-foreground">{item.title}</p>
            <p className="mt-1 text-sm text-foreground/75">{item.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
