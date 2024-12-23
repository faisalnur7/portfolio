import React from 'react';
import Bounce from './Bounce';

const Timeline = () => {
    const timelineData = [
        {
          year: "2016-2018",
          title: "Web Point Ltd",
          description: "Worked as a Software Developer at Web Point Ltd in Chawkbazar, Chattogram. Contributed to various software development projects, focusing on delivering efficient and reliable solutions.",
          align: "start"
        },
        {
          year: "2018-2019",
          title: "Ringersoft Ltd",
          description: "Served as a Software Developer at Ringersoft Ltd in Sughanda, Muradpur, Chattogram. Enhanced skills in developing scalable applications and managing critical software systems.",
          align: "end"
        },
        {
          year: "2019-2020",
          title: "Cloud Height Technologies Ltd",
          description: "Held the position of Software Developer at Cloud Height Technologies Ltd in Sughanda, Muradpur, Chattogram. Played a key role in improving application performance and delivering client-centric solutions.",
          align: "start"
        },
        {
          year: "2020-2021",
          title: "Favicon Info Systems",
          description: "Worked as Head of Implementation at Favicon Info Systems in GEC Circle, Chattogram. Led project implementations and ensured smooth deployment of software solutions.",
          align: "end"
        },
        {
          year: "2021",
          title: "AKR Technology Ltd",
          description: "Served as a Software Developer at AKR Technology Ltd in Shahera Trapical Center, Dhaka. Focused on backend development and application optimization.",
          align: "start"
        },
        {
          year: "2021-Present",
          title: "Echologyx Ltd",
          description: "Currently employed as a Software Engineer at Echologyx Ltd in Siaam Tower, Uttara, Dhaka. Involved in developing cutting-edge software solutions and collaborating with cross-functional teams to meet client needs.",
          align: "end"
        }
      ];
      
      
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

        {timelineData.map((item, index) => (
            <li key={index}>
            {item.align === "end" && <hr />}
            <div className="timeline-middle p-2">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="darkblue"
                className="h-5 w-5">
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
            </div>
            <div
                className={`timeline-${item.align} mb-10 py-4 px-8 rounded-xl shadow-xl border-2 border-slate-100 flex flex-col items-center justify-center w-full  bg-gradient-to-tr from-custom_navy via-blue-950 to-custom_navy bg-size-200 animate-gradient  ${
                item.align === "end" ? "md:text-end" : ""
                }`}>
                <Bounce>
                    <time className="font-mono italic text-white">{item.year}</time>
                    <div className="pb-4 text-lg font-black text-white">{item.title}</div>
                    <p className='text-white'>{item.description}</p>
                </Bounce>
            </div>
            <hr className='bg-custom_navy rounded-xl' />
            </li>
        ))}
        </ul>
    );
    };

export default Timeline;
