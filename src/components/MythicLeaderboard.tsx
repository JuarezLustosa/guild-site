import Icon from "./Icon";
import { mythicLeaderboard } from "@/data/guild";

export default function MythicLeaderboard() {
  return (
    <div className="card dash-card">
      <div className="dash-head">
        <Icon id="i-chart" />
        <h3>Mythic+ Ranking{mythicLeaderboard.isExample ? " (exemplo)" : ""}</h3>
      </div>
      <div className="table-scroll">
        <table className="lb-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Jogador</th>
              <th style={{ textAlign: "right" }}>Pts</th>
            </tr>
          </thead>
          <tbody>
            {mythicLeaderboard.entries.map((e) => (
              <tr key={e.rank}>
                <td className="lb-rank">{e.rank}</td>
                <td>
                  <span className="lb-player">
                    <span className="lb-dot" style={{ ["--class-color" as string]: `var(${e.classColorVar})` }} />
                    {e.name}
                  </span>
                </td>
                <td className="lb-score">{e.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-foot">
        <a className="see-more" href="#">
          Ranking completo
          <Icon id="i-arrow" />
        </a>
      </div>
    </div>
  );
}
