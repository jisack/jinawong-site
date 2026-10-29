import { Button, Card, MetricStat, Tag, ThemeToggle } from "@jj/ui";
import { useId, useState } from "react";
import styles from "./Playground.module.scss";

const variants = ["primary", "secondary", "ghost"] as const;
const sizes = ["sm", "md", "lg"] as const;

/** The one hydrated island on the site: live controls over library components. */
export default function Playground() {
  const [variant, setVariant] = useState<(typeof variants)[number]>("primary");
  const [size, setSize] = useState<(typeof sizes)[number]>("md");
  const [clicks, setClicks] = useState(0);
  const id = useId();

  return (
    <div className={styles.playground}>
      <div className={styles.controls}>
        <fieldset>
          <legend>Variant</legend>
          {variants.map((v) => (
            <label key={v}>
              <input type="radio" name={`${id}-variant`} checked={variant === v} onChange={() => setVariant(v)} />
              {v}
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>Size</legend>
          {sizes.map((s) => (
            <label key={s}>
              <input type="radio" name={`${id}-size`} checked={size === s} onChange={() => setSize(s)} />
              {s}
            </label>
          ))}
        </fieldset>
        <div className={styles.theme}>
          <span>Theme</span>
          <ThemeToggle />
        </div>
      </div>

      <div className={styles.stage}>
        <Button variant={variant} size={size} onClick={() => setClicks((c) => c + 1)}>
          Click me
        </Button>
        <p className={styles.output} aria-live="polite">
          Clicked {clicks} {clicks === 1 ? "time" : "times"}
        </p>
      </div>

      <div className={styles.preview}>
        <Card
          eyebrow="Live island"
          title="Hydrated with client:visible"
          footer={
            <>
              <Tag variant="accent">{variant}</Tag>
              <Tag>{size}</Tag>
            </>
          }
        >
          <p>This card re-renders as you change the controls.</p>
        </Card>
        <MetricStat value={String(clicks)} label="clicks so far" />
      </div>
    </div>
  );
}
