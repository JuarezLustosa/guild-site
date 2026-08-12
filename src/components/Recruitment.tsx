import Icon from "./Icon";
import { recruitment } from "@/data/guild";

export default function Recruitment() {
  return (
    <div className="card recruit-card" id="recrutamento">
      <div className="eyebrow" style={{ marginBottom: 2 }}>
        Vagas abertas{recruitment.isExample ? " · exemplo" : ""}
      </div>
      <h2 className="card-title" style={{ marginTop: 6 }}>
        Recrutamento
      </h2>
      <div className="recruit-grid">
        {recruitment.roles.map((r) => (
          <div className="role-card" style={{ ["--class-color" as string]: `var(${r.classColorVar})` }} key={r.className}>
            <div className="role-icon">
              <Icon id={r.icon} />
            </div>
            <div className="role-name">{r.className}</div>
            <div className="role-spec">{r.spec}</div>
            <span className={`priority ${r.priority}`}>{r.priority === "alta" ? "Alta" : "Média"}</span>
          </div>
        ))}
      </div>
      <div className="card-foot">
        <a className="see-more" href="#recrutamento">
          Ver todos os requisitos
          <Icon id="i-arrow" />
        </a>
      </div>
    </div>
  );
}
