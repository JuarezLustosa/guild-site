export const guild = {
  name: "Pode Wipar",
  realm: "Stormrage",
  region: "US",
  tagline:
    "Foco em progresso, organização e comunidade. Todo wipe é ensaio — a vitória é hábito. Juntos, alcançamos o próximo nível.",
  links: {
    // TODO: adicionar o link de convite do Discord
    discord: "#",
    warcraftLogs: "https://www.warcraftlogs.com/guild/us/stormrage/pode%20wipar",
    raiderIO: "https://raider.io/guilds/us/stormrage/Pode%20Wipar",
    armory: "https://worldofwarcraft.blizzard.com/pt-br/guild/us/stormrage/pode-wipar/",
  },
  schedule: [
    { day: "Quarta-feira", time: "20:00–22:00" },
    { day: "Quinta-feira", time: "20:00–22:00" },
  ],
};

// TODO: substituir pelos números reais assim que confirmados no Warcraft Logs / Raider.IO
export const raidProgress = {
  isExample: true,
  raidName: "A Citadela das Sombras",
  difficulty: "Mítico",
  bossesKilled: 6,
  bossesTotal: 9,
  realmRank: "#3",
  regionRank: "Top 120 US",
  aotc: true,
};

export type RosterMember = {
  name: string;
  role: "tank" | "healer" | "dps";
  roleLabel: string;
  className: string | null;
  classColorVar: string | null;
  ilvl: number | null;
  links: { armory?: string; raiderIO?: string; warcraftLogs?: string };
};

// Apenas Jujubess confirmada por enquanto — atualizar classe/spec/ilvl e adicionar o resto do elenco depois
export const roster: RosterMember[] = [
  {
    name: "Jujubess",
    role: "dps",
    roleLabel: "DPS",
    className: null,
    classColorVar: null,
    ilvl: null,
    links: {
      armory: guild.links.armory,
      raiderIO: guild.links.raiderIO,
      warcraftLogs: guild.links.warcraftLogs,
    },
  },
];

// TODO: dados de exemplo — trocar quando as vagas reais forem definidas
export const recruitment = {
  isExample: true,
  roles: [
    { className: "Hunter", classColorVar: "--wow-hunter", spec: "BM / MM", priority: "alta", icon: "i-bow" },
    { className: "Mage", classColorVar: "--wow-mage", spec: "Qualquer spec", priority: "alta", icon: "i-flame" },
    { className: "Priest", classColorVar: "--wow-priest", spec: "Holy / Disc", priority: "media", icon: "i-chalice" },
    { className: "Rogue", classColorVar: "--wow-rogue", spec: "Qualquer spec", priority: "media", icon: "i-dagger" },
  ],
};

// TODO: dados de exemplo — substituir por conquistas reais do Warcraft Logs
export const achievements = {
  isExample: true,
  items: [
    { boss: "Threnody, a Voz Silenciada", date: "6 de maio" },
    { boss: "Vaelkor, o Corruptor", date: "29 de abril" },
    { boss: "Ossuário Errante", date: "22 de abril" },
    { boss: "A Guarda Dupla", date: "15 de abril" },
  ],
};

// TODO: dados de exemplo — substituir por ranking real do Raider.IO
export const mythicLeaderboard = {
  isExample: true,
  entries: [
    { rank: 1, name: "Sylwen", classColorVar: "--wow-druid", score: 3382 },
    { rank: 2, name: "Ashkarion", classColorVar: "--wow-mage", score: 3315 },
    { rank: 3, name: "Draknor", classColorVar: "--wow-dk", score: 3271 },
    { rank: 4, name: "Vaelira", classColorVar: "--wow-rogue", score: 3210 },
    { rank: 5, name: "Mornithas", classColorVar: "--wow-priest", score: 3184 },
  ],
};
