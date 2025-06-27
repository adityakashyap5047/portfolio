// components/ProjectCard.tsx
"use client";

import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: StaticImageData;
}

const ProjectCard = ({ title, description, imgUrl }: ProjectCardProps) => {
  return (
    <div className="relative rounded-3xl overflow-hidden group">
      <Image src={imgUrl} alt={title} className="w-full h-auto" />
      <div className="absolute top-1/2 left-1/2 w-full text-center transform -translate-x-1/2 -translate-y-[65%] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all duration-500 ease-in-out">
        <h4 className="text-2xl font-bold mb-1">{title}</h4>
        <span className="italic text-sm">{description}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-700 opacity-0 group-hover:opacity-85 transition-all duration-500 ease-in-out"></div>
    </div>
  );
};

export default ProjectCard;
