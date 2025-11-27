import React from "react";

export default function Locations() {
  const mapSrc = "https://www.google.com/maps?q=Bhadohi+India&output=embed";
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Locations</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <iframe title="map" src={mapSrc} className="w-full h-80 border" />
        <div>
          <h3 className="font-semibold">Head Office</h3>
          <p>Khamaria, Bhadhoi, U.P., India</p>
          <h3 className="font-semibold mt-4">Showroom</h3>
          <p>Contact for details</p>
        </div>
      </div>
    </div>
  );
}
