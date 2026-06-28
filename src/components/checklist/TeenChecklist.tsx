"use client";

import dynamic from "next/dynamic";
import { ChecklistSkeleton } from "@/components/checklist/ChecklistSkeleton";

const TeenChecklistClient = dynamic(
  () =>
    import("@/components/checklist/TeenChecklistClient").then(
      (module) => module.TeenChecklistClient,
    ),
  {
    ssr: false,
    loading: () => <ChecklistSkeleton />,
  },
);

export function TeenChecklist() {
  return <TeenChecklistClient />;
}
