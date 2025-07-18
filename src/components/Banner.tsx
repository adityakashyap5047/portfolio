"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import MainImage from "./MainImage";
import { Shapes } from "./Shapes";
import Link from "next/link";
import aditya_kumar from "@/assets/img/Aditya-Kumar.png"

const toRotate = ["Full-Stack Developer", "AI/ML Engineer"];
const period = 1000;

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const tick = useCallback(() => {
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
  }, [loopNum, isDeleting, text, delta]);

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text, delta, tick]);

  return (
    <section
      id="home"
      className="relative bg-[#021024] max-md:pb-[144px] md:pb-12 bg-cover bg-top bg-no-repeat px-6 sm:px-16 pt-8"
    >
      <div className="max-w-7xl mx-auto md:mt-24">
        <div className="flex gap-8 md:flex-row flex-col-reverse">
          {/* Text Section */}
            <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-center sm:text-left"
>
  <h1 className="md:mt-16 max-1xs:mt-0 ss:my-6 xs:my-0 text-3xl sm:text-4xl xm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
    Hi! I am Aditya Kumar,<br />
    <span className="border-r-2 border-gray-400 pr-2 text-2xl sm:text-3xl xm:text-4xl lg:text-5xl animate-pulse text-cyan-300">
      {text}
    </span>
  </h1>

  <p className="text-gray-300 text-sm sm:text-base 2xm:text-lg leading-relaxed max-xs:my-4 xs:my-8 sm:mt-10 sm:max-w-4xl sl:mb-12 mx-auto">
    I specialize in full-stack web development, with practical experience in building scalable applications using HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, Express.js, Django, MySQL, and MongoDB.
    <br /><br />
    In addition to web development, I have a strong foundation in Artificial Intelligence and Machine Learning, with hands-on experience in developing ML models, working with deep learning frameworks, and exploring cutting-edge technologies like Generative AI and Agentic AI. 
  </p>

  <Link
    href="https://drive.google.com/file/d/1FE-C4bDrEZuegBoArxVmG1X8eDl25V5r/view?usp=drivesdk"
    target="_blank"
    className="relative inline-block px-8 py-3 text-[#021024] font-bold rounded-md bg-[#0ff] 
                shadow-[0_0_10px_#0ff,0_0_20px_#0ff] overflow-hidden 
                transition-transform duration-300 transform hover:scale-105 group"
  >
    <span
      className="absolute inset-0 w-full h-full bg-gradient-to-r 
                from-transparent via-white/60 to-transparent animate-shine 
                group-hover:opacity-100 opacity-0 blur-sm"
    />
    <span className="relative z-10">My Resume</span>
  </Link>
</motion.div>


          {/* Image Section */}
          <div className="flex-row flex md:flex-col mt-12 sm:gap-12 max-1xs:mt-16 max-xs:mt-18 justify-center items-center ">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <MainImage src={aditya_kumar} animate="animate-updown" className="w-30 h-30 sm:w-45 sm:h-45 md:w-70 md:h-70" containerClassName="w-31 h-31 sm:w-46 sm:h-46 md:w-72 md:h-72"/>
            </motion.div>
            <div className="hidden xs:block mt-10 max-w-60 max-h-60">
              <Shapes />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
