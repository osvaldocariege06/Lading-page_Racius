import React from "react";

export function ConsultingVideoSection() {
  return (
    <section className="bg-blue-100 py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-8">
      {/* Texto */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-2xl font-bold text-black">
          Empresa de consultoria de construção e imobiliária
        </h2>
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg">
          CONTACTE-NOS
        </button>
      </div>

      {/* Vídeo responsivo */}
      <div className="w-full max-w-2xl md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="relative w-full pb-[56.25%] rounded-lg shadow-lg overflow-hidden">
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
