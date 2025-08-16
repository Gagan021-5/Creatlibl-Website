import React from "react";
import Animatescroll from "./Animatescroll";
import { Lightbulb, Palette, Rocket, TrendingUp } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      title: "Understand Your Vision",
      desc: "We start with a detailed consultation.",
      logo: Lightbulb,
    },
    {
      title: "Plan & Design",
      desc: "Your goals become our blueprint.",
      logo: Palette,
    },
    {
      title: "Develop & Launch",
      desc: "Bringing your idea to life with precision.",
      logo: Rocket,
    },
    {
      title: "Market & Grow",
      desc: "Continuous support to scale your success.",
      logo: TrendingUp,
    },
  ];

  return (
    <Animatescroll className="min-h-screen text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">How We Work</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-tr from-sky-900 to-black/80 cursor-pointer p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center hover:scale-105 duration-150 ease-in-out"
          >
            {step.logo && (
              <step.logo className="w-10 h-10 mx-auto mb-4 text-sky-800" />
            )}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </Animatescroll>
  );
};

export default HowWeWork;
