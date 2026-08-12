import { recruitment } from "@/data/guild";
import { Panel } from "./Panel";

function ClassGlyph({ icon }: { icon: string }) {
  return <span aria-hidden="true" className={`class-glyph glyph-${icon}`} />;
}

export function Recruitment() {
  return (
    <Panel title="Recrutamento" className="recruit-panel">
      <div className="recruit-grid">
        {recruitment.map((need) => (
          <article className={`recruit-card tone-${need.tone}`} key={need.className}>
            <ClassGlyph icon={need.icon} />
            <div className="recruit-copy">
              <h3>{need.className}</h3>
              <p>{need.spec}</p>
            </div>
            <span className="priority">{need.priority}</span>
          </article>
        ))}
      </div>
      <a className="panel-action" href="#recrutamento">
        Ver todos os requisitos <span>›</span>
      </a>
    </Panel>
  );
}
