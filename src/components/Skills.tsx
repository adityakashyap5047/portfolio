"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaPython, FaDocker, FaGithub,
} from "react-icons/fa";
import {
  SiFirebase, SiKubernetes, SiOpenai, SiScikitlearn, SiTensorflow,
} from "react-icons/si";
import { section } from "framer-motion/client";

const categories = {
  "Web Dev": [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  ],
  "AI/ML": [
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
    { name: "Scikit-learn", icon: <SiScikitlearn className="text-yellow-300" /> },
    { name: "OpenAI", icon: <SiOpenai className="text-white" /> },
  ],
  "DevOps": [
    { name: "Docker", icon: <FaDocker className="text-blue-300" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
  ],
};

const tabKeys = Object.keys(categories);

export default function Skills() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [prevTabIndex, setPrevTabIndex] = useState(0);

  const activeTab = tabKeys[activeTabIndex];

  const direction = activeTabIndex > prevTabIndex ? "down" : "up";

  const handleTabChange = (newIndex) => {
    setPrevTabIndex(activeTabIndex);
    setActiveTabIndex(newIndex);
  };

  const variants = {
    initial: (dir) => ({
      opacity: 0,
      y: dir === "down" ? -50 : 50,
    }),
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: (dir) => ({
      opacity: 0,
      y: dir === "down" ? 50 : -50,
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <section
      id="skills"
      className="relative py-20 min-h-screen  [background-image:repeating-linear-gradient(-45deg,#0faacc_0px,#f34f39_80px,#000_80px,#000_160px)] overflow-hidden"
    >
      <div className="max-w-[1200px] bg-blue-900/90 rounded-sm shadow-sm px-4 mx-auto text-center">
        <h2 className="text-[45px] text-white font-bold">My Skills</h2>
        <p className="text-[#bfdd13] text-[18px] leading-relaxed tracking-wide !my-12 !ml-auto !mr-auto max-w-[56%] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
  <div
      className="w-full flex items-center justify-center p-8"
    >
      <div className="bg-blue-500/90 flex rounded-sm py-12 pr-10 shadow-2xl max-w-6xl w-full text-white">
        {/* Vertical Left Label */}
        <div className="flex flex-col justify-center">
          <p className="text-yellow-400 w-[100px] sm:w-[150px] text-3xl font-bold rotate-[-90deg]">
            {activeTab}
            {/* HEllo */}
          </p>  
        </div>

        {/* Skill Grid with Directional Animation */}
        <div className="flex-1 flex-wrap min-h-[300px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeTab}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-wrap gap-2"
            >
              {categories[activeTab].map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-sm p-4 shadow-xl flex flex-col w-[100px] h-[150px] items-center justify-center hover:scale-105 transition duration-300 gap-6"
                >
                  <div className="text-6xl mb-2">{skill.icon}</div>
                  <p className="text-white text-sm bottom-0.5">{skill.name}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Vertical Bar Navigation */}
        <div className="flex flex-col gap-6 justify-center items-center pl-4">
          {tabKeys.map((key, idx) => (
            <button
              key={key}
              onClick={() => handleTabChange(idx)}
              className={`w-2 h-10 rounded-full transition cursor-pointer ${
                activeTabIndex === idx
                  ? "bg-yellow-400"
                  : "bg-white/30 hover:bg-pink-100"
              }`}
              aria-label={key}
            ></button>
          ))}
        </div>
      </div>
      </div>
    </div>
    </section>
  );
};  
// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
//   FaPython, FaDocker, FaGithub,
// } from "react-icons/fa";
// import {
//   SiFirebase, SiKubernetes, SiOpenai, SiScikitlearn, SiTensorflow,
// } from "react-icons/si";

// import bgImage from "@/assets/img/footer-bg.png";

// const categories = {
//   "Web Dev": [
//     { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//     { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
//     { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
//     { name: "React", icon: <FaReact className="text-cyan-400" /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//   ],
//   "AI / ML": [
//     { name: "Python", icon: <FaPython className="text-yellow-400" /> },
//     { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
//     { name: "Scikit-learn", icon: <SiScikitlearn className="text-yellow-300" /> },
//     { name: "OpenAI", icon: <SiOpenai className="text-white" /> },
//   ],
//   DevOps: [
//     { name: "Docker", icon: <FaDocker className="text-blue-300" /> },
//     { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" /> },
//     { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
//     { name: "GitHub", icon: <FaGithub className="text-white" /> },
//   ],
// };

// const tabKeys = Object.keys(categories);

// export default function SkillSection() {
//   const [activeTabIndex, setActiveTabIndex] = useState(0);
//   const [prevTabIndex, setPrevTabIndex] = useState(0);

//   const activeTab = tabKeys[activeTabIndex];
//   const direction = activeTabIndex > prevTabIndex ? "down" : "up";

//   const handleTabChange = (newIndex) => {
//     if (newIndex !== activeTabIndex) {
//       setPrevTabIndex(activeTabIndex);
//       setActiveTabIndex(newIndex);
//     }
//   };

//   const slideVariants = {
//     initial: (dir) => ({
//       opacity: 0,
//       y: dir === "down" ? 30 : -30,
//     }),
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.4, ease: "easeInOut" },
//     },
//     exit: (dir) => ({
//       opacity: 0,
//       y: dir === "down" ? -30 : 30,
//       transition: { duration: 0.4, ease: "easeInOut" },
//     }),
//   };

//   return (
//     <section id="skills" className="bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]f relative bg-black text-white py-16 px-6 max-w-[1200px]mx-auto text-center">
//         <h2 className="text-[45px] font-bold">My Skills</h2>
//         <p className="text-[#B8B8B8] text-[18px] leading-relaxed tracking-wide !my-12 !ml-auto !mr-auto max-w-[56%] mx-auto">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book.
//         </p>
//       <div className="max-w-6xl mx-auto flex flex-row gap-12 items-start">
//         {/* Left Vertical Label */}
//         <div className="hidden md:flex flex-col justify-center items-center pr-6">
//           {/* <p className="text-yellow-400 text-3xl font-bold rotate-[-90deg] tracking-wide">
//             {activeTab}
//           </p> */}
//         </div>

//         {/* Fixed-height Animated Container */}
//         <div className="relative max-w-2xl flex-1 h-[340px] overflow-hidden">
//           <AnimatePresence custom={direction} mode="wait">
//             <motion.div
//               key={activeTab}
//               custom={direction}
//               variants={slideVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               className="absolute top-0 left-0 w-full h-full"
//             >
//               <div className="flex flex-wrap gap-6">
//                 {categories[activeTab].map((skill, idx) => (
//                   <div
//                     key={idx}
//                     className="w-32 bg-white/10 backdrop-blur-md border border-white/10 rounded-sm p-2 shadow-xl flex flex-col items-center justify-center hover:scale-105 transition duration-300"
//                   >
//                     <div className="text-8xl mb-2">{skill.icon}</div>
//                     <p className="text-white text-sm font-semibold">{skill.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Right Vertical Nav */}
//         <div className="flex flex-col gap-6 justify-center items-center pl-4">
//           {tabKeys.map((key, idx) => (
//             <button
//               key={key}
//               onClick={() => handleTabChange(idx)}
//               className={`w-1 h-10 rounded-full transition cursor-pointer ${
//                 activeTabIndex === idx
//                   ? "bg-yellow-400"
//                   : "bg-white/30 hover:bg-blue-200"
//               }`}
//               aria-label={key}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
//   FaPython, FaDocker, FaGithub,
// } from "react-icons/fa";
// import {
//   SiFirebase, SiKubernetes, SiOpenai, SiScikitlearn, SiTensorflow,
// } from "react-icons/si";

// const categories = {
//   "Web Dev": [
//     { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//     { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
//     { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
//     { name: "React", icon: <FaReact className="text-cyan-400" /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//   ],
//   "AI / ML": [
//     { name: "Python", icon: <FaPython className="text-yellow-400" /> },
//     { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
//     { name: "Scikit-learn", icon: <SiScikitlearn className="text-yellow-300" /> },
//     { name: "OpenAI", icon: <SiOpenai className="text-white" /> },
//   ],
//   "DevOps": [
//     { name: "Docker", icon: <FaDocker className="text-blue-300" /> },
//     { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" /> },
//     { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
//     { name: "GitHub", icon: <FaGithub className="text-white" /> },
//   ],
// };

// const tabKeys = Object.keys(categories);

// export default function SkillSection() {
//   const [activeTabIndex, setActiveTabIndex] = useState(0);
//   const [prevTabIndex, setPrevTabIndex] = useState(0);

//   const activeTab = tabKeys[activeTabIndex];
//   const direction = activeTabIndex > prevTabIndex ? "down" : "up";

//   const handleTabChange = (newIndex: number) => {
//     if (newIndex !== activeTabIndex) {
//       setPrevTabIndex(activeTabIndex);
//       setActiveTabIndex(newIndex);
//     }
//   };

//   const slideVariants = {
//     initial: (dir: string) => ({
//       opacity: 0,
//       y: dir === "down" ? 30 : -30,
//     }),
//     animate: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.4, ease: "easeInOut" },
//     },
//     exit: (dir: string) => ({
//       opacity: 0,
//       y: dir === "down" ? -30 : 30,
//       transition: { duration: 0.4, ease: "easeInOut" },
//     }),
//   };

//   return (
//     <section
//       id="skills"
//       className="min-h-screen w-full [background-image:repeating-linear-gradient(-45deg,#facc15_0px,#facc15_80px,#000_80px,#000_160px)] flex items-center justify-center p-8"
//     >
//       <div className="bg-black/90 rounded-2xl px-10 py-12 shadow-2xl max-w-6xl w-full text-white">
//         <h2 className="text-4xl font-bold text-yellow-400 text-center mb-4">My Skills</h2>
//         <p className="text-center text-sm text-gray-300 mb-10 max-w-xl mx-auto">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta vel error dolorum eum, voluptatibus quas quidem inventore perferendis dicta rem vitae nulla? Quisquam dicta veritatis consequatur eos repellat exercitationem voluptates reprehenderit, corporis rerum vero modi qui illum iste vitae non harum officiis iusto, voluptatum omnis temporibus itaque nemo? Voluptatem?
//         </p>

//         <div className="flex flex-row gap-8 items-start justify-center">
//           {/* Left Label */}
//           <div className="hidden md:flex flex-col justify-center items-center pr-4">
//             {/* <p className="text-yellow-400 text-2xl font-bold rotate-[-90deg] tracking-wide">{activeTab}</p> */}
//           </div>

//           {/* Skills Content */}
//           <div className="relative max-w-2xl flex-1 h-[340px] overflow-hidden">
//             <AnimatePresence custom={direction} mode="wait">
//               <motion.div
//                 key={activeTab}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 className="absolute top-0 left-0 w-full h-full"
//               >
//                 <div className="flex flex-wrap gap-6 justify-center">
//                   {categories[activeTab].map((skill, idx) => (
//                     <div
//                       key={idx}
//                       className="w-32 bg-white/10 backdrop-blur-md border border-white/10 rounded-sm p-2 shadow-xl flex flex-col items-center justify-center hover:scale-105 transition duration-300"
//                     >
//                       <div className="text-5xl mb-2">{skill.icon}</div>
//                       <p className="text-white text-sm font-semibold">{skill.name}</p>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Right Vertical Nav */}
//           <div className="flex flex-col gap-6 justify-center items-center pl-4">
//             {tabKeys.map((key, idx) => (
//               <button
//                 key={key}
//                 onClick={() => handleTabChange(idx)}
//                 className={`w-1 h-10 rounded-full transition cursor-pointer ${
//                   activeTabIndex === idx ? "bg-yellow-400" : "bg-white/30 hover:bg-blue-200"
//                 }`}
//                 aria-label={key}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
