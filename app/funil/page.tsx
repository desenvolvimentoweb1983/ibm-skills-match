import React from "react";
import styles from "./funil.module.css";
import Image from "next/image";

const FunilPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Funil de Vendas</h1>
      <p className={styles.description}>
        Estruture seu processo de vendas de forma estratégica, acompanhando cada etapa do cliente até a conversão.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>Atração</h2>
          <p>Captação de leads qualificados por meio de campanhas de marketing e conteúdo relevante.</p>
        </div>
        <div className={styles.card}>
          <h2>Engajamento</h2>
          <p>Estabeleça relacionamento com os leads através de e-mails, webinars e interações estratégicas.</p>
        </div>
        <div className={styles.card}>
          <h2>Conversão</h2>
          <p>Transforme leads em clientes por meio de propostas direcionadas e acompanhamento próximo.</p>
        </div>
        <div className={styles.card}>
          <h2>Fidelização</h2>
          <p>Mantenha clientes satisfeitos para gerar recorrência e recomendações valiosas.</p>
        </div>
      </div>
      {/* LOGO DO CURSO */}
<div className={styles.logoCurso}>
  <Image
    src="/images/logo-match.png"
    alt="Logo Programa Match"
    width={500}
    height={280}
  />
</div>
    </div>
  );
};

export default FunilPage;
