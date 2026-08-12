import Icon from "./Icon";
import { guild } from "@/data/guild";

export default function Schedule() {
  return (
    <div className="card dash-card">
      <div className="dash-head">
        <Icon id="i-calendar" />
        <h3>Horários de Raid</h3>
      </div>
      {guild.schedule.map((s) => (
        <div className="sched-row" key={s.day}>
          <div className="sched-day">
            <Icon id="i-calendar" />
            <div>
              <div className="sched-name">{s.day}</div>
              <div className="sched-time">{s.time}</div>
            </div>
          </div>
          <span className="badge-raid">Raid</span>
        </div>
      ))}
      <div className="card-foot">
        <a className="see-more" href="#">
          Calendário completo
          <Icon id="i-arrow" />
        </a>
      </div>
    </div>
  );
}
