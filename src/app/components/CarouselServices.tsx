"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HomeIcon, HandshakeIcon, Building2Icon, FileTextIcon, BarChartIcon, RefreshCcwIcon } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Avaliação e Due Diligence Imobiliária",
    icon: <HomeIcon size={50} className="text-blue-400" />, 
    details: [
      "Avaliação de imóveis para compra, venda ou garantia bancária.",
      "Análise de viabilidade econômica e financeira.",
      "Due diligence jurídica e técnica para mitigar riscos."
    ]
  },
  {
    title: "Gestão Patrimonial e Fundiária",
    icon: <HandshakeIcon size={50} className="text-green-400" />, 
    details: [
      "Administração de imóveis para proprietários públicos e privados.",
      "Regularização fundiária e obtenção de títulos de propriedade.",
      "Planejamento estratégico para otimização do portfólio imobiliário."
    ]
  },
  {
    title: "Intermediação e Comercialização de Imóveis",
    icon: <Building2Icon size={50} className="text-yellow-400" />, 
    details: [
      "Venda, compra e locação de imóveis comerciais, residenciais e industriais.",
      "Captação de investidores e negociação de contratos.",
      "Estruturação de operações de Built to Suit e Sale & Leaseback."
    ]
  },
  {
    title: "Desenvolvimento Imobiliário e Planejamento Urbano",
    icon: <FileTextIcon size={50} className="text-purple-400" />, 
    details: [
      "Estudos de viabilidade técnica para novos empreendimentos.",
      "Planejamento urbanístico e aprovação de projetos.",
      "Modelagem de Parcerias Público-Privadas (PPPs) para projetos imobiliários."
    ]
  },
  {
    title: "Consultoria em Investimentos Imobiliários",
    icon: <BarChartIcon size={50} className="text-red-400" />, 
    details: [
      "Identificação de oportunidades de investimento.",
      "Estruturação de fundos imobiliários e operações de securitização.",
      "Análise de riscos e projeções de retorno."
    ]
  },
  {
    title: "Reestruturação e Recuperação de Ativos Imobiliários",
    icon: <RefreshCcwIcon size={50} className="text-orange-400" />, 
    details: [
      "Diagnóstico e revitalização de imóveis subutilizados.",
      "Estratégias para liquidação e maximização de valor patrimonial.",
      "Gestão de ativos em processos de insolvência e recuperação judicial."
    ]
  }
];

export default function CarouselServices() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Math.ceil(services.length / itemsPerPage));
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsPerPage]);

  const handleCardClick = (service) => {
    setCurrentService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentService(null);
  };

  return (
    <div className="relative w-full h-full py-16 px-6 sm:px-12 md:px-16 mt-20 font-[Arial Nova Cond Light] mb-40">
      <Image
        src="/Serviços/imobiliária.jpg"
        alt="Serviços Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-30"
      />
      <h1 className="text-5xl font-extrabold text-white text-center">OUTROS SERVIÇOS</h1>
      <h2 className="text-[#48A6A1] uppercase text-lg mt-2 text-center">
        SERVIÇOS PRESTADOS PELA <span className="bg-blue-clayn-400 text-white px-2 py-1 rounded font-bold ">RACIUS ADVISORY</span> - SERVIÇOS DE CONSULTORIA, LDA
      </h2>
      <h3 className="font-semibold text-[#48A6A1] mt-4 text-2xl text-center">Consultoria Imobiliária</h3>

      <section className="text-center py-16 px-6 sm:px-12 md:px-16 bg-black" id="Outros">
        <div className="mt-10 overflow-hidden w-full max-w-6xl mx-auto">
        <motion.div
  className="flex"
  animate={{ x: `-${index * 100}%` }}
  transition={{ ease: "easeInOut", duration: 0.8 }}
  style={{ position: "relative" }}
>
  {Array.from({ length: Math.ceil(services.length / itemsPerPage) }).map((_, i) => (
    <div key={i} className="flex min-w-full justify-center space-x-6 flex-wrap items-stretch">
      {services.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage).map((service, j) => {

        const isOffScreen = index !== i;
        return (
          <motion.div
              key={j}
              whileHover={{ scale: 1.05 }}
              className={`p-6 border border-green-800 rounded-2xl shadow-xl bg-[#48A6A1] flex flex-col items-center text-center max-w-sm flex-1 cursor-pointer ${
                isOffScreen ? "pointer-events-none opacity-30" : ""
              }`}
              onClick={() => !isOffScreen && handleCardClick(service)} 
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 text-white font-sans">
                {service.title}
              </h3>
              <ul className="text-gray-300 mt-2 text-sm md:text-base text-left flex-1 font-sans">
                {service.details.map((detail, index) => (
                  <li key={index} className="mt-1">• {detail}</li>
                ))}
              </ul>
            </motion.div>
              );
            })}
          </div>
        ))}
      </motion.div>
        </div>

        <div className="flex justify-center mt-6 space-x-3">
          {Array.from({ length: Math.ceil(services.length / itemsPerPage) }).map((_, i) => (
            <span
              key={i}
              className={`w-3 h-4 rounded-full transition-all duration-300 ${index === i ? "bg-white w-3" : "bg-gray-500 opacity-50"}`}
            ></span>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && currentService && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-11/12 md:w-1/2 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-2xl font-bold text-gray-500"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-[#48A6A1]">{currentService.title}</h3>
            <div className="mt-4">
              <ul className="text-gray-700">
                {currentService.details.map((detail, index) => (
                  <li key={index} className="mt-1">• {detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
