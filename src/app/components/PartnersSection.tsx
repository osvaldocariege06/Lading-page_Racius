"use client";
import Image from "next/image";

export function PartnersSection() {
  return (
    <section className="text-center py-12 bg-white" id="comece">
      <h2 className="text-4xl font-extrabold tracking-wide text-gray-900">
        Nossos <span className="text-blue-600">PARCEIROS</span>
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-8 opacity-80">
        <Image src="/Parceiros/airbn.png" alt="Parceiro 1" width={120} height={60} className="w-28 h-auto md:w-32" />
        <Image src="/Parceiros/github.png" alt="Parceiro 2" width={120} height={60} className="w-28 h-auto md:w-32" />
        <Image src="/Parceiros/spotify.png" alt="Parceiro 3" width={120} height={60} className="w-28 h-auto md:w-32" />
        <Image src="/Parceiros/husky.png" alt="Parceiro 4" width={120} height={60} className="w-28 h-auto md:w-32" />
      </div>
    </section>
  );
}
