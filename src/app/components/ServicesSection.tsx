"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building,
  FileText,
  Leaf,
  Wrench,
  Home,
  ShieldAlert,
  Cpu,
} from "lucide-react";

const services = [
  {
    title: "Planeamento e Gestão de Projetos",
    icon: <Briefcase size={40} className="text-blue-400" />, 
    details: [
      "Estudos de viabilidade técnica e financeira",
      "Gestão e acompanhamento de obras",
      "Planejamento estratégico",
      "Gestão de contratos e mitigação de riscos",
      "Consultoria em BIM (Building Information Modeling)"
    ],
  },
  {
    title: "Engenharia e Projetos",
    icon: <Building size={40} className="text-green-400" />,
    details: [
      "Desenvolvimento de projetos arquitetônicos e estruturais",
      "Projetos de infraestrutura (redes de água, esgoto, drenagem e energia)",
      "Projetos de terraplenagem e pavimentação",
      "Cálculo estrutural e análise de materiais"
    ],
  },
  {
    title: "Licenciamento e Regularização",
    icon: <FileText size={40} className="text-yellow-400" />,
    details: [
      "Assessoria para obtenção de licenças ambientais",
      "Regularização fundiária e cadastro técnico de imóveis",
      "Estudos de impacto ambiental e social (EIA/RIMA)",
      "Adequação às normas técnicas e regulamentações"
    ],
  },
  {
    title: "Sustentabilidade e Eficiência Energética",
    icon: <Leaf size={40} className="text-green-300" />,
    details: [
      "Construção sustentável e gestão de resíduos",
      "Análise de eficiência energética",
      "Certificações ambientais (LEED, AQUA, EDGE)",
      "Uso de materiais sustentáveis"
    ],
  },
  {
    title: "Patologia das Construções",
    icon: <Wrench size={40} className="text-red-400" />,
    details: [
      "Diagnóstico de falhas estruturais",
      "Inspeções prediais e laudos técnicos",
      "Análise de patologias em concreto e alvenaria",
      "Consultoria para reforço estrutural"
    ],
  },
  {
    title: "Avaliação e Gestão de Ativos Imobiliários",
    icon: <Home size={40} className="text-blue-300" />,
    details: [
      "Avaliação de imóveis para alienação e financiamento",
      "Estudos de viabilidade imobiliária",
      "Análise de valorização imobiliária",
      "Due diligence para investimentos"
    ],
  },
  {
    title: "Segurança do Trabalho e Normas",
    icon: <ShieldAlert size={40} className="text-orange-400" />,
    details: [
      "Elaboração de PPRA, PCMSO e LTCAT",
      "Treinamentos em segurança do trabalho",
      "Implementação de normas NR-18 e NR-35",
      "Gestão de riscos ocupacionais"
    ],
  },
  {
    title: "Tecnologia e Inovação na Construção",
    icon: <Cpu size={40} className="text-purple-400" />,
    details: [
      "Implementação de novas tecnologias construtivas",
      "Automação de processos e gestão digital",
      "Uso de inteligência artificial e IoT na construção",
      "Construção modular e impressão 3D"
    ],
  },
];

export function ServicesSection() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % Math.ceil(services.length / itemsPerPage));
    }, 4000);

    return () => clearInterval(interval);
  }, [itemsPerPage]);

  return (
    <section className="text-center py-16 px-6 sm:px-12 md:px-16 bg-black font-[Roboto]" id="serviços">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">Nossos Serviços</h1>
      <h2 className="text-gray-300 uppercase text-sm md:text-lg mt-2 font-medium font-sans">
        SERVIÇOS PRESTADOS PELA <span className="bg-blue-clayn-400 text-white px-2 py-1 rounded font-bold">RACIUS ADVISORY</span> - SERVIÇOS DE CONSULTORIA, LDA
      </h2>
      <h3 className="font-semibold text-gray-300 mt-4 text-lg sm:text-xl md:text-2xl font-sans">
        Consultoria em construção civil e áreas técnicas afins
      </h3>

      <div className="overflow-hidden w-full max-w-5xl mx-auto mt-8">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          {Array.from({ length: Math.ceil(services.length / itemsPerPage) }).map((_, i) => (
            <div key={i} className="flex min-w-full justify-center space-x-6 flex-wrap items-stretch">
              {services.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage).map((service, j) => (
                <motion.div
                  key={j}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 border border-blue-700 rounded-2xl shadow-xl bg-blue-900/80 flex flex-col items-center text-center max-w-sm flex-1"
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
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
