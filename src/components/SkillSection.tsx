'use client';
import { useState } from 'react';
// import { skillCategories } from '../data/skills';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML", icon: "/icons/html.png" },
        { name: "CSS", icon: "/icons/css.png" },
        { name: "SASS", icon: "/icons/sass.png" },
        { name: "JavaScript", icon: "/icons/javascript.png" },
        { name: "React JS", icon: "/icons/react.png" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node JS", icon: "/icons/nodejs.png" },
        { name: "MongoDB", icon: "/icons/mongodb.png" },
        { name: "Firebase", icon: "/icons/firebase.png" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "GitHub", icon: "/icons/github.png" },
        { name: "Docker", icon: "/icons/docker.png" },
      ],
    },
  ];
  

export default function SkillsSection() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const category = skillCategories[currentCategory];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center relative">
      <h2 className="text-4xl font-bold text-yellow-400 mb-4">What I do</h2>
      <p className="text-center max-w-xl text-gray-300 mb-10">
        I  am doing Bachelor in Software Engineering and will graduate in 2021. I am a UI/UX designer and currently working as a freelancer.
      </p>

      <div className="bg-zinc-900 p-6 rounded-xl shadow-lg w-full max-w-4xl relative overflow-hidden">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center bg-zinc-800 p-4 rounded-lg shadow hover:scale-105 transition"
                  >
                    <img src={skill.icon} alt={skill.name} className="h-12 mb-2" />
                    <p className="text-sm">{skill.name}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Vertical Dots */}
          <div className="flex flex-col items-center ml-4 mt-2 space-y-2">
            {skillCategories.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentCategory(index)}
                className={`h-6 w-1.5 cursor-pointer rounded-full transition ${
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
