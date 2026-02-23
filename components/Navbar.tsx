"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { title: "Home", href: "/" },
    { title: "Conceito", href: "/conceito" },
    { title: "Canais", href: "/canais" },
    { title: "Estratégias", href: "/estrategias" },
    { title: "Pós-venda", href: "/posvenda" },
    { title: "Funil", href: "/funil" },
    { title: "Negociação", href: "/negociacao" },
    { title: "Contato", href: "/contato" },
  ];

  return (
    <nav className="bg-blue-600 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-white dark:text-black"
        >
          IBM SkillsBuild Match!
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex flex-wrap gap-6">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-white dark:text-black hover:text-gray-200 transition"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white dark:text-black text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden bg-blue-600 dark:bg-zinc-900 px-6 py-4 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-white dark:text-black hover:text-gray-200 transition"
              onClick={() => setMenuOpen(false)} // fecha menu ao clicar
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}