import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TeamCarousel from "../components/TeamCarousel";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden scroll-smooth">
      <Hero />
      <Services />
      <TeamCarousel />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
