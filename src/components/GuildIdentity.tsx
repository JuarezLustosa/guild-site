import Icon from "./Icon";

export default function GuildIdentity() {
  return (
    <div className="card dash-card identity-card" id="sobre">
      <div className="dash-head">
        <Icon id="i-emblem" />
        <h3>Destaques da Guilda</h3>
      </div>
      <Icon id="i-emblem" className="identity-crest" />
      <div className="identity-line">
        Compromisso. Disciplina.
        <br />
        Progresso constante.
      </div>
      <div className="identity-line accent">
        Mais que uma guilda,
        <br />
        uma família.
      </div>
    </div>
  );
}
