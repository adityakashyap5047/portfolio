"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import headerImg from "@/assets/img/header-img.svg";
import bgImage from "@/assets/img/banner-bg.png";
import { motion } from "framer-motion";

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

    if (isDeleting) setDelta((prev) => prev / 2);

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
      className="relative pt-260 pb-100 bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Text */}
          <div className="w-full md:w-1/2 xl:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block mb-4 font-bold text-[20px] tracking-wide border border-white border-opacity-50 px-4 py-2 bg-gradient-to-r from-[#AA367C]/50 to-[#4A2FBD]/50">
                Welcome to my Portfolio
              </span>
              <h1 className="text-[40px] md:text-[55px] lg:text-[65px] font-bold text-white leading-none mb-6">
                Hi! I am Judy{" "}
                <span className="border-r-2 border-gray-400 pr-1">{text}</span>
              </h1>
              <p className="text-[#B8B8B8] text-[18px] leading-relaxed mb-8 w-[96%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s.
              </p>
              <button
                onClick={() => console.log("connect")}
                className="text-white font-bold text-[20px] flex items-center space-x-2 group transition-all duration-300 mt-[60px]"
              >
                <span>Let{`'`}s Connect</span>
              </button>
            </motion.div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 xl:w-5/12 mb-12 md:mb-0 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                src={headerImg}
                alt="Header Img"
                className="w-[80%] md:w-auto animate-updown"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;