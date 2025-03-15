"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 text-center font-[Robotol]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
     
        <h3 className="text-2xl font-extrabold tracking-wide text-blue-400">
          RACIUS ADVISORY
        </h3>

        <div className="text-base text-center sm:text-left">
          <p className="font-semibold text-lg mb-2 text-gray-200">Serviços</p>
          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            Consultoria em construção civil
          </p>
          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            Consultoria imobiliária
          </p>
        </div>

        <div className="text-base text-center sm:text-left">
          <p className="font-semibold text-lg mb-2 text-gray-200">Contato</p>
          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            Whatsapp
          </p>
          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            ivandropanzo@gmail.com
          </p>
          <p className="text-gray-400 hover:text-white transition-colors duration-300">
            +244 947838429
          </p>
        </div>
      </div>

      <p className="text-sm mt-8 opacity-70 tracking-wide">
        © 2025 RACIUS ADVISORY. Todos os direitos reservados.
      </p>
    </footer>
  );
}
