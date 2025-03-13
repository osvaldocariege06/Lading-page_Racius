import { Link } from "lucide-react";
import React from "react";

export function ConsultingVideoSection() {
  return (
    <section className="bg-gradient-to-r from-blue-200 to-blue-100 py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 font-[Arial]">

      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Empresa de <span className="text-blue-500">Consultoria</span> em Construção e Imobiliária
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Soluções inovadoras para o seu negócio com especialistas do setor.
        </p>
        <Link href="#localização">
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold tracking-wide transition-transform duration-300 transform hover:scale-105 hover:bg-blue-600">
            CONTACTE-NOS
          </button>
        </Link>
      </div>

      <div className="w-full max-w-2xl md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="relative w-full pb-[56.25%] rounded-lg shadow-lg overflow-hidden border-4 border-blue-300">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/b2TbfNHu2_Y"
            title="Como funciona uma Consultoria Imobiliária?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
