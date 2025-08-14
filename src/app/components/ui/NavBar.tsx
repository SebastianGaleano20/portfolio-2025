import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            NombreDev
          </Link>
          <div className="flex space-x-4">
            <Link
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Sobre mí
            </Link>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Proyectos
            </Link>
            <Link
              href="#skills"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Habilidades
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
