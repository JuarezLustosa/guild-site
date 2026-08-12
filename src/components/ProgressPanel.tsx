import { progress } from "@/data/guild";
import { Panel } from "./Panel";

export function ProgressPanel() {
  return (
    <Panel title="Progresso atual" className="progress-panel">
      <div className="progress-raid">
        <div className="raid-art" role="img" aria-label="Arte da Citadela das Sombras" />
        <div className="raid-info">
          <h3>{progress.raid}</h3>
          <div className="progress-score">
            {progress.killed}/{progress.total} <span>Mítico</span>
          </div>
          <div className="boss-track" aria-label={`${progress.killed} de ${progress.total} chefes derrotados`}>
            {Array.from({ length: progress.total }).map((_, index) => (
              <span className={index < progress.killed ? "done" : ""} key={index}>
                {index < progress.killed ? "✓" : ""}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="progress-stats">
        <div>
          <span className="stat-icon trophy">♜</span>
          <span className="stat-copy">
            <em>Realm</em>
            <strong>{progress.realmRank}</strong>
          </span>
        </div>
        <div>
          <span className="stat-icon shield">◆</span>
          <span className="stat-copy">
            <em>Ranking</em>
            <strong>{progress.ranking}</strong>
          </span>
        </div>
        <div>
          <span className="stat-icon medal">✦</span>
          <span className="stat-copy">
            <em>AOTC</em>
            <strong className="success">{progress.aotc}</strong>
          </span>
        </div>
      </div>
    </Panel>
  );
}
