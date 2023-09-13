import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";
import ThemeChange from "@/components/ThemeChange";
import React, { useState } from "react";

type Props = {};

const Index = (props: Props) => {
  const [showThemeChange, setShowThemeChange] = useState(false);

  return (
    <div className="lg:flex bg-[#1f1f1f] overflow-x-hidden">
      {!showThemeChange ? (
        <>
          <Sidebar setShowThemeChange={setShowThemeChange} />
          <div className="invisible lg:visible flex lg:w-[400px] 2xl:w-[500px] h-auto lg:max-h-screen p-6" />
          <Content />
        </>
      ) : (
        <ThemeChange setShowThemeChange={setShowThemeChange} />
      )}
    </div>
  );
};

export default Index;
