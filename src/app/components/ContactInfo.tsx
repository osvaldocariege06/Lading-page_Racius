"use client";

import { Mail, MapPin, Phone, Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";
import Link from "next/link";


export default function ContactInfo() {
  return (
    <div className="bg-[#48A6A1] text-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm font-[Arial Nova Cond Light]">
      <div className="flex items-center gap-4 mb-4">
        <MapPin className="w-6 h-6 text-green-300" />
        <p className="text-base sm:text-lg font-medium">Angola / Luanda / Belas Business Park</p>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <Mail className="w-6 h-6 text-green-300" />
        <Link href="mailto:geral@raciusadvisory.com" className="hover:underline text-base sm:text-lg font-medium">
          geral@raciusadvisory.com
        </Link>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <Linkedin className="w-6 h-6 text-green-300" />
        <Link href="https://www.linkedin.com/company/racius-edific-se/">
          <p className="text-base sm:text-lg font-medium">Linkedin</p>
        </Link>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <MessageCircle className="w-6 h-6 text-green-300" />
        <Link href="https://wa.me/244926437705">
          <p className="text-base sm:text-lg font-medium">Whatsapp</p>
        </Link>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <Instagram className="w-6 h-6 text-green-300" />
        <Link href="https://www.instagram.com/raciusadvisory?igsh=eXRpdnZnMms4c2F0">
          <p className="text-base sm:text-lg font-medium">Instagram</p>
        </Link>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <Facebook className="w-6 h-6 text-green-300" />
        <Link href="https://www.facebook.com/profile.php?id=61552165228202">
          <p className="text-base sm:text-lg font-medium">Facebook</p>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Phone className="w-6 h-6 text-green-300" />
        <p className="text-base sm:text-lg font-medium">+244 926437705</p>
      </div>
    </div>
  );
}