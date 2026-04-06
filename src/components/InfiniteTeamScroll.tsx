import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { teamMembers } from "../constants";
import { Cpu, ChevronLeft, ChevronRight } from "lucide-react";

const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Nombre de cartes visibles à la fois
  const cardsPerView = 3;
  const totalSlides = Math.ceil(teamMembers.length / cardsPerView);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return totalSlides - 1;
      if (next >= totalSlides) return 0;
      return next;
    });
  };

  const getCurrentMembers = () => {
    const start = currentIndex * cardsPerView;
    return teamMembers.slice(start, start + cardsPerView);
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="equipe">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Notre <span className="text-cyan-400">Équipe</span> d'Experts
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des passionnés de technologie dédiés à votre succès
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Bouton Précédent */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-cyan-500/20 hover:bg-cyan-500/40 backdrop-blur-md border border-cyan-500/50 rounded-full p-3 transition-all duration-300 hover:scale-110"
          aria-label="Précédent"
        >
          <ChevronLeft className="w-6 h-6 text-cyan-400" />
        </button>

        {/* Bouton Suivant */}
        <button
          onClick={() => paginate(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-cyan-500/20 hover:bg-cyan-500/40 backdrop-blur-md border border-cyan-500/50 rounded-full p-3 transition-all duration-300 hover:scale-110"
          aria-label="Suivant"
        >
          <ChevronRight className="w-6 h-6 text-cyan-400" />
        </button>

        {/* Carrousel */}
        <div className="overflow-hidden py-8">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="flex gap-8 justify-center"
            >
              {getCurrentMembers().map((member) => (
                <motion.div
                  key={member.id}
                  className="shrink-0 w-80 group"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-colors duration-300">
                    {/* Avatar placeholder avec gradient */}
                    <div
                      className={`w-24 h-24 rounded-full bg-linear-to-br ${member.color} p-1 mb-6 mx-auto`}
                    >
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-2xl font-bold text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-2">
                        {member.role}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-sm text-gray-400">
                        <Cpu className="w-3 h-3" />
                        {member.domain}
                      </div>
                    </div>

                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicateurs de pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-cyan-400"
                  : "w-2 bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Aller à la slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-12 text-gray-500 text-sm">
        Utilisez les flèches ou les indicateurs pour naviguer
      </div>
    </section>
  );
};

export default TeamCarousel;
