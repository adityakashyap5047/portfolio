"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaPython, FaGithub,
  FaServer,
  FaWrench,
} from "react-icons/fa";
import {
  SiAmazon,
  SiChromatic,
  SiDatabricks,
  SiDocker,
  SiGithubactions,
  SiGitlab,
  SiGrafana,
  SiHuggingface,
  SiJenkins,
  SiJsonwebtokens, SiKeras, SiKubernetes, SiLangchain, SiNumpy, SiOpenai, SiOpencv, SiPandas, SiPlotly, SiPytorch, SiScikitlearn, SiTensorflow,
} from "react-icons/si";
import { Ollama } from "@lobehub/icons";

type CategoryKey = "Web Dev" | "AI / ML" | "Mobile" | "Backend" | "Database" | "DevOps / Tools" | "Cloud";
import {
  FaGitAlt, FaLinux, 
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiTailwindcss, SiExpress, SiNextdotjs,
  SiRedux, SiTypescript,
  SiPrisma,
  SiGraphql, 
} from "react-icons/si";

const categories: Record<string, { name: string; icon: React.ReactElement }[]> = {
  "Web Dev": [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "REST APIs", icon: <FaServer className="text-gray-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Prisma ORM", icon: <SiPrisma className="text-indigo-300" /> },
    { name: "JWT (Auth)", icon: <SiJsonwebtokens className="text-orange-300" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  ],
  "AI / ML": [
    { name: "Python", icon: <FaPython className="text-yellow-300" /> },
    { name: "NumPy", icon: <SiNumpy className="text-purple-400" /> },
    { name: "Pandas", icon: <SiPandas className="text-black dark:text-white" /> },
    { name: "Matplotlib", icon: <SiPlotly className="text-pink-400" /> },
    { name: "Seaborn", icon: <span className="text-blue-400 text-2xl font-bold">S</span> },
    { name: "Scikit-Learn", icon: <SiScikitlearn className="text-blue-500" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
    { name: "Keras", icon: <SiKeras className="text-red-500" /> },
    { name: "PyTorch", icon: <SiPytorch className="text-orange-500" /> },
    { name: "OpenCV", icon: <SiOpencv className="text-blue-400" /> },
    { name: "Transformers", icon: <SiHuggingface className="text-yellow-300" /> },
    { name: "LangChain", icon: <SiLangchain className="text-purple-400" /> },
    { name: "OpenAI", icon: <SiOpenai className="text-green-400" /> },
    { name: "Hugging Face", icon: <SiHuggingface className="text-yellow-400" /> },
    { name: "Ollama", icon: <Ollama className="text-cyan-400" /> },
    { name: "Vector Embeddings", icon: <SiDatabricks className="text-sky-400" /> },
    { name: "ChromaDB", icon: <SiChromatic className="text-pink-400" /> },
    { name: "RAG", icon: <SiDatabricks className="text-violet-400" /> },
    { name: "Fine-tuning", icon: <FaWrench className="text-blue-400" /> },
  ],

  "DevOps": [
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "GitLab", icon: <SiGitlab className="text-orange-400" /> },
    { name: "Linux", icon: <FaLinux className="text-yellow-300" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "GitHub Actions", icon: <SiGithubactions className="text-white" /> },
    { name: "Jenkins", icon: <SiJenkins className="text-red-500" /> },
    { name: "AWS", icon: <SiAmazon className="text-yellow-400" /> },
    { name: "Grafana", icon: <SiGrafana className="text-yellow-500" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" /> },
  ],

  "App Dev": [
    
  ]
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
  className="relative [background-image:repeating-linear-gradient(-45deg,#00e0ff_0px,#00e0ff_80px,#000_80px,#000_160px)] overflow-hidden"
>
  <div className="bg-[#021024]/90 rounded-sm shadow-sm px-4 mx-auto text-center">
    <h2 className="text-[45px] text-white font-bold pt-24">My Skills</h2>
    <p className="text-[#00e0ff] text-[18px] leading-relaxed tracking-wide my-12 ml-auto mr-auto sm:max-w-[43%] mx-auto">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book.
    </p>

    <div className="w-full flex items-center justify-center pb-12">
      <div className="bg-[#021024]/90 flex flex-col sm:flex-row rounded-sm p-6 shadow-2xl sm:max-w-6xl w-full text-white gap-6">
        {/* Active Tab Label */}
        <div className="flex justify-center items-center sm:w-28">
          <p className="text-[#00e0ff] text-2xl font-bold sm:rotate-[-90deg]">
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
                  ? "bg-[#00e0ff] scale-110"
                  : "bg-white/30 hover:bg-[#00e1ff68] hover:scale-110"
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