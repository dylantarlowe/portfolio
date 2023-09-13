import React from "react";
import { motion } from "framer-motion";
import { upAnimation } from "@/Layout/variants";
import { User2 } from "lucide-react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col space-y-6">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.25 }}
        variants={upAnimation}
        viewport={{ once: true }}
        className="flex w-min text-white space-x-2 items-center px-4 py-2 border rounded-full border-solid border-neutral-600"
      >
        <User2 color="white" size={10} />
        <p className="text-xs font-light ">ABOUT</p>
      </motion.div>
      <motion.p
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.4 }}
        variants={upAnimation}
        viewport={{ once: true }}
        className="font-light text-4xl md:text-5xl leading-normal md:leading-tight pt-5"
      >
        Every great design begins with an even{" "}
        <span className="text-th-primary-text">better story</span>
      </motion.p>
      <motion.p
        initial="initial"
        whileInView="whileInView"
        transition={{ duration: 0.4 }}
        variants={upAnimation}
        viewport={{ once: true }}
        className=" text-neutral-400 leading-relaxed font-light"
      >
        I&apos;m a problem-solving enthusiast, and coding is my avenue for
        turning ideas into reality. With startups like Perch, revolutionizing
        event parking, and Hatch, connecting college entrepreneurs and
        investors, I&apos;ve experienced the transformative power of a single
        developer firsthand. Armed with hands-on experience from Amazon, my
        startups, and various side projects, I&apos;m committed to finding
        technical solutions for any challenge. Let&apos;s chat if you have
        questions or simply want to connect!
      </motion.p>
    </div>
  );
};

export default About;
