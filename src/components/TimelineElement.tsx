"use client";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaLaptopCode } from "react-icons/fa";
import { ReactNode } from "react";

interface TimelineElementProps {
  company: string;
  position: string;
  role: string;
  type: string;
  duration: string;
  icon?: ReactNode;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function TimelineElement({
  company,
  position,
  role,
  type,
  duration,
  icon = <FaLaptopCode />,
  description,
  buttonText,
  buttonLink,
}: TimelineElementProps) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "rgba(2, 16, 36, 0.4)",
        color: "#fff",
        borderRadius: "12px",
        padding: "24px",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(2, 16, 36, 0.4)",
      }}
      date={duration}
      dateClassName="text-[#00e0ff] font-bold max-2sl:mt-6 max-2sl:mr-6"
      iconStyle={{
        background: "#00e0ff",
        color: "#fff",
        boxShadow: "0 0 10px rgba(0, 224, 255, 0.7)",
      }}
      icon={icon}
    >
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h3 className="text-[#0dcbe8] text-xl font-bold">{company}</h3>
        <span className="text-xs px-3 py-1 bg-[#163edf] text-black font-semibold rounded-full">
          {role}
        </span>
        <span className="text-xs px-3 py-1 bg-[#e3af12] text-white font-semibold rounded-full">
          {type}
        </span>
      </div>

      <h4 className="text-[#49e606] text-base font-semibold mb-4">
        {position}
      </h4>

      <ul className="list-disc list-inside space-y-2 text-white/90 text-sm leading-relaxed">
        {description.split('\n').map((point, index) => (
          point.trim() && (<li className="" key={index}>{point}</li>)
        ))}
      </ul>

      {buttonText && buttonLink && (
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-5 py-2 border-2 border-white text-white font-semibold rounded-md relative group overflow-hidden"
        >
          <span className="relative z-10">{buttonText}</span>
          <span className="absolute inset-0 bg-[#066C65] backdrop-blur-md group-hover:bg-[#00e0ff] transition-all duration-300 z-0"></span>
        </a>
      )}
    </VerticalTimelineElement>
  );
}
