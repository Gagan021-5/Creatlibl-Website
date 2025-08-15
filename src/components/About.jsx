import React from "react";
import Animatescroll from "./Animatescroll";
const About = () => {
  return (
    <Animatescroll
      id="About"
      className="flex flex-col min-h-screen  w-full items-center justify-center py-16 px-6 "
    >
      <h1 className="text-3xl md:text-5xl font-semibold text-white mb-6">
        About Creatibl
      </h1>

      <div className="max-w-3xl text-center space-y-4">
        <p className="text-gray-300 text-lg">
          At <strong className="font-semibold">Creatibl Solutions</strong>, we believe in
          creativity with a purpose. We’re a team of developers, marketers, and designers
          who build not just websites and apps — but complete digital experiences that
          drive results.
        </p>
        <p className="text-gray-300 text-lg">
          Our mission is simple: help businesses grow faster by combining cutting-edge
          technology with powerful marketing strategies.
        </p>
      </div>
    </Animatescroll>
  );
};

export default About;
