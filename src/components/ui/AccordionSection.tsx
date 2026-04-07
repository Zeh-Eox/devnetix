import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const AccordionSection: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ icon, title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shrink-0">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
        </div>
        <div className="text-cyan-400">
          {isOpen ? (
            <ChevronUp className="w-6 h-6" />
          ) : (
            <ChevronDown className="w-6 h-6" />
          )}
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-gray-300 leading-relaxed space-y-4">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AccordionSection;
