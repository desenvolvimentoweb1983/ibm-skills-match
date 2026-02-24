"use client";

import { useState, useEffect } from "react";
import styles from "./quiz1.module.css";

type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const questions: Question[] = [
  {
    question:
      "Um cliente entra em contato reclamando que o produto chegou com defeito. Qual deve ser sua primeira atitude?",
    options: [
      "Ignorar até ele reclamar novamente",
      "Ouvir com atenção e demonstrar empatia antes de propor solução",
      "Dizer que não é responsabilidade da empresa",
      "Encerrar o atendimento rapidamente",
    ],
    answer: 1,
    explanation:
      "A empatia é essencial no atendimento. O cliente precisa sentir que foi ouvido antes da solução.",
  },
  {
    question:
      "Durante uma negociação, o cliente diz que achou o preço alto. Qual a melhor resposta?",
    options: [
      "Oferecer desconto imediato",
      "Encerrar a conversa",
      "Explicar os benefícios e o valor agregado do produto",
      "Dizer que o preço não pode ser discutido",
    ],
    answer: 2,
    explanation:
      "Valor percebido é mais importante que preço. Explique benefícios e diferenciais.",
  },
  {
    question:
      "Um cliente está indeciso entre dois produtos. O que você deve fazer?",
    options: [
      "Escolher por ele rapidamente",
      "Apresentar diferenças e entender a necessidade dele",
      "Dizer que ambos são iguais",
      "Ignorar a dúvida",
    ],
    answer: 1,
    explanation:
      "Atendimento consultivo ajuda o cliente a tomar decisões seguras.",
  },
  {
    question:
      "Após concluir uma venda, qual prática fortalece o relacionamento com o cliente?",
    options: [
      "Nunca mais entrar em contato",
      "Fazer acompanhamento pós-venda",
      "Enviar promoções todos os dias",
      "Bloquear o cliente",
    ],
    answer: 1,
    explanation:
      "O pós-venda cria fidelização e confiança na marca.",
  },
];

export default function Quiz1() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
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

  function handleAnswer(index: number) {
    if (selected !== null) return;

    setSelected(index);
    setShowExplanation(true);

    if (index === questions[current].answer) {
      setScore((s) => s + 1);
    }
  }

  function nextQuestion() {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      setFinished(true);
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowExplanation(false);
    setFinished(false);
  }

  function getMedal() {
    const percent = (score / questions.length) * 100;

    if (percent === 100) return "🥇 Excelente! Domínio total do atendimento!";
    if (percent >= 70) return "🥈 Muito bom! Alto nível de atendimento.";
    if (percent >= 50) return "🥉 Bom! Continue evoluindo.";
    return "📚 Continue praticando e revise os conceitos.";
  }

  if (finished) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>Resultado Final</h2>

          <p className={styles.score}>
            Você acertou <strong>{score}</strong> de {questions.length}
          </p>

          <p style={{ marginBottom: 20, fontWeight: 600 }}>
            {getMedal()}
          </p>

          <button
            onClick={restartQuiz}
            className={styles.restartButton}
          >
            Refazer Quiz
          </button>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Quiz de Atendimento ao Cliente</h2>

      <p className={styles.progress}>
        Pergunta {current + 1} de {questions.length}
      </p>

      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className={styles.card}>
        <h3 className={styles.question}>{q.question}</h3>

        <div className={styles.options}>
          {q.options.map((option, index) => {
            let className = styles.optionButton;

            if (selected !== null) {
              if (index === q.answer) className += " " + styles.correct;
              else if (index === selected) className += " " + styles.wrong;
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={className}
                disabled={selected !== null}
              >
                {option}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className={styles.explanation}>
            💡 {q.explanation}
          </div>
        )}

        {selected !== null && (
          <button
            onClick={nextQuestion}
            className={styles.nextButton}
          >
            {current + 1 === questions.length
              ? "Ver Resultado"
              : "Próxima Pergunta"}
          </button>
        )}
      </div>
    </div>
  );
}