import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen font-sans">
      <Head>
        {/* Título da página */}
        <title>Treinamento Interativo de Atendimento ao Cliente | Luís Oliveira</title>
        <meta
          name="description"
          content="Treinamento online desenvolvido por Luís Oliveira no curso IBM SkillsBuild Match! Capacite-se para o mercado de trabalho com quizzes práticos sobre atendimento ao cliente."
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Redes Sociais */}
        <meta property="og:title" content="Treinamento Interativo de Atendimento ao Cliente" />
        <meta property="og:description" content="Treinamento online desenvolvido por Luís Oliveira no curso IBM SkillsBuild Match! Capacite-se para o mercado de trabalho com quizzes práticos sobre atendimento ao cliente." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://treinamentoatendimentocliente.vercel.app/" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:site_name" content="Treinamento Atendimento Cliente" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Treinamento Interativo de Atendimento ao Cliente" />
        <meta name="twitter:description" content="Treinamento online desenvolvido por Luís Oliveira no curso IBM SkillsBuild Match! Capacite-se para o mercado de trabalho com quizzes práticos sobre atendimento ao cliente." />
        <meta name="twitter:image" content="/favicon.ico" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* Hero / Introdução */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
            Desenvolvimento de Treinamento Interativo Sobre Atendimento ao Cliente
          </h1>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
            Conteúdo acadêmico desenvolvido pelo aluno <strong>Luís Oliveira</strong> do curso <strong>IBM SkillsBuild Match!</strong>, uma iniciativa educacional gratuita da IBM em parceria com a Mastertech.
            <br />
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
        </section>
      </main>
    </div>
  );
}