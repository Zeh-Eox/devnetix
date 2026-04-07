import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, User, Building, MessageSquare, Send } from "lucide-react";

const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="py-32 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-cyan-600/20" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge premium */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Démarrez votre projet aujourd'hui
              </span>
            </motion.div>

            {/* Titre principal */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-4">
              Prêt à{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-blue-500 inline-block">
                transformer
              </span>
              <br className="hidden sm:block" />
              <span className="block sm:inline"> votre business ?</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
              Discutons de votre projet et construisons ensemble la solution
              digitale qui propulsera votre entreprise vers le succès.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-cyan-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Contactez-nous maintenant
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>

              {/* <motion.button
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/30 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir nos réalisations
              </motion.button> */}
            </div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Réponse en 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Sans engagement</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto pointer-events-none">
              <motion.div
                className="relative w-full max-w-lg my-8 bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden pointer-events-auto"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Orbe décoratif */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="relative border-b border-white/10 p-6">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Parlons de votre{" "}
                      <span className="text-cyan-400">projet</span>
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Remplissez le formulaire et notre équipe vous contactera
                    sous 24h
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="relative p-6 space-y-4"
                >
                  {/* Nom */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Nom complet
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Jean Dupont"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:bg-white/10 focus:outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Email professionnel
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jean.dupont@entreprise.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:bg-white/10 focus:outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Entreprise */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Entreprise
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors">
                        <Building className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Nom de votre entreprise"
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:bg-white/10 focus:outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Parlez-nous de votre projet
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-gray-500 group-focus-within:text-cyan-400 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Décrivez brièvement vos besoins et objectifs..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:bg-white/10 focus:outline-none transition-all resize-none text-sm"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </motion.button>

                  <p className="text-center text-xs text-gray-500">
                    En soumettant ce formulaire, vous acceptez d'être contacté
                    par notre équipe
                  </p>
                </form>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CTA;
