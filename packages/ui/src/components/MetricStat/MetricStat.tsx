import type { ReactNode } from "react";
import { cx } from "../../lib/cx";
import styles from "./MetricStat.module.scss";

export interface MetricStatProps {
  /** The number or short fact, e.g. "~25%". */
  value: string;
  label: ReactNode;
  /** Optional qualifier shown under the label, e.g. the source of the number. */
  hint?: ReactNode;
  className?: string;
}

export function MetricStat({ value, label, hint, className }: MetricStatProps) {
  return (
    <div className={cx(styles.stat, className)}>
      <p className={styles.value}>{value}</p>
      <p className={styles.label}>{label}</p>
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  );
}
