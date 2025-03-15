"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-8 py-4 bg-transparent relative z-50 font-[Roboto] tracking-wide">
      <h1 className="text-xl md:text-2xl font-bold text-white">RACIUS ADVISORY</h1>

      <button className="md:hidden p-2 z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#073340] shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-center pt-16`}
      >
        <ul className="flex flex-col gap-6 text-white text-lg w-full items-center">
          <li>
            <Link href="/" className="hover:underline" scroll={true}>
              Home
            </Link>
          </li>
          {["Sobre Nós", "Serviços", "Localização"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:underline"
                scroll={true}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#localização"
              className="bg-blue-300 text-blue-900 px-6 py-3 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-400 shadow-md"
              scroll={true}
            >
              Contacte-nos
            </Link>
          </li>
        </ul>
      </div>

      <ul className="hidden md:flex gap-6">
        <li>
          <Link href="/" className="hover:underline text-white" scroll={true}>
            Home
          </Link>
        </li>
        {["Sobre Nós", "Serviços", "Localização"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:underline text-white"
              scroll={true}
            >
              {item}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="#localização"
            className="bg-blue-300 text-blue-900 px-6 py-3 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-400 shadow-md"
            scroll={true}
          >
            Contacte-nos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
