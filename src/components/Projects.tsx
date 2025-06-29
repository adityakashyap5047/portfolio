"use client";

import { useState } from "react";
import projImg1 from "@/assets/img/project-img1.png";
import projImg2 from "@/assets/img/project-img2.png";
import projImg3 from "@/assets/img/project-img3.png";
import ProjectCard from "./ProjectCard";

const tabs = [
  { key: "first", label: "Web Dev" },
  { key: "second", label: "AI/ML" },
  { key: "third", label: "DevOps" },
];

const projects = [
  {
    title: "Business Startup",
    type: "Web Development",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    type: "Web Development",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    type: "Web Development",
    description: "Design & Development",
    imgUrl: projImg3,
  },
  {
    title: "Business Startup",
    type: "AI/ML",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    type: "AI/ML",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    type: "DevOps",
    description: "Design & Development",
    imgUrl: projImg3,
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  return (
    <section
      id="projects"
      className="relative py-20 bg-[#021024] text-white overflow-hidden"
    >
      <div className="max-w-[1200px] px-4 mx-auto text-center">
        <h2 className="text-[45px] font-bold">Projects</h2>
        <p className="text-[#B8B8B8] text-[18px] leading-relaxed tracking-wide !my-12 !ml-auto !mr-auto sm:max-w-[56%] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        {/* Tab Buttons */}
        <div className="relative w-[72%] !mx-auto !mb-12 border border-white/50 rounded-full bg-white/10 flex overflow-hidden">
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
                className={`w-1/3 !py-3 text-sm font-medium cursor-pointer transition-all duration-300 z-10 !border-r !border-white/50 last:border-r-0 ${radiusClass} ${
                  isActive
                    ? "bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] text-white"
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
            {projects.filter((project) => project.type === "Web Development").map((project, index) => (
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
            {projects.filter((project) => project.type === "DevOps").map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
