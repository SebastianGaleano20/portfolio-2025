"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProfileImageProps } from "@/types/components/ui";

const ProfileImage = ({ src, alt, className = "" }: ProfileImageProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-xl shadow-lg ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={500}
        className="w-full h-auto object-cover"
        priority
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
      />
      <section className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-blue-600/10" />
    </motion.section>
  );
};

export default ProfileImage;
