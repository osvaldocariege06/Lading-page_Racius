"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { 
  Building, 
  Landmark, 
  HardHat, 
  School, 
  TrendingUp, 
  Building2, 
  ClipboardList, 
  DollarSign, 

} from "lucide-react";

const partners = [
  {
    category: "Instituições Públicas em Angola",
    items: [
      { name: "Ministério das Obras Públicas, Urbanismo e Habitação (MINOPUH)", icon: Building },
      { name: "Instituto de Planeamento e Gestão Urbana de Luanda (IPGUL)", icon: Building },
      { name: "Laboratório de Engenharia de Angola (LEA)", icon:HardHat },
      { name: "Instituto Nacional de Estradas de Angola (INEA)", icon: School },
      { name: "Comissão de Mercado de Capitais (CMC)", icon: TrendingUp },
      { name: "Banco Nacional de Angola (BNA)", icon: Landmark },
      { name: "Agência Nacional de Petróleo, Gás e Biocombustíveis (ANPG)", icon: ClipboardList },
    ],
  },
  {
    category: "Instituições e Organizações Internacionais",
    items: [
      { name: "Federação Internacional de Engenheiros Consultores (FIDIC)", icon: HardHat },
      { name: "Banco Africano de Desenvolvimento (BAD)", icon: Landmark },
      { name: "Banco Mundial e IFC (International Finance Corporation)", icon: Landmark },
      { name: "Organização Internacional de Normalização (ISO)", icon: Building2 },
      { name: "Fórum Económico Mundial (WEF)", icon: DollarSign },
    ],
  },
];

interface PartnerSliderProps {
  items: { name: string; icon: React.ComponentType<{ className?: string; size?: number }> }[];
}

function PartnerSlider({ items }: PartnerSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 5000); // Cada card fica visível por 5 segundos
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative overflow-hidden w-full max-w-md mx-auto">
      <motion.div
        animate={{ translateX: `-${current * 100}%` }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        className="flex"
      >
        {items.map((partner, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col items-center bg-gray-800 p-6 rounded-lg text-white shadow-md"
          >
            <partner.icon className="text-green-600" size={40} />
            <span className="mt-3 text-center text-sm">{partner.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="text-center py-10 bg-black font-[Roboto]" id="colaboradores">
      <h2 className="text-4xl font-extrabold tracking-wide text-white">
        NOSSOS <span className="text-[#48A6A1]">COLABORADORES</span>
      </h2>
      <div className="mt-8 space-y-12 flex flex-col items-center">
        {partners.map((partnerGroup, groupIndex) => (
          <motion.div
            key={partnerGroup.category}
            className="w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: groupIndex * 0.4 }}
          >
            <h3 className="text-2xl text-[#48A6A1] font-bold mb-6 text-center">
              {partnerGroup.category}
            </h3>
            <PartnerSlider items={partnerGroup.items} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
