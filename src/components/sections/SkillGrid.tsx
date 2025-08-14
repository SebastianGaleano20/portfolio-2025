import {
  CodeBracketIcon,
  CpuChipIcon,
  ServerIcon,
  CommandLineIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import SkillItem from "../ui/SkillItem";
import { motion } from "framer-motion";

const SkillsGrid = () => {
  const skills = [
    { icon: <CodeBracketIcon className="w-full h-full" />, name: "Frontend" },
    { icon: <ServerIcon className="w-full h-full" />, name: "Backend" },
    { icon: <CpuChipIcon className="w-full h-full" />, name: "DevOps" },
    { icon: <CommandLineIcon className="w-full h-full" />, name: "CLI Tools" },
    { icon: <PaintBrushIcon className="w-full h-full" />, name: "UI/UX" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-12"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">My Skills</h3>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <SkillItem
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            delay={index}
          />
        ))}
      </section>
    </motion.section>
  );
};

export default SkillsGrid;
