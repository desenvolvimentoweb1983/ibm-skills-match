"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-black dark:text-white"
        >
          IBM SkillsBuild Match!
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/conceito">Conceito</Link>
          <Link href="/canais">Canais</Link>
          <Link href="/estrategias">Estratégias</Link>
          <Link href="/posvenda">Pós-venda</Link>
          <Link href="/funil">Funil</Link>
          <Link href="/negociacao">Negociação</Link>
          <Link href="/contato">Contato</Link>
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black dark:text-white"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 px-6 py-4 space-y-3">
          <Link href="/">Home</Link>
          <Link href="/conceito">Conceito</Link>
          <Link href="/canais">Canais</Link>
          <Link href="/estrategias">Estratégias</Link>
          <Link href="/posvenda">Pós-venda</Link>
          <Link href="/funil">Funil</Link>
          <Link href="/negociacao">Negociação</Link>
          <Link href="/contato">Contato</Link>
        </div>
      )}
    </nav>
  );
}
