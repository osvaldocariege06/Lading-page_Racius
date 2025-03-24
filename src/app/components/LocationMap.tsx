"use client";

export default function LocationMap() {
  return (
    <section className="text-center py-12 px-6 sm:px-12 md:px-20 bg-[#48A6A1] to-blue-100  font-[Roboto]">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-wide">
        NOSSA <span className="text-white">LOCALIZAÇÃO</span>
      </h2>
      <p className="mt-2 text-lg text-gray-900">Visite-nos: Belas Business Park, Talatona, Edifício Malange, Angola.</p>

      <div className="w-full max-w-md sm:max-w-lg md:max-w-3xl mx-auto mt-6 h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-xl border-4 border-[#48A6A1] opacity-90">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.5449519340523!2d13.18644332446837!3d-8.921825591135303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f5f3e57e5913%3A0x479890953d77927b!2sBelas%20Business%20Park!5e0!3m2!1sen!2sao!4v1742834572175!5m2!1sen!2sao"
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
