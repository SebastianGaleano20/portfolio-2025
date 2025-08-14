import Hero from "@/components/sections/HeroSection";
import ProjectCard from "@/components/sections/ProjectsSection";
import Footer from "@/components/ui/Footer";

export default function HomePage() {
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      projectUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/clean-task-management-dashboard.png",
      projectUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/modern-weather-app.png",
      projectUrl: "#",
      codeUrl: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-white">
      <Hero />
      <section className="px-4 py-16 bg-gray-50">
        <section className="max-w-6xl mx-auto">
          <section className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work showcasing different technologies
              and problem-solving approaches.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                projectUrl={project.projectUrl}
                codeUrl={project.codeUrl}
              />
            ))}
          </section>
        </section>
      </section>
      <Footer />
    </section>
  );
}
