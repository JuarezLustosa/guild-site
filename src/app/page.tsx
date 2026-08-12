import { Dashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProgressPanel } from "@/components/ProgressPanel";
import { Recruitment } from "@/components/Recruitment";
import { Roster } from "@/components/Roster";
import { guild } from "@/data/guild";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" id="inicio">
        <div className="hero-art" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-content">
          <h1>{guild.name}</h1>
          <div className="gold-rule">
            <span>◆</span>
          </div>
          <h2>{guild.subtitle}</h2>
          <p>{guild.description}</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#recrutamento">
              <span className="button-sigil">✦</span> Aplicar
            </a>
            <a className="button button-purple" href={guild.links.discord} target="_blank" rel="noreferrer">
              <span className="discord-glyph">●●</span> Entrar no Discord
            </a>
          </div>
        </div>
      </section>

      <div className="page-shell">
        <div className="top-grid" id="progresso">
          <ProgressPanel />
          <div id="recrutamento">
            <Recruitment />
          </div>
        </div>
        <div id="elenco">
          <Roster />
        </div>
        <div id="mythicplus">
          <Dashboard />
        </div>
      </div>

      <Footer />
    </main>
  );
}
