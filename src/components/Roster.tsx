import Image from "next/image";
import type { CSSProperties } from "react";
import { raiders } from "@/data/guild";
import { Panel } from "./Panel";

const roleIcon = { Tank: "◈", Healer: "✚", DPS: "⚔" } as const;

export function Roster() {
  const cols = Math.min(raiders.length, 3) || 1;

  return (
    <Panel title="Elenco em destaque" className="roster-panel">
      <div className="roster-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {raiders.map((raider) => (
          <div className="role-column" key={raider.name}>
            <div className={`role-heading role-${raider.role.toLowerCase()}`}>
              <span>{roleIcon[raider.role]}</span> {raider.role}
            </div>
            <article className="raider-card">
              <div className="avatar" style={{ "--accent": raider.accent } as CSSProperties}>
                <Image src={raider.portrait} alt={`${raider.name}, ${raider.spec}`} fill sizes="150px" />
              </div>
              <div className="raider-copy">
                <h3>{raider.name}</h3>
                <p style={{ color: raider.accent }}>{raider.spec}</p>
                <strong>{raider.ilvl ? `ilvl ${raider.ilvl}` : "ilvl a confirmar"}</strong>
              </div>
              <div className="raider-links">
                <a href={raider.armoryUrl || "#"}>
                  <b>♜</b> Armory
                </a>
                <a href={raider.raiderIoUrl || "#"}>
                  <b className="rio-badge">R</b> Raider.IO
                </a>
                <a href={raider.warcraftLogsUrl || "#"}>
                  <b>▰</b> Warcraft Logs
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>
      <a className="center-action" href="#elenco">
        {raiders.length > 1 ? "Ver elenco completo" : "Elenco completo em breve"} <span>›</span>
      </a>
    </Panel>
  );
}
