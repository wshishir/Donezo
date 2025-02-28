import "./App.css";
import React, { useState } from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

function App() {
  return (
    <>
      <div className='bg-neutral-900 h-screen w-full relative'>
        <Background />
        <Foreground />
      </div>
    </>
  );
}

export default App;
