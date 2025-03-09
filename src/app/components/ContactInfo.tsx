"use client";

import { Mail, MapPin, Phone, MessageCircle, Link } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-blue-900 text-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm">
      <div className="flex items-center gap-4 mb-4">
        <MapPin className="w-6 h-6 text-blue-300" />
        <p className="text-base sm:text-lg font-medium">Angola / Luanda / Ilha de Luanda</p>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <Mail className="w-6 h-6 text-blue-300" />
        <Link href="mailto:ivandropanzo583@gmail.com" className="hover:underline text-base sm:text-lg font-medium">
          ivandropanzo583@gmail.com
        </Link>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <MessageCircle className="w-6 h-6 text-blue-300" />
        <p className="text-base sm:text-lg font-medium">Whatsapp</p>
      </div>
      <div className="flex items-center gap-4">
        <Phone className="w-6 h-6 text-blue-300" />
        <p className="text-base sm:text-lg font-medium">+244 947 838 429</p>
      </div>
    </div>
  );
}
