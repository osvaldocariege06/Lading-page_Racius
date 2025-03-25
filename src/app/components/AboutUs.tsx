"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Wrench, Building, Briefcase } from "lucide-react";

const sections = [
  {
   
    id: 1,
    title: "Soluções Estratégicas para Engenharia Civil, Áreas Técnicas Afins, Imobiliário e Negócios",
    content:
      "No cenário dinâmico da engenharia civil, arquitetura, construção e operações, bem como do mercado imobiliário e da gestão empresarial, contar com uma consultoria especializada é essencial para transformar desafios em oportunidades. Nossa equipe de especialistas oferece suporte técnico e estratégico para garantir que cada projeto atinja seu máximo potencial, garantindo eficiência, inovação e segurança em todas as etapas.",
    icon: null, 
  },
  {
    id: 2,
    title: "Consultoria em Engenharia Civil e Áreas Técnicas Afins",
    content:
      "Com uma abordagem multidisciplinar, oferecemos soluções personalizadas para empreendimentos de diversos portes e complexidades. Do planejamento à gestão e conservação, atuamos na concepção de projetos, gestão de obras, estudos de previsão, fiscalização, otimização de custos, preservação do patrimônio edificado e implementação das melhores práticas de engenharia.",
    icon: <Wrench className="text-green-600 w-12 h-12 mx-auto mb-4" />,
  },
  {
    id: 3,
    title: "Consultoria Imobiliária",
    content:
      "O setor imobiliário exige um profundo conhecimento de mercado, tendências e regulamentações. Auxiliamos investidores, construtoras e incorporadoras na avaliação de ativos, estudos de previsão, desenvolvimento de projetos, gestão de empreendimentos e estruturação de negócios imobiliários. Com uma visão estratégica, ajudamos a identificar oportunidades e minimizar riscos, garantindo decisões mais assertivas.",
    icon: <Building className="text-green-600 w-12 h-12 mx-auto mb-4" />,
  },
  {
    id: 4,
    title: "Consultoria de Negócios",
    content:
      "O sucesso de qualquer empreendimento depende de uma gestão eficiente e de estratégias bem estruturadas. Oferecemos assessoria para otimização de processos, desenvolvimento de planos de negócios, estruturação financeira, análise de mercado e inovação empresarial. Nossa missão é contribuir para a competitividade e a sustentabilidade dos negócios, fornecendo soluções alinhadas às demandas do mercado. Combinamos expertise técnica, visão estratégica e compromisso para entregar resultados que agregam valor real aos nossos clientes. Seja na engenharia civil, no setor imobiliário ou na gestão de negócios, estamos prontos para transformar desafios em conquistas.",
    icon: <Briefcase className="text-green-600 w-12 h-12 mx-auto mb-4" />,
  
  },
];

export function AboutUs() {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
        setVisible(true);
      }, 1000); 
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    
    <section  id="sobre-nós"
      ref={sectionRef}
      className="text-center py-16 px-6 sm:px-12 md:px-16 bg-black overflow-hidden font-[Arial Nova Cond Light] "
     
    >
      {sections[currentIndex].icon && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {sections[currentIndex].icon}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-3xl md:text-4xl font-bold text-white font-[Arial Nova Cond Light]"
      >
        {sections[currentIndex].title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-6 text-[#48A6A1] font-semibold text-base md:text-lg max-w-4xl mx-auto leading-relaxed font-[Arial Nova Cond Light]"
      >
        {sections[currentIndex].content}
      </motion.p>
    </section>
  );
}
