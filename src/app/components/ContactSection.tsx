"use client";

import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section className="bg-[#48A6A1] py-16 px-6 sm:px-8 md:px-16 text-center mt-20 font-['Arial Nova Cond Light']" id="localização">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
        <span className="text-white">SLOGAN</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10">

        <div className="text-center md:text-left md:w-1/2 md:pl-72 md:mt-10">
          <p className="text-xl sm:text-3xl text-gray-900 font-bold leading-relaxed">
            QUAL É A SUA <span className="text-white">VISÃO?</span>
          </p>
          <a
            href="mailto:geral@raciusadvisory.com"
            className="mt-10 inline-block px-8 py-3  bg-[#48A6A1] text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Contacte-nos
          </a>
        </div>

        <div className="md:mr-44">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
