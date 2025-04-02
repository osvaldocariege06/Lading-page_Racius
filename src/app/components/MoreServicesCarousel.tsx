"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  BanknoteIcon,
  SettingsIcon,
  LandmarkIcon,
  ShieldCheckIcon,
  Globe2Icon,
  BarChartBigIcon,
} from "lucide-react";
import Image from "next/image";
import type { ServiceProps } from "./CarouselServices";

const services = [
  {
    title: "Consultoria Estratégica",
    icon: <BriefcaseIcon size={50} className="text-blue-400" />,
    details: [
      "Planejamento estratégico.",
      "Expansão de mercado e internacionalização.",
      "Fusões, aquisições e reestruturação empresarial.",
      "Análise de concorrência e inteligência de mercado.",
    ],
  },
  {
    title: "Consultoria Financeira",
    icon: <BanknoteIcon size={50} className="text-green-400" />,
    details: [
      "Planejamento financeiro e gestão de fluxo de caixa.",
      "Estruturação de investimentos e captação de recursos.",
      "Avaliação de ativos e valuation empresarial.",
      "Análise de viabilidade econômica e financeira.",
    ],
  },
  {
    title: "Consultoria em Gestão e Processos",
    icon: <SettingsIcon size={50} className="text-yellow-400" />,
    details: [
      "Reengenharia de processos.",
      "Gestão da qualidade e melhoria contínua.",
      "Implementação de metodologias ágeis e Lean Six Sigma.",
      "Redução de custos e eficiência operacional.",
    ],
  },
  {
    title: "Consultoria Tributária e Contábil",
    icon: <LandmarkIcon size={50} className="text-purple-400" />,
    details: [
      "Planejamento tributário e otimização fiscal.",
      "Conformidade regulatória e auditoria contábil.",
      "Recuperação de créditos tributários.",
      "Estruturação societária para eficiência fiscal.",
    ],
  },
  {
    title: "Consultoria em Tecnologia e Inovação",
    icon: <ShieldCheckIcon size={50} className="text-red-400" />,
    details: [
      "Transformação digital e automação de processos.",
      "Implementação de ERP, CRM e outras soluções tecnológicas.",
      "Cibersegurança e proteção de dados.",
      "Estratégia de TI e governança digital.",
    ],
  },
  {
    title: "Consultoria em Marketing e Vendas",
    icon: <Globe2Icon size={50} className="text-orange-400" />,
    details: [
      "Posicionamento de marca e estratégias de branding.",
      "Inteligência de mercado e análise de comportamento do consumidor.",
      "Planejamento de campanhas publicitárias e marketing digital.",
      "Estruturação e otimização de funil de vendas.",
    ],
  },
  {
    title: "Consultoria em Sustentabilidade e ESG",
    icon: <BarChartBigIcon size={50} className="text-teal-400" />,
    details: [
      "Implementação de práticas sustentáveis.",
      "Relatórios de sustentabilidade e ESG compliance.",
      "Gestão de impacto social e ambiental.",
      "Certificações e conformidade regulatória.",
    ],
  },
];

export default function MoreServicesCarousel() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState<ServiceProps>();
  const totalSlides = Math.ceil(services.length / itemsPerPage);

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
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleCardClick = (service: ServiceProps) => {
    setCurrentService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentService(undefined);
  };

  return (
    <div className="relative w-full h-full py-16 px-6 sm:px-12 md:px-16 mt-20 font-[Arial Nova Cond Light] mb-40">
      <Image
        src="/Serviços/negócio.jpg"
        alt="Serviços Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-30"
      />
      <h1 className="md:text-5xl font-extrabold text-white text-4xl text-center">MAIS SERVIÇOS</h1>
      <h2 className="text-[#48A6A1] uppercase text-lg mt-2 text-center">
        SERVIÇOS PRESTADOS PELA <span className="bg-blue-clayn-400 text-white px-2 py-1 rounded font-bold ">RACIUS ADVISORY</span> - SERVIÇOS DE CONSULTORIA, LDA
      </h2>
      <h3 className="font-semibold text-[#48A6A1] mt-4 text-2xl text-center">Consultoria de negócios</h3>
      <section className="text-center py-16 px-6 sm:px-12 md:px-16 bg-black " id="negocio">
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
          {Array.from({ length: totalSlides }).map((_, i) => (
            <span
              key={i}
              className={`w-3 h-4 rounded-full transition-all duration-300 ${
                index === i ? "bg-white w-3" : "bg-gray-500 opacity-50"
              }`}
            ></span>
          ))}
        </div>
      </section>

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
