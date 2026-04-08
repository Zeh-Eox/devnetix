import { Mail } from "lucide-react";
import { FaGithub, FaGitlab, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              DEV<span className="text-cyan-400">NETIX</span>
            </div>
            <p className="text-gray-400 mb-6">
              Votre partenaire transformation digitale. Excellence, innovation,
              résultats.
            </p>
            <div className="flex gap-4">
              {[Mail, FaLinkedin, FaTwitter, FaGithub, FaGitlab].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-black transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Développement Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Modélisation Mathématique
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Consulting IT
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@devnetix.com</li>
              <li>+226 XXXXXXXX</li>
              <li>Ouagadougou, Burkina Faso</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DEVNETIX. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
