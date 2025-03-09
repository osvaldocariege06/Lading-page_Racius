"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Planeamento e Gestão de Projetos", image: "/images/planeamento.png" },
  { title: "Engenharia e Projetos", image: "/images/engenharia.png" },
  { title: "Licenciamento e Regularização", image: "/images/licenciamento.png" },
  { title: "Consultoria Técnica", image: "/images/tecnica.png" },
  { title: "Avaliação de Imóveis", image: "/images/avaliacao.png" },
  { title: "Gestão de Obras", image: "/images/obras.png" },
];

export function ServicesSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 4000); // Troca a cada 4 segundos para melhor legibilidade

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center py-16 px-6 sm:px-12 md:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-black">Nossos Serviços</h2>
      <p className="text-gray-500 uppercase text-sm md:text-base mt-2">
        SERVIÇOS PRESTADOS PELA RACIUS ADVISORY - SERVIÇOS DE CONSULTORIA, LDA
      </p>
      <p className="font-semibold text-black mt-4 text-sm sm:text-base md:text-lg">
        1 Consultoria em construção civil e áreas técnicas afins
      </p>

      {/* Carrossel Responsivo */}
      <div className="mt-8 overflow-hidden w-full max-w-xl md:max-w-3xl mx-auto">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          {services.map((service, i) => (
            <div key={i} className="min-w-full px-4">
              <div className="p-6 border rounded-2xl shadow-lg bg-white mx-auto max-w-xs md:max-w-sm">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-32 md:h-40 object-contain mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-500 mt-2 text-sm md:text-base">Explore →</p>
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i ? "bg-black w-4" : "bg-gray-400 opacity-50"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
