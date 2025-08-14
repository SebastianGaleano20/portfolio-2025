"use client";
import ProfileImage from "../ui/ProfileImage";
import SkillsGrid from "../sections/SkillGrid";
import Head from "next/head";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Me | Fullstack Developer</title>
        <meta
          name="description"
          content="Learn more about my skills and experience as a Fullstack Developer"
        />
      </Head>

      <main className="min-h-screen py-12 bg-gradient-to-b from-blue-50 to-white">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-gray-800 mb-12"
          >
            About Me
          </motion.h1>

          <section className="flex flex-col md:flex-row gap-12 items-center">
            <section className="w-full md:w-1/3">
              <ProfileImage
                src="/profile.jpg"
                alt="Profile picture"
                className="max-w-xs mx-auto"
              />
            </section>

            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-2/3"
            >
              <section className="prose prose-lg text-gray-600 max-w-none">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Fullstack Developer
                </h2>
                <p className="mb-4">
                  Passionate about creating elegant solutions to complex
                  problems. With 2 years of experience in web development, I
                  specialize in building responsive, accessible, and performant
                  applications using modern technologies.
                </p>
                <p className="mb-6">
                  My approach combines clean code principles with user-centered
                  design. I enjoy the entire development process, from concept
                  to deployment, and I m always eager to learn new technologies
                  and methodologies.
                </p>
              </section>

              <SkillsGrid />
            </motion.section>
          </section>
        </section>
      </main>
    </>
  );
}
