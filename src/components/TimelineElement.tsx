"use client";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaLaptopCode } from "react-icons/fa";

export default function TimelineElement() {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "linear-gradient(to bottom right, #00c6ff, #9400d3)",
        color: "#fff",
        borderRadius: "10px",
        padding: "24px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #00c6ff",
      }}
      date="April 2025"
      iconStyle={{
        background: "#00c6ff",
        color: "#fff",
      }}
      icon={<FaLaptopCode />}
    >
      <h3 className="text-white text-xl font-bold mb-2">Assessli</h3>
      <h4 className="text-white text-base font-semibold mb-4">
        Position: Front-End Web Developer & UI/UX Designer
      </h4>

      <ul className="list-disc list-inside space-y-2 text-white/90 text-sm leading-relaxed">
        <li>
          Built a robust assessment platform delivering AI personalized reports.
        </li>
        <li>
          Refactored and optimized legacy code to improve performance and maintainability.
        </li>
        <li>
          Collaborated with teams to design reusable, intuitive interfaces.
        </li>
        <li>
          Improved platform scalability and responsiveness for dynamic users.
        </li>
      </ul>

      <a
        href="#"
        className="inline-block mt-6 px-5 py-2 border-2 border-white text-white font-semibold rounded-md relative group"
      >
        <span className="relative z-10">Offer Letter</span>
        <span
          className="absolute inset-0 bg-gradient-to-br from-[#00c6ff] to-[#9400d3] opacity-0 group-hover:opacity-100 rounded-md transition-all duration-300"
        ></span>
      </a>
    </VerticalTimelineElement>
  );
}
