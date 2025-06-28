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
    <div className="!max-w-5xl !mx-auto !px-4 !py-16">
      <div className="bg-white text-black rounded-[12px] !p-10 md:!p-20 !-mt-28">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="md:!w-1/2">
            <h3 className="font-bold text-2xl md:text-3xl leading-snug mb-4">
              Subscribe to our Newsletter
              <br /> & Never miss latest updates
            </h3>
            </div>
          <div className="md:!w-1/2">
            <div className="!p-[2px] rounded-[5px] bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]">
  <form
    onSubmit={handleSubmit}
    className="flex flex-wrap gap-4 items-center bg-white rounded-[5px] !px-4 !py-2"
  >
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email Address"
      className="flex-grow bg-transparent text-black font-medium !px-2 outline-none"
    />
    <button
      type="submit"
      className="cursor-pointer bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] text-white font-medium !px-6 !py-2 rounded-[5px] !ml-2"
    >
      Submit
    </button>  
  </form>
    {status === "sending" && <p className="text-blue-500 !pt-4 text-xl font-bold">Sending...</p>}
    {status === "error" && <p className="text-red-500 !pt-4 text-xl font-bold">{message}</p>}
    {status === "success" && <p className="text-green-500 !pt-4 text-xl font-bold">{message}</p>}
</div>
          </div>
        </div>
      </div>
    </div>
  );
};
