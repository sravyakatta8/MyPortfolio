"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a B.Tech student in {" "}
        <span className="font-medium">NIT Rourkela</span>, pursuing a degree in {" "}
        <span className="font-medium">Electronics and Communication Engineering</span>.{" "}
        My favorite part of programming is the
        problem-solving aspect. I love the
        feeling of finally figuring out a solution to a problem. I use the Tech Stacks- 
        {" "}
        <span className="font-medium">
          React, Next.js, Typescript, TailwindCSS
        </span>
        .I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        sports like Kho-Kho,Badminton .I also like watching movies, webseries, dramas. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        travelling to new places. And I love to Dance.
        
      </p>
    </motion.section>
  );
}
