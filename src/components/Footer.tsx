// components/Footer.tsx
import Image from "next/image";
import { MailchimpForm } from "@/components/MailchimpForm";
import logo from "@/assets/img/logo.svg";

import bgImage from "@/assets/img/footer-bg.png";
import { FaGithub, FaLinkedin, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="bg-cover bg-center bg-no-repeat pb-12 sm:px-12" style={{ backgroundImage: `url(${bgImage.src})` }}>
      <MailchimpForm />
      <div className="container !mx-auto !px-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="sm:!w-1/2 !w-full !mb-4 sm:!mb-0">
          <Image src={logo} alt="Logo" className="w-1/3" />
        </div>
        <div className="sm:w-1/2 w-full text-center sm:text-right">
          <div className="flex text-white justify-center sm:justify-end space-x-4">
            <FaGithub className="cursor-pointer text-2xl hover:text-3xl"/>
            <FaLinkedin className="cursor-pointer text-2xl hover:text-3xl"/>
            <SiGmail className="cursor-pointer text-2xl hover:text-3xl"/>
            <FaSquareInstagram className="cursor-pointer text-2xl hover:text-3xl"/>
            <FaXTwitter className="cursor-pointer text-2xl hover:text-3xl"/>
          </div>
          <p className="text-sm text-gray-400 !mt-4">Copyright 2025 &copy; All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};