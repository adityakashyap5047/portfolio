"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

const tabs = [
  { key: "first", label: "Web Dev" },
  { key: "second", label: "AI/ML" },
  { key: "third", label: "Python" },
];

const projects = [
  {
    title: "HeapFlow",
    type: "WebDev",
    description: "HeapFlow is the ultimate platform for sharing and upvoting anonymous thoughts, confessions, and ideas.",
    imgUrl: "/projImg/HeapFlow.png",
    projectLink: "https://heapflow.vercel.app",
  },
  {
    title: "PiTalk",
    type: "WebDev",
    description: "PiTalk is a dynamic community-driven platform designed for open discussions, knowledge sharing and real-time collaboration.",
    imgUrl: "/projImg/PiTalk.png",
    projectLink: "https://pitalk.vercel.app",
  },
  {
    title: "QuickQuips",
    type: "WebDev",
    description: "QuickQuips helps to dive into the world of Anonymous Conversations.",
    imgUrl: "/projImg/QuickQuips.png",
    projectLink: "https://quickquips.vercel.app",
  },
  {
    title: "ReelPro",
    type: "WebDev",
    description: "ReelPro is a platform for sharing and discovering short, engaging video content.",
    imgUrl: "/projImg/ReelPro.png",
    projectLink: "https://reelpro.vercel.app",
  },
  {
    title: "MeowBark",
    type: "AI/ML",
    description: "MeowBark is a smart web app that uses deep learning to instantly classify whether an uploaded image is of a cat or a dog.",
    imgUrl: "/projImg/MeowBark.png",
    projectLink: "https://meowbark.onrender.com/"
  },
  {
    title: "MathScope",
    type: "AI/ML",
    description: "MathScope is your smart companion for predicting math exam scores based on your learning patterns and past performance.",
    imgUrl: "/projImg/MathScope.png",
    projectLink: "https://mathscope.onrender.com"
  },
  {
    title: "TextMate",
    type: "Python",
    description: "TextMate can be used to clean up, format, or analyse the text.",
    imgUrl: "/projImg/TextMate.png",
    projectLink: "https://textmate-618z.onrender.com"
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  return (
    <section
      id="projects"
      className="relative py-20 bg-[#021024] text-white overflow-hidden"
    >
      <div className="px-4 mx-auto text-center">
        <h2 className="text-[45px] text-white font-bold pt-24 relative inline-block after:block after:w-28 after:h-1 after:bg-[#00e0ff] after:mx-auto after:mt-4">
          My Project
        </h2>

        <p className="text-[#00e0ff] text-[18px] leading-relaxed tracking-wide my-12 mx-auto sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%]">
          Throughout my journey, I{`'`}ve worked on diverse projects that allowed me to explore both <span className="font-semibold text-white">full-stack development</span> and <span className="font-semibold text-white">artificial intelligence</span>. From building scalable web apps with React, Node.js, and MongoDB to implementing intelligent features using Python-based machine learning models, I{`'`}ve learned how to blend creativity with logic. Each experience has sharpened my problem-solving skills and deepened my understanding of building real-world, impactful solutions that are not only user-centric but also driven by data and innovation.
        </p>

        <div className="max-w-[1200px] mx-auto">
          {/* Tab Buttons */}
          <div className="relative w-[72%] mx-auto mb-12 border border-white/50 rounded-full bg-white/10 flex overflow-hidden">
            {tabs.map(({ key, label }, idx) => {
              const isActive = activeTab === key;
              const radiusClass =
                idx === 0
                  ? "rounded-l-full"
                  : idx === tabs.length - 1
                  ? "rounded-r-full"
                  : "";

              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-1/3 py-3 text-sm font-medium cursor-pointer transition-all duration-300 z-10 border-r border-white/50 last:border-r-0 ${radiusClass} ${
                    isActive
                      ? "bg-gradient-to-r from-[#114c54] to-[#170277] text-white"
                      : "bg-transparent text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          {activeTab === "first" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.filter((project) => project.type === "WebDev").map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          )}

          {activeTab === "second" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.filter((project) => project.type === "AI/ML").map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          )}

          {activeTab === "third" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.filter((project) => project.type === "Python").map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
