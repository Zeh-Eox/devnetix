import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Cpu, ChevronLeft, ChevronRight } from "lucide-react";
import { teamMembers } from "../constants";

const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const totalCards = teamMembers.length;

  // Navigation circulaire
  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrentIndex((prev) => {
        const next = prev + dir;
        if (next < 0) return totalCards - 1;
        if (next >= totalCards) return 0;
        return next;
      });
    },
    [totalCards],
  );

  // Auto-play optionnel (désactivé par défaut)
  // useEffect(() => {
  //   const interval = setInterval(() => paginate(1), 2000);
  //   return () => clearInterval(interval);
  // }, [paginate]);

  // Obtenir les cartes visibles avec effet circulaire
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < cardsPerView; i++) {
      const index = (currentIndex + i) % totalCards;
      cards.push({ ...teamMembers[index], displayIndex: i });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  const totalDots = totalCards;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden" id="equipe">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Notre <span className="text-cyan-400">Équipe</span> d&apos;Experts
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto text-pretty">
            Des passionnés de technologie dédiés à votre succès
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Bouton Précédent */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 bg-cyan-500/20 hover:bg-cyan-500/40 backdrop-blur-md border border-cyan-500/50 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Précédent"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
        </button>

        {/* Bouton Suivant */}
        <button
          onClick={() => paginate(1)}
          className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 bg-cyan-500/20 hover:bg-cyan-500/40 backdrop-blur-md border border-cyan-500/50 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Suivant"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
        </button>

        {/* Carrousel */}
        <div className="overflow-hidden py-8 px-8 sm:px-12">
          <AnimatePresence mode="popLayout" custom={direction}>
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
              className="flex justify-center gap-6 lg:gap-8"
            >
              {visibleCards.map((member) => (
                <motion.div
                  key={`${member.id}-${member.displayIndex}`}
                  className="shrink-0 w-full max-w-75 sm:max-w-70 lg:max-w-[320px] group"
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 h-full hover:border-cyan-500/50 transition-colors duration-300 shadow-xl shadow-black/20">
                    {/* Avatar */}
                    <div
                      className={`w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-linear-to-br ${member.color} p-1 mb-6 mx-auto`}
                    >
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-xl lg:text-2xl font-bold text-white">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-lg lg:text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-3">
                        {member.role}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-sm text-gray-400">
                        <Cpu className="w-3 h-3" />
                        {member.domain}
                      </div>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicateurs de pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black ${
                index === currentIndex
                  ? "w-8 bg-cyan-400"
                  : "w-2 bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Aller au membre ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500 text-sm">
        <span className="hidden sm:inline">
          Utilisez les flèches ou les indicateurs pour naviguer
        </span>
        <span className="sm:hidden">Swipez ou utilisez les flèches</span>
      </div>
    </section>
  );
};

export default TeamCarousel;
