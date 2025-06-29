"use client";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaLaptopCode } from "react-icons/fa";

export default function TimelineElement() {
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
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(2, 16, 36, 0.4)",
      }}
      date="April 2025"
      iconStyle={{
        background: "#00e0ff",
        color: "#fff",
        boxShadow: "0 0 10px rgba(0, 224, 255, 0.7)",
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
        className="inline-block mt-6 px-5 py-2 border-2 border-white text-white font-semibold rounded-md relative group overflow-hidden"
      >
        <span className="relative z-10">Offer Letter</span>
        <span
          className="absolute inset-0 bg-[#066C65] backdrop-blur-md group-hover:bg-[#00e0ff] transition-all duration-300 z-0"
        ></span>
      </a>
    </VerticalTimelineElement>
  );
}