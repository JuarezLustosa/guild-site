import type { ReactNode } from "react";

type PanelProps = {
  title?: string;
  className?: string;
  children: ReactNode;
};

export function Panel({ title, className = "", children }: PanelProps) {
  return (
    <section className={`panel ${className}`}>
      {title ? <h2 className="panel-title">{title}</h2> : null}
      {children}
    </section>
  );
}
