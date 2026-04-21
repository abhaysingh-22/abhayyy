import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import profilePic from "../../public/images/profile/abe.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>abhayyy | About page</title>
        <meta
          name="description"
          content="Welcome to my website! I'm Abhay Singh, a passionate developer on a continuous learning journey. With a strong foundation in web & mobile development, I am currently focused on expanding my skills in AI agents, automation and exploring the realm of open source. Through my website, I aim to share my knowledge, experiences, and insights gained along the way. Join me in discovering the exciting world of development, agents, automations and the power of open source collaborations."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hello, I am Abhay Singh, a passionate B-Tech student currently
                studying at Army Institute of Technology in Pune, Maharashtra.
                With a strong focus on development, I possess a diverse range of
                skills that include HTML, CSS, JavaScript, MongoDB, Next.js,
                React.js, Node.js, Express.js, React Native, Designing, MySQL, 
                Supabase, C++, Python, Docker, Git, GitHub, GitLab, Linux, Automation, Hosting &
                AI Agents.
              </p>
              <p className="font-medium my-4">
                Apart from my technical abilities, I have a keen interest in
                playing Badminton & Football they keep me active and help
                sharpen my focus, strategy, and decision-making.
              </p>
              <p className="font-medium">
                In my portfolio, you will find a collection of my web & mobile
                development projects that demonstrate my proficiency in crafting
                visually appealing and functional applications. From responsive
                designs to seamless user interactions, my work reflects my
                commitment to excellence.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max  border-2 border-solid border-dark rounded-2xl
                         bg-light p-8 dark:bg-dark dark:border-light
                         xl:col-span-4 md:order-1 md:col-span-8
                         "
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
                              
                              "
              />
              <Image
                src={profilePic}
                alt="abe"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center
                         md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base  xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base  xs:text-sm">
                  Projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl ">
                  <AnimatedNumbers value={6} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base  xs:text-sm">
                  Months of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />

          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
