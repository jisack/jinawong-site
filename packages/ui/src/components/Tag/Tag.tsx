import type { ReactNode } from "react";
import { cx } from "../../lib/cx";
import styles from "./Tag.module.scss";

export interface TagProps {
  variant?: "neutral" | "accent" | "outline";
  className?: string;
  children: ReactNode;
}

export function Tag({ variant = "neutral", className, children }: TagProps) {
  return <span className={cx(styles.tag, styles[variant], className)}>{children}</span>;
}

/** Alias: a Badge is a Tag used for status rather than taxonomy. */
export const Badge = Tag;
