"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import MainImage from "./MainImage";
import { Shapes } from "./Shapes";
import Link from "next/link";
import aditya_kumar from "@/assets/img/Aditya-Kumar.png"
import adityakumar from "@/assets/img/AdityaKumar.png"

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
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="md:mt-16 max-1xs:mt-0 ss:my-6 xs:my-0 text-3xl sm:text-4xl xm:text-5xl lg:text-6xl font-bold text-white leading-tight ">
                Hi! I am Aditya Kumar,{" "}<br />
                <span className="border-r-2 border-gray-400 pr-2 text-2xl sm:text-3xl xm:text-4xl lg:text-5xl ">
                  {text}
                </span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg md:text-lg leading-relaxed max-xs:my-4 xs:my-8 sl:mt-24 sl:max-w-[75%] sl:mb-11">
                I specialize in <strong>full-stack web development</strong>, with hands-on experience in technologies such as <strong>HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, Express.js, Django, MySQL,</strong> and <strong>MongoDB</strong>. I am proficient in designing robust RESTful and GraphQL APIs, and adept with modern version control and DevOps tools including <strong>Git, GitHub, GitLab, Vercel, Netlify, Docker</strong>, and <strong>Render</strong>.
              </p>
              <Link
                href="https://drive.google.com/file/d/1FE-C4bDrEZuegBoArxVmG1X8eDl25V5r/view?usp=drivesdk"
                target="_blank"
                className="relative inline-block px-8 py-3 text-[#021024] font-bold rounded-md bg-[#0ff] 
                          shadow-[0_0_10px_#0ff,0_0_20px_#0ff] overflow-hidden 
                          transition-all duration-300 transform hover:scale-105 group"
              >
                <span
                  className="absolute inset-0 w-full h-full bg-gradient-to-r 
                            from-transparent via-white/60 to-transparent animate-shine 
                            group-hover:opacity-100 opacity-0 blur-sm"
                />
                <span className="relative z-10">My Resume</span>
              </Link>

            </motion.div>
          </div>

          {/* Image Section */}
          <div className="flex-row flex md:flex-col mt-12 sm:gap-12 max-1xs:mt-16 max-xs:mt-18 justify-center items-center ">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <MainImage src={aditya_kumar} animate="animate-updown" className="w-30 h-30 sm:w-45 sm:h-45 md:w-70 md:h-70" containerClassName="w-31 h-31 sm:w-46 sm:h-46 md:w-72 md:h-72"/>
            </motion.div>
            <div className="hidden xs:block mt-8 max-w-60 max-h-60">
              <Shapes />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
