import "./App.css";
import React, { useState } from "react";
import Background from "./components/Background";
function App() {
  return (
    <>
      <div className='bg-neutral-900 h-screen w-full relative'>
        <Background/>
      </div>
    </>
  );
}

export default App;
