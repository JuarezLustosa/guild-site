import Icon from "./Icon";
import { guild } from "@/data/guild";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <div className="footer-name">{guild.name.toUpperCase()}</div>
          <div className="footer-sub">Guilda de Raid &amp; Mythic+</div>
          <div className="footer-tagline">&quot;Juntos, superamos limites.&quot;</div>
        </div>
        <Icon id="i-emblem" className="footer-crest" />
        <div className="footer-links" id="discord">
          <h4>Siga-nos</h4>
          <a href={guild.links.discord}>
            <Icon id="i-chat" />
            Discord
          </a>
          <a href={guild.links.warcraftLogs}>
            <Icon id="i-chart" />
            Warcraft Logs
          </a>
          <a href={guild.links.raiderIO}>
            <Icon id="i-star" />
            Raider.IO
          </a>
        </div>
      </div>
      <div className="wrap">
        <div className="footer-bottom">
          © {guild.name}. Todos os direitos reservados. Mockup conceitual — não afiliado à Blizzard
          Entertainment.
        </div>
      </div>
    </footer>
  );
}
