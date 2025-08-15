import Animatescroll from "./Animatescroll";
const WhyChooseUs = () => {
  const points = [
    { title: "Custom Solutions", desc: "We don’t believe in one-size-fits-all." },
    { title: "Result-Oriented Approach", desc: "Every project is designed to deliver measurable ROI." },
    { title: "Full-Service Team", desc: "From design to deployment to marketing, we’ve got you covered." },
    { title: "Transparent Communication", desc: "You’re always in the loop." }
  ];

  return (
    <Animatescroll className="min-h-screen  text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Creatibl?</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {points.map((item, idx) => (
          <div key={idx} className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </Animatescroll>
  );
};

export default WhyChooseUs;
