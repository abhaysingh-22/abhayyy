import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/ait.png";
import project2 from "../../public/images/projects/cidc.png";
import project3 from "../../public/images/projects/ecotravel.png";
import project4 from "../../public/images/projects/meta.png";
import project5 from "../../public/images/projects/nexabots.png";
import project6 from "../../public/images/projects/profolio.png";
import project7 from "../../public/images/projects/ragent.png";
import project8 from "../../public/images/projects/sendbox.png";
import project9 from "../../public/images/projects/snapexx.png";
import project10 from "../../public/images/projects/sniffi.png";
import project11 from "../../public/images/projects/todo.png";
import project12 from "../../public/images/projects/tripnow.png";
import project13 from "../../public/images/projects/SIH.png";
import project14 from "../../public/images/projects/snapexxApp.png";
import project15 from "../../public/images/projects/hackathon.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github, typeLink }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
         rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
             rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]  
            "
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        {typeLink ? (
          <Link
            href={typeLink}
            scroll={false}
            className="text-primary font-medium text-xl dark:text-blue-600 xs:text-base underline cursor-pointer"
          >
            {type}
          </Link>
        ) : (
          <span className="text-primary font-medium text-xl dark:text-blue-600 xs:text-base">
            {type}
          </span>
        )}
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm ">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                        dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Projects
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, typeLink, imageClassName }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark
         bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
             rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className={imageClassName || "w-full h-auto"}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        {typeLink ? (
          <Link
            href={typeLink}
            scroll={false}
            className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base underline cursor-pointer"
          >
            {type}
          </Link>
        ) : (
          <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
            {type}
          </span>
        )}
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>abhayyy | Project page</title>
        <meta
          name="description"
          content="Explore Sidharth Shukla's portfolio of Next.js, React.js, and Node.js projects. As a skilled full stack developer, I have built innovative and scalable web applications using these technologies. Collaborating with talented individuals on GitHub, I believe in the power of open-source development. Browse through my projects and see how I leverage cutting-edge technologies to create robust and user-friendly solutions."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl  xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Army Institute of Technology"
                img={project1}
                summary="Led the development and deployment of the official website for Army Institute of Technology (AIT), Pune, serving 2000+ students and faculty daily. Designed a scalable MERN-based system to streamline academic information, announcements, and institutional workflows with a focus on performance and usability."
                link="https://www.aitpune.com/"
                github="https://github.com/CIDC-PROJECTS/John-Snow"
                type="Blog"
                typeLink="/books/1?from=projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="SendBox"
                img={project8}
                summary="/"
                link="https://sendboxait.vercel.app/"
                github="https://github.com/Smart-AIT/automation"
                type="Blog"
                typeLink="/books/2?from=projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Personal Portfolio"
                img={project6}
                summary="/"
                link="/"
                github="https://github.com/abhaysingh-22/abhayyy"
                type="Blog"
                typeLink="/books/3?from=projects"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Snapexx"
                img={project9}
                summary="Snapexx is an AI-powered platform that allows users to generate and enhance images and videos from text prompts and local images. It offers features like high-quality image generation, video creation, image editing, professional content generation for social platforms, and image comparison—all designed to simplify creative workflows."
                link="https://www.snapexx.tech/"
                github="https://github.com/abhaysingh-22/websnapexx"
                type="Blog"
                typeLink="/books/4?from=projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="CIDC"
                img={project2}
                link="https://www.cidc.dev/"
                github="https://github.com/Smart-AIT/cidc_website"
                type="Blog"
                typeLink="/books/5?from=projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="DayStacks"
                img={project11}
                link="https://tudu-vibe.vercel.app/"
                github="https://github.com/abhaysingh-22/ToDo_React_App"
                type="Blog"
                typeLink="/books/6?from=projects"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="TripNow"
                img={project12}
                summary="TripNow is a full-stack ride-hailing application inspired by other Riding applications, built with modern web technologies (MERN-stack). It allows users to book rides, captains to accept and manage rides, and includes real-time tracking, payment integration, location services & many more."
                link="https://trip-now-phi.vercel.app/"
                github="https://github.com/abhaysingh-22/TripNow"
                type="Blog"
                typeLink="/books/7?from=projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="EcoTravel"
                img={project3}
                link="https://ecotravel-omega.vercel.app/"
                github="https://github.com/abhaysingh-22/CEP"
                type="Blog"
                typeLink="/books/8?from=projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Resturant Agent"
                img={project7}
                link="https://agent-lac.vercel.app/"
                github="https://github.com/abhaysingh-22/Agent"
                type="Blog"
                typeLink="/books/9?from=projects"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Customer-Support-Agent"
                img={project4}
                summary="This agentic application simulates real-world customer support workflows, testing decision accuracy, policy compliance, and multi-step reasoning using constrained tools. Built with FastAPI and Docker, it enables realistic evaluation of AI agents in production-like environments."
                link="https://huggingface.co/spaces/abhaysingh-22/openenv-customer-support"
                github="https://github.com/abhaysingh-22/OpenEnvv"
                type="Blog"
                typeLink="/books/10?from=projects"
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="MusicSystem"
                img={project6}
                link="/"
                github="https://github.com/abhaysingh-22/Song"
                type="Blog"
                typeLink="/"
              />
            </div> */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Sniffi"
                img={project10}
                link="https://www.sniffi.in/"
                github="https://github.com/abhaysingh-22/sniffi-frontend"
                type="Blog"
                typeLink="/books/11?from=projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Nexabots"
                img={project5}
                link="/"
                github="https://github.com/abhaysingh-22/nexobots"
                type="Blog"
                typeLink="/books/12?from=projects"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Farmer's Assistant App"
                img={project13}
                summary="This is a cross-platform mobile application that provides farmers with AI-driven agricultural guidance through a real-time chatbot supporting both voice and text interactions. Built using React Native and Expo, it integrates speech-to-text and text-to-speech capabilities to deliver an accessible and seamless user experience."
                link="https://drive.google.com/drive/folders/1TVE5kiRWbKfDDrAM0mhtTi6JDVJmipXA?usp=drive_link"
                github="https://github.com/Pradeep-kumar-py/sih-farmer-app"
                type="Blog"
                typeLink="/books/1?from=projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Snapexx Mobile App"
                img={project14}
                link="https://drive.google.com/drive/folders/1TVE5kiRWbKfDDrAM0mhtTi6JDVJmipXA?usp=drive_link"
                github="https://github.com/abhaysingh-22/SnapExx"
                type="Blog"
                typeLink="/books/4?from=projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Hackathons"
                img={project15}
                link="/books/16?from=projects"
                github="https://github.com/PankajKumar17/partex-ai-hackathon"
                type="Blog"
                typeLink="/books/16?from=projects"
                imageClassName="w-3/4 h-auto mx-auto"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
