import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { rightShiftAnimation } from "@/Layout/variants";
import { useTheme } from "next-themes";
type Props = {
  setShowThemeChange: (showThemeChange: boolean) => void;
};

const themes = [
  { name: "green", color: "bg-green" },
  { name: "yellow", color: "bg-yellow" },
  { name: "orange", color: "bg-orange" },
  { name: "cyan", color: "bg-cyan" },
  { name: "grayMain", color: "bg-grayMain" },
  { name: "blue", color: "bg-blue" },
  { name: "red", color: "bg-red" },
  { name: "pink", color: "bg-pink" },
];

const ThemeChange = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      exit="exit"
      variants={rightShiftAnimation}
      transition={{ duration: 0.5 }}
      className="relative h-screen w-screen bg-primary px-12 pt-24"
    >
      <div className="flex flex-col w-full ">
        <p className="text-white text-4xl font-light pb-16">Configuration</p>
        <p className="text-white text-sm font-light w-full pb-8">COLORS</p>
        <div className="flex flex-wrap gap-7 bg-primary">
          {themes.map((curTheme, key) => (
            <div
              key={key}
              onClick={() => setTheme(curTheme.name)}
              className={`${
                theme === curTheme.name &&
                "transition-all duration-300 ease-in-out ring-1 ring-white ring-offset-4 ring-offset-current"
              }
                 flex justify-center items-center w-8 h-8 rounded-full ${
                   curTheme.color
                 } cursor-pointer`}
            >
              {theme === curTheme.name && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-1 h-1 rounded-full bg-white"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute top-6 right-6 text-white cursor-pointer"
        onClick={() => props.setShowThemeChange(false)}
      >
        <X size={24} />
      </div>
    </motion.div>
  );
};

export default ThemeChange;
