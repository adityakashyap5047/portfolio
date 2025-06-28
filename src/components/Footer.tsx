// components/Footer.tsx
import Image from "next/image";
import { MailchimpForm } from "@/components/MailchimpForm";
import navIcon1 from "@/assets/img/nav-icon1.svg";
import navIcon2 from "@/assets/img/nav-icon2.svg";
import navIcon3 from "@/assets/img/nav-icon3.svg";
import logo from "@/assets/img/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-cover bg-center bg-no-repeat pb-12 pt-0" style={{ backgroundImage: "url('@/assets/img/footer-bg.png')" }}>
      <MailchimpForm />
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="sm:w-1/2 w-full mb-4 sm:mb-0">
          <Image src={logo} alt="Logo" className="w-1/3" />
        </div>
        <div className="sm:w-1/2 w-full text-center sm:text-right">
          <div className="flex justify-center sm:justify-end space-x-4">
            <a href="#"><Image src={navIcon1} alt="Icon1" /></a>
            <a href="#"><Image src={navIcon2} alt="Icon2" /></a>
            <a href="#"><Image src={navIcon3} alt="Icon3" /></a>
          </div>
          <p className="text-sm text-gray-400 mt-4">Copyright 2022. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};