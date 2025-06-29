"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MainImage from "./MainImage";

const Footer = () => {
  return (
    <footer className="text-white py-12 px-6 md:px-20" style={{backgroundImage: 'radial-gradient(circle, #0D3E85 0%, #021024 100%)'}}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-3">
            <MainImage className="w-12 h-12" containerClassName="w-16 h-16" />
            <h1 className="text-2xl font-bold text-blue-200">Aditya Kumar</h1>
          </div>
          <p className="mt-4 text-gray-300">
            Full-stack developer passionate about creating exceptional web
            applications and sharing knowledge with the development community.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#home" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center space-x-3">
              <FaGithub size={20} />
              <a href="https://github.com/yourusername" target="_blank" className="hover:text-white">GitHub</a>
            </li>
            <li className="flex items-center space-x-3">
              <FaLinkedin size={20} />
              <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-white">LinkedIn</a>
            </li>
            <li className="flex items-center space-x-3">
              <FaTwitter size={20} />
              <a href="https://twitter.com/yourhandle" target="_blank" className="hover:text-white">Twitter</a>
            </li>
            <li className="flex items-center space-x-3">
              <MdEmail size={20} />
              <a href="mailto:youremail@example.com" className="hover:text-white">Email</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2025 Aditya. All rights reserved.</p>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <span className="h-2 w-2 bg-green-500 rounded-full"></span>
          <span>Open to opportunities</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;