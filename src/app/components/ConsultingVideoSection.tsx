import Link from "next/link";
import React from "react";

export function ConsultingVideoSection() {
  return (
    <section className="bg-[#48A6A1] mx-auto py-16 px-6 md:px-16 flex flex-col md:flex-row justify-center items-center gap-10 font-[Arial Nova Cond Light]">
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-100 leading-tight">
          Empresa de consultoria em <span className="text-white">engenharia civil e áreas técnicas afins, consultoria imobiliária e consultoria de negócio</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Sua visão. Nossa estratégia, crescemos juntos.
        </p>
        <Link href="#localização">
          <button className="mt-6 bg-[#48A6A1] text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold tracking-wide transition-transform duration-300 transform hover:scale-105 hover:bg-[#3B8E8A]">
            CONTACTE-NOS
          </button>
        </Link>
      </div>

      <div className="w-full max-w-2xl md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          {/* <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            controls
            loop={false}
          >
            <source src="https://player.vimeo.com/video/1071912092?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
            
          </video> */}
          <div style={{ padding: "56.37% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1071912092?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="Racius"
            ></iframe>
          </div>
          {/* <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" /> */}
        </div>
      </div>
    </section>
  );
}
