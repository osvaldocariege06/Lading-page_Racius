"use client";
import Image from "next/image";

export function PartnersSection() {
  return (
    <section className="text-center py-10 bg-white">
      <h2 className="text-2xl font-bold">
        Nossos <span className="text-black">PARCEIROS</span>
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-6 mt-6 opacity-50">
        <Image src="/airbnb-logo.png" alt="Airbnb" width={100} height={50} className="w-24 h-auto md:w-28" />
        <Image src="/github-logo.png" alt="GitHub" width={100} height={50} className="w-24 h-auto md:w-28" />
        <Image src="/spotify-logo.png" alt="Spotify" width={100} height={50} className="w-24 h-auto md:w-28" />
        <Image src="/husky-logo.png" alt="Husky" width={100} height={50} className="w-24 h-auto md:w-28" />
      </div>
    </section>
  );
}
