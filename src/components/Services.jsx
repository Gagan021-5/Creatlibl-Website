import { motion } from "framer-motion";
import Animatescroll from "./Animatescroll";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import { TvMinimalPlay ,Search, icons} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Website Development",
      desc: "Custom, responsive, and SEO-ready websites that not only look amazing but also convert visitors into customers.",
      icon: CgWebsite,
    },
    {
      title: "App Development",
      desc: "From concept to launch, we create user-friendly mobile applications for Android & iOS that keep your audience engaged.",
      icon: HiMiniDevicePhoneMobile,
    },
    {
      title: "Digital Marketing",
      desc: "Boost your online presence with targeted campaigns, social media management, and data-driven strategies.",
      icon: TvMinimalPlay,
    },
    {
      title: "SEO Services",
      desc: "Rank higher, get more traffic, and increase sales with our proven SEO solutions tailored to your industry.",
      icon:Search,
    },
  ];

  return (
    <Animatescroll
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: -50 }}
      transition={{ duration: 1.8, ease: "easeInOut" }}
      id="Services"
      className="min-h-screen text-white py-16 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-tr from-sky-900 to-black/80 p-8 rounded-xl shadow-lg hover:shadow-2xl transition hover:scale-105 all delay-100 duration-150 ease-in-out cursor-pointer"
          >
            {service.icon && (
              <service.icon className="w-10 h-10 mx-auto mb-4 text-sky-700" />
            )}
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </Animatescroll>
  );
};

export default Services;
