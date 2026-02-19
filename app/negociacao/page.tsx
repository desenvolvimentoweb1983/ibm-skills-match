import React from "react";
import styles from "./negociacao.module.css";
import Image from "next/image";

const NegociacaoPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Negociação</h1>
      <p className={styles.description}>
        Nossas estratégias de negociação garantem acordos justos e vantajosos, fortalecendo relações comerciais duradouras.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>Preparação</h2>
          <p>Estudo completo do cliente, mercado e objetivos para conduzir negociações estratégicas.</p>
        </div>
        <div className={styles.card}>
          <h2>Argumentação</h2>
          <p>Apresentação clara e persuasiva de propostas, destacando benefícios e soluções.</p>
        </div>
        <div className={styles.card}>
          <h2>Fechamento</h2>
          <p>Definição de acordos com transparência, garantindo satisfação mútua e fidelização.</p>
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

export default NegociacaoPage;