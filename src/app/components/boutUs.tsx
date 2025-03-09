import React from "react";

export function AboutUs() {
  return (
    <section className="text-center py-16 px-6 sm:px-12 md:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-black">Sobre Nós</h2>
      <p className="text-gray-500 italic text-sm md:text-base mt-2">
        Somos uma empresa de consultoria
      </p>
      <div className="mt-6 text-gray-700 font-semibold text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
        <p>
          A <span className="text-blue-600 font-bold">RACIUS ADVISORY</span> é especializada em consultoria
          imobiliária e construção civil, oferecendo soluções inovadoras e eficientes para o mercado.
        </p>
        <p className="mt-4">
          Nossa equipe conta com profissionais altamente qualificados, comprometidos em fornecer serviços de excelência
          para clientes que buscam segurança, valorização e qualidade em seus investimentos imobiliários e projetos de construção.
        </p>
      </div>
    </section>
  );
}
