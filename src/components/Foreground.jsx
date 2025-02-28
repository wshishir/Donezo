import React from "react";
import Task from "./Task";

const Foreground = () => {
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full'>
      <Task />
    </div>
  );
};

export default Foreground;
