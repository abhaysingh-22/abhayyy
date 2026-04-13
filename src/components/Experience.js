import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, CompanyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
    
     md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position} &nbsp;{" "}
          <a
            href={CompanyLink}
            target="_blank"
            className="text-primary dark:text-blue-700 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light-75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
                 dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-4">
          <Details
            position="Full Stack Developer "
            company="Army Institute of Technology, Pune"
            CompanyLink="https://www.aitpune.com/"
            time="C-Pannel"
            address="MERN"
            work="Developed the official college website of AIT Pune, serving 2000+ students and faculty daily. Built scalable backend systems and responsive frontend interfaces to support real-time academic and institutional workflows."
          />
          <Details
            position="Full Stack Developer "
            company="SendBox"
            CompanyLink="https://sendboxait.vercel.app/"
            time="SupaBase"
            address="NextJS"
            work="Built and deployed a WhatsApp automation system used by 1700+ students and faculty, enabling automated messaging and improving communication efficiency across the institution."
          />
          <Details
            position="Full Stack Developer "
            company="CIDC – IT Department, AIT Pune  "
            CompanyLink="https://cidc.dev/"
            time="2026-Present"
            address="NextJS"
            work="Developed the official Information Technology department club website to streamline communication and information sharing among students and faculty with active user engagement (50+)."
          />
          <Details
            position="Frontend Developer"
            company="NexaBots"
            CompanyLink="https://nexalab.io/"
            time="2025-Present"
            address="NextJS"
            work="Developed a fully responsive B2B enterprise website to showcase IT services, enabling service discovery, lead generation, and improved client engagement through structured content and User Interface."
          />
          <Details
            position="Frontend Developer  "
            company="Sniffi"
            CompanyLink="https://sniffi.in/"
            time="2024"
            address="ReactJS"
            work="Worked on a home veterinary service platform focused on delivering on-demand pet healthcare, building responsive interfaces for user interaction and service accessibility."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
