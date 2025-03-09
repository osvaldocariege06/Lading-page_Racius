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
    icon: <Briefcase size={40} className="text-blue-600" />, 
    details: [
      "Estudos de viabilidade técnica e financeira",
      "Gestão e acompanhamento de obras",
      "Planeamento estratégico",
      "Gestão de contratos e mitigação de riscos",
      "Consultoria em BIM (Building Information Modeling)"
    ],
  },
  {
    title: "Engenharia e Projetos",
    icon: <Building size={40} className="text-green-600" />,
    details: [
      "Desenvolvimento de projetos arquitetônicos e estruturais",
      "Projetos de infraestrutura (redes de água, esgoto, drenagem e energia)",
      "Projetos de terraplenagem e pavimentação",
      "Cálculo estrutural e análise de materiais"
    ],
  },
  {
    title: "Licenciamento e Regularização",
    icon: <FileText size={40} className="text-yellow-600" />,
    details: [
      "Assessoria para obtenção de licenças ambientais",
      "Regularização fundiária e cadastro técnico de imóveis",
      "Estudos de impacto ambiental e social (EIA/RIMA)",
      "Adequação às normas técnicas e regulamentações"
    ],
  },
  {
    title: "Sustentabilidade e Eficiência Energética",
    icon: <Leaf size={40} className="text-green-500" />,
    details: [
      "Construção sustentável e gestão de resíduos",
      "Análise de eficiência energética",
      "Certificações ambientais (LEED, AQUA, EDGE)",
      "Uso de materiais sustentáveis"
    ],
  },
  {
    title: "Patologia das Construções",
    icon: <Wrench size={40} className="text-red-500" />,
    details: [
      "Diagnóstico de falhas estruturais",
      "Inspeções prediais e laudos técnicos",
      "Análise de patologias em concreto e alvenaria",
      "Consultoria para reforço estrutural"
    ],
  },
  {
    title: "Avaliação e Gestão de Ativos Imobiliários",
    icon: <Home size={40} className="text-blue-500" />,
    details: [
      "Avaliação de imóveis para alienação e financiamento",
      "Estudos de viabilidade imobiliária",
      "Análise de valorização imobiliária",
      "Due diligence para investimentos"
    ],
  },
  {
    title: "Segurança do Trabalho e Normas",
    icon: <ShieldAlert size={40} className="text-orange-500" />,
    details: [
      "Elaboração de PPRA, PCMSO e LTCAT",
      "Treinamentos em segurança do trabalho",
      "Implementação de normas NR-18 e NR-35",
      "Gestão de riscos ocupacionais"
    ],
  },
  {
    title: "Tecnologia e Inovação na Construção",
    icon: <Cpu size={40} className="text-purple-500" />,
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
    <section className="text-center py-16 px-6 sm:px-12 md:px-16 bg-white" id="serviços">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Nossos Serviços</h2>
      <p className="text-gray-600 uppercase text-sm md:text-lg mt-2 font-medium">
        SERVIÇOS PRESTADOS PELA RACIUS ADVISORY - SERVIÇOS DE CONSULTORIA, LDA
      </p>
      <p className="font-semibold text-gray-800 mt-4 text-lg sm:text-xl md:text-2xl">
        Consultoria em construção civil e áreas técnicas afins
      </p>

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
                  className="p-6 border rounded-2xl shadow-xl bg-white flex flex-col items-center text-center max-w-sm flex-1"
                >
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4 text-gray-900">
                    {service.title}
                  </h3>
                  <ul className="text-gray-600 mt-2 text-sm md:text-base text-left flex-1">
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

    
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(services.length / itemsPerPage) }).map((_, i) => (
          <div key={i} className={`w-3 h-3 rounded-full ${index === i ? 'bg-gray-900' : 'bg-gray-400'}`} />
        ))}
      </div>
    </section>
  );
}
