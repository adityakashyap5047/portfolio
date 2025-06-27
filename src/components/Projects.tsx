// components/Projects.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import projImg1 from "@/assets/img/project-img1.png";
import projImg2 from "@/assets/img/project-img2.png";
import projImg3 from "@/assets/img/project-img3.png";
import colorSharp2 from "@/assets/img/color-sharp2.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  const projects = [
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg1 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg2 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg3 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg1 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg2 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg3 },
  ];

  return (
    <section id="projects" className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="flex justify-center space-x-4 mb-10 bg-white/10 rounded-full overflow-hidden w-[72%] mx-auto">
          {[
            { key: "first", label: "Tab 1" },
            { key: "second", label: "Tab 2" },
            { key: "third", label: "Tab 3" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-1/3 py-4 font-medium text-sm relative z-10 transition-all duration-300 ${
                activeTab === key ? "bg-gradient-to-r from-pink-600 to-indigo-700 border border-white" : "text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === "first" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        )}

        {activeTab === "second" && (
          <p className="text-gray-400 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        )}
        {activeTab === "third" && (
          <p className="text-gray-400 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        )}
      </div>

      <Image
        src={colorSharp2}
        alt="background"
        className="absolute right-0 top-[20%] w-[35%] -z-10"
      />
    </section>
  );
};

export default Projects;
