"use client";

import Image from "next/image";
import styles from "./contato.module.css";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contato() {
  return (
    <>
      <section className={styles.contatoSection}>
        <h1>Entre em Contato</h1>
        <p>
          Fique à vontade para me enviar uma mensagem através de qualquer um dos canais de comunicação:
        </p>

        <div className={styles.contatoLinks}>
          <a
            href="https://www.linkedin.com/in/lu%C3%ADs-oliveira-563341279"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contatoLink} ${styles.linkedin}`}
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>

          <a
            href="https://wa.me/5519974082724"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contatoLink} ${styles.whatsapp}`}
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>

          <a
            href="mailto:desenvolvimentoweb1983@gmail.com"
            className={`${styles.contatoLink} ${styles.email}`}
          >
            <FaEnvelope size={20} />
            Email
          </a>

          <a
            href="https://github.com/desenvolvimentoweb1983"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contatoLink} ${styles.github}`}
          >
            <FaGithub size={20} />
            GitHub
          </a>
        </div>

        {/* Botão flutuante WhatsApp */}
        <a
          href="https://wa.me/5519974082724"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappFlutuante}
        >
          <FaWhatsapp size={24} />
        </a>

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
      </section>
    </>
  );
}