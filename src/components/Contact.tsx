"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import contactImg from "@/assets/img/contact-img.svg";
import { FiX } from "react-icons/fi";

interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface Status {
  success?: boolean;
  message?: string;
}

export const Contact = () => {
  const formInitialDetails: FormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState<Status>({});

  const onFormUpdate = (category: keyof FormDetails, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      const result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (response.status === 200) {
        setStatus({ success: true, message: result.message });
      } else {
        setStatus({ success: false, message: result.message });
      }
    } catch {
      setButtonText("Send");
      setStatus({ success: false, message: "Failed to send message." });
    }
  };

  return (
    <section
      className="py-28 px-4" 
      style={{backgroundImage: 'radial-gradient(circle, #066C65 30%, #021024 100%)'}}
      id="contact"
    >
      <div className="!max-w-7xl !mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Animated Image Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 w-full flex justify-center"
        >
          <Image src={contactImg} alt="Contact Us" className="w-[92%]" />
        </motion.div>

        {/* Animated Form Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 w-full"
        >
          <h2 className="text-4xl font-bold !mb-6 text-white">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row !gap-4">
              <input
                type="text"
                value={formDetails.firstName}
                placeholder="First Name"
                name="firstName"
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
                className="w-full bg-white/10 border border-white/50 text-white !px-6 !py-3 rounded-lg focus:bg-white focus:text-black placeholder-white focus:placeholder-black"
              />
              <input
                type="text"
                value={formDetails.lastName}
                placeholder="Last Name"
                name="lastName"
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
                className="w-full bg-white/10 border border-white/50 text-white !px-6 !py-3 rounded-lg focus:bg-white focus:text-black placeholder-white focus:placeholder-black"
              />
            </div>
            <div className="flex flex-col md:flex-row !gap-4">
              <input
                type="email"
                value={formDetails.email}
                placeholder="Email Address"
                name="email"
                onChange={(e) => onFormUpdate("email", e.target.value)}
                className="w-full bg-white/10 border border-white/50 text-white !px-6 !py-3 rounded-lg focus:bg-white focus:text-black placeholder-white focus:placeholder-black"
              />
              <input
                type="tel"
                value={formDetails.phone}
                placeholder="Phone No."
                name="phone"
                onChange={(e) => onFormUpdate("phone", e.target.value)}
                className="w-full bg-white/10 border border-white/50 text-white !px-6 !py-3 rounded-lg focus:bg-white focus:text-black placeholder-white focus:placeholder-black"
              />
            </div>
            <textarea
              rows={6}
              value={formDetails.message}
              placeholder="Message"
              name="message"
              onChange={(e) => onFormUpdate("message", e.target.value)}
              className="w-full bg-white/10 border border-white/50 text-white px-6 py-3 rounded-lg focus:bg-white focus:text-black placeholder-white focus:placeholder-black"
            ></textarea>
            <button
  type="submit"
  className="relative cursor-pointer overflow-hidden px-10 py-3 font-bold text-white rounded-md group bg-white/10 backdrop-blur-md border border-white/20 shadow-md transition-all"
>
  <span className="relative z-10">{buttonText}</span>
  <span className="absolute left-0 top-0 w-0 h-full bg-[#00e0ff] transition-all duration-300 group-hover:w-full z-0"></span>
</button>


            {status.message && (
  <div
    className={`mt-4 p-4 flex flex-row-reverse justify-between rounded-md text-center backdrop-blur-md bg-white/10 border border-white/20 shadow-md ${
      status.success ? "text-green-400" : "text-red-400"
    }`}
  >
    <button
      onClick={() => setStatus({ message: "", success: false })}
      className="cursor-pointer top-2 right-3 text-white hover:text-red-400 text-lg font-bold"
    >
      <FiX />
    </button>
    {status.message}
  </div>
)}

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
