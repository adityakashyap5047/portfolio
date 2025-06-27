"use client";

import { useState } from "react";
import Image from "next/image";
import contactImg from "@/assets/img/contact-img.svg";
import TrackVisibility from "react-on-screen";

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
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      const result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({ success: false, message: "Something went wrong, please try again later." });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: "Failed to send message." });
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] py-16 px-4" id="connect">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <Image src={contactImg} alt="Contact Us" className="w-[92%]" />
              </div>
            )}
          </TrackVisibility>
        </div>

        <div className="md:w-1/2 w-full">
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2 className="text-4xl font-bold mb-6 text-white">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) => onFormUpdate("firstName", e.target.value)}
                      className="w-full bg-white/10 border border-white/50 text-white px-6 py-3 rounded-lg focus:bg-white focus:text-black placeholder-white focus:placeholder-black"
                    />
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      className="w-full bg-white/10 border border-white/50 text-white px-6 py-3 rounded-lg focus:bg-white focus:text-black placeholder-white focus:placeholder-black"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      className="w-full bg-white/10 border border-white/50 text-white px-6 py-3 rounded-lg focus:bg-white focus:text-black placeholder-white focus:placeholder-black"
                    />
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                      className="w-full bg-white/10 border border-white/50 text-white px-6 py-3 rounded-lg focus:bg-white focus:text-black placeholder-white focus:placeholder-black"
                    />
                  </div>
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    className="w-full bg-white/10 border border-white/50 text-white px-6 py-3 rounded-lg focus:bg-white focus:text-black placeholder-white focus:placeholder-black"
                  ></textarea>
                  <button
                    type="submit"
                    className="relative overflow-hidden px-10 py-3 bg-white text-black font-bold hover:text-white transition-all rounded-md group"
                  >
                    <span className="relative z-10">{buttonText}</span>
                    <span className="absolute left-0 top-0 w-0 h-full bg-black transition-all duration-300 group-hover:w-full z-0"></span>
                  </button>

                  {status.message && (
                    <p className={`mt-4 ${status.success ? "text-green-400" : "text-red-400"}`}>
                      {status.message}
                    </p>
                  )}
                </form>
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </section>
  );
};

export default Contact;
