"use client";

import { motion } from "framer-motion";
import { Building2, Globe, Banknote, Landmark, ShieldCheck, Scale } from "lucide-react";

const partners = [
  {
    category: "Instituições Públicas em Angola",
    items: [
      { name: "Ministério das Obras Públicas, Urbanismo e Habitação (MINOPUH)", icon: Building2 },
      { name: "Instituto de Planeamento e Gestão Urbana de Luanda (IPGUL)", icon: Landmark },
      { name: "Laboratório de Engenharia de Angola (LEA)", icon: ShieldCheck },
      { name: "Instituto Nacional de Estradas de Angola (INEA)", icon: Scale },
      { name: "Comissão de Mercado de Capitais (CMC)", icon: Banknote },
      { name: "Banco Nacional de Angola (BNA)", icon: Banknote },
      { name: "Agência Nacional de Petróleo, Gás e Biocombustíveis (ANPG)", icon: Globe },
    ],
  },
  {
    category: "Instituições e Organizações Internacionais",
    items: [
      { name: "Federação Internacional de Engenheiros Consultores (FIDIC)", icon: Globe },
      { name: "Banco Africano de Desenvolvimento (BAD)", icon: Banknote },
      { name: "Banco Mundial e IFC (International Finance Corporation)", icon: Banknote },
      { name: "Organização Internacional de Normalização (ISO)", icon: Scale },
      { name: "Fórum Económico Mundial (WEF)", icon: Globe },
    ],
  },
];

export function PartnersSection() {
  return (
    <section className="text-center py-10 bg-black font-[Roboto]" id="colaboradores" >
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
            <h3 className="text-2xl text-[#48A6A1] font-bold mb-6 text-center">{partnerGroup.category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
              {partnerGroup.items.map((partner, index) => (
                <motion.div 
                  key={partner.name} 
                  className="flex flex-col items-center bg-gray-800 p-6 rounded-lg text-white shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <partner.icon className="text-green-600" size={40} />
                  <span className="mt-3 text-center text-sm">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
