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
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) => texts[index].slice(0, prev.length + 1));
        if (displayText === texts[index]) {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#073340] to-[#557A99] text-white overflow-hidden font-serif">
      <NavBar />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 pb-24"
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
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image src="/amico.png" alt="Ilustração" width={500} height={400} layout="responsive" />
        </motion.div>
      </motion.section>

      {/* Mantendo a curva estilosa que você amou */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          d="M0,96L60,106.7C120,117,240,139,360,165.3C480,192,600,224,720,218.7C840,213,960,171,1080,170.7C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
