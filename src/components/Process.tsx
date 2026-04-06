import { steps } from "../constants";
import { motion } from "framer-motion";

const Process: React.FC = () => {
  return (
    <section className="py-32 bg-linear-to-b from-black to-gray-900" id="methodologie">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Notre <span className="text-cyan-400">Méthodologie</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-linear-to-r from-cyan-500/50 to-transparent" />
              )}

              <div className="relative z-10 bg-gray-900 border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 mb-6">
                  {step.icon}
                </div>
                <div className="text-5xl font-bold text-white/10 absolute top-4 right-4">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
