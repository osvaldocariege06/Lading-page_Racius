import Link from "next/link";
import React from "react";

export function ConsultingVideoSection() {
  return (
    <section className="bg-[#48A6A1] py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 font-[Roboto] ">
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-100 leading-tight">
          Empresa de <span className="text-white">Consultoria</span> em Construção e Imobiliária
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Soluções inovadoras para o seu negócio com especialistas do setor.
        </p>
        <Link href="#localização">
          <button className="mt-6 bg-[#48A6A1] text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold tracking-wide transition-transform duration-300 transform hover:scale-105 hover:bg-[#3B8E8A]">
            CONTACTE-NOS
          </button>
        </Link>
      </div>

      <div className="w-full max-w-2xl md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="relative w-full pb-[56.25%] rounded-lg shadow-lg overflow-hidden border-4 border-[#48A6A1]">
          <video
            className="absolute top-0 left-0 w-full h-full"
            controls
            autoPlay
            loop
          >
            <source src="/VideoRacius.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </div>
    </section>
  );
}
