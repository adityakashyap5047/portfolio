"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/logo.svg";
import { ArrowRight } from 'lucide-react';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (section: string) => {
    setActiveLink(section);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[9999] transition-all duration-300 py-5 ${
        scrolled ? "bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-12 cursor-pointer" />
        </Link>

        {/* Mobile Toggler */}
        <button
          className="md:hidden text-white relative focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          <div className="relative w-6 h-4">
            <span
              className={`absolute h-[2px] w-6 bg-white left-0 top-0 transition-transform duration-300 ${
                menuOpen ? "rotate-45 top-1.5" : ""
              }`}
            ></span>
            <span
              className={`absolute h-[2px] w-6 bg-white left-0 top-2 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`absolute h-[2px] w-6 bg-white left-0 top-4 transition-transform duration-300 ${
                menuOpen ? "-rotate-45 top-1.5" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Links */}
        <div
          className={`flex-col md:flex-row md:flex items-center md:space-x-8 absolute md:static left-0 top-full bg-[#121212] md:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {["home", "skills", "experience", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => handleClick(link)}
              className={`block py-2 md:py-0 font-medium text-white text-[18px] tracking-wide transition-opacity duration-200 ${
                activeLink === link ? "opacity-100" : "opacity-75"
              } hover:opacity-100`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}

          {/* Button */}
          <a href="#connect" className="mt-4 md:mt-0 md:ml-6">
            <button className="cursor-pointer rounded-md w-52 relative hover:text-black border border-white text-white font-bold text-lg px-6 py-3 transition-all duration-300 overflow-hidden group">
              <div className="flex items-center gap-6 relative z-10">
                <span>Let{`'`}s Connect</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:text-black">
                  <ArrowRight size={20} strokeWidth={4} />
                </span>
              </div>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
            </button>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
