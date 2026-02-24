// C:\ibm-skills-match\app\sobre\page.tsx
import Image from "next/image";

export const metadata = {
  title: "Sobre o Projeto — Treinamento Interativo de Atendimento",
  description:
    "Conheça o projeto de treinamento interativo desenvolvido por Luís Oliveira no curso IBM SkillsBuild Match! Saiba mais sobre o conteúdo e objetivos.",
  openGraph: {
    title: "Sobre o Projeto — Treinamento Interativo de Atendimento",
    description:
      "Treinamento interativo sobre atendimento ao cliente desenvolvido por Luís Oliveira no curso IBM SkillsBuild Match!",
    url: "https://treinamentoatendimentocliente.vercel.app/sobre",
    siteName: "Treinamento Atendimento Cliente",
    images: [
      {
        url: "/favicon.ico",
        width: 128,
        height: 128,
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sobre o Projeto — Treinamento Interativo de Atendimento",
    description:
      "Treinamento interativo sobre atendimento ao cliente desenvolvido por Luís Oliveira no curso IBM SkillsBuild Match!",
    images: ["/favicon.ico"],
  },
};

export default function Sobre() {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen font-sans">
      <main className="max-w-7xl mx-auto px-8 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-6">
            Sobre o Projeto
          </h1>

          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
            Este projeto é um <strong>Treinamento Interativo de Atendimento ao Cliente</strong> desenvolvido como conteúdo acadêmico pelo aluno <strong>Luís Oliveira</strong> no curso <strong>IBM SkillsBuild Match!</strong> — uma iniciativa educacional gratuita da IBM em parceria com a Mastertech.
          </p>

          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
            Curso 100% online, voltado para inclusão social e preparação para o mercado de trabalho, capacitando pessoas sem experiência prévia para o primeiro emprego na área tecnológica.
          </p>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo-match.png"
              alt="Logo Programa Match"
              width={640}
              height={360}
              className="object-contain max-w-full h-auto"
            />
          </div>

          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
            Aqui você encontra quizzes práticos, conteúdos explicativos e ferramentas para reforçar conceitos de atendimento ao cliente, simulando situações reais.
          </p>

          <a
            href="/"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Voltar para a Home
          </a>
        </section>
      </main>
    </div>
  );
}