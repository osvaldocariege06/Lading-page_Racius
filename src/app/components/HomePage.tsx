"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

export default function Home() {
  const texts = useMemo(() => [
    "Bem-vindo à",
    "RACIUS ADVISORY",
    "Empresa especializada em consultoria",
  ], []);
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
  }, [displayText, isDeleting, index, texts]);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-start overflow-hidden font-['Arial Nova Cond Light']">
      
      <motion.div 
        className="relative w-full h-full rounded-lg overflow-hidden shadow-lg mt-32"
        animate={{ scale: [1, 1.05, 1], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/ImageHome.jpg"
          alt="Imagem de engenharia civil"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          priority
        />
      </motion.div>

      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 text-center w-full px-6 md:px-16 mt-32">
        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          {displayText.includes("RACIUS ADVISORY") ? (
            <span className="text-[#48A6A1]">{displayText}</span>
          ) : (
            displayText
          )}
        </h2>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Link href="#colaboradores">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#48A6A1] hover:bg-[#3c8f8a] text-white px-6 py-3 rounded-lg shadow-md transition-all"
            >
              Comece
            </motion.button>
          </Link>
          <Link href="#serviços">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05, backgroundColor: "#e6e6e6", color: "#000" }}
              className="border border-white px-6 py-3 rounded-lg shadow-md transition-all text-white"
            >
              Explore
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
