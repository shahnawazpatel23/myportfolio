"use client"
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

const Example = () => {
  const projects = [
    {
      title: "Chatbot",
      description: "A personal chatbot using Google AI Studio.",
      videoSrc: "/chatbot2.mp4",
      url: "https://personal-chatbot-front.vercel.app/",
    },
    {
      title: "Fintech Demo Banking App",
      description: "A demo banking system using Plaid and Dwolla.",
      videoSrc: "/bankproject2.mp4",
      url: "https://bankify-nu.vercel.app/sign-in",
    },
    {
      title: "Real Time Chat-App",
      description:
        "A real-time chat application using Socket.io and MERN stack.",
      videoSrc: "/chatappfinal.mp4",
      url: "https://chat-up-wxxp.onrender.com",
    },
  ];
  return ( 
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.9 }}
    >
      <div className="flex flex-col items-center p-4 pb-24 gap-6 lg:flex-row lg:justify-around mt-7 ">
        {projects.map((project, index) => (
          <TiltCard
            key={index}
            title={project.title}
            description={project.description}
            videoSrc={project.videoSrc}
            url={project.url}
          />
        ))}
      </div>
    </motion.div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ title, description, videoSrc, url }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 mb-3 rounded-xl bg-gray-800"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-gradient-to-br from-blue-100 to-red-100 shadow-lg"
      >
        <div className="w-full h-full flex flex-col">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            controls
            style={{ width: "100%", height: "100%" }}
            className="p-1"
          />
          <div className="flex flex-col p-4 gap-2">
            <h2 className="text-lg text-black ">{title}</h2>
            <Link
              href={url}
              target="blank"
              className="bg-blue-600 w-fit py-2 px-3 text-white rounded-lg hover:bg-blue-800 "
            >
              Visit
            </Link>
            <p className="text-md text-black">{description} </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Example;
