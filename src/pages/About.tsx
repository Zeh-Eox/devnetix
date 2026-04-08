import React from "react";
import { motion } from "framer-motion";
import { Target, Heart, Zap, Shield, Clock, ArrowRight } from "lucide-react";
import { expertise, statsAbout, team, timeline, values } from "@/constants";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-blue-600/20 via-black to-black" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
                Notre Histoire
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-linear-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                À Propos
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Nous sommes une startup tech passionnée qui{" "}
              <span className="text-white font-semibold">
                transforme les idées
              </span>{" "}
              en solutions digitales de nouvelle génération.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="group px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Rejoindre l'aventure
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nos projets
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10 bg-gray-900/30 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsAbout.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 text-white mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Target className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-sm font-medium">
                  Notre Mission
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Propulser votre entreprise dans{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                  l'ère digitale
                </span>
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Chez DEVNETIX, nous croyons que la technologie doit être un
                levier de croissance accessible à toutes les entreprises. Notre
                mission est de démocratiser l'excellence technologique en
                offrant des solutions sur mesure qui allient innovation,
                performance et scalabilité.
              </p>

              {/* <p className="text-gray-300 leading-relaxed text-lg">
                Nous ne sommes pas juste un prestataire tech — nous sommes votre
                partenaire stratégique dans la transformation digitale.
              </p> */}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12">
                <div className="absolute top-0 right-0 w-48 h-48 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />

                <div className="relative space-y-6">
                  {[
                    {
                      icon: Zap,
                      text: "Solutions innovantes et performantes",
                    },
                    {
                      icon: Clock,
                      text: "Livraison rapide et itérative",
                    },
                    {
                      icon: Shield,
                      text: "Sécurité et conformité garanties",
                    },
                    {
                      icon: Heart,
                      text: "Support dédié et personnalisé",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-white font-medium">
                          {item.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-linear-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos <span className="text-cyan-400">Valeurs</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${value.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}
                  />

                  <div
                    className={`inline-flex p-3 rounded-xl bg-linear-to-br ${value.color} text-white mb-6`}
                  >
                    {value.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notre <span className="text-cyan-400">Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Trois piliers technologiques pour accompagner votre croissance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((exp, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${exp.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}
                  />

                  <div
                    className={`inline-flex p-3 rounded-xl bg-linear-to-br ${exp.color} text-white mb-6`}
                  >
                    {exp.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-linear-to-b from-gray-900/50 to-transparent relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notre <span className="text-cyan-400">Parcours</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              De startup ambitieuse à référence tech en quelques années
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500 via-blue-500 to-transparent hidden md:block" />

            <div className="space-y-12">
              {timeline.map((event, index) => {
                const Icon = event.icon;

                return (
                  <motion.div
                    key={index}
                    className="relative flex gap-8 items-start"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Icon */}
                    <div className="relative z-10 shrink-0">
                      <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
                      <div className="text-cyan-400 font-bold text-sm mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-400">{event.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              L'<span className="text-cyan-400">Équipe</span> Fondatrice
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Des experts passionnés qui ont uni leurs forces pour créer
              l'excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300">
                  {/* Avatar */}
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
                    <p className="text-cyan-400 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Effet de brillance */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-cyan-600/20" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Envie de{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                faire partie
              </span>{" "}
              de l'aventure ?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Rejoignez notre équipe de passionnés ou devenez notre prochain
              client. Ensemble, construisons le futur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Nous rejoindre
              </motion.button>

              <motion.button
                className="px-12 py-5 border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Démarrer un projet
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              © 2026 <span className="text-white font-bold">DEVNETIX</span>.
              Tous droits réservés.
            </div>
            <div className="flex gap-6">
              {/* <a
                href="/mentions-legales"
                className="hover:text-cyan-400 transition-colors"
              >
                Mentions légales
              </a> */}
              <a
                href="/policy"
                className="hover:text-cyan-400 transition-colors"
              >
                Confidentialité
              </a>
              {/* <a href="/cgv" className="hover:text-cyan-400 transition-colors">
                CGV
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
