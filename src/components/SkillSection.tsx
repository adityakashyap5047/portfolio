"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaPython, FaDocker, FaGithub,
} from "react-icons/fa";
import {
  SiFirebase, SiKubernetes, SiOpenai, SiScikitlearn, SiTensorflow,
} from "react-icons/si";

import bgImage from "@/assets/img/footer-bg.png";

const categories = {
  "Web Dev": [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  ],
  "AI / ML": [
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
    { name: "Scikit-learn", icon: <SiScikitlearn className="text-yellow-300" /> },
    { name: "OpenAI", icon: <SiOpenai className="text-white" /> },
  ],
  DevOps: [
    { name: "Docker", icon: <FaDocker className="text-blue-300" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
  ],
};

const tabKeys = Object.keys(categories);

export default function SkillSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [prevTabIndex, setPrevTabIndex] = useState(0);

  const activeTab = tabKeys[activeTabIndex];
  const direction = activeTabIndex > prevTabIndex ? "down" : "up";

  const handleTabChange = (newIndex) => {
    if (newIndex !== activeTabIndex) {
      setPrevTabIndex(activeTabIndex);
      setActiveTabIndex(newIndex);
    }
  };

  const slideVariants = {
    initial: (dir) => ({
      opacity: 0,
      y: dir === "down" ? 30 : -30,
    }),
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: (dir) => ({
      opacity: 0,
      y: dir === "down" ? -30 : 30,
      transition: { duration: 0.4, ease: "easeInOut" },
    }),
  };

  return (
    <section id="skills" className="bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]f relative bg-black text-white py-16 px-6 max-w-[1200px]mx-auto text-center">
        <h2 className="text-[45px] font-bold">My Skills</h2>
        <p className="text-[#B8B8B8] text-[18px] leading-relaxed tracking-wide !my-12 !ml-auto !mr-auto max-w-[56%] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      <div className="max-w-6xl mx-auto flex flex-row gap-12 items-start">
        {/* Left Vertical Label */}
        <div className="hidden md:flex flex-col justify-center items-center pr-6">
          {/* <p className="text-yellow-400 text-3xl font-bold rotate-[-90deg] tracking-wide">
            {activeTab}
          </p> */}
        </div>

        {/* Fixed-height Animated Container */}
        <div className="relative max-w-2xl flex-1 h-[340px] overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeTab}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute top-0 left-0 w-full h-full"
            >
              <div className="flex flex-wrap gap-6">
                {categories[activeTab].map((skill, idx) => (
                  <div
                    key={idx}
                    className="w-32 bg-white/10 backdrop-blur-md border border-white/10 rounded-sm p-2 shadow-xl flex flex-col items-center justify-center hover:scale-105 transition duration-300"
                  >
                    <div className="text-8xl mb-2">{skill.icon}</div>
                    <p className="text-white text-sm font-semibold">{skill.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Vertical Nav */}
        <div className="flex flex-col gap-6 justify-center items-center pl-4">
          {tabKeys.map((key, idx) => (
            <button
              key={key}
              onClick={() => handleTabChange(idx)}
              className={`w-1 h-10 rounded-full transition cursor-pointer ${
                activeTabIndex === idx
                  ? "bg-yellow-400"
                  : "bg-white/30 hover:bg-blue-200"
              }`}
              aria-label={key}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
