import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {
  return (
    <>
      <div class="dark">
        <div className="dark:bg-black h-screen w-full">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
