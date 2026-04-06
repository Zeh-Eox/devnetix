import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TeamCarousel from "./components/InfiniteTeamScroll";
import Navigation from "./components/Navigation";
import Process from "./components/Process";
import Services from "./components/Services";

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <TeamCarousel />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
