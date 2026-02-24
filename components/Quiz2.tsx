"use client";

import { useState, useEffect } from "react";
import styles from "./quiz2.module.css";

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

const questions: Question[] = [
  {
    question:
      "Um cliente reclama nas redes sociais que seu pedido atrasou. Qual a melhor ação inicial?",
    options: [
      "Ignorar a mensagem",
      "Responder pedindo desculpas e oferecer solução rapidamente",
      "Apagar o comentário",
      "Mandar o cliente ligar depois",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Um cliente demonstra dúvida durante a compra no site. O que fazer?",
    options: [
      "Esperar ele decidir sozinho",
      "Enviar respostas automáticas genéricas",
      "Oferecer atendimento personalizado e esclarecer dúvidas",
      "Cancelar a venda",
    ],
    correctIndex: 2,
  },
  {
    question: "Durante o pós-venda, qual atitude aumenta a fidelização?",
    options: [
      "Não entrar mais em contato",
      "Oferecer suporte e pedir feedback",
      "Enviar apenas propaganda",
      "Encerrar comunicação",
    ],
    correctIndex: 1,
  },
  {
    question: "Um cliente irritado liga reclamando. Qual postura correta?",
    options: [
      "Interromper o cliente",
      "Escutar com atenção e demonstrar empatia",
      "Transferir a ligação imediatamente",
      "Responder com frieza",
    ],
    correctIndex: 1,
  },
  {
    question:
      "No funil de vendas, quando o cliente está próximo da decisão, o atendimento deve:",
    options: [
      "Criar mais burocracia",
      "Remover obstáculos e facilitar a compra",
      "Ignorar dúvidas",
      "Aumentar o preço",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Se o cliente apresenta um problema com o produto, qual é a melhor prática?",
    options: [
      "Culpar o cliente",
      "Assumir responsabilidade e resolver rápido",
      "Dizer que não é possível ajudar",
      "Demorar para responder",
    ],
    correctIndex: 1,
  },
  {
    question: "Na negociação com um cliente difícil, a melhor estratégia é:",
    options: [
      "Impor sua decisão",
      "Buscar solução que gere valor para ambos",
      "Encerrar conversa rapidamente",
      "Evitar diálogo",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Qual canal é ideal para resolver um problema complexo que exige explicação detalhada?",
    options: [
      "Comentário público curto",
      "Videoconferência ou atendimento direto",
      "Mensagem automática",
      "Resposta padrão",
    ],
    correctIndex: 1,
  },
];

export default function Quiz2() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const progress = ((current + 1) / questions.length) * 100;

  /* =========================
     ESC PARA SAIR DO QUIZ
  ========================== */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const sair = confirm("Deseja sair do quiz? O progresso será perdido.");
        if (sair) window.history.back();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  function answer(index: number) {
    if (selected !== null) return;

    setSelected(index);

    if (index === questions[current].correctIndex) {
      setScore((s) => s + 1);
    }
  }

  function next() {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  const q = questions[current];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Quiz 2 — Situações Práticas</h2>

      {!finished && (
        <>
          <p className={styles.progress}>
            Pergunta {current + 1} de {questions.length}
          </p>

          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
        </>
      )}

      <div className={styles.card}>
        {finished ? (
          <div className={styles.result}>
            <p className={styles.score}>
              Você acertou {score} de {questions.length}
            </p>

            <button
              className={styles.restartButton}
              onClick={restart}
            >
              Refazer Quiz
            </button>
          </div>
        ) : (
          <>
            <div className={styles.question}>{q.question}</div>

            <div className={styles.options}>
              {q.options.map((opt, i) => {
                let stateClass = "";

                if (selected !== null) {
                  if (i === q.correctIndex) stateClass = styles.correct;
                  else if (i === selected) stateClass = styles.wrong;
                }

                return (
                  <button
                    key={i}
                    onClick={() => answer(i)}
                    disabled={selected !== null}
                    className={`${styles.optionButton} ${stateClass}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {selected !== null && (
              <button
                className={styles.nextButton}
                onClick={next}
              >
                {current + 1 === questions.length
                  ? "Ver Resultado"
                  : "Próxima"}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}