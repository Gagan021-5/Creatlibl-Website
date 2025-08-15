import React from "react";
import { motion } from "framer-motion";
import Animatescroll from "./Animatescroll";
const Hero = () => {
  return (
    <>
      <Animatescroll
       initial={{opacity:0,y:0}}
       animate={{opacity:1,y:-50}}
       transition={{duration:2,ease:"easeInOut"}}
       
        id="Home"
        className="min-h-screen  flex flex-col justify-center items-center p-4 "
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-b from-neutral-100 to-neutral-400 bg-clip-text text-transparent text-center">
          Turning Ideas into Impactful Digital Experiences
        </h1>
        <p className="text-lg text-gray-300 md:text-xl text-center mb-6 max-w-2xl mx-auto">
          From stunning websites to high-performing apps and growth-focused
          digital marketing — Creatibl helps your business thrive in the digital
          age.
        </p>
        <div className="flex justify-center max-sm:flex-col gap-4">
          <button className="bg-zinc-800 text-blue-600 hover:text-blue-500 px-6 py-3 cursor-pointer rounded-lg font-semibold hover:bg-zinc-900">
            Get a Free Consultation
          </button>
          <button className="border text-white border-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition">
            View Our Work
          </button>
        </div>
      </Animatescroll>
    </>
  );
};

export default Hero;
