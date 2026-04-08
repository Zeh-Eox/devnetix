import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Cookie,
  Mail,
  FileText,
} from "lucide-react";
import AccordionSection from "@/components/layouts/AccordionSection";
import { stats } from "@/constants";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-blue-600/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center">
          <div className="w-full max-w-5xl">
            <motion.div
              className="text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 text-xs sm:text-sm font-medium tracking-wider uppercase">
                  Vos données sont protégées
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                Politique de{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                  Confidentialité
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl md:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                Chez <span className="text-white font-semibold">DEVNETIX</span>,
                la protection de vos données personnelles est notre priorité
                absolue. Découvrez comment nous collectons, utilisons et
                protégeons vos informations.
              </p>

              {/* Footer info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
                <div className="text-center sm:text-left">
                  <span className="text-white font-semibold">
                    Dernière mise à jour :
                  </span>{" "}
                  07 avril 2026
                </div>

                <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />

                <div>
                  <span className="text-white font-semibold">Version :</span>{" "}
                  1.0
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-y border-white/10 bg-gray-900/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          {/* Introduction */}
          <motion.div
            className="bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-cyan-400" />
              Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              DEVNETIX (« nous », « notre » ou « nos ») s'engage à protéger et à
              respecter votre vie privée. Cette politique de confidentialité
              explique comment nous collectons, utilisons, partageons et
              protégeons vos informations personnelles lorsque vous utilisez nos
              services de développement, data analytics et infrastructure
              réseau.
            </p>
          </motion.div>

          {/* Sections Accordéon */}
          <AccordionSection
            icon={<Database className="w-6 h-6" />}
            title="1. Données collectées"
            defaultOpen={true}
          >
            <p className="mb-4">
              Nous collectons différents types d'informations pour vous fournir
              et améliorer nos services :
            </p>

            <div className="space-y-3">
              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">
                  Informations d'identification
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-400">
                  <li>Nom et prénom</li>
                  <li>Adresse email professionnelle</li>
                  <li>Numéro de téléphone</li>
                  <li>Nom de l'entreprise</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">
                  Données techniques
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-400">
                  <li>Adresse IP</li>
                  <li>Type de navigateur et version</li>
                  <li>Système d'exploitation</li>
                  <li>Pages visitées et durée de visite</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">
                  Données de projet
                </h4>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-400">
                  <li>Informations sur votre projet</li>
                  <li>Besoins et objectifs métier</li>
                  <li>Communications et échanges</li>
                </ul>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection
            icon={<Eye className="w-6 h-6" />}
            title="2. Utilisation des données"
          >
            <p className="mb-4">
              Vos données personnelles sont utilisées pour les finalités
              suivantes :
            </p>

            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <div>
                  <span className="font-semibold text-white">
                    Fourniture de services :
                  </span>{" "}
                  Développement de solutions personnalisées, analyse de données
                  et infrastructure réseau
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <div>
                  <span className="font-semibold text-white">
                    Communication :
                  </span>{" "}
                  Réponse à vos demandes, support technique et mises à jour sur
                  vos projets
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <div>
                  <span className="font-semibold text-white">
                    Amélioration :
                  </span>{" "}
                  Optimisation de nos services et développement de nouvelles
                  fonctionnalités
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <div>
                  <span className="font-semibold text-white">Sécurité :</span>{" "}
                  Protection contre les fraudes et garantie de la sécurité de
                  nos systèmes
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <div>
                  <span className="font-semibold text-white">
                    Conformité légale :
                  </span>{" "}
                  Respect de nos obligations légales et réglementaires
                </div>
              </li>
            </ul>
          </AccordionSection>

          <AccordionSection
            icon={<Lock className="w-6 h-6" />}
            title="3. Sécurité et protection"
          >
            <p className="mb-4">
              Nous mettons en œuvre des mesures de sécurité techniques et
              organisationnelles robustes pour protéger vos données :
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-linear-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  Chiffrement
                </h4>
                <p className="text-sm">
                  SSL/TLS 256-bit pour toutes les communications et stockage
                  chiffré des données sensibles
                </p>
              </div>

              <div className="bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-purple-400" />
                  Accès restreint
                </h4>
                <p className="text-sm">
                  Contrôle d'accès strict, authentification multi-facteurs pour
                  nos équipes
                </p>
              </div>

              <div className="bg-linear-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-400" />
                  Sauvegarde
                </h4>
                <p className="text-sm">
                  Sauvegardes automatiques quotidiennes avec rétention sécurisée
                  de 30 jours
                </p>
              </div>

              <div className="bg-linear-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-orange-400" />
                  Surveillance
                </h4>
                <p className="text-sm">
                  Monitoring 24/7, détection d'intrusion et audits de sécurité
                  réguliers
                </p>
              </div>
            </div>
          </AccordionSection>

          <AccordionSection
            icon={<UserCheck className="w-6 h-6" />}
            title="4. Vos droits (RGPD)"
          >
            <p className="mb-4">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez des droits suivants :
            </p>

            <div className="space-y-3">
              {[
                {
                  title: "Droit d'accès",
                  desc: "Obtenir une copie de vos données personnelles",
                },
                {
                  title: "Droit de rectification",
                  desc: "Corriger ou mettre à jour vos informations",
                },
                {
                  title: "Droit à l'effacement",
                  desc: "Demander la suppression de vos données (« droit à l'oubli »)",
                },
                {
                  title: "Droit à la portabilité",
                  desc: "Récupérer vos données dans un format structuré",
                },
                {
                  title: "Droit d'opposition",
                  desc: "Vous opposer au traitement de vos données",
                },
                {
                  title: "Droit à la limitation",
                  desc: "Demander la limitation du traitement",
                },
              ].map((right, index) => (
                <div
                  key={index}
                  className="flex gap-3 bg-white/5 border border-white/5 rounded-xl p-4"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {right.title}
                    </h4>
                    <p className="text-sm text-gray-400">{right.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4">
              <p className="text-sm">
                Pour exercer vos droits, contactez-nous à{" "}
                <a
                  href="mailto:privacy@devnetix.com"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  privacy@devnetix.com
                </a>
                . Nous répondrons à votre demande dans un délai maximum de 30
                jours.
              </p>
            </div>
          </AccordionSection>

          <AccordionSection
            icon={<Cookie className="w-6 h-6" />}
            title="5. Cookies"
          >
            <p className="mb-4">
              Notre site utilise des cookies pour améliorer votre expérience :
            </p>

            <div className="space-y-3">
              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">
                  Cookies essentiels
                </h4>
                <p className="text-sm text-gray-400">
                  Nécessaires au fonctionnement du site (authentification,
                  sécurité, préférences)
                </p>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">
                  Cookies analytiques
                </h4>
                <p className="text-sm text-gray-400">
                  Analyse de l'utilisation du site pour améliorer nos services
                  (Google Analytics)
                </p>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">
                  Cookies de performance
                </h4>
                <p className="text-sm text-gray-400">
                  Optimisation de la vitesse et de la performance du site
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm">
              Vous pouvez gérer vos préférences de cookies à tout moment via les
              paramètres de votre navigateur.
            </p>
          </AccordionSection>

          <AccordionSection
            icon={<Mail className="w-6 h-6" />}
            title="6. Partage des données"
          >
            <p className="mb-4">
              Nous ne vendons jamais vos données personnelles. Nous pouvons
              partager vos informations uniquement dans les cas suivants :
            </p>

            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <div>
                  <span className="font-semibold text-white">
                    Prestataires de services :
                  </span>{" "}
                  Partenaires techniques pour l'hébergement cloud (AWS, Azure),
                  outils analytiques, services de paiement
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <div>
                  <span className="font-semibold text-white">
                    Obligations légales :
                  </span>{" "}
                  Autorités compétentes en cas de demande légale ou pour
                  protéger nos droits
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <div>
                  <span className="font-semibold text-white">
                    Avec votre consentement :
                  </span>{" "}
                  Toute autre situation nécessite votre accord explicite
                </div>
              </li>
            </ul>

            <div className="mt-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
              <p className="text-sm">
                <span className="font-semibold text-white">Important :</span>{" "}
                Tous nos prestataires sont contractuellement tenus de respecter
                le RGPD et de protéger vos données.
              </p>
            </div>
          </AccordionSection>

          <AccordionSection
            icon={<FileText className="w-6 h-6" />}
            title="7. Conservation des données"
          >
            <p className="mb-4">
              Nous conservons vos données personnelles uniquement pendant la
              durée nécessaire aux finalités décrites :
            </p>

            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl p-4">
                <div>
                  <h4 className="font-semibold text-white">
                    Données de contact
                  </h4>
                  <p className="text-sm text-gray-400">
                    Prospects et clients actifs
                  </p>
                </div>
                <div className="text-cyan-400 font-bold">3 ans</div>
              </div>

              <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl p-4">
                <div>
                  <h4 className="font-semibold text-white">Données projet</h4>
                  <p className="text-sm text-gray-400">
                    Documents et communications
                  </p>
                </div>
                <div className="text-cyan-400 font-bold">5 ans</div>
              </div>

              <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl p-4">
                <div>
                  <h4 className="font-semibold text-white">
                    Données comptables
                  </h4>
                  <p className="text-sm text-gray-400">
                    Factures et transactions
                  </p>
                </div>
                <div className="text-cyan-400 font-bold">10 ans</div>
              </div>

              <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl p-4">
                <div>
                  <h4 className="font-semibold text-white">Logs techniques</h4>
                  <p className="text-sm text-gray-400">
                    Journaux d'accès et sécurité
                  </p>
                </div>
                <div className="text-cyan-400 font-bold">12 mois</div>
              </div>
            </div>

            <p className="mt-4 text-sm">
              À l'issue de ces périodes, vos données sont supprimées de manière
              sécurisée et irréversible.
            </p>
          </AccordionSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-linear-to-b from-transparent to-gray-900/50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">
              Des questions sur notre politique de confidentialité ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions
              concernant la protection de vos données personnelles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:privacy@devnetix.com"
                className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white inline-flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                privacy@devnetix.com
              </motion.a>

              <motion.a
                href="/"
                className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5 transition-all inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Retour à l'accueil
              </motion.a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500">
                <span className="text-white font-semibold">
                  Délégué à la Protection des Données (DPO) :
                </span>{" "}
                dpo@devnetix.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>
              © 2026 <span className="text-white font-bold">DEVNETIX</span>.
              Tous droits réservés.
            </div>
            {/* <div className="flex gap-6">
              <a
                href="/mentions-legales"
                className="hover:text-cyan-400 transition-colors"
              >
                Mentions légales
              </a>
              <a href="/cgv" className="hover:text-cyan-400 transition-colors">
                CGV
              </a>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
