import React, { useRef } from "react";
import Introduce from "./Introduce";
import About from "./About";
import Resume from "./Resume";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import { motion } from "framer-motion";
import Interests from "./Interests";

type Props = {};

const Content = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen flex justify-center items-center lg:w-3/4 text-neutral-50 py-6">
      <div className="flex flex-col justify-center lg:w-10/12 md:w-3/5 w-11/12 space-y-24 pb-16 lg:pt-12 lg:pr-14">
        <Introduce scroll={scroll} />
        <About />
        <Portfolio ref={ref} />
        <Resume />
        <Skills />
        <Interests />
      </div>
    </div>
  );
};

export default Content;
