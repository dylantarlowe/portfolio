import React from "react";
import { motion } from "framer-motion";
import {
  leftShiftAnimation,
  rightShiftAnimation,
  upAnimation,
} from "@/Layout/variants";
import { Shapes } from "lucide-react";

type Props = {};

const Skills = (props: Props) => {
  const skillsList = [
    "React.js",
    "AWS",
    "UI/UX Design",
    "C++",
    "Python",
    "JavaScript",
    "Google Cloud",
    "SQL",
    "Figma",
    "Supabase",
    "Firebase",
    "Git",
    "Node.js",
    "MongoDB",
  ];

  return (
    <div className="flex flex-col space-y-6">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.25 }}
        variants={upAnimation}
        viewport={{ once: true }}
        className="flex w-min text-white space-x-2 items-center px-4 py-2 border rounded-full border-solid border-gray-600"
      >
        <Shapes color="white" size={10} />
        <p className="text-xs font-light">MY&nbsp;SKILLS</p>
      </motion.div>
      <motion.p
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.4 }}
        variants={upAnimation}
        viewport={{ once: true }}
        className="font-light text-4xl leading-normal pt-5"
      >
        My <span className="text-th-primary-text">Specializations</span>
      </motion.p>
      {/* create good looking elements with th-primary-text border that has all my skills */}

      <div className="flex flex-wrap gap-4">
        {skillsList.map((skill, key) => (
          <motion.div
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.25, delay: key * 0.1 }}
            variants={upAnimation}
            viewport={{ once: true }}
            className="hover:border-th-primary-text hover:text-th-primary-text flex justify-center items-center px-4 py-2 border border-solid border-gray-500 rounded-full"
          >
            <p className="font-extralight">{skill}</p>
          </motion.div>
        ))}
      </div>

      {/* <div className="flex flex-col">
        <div className="flex w-full space-x-4">
          <div className="flex-1 flex-col flex space-y-3 justify-center items-center">
            <div className="w-full flex justify-center items-center border border-solid rounded-full h-56 border-gray-500">
              <p className="text-2xl font-light">left</p>
            </div>
            <p className="text-lg text-gray-200">Figma</p>
          </div>
          <div className="flex-1 flex-col flex space-y-3 justify-center items-center">
            <div className="w-full flex justify-center items-center border border-solid rounded-full h-56 border-gray-500">
              <p className="text-2xl font-light">right</p>
            </div>
            <p className="text-lg text-gray-200">Figma</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
