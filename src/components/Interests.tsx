import React from "react";
import { motion } from "framer-motion";
import { upAnimation } from "@/Layout/variants";
import { PartyPopper } from "lucide-react";

type Props = {};

const Interests = (props: Props) => {
  const hobbiesList = [
    {
      name: "Golf",
      emoji: "🏌️‍♂️",
    },
    {
      name: "Tennis",
      emoji: "🎾",
    },
    {
      name: "Guitar",
      emoji: "🎸",
    },
    {
      name: "Calisthenics",
      emoji: "🏋️‍♂️",
    },
    {
      name: "Miami Dolphins",
      emoji: "🐬",
    },
    {
      name: "Reading",
      emoji: "📚",
    },
    {
      name: "Pickleball",
      emoji: "🥒",
    },
    {
      name: "My Dog Rudy",
      emoji: "🐶",
    },
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
        <PartyPopper color="white" size={10} />
        <p className="text-xs font-light">FOR&nbsp;FUN</p>
      </motion.div>
      <motion.p
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.4 }}
        variants={upAnimation}
        viewport={{ once: true }}
        className="font-light text-4xl leading-normal pt-5"
      >
        My <span className="text-th-primary-text">Hobbies</span>
      </motion.p>
      {/* create good looking elements with th-primary-text border that has all my skills */}

      <div className="flex flex-wrap gap-4">
        {hobbiesList.map((hobbie, key) => (
          <motion.div
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.25, delay: key * 0.1 }}
            variants={upAnimation}
            viewport={{ once: true }}
            className="hover:border-th-primary-text hover:text-th-primary-text flex justify-center items-center px-4 py-2 border border-solid border-gray-500 rounded-full"
          >
            <p className="font-extralight">
              {hobbie.emoji}&nbsp;&nbsp;{hobbie.name}&nbsp;
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
