import styles from "./canais.module.css";
import Image from "next/image";

export default function CanaisPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>Canais de Atendimento</h1>
      <p className={styles.descricao}>
        Conheça os principais canais utilizados para comunicação com o cliente.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Telefone</h3>
          <p>Atendimento direto e imediato para resolução rápida de demandas.</p>
        </div>

        <div className={styles.card}>
          <h3>Email</h3>
          <p>Ideal para solicitações formais e registros detalhados.</p>
        </div>

        <div className={styles.card}>
          <h3>Chat Online</h3>
          <p>Comunicação em tempo real com praticidade e agilidade.</p>
        </div>

        <div className={styles.card}>
          <h3>Redes Sociais</h3>
          <p>Interação rápida e pública, fortalecendo relacionamento e imagem.</p>
        </div>

        <div className={styles.card}>
          <h3>Atendimento Presencial</h3>
          <p>Contato direto que permite personalização e maior proximidade.</p>
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
    </main>
    
  );
}
