import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold text-lg">Prasad Carpet International</h4>
          <p className="mt-2 text-gray-300 text-sm">
            Manufacturer & exporter of fine handmade rugs and carpets. Quality
            and craftmanship since [YEAR].
          </p>
        </div>
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-2 space-y-1 text-sm text-gray-300">
            <li>Home</li>
            <li>Products</li>
            <li>Catalogue</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Connect with us</h5>
          <div className="flex items-center gap-3 mt-3">
            <a className="p-2 rounded bg-gray-800" href="#">
              <FaFacebookF />
            </a>
            <a className="p-2 rounded bg-gray-800" href="#">
              <FaTwitter />
            </a>
            <a className="p-2 rounded bg-gray-800" href="#">
              <FaInstagram />
            </a>
            <a className="p-2 rounded bg-gray-800" href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-gray-400 text-sm py-3">
        <div className="container mx-auto px-4 text-center">
          © {new Date().getFullYear()} Prasad Carpet International. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
