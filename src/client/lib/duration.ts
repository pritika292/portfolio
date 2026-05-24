// Date-range math for the Experience accordion.
//
// Roles are declared with explicit start / end so we don't try to parse the
// human-readable "Jun 2024 - Present" / "May - Jul 2019" date label that the
// UI shows. Computed durations stay correct as time moves forward; the
// Paycom row's "Present" automatically advances each month.

export interface DateYM {
  year: number;
  // 1-12.
  month: number;
}

export function monthsBetween(start: DateYM, end: DateYM): number {
  return (end.year - start.year) * 12 + (end.month - start.month) + 1;
}

// "2y 6m", "11m", "1y".
export function formatDuration(totalMonths: number): string {
  if (totalMonths <= 0) return "0m";
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) return `${months}m`;
  if (months === 0) return `${years}y`;
  return `${years}y ${months}m`;
}

export function nowYM(): DateYM {
  const d = new Date();
  return { year: d.getUTCFullYear(), month: d.getUTCMonth() + 1 };
}
