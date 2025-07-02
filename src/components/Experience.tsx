"use client";

import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimelineElement';

const data = [
  {
    position: "Online Tutor",
    company: "My Engineering Buddy",
    role: "Freelance",
    type: "Remote",
    Description:
        `
          Tutoring engineering students in subjects like Data Structures, Algorithms, Web Development, Database Management, and Computer Science Fundamentals.

          Delivering personalized 1-on-1 online sessions, simplifying complex concepts, and helping students achieve academic success.

          Designing practice problems and walkthroughs tailored to individual learning styles and syllabi.

          Assisting students with project guidance, debugging, and exam preparation, fostering strong conceptual foundations.

          Leveraging tools like Google Meet, Zoom, shared coding platforms, and digital whiteboards for real-time interactive teaching.

          Maintaining excellent student satisfaction ratings through engaging teaching and timely support.
        `,
    duration: "Jan 2023 - Present",
    country: "India",
  }
]

const Experience = () => {
  return (
    <section id='experience'style={{backgroundImage: 'radial-gradient(circle, #0D3E85 -90%, #021024 100%)'}}>
      <div className="max-w-[1200px] pt-24 px-4 mx-auto text-center">
        <h2 className="text-5xl text-white font-bold">Experience</h2>
        <p className="text-[#00e0ff] text-[18px] leading-relaxed tracking-wide !my-12 !ml-auto !mr-auto sm:max-w-[56%] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        </div>
      <VerticalTimeline lineColor="rgb(33, 150, 243)">
        <TimelineElement />
        <TimelineElement />
        <TimelineElement /> 
      </VerticalTimeline>
    </section>
  );
}

export default Experience;