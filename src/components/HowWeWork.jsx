import React from "react";
import Animatescroll from "./Animatescroll";
const HowWeWork = () => {
  const steps = [
    { title: "Understand Your Vision", desc: "We start with a detailed consultation." },
    { title: "Plan & Design", desc: "Your goals become our blueprint." },
    { title: "Develop & Launch", desc: "Bringing your idea to life with precision." },
    { title: "Market & Grow", desc: "Continuous support to scale your success." }
  ];

  return (
    <Animatescroll className="min-h-screen  text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">How We Work</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.desc}</p>
          </div>
        ))}
      </div>
    </Animatescroll>
  );
};

export default HowWeWork;
