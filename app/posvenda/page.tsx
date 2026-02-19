import React from "react";
import styles from "./posvenda.module.css";
import Image from "next/image";

const PosVendaPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pós-venda</h1>
      <p className={styles.description}>
        Nosso compromisso continua mesmo depois da venda. Garantimos suporte, acompanhamento e estratégias para maximizar resultados.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>Suporte Personalizado</h2>
          <p>Atendimento dedicado para solucionar dúvidas e problemas rapidamente.</p>
        </div>
        <div className={styles.card}>
          <h2>Acompanhamento Contínuo</h2>
          <p>Relatórios periódicos para acompanhar o desempenho de seus produtos ou serviços.</p>
        </div>
        <div className={styles.card}>
          <h2>Feedback Estratégico</h2>
          <p>Analisamos o feedback do cliente para melhorar continuamente seus processos.</p>
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

export default PosVendaPage;