import { Route, Routes, useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Contact from "@/pages/Contact";
import AboutPage from "@/pages/About";
import NotFoundPage from "@/pages/NotFound";

const App: React.FC = () => {
  const location = useLocation();
  const validRoutes = ["/", "/policy", "/contact", "/about"];
  const isNotFound = !validRoutes.includes(location.pathname);

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden scroll-smooth">
      {!isNotFound && <Navigation />}

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/policy" Component={PrivacyPolicy} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={AboutPage} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </div>
  );
};

export default App;