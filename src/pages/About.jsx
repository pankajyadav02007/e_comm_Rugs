import React from "react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <div className="md:flex gap-6">
        <div className="md:w-1/2">
          <p className="text-gray-700">
            Prasad Carpet International is a reputed manufacturer and exporter
            of fine handmade rugs. Our team combines traditional techniques with
            modern standards to deliver durable, beautiful carpets. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Fuga voluptatibus nihil
            qui pariatur ipsa libero minus odit atque! Porro, eligendi! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae
            laboriosam enim a cumque possimus totam praesentium accusantium
            voluptatum tempore fugiat nulla, dolor earum laudantium asperiores
            dolores. Fugit exercitationem amet qui minima cumque numquam
            deserunt hic quia beatae harum sunt explicabo consequuntur similique
            error et incidunt consectetur quas facere sit, tenetur doloremque
            rerum voluptate sed consequatur. Tempore porro itaque, labore modi
            quod, quibusdam commodi odit in sequi dignissimos eos accusamus
            voluptates inventore optio, laboriosam temporibus magni obcaecati
            dolores explicabo non quis impedit. A iure ipsum ducimus repudiandae
            nesciunt! Eaque sequi accusamus quam necessitatibus. Quae quo soluta
            labore quia assumenda voluptatem.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="./public/Images/gallery2.jpg"
            alt="about"
            className="h-120 w-full object-cover rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}
