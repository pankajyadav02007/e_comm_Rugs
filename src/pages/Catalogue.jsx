import React from "react";

export default function Catalogue() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Catalogue</h2>
      <p>Download our catalogue (Click link)</p>
      <a
        className="inline-block mt-3 px-4 py-2 bg-primary text-white rounded"
        href="#"
      >
        Download PDF
      </a>
    </div>
  );
}
