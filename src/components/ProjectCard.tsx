"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imgUrl?: string;
  projectLink?: string;
}

const ProjectCard = ({
  title = "HeapFlow",
  description = "The ultimate platform for sharing and upvoting anonymous thoughts, confessions, and ideas.",
  imgUrl = "/projImg/HeapFlow.png",
  projectLink = "https://heapflow.vercel.app",
}: ProjectCardProps) => {
  return (
    <div className="relative cursor-pointer rounded-md overflow-hidden group shadow-xl aspect-[16/9]">
      {/* Image */}
      <Image
        src={imgUrl}
        alt={title}
        width={1878}
        height={1045}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />

      {/* Sliding Blur Overlay */}
      <div
        className="absolute top-[-100%] left-0 w-full h-full bg-white/10 backdrop-blur-md rounded-md 
        group-hover:top-0 transition-all duration-700 ease-in-out"
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-evenly text-center 
        opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out delay-100 px-6"
      >
        <div>
          <h4 className="text-[#021024] text-2xl font-bold mb-2 drop-shadow-md">{title}</h4>
          <p className="text-[#021024]/90 italic text-sm mb-4 max-w-sm">{description}</p>
        </div>
        <Link href={projectLink} target="_blank">
          <button
            className="mt-2 px-5 py-2 cursor-pointer text-[#021024] font-semibold rounded-md border border-white/30 
            bg-white/10 backdrop-blur-sm hover:bg-[#00e0ff]/40 transition-all duration-300"
          >
            View Project
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;