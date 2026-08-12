import { guild } from "@/data/guild";
import { Crest } from "./Crest";

export function Footer() {
  return (
    <footer className="footer" id="sobre">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2>{guild.name}</h2>
          <p>{guild.subtitle}</p>
          <small>Juntos, superamos limites.</small>
        </div>
        <Crest />
        <div className="socials">
          <span>Siga-nos</span>
          <a href={guild.links.discord} target="_blank" rel="noreferrer">
            <b className="social-icon discord-social">●●</b> Discord
          </a>
          <a href={guild.links.warcraftLogs} target="_blank" rel="noreferrer">
            <b className="social-icon">◉</b> Warcraft Logs
          </a>
          <a href={guild.links.raiderIO} target="_blank" rel="noreferrer">
            <b className="social-icon rio-social">R</b> Raider.IO
          </a>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} {guild.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
