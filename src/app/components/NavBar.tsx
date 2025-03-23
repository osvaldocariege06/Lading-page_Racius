"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-8 py-4 transition-colors duration-300 z-[100] font-[Roboto] tracking-wide 
        ${scrolled ? "bg-white shadow-md" : "bg-[#48A6A1]"}`}
    >
      <div className="flex items-center gap-3">
        <Image
          src="/Logo_.png"
          alt="Logo"
          width={50}
          height={50}
          className={`transition-colors duration-300 ${scrolled ? "filter-none" : "filter brightness-0 invert"}`}
        />
        <h1 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${scrolled ? "text-[#48A6A1]" : "text-white"}`}>
          RACIUS ADVISORY
        </h1>
      </div>

      <button className="md:hidden p-2 z-[101]" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className={`w-8 h-8 ${scrolled ? "text-[#48A6A1]" : "text-white"}`} /> : <Menu className={`w-8 h-8 ${scrolled ? "text-[#48A6A1]" : "text-white"}`} />}
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-[99] ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#48A6A1] shadow-lg transform transition-transform duration-300 z-[401] ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col items-center pt-16 `}
      >
        <ul className="flex flex-col gap-6 text-white text-lg w-full items-center">
          <li>
            <Link href="/" className="hover:underline" scroll={true}>
              Home
            </Link>
          </li>
          {["Sobre nós", "Serviços", "Localização"].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline" scroll={true}>
                {item}
              </Link>
            </li>
          ))}
          <li>
          <Link
            href="#localização"
            className="bg-[#48A6A1] text-green-900 px-6 py-3 rounded-lg transition-transform transform hover:scale-105 hover:bg-green-400 shadow-md"
            scroll={true}
          >
            Contacte-nos
          </Link>
          </li>
        </ul>
      </div>

      <ul className="hidden md:flex gap-6">
        <li>
          <Link href="/" className={`hover:underline transition-colors duration-300 ${scrolled ? "text-[#48A6A1]" : "text-white"}`} scroll={true}>
            Home
          </Link>
        </li>
        {["Sobre Nós", "Serviços", "Localização"].map((item) => (
          <li key={item}>
            <Link href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className={`hover:underline transition-colors duration-300 ${scrolled ? "text-[#48A6A1]" : "text-white"}`} scroll={true}>
              {item}
            </Link>
          </li>
        ))}
        <li>
        <Link
            href="#localização"
            className="bg-[#48A6A1] text-green-900 px-6 py-3 rounded-lg transition-transform transform hover:scale-105 hover:bg-green-400 shadow-md"
            scroll={true}
          >
            Contacte-nos
          </Link>
        </li>
      </ul>
    </nav>
  );
}