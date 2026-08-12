import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pode Wipar — Guilda de Raid & Mythic+",
  description:
    "Pode Wipar, guilda de World of Warcraft no realm Stormrage (US). Progresso de raid, elenco, ranking Mythic+ e recrutamento.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
