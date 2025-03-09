"use client";

import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-blue-800 text-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm">
      <div className="flex items-center gap-3 mb-3">
        <MapPin className="w-5 h-5" />
        <p className="text-sm sm:text-base">Angola/Luanda/Porto de Luanda</p>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <Mail className="w-5 h-5" />
        <a href="mailto:ivandropanzo583@gmail.com" className="hover:underline text-sm sm:text-base">
          ivandropanzo583@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <MessageCircle className="w-5 h-5" />
        <p className="text-sm sm:text-base">Whatsapp</p>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="w-5 h-5" />
        <p className="text-sm sm:text-base">+244 947838429</p>
      </div>
    </div>
  );
}
