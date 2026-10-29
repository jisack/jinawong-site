import type { ReactNode } from "react";
import { cx } from "../../lib/cx";
import styles from "./SectionHeading.module.scss";

export interface SectionHeadingProps {
  title: ReactNode;
  eyebrow?: ReactNode;
  description?: ReactNode;
  level?: 1 | 2 | 3;
  /** Set to link the heading with `aria-labelledby` on its section. */
  id?: string;
  className?: string;
}

export function SectionHeading({ title, eyebrow, description, level = 2, id, className }: SectionHeadingProps) {
  const Heading = `h${level}` as const;
  return (
    <header className={cx(styles.heading, styles[`level${level}`], className)}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Heading id={id} className={styles.title}>
        {title}
      </Heading>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}
