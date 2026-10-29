import type { ReactNode } from "react";
import { cx } from "../../lib/cx";
import { Tag } from "../Tag/Tag";
import styles from "./Card.module.scss";

export interface CardProps {
  title: ReactNode;
  /** Small label above the title, e.g. a company or period. */
  eyebrow?: ReactNode;
  /** Makes the whole card clickable through a single, accessible title link. */
  href?: string;
  headingLevel?: 2 | 3 | 4;
  /** Labels pinned to the bottom of the card. Plain strings, so Astro can pass them. */
  tags?: readonly string[];
  /** Custom content pinned to the bottom of the card (React callers). */
  footer?: ReactNode;
  as?: "article" | "div" | "li";
  className?: string;
  children?: ReactNode;
}

export function Card({
  title,
  eyebrow,
  href,
  headingLevel = 3,
  tags,
  footer,
  as: Element = "article",
  className,
  children,
}: CardProps) {
  const Heading = `h${headingLevel}` as const;
  return (
    <Element className={cx(styles.card, href && styles.interactive, className)}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Heading className={styles.title}>
        {href ? (
          <a className={styles.link} href={href}>
            {title}
          </a>
        ) : (
          title
        )}
      </Heading>
      {children && <div className={styles.body}>{children}</div>}
      {(tags?.length || footer) && (
        <div className={styles.footer}>
          {tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
          {footer}
        </div>
      )}
    </Element>
  );
}
