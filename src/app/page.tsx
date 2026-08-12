import IconSprite from "@/components/IconSprite";
import PageFrame from "@/components/PageFrame";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import RaidProgress from "@/components/RaidProgress";
import Recruitment from "@/components/Recruitment";
import Roster from "@/components/Roster";
import Achievements from "@/components/Achievements";
import MythicLeaderboard from "@/components/MythicLeaderboard";
import Schedule from "@/components/Schedule";
import GuildIdentity from "@/components/GuildIdentity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <IconSprite />
      <PageFrame />
      <Nav />
      <Hero />

      <section className="block" id="progresso">
        <div className="wrap">
          <div className="progress-grid">
            <RaidProgress />
            <Recruitment />
          </div>
        </div>
      </section>

      <Roster />

      <section className="block" id="mythic">
        <div className="wrap">
          <div className="dash-grid">
            <Achievements />
            <MythicLeaderboard />
            <Schedule />
            <GuildIdentity />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
