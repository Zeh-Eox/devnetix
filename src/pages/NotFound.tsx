import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Search,
  ArrowLeft,
  Zap,
  AlertCircle,
  RefreshCw,
  Mail,
  FileQuestion,
} from "lucide-react";

const NotFoundPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [glitchText, setGlitchText] = useState("404");

  // Animation de particules en arrière-plan
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effet de glitch sur le texte 404
  useEffect(() => {
    const glitchChars = ["4", "0", "4", "█", "▓", "▒", "░"];
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const randomGlitch = glitchChars
          .map(
            () => glitchChars[Math.floor(Math.random() * glitchChars.length)],
          )
          .join("");
        setGlitchText(randomGlitch);
        setTimeout(() => setGlitchText("404"), 100);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const quickLinks = [
    { icon: <Home className="w-5 h-5" />, label: "Accueil", path: "/" },
    {
      icon: <Search className="w-5 h-5" />,
      label: "Politique",
      path: "/policy",
    },
    {
      icon: <FileQuestion className="w-5 h-5" />,
      label: "À propos",
      path: "/about",
    },
    { icon: <Mail className="w-5 h-5" />, label: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden pt-16">
      {/* Canvas pour les particules */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Pattern de fond */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Orbes décoratifs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge d'erreur */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 backdrop-blur-sm mb-8"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium tracking-wider uppercase">
              Erreur 404
            </span>
          </motion.div>

          {/* Grand 404 avec effet glitch */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1
              className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter"
              style={{
                background:
                  "linear-gradient(to right, #22d3ee, #3b82f6, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
                animation: "gradient 3s ease infinite",
              }}
            >
              {glitchText}
            </h1>
          </motion.div>

          {/* Titre et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                introuvable
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
              Oups ! Il semblerait que cette page ait disparu dans le
              cyberespace.
            </p>

            <p className="text-lg text-gray-500 mb-12">
              Mais ne vous inquiétez pas, notre équipe tech est sur le coup ! 🚀
            </p>
          </motion.div>

          {/* Boutons d'action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="/"
              className="group px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              Retour à l'accueil
            </motion.a>

            <motion.button
              onClick={() => window.history.back()}
              className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Page précédente
            </motion.button>

            <motion.button
              onClick={() => window.location.reload()}
              className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="w-5 h-5" />
              Réessayer
            </motion.button>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider font-semibold">
              Liens rapides
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.path}
                  className="group bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <span className="text-white font-medium text-sm">
                      {link.label}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Message d'erreur technique (optionnel, style console) */}
          <motion.div
            className="mt-16 max-w-2xl mx-auto pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-xl p-6 text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-500 text-xs font-mono">
                  terminal.log
                </span>
              </div>

              <div className="font-mono text-sm space-y-2">
                <div className="text-gray-500">
                  <span className="text-cyan-400">$</span> devnetix status
                </div>
                <div className="text-yellow-400">
                  <Zap className="w-3 h-3 inline mr-2" />
                  WARNING: Route not found
                </div>
                <div className="text-gray-400">
                  Error Code: <span className="text-red-400">404</span>
                </div>
                <div className="text-gray-400">
                  Requested URL:{" "}
                  <span className="text-cyan-400">
                    {window.location.pathname}
                  </span>
                </div>
                <div className="text-green-400 mt-4">
                  ✓ System operational - All services running
                </div>
                <div className="text-gray-500">
                  <span className="text-cyan-400">$</span>{" "}
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message de support */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <p className="text-gray-500 text-sm">
              Besoin d'aide ?{" "}
              <a
                href="mailto:support@devnetix.com"
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
              >
                Contactez notre support
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer minimal */}
      <footer className="absolute bottom-0 left-0 right-0 border-t border-white/10 py-6 bg-black/50 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              © 2026 <span className="text-white font-bold">DEVNETIX</span>.
              Tous droits réservés.
            </div>
            <div className="flex gap-6">
              <a
                href="/policy"
                className="hover:text-cyan-400 transition-colors"
              >
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Keyframes pour l'animation du gradient */}
      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
