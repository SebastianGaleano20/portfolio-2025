import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="px-4 py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 smooth-transition">
          Hi, I m <span className="portfolio-green">Sebastian Galeano</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Full-Stack Developer crafting beautiful, functional web experiences
          with modern technologies and clean code.
        </p>
        <Button
          size="lg"
          className="bg-portfolio-green hover:bg-[#07a82a] text-black px-8 py-3 text-lg smooth-transition transform hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-portfolio-green focus:ring-offset-2"
        >
          View My Work
        </Button>
      </div>
    </section>
  );
}
