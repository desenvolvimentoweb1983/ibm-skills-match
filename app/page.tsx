import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen font-sans">
      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* Hero / Introdução */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
            Desenvolvimento de Treinamento Interativo Sobre Atendimento ao Cliente
          </h1>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
            Conteúdo acadêmico desenvolvido pelo aluno <strong>Luís Oliveira</strong> do curso<strong> IBM SkillsBuild Match!</strong>, uma iniciativa educacional gratuita da IBM em parceria com a Mastertech.
            <br />
            Curso 100% online, voltado para inclusão social e preparação para o mercado de trabalho, capacitando pessoas sem experiência prévia para o primeiro emprego na área tecnológica.
          </p>
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo-match.png"
            alt="Logo Programa Match"
            width={640}        // ajuste para metade da resolução original (1280) para manter proporção
            height={360}       // altura proporcional (1280x720)
            className="object-contain max-w-full h-auto"
          />
        </div>
        </section>
      </main>
    </div>
  );
}
