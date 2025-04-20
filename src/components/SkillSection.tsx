'use client';
import { useState } from 'react';
// import { skillCategories } from '../data/skills';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: "/icons/html_logo.jpeg" },
        { name: "CSS", icon: "/icons/html_logo.jpeg" },
        { name: "SASS", icon: "/icons/html_logo.jpeg" },
        { name: "JavaScript", icon: "/icons/html_logo.jpeg" },
        { name: "React JS", icon: "/icons/html_logo.jpeg" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node JS", icon: "/icons/html_logo.jpeg" },
        { name: "MongoDB", icon: "/icons/html_logo.jpeg" },
        { name: "Firebase", icon: "/icons/html_logo.jpeg" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "GitHub", icon: "/icons/html_logo.jpeg" },
        { name: "Docker", icon: "/icons/html_logo.jpeg" },
      ],
    },
  ];
  

export default function SkillsSection() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const category = skillCategories[currentCategory];

  return (
    <div className="px-6 py-12 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-4">What I do</h2>
      <p className="text-center max-w-xl text-gray-300 mb-10">
        I  am doing Bachelor in Software Engineering and will graduate in 2021. I am a UI/UX designer and currently working as a freelancer.
      </p>

      <div className="bg-[#171717] min-h-[400px] p-6 w-[90%] max-w-4xl overflow-hidden">
        <div className="flex justify-between">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-3 sm:grid-cols-5 gap-6 !ml-8 sm:!ml-18"
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex bg-[#171717] flex-col items-center !my-4 !p-2 !shadow-2xl/30 hover:scale-105 transition"
                  >
                    <Image src={skill.icon} alt={skill.name} height={10} width={70} className="!h-24 !my-2" />
                    <p className="text-sm text-[#ffffffa0]">{skill.name}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Vertical Dots */}
          <div className="space-y-2">
            {skillCategories.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentCategory(index)}
                className={`h-10 w-0.75 rounded-2xl !mr-2 md:!mr-6 !my-2 cursor-pointer transition ${
                  currentCategory === index ? 'bg-yellow-400' : 'bg-zinc-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
