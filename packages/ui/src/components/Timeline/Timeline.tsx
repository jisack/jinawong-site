import type { ReactNode } from "react";
import { cx } from "../../lib/cx";
import styles from "./Timeline.module.scss";

export interface TimelineItem {
  /** Human-readable period, e.g. "Jun 2022 – Present". */
  period: string;
  title: string;
  org: string;
  /** Optional context shown after the org, e.g. a location. */
  orgNote?: string;
  current?: boolean;
  /** Short bullet points. Use `children` instead for custom markup. */
  points?: string[];
  children?: ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cx(styles.timeline, className)}>
      {items.map((item) => (
        <li key={`${item.org}-${item.period}`} className={cx(styles.item, item.current && styles.current)}>
          <p className={styles.period}>
            {item.period}
            {item.current && <span className={styles.srOnly}> (current)</span>}
          </p>
          <div className={styles.content}>
            <h3 className={styles.title}>
              {item.title} <span className={styles.org}>· {item.org}</span>
            </h3>
            {item.orgNote && <p className={styles.orgNote}>{item.orgNote}</p>}
            {(item.points?.length || item.children) && (
              <div className={styles.body}>
                {item.points && item.points.length > 0 && (
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {item.children}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
