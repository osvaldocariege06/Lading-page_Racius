"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HomeIcon, HandshakeIcon, Building2Icon } from "lucide-react";

const services = [
  { title: "Avaliação e Due Diligence Imobiliária", icon: <HomeIcon size={40} className="text-blue-600" />, link: "#" },
  { title: "Gestão Patrimonial e Fundiária", icon: <HandshakeIcon size={40} className="text-blue-600" />, link: "#" },
  { title: "Intermediação e Comercialização de Imóveis", icon: <Building2Icon size={40} className="text-blue-600" />, link: "#" },
  { title: "Consultoria em Planeamento e Gestão de Projetos", icon: <HomeIcon size={40} className="text-blue-600" />, link: "#" },
  { title: "Consultoria em Engenharia e Projetos", icon: <HandshakeIcon size={40} className="text-blue-600" />, link: "#" },
  { title: "Consultoria em Licenciamento e Regularização", icon: <Building2Icon size={40} className="text-blue-600" />, link: "#" },
];

export default function CarouselServices() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center py-16 px-6 sm:px-12 md:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-black">Outros Serviços</h2>
      <p className="text-gray-500 uppercase text-sm md:text-base mt-2">
        SERVIÇOS PRESTADOS PELA RACIUS ADVISORY - SERVIÇOS DE CONSULTORIA, LDA
      </p>
      <p className="font-semibold text-black mt-4 text-sm sm:text-base md:text-lg">2 Consultoria imobiliária</p>

      {/* Carrossel Responsivo */}
      <div className="mt-8 overflow-hidden w-full max-w-xl md:max-w-3xl mx-auto">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          {services.map((service, i) => (
            <div key={i} className="min-w-full px-4">
              <div className="p-6 border rounded-2xl shadow-lg bg-white mx-auto max-w-xs md:max-w-sm flex flex-col items-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-center">{service.title}</h3>
                <a href={service.link} className="mt-2 text-blue-500 underline text-sm md:text-base">
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Indicadores de Progresso */}
      <div className="flex justify-center mt-6 space-x-2">
        {services.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === i ? "bg-black w-4" : "bg-gray-400 opacity-50"}`}
          ></span>
        ))}
      </div>
    </section>
  );
}
