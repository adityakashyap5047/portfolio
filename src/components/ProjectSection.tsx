// components/ProjectsSection.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projectData = {
  "Web Dev": [
    {
      title: "My-Portfolio",
      desc: "Design & Development",
      img: "/static/media/template3.png",
      link: "https://my-portfolio-rj.vercel.app/"
    },
    {
      title: "ShopyWay",
      desc: "E-com Website for GenZ",
      img: "/static/media/template10.png",
      link: "https://shopy-way.vercel.app/"
    },
    {
      title: "Eclipse-Academy",
      desc: "E-Learning Website",
      img: "/static/media/template5.png",
      link: "https://morbius00.github.io/ECLIPSE-ACADEMY-The-E-learning-website/"
    },
    {
      title: "Spotify-Clone",
      desc: "Design & Development",
      img: "/static/media/template6.png",
      link: "https://spotify-clones.netlify.app"
    }
  ],
  "Web 3": [
    {
      title: "Vikray",
      desc: "WEB-3 Shopping App",
      img: "/static/media/template2.png",
      link: "https://vikray.vercel.app/"
    },
    {
      title: "Dyno-Verse",
      desc: "WEB-3 NFT Marketplace",
      img: "/static/media/template8.png",
      link: "https://dynoverse-nfts.netlify.app/"
    }
  ],
  "Open Idea": [
    {
      title: "Watcher",
      desc: "A safe exam platform",
      img: "/static/media/template1.png",
      link: "https://watchersfh.netlify.app"
    },
    {
      title: "Chat-Bot",
      desc: "Python3 and Django used bot",
      img: "/static/media/template7.png",
      link: "https://github.com/Morbius00/Realtime-chat-app-using-Django"
    },
    {
      title: "Session",
      desc: "Chrome-Tab Manager",
      img: "/static/media/template4.png",
      link: "https://github.com/Morbius00/session"
    },
    {
      title: "EZ-API-Wrapper",
      desc: "Wrapper for easy API calls",
      img: "/static/media/template9.png",
      link: "https://github.com/Morbius00/EZ-API-Wrapper"
    }
  ]
};

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("Web Dev");

  return (
    <section id="project" className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-gray-600 mb-8">
          I designed visual imagery websites and ensured they are in line with branding for clients.
        </p>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-10">
          {Object.keys(projectData).map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 border border-gray-300'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectData[activeTab].map((proj, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src={proj.img} alt={proj.title} width={500} height={300} className="w-full h-52 object-cover" />
              <div className="p-4 text-left">
                <h4 className="text-lg font-semibold">{proj.title}</h4>
                <p className="text-gray-500 mb-3">{proj.desc}</p>
                <Link href={proj.link} target="_blank">
                  <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
                    View Project
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
