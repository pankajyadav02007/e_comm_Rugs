import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-[rgb(131,245,189)] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="Images/logo.png"
            alt="logo"
            className="w-26 h-[60px] object-cover"
          />
          <div className="hidden sm:block">
            <h1 className="font-bold text-2xl">TwistLoom</h1>
            <p className="text-xs text-orange-500">Fine Handmade Rugs</p>
          </div>
        </div>

        <nav className="space-x-4 hidden md:flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/locations"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }
          >
            Locations
          </NavLink>
          <NavLink
            to="/catalogue"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }
          >
            Catalogue
          </NavLink>
          <NavLink
            to="/enquiry"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }
          >
            Enquiry
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }
          >
            Contact
          </NavLink>
        </nav>
        {/* nav-icons */}
        <section className="space-x-4 hidden md:flex items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }
          >
            <FiSearch className="size-5" />
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }
          >
            <PiShoppingCart className="size-5" />
          </NavLink>
          <NavLink
            to="/loginsignup"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-700"
            }
          >
            <MdAccountCircle className="size-5" />
          </NavLink>
        </section>
      </div>
    </header>
  );
}
