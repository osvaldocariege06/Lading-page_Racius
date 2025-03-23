"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const texts = ["Bem-vindo à", "RACIUS ADVISORY", "Empresa especializada em consultoria"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTexts = 1500;

  useEffect(() => {
    const interval = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return texts[index].slice(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayText === texts[index]) {
        setTimeout(() => setIsDeleting(true), delayBetweenTexts);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(interval);
  }, [displayText, isDeleting, index]);

  return (
    <div className="relative min-h-screen text-white overflow-hidden font-[Roboto] opacity-90 bg-gradient-to-b bg-[#48A6A1]">
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 pb-24"
      >
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {displayText.includes("RACIUS ADVISORY") ? (
              <span className="text-green-300">{displayText}</span>
            ) : (
              displayText
            )}
          </h2>

          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <Link href="#colaboradores">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05,  }}
                className="bg-[#48A6A1] hover:bg-[#3c8f8a] text-white px-6 py-3 rounded-lg w-full md:w-auto shadow-md transition-all"
              >
                Comece
              </motion.button>
            </Link>
            <Link href="#serviços">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05, backgroundColor: "#e6e6e6", color: "#000" }}
                className="border border-white px-6 py-3 rounded-lg w-full md:w-auto shadow-md transition-all"
              >
                Explore
              </motion.button>
            </Link>
          </div>
        </div>

        <motion.div
          className="w-3/4 md:w-1/2 max-w-md relative z-10 mt-2"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image 
            src="/HomeImagem.png" 
            alt="Imagem de Construção e Imobiliária" 
            width={800} 
            height={1000} 
            layout="responsive"
            className="mt-20"
          />
        </motion.div>
      </motion.section>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="black" 
          d="M0,160 C120,220 240,250 360,240 C480,230 600,190 720,160 C840,130 960,110 1080,130 C1200,150 1320,200 1440,240 V320 H0 Z"
        ></path>
      </svg>
    </div>
  );
}
