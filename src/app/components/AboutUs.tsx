"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function AboutUs() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(false);
          setTimeout(() => setInView(true), 100);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="text-center py-16 px-6 sm:px-12 md:px-16 bg-black overflow-hidden" id="sobre-nós">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0, rotate: [0, 5, -5, 0] } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-3xl md:text-4xl font-bold text-white font-[Roboto]"
      >
        Sobre Nós
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-gray-400 italic text-sm md:text-base mt-2 font-[Roboto]"
      >
        Somos uma empresa de consultoria
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="mt-6 text-gray-300 font-semibold text-base md:text-lg max-w-4xl mx-auto leading-relaxed font-[Roboto]"
      >
        <p>
          A <span className="text-white font-bold">RACIUS ADVISORY</span> é especializada em consultoria
          imobiliária e construção civil, oferecendo soluções inovadoras e eficientes para o mercado.
        </p>
        <p className="mt-4">
          Nossa equipe conta com profissionais altamente qualificados, comprometidos em fornecer serviços de excelência
          para clientes que buscam segurança, valorização e qualidade em seus investimentos imobiliários e projetos de construção.
        </p>
      </motion.div>
    </section>
  );
}
