import Animatescroll from "./Animatescroll";
import { Puzzle, Target, Users, MessageSquare } from "lucide-react";

const WhyChooseUs = () => {
  const points = [
    {
      title: "Custom Solutions",
      desc: "We don’t believe in one-size-fits-all.",
      icon: Puzzle,
    },
    {
      title: "Result-Oriented Approach",
      desc: "Every project is designed to deliver measurable ROI.",
      icon: Target,
    },
    {
      title: "Full-Service Team",
      desc: "From design to deployment to marketing, we’ve got you covered.",
      icon: Users,
    },
    {
      title: "Transparent Communication",
      desc: "You’re always in the loop.",
      icon: MessageSquare,
    },
  ];

  return (
    <Animatescroll className="min-h-screen text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose Creatibl?
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {points.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-tr from-sky-900 to-black/80 p-6 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105 all delay-100 duration-150 ease-in-out text-center"
          >
            {item.icon && (
              <item.icon className="w-10 h-10 mx-auto mb-4 text-sky-700" />
            )}
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </Animatescroll>
  );
};

export default WhyChooseUs;
