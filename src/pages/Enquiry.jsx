import React, { useState } from "react";

export default function Enquiry() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("Enquiry sent! (demo)");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="container mx-auto px-4 py-10 md:flex gap-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl bg-white p-6 border rounded w-full"
      >
        <h2 className="text-2xl font-bold mb-4">Enquiry</h2>
        <label className="block">
          <span className="text-sm">Name</span>
          <input
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full border rounded px-3 py-2"
            required
          />
        </label>
        <label className="block mt-3">
          <span className="text-sm">Email</span>
          <input
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="mt-1 block w-full border rounded px-3 py-2"
            required
          />
        </label>
        <label className="block mt-3">
          <span className="text-sm">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="mt-1 block w-full border rounded px-3 py-2"
            rows={5}
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-primary border rounded text-white text-xl bg-green-600 cursor-pointer"
        >
          Send Enquiry
        </button>
      </form>

      <div className="md:w-1/2">
        <img
          src="./public/Images/gallery6.jpg"
          alt="about"
          className="h-120 w-full object-cover rounded shadow"
        />
      </div>
    </div>
  );
}
