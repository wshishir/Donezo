import "./App.css";
import React, { useState } from "react";
function App() {
  return (
    <>
      <div className='bg-neutral-900 h-screen w-full relative'>
        <div className=' absolute top-[5%] w-full py-10  flex justify-center text-zinc-600'>
          Documents
        </div>
        <h1 className=' absolute font-title top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-7xl text-neutral-600 hover:text-neutral-500'>
          Donezo
        </h1>
      </div>
    </>
  );
}

export default App;
