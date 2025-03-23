"use client";

import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section className="bg-[#48A6A1] py-16 px-6 sm:px-8 md:px-16 text-center mt-20 font-['Roboto']" id="localização">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
        Entre em <span className="text-white">Contato</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      
        <div className="text-center md:text-left">
          <p className="text-xl sm:text-2xl text-gray-900 font-semibold leading-relaxed">
            QUER <span className="text-white">TRABALHAR</span> CONNOSCO?
            <br /> ENTRE EM <span className="text-white">CONTATO</span>
          </p>
          <a
            href="mailto:geral@raciusadvisory.com"
            className="mt-6 inline-block px-8 py-3 bg-[#48A6A1] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Contacte-nos
          </a>
        </div>

        <ContactInfo />
      </div>
    </section>
  );
}
