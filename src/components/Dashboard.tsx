import { kills, mythicRanking, schedule } from "@/data/guild";
import { Crest } from "./Crest";
import { Panel } from "./Panel";

export function Dashboard() {
  return (
    <div className="dashboard-grid">
      <Panel title="Últimas conquistas" className="compact-panel kills-panel">
        <div className="timeline">
          {kills.map((kill) => (
            <div className="timeline-item" key={kill.boss}>
              <span className="timeline-node">✦</span>
              <div>
                <strong>{kill.boss}</strong>
                <small>{kill.date}</small>
              </div>
            </div>
          ))}
        </div>
        <a className="panel-action" href="#progresso">
          Ver todas as kills <span>›</span>
        </a>
      </Panel>

      <Panel title="Mythic+ ranking" className="compact-panel">
        <div className="ranking-table">
          <div className="ranking-head">
            <span>#</span>
            <span>Jogador</span>
            <span>Pontuação</span>
          </div>
          {mythicRanking.map((player, index) => (
            <div className="ranking-row" key={player.name}>
              <span>{index + 1}</span>
              <strong>
                <i className="class-mini">{player.classMark}</i>
                {player.name}
              </strong>
              <span className="score">{player.score}</span>
            </div>
          ))}
        </div>
        <a className="panel-action" href="#mythicplus">
          Ver ranking completo <span>›</span>
        </a>
      </Panel>

      <Panel title="Horários de raid" className="compact-panel">
        <div className="schedule-list">
          {schedule.map((slot) => (
            <div className="schedule-row" key={slot.day}>
              <span className="calendar-icon">▦</span>
              <div>
                <strong>{slot.day}</strong>
                <small>{slot.time}</small>
              </div>
              <span className="raid-tag">Raid</span>
            </div>
          ))}
        </div>
        <a className="panel-action" href="#sobre">
          Ver calendário completo <span>›</span>
        </a>
      </Panel>

      <Panel title="Destaques da guilda" className="compact-panel identity-panel">
        <Crest />
        <p>
          Compromisso. Disciplina.
          <br />
          Progresso constante.
        </p>
        <strong>
          Mais que uma guilda,
          <br />
          uma família.
        </strong>
      </Panel>
    </div>
  );
}
