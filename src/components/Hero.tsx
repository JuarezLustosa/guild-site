import Icon from "./Icon";
import { guild } from "@/data/guild";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-art art-placeholder" aria-hidden="true">
        <Icon id="i-image" />
        <span>Imagem aqui — cena da citadela com o grupo de raid</span>
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="wrap hero-content">
        <Icon id="i-emblem" className="hero-crest" />
        <h1 className="hero-title">{guild.name.toUpperCase()}</h1>
        <div className="ornament-divider">
          <span className="ln" />
          <span className="dm" />
          <span className="ln r" />
        </div>
        <div className="hero-sub">Guilda de Raid &amp; Mythic+</div>
        <p className="hero-copy">{guild.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-gold" href="#recrutamento">
            <Icon id="i-crest" />
            Aplicar
          </a>
          <a className="btn btn-violet" href={guild.links.discord}>
            <Icon id="i-chat" />
            Entrar no Discord
          </a>
        </div>
      </div>
    </section>
  );
}
