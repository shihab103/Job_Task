import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Banner/>
      <About/>
    </div>
  );
}
