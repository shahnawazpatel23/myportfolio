"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Navlink from "./Navlink";
import { usePathname } from "next/navigation";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const path = usePathname();
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // const listItemVariants = {
  //   closed: {
  //     x: -10,
  //     opacity: 0,
  //   },
  //   opened: {
  //     x: 0,
  //     opacity: 1,

  //   },
  // };
  const listItemVariants = {
    closed: {
      x: 10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const bounceVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    animate: {
      opacity: 1,
      y: [0, -20, 10, 0],
      transition: {
        duration: 1.2,
        ease: "easeIn",
        times: [0, 0.5, 0.8, 1],
      },
    },
  };

  return (
    <div className="h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-between ">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <Navlink link={link} key={link.title} />
        ))}
      </div>
      <motion.div
        className="md:hidden lg:flex xl:w-1/3 xl:justify-center"
        variants={bounceVariants}
        animate="animate"
      >
        <Link
          href="/"
          className="font-semibold text-sm p-2 bg-black rounded-md"
        >
          <span className="text-white mr-1">Shahnawaz</span>
          <span className="bg-white rounded-sm p-1.5">Patel</span>
        </Link>
      </motion.div>

      <div className="hidden md:flex gap-4 w-1/3 space-x-3">
        {/* <Link href="/">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/whatsapp.png" alt="" width={24} height={24} />
        </Link>
        
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        
        
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link> */}
        <div className="flex space-x-4">
          <div className="relative group">
            <Link href="https://github.com/shahnawazpatel23" target="_blank">
              <Image src="/github.png" alt="GitHub" width={24} height={24} />
            </Link>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2">
              GitHub
            </span>
          </div>

          <div className="relative group">
            <Link href={`https://wa.me/${process.env.MOBILE_NUMBER}`} target="_blank">
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={24}
                height={24}
              />
            </Link>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2">
              WhatsApp
            </span>
          </div>

          <div className="relative group">
            <Link href="https://www.instagram.com/23_shahnawaz/" target="_blank">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2">
              Instagram
            </span>
          </div>

          <div className="relative group">
            <Link href="https://www.linkedin.com/in/shahnawaz-patel-611255239/" target="_blank">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2">
              LinkedIn
            </span>
          </div>

          <div className="relative group">
            <Link href="mailto:your.shahnawazpatel23@gmail.com" target="_blank">
              <Image
                src="/gmail.png"
                alt="gmail"
                width={24}
                height={24}
              />
            </Link>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2">
              Gmail
            </span>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <button
          className="flex flex-col w-10 h-8 gap-2 z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
      </div>
      {open && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 right-0 w-screen h-screen bg-black text-white 
      font-semibold flex flex-col justify-center gap-8 items-center 
      text-4xl z-30 "
        >
          {links.map((link) => (
            <motion.div variants={listItemVariants} key={link.title}>
              <Link
                href={`${link.url}`}
                onClick={() => setOpen((prev) => !prev)}
                className={`${path === link.title ? "bg-gray-800" : ""}`}
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
