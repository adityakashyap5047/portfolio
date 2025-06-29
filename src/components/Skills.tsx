"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaPython, FaDocker, FaGithub,
} from "react-icons/fa";
import {
  SiFirebase, SiKubernetes, SiOpenai, SiScikitlearn, SiTensorflow,
} from "react-icons/si";

type CategoryKey = "Web Dev" | "AI/ML" | "DevOps";

const categories: Record<CategoryKey, { name: string; icon: React.ReactElement }[]> = {
  "Web Dev": [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-white" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  ],
  "AI/ML": [
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
    { name: "Scikit-learn", icon: <SiScikitlearn className="text-yellow-300" /> },
    { name: "OpenAI", icon: <SiOpenai className="text-white" /> },
  ],
  "DevOps": [
    { name: "Docker", icon: <FaDocker className="text-blue-300" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
  ],
};

const tabKeys = Object.keys(categories) as CategoryKey[];

export default function Skills() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [prevTabIndex, setPrevTabIndex] = useState(0);

  const activeTab = tabKeys[activeTabIndex];

  const direction = activeTabIndex > prevTabIndex ? "down" : "up";

  const handleTabChange = (newIndex: number) => {
    setPrevTabIndex(activeTabIndex);
    setActiveTabIndex(newIndex);
  };

  const variants = {
    initial: (dir: string) => ({
      opacity: 0,
      y: dir === "down" ? -50 : 50,
    }),
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeInOut },
    },
    exit: (dir: string) => ({
      opacity: 0,
      y: dir === "down" ? 50 : -50,
      transition: { duration: 0.5, ease: easeInOut },
    }),
  };

  return (
    <section
  id="skills"
  className="relative [background-image:repeating-linear-gradient(-45deg,#0faacc_0px,#f34f39_80px,#000_80px,#000_160px)] overflow-hidden"
>
  <div className="bg-blue-900/90 rounded-sm shadow-sm px-4 mx-auto text-center">
    <h2 className="text-[45px] text-white font-bold pt-24">My Skills</h2>
    <p className="text-[#bfdd13] text-[18px] leading-relaxed tracking-wide my-12 ml-auto mr-auto sm:max-w-[43%] mx-auto">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book.
    </p>

    <div className="w-full flex items-center justify-center pb-12">
      <div className="bg-blue-500/90 flex flex-col sm:flex-row rounded-sm p-6 shadow-2xl sm:max-w-6xl w-full text-white gap-6">
        {/* Active Tab Label */}
        <div className="flex justify-center items-center sm:w-28">
          <p className="text-yellow-400 text-2xl font-bold sm:rotate-[-90deg]">
            {activeTab}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex-1 min-h-[300px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeTab}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-wrap gap-4 justify-center sm:justify-normal"
            >
              {categories[activeTab].map((skill, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/10 rounded-sm p-4 shadow-xl flex flex-col w-20 h-28 sm:w-24 sm:h-36 items-center justify-between hover:scale-105 transition duration-300 gap-4"
                >
                  <div className="text-4xl sm:text-5xl">{skill.icon}</div>
                  <p className="text-white text-sm sm:text-sm">{skill.name}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Vertical Navigation */}
        <div className="flex flex-row sm:flex-col justify-center items-center gap-4">
          {tabKeys.map((key, idx) => (
            <button
              key={key}
              onClick={() => handleTabChange(idx)}
              className={`w-10 h-1 sm:w-1 sm:h-10 cursor-pointer rounded-full transition-all duration-300 ${
                activeTabIndex === idx
                  ? "bg-yellow-400 scale-110"
                  : "bg-white/30 hover:bg-pink-400"
              }`}
              aria-label={key}
            ></button>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
};  