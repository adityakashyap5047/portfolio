"use client";

import { FaUser } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const experiences = [
  {
    title: 'Assessli',
    date: 'Sep 2024 - Present',
    description: [
      'Built a robust assessment platform delivering AI personalized reports.',
      'Refactored legacy code and improved performance.',
      'Designed user-friendly UI for better UX.',
    ],
    buttonLabel: 'View Certificate',
    link: '#',
  },
  {
    title: 'Google DSC (NiT)',
    date: 'July 2023 - Present',
    description: [
      'Led the GDSC chapter at NiT for session 2023-24.',
      'Organized workshops and tech talks.',
      'Built a strong developer community.',
    ],
    buttonLabel: 'View Certificate',
    link: '#',
  },
];

export default function ExperienceTimeline() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className="relative w-full px-4 py-20 bg-black text-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-16">Experience Timeline</h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Timeline line */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 to-pink-500 h-full z-0" />
        <div className="block md:hidden absolute top-0 left-6 w-1 bg-gradient-to-b from-indigo-500 to-pink-500 h-full z-0" />

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          const slideDirection = isLeft ? 'animate-slide-in-left' : 'animate-slide-in-right';

          return (
            <div
              key={idx}
              className={`mb-20 flex flex-col md:flex-row items-start md:items-center relative z-10 ${
                isLeft ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Card */}
              <div
                className={`relative w-full md:w-5/12 bg-gradient-to-br from-cyan-400 to-purple-600 text-black p-6 rounded-2xl shadow-xl space-y-4 transform transition duration-700 ease-in-out ${
                  show ? slideDirection : 'opacity-0'
                } ${isLeft ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'}`}
              >
                {/* Arrow */}
                <div
                  className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rotate-45 bg-cyan-400 z-10 ${
                    isLeft ? '-right-2' : '-left-2'
                  }`}
                />

                {/* Title */}
                <div className="text-xl font-bold">{exp.title}</div>

                {/* Description */}
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {exp.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                {/* Button */}
                <a
                  href={exp.link}
                  className="inline-block mt-2 bg-black text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-800 transition"
                >
                  {exp.buttonLabel}
                </a>

                {/* Mobile time */}
                <div className="block md:hidden text-xs text-gray-700 pt-2">{exp.date}</div>
              </div>

              {/* Circle with icon and time */}
              <div className="hidden md:flex items-center mx-6 relative">
                {isLeft && (
                  <span className={`text-xs absolute -right-24 text-gray-300 whitespace-nowrap transform transition duration-700 ease-in-out ${show ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}>{exp.date}</span>
                )}
                {!isLeft && (
                  <span className={`text-xs absolute -left-24 text-gray-300 whitespace-nowrap transform transition duration-700 ease-in-out ${show ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}>{exp.date}</span>
                )}
                <div
                  className={`bg-white p-2 rounded-full border-4 border-indigo-500 text-indigo-500 z-10 transform transition-transform duration-700 ease-in-out ${
                    show ? 'scale-100' : 'scale-0'
                  }`}
                >
                  <FaUser size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.7s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
