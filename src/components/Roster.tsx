import Icon from "./Icon";
import { roster } from "@/data/guild";

const roleIcon: Record<string, string> = {
  tank: "i-shield",
  healer: "i-cross",
  dps: "i-flame",
};

export default function Roster() {
  const cols = Math.min(roster.length, 3) || 1;

  return (
    <section className="block" id="elenco">
      <div className="wrap">
        <div className="section-head">
          <h2>Elenco em Destaque</h2>
        </div>
        <div className="card elenco-card">
          <div className="elenco-cols" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {roster.map((m) => (
              <div className="elenco-col" key={m.name}>
                <div
                  className="elenco-role"
                  style={m.classColorVar ? { ["--class-color" as string]: `var(${m.classColorVar})` } : undefined}
                >
                  <Icon id={roleIcon[m.role]} />
                  {m.roleLabel}
                </div>
                <div className="avatar art-placeholder">
                  <Icon id="i-image" />
                </div>
                <div className="roster-name">{m.name}</div>
                <div
                  className="roster-class"
                  style={
                    m.classColorVar
                      ? { ["--class-color" as string]: `var(${m.classColorVar})`, color: "var(--class-color)" }
                      : undefined
                  }
                >
                  {m.className ?? "Classe a confirmar"}
                </div>
                <div className="roster-ilvl">{m.ilvl ? `ilvl ${m.ilvl}` : "ilvl a confirmar"}</div>
                <div className="roster-links">
                  {m.links.armory && <a href={m.links.armory}>Armory</a>}
                  {m.links.raiderIO && <a href={m.links.raiderIO}>Raider.IO</a>}
                  {m.links.warcraftLogs && <a href={m.links.warcraftLogs}>Warcraft Logs</a>}
                </div>
              </div>
            ))}
          </div>
          <div className="elenco-foot">
            <a href="#elenco">
              {roster.length > 1 ? "Ver elenco completo" : "Elenco completo em breve"}
              <Icon id="i-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
