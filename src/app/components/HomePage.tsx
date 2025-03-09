"use client";

import Image from "next/image";
import NavBar from "./NavBar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#073340] to-[#557A99] text-white overflow-hidden">
      <NavBar />

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 pb-24"
      >
        {/* Texto */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Bem-vindo à
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-300">
            RACIUS ADVISORY
          </h2>

          {/* Botões */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05, backgroundColor: "#61a5c2" }}
              className="bg-blue-300 text-blue-900 px-6 py-3 rounded-lg w-full md:w-auto shadow-md transition-all"
            >
              Comece
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05, backgroundColor: "#e6e6e6", color: "#000" }}
              className="border border-white px-6 py-3 rounded-lg w-full md:w-auto shadow-md transition-all"
            >
              Explore
            </motion.button>
          </div>
        </div>

        {/* Ilustração */}
        <div className="w-3/4 md:w-1/2 max-w-md">
          <Image
            src="/illustration.png"
            alt="Ilustração"
            width={500}
            height={400}
            layout="responsive"
          />
        </div>
      </motion.section>

      {/* Curvatura profissional invertida para a esquerda */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          d="M1440,288L1360,261.3C1280,235,1120,181,960,165.3C800,149,640,171,480,176C320,181,160,171,80,165.3L0,160L0,320L80,320C160,320,320,320,480,320C640,320,800,320,960,320C1120,320,1280,320,1360,320L1440,320Z"
        ></path>
      </svg>
    </div>
  );
}
