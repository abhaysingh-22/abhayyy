import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Head from "next/head";
import LiIcon from "@/components/LiIcon";
import TransitionEffect from "@/components/TransitionEffect";

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
          <span className="text-primary dark:text-blue-700">@</span>
          {position}
          {company && (
            <>
              {" "}
              <a
                href={CompanyLink}
                target="_blank"
                className="text-primary dark:text-blue-700 capitalize"
              >
                @{company}
              </a>
            </>
          )}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light-75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <div className="font-medium w-full md:text-sm">
          {typeof work === "string" ? <p>{work}</p> : work}
        </div>
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
    <>
      <Head>
        <title>abhayyy | Key Highlights</title>
        <meta
          name="description"
          content="Explore my key highlights, achievements, and projects."
        />
      </Head>
      <div className="my-16">
        <TransitionEffect />
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Key Highlights
        </h2>

        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
                 dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-4">
            <Details
              position=" Secetary- College Innovation & Development Club (CIDC)"
              // company="TenSketch (UAN:TN02D0075823)"
              // CompanyLink="https://www.tensketch.com/"
              time="04/2026-Present"
              // address="Bhopal"
              work={
                <ul>
                  <li>
                    Led development-driven initiatives to build{" "}
                    <span className="font-semibold">“Smart-AIT”</span> by
                    digitizing and improving college systems. Coordinated and
                    executed technical events, workshops, and hackathons.
                    Managed end-to-end{" "}
                    <span className="font-semibold">planning</span> and{" "}
                    <span className="font-semibold">execution</span> of{" "}
                    <span className="font-semibold">college projects</span> on
                    large-scale.
                  </li>
                </ul>
              }
            />
            <Details
              position=" Position of Responsibility"
              // company="Sheryians Coding School"
              // CompanyLink="https://sheryians.com/"
              time="2025-2026"
              // address="Bhopal"
              work={
                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    <span className="font-semibold">
                      Joint Secretary, Open-Source Software Club:
                    </span>{" "}
                    Served as an organizing member for{" "}
                    <span className="font-semibold">Innerve 10</span>, a
                    large-scale hackathon with over{" "}
                    <span className="font-semibold">5000+ participants</span>,
                    where I contributed to end-to-end event execution. Managed{" "}
                    <span className="font-semibold">logistics</span> and
                    participant coordination, efficiently handling queries to
                    ensure smooth operations throughout the event. Additionally,
                    supported
                    <span className="font-semibold">sponsor outreach</span> and
                    collaborated with cross-functional teams to successfully
                    deliver the hackathon.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Joint Secretary, Debate, Dramatics and Quiz Club:
                    </span>{" "}
                    Organized{" "}
                    <span className="font-semibold">
                      Model United Nations (MUN) – III Edition
                    </span>
                    , a multi-institutional event with{" "}
                    <span className="font-semibold">200+ participants</span>.
                    Collaborated with the executive committee to{" "}
                    <span className="font-semibold">
                      manage scheduling, delegate outreach, and logistics
                      planning
                    </span>
                    , ensuring smooth execution. Additionally, worked on{" "}
                    <span className="font-semibold">
                      sponsorship acquisition
                    </span>{" "}
                    and and <span className="font-semibold">design team</span>{" "}
                    for event branding and promotional materials.
                  </li>
                </ul>
              }
            />
            <Details
              position=" Building NextEra"
              // company="Sheryians Coding School"
              // CompanyLink="https://sheryians.com/"
              time="12/2025"
              address="Pune, Maharashtra"
              work="NextEra is a product studio where I build and experiment with web, mobile, and AI-driven tools. I focus on turning ideas into real, usable products - especially around automation and solving practical, everyday problems."
            />
            <Details
              position=" Build real-world scalable systems"
              // company="Cinntra Infotech Solutions"
              // CompanyLink="https://www.cinntra.com/"
              time="Impact?"
              // address="Noida,UP"
              work={
                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    <span className="font-semibold">AIT:</span> Developed the
                    official collegewebsite of Army Institute of Technology,
                    Pune, serving{" "}
                    <span className="font-semibold">2000+ students</span> +
                    faculty on a daily basis.
                  </li>
                  <li>
                    <span className="font-semibold">Snapexx:</span> An
                    AI-powered platform that generates images & videos from
                    text, prompts and local images of your device, with{" "}
                    <span className="font-semibold">25+ active users</span>{" "}
                    creating visual content.
                  </li>
                  <li>
                    <span className="font-semibold">SendBox:</span>Built a
                    WhatsApp automation system used & implemented on{" "}
                    <span className="font-semibold">1700+ students</span> and
                    faculty members, to automate messaging workflows.
                  </li>
                  <li>
                    <span className="font-semibold">CIDC:</span> Developed the
                    official IT department club website for AIT, Pune, actively
                    used by club members and faculty with{" "}
                    <span className="font-semibold">
                      30+ regular interactions
                    </span>
                    .
                  </li>
                  <li>
                    <span className="font-semibold">DayStacks:</span> Developed
                    a smart productivity app with{" "}
                    <span className="font-semibold">
                      chatbot-driven task management
                    </span>
                    ,{" "}
                    <span className="font-semibold">calendar integration</span>,
                    and in-app{" "}
                    <span className="font-semibold">YouTube embedding</span> for
                    distraction-free learning, with{" "}
                    <span className="font-semibold">40+ active users</span>.
                  </li>
                  <li>
                    <span className="font-semibold">Sniffi:</span>Home
                    veterinary service platform for on-demand pet healthcare.
                  </li>
                </ul>
              }
            />
            <Details
              position="Hackathon"
              // company="Smarden"
              // CompanyLink="https://www.tensketch.com/"
              time="09/2025-Present"
              // address="Bahadurgarh,Haryana"
              work={
                <ul>
                  <li>
                    Won Algofusion-
                    <a
                      href="https://partex.ai/en"
                      target="_blank"
                      className="text-primary dark:text-blue-700"
                    >
                      <span className="font-semibold"> PartXAI Hackathon </span>
                    </a>
                    where we built a{" "}
                    <span className="font-semibold">
                      voice-enabled AI system{" "}
                    </span>{" "}
                    that captures multilingual doctor-patient conversations and
                    converts them into structured medical data in real time &
                    system with organized symptoms, diagnosis, and
                    prescriptions, and store them with a patient ID to{" "}
                    <span className="font-semibold">
                      eliminate manual errors and chaotic hospital workflows.
                    </span>
                  </li>
                </ul>
              }
            />

            <Details
              position=" 5x Major Hackathon Finalist"
              // company="Smarden"
              // CompanyLink="https://www.tensketch.com/"
              time="09/2025-Present"
              // address="Bahadurgarh,Haryana"
              work="Global Digital Health Summit, NASA Space App Challenge, Meta Pytorch OpenEnv Hackathon, Virtual Labs Hackathon, Mumbai Hacks"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
