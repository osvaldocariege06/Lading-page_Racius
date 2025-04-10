"use client";


import Link from "next/link";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section className="bg-[#48A6A1] py-16 px-6 sm:px-8 md:px-16 text-center mt-0 font-['Arial Nova Cond Light']">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 max-w-[600px] leading-relaxed w-full text-center mx-auto">
        <span className="text-white">Sua visão. Nossa estratégia, crescemos juntos.</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10">
        <div className="text-center md:text-left md:w-1/2 md:pl-72 md:mt-10">
          <p className="text-xl sm:text-xl text-gray-100 font-bold leading-relaxed">
            QUAL É A SUA <span className="text-white">VISÃO?</span>
          </p>
          <Link id="Contacte-nos"
            href="mailto:geral@raciusadvisory.com"
            className="mt-10 inline-block px-8 py-3  bg-white text-[#48A6A1] font-semibold text-lg rounded-lg shadow-md hover:bg-transparent hover:border border-white hover:text-white active:scale-95 transition-all"
          >
            Contacte-nos
          </Link>
        </div>

        <div className="md:mr-44">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
