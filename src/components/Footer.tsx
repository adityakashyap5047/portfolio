"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MainImage from "./MainImage";

const Footer = () => {
  return (
    <footer className="text-white py-12 px-6 md:px-20" style={{backgroundImage: 'radial-gradient(circle, #066C65 -90%, #021024 100%)'}}>
      <div className="max-w-screen-xl mx-auto flex flex-wrap gap-10">
        <div className="max-w-xs">
          <div className="flex items-center space-x-3">
            <MainImage className="w-12 h-12" containerClassName="w-16 h-16" />
            <h1 className="text-2xl font-bold text-blue-200">Aditya Kumar</h1>
          </div>
          <p className="mt-4 text-gray-300">
            Full-stack developer passionate about creating exceptional web
            applications and sharing knowledge with the development community.
          </p>
        </div>

        <div className="flex flex-1 gap-10 justify-around">
          <div>
          <h2 className="text-xl font-semibold mb-4 border-b-2 border-[#00e0ff] inline-block pb-1">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-[#00e0ff] hover:scale-110">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-[#00e0ff] hover:scale-110">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-[#00e0ff] hover:scale-110">
              <a href="#experience">Experience</a>
            </li>
            <li className="hover:text-[#00e0ff] hover:scale-110">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-[#00e0ff] hover:scale-110">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          </div>        
          <div>
            <h2 className="text-xl font-semibold mb-4 border-b-2 border-[#00e0ff] inline-block pb-1">
              Connect With Me
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3 hover:text-[#00e0ff] hover:scale-110">
                <FaGithub size={20} />
                <a href="https://github.com/adityakashyap5047" target="_blank">GitHub</a>
              </li>
              <li className="flex items-center space-x-3 hover:text-[#00e0ff] hover:scale-110">
                <FaLinkedin size={20} />
                <a href="https://linkedin.com/in/adityakashyap5047" target="_blank">LinkedIn</a>
              </li>
              <li className="flex items-center space-x-3 hover:text-[#00e0ff] hover:scale-110">
                <MdEmail size={20} />
                <a href="mailto:adityakashyap5047@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

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