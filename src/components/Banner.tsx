"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import MainImage from "./MainImage";

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
      className="relative bg-[#021024] min-h-screen bg-cover bg-top bg-no-repeat px-6 sm:px-16 py-8"
    >
      <div className="max-w-7xl mx-auto !mt-4 md:!mt-24">
        <div className="flex items-center justify-between">
          {/* Text Section */}
          <div className="w-full md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block !mb-12 font-semibold text-sm md:text-base tracking-wide border border-white/40 !px-4 !py-2 bg-gradient-to-r from-[#AA367C]/40 to-[#4A2FBD]/40 rounded-md">
                Welcome to my Portfolio
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight my-6">
                Hi! I am Aditya Kumar,{" "}<br />
                <span className="border-r-2 border-gray-400 pr-1">
                  {text}
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg md:text-lg leading-relaxed !my-8">
  I’m <strong>Aditya Kumar</strong>, a dedicated full-stack developer and AI enthusiast.

  <br /><br />
  I specialize in <strong>full-stack web development</strong>, with hands-on experience in technologies such as <strong>HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, Express.js, Django, MySQL,</strong> and <strong>MongoDB</strong>. I am proficient in designing robust RESTful and GraphQL APIs, and adept with modern version control and DevOps tools including <strong>Git, GitHub, GitLab, Vercel, Netlify, Docker</strong>, and <strong>Render</strong>.
</p>


              <a href="#connect">
                <button className="relative cursor-pointer !border border-white text-white font-bold text-base sm:text-lg !px-6 !py-3 rounded-lg overflow-hidden group transition-all duration-300">
                  <span className="relative z-10">My Resume</span>
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
                  <span className="absolute inset-0 text-black group-hover:text-black z-10 text-center w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    My Resume
                  </span>
                </button>
              </a>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="flex-col md:flex justify-center items-center ">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              {/* <Image
                src={headerImg}
                alt="Header"
                className="max-h-[300px] max-w-[300px] h-[75%] animate-updown bg-gradient-to-r rounded-full"
                priority
              /> */}
              <MainImage className="animate-updown"/>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
