import React from "react";

export default function Products() {
  const categories = [
    { title: "Amour", img: "./Images/banner1.jpg" },
    { title: "Caspian", img: "./Images/banner2.jpg" },
    { title: "Indo Tibetan", img: "./Images/banner3.jpg" },
    { title: "Marque", img: "./Images/banner4.jpg" },
    { title: "Navajo", img: "./Images/banner5.jpg" },
    { title: "Polaris", img: "./Images/banner6.jpg" },
  ];
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((c, i) => (
          <div key={c} className="border rounded overflow-hidden bg-white">
            <img
              src={c.img}
              alt={c.title}
              className="h-44 w-full object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold">{c.title} Collection</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
