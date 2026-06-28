"use client";

import {
  useCallback,
  useId,
  useState,
  useSyncExternalStore,
} from "react";
import { checklistHeading, checklistItems } from "@/content/checklist";
import { getSourceLabel } from "@/content/sources";

const STORAGE_KEY = "pt-checklist-v1";
const CHECKLIST_EVENT = "pt-checklist-change";
const EMPTY_CHECKLIST: Record<string, boolean> = {};

let hasLoaded = false;
let cachedSnapshot: Record<string, boolean> = EMPTY_CHECKLIST;

function readChecklist(): Record<string, boolean> {
  if (hasLoaded) {
    return cachedSnapshot;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    hasLoaded = true;

    if (!raw) {
      cachedSnapshot = EMPTY_CHECKLIST;
      return cachedSnapshot;
    }

    cachedSnapshot = JSON.parse(raw) as Record<string, boolean>;
    return cachedSnapshot;
  } catch {
    hasLoaded = true;
    cachedSnapshot = EMPTY_CHECKLIST;
    return cachedSnapshot;
  }
}

function invalidateChecklistCache() {
  hasLoaded = false;
}

function writeChecklist(next: Record<string, boolean>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Keep checklist functional in memory when persistence is blocked or full.
  }

  hasLoaded = true;
  cachedSnapshot = next;
  window.dispatchEvent(new Event(CHECKLIST_EVENT));
}

function subscribe(callback: () => void) {
  const onStoreChange = (event: Event) => {
    if (event.type === "storage") {
      const storageEvent = event as StorageEvent;
      if (storageEvent.key !== null && storageEvent.key !== STORAGE_KEY) {
        return;
      }
      invalidateChecklistCache();
    }
    callback();
  };

  window.addEventListener(CHECKLIST_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener(CHECKLIST_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function useChecklistState() {
  const checked = useSyncExternalStore<Record<string, boolean>>(
    subscribe,
    readChecklist,
    () => EMPTY_CHECKLIST,
  );

  const setItemChecked = useCallback((id: string, value: boolean) => {
    writeChecklist({ ...readChecklist(), [id]: value });
  }, []);

  return { checked, setItemChecked };
}

function ChecklistCitations({ ids }: { ids: number[] }) {
  const uniqueIds = [...new Set(ids)];

  return (
    <sup className="ml-0.5 inline-flex gap-0.5 text-[0.65em] font-medium text-accent">
      {uniqueIds.map((id) => (
        <a
          key={id}
          href={`#source-${id}`}
          className="underline-offset-2 hover:underline"
          aria-label={`Citation ${id}: ${getSourceLabel(id)}`}
        >
          [{id}]
        </a>
      ))}
    </sup>
  );
}

export function TeenChecklistClient() {
  const baseId = useId();
  const { checked, setItemChecked } = useChecklistState();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const completedCount = checklistItems.filter((item) => checked[item.id]).length;

  return (
    <section aria-labelledby={`${baseId}-heading`} className="rounded-lg bg-card p-6 ring-1 ring-muted">
      <header className="mb-6">
        <h2 id={`${baseId}-heading`} className="text-2xl font-semibold text-foreground">
          {checklistHeading.title}
        </h2>
        <p className="mt-2 text-sm text-foreground/75">{checklistHeading.description}</p>
        <p className="mt-3 text-sm font-medium text-primary">
          {completedCount} of {checklistItems.length} complete
        </p>
      </header>

      <ul className="space-y-3">
        {checklistItems.map((item) => {
          const isExpanded = expanded[item.id] ?? false;
          const inputId = `${baseId}-${item.id}`;

          return (
            <li
              key={item.id}
              className="rounded-md border border-muted bg-background"
            >
              <div className="flex min-h-11 items-start gap-3 p-4">
                <input
                  id={inputId}
                  type="checkbox"
                  checked={Boolean(checked[item.id])}
                  onChange={(event) =>
                    setItemChecked(item.id, event.target.checked)
                  }
                  className="mt-1 h-5 w-5 shrink-0 accent-accent"
                />
                <div className="flex-1">
                  <label htmlFor={inputId} className="cursor-pointer font-medium text-foreground">
                    {item.title}
                    <ChecklistCitations ids={item.citations} />
                  </label>
                  <p className="mt-1 text-sm text-foreground/75">{item.summary}</p>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`${inputId}-details`}
                    onClick={() =>
                      setExpanded((prev) => ({
                        ...prev,
                        [item.id]: !isExpanded,
                      }))
                    }
                    className="mt-2 min-h-11 text-sm font-medium text-accent underline-offset-2 hover:underline"
                  >
                    {isExpanded ? "Hide details" : "Learn more"}
                  </button>
                </div>
              </div>

              {isExpanded ? (
                <div
                  id={`${inputId}-details`}
                  className="border-t border-muted px-4 pb-4 pt-2 text-sm leading-relaxed text-foreground/80"
                >
                  {item.details}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
