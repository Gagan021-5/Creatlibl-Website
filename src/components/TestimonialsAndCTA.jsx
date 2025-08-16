import React from "react";
import Animatescroll from "./Animatescroll";
import men from "../assets/men.jpeg";
import woman from "../assets/women.jpeg";

const TestimonialsAndCTA = () => {
  const scrolltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const testimonials = [
    {
      quote:
        "Creatibl transformed our outdated website into a lead-generating machine. Highly recommend their team!",
      author: "Arun K., Business Owner",
      image: men,
    },
    {
      quote:
        "Our app launch was a success thanks to Creatibl's technical and marketing expertise.",
      author: "Neha S., Startup Founder",
      image: woman,
    },
  ];

  return (
    <Animatescroll className="text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Client Testimonials
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-black/40 p-6 rounded-xl shadow-lg hover:shadow-2xl  flex flex-col items-center text-center transition hover:scale-105 all delay-100 duration-150 ease-in-out cursor-pointer"
          >
            <img
              src={t.image}
              alt={t.author}
              className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-green-500"
            />
            <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
            <p className="text-emerald-500 font-semibold">– {t.author}</p>
          </div>
        ))}
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">
          Let’s Build Something Great Together
        </h3>
        <p className="text-gray-300 mb-6">
          Whether you need a brand-new website, a powerful app, or a marketing
          push — we’re ready to make it happen.
        </p>
      </div>
    </Animatescroll>
  );
};

export default TestimonialsAndCTA;
