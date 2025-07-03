"use client";

import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimelineElement';
import { FaChalkboardTeacher } from "react-icons/fa";

const experiences = [
  {
    position: "Software Engineer",
    company: "K3's Helping Hand",
    role: "Part-time",
    type: "Remote",
    Description: `
      In this role, my position is Software Engineer where I am responsible for developing and maintaining web-based applications focused on social impact and community support. 

      I collaborate with a distributed team to implement both frontend and backend features using modern web technologies. 

      My work involves writing clean, scalable code, participating in Agile ceremonies, conducting peer reviews, and contributing to architectural decisions. 

      I also optimize application performance and ensure smooth deployment pipelines using CI/CD workflows.
    `,
    duration: "May 2025 - Present",
    country: "India",
    buttonText: "",
    buttonLink: "#"
  },
  {
    position: "Freelance Developer",
    company: "Self-employed",
    role: "Freelance",
    type: "Remote",
    Description: `
      As a Freelancer, I also working with international clients to deliver customized full-stack solutions remotely.

      I design and develop responsive web applications using the MERN stack including Next.js, ensuring scalability and performance.

      I translate client requirements into technical specifications, integrate APIs, and provide continuous debugging and support.

      I manage project timelines independently, communicate across time zones, and ensure client satisfaction through efficient delivery and problem-solving.
    `,
    duration: "Jul 2024 - May 2025",
    country: "India",
    buttonText: "",
    buttonLink: "#"
  },
  {
    position: "Back End Developer",
    company: "DigitalBuzz Software Pvt Ltd",
    role: "Internship",
    type: "Remote",
    Description: `
      In this role, my position was Back End Developer Intern where I focused on building scalable and secure backend systems using Node.js, Express.js and MongoDB.

      I developed and maintained RESTful APIs, optimized database queries, and collaborated closely with frontend teams to ensure seamless integration.

      I gained hands-on experience in using tools like Postman, Hoppscotch, and Git for testing and version control.

      Additionally, I contributed to CI/CD processes, participated in sprint planning, and followed Agile development practices throughout the internship.
    `,
    duration: "Apr 2024 - Oct 2024",
    country: "India",
    buttonText: "",
    buttonLink: "#"
  },
  {
    position: "Online Tutor",
    company: "My Engineering Buddy",
    role: "Freelance",
    type: "Remote",
    Description: `
      In this role, my position was Online Tutor where I provided academic support to engineering students in subjects such as Data Structures, Algorithms, Web Development, and Database Management. 
      
      I delivered interactive one-on-one sessions, broke down complex concepts into simpler explanations, and tailored teaching methods to suit different learning styles. 
      
      I also created custom assignments, guided students through project work, and helped them prepare effectively for exams. 
      
      My sessions were conducted using tools like Zoom, collaborative coding platforms, and digital whiteboards, ensuring a high level of student engagement and satisfaction.
    `,
    duration: "Feb 2024 - Oct 2024",
    country: "India",
    buttonText: "",
    buttonLink: "#"
  }
]


const Experience = () => {
  return (
    <section id='experience'style={{backgroundImage: 'radial-gradient(circle, #0D3E85 -90%, #021024 100%)'}}>
      <div className="pt-24 px-4 mx-auto text-center">
        <h2 className="text-[45px] text-white font-bold pt-24 relative inline-block after:block after:w-28 after:h-1 after:bg-[#00e0ff] after:mx-auto after:mt-4">
          My Experience
        </h2>

        <p className="text-[#00e0ff] text-[18px] leading-relaxed tracking-wide my-12 mx-auto sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%]">
          I{`'`}ve worked with multiple fast-paced startups and freelance teams as a <span className="text-white font-semibold">Full-Stack Web Developer</span>, building responsive and scalable web applications using technologies like <span className="text-white font-semibold">React, Next.js, Node.js, and MongoDB</span>. From designing sleek UIs to implementing robust backend APIs, I{`'`}ve had hands-on experience across the full development cycle. I{`'`}ve also contributed to established companies by helping them modernize their tech stacks and optimize performance for production-level apps.
          <br /><br />
          Beyond code, I love being part of the tech ecosystem—whether it{`'`}s contributing to <span className="text-white font-semibold">open-source projects</span>, mentoring juniors, or collaborating with global teams. My journey is driven by curiosity, creativity, and the belief that thoughtful code can change the way people interact with technology.
          <br /><br />
          <span className="italic text-white block mt-6">
            “Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”
          </span>
        </p>
      </div>
      <VerticalTimeline lineColor="rgb(33, 150, 243)">
        {experiences.map((experience, index) => (
          <TimelineElement
            key={index}
            company={experience.company}
            position={experience.position}
            role={experience.role}
            type={experience.type}
            duration={experience.duration}
            icon={<FaChalkboardTeacher />}
            description={experience.Description}
            buttonText={experience.buttonText}
            buttonLink={experience.buttonLink}
          />
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;