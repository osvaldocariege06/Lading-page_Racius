"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
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
    <div className="relative min-h-screen bg-gradient-to-r from-[#073340] to-[#557A99] text-white overflow-hidden font-serif">
      <NavBar />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 pb-24"
      >
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {displayText.includes("RACIUS ADVISORY") ? (
              <span className="text-blue-300">{displayText}</span>
            ) : (
              displayText
            )}
          </h2>

          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <Link href="#comece">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05, backgroundColor: "#61a5c2" }}
                className="bg-blue-300 text-blue-900 px-6 py-3 rounded-lg w-full md:w-auto shadow-md transition-all"
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
          className="w-3/4 md:w-1/2 max-w-md"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/amico.png" alt="Ilustração" width={500} height={400} layout="responsive" />
        </motion.div>
      </motion.section>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          d="M0,160 C120,220 240,250 360,240 C480,230 600,190 720,160 C840,130 960,110 1080,130 C1200,150 1320,200 1440,240 V320 H0 Z"
        ></path>
      </svg>

    </div>
  );
}
