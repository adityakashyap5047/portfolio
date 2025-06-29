"use client";

import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimelineElement';

const Experience = () => {
  return (
    <section id='experience'style={{backgroundImage: 'radial-gradient(circle, #00e0ff 0%, #021024 100%)'}}>
      <div className="max-w-[1200px] pt-24 px-4 mx-auto text-center">
        <h2 className="text-5xl text-white font-bold">Experience</h2>
        <p className="text-[#B8B8B8] text-[18px] leading-relaxed tracking-wide !my-12 !ml-auto !mr-auto sm:max-w-[56%] mx-auto">
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