"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
    const sliderVariants = {
    initial: {
      x: 0,
     
    },
    animate: {
      x: "-220%",
      
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
      },
    },
  };
  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full w-full relative pb-14  ">
      
      <div className="h-full flex flex-col pb-14 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-y-scroll ">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative z-20  flex justify-center items-center " >
          <Image src="/ogfinal.png" alt="" width={300} height={500} className="" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col  gap-3 md:gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
          Transforming ideas into reality through Code.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Hello! I'm Shahnawaz Patel, a dedicated full stack developer with a passion for bringing ideas to life through code. My portfolio is a reflection of my journey in the tech world, showcasing a range of projects that highlight my skills and creativity.
                  
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 z-20">
            <a href="/portfolio" className=" p-2 md:p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-gray-800">View my Work</a>
            <a href="/Resume23V.pdf" download="Shahnawaz's_Resume.pdf">
              <button className="p-2 md:p-4 rounded-lg ring-1 ring-black hover:bg-black hover:text-white">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute opacity-50 text-[50vh] bottom-2
         whitespace-nowrap text-gray-600 
          w-[50%] cursor-default "
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer
      </motion.div>
      </div>
    </motion.div>
  );
};

export default Homepage;