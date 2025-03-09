"use client";

import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section className="bg-blue-100 py-16 px-6 sm:px-8 md:px-16 text-center mt-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">Contacte-nos</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Texto e Botão */}
        <div className="text-center md:text-left">
          <p className="text-lg sm:text-xl text-black font-semibold">
            QUER <span className="text-blue-600">TRABALHAR</span> CONNOSCO?
            <br /> ENTRE EM <span className="text-blue-600">CONTACTO</span>
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-300 text-black rounded-md shadow-md hover:bg-blue-400 transition">
            Contacte-nos
          </button>
        </div>

        {/* Informações de Contato */}
        <ContactInfo />
      </div>
    </section>
  );
}
