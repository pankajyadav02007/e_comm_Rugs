import React from "react";

export default function Contact() {
  const mapSrc =
    "https://www.google.com/maps?q=28.7041,77.1025&z=14&output=embed";
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="md:flex gap-6">
        <div className="md:w-1/2">
          <form className="bg-white p-6 border rounded">
            <label className="block">
              <span className="text-sm">Name</span>
              <input
                placeholder="Enter Name"
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </label>
            <label className="block mt-3">
              <span className="text-sm">Email</span>
              <input
                placeholder="Enter Email"
                className="mt-1 block w-full border rounded px-3 py-2"
              />
            </label>
            <label className="block mt-3">
              <span className="text-sm">Message</span>
              <textarea
                className="mt-1 block w-full border rounded px-3 py-2"
                rows={4}
              ></textarea>
            </label>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-primary border bg-green-600 text-white cursor-pointer rounded"
            >
              Send
            </button>
          </form>
        </div>
        <div className="md:w-1/2">
          <iframe
            title="contact-map"
            src={mapSrc}
            className="w-full h-64 border"
          />
          <div className="mt-4">
            <p className="font-semibold">Phone:</p>
            <p>+91-XXXXXXXXXX</p>
            <p className="font-semibold mt-2">Email:</p>
            <p>info@prasadcarpet.example</p>
          </div>
        </div>
      </div>
    </div>
  );
}
