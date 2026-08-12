import Icon from "./Icon";
import { guild } from "@/data/guild";

const links = [
  { href: "#inicio", label: "Início", active: true },
  { href: "#elenco", label: "Elenco" },
  { href: "#progresso", label: "Progresso" },
  { href: "#mythic", label: "Mythic+" },
  { href: "#recrutamento", label: "Recrutamento" },
  { href: "#sobre", label: "Sobre" },
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <Icon id="i-emblem" className="emblem" />
          <span className="brand-name">{guild.name.toUpperCase()}</span>
        </div>
        <ul className="navlinks">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={l.active ? "active" : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="discord-btn" href={guild.links.discord}>
          <Icon id="i-chat" />
          Discord
        </a>
      </div>
    </nav>
  );
}
