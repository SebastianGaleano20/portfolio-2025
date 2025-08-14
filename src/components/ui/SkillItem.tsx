import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillItemProps {
  icon: ReactNode;
  name: string;
  delay?: number;
}

const SkillItem = ({ icon, name, delay = 0 }: SkillItemProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-blue-50"
    >
      <section className="w-10 h-10 text-blue-600 mb-2">{icon}</section>
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </motion.section>
  );
};

export default SkillItem;
