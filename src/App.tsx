import { Route, Routes } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Contact from "@/pages/Contact";

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden scroll-smooth">
      <Navigation />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/policy" Component={PrivacyPolicy} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </div>
  );
};

export default App;
