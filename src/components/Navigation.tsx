import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a
          className="cursor-pointer text-2xl font-bold text-white tracking-tighter"
          href="/"
        >
          DEV<span className="text-cyan-400">NETIX</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "Equipe", "Methodologie", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              {item}
            </a>
          ))}
          <a
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition-colors cursor-pointer"
            href="#contact"
          >
            Démarrer
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-black/95 backdrop-blur-md ${isMobileMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
      >
        <div className="px-4 py-6 space-y-4">
          {["Services", "Equipe", "Methodologie", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
