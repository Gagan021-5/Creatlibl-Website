import React from "react";
import Animatescroll from "./Animatescroll";

const About = () => {
  return (
    <Animatescroll
      id="About"
      className="flex flex-col min-h-screen w-full items-center justify-center py-16 px-6 "
    >
      <h1 className="text-3xl md:text-5xl font-semibold text-white mb-8 text-center md:text-left">
        About Creatibl
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <p className="text-gray-300 text-lg">
            At <strong className="font-semibold">Creatibl Solutions</strong>, we believe in creativity with a purpose. We’re a team of developers, marketers, and designers who build not just websites and apps — but complete digital experiences that drive results.
          </p>
          <p className="text-gray-300 text-lg">
            Our mission is simple: help businesses grow faster by combining cutting-edge technology with powerful marketing strategies.
          </p>
          <p className="text-gray-300 text-lg">
            We focus on <strong>innovation</strong>, <strong>efficiency</strong>, and <strong>impactful results</strong> to turn your ideas into thriving digital experiences.
          </p>
        </div>

   
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team image"
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>
      </div>
    </Animatescroll>
  );
};

export default About;
