"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Nome */}
        <h3 className="text-lg font-bold">RACIUS ADVISORY</h3>

        {/* Serviços */}
        <div className="text-sm text-center sm:text-left">
          <p className="font-semibold">Serviços</p>
          <p>Consultoria em construção civil</p>
          <p>Consultoria imobiliária</p>
        </div>

        {/* Contato */}
        <div className="text-sm text-center sm:text-left">
          <p className="font-semibold">Contacto</p>
          <p>Whatsapp</p>
          <p>ivandropanzo@gmail.com</p>
          <p>+244 947838429</p>
        </div>
      </div>

      {/* Direitos Reservados */}
      <p className="text-xs mt-6 opacity-75">© 2025 RACIUS ADVISORY. Todos os direitos reservados.</p>
    </footer>
  );
}
