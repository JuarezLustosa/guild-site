export type RecruitmentNeed = {
  className: string;
  spec: string;
  priority: "Alta" | "Média" | "Baixa";
  tone: "green" | "blue" | "gold" | "red";
  icon: string;
};

export type Raider = {
  name: string;
  role: "Tank" | "Healer" | "DPS";
  spec: string;
  ilvl: number | null;
  accent: string;
  portrait: string;
  armoryUrl?: string;
  raiderIoUrl?: string;
  warcraftLogsUrl?: string;
};

export const guild = {
  name: "Pode Wipar",
  subtitle: "Guilda de Raid & Mythic+",
  realm: "Stormrage",
  region: "US",
  description:
    "Foco em progresso, organização e comunidade. Todo wipe é ensaio — a vitória é hábito. Juntos, alcançamos o próximo nível.",
  links: {
    // TODO: adicionar o link de convite do Discord (ou defina NEXT_PUBLIC_DISCORD_URL no .env.local)
    discord: process.env.NEXT_PUBLIC_DISCORD_URL || "#",
    warcraftLogs: "https://www.warcraftlogs.com/guild/us/stormrage/pode%20wipar",
    raiderIO: "https://raider.io/guilds/us/stormrage/Pode%20Wipar",
    armory: "https://worldofwarcraft.blizzard.com/pt-br/guild/us/stormrage/pode-wipar/",
  },
};

// TODO: dados de exemplo — substituir pelos números reais do Warcraft Logs / Raider.IO
export const progress = {
  raid: "Citadela das Sombras",
  killed: 6,
  total: 9,
  realmRank: "#3",
  ranking: "TOP 120 BR",
  aotc: "Concluído",
};

// TODO: dados de exemplo — trocar quando as vagas reais forem definidas
export const recruitment: RecruitmentNeed[] = [
  { className: "Hunter", spec: "BM / MM", priority: "Alta", tone: "green", icon: "paw" },
  { className: "Mage", spec: "Any", priority: "Alta", tone: "blue", icon: "flame" },
  { className: "Priest", spec: "Holy / Disc", priority: "Média", tone: "gold", icon: "sun" },
  { className: "Rogue", spec: "Any", priority: "Média", tone: "gold", icon: "dagger" },
];

// Apenas Jujubess confirmada por enquanto — atualizar classe/spec/ilvl e adicionar o resto do elenco depois
export const raiders: Raider[] = [
  {
    name: "Jujubess",
    role: "DPS",
    spec: "Classe a confirmar",
    ilvl: null,
    accent: "#c89543",
    portrait: "/art/portrait-dps.svg",
    armoryUrl: guild.links.armory,
    raiderIoUrl: guild.links.raiderIO,
    warcraftLogsUrl: guild.links.warcraftLogs,
  },
];

// TODO: dados de exemplo — substituir por conquistas reais do Warcraft Logs
export const kills = [
  { boss: "Threnody, a Voz Silenciada", date: "6 de maio" },
  { boss: "Vaelkor, o Corruptor", date: "29 de abril" },
  { boss: "Ossuário Errante", date: "22 de abril" },
  { boss: "A Guarda Dupla", date: "15 de abril" },
];

// TODO: dados de exemplo — substituir por ranking real do Raider.IO
export const mythicRanking = [
  { name: "Sylwen", score: 3382, classMark: "D" },
  { name: "Ashkarion", score: 3315, classMark: "M" },
  { name: "Draknor", score: 3271, classMark: "Dk" },
  { name: "Vaelira", score: 3210, classMark: "W" },
  { name: "Mornithas", score: 3184, classMark: "H" },
];

export const schedule = [
  { day: "Quarta-feira", time: "20:00 - 22:00" },
  { day: "Quinta-feira", time: "20:00 - 22:00" },
];
