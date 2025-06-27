"use client";

import { useState, useEffect } from "react";

interface Props {
  status: string;
  message: string;
  onValidated: (formData: { EMAIL: string }) => void;
}

export const Newsletter = ({ status, message, onValidated }: Props) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") {
      setEmail("");
    }
  }, [status]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      onValidated({ EMAIL: email });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="bg-white text-black rounded-[55px] p-10 md:p-20 mb-20 -mt-28">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="md:w-1/2">
            <h3 className="font-bold text-2xl md:text-3xl leading-snug mb-4">
              Subscribe to our Newsletter
              <br /> & Never miss latest updates
            </h3>
            {status === "sending" && <p>Sending...</p>}
            {status === "error" && <p className="text-red-500">{message}</p>}
            {status === "success" && <p className="text-green-500">{message}</p>}
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="relative bg-white rounded-[20px] flex items-center px-4 py-2">
              <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] -z-10"></div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-grow bg-transparent text-black font-medium px-2 outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] text-white font-medium px-8 py-3 rounded-[18px] ml-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
