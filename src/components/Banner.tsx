"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import headerImg from "@/assets/img/header-img.svg";
import bgImage from "@/assets/img/banner-bg.png";

const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
const period = 1000;

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    setDelta(isDeleting ? delta / 2 : delta);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-top bg-no-repeat lg:!px-16 !py-16 md:!py-28"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="max-w-7xl mx-auto !mt-4 md:!mt-24 !px-4 sm:!px-6 lg:!px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block !mb-12 font-semibold text-sm md:text-base tracking-wide border border-white/40 !px-4 !py-2 bg-gradient-to-r from-[#AA367C]/40 to-[#4A2FBD]/40 rounded-md">
                Welcome to my Portfolio
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight my-6">
                Hi! I am Judy{" "}
                <span className="border-r-2 border-gray-400 pr-1">
                  {text}
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg md:text-lg leading-relaxed !my-8 max-w-xl">
                I am passionate about building excellent software that improves
                the lives of those around me. Let’s build something together!
              </p>

              <a href="#connect">
                <button className="relative cursor-pointer !border border-white text-white font-bold text-base sm:text-lg !px-6 !py-3 rounded-lg overflow-hidden group transition-all duration-300">
                  <span className="relative z-10">Let&apos;s Connect</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
                  <span className="absolute inset-0 text-black group-hover:text-black z-10 text-center w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Let&apos;s Connect
                  </span>
                </button>
              </a>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="w-3/4 sm:w-1/2 !pl-12 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={headerImg}
                alt="Header"
                className="w-[85%] md:w-auto animate-updown"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
