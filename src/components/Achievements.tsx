import Icon from "./Icon";
import { achievements } from "@/data/guild";

export default function Achievements() {
  return (
    <div className="card dash-card">
      <div className="dash-head">
        <Icon id="i-banner" />
        <h3>Últimas Conquistas{achievements.isExample ? " (exemplo)" : ""}</h3>
      </div>
      <div className="timeline">
        {achievements.items.map((a) => (
          <div className="timeline-item" key={a.boss}>
            <div className="timeline-boss">{a.boss}</div>
            <div className="timeline-date">{a.date}</div>
          </div>
        ))}
      </div>
      <div className="card-foot">
        <a className="see-more" href="#">
          Ver todas as kills
          <Icon id="i-arrow" />
        </a>
      </div>
    </div>
  );
}
