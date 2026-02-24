// app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Treinamento Interativo de Atendimento ao Cliente | Luís Oliveira",
  description:
    "Treinamento online desenvolvido por Luís Oliveira no curso IBM SkillsBuild Match! Capacite-se para o mercado de trabalho com quizzes práticos sobre atendimento ao cliente.",
  keywords: "atendimento ao cliente, treinamento online, IBM SkillsBuild, quizzes",
  authors: [{ name: "Luís Oliveira" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Treinamento Interativo de Atendimento ao Cliente",
    description:
      "Treinamento online desenvolvido por Luís Oliveira no curso IBM SkillsBuild Match! Capacite-se para o mercado de trabalho com quizzes práticos sobre atendimento ao cliente.",
    url: "https://treinamentoatendimentocliente.vercel.app/",
    siteName: "Treinamento Atendimento Cliente",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treinamento Interativo de Atendimento ao Cliente",
    description:
      "Treinamento online desenvolvido por Luís Oliveira no curso IBM SkillsBuild Match! Capacite-se para o mercado de trabalho com quizzes práticos sobre atendimento ao cliente.",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}