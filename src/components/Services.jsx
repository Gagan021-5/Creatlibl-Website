import { motion } from "framer-motion";
import Animatescroll from "./Animatescroll";
const Services = () => {
  return (
    <Animatescroll
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: -50 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      id="Services"
      className="min-h-screen  text-white py-16 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105 all delay-100 duration-150 ease-in-out cursor-pointer">
          <h3 className="text-2xl font-semibold mb-4">Website Development</h3>
          <p className="text-gray-300">
            Custom, responsive, and SEO-ready websites that not only look
            amazing but also convert visitors into customers.
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105 all delay-100 duration-150 ease-in-out cursor-pointer">
          <h3 className="text-2xl font-semibold mb-4">App Development</h3>
          <p className="text-gray-300">
            From concept to launch, we create user-friendly mobile applications
            for Android & iOS that keep your audience engaged.
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105 all delay-100 duration-150 ease-in-out cursor-pointer ">
          <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
          <p className="text-gray-300">
            Boost your online presence with targeted campaigns, social media
            management, and data-driven strategies.
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105 all delay-100 duration-150 ease-in-out cursor-pointer">
          <h3 className="text-2xl font-semibold mb-4">SEO Services</h3>
          <p className="text-gray-300">
            Rank higher, get more traffic, and increase sales with our proven
            SEO solutions tailored to your industry.
          </p>
        </div>
      </div>
    </Animatescroll>
  );
};

export default Services;
