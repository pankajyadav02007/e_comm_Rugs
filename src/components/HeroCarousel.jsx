import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "./public/Images/banner1.jpg",
  "./public/Images/banner2.jpg",
  "./public/Images/banner3.jpg",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000); // 1s
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0.01, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.7 }}
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt={`banner-${index}`}
        />
      </AnimatePresence>
      <div className="absolute inset-0 flex items-end md:items-center justify-start p-6 md:p-12">
        <div className="bg-white/80 backdrop-blur-sm rounded p-4 md:p-6 max-w-xl">
          <h2 className="text-2xl md:text-4xl font-bold">
            Premium Handmade Rugs
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-700">
            Craft, quality and elegance — from our looms to your home.
          </p>
        </div>
      </div>
    </div>
  );
}
