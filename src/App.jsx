import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowWeWork from "./components/HowWeWork";
import TestimonialsAndCTA from "./components/TestimonialsAndCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <HowWeWork/>
      <TestimonialsAndCTA/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
