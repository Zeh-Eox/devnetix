import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];

    // Adapte le nombre de particules selon la taille de l'écran
    const particleCount =
      window.innerWidth < 768
        ? 30 // Mobile/Téléphone
        : window.innerWidth < 1024
          ? 60 // Tablette
          : 100; // Laptop/Desktop

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(100, 200, 255, 0.5)";
        ctx.fill();

        // Connexions
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.1 * (1 - distance / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 sm:pt-24 lg:pt-12">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
              Transformation Digitale
            </span>
          </motion.div>

          {/* Titre principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
            <span className="bg-linear-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              DEVNETIX
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-4">
            L'excellence technologique à votre service.
            <span className="text-white font-semibold"> Développement</span>,
            <span className="text-white font-semibold"> Data</span> &
            <span className="text-white font-semibold"> Modélisation</span> pour
            propulser votre entreprise dans le futur.
          </p>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none">
            <motion.a
              className="cursor-pointer group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white text-sm sm:text-base flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
            >
              Démarrer un projet
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              className="cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-full font-semibold text-white text-sm sm:text-base hover:bg-white/5 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
            >
              Nos services
            </motion.a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-white/10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: "150+", label: "Projets Livrés" },
            { value: "98%", label: "Satisfaction Client" },
            { value: "50+", label: "Experts Tech" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Orbs - Adaptés pour mobile */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
};

export default Hero;
