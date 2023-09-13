import Image from "next/image";
import React, { useState } from "react";
import meBW from "../images/meBW.svg";
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  FileBadge,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import ThemeChange from "./ThemeChange";

type Props = {
  setShowThemeChange: (showThemeChange: boolean) => void;
};

const Sidebar = (props: Props) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      viewport={{ once: true }}
      className="flex w-full lg:w-[400px] h-auto lg:h-screen lg:items-center md:justify-center p-4 md:p-6 lg:py-2 static lg:fixed"
    >
      <div className="flex flex-col relative w-full md:w-2/3 lg:w-full lg:min-h-[560px] space-y-7 lg:justify-stretch lg:space-y-5 items-center p-5 lg:px-6 pt-1 border rounded-2xl border-solid border-neutral-700 ">
        <div
          onClick={() => props.setShowThemeChange(true)}
          className="absolute top-6 animate-spin-slow -left-[14.5px] bg-primary text-neutral-500 p-1 cursor-pointer rounded-full"
        >
          <Settings size={20} />
        </div>
        <div className="flex w-full justify-between h-min">
          <p className="text-white text-4xl font-semibold">Dylan</p>
          <p className="text-white text-sm text-right">
            Full Stack
            <br />
            Developer
          </p>
        </div>
        <Image
          src={meBW}
          alt="me"
          className="max-w-[290px] lg:min-w-[250px] w-3/4 rounded-3xl"
        />
        <div>
          <p className="text-white text-center text-2xl md:text-xl font-light pb-1">
            dylantarlowe@gmail.com
          </p>
          <p className="text-white text-center text-2xl md:text-xl font-light pb-0">
            Based in New York, NY
          </p>
        </div>
        <p className="text-sm text-neutral-400">
          &copy; 2023 Dylan. All Rights Reserved
        </p>
        <div className="flex space-x-4">
          <div
            onClick={() =>
              openInNewTab("https://linkedin.com/in/dylantarlowe/")
            }
            className="flex justify-center items-center rounded-full border-2 border-neutral-600 w-12 h-12 cursor-pointer"
          >
            <Linkedin className="text-neutral-300" size={16} />
          </div>
          <div
            onClick={() => openInNewTab("https://github.com/dylantarlowe/")}
            className="flex justify-center items-center rounded-full border-2 border-neutral-600 w-12 h-12 cursor-pointer"
          >
            <Github className="text-neutral-300" size={16} />
          </div>
          <a
            href="/Resume.pdf"
            target="_blank"
            className="flex justify-center items-center rounded-full border-2 border-neutral-600 w-12 h-12 cursor-pointer"
          >
            <FileBadge className="text-neutral-300" size={16} />
          </a>
          <div
            onClick={() => openInNewTab("https://leetcode.com/dylantarlowe/")}
            className="flex justify-center items-center rounded-full border-2 border-neutral-600 w-12 h-12 cursor-pointer"
          >
            <Code2 className="text-neutral-300" size={16} />
          </div>
        </div>
        <button
          onClick={() =>
            (window.location.href = "mailto:dylantarlowe@gmail.com")
          }
          className="w-full flex justify-center items-center space-x-3 bg-th-primary-text rounded-full p-4"
        >
          <Mail color="black" size={20} />
          <p>CONTACT ME!</p>
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
