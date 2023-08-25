import React, { useState } from "react";
import { motion } from "framer-motion";
import { leftShiftAnimation, upAnimation } from "@/Layout/variants";
import { Briefcase } from "lucide-react";

type Props = {};

const Resume = (props: Props) => {
  const [selected, setSelected] = useState(0);

  const experience = [
    {
      year: "2022",
      roles: [
        {
          title: "Software Development Engineering Intern",
          company: "Amazon.com",
          details: "",
        },
        {
          title: "Cofounder & Full Stack Developer",
          company: "Perch",
          details: "",
        },
      ],
    },
    {
      year: "2021",
      roles: [
        {
          title: "Information Technology Intern",
          company: "Mitsubishi HC Capital America, Inc.",
          details: "",
        },
        {
          title: "Cofounder & Frontend Developer",
          company: "Hatch",
          details: "",
        },
      ],
    },
    {
      year: "2019 - 2023",
      roles: [
        {
          title: "Bachelor Degree of Computer Science",
          company: "University of Florida",
          details: "Summa Cum Laude: 3.91/4.0 GPA",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col space-y-6 pb-4">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.25 }}
        variants={upAnimation}
        viewport={{ once: true }}
        className="flex w-min text-white space-x-2 items-center px-4 py-2 border rounded-full border-solid border-gray-600"
      >
        <Briefcase color="white" size={10} />
        <p className="text-xs font-light ">RESUME</p>
      </motion.div>
      <motion.p
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.4 }}
        variants={upAnimation}
        viewport={{ once: true }}
        className="font-light text-4xl md:text-5xl leading-normal pt-5"
      >
        Education & <span className="text-th-primary-text">Experience</span>
      </motion.p>
      <div className="">
        {experience.map((exp, index) => (
          <motion.div
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 1 }}
            variants={leftShiftAnimation}
            viewport={{ once: true }}
            onClick={() => setSelected(index)}
          >
            <div className="flex space-x-12 md:space-x-20">
              <div className="flex flex-col items-center">
                {index !== 0 && (
                  <div className="w-[.25px] h-[7px] bg-gray-500" />
                )}
                <div
                  className={`w-3 h-3 ${
                    index === 0 && "mt-[7px]"
                  } rounded-full ${
                    selected === index ? "bg-th-primary-text" : "bg-gray-500"
                  }`}
                />
                <div className="w-[.25px] h-full bg-gray-500" />
              </div>
              <div className="flex w-auto flex-col justify-start space-y-4">
                <p
                  className={` ${
                    selected === index
                      ? "text-th-primary-text"
                      : "text-gray-400"
                  } font-light`}
                >
                  {exp.year}
                </p>
                {exp.roles.map((role) => (
                  <div className="flex flex-col space-y-1">
                    <p className="text-2xl font-light">{role.title} </p>
                    <p className=" text-gray-400 font-light">{role.company}</p>
                    {role.details && (
                      <p className="text-gray-400 text-xs font-light">
                        {role.details}
                      </p>
                    )}
                  </div>
                ))}
                {index !== experience.length - 1 && <div className="h-4" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
