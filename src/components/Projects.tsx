"use client";

import Image from "next/image";
import { useState } from "react";
import projImg1 from "@/assets/img/project-img1.png";
import projImg2 from "@/assets/img/project-img2.png";
import projImg3 from "@/assets/img/project-img3.png";
import colorSharp2 from "@/assets/img/color-sharp2.png";
import ProjectCard from "./ProjectCard";

const tabs = [
  { key: "first", label: "Tab 1" },
  { key: "second", label: "Tab 2" },
  { key: "third", label: "Tab 3" },
];

const projects = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  return (
    <section
      id="projects"
      className="relative py-20  bg-black text-white overflow-hidden"
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
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        )}

        {activeTab === "second" && (
          <p className="text-gray-400 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quam, quod neque provident velit, rem explicabo excepturi.
          </p>
        )}

        {activeTab === "third" && (
          <p className="text-gray-400 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quam, quod neque provident velit, rem explicabo excepturi.
          </p>
        )}
      </div>

      {/* Background Shape */}
      <Image
        src={colorSharp2}
        alt="background shape"
        className="absolute right-0 top-[20%] w-[35%] -z-10 pointer-events-none select-none"
      />
    </section>
  );
};

export default Projects;
