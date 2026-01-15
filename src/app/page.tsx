import { Hero } from "@/components/Hero";
export const metadata = {
  title: "Strapi + Next.js Portfolio",
  description: "A portfolio website built with Strapi and Next.js",
};
export default function Home() {
  return (
    <section className="min-h-screen bg-white">
      <Hero />
    </section>
  );
}
