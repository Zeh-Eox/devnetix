import { services } from "../constants";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Domaines d'<span className="text-cyan-400">Excellence</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une expertise complète pour accompagner votre transformation
            digitale de A à Z
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div
                className="absolute inset-0 bg-linear-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />

              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}
                />

                <div
                  className={`inline-flex p-3 rounded-xl bg-linear-to-br ${service.color} text-white mb-6`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${service.color}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.div
                  className="mt-8 flex items-center gap-2 text-cyan-400 font-medium cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  En savoir plus <ChevronRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
