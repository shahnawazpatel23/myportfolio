"use client";

import Brain from "@/components/Brain";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "JavaScript", "TypeScript"],
    },
    {
      category: "Front-End",
      items: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "zustand",
        "component libraries"
      ],
    },
    {
      category: "Back-End",
      items: ["Node.js", "RESTful APIs", "Appwrite", "Mongoose", "Expressjs"],
    },
    {
      category: "Database Management",
      items: ["MySQL", "MongoDB"],
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "GitHub", "Docker", "npm", "Linux", "Sentry"],
    },
    {
      category: "Other Skills",
      items: ["Intermediate Data Structures and Algorithms (Java)"],
    },
    {
      category: "Currently Exploring",
      items: ["AWS", "Cloud Concepts"],
    }
  ];
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, rotate: 2 },
  };

  return (
    <motion.div
      className="h-screen w-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.9 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* text container */}
        <div
          className="p-4 md:p-12 lg:p-28 xl:p-28 xl:pr-8 flex flex-col 
        gap-24 md:gap-24 lg:gap-32 xl:gap-48 lg:w-2/3 lg:pr-0 xl:w-1/2
        "
        >
          {/* about */}
          <div className="md:w-1/2 flex flex-col">
            <span className=" md:hidden font-bold mb-4 text-2xl">ABOUT</span>
            <p className="text-lg">
              Hello! I’m Shahnawaz Patel, a passionate full-stack developer with
              a knack for turning ideas into dynamic digital solutions. With
              expertise in technologies like React, Nextjs, Node.js, and
              MongoDB, I craft seamless and intuitive web experiences.
              Currently, I’m diving into the cloud realm, exploring AWS, and
              gearing up for the AWS Certified Developer – Associate
              certification. Let’s create something amazing together!
            </p>
          </div>
          {/* skills */}
          <div className="flex flex-col pb-20">
            <span className="font-bold mb-4 text-3xl text-left md:text-center">
              Skills
            </span>
            <motion.div
              className="flex flex-col space-y-4"
              variants={skillVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ when:"beforeChildren",staggerChildren: 1,duration:3 }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.category}
                  className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md"
                  variants={skillVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <h3 className="text-xl font-semibold text-gray-700">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    {skill.items.map((item, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 m-1 text-sm bg-black text-white rounded-full hover:bg-white hover:text-black"
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 z-50 xl:w-1/2">
        <Brain scrollYProgress={scrollYProgress}/></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
