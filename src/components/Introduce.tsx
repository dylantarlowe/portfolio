import React, { useRef } from "react";
import { Home, ArrowDown, MoveDown } from "lucide-react";
import Image from "next/image";
import MyProjects from "../Images/myprojects.svg";
import { motion } from "framer-motion";
import {
  leftShiftAnimation,
  rightShiftAnimation,
  upAnimation,
} from "@/Layout/variants";

type Props = {
  scroll: () => void;
};

const Introduce = (props: Props) => {
  return (
    <div className="flex flex-col space-y-6 xl:space-y-10">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.25 }}
        variants={upAnimation}
        viewport={{ once: true }}
        className="flex w-min text-white space-x-2 items-center px-4 py-2 border rounded-full border-solid border-gray-600"
      >
        <Home color="white" size={10} />
        <p className="text-xs font-light ">INTRODUCE</p>
      </motion.div>
      <motion.p
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.4 }}
        variants={upAnimation}
        viewport={{ once: true }}
        className="font-light text-5xl md:text-7xl leading-tight"
      >
        Say Hi to <span className="text-th-primary-text">Dylan</span>, Full
        Stack Developer and Designer
      </motion.p>
      <motion.p
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.4 }}
        variants={upAnimation}
        viewport={{ once: true }}
        className="text-sm md:text-base text-gray-400 leading-relaxed font-light"
      >
        It's all about keeping things beautifully simple. I'm dedicated to
        crafting sleek and intuitive solutions that I'm truly passionate about.
      </motion.p>
      <motion.div
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.4 }}
        variants={upAnimation}
        viewport={{ once: true }}
        onClick={props.scroll}
        className="sm:self-end self-start cursor-pointer relative flex justify-center items-center w-fit h-auto p-3 rounded-full border border-gray-700 border-solid"
      >
        <Image
          className="animate-spin-slow"
          src={MyProjects}
          width={140}
          height={140}
          alt="myprojects"
        />
        <ArrowDown color="white" className="absolute" size={40} />
      </motion.div>
      <div className="flex space-x-12 md:space-x-20">
        <motion.div
          initial="initial"
          transition={{ duration: 0.5 }}
          whileInView="whileInView"
          variants={rightShiftAnimation}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <p className="text-5xl md:text-7xl font-light text-th-primary-text">
            3+
          </p>
          <p className="text-sm text-gray-500">
            YEARS OF <br /> EXPERIENCE
          </p>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="whileInView"
          transition={{ duration: 0.5 }}
          variants={leftShiftAnimation}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <p className="text-5xl md:text-7xl font-light text-th-primary-text">
            15+
          </p>
          <p className="text-sm text-gray-500">
            PROJECTS <br /> COMPLETED
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduce;
