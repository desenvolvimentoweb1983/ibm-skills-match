import Image from "next/image";
import styles from "./conceito.module.css";

export default function Conceito() {
  return (
    <main className={styles.container}>

      {/* Título */}
      <section className={styles.hero}>
        <h1 className={styles.titulo}>
          Conceito de Atendimento ao Cliente
        </h1>

        <p className={styles.subtitulo}>
          Entenda o que é atendimento ao cliente, sua importância estratégica
          e como ele impacta diretamente o sucesso de empresas e profissionais.
        </p>
      </section>

      {/* O que é atendimento */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          O que é Atendimento ao Cliente?
        </h2>

        <p className={styles.texto}>
          Atendimento ao cliente é o conjunto de interações entre uma empresa
          e seus consumidores antes, durante e após a compra de um produto ou
          serviço.
        </p>

        <p className={styles.texto}>
          Mais do que responder dúvidas, o atendimento moderno busca criar
          experiências positivas, gerar confiança e construir relacionamentos
          duradouros com os clientes.
        </p>
      </section>

      {/* Importância */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Por que o Atendimento é Importante?
        </h2>

        <ul className={styles.lista}>
          <li>✔ Aumenta a satisfação do cliente</li>
          <li>✔ Fortalece a reputação da marca</li>
          <li>✔ Gera fidelização e recompra</li>
          <li>✔ Reduz reclamações e conflitos</li>
          <li>✔ Cria vantagem competitiva</li>
        </ul>
      </section>

      {/* Estratégia */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Atendimento como Estratégia de Negócio
        </h2>

        <p className={styles.texto}>
          Empresas que investem em atendimento de qualidade não apenas resolvem
          problemas — elas constroem valor.
        </p>

        <p className={styles.texto}>
          Hoje, o atendimento é um diferencial competitivo essencial,
          especialmente em mercados onde produtos e preços são semelhantes.
        </p>
      </section>

      {/* Princípios */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Princípios do Bom Atendimento
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Empatia</h3>
            <p>Entender as necessidades e sentimentos do cliente.</p>
          </div>

          <div className={styles.card}>
            <h3>Clareza</h3>
            <p>Comunicação simples, objetiva e transparente.</p>
          </div>

          <div className={styles.card}>
            <h3>Agilidade</h3>
            <p>Resolver demandas com rapidez e eficiência.</p>
          </div>

          <div className={styles.card}>
            <h3>Respeito</h3>
            <p>Tratar todos os clientes com profissionalismo e educação.</p>
          </div>
        </div>
      </section>

      {/* Conclusão */}
      <section className={styles.conclusao}>
        <h2>Conclusão</h2>

        <p>
          O atendimento ao cliente deixou de ser apenas um suporte operacional
          e passou a ser um dos pilares estratégicos das organizações modernas.
        </p>
      </section>
      {/* LOGO DO CURSO */}
              <div style={{ marginTop: "60px", textAlign: "center" }}>
                <Image
                  src="/images/logo-match.png"
                  alt="Logo Programa Match"
                  width={500}
                  height={280}
                  style={{ margin: "0 auto" }}
                />
              </div>

    </main>
  );
}