"use client";

import { useState } from "react";
import Quiz1 from "@/components/Quiz1";
import Quiz2 from "@/components/Quiz2";
import styles from "./avaliacao.module.css";

export default function AvaliacaoPage() {
  const [quiz, setQuiz] = useState<null | number>(null);

  if (quiz === 1) return <Quiz1 />;
  if (quiz === 2) return <Quiz2 />;

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Avaliação do Aprendizado
      </h1>

      <p className="mb-8 text-gray-600">
        Teste seus conhecimentos sobre atendimento ao cliente.
      </p>

      <div className="space-y-4">
        <button
          onClick={() => setQuiz(1)}
          className="w-full bg-blue-600 text-white p-4 rounded-xl"
        >
          Iniciar Quiz 1 – Fundamentos
        </button>

        <button
          onClick={() => setQuiz(2)}
          className="w-full bg-green-600 text-white p-4 rounded-xl"
        >
          Iniciar Quiz 2 – Situações Práticas
        </button>
      </div>
    </div>
  );
}