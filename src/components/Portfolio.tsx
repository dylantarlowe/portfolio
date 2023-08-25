import React, { forwardRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  leftShiftAnimation,
  rightShiftAnimation,
  upAnimation,
} from "@/Layout/variants";
import { SquareStack, ExternalLink } from "lucide-react";
import Hatch from "../images/hatch.svg";
import missionDM from "../images/missionDM.svg";
import perch from "../images/perch.svg";
import guppyAI from "../images/guppyAI.svg";
import resQ from "../images/resQ.svg";

type Props = {};

const Portfolio = forwardRef<HTMLDivElement>(function Portfolio(props, ref) {
  const projects = [
    {
      name: "Perch",
      description: "Event Parking, Democrotized",
      stack: ["Next.js", "Supabase"],
      image: perch,
      link: "https://parkwithperch.com",
      bg: "bg-[#3E7BF6]",
    },
    {
      name: "GuppyAI",
      description: "AI Search Engine / Chatbot for Students",
      stack: ["React.js", "GPT-3"],
      image: guppyAI,
      link: "https://devpost.com/software/guppyai",
      bg: "bg-[#7E9221]",
    },
    {
      name: "ResQ",
      description: "Virtual Walking Companion Designed for Safety",
      stack: ["React Native", "Google Cloud"],
      image: resQ,
      link: "https://devpost.com/software/resq-3tng2a",
      bg: "bg-[#34A6CA]",
    },
    {
      name: "Mission DM",
      description: "A Fun Mobile Elimination Mobile Game",
      stack: ["React.js", "Firebase"],
      image: missionDM,
      link: "https://missiondmatuf.com/",
      bg: "bg-[#D3573D]",
    },
    {
      name: "Hatch",
      description: "A Networking Platform for College Entrepreneurs",
      stack: ["React.js", "Firebase"],
      image: Hatch,
      link: "https://hatchmatch.app/",
      bg: "bg-[#EBBD26]",
    },
  ];

  return (
    <div ref={ref} className="flex flex-col space-y-6">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.25 }}
        variants={upAnimation}
        viewport={{ once: true }}
        className="flex w-min text-white space-x-2 items-center px-4 py-2 border rounded-full border-solid border-gray-600"
      >
        <SquareStack color="white" size={10} />
        <p className="text-xs font-light ">PORTFOLIO</p>
      </motion.div>
      <motion.p
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.4 }}
        variants={upAnimation}
        viewport={{ once: true }}
        className="font-light text-4xl md:text-5xl leading-normal pt-5"
      >
        Featured <span className="text-th-primary-text">Projects</span>
      </motion.p>
      <div className="space-y-16">
        {projects.map((project, key) => (
          <motion.div
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            key={key}
            variants={
              key % 3 === 0
                ? upAnimation
                : key % 3 === 1
                ? leftShiftAnimation
                : rightShiftAnimation
            }
            className="space-y-6 group"
            onClick={() => window.open(project.link, "_blank")}
          >
            <div
              className={`${project.bg} relative flex flex-col space-y-6 items-center justify-end rounded-lg pt-8 p-4 cursor-pointer`}
            >
              <ExternalLink
                className="transition transform -translate-x-2 group-hover:translate-x-0
                            translate-y-2 duration-500 group-hover:translate-y-0 ease-in-out invisible group-hover:visible absolute top-4 right-4"
              />
              <Image
                src={project.image}
                className="rounded-lg"
                alt={project.name}
                width={300}
              />
              <div className="flex w-full space-x-3 justify-start">
                {project.stack.map((tech, key) => (
                  <div
                    key={key}
                    className="group-hover:bg-black group-hover:text-gray-200 bg-white text-gray-700 rounded-full px-5 py-2 text-center"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-2xl font-light group-hover:lg:underline">
              {project.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default Portfolio;
