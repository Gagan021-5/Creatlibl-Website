import Animatescroll from "./Animatescroll";
const Hero = () => {
  return (
    <>
      <Animatescroll
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -50 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        id="Home"
        className="min-h-screen  flex flex-col justify-center items-center p-4 "
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 pb-2 pt-3 bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text text-transparent text-center">
          Turning Ideas into Impactful Digital Experiences
        </h1>
        <p className="text-lg text-gray-300 md:text-xl text-center mb-6 max-w-2xl mx-auto">
          From stunning websites to high-performing apps and growth-focused
          digital marketing — Creatibl helps your business thrive in the digital
          age.
        </p>
        <div className="flex justify-center max-sm:flex-col gap-4">
          <button className="bg-gradient-to-r from-sky-800 to-black/60 text-white transition hover:scale-105 all delay-100 duration-150 ease-in-out   px-6 py-3 cursor-pointer rounded-lg font-semibold">
            <a href="#Contact">Get a Free Consultation</a>
          </button>
          <a
            href="#projects"
            className="border text-white border-white hover:scale-105 transition-all delay-100 duration-150 ease-in-out px-6 py-3 rounded-lg font-semibold cursor-pointer inline-block"
          >
            Our Work
          </a>
        </div>
      </Animatescroll>
    </>
  );
};

export default Hero;
