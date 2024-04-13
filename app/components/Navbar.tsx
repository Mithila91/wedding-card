"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/our-story", label: "Our Story" },
    { href: "/invitation", label: "Invitation" },
    { href: "/information", label: "Information" },
    { href: "/rsvp", label: "RSVP" },
  ];

  return (
    <nav className="bg-white px-6 py-4 container">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex my-6 justify-between items-center w-full md:w-auto">
        <Image
          src="/images/logo.png"
          alt="about image"
          width={50}
          height={50}
          className="items-center"
        />
        <div className="md:hidden">
          <button
            type="button"
            className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
                ></path>
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:flex ${
          isOpen ? "block" : "hidden"
        } w-full h-screen md:h-auto md:w-auto flex flex-col md:flex-row md:items-center md:justify-between`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="md:px-10 md:py-1 py-4 text-blue-800 hover:bg-gray-300 md:text-base  text-4xl"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
