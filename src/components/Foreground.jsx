import React from "react";
import Card from "./Card";
import Topbar from "./Topbar";

const Foreground = () => {
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full'>
      <Card/>
    </div>
  );
};

export default Foreground;
