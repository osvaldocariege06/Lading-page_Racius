"use client";

import Link from "next/link";
import { Briefcase, Home, Landmark, Phone, Mail, Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 text-center font-[Arial Nova Cond Light] mt-20">
      <hr className="mb-20 "></hr>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8 ">
        <h3 className="text-2xl font-extrabold tracking-wide text-white">
          RACIUS ADVISORY
        </h3>

        <div className="text-base text-center sm:text-left">
          <p className="font-semibold text-lg mb-2 text-gray-200 flex items-center gap-2">
           Serviços
          </p>
         <Link href="#serviços">
          <p className="text-[#48A6A1]  hover:text-white transition-colors duration-300 flex items-center gap-2">
              <Home size={20} /> Consultoria em engenharia civil
            </p>
         </Link>
         <Link href="#Outros">
          <p className="text-[#48A6A1]  hover:text-white transition-colors duration-300 flex items-center gap-2">
              <Landmark size={20} /> Consultoria imobiliária
            </p>
         </Link>
         <Link href="#negocio">
          <p className="text-[#48A6A1]  hover:text-white transition-colors duration-300 flex items-center gap-2">
              <Briefcase size={20} /> Consultoria de negócio
            </p>
         </Link>
        </div>

        <div className="text-base text-center sm:text-left">
          <p className="font-semibold text-lg mb-2 text-gray-200 flex items-center gap-2">
            Contato
          </p>
          <Link href="https://www.linkedin.com/company/racius-edific-se/">
            <p className="text-[#48A6A1]  hover:text-white transition-colors duration-300 flex items-center gap-2">
              <Linkedin size={20} /> Linkedin
            </p>
          </Link>
          <Link href="https://wa.me/244926437705">
            <p className="text-[#48A6A1]  hover:text-white transition-colors duration-300 flex items-center gap-2">
              <MessageCircle size={20} /> Whatsapp
            </p>
          </Link>
          <Link href="https://www.instagram.com/raciusadvisory?igsh=eXRpdnZnMms4c2F0">
            <p className="text-[#48A6A1]  hover:text-white transition-colors duration-300 flex items-center gap-2">
              <Instagram size={20} /> Instagram
            </p>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61552165228202">
            <p className="text-[#48A6A1]  hover:text-white transition-colors duration-300 flex items-center gap-2">
              <Facebook size={20} /> Facebook
            </p>
          </Link>
          <Link href="mailto:geral@raciusadvisory.com">
            <p className="text-[#48A6A1]  hover:text-white transition-colors duration-300 flex items-center gap-2">
              <Mail size={20} /> geral@raciusadvisory.com
            </p>
          </Link>
          <p className="text-[#48A6A1]  hover:text-white transition-colors duration-300 flex items-center gap-2">
            <Phone size={20} /> +244 926437705
          </p>
       
        </div>
      </div>

      <p className="text-sm mt-8 opacity-70 tracking-wide">
        © 2025 RACIUS ADVISORY. Todos os direitos reservados.
      </p>
    </footer>
  );
}
