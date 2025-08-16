import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowWeWork from "./components/HowWeWork";
import TestimonialsAndCTA from "./components/TestimonialsAndCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Scrolltotop from "./Scrolltotop";
import ViewWork from "./components/ViewWork";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <HowWeWork/>
      <ViewWork/>
      <TestimonialsAndCTA/>
      <Contact/>
      <Footer/>
      <Scrolltotop/>
      
    </>
  );
}

export default App;
