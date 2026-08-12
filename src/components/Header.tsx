import { guild } from "@/data/guild";
import { Crest } from "./Crest";

const nav = ["Início", "Elenco", "Progresso", "Mythic+", "Recrutamento", "Sobre"];

function toAnchor(label: string) {
  return label
    .toLowerCase()
    .replace("+", "plus")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label={`${guild.name} - início`}>
        <Crest small />
        <span>{guild.name}</span>
      </a>
      <nav className="nav" aria-label="Principal">
        {nav.map((item, index) => (
          <a className={index === 0 ? "active" : ""} href={`#${toAnchor(item)}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <a className="discord-link" href={guild.links.discord} target="_blank" rel="noreferrer">
        <span className="discord-dot">●</span> Discord
      </a>
    </header>
  );
}
