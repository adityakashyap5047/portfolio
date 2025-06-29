"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
          scrolled || menuOpen
            ? "bg-[#021024]/60 backdrop-blur-md border-b border-white/10 shadow-md"
            : "bg-transparent"
        }`}
    >
      <div className="px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <MainImage className="w-12 h-12" containerClassName="w-16 h-16" />
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
          className={`absolute md:static left-0 top-full w-full md:w-auto transition-all duration-300 ease-in-out ${menuOpen ? "flex" : "hidden"} md:flex justify-evenly items-center bg-[#021024]/80 max-md-backdrop-blur-md border-t border-white/10 md:bg-transparent md:border-none`}
        >
          <div className="flex gap-4 md:flex-row flex-col pb-4 md:pb-0">
            {["home", "skills", "experience", "projects", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => handleClick(link)}
                className={`block py-2 md:py-0 font-medium text-white text-lg tracking-wide transition-all duration-200 ${
                  activeLink === link ? "opacity-100" : "opacity-75"
                }
                hover:text-[#00e0ff] hover:scale-110`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
          <div className="py-4 md:py-0 pl-4">
            {/* Button */}
            <a href="https://linktr.ee/adityakashyap5047" target="_blank">
              <button className="cursor-pointer rounded-md w-52 relative text-white font-bold text-lg px-6 py-3 overflow-hidden group border border-white/20 backdrop-blur-md bg-white/10 hover:text-black transition-all duration-300">
                <div className="flex items-center gap-6 relative z-10">
                  <span>Let{`'`}s Connect</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:text-black">
                    <ArrowRight size={20} strokeWidth={4} />
                  </span>
                </div>
                <span className="absolute inset-0 bg-[#00e0ff]/90 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;