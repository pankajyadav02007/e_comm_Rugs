import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ FIXED
import { galleryImagesList } from "../data";

const galleryImages = galleryImagesList;

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-10">
      <h3 className="text-2xl font-semibold mb-6">Gallery</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {galleryImages.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white border rounded overflow-hidden"
          >
            <img
              onClick={() => navigate(`/productdetails/${src.id}`)} // ✅ FIXED
              src={src.img}
              alt={`gallery-${i}`}
              className="w-full h-44 object-cover"
            />

            <div className="p-3">
              <h4 className="text-sm font-medium">Collection {i + 1}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
