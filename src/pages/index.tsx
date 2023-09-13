import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";
import ThemeChange from "@/components/ThemeChange";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingLottie from "../images/loading.json";

type Props = {};

const Index = (props: Props) => {
  const [showThemeChange, setShowThemeChange] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="h-screen w-full bg-[#1f1f1f]">
      {loading && (
        <div className="flex bg-[#1f1f1f] fixed w-full h-screen items-center justify-center">
          <Lottie animationData={loadingLottie} />
        </div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 2.0 }}
        className={`${
          loading ? "invisible" : "visible"
        } lg:flex bg-[#1f1f1f] overflow-x-hidden`}
      >
        <>
          {!showThemeChange ? (
            <>
              <Sidebar setShowThemeChange={setShowThemeChange} />
              <div className="invisible lg:visible flex lg:w-[400px] 2xl:w-[500px] h-auto lg:max-h-screen p-6" />
              <Content />
            </>
          ) : (
            <ThemeChange setShowThemeChange={setShowThemeChange} />
          )}
        </>
      </motion.div>
    </div>
  );
};

export default Index;
