import React from "react";
import styles from "./estrategias.module.css";
import Image from "next/image";

const EstrategiasPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nossas Estratégias</h1>
      <p className={styles.description}>
        Aqui apresentamos todas as estratégias que aplicamos para alavancar resultados.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h2>Marketing Digital</h2>
          <p>Campanhas inteligentes para aumentar sua presença online.</p>
        </div>
        <div className={styles.card}>
          <h2>SEO</h2>
          <p>Otimização para mecanismos de busca para atrair mais visitantes.</p>
        </div>
        <div className={styles.card}>
          <h2>Redes Sociais</h2>
          <p>Gestão completa de perfis para engajamento e crescimento.</p>
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

export default EstrategiasPage;