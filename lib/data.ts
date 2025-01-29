import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData = [
  {
    title: "Digital Clock",
    description:
    "Created a digital clock that updates the accurate time, providing users to keep track of time while browsing the web.",
    tags: ["HTML", "CSS", "JavaScript"],
    
  },
  {
    title: "Text to Speech Converter",
    description:
      "Developed a user friendly,responsive,real time text speech conversion,Multi language voice support with adjustable speed.",
    tags: ["HTML", "CSS", "JavaScript"],
    
  },
  {
    title: "Flappy Bird",
    description:
      "Built a replica of the game that features a bird that the player controls by clicking to keep it flying avoiding obstacles.",
    tags: ["HTML", "CSS", "JavaScript"],
    
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Framer Motion",
] as const;
