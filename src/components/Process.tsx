import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { accentColors, steps } from "@/constants";

const Process: React.FC = () => {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      id="methodologie"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black opacity-90" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/30 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Comment nous travaillons
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-balance">
            Notre{" "}
            <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Méthodologie
            </span>
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-pretty">
            Une approche structurée et éprouvée pour transformer vos idées en
            solutions digitales performantes.
          </p>
        </motion.div>

        {/* Steps - Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Main timeline line */}
          <div className="absolute top-24 left-0 right-0 h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const colors =
                accentColors[step.accent as keyof typeof accentColors];
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  {/* Connector dot on timeline */}
                  <div className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      className={`w-4 h-4 rounded-full bg-linear-to-br ${colors.gradient} shadow-lg ${colors.glow}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                    />
                  </div>

                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-24 left-[calc(50%+8px)] right-0 -translate-y-1/2 flex items-center justify-center">
                      <ArrowRight
                        className={`w-4 h-4 ${colors.text} opacity-40`}
                      />
                    </div>
                  )}

                  {/* Card */}
                  <motion.div
                    className={`group relative bg-zinc-900/50 backdrop-blur-sm border ${colors.border} rounded-2xl p-8 transition-all duration-300 hover:bg-zinc-900/80 hover:border-opacity-50 hover:shadow-2xl ${colors.glow}`}
                    whileHover={{ y: -4 }}
                  >
                    {/* Step number */}
                    <span
                      className={`absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-linear-to-br ${colors.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border mb-6 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className={`w-7 h-7 ${colors.text}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hover glow effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-linear-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Steps - Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical timeline line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-8 w-px bg-linear-to-b from-cyan-500/50 via-emerald-500/50 to-rose-500/50" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const colors =
                accentColors[step.accent as keyof typeof accentColors];
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  className="relative pl-16 md:pl-20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-8 top-8 -translate-x-1/2">
                    <div
                      className={`w-4 h-4 rounded-full bg-linear-to-br ${colors.gradient} shadow-lg ring-4 ring-zinc-900`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`relative bg-zinc-900/50 backdrop-blur-sm border ${colors.border} rounded-xl p-6 transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border`}
                      >
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`text-xs font-medium ${colors.text} ${colors.bg} px-2 py-0.5 rounded-full`}
                          >
                            Étape {index + 1}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
