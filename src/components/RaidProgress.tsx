import Icon from "./Icon";
import { raidProgress } from "@/data/guild";

export default function RaidProgress() {
  const pct = (raidProgress.bossesKilled / raidProgress.bossesTotal) * 100;
  const nodes = Array.from({ length: raidProgress.bossesTotal }, (_, i) => i < raidProgress.bossesKilled);

  return (
    <div className="card progress-card">
      <div className="eyebrow" style={{ marginBottom: 10 }}>
        Temporada Atual{raidProgress.isExample ? " · exemplo — atualizar com dados reais" : ""}
      </div>
      <div className="raid-head">
        <div className="raid-thumb art-placeholder">
          <Icon id="i-image" />
        </div>
        <div>
          <div className="raid-name">{raidProgress.raidName}</div>
          <div className="eyebrow" style={{ marginTop: 3 }}>
            Modo {raidProgress.difficulty}
          </div>
        </div>
      </div>
      <div className="raid-fraction">
        <span className="n">
          {raidProgress.bossesKilled}/{raidProgress.bossesTotal}
        </span>
        <span className="m">{raidProgress.difficulty.toUpperCase()}</span>
      </div>
      <div className="node-track">
        <div className="line" />
        <div className="line-done" style={{ width: `${pct}%` }} />
        <div className="node-row">
          {nodes.map((done, i) => (
            <div className={`node${done ? " done" : ""}`} key={i}>
              {done && <Icon id="i-check" />}
            </div>
          ))}
        </div>
      </div>
      <div className="stat-row">
        <div className="stat-item">
          <Icon id="i-crest" />
          <div>
            <div className="stat-value">{raidProgress.realmRank}</div>
            <div className="stat-label">Realm</div>
          </div>
        </div>
        <div className="stat-item">
          <Icon id="i-trophy" />
          <div>
            <div className="stat-value">{raidProgress.regionRank}</div>
            <div className="stat-label">Ranking</div>
          </div>
        </div>
        <div className="stat-item">
          <Icon id="i-star" />
          <div>
            <div className="stat-value ok">{raidProgress.aotc ? "Concluído" : "Pendente"}</div>
            <div className="stat-label">AOTC</div>
          </div>
        </div>
      </div>
    </div>
  );
}
