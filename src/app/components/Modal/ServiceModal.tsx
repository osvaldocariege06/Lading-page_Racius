"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  service: {
    title: string;
    icon: React.ReactNode;
    details: string[];
  };
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full"
      >
        <button className="absolute top-3 right-3 text-gray-500" onClick={onClose}>
          ✖
        </button>
        <div className="flex flex-col items-center">
          {service.icon}
          <h2 className="text-2xl font-bold mt-2">{service.title}</h2>
          <ul className="text-gray-600 mt-4 text-left">
            {service.details.map((detail, index) => (
              <li key={index} className="mt-1">• {detail}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
