"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { FiMenu, FiX } from "react-icons/fi";
import MainImage from "./MainImage";

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
      className={`fixed top-0 w-full z-[9999] transition-all duration-300 py-5 
        ${
          scrolled ? "bg-gradient-to-r from-[#AA367C] to-[#78777c] shadow-md" : "md:bg-none md:bg-transparent"
        }
        ${
          menuOpen ? "bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] shadow-md" : "bg-transparent"
        }
        `
      }
    >
      <div className="px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <MainImage className="w-12 h-12" containerClassName="w-16 h-16"/>
        </Link>

        {/* Mobile Toggler */}
        <button
          className="md:hidden cursor-pointer text-2xl text-white relative focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
            {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Links */}
        <div
          className={`min-w-screen md:min-w-0 flex-col  md:flex-row md:flex items-center md:space-x-4 absolute md:static left-0 top-full bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] md:bg-none md:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {["home", "skills", "experience", "projects", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => handleClick(link)}
              className={`block py-2 md:py-0 font-medium text-white text-lg tracking-wide transition-opacity duration-200 ${
                activeLink === link ? "opacity-100" : "opacity-75"
              } hover:opacity-100`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}

          {/* Button */}
          <a href="https://linktr.ee/adityakashyap5047" target="_blank" className="my-4 md:my-0 ">
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
