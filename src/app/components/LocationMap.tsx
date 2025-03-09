"use client";

export default function LocationMap() {
  return (
    <section className="text-center py-12 px-6 sm:px-12 md:px-20 bg-gradient-to-r from-blue-200 to-blue-100 bg-white">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-wide">
        NOSSA <span className="text-blue-500">LOCALIZAÇÃO</span>
      </h2>
      <p className="mt-2 text-lg text-gray-700">Visite-nos na Ilha de Luanda, Angola.</p>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-3xl mx-auto mt-6 h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-xl border-4 border-blue-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.974560577504!2d13.221922439276389!3d-8.786666410243347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f27073059c75%3A0xaad4740a1bb097e3!2sIlha%20de%20Luanda!5e0!3m2!1sen!2sao!4v1741560146120!5m2!1sen!2sao"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
