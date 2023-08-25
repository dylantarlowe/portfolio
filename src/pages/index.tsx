import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";
import ThemeChange from "@/components/ThemeChange";
import React, { useState } from "react";

type Props = {};

const index = (props: Props) => {
  const [showThemeChange, setShowThemeChange] = useState(false);

  return (
    <div className="xl:flex bg-[#1f1f1f] overflow-x-hidden">
      {!showThemeChange ? (
        <>
          <Sidebar setShowThemeChange={setShowThemeChange} />
          <div className="invisible xl:visible flex xl:w-1/3 h-auto xl:max-h-screen p-6" />
          <Content />
        </>
      ) : (
        <ThemeChange setShowThemeChange={setShowThemeChange} />
      )}
    </div>
  );
};

export default index;
