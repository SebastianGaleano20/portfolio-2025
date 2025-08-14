import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import type { ProjectCardProps } from "@/types/components/sections/index";

export default function ProjectCard({
  title,
  description,
  image,
  projectUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <Card className="bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden group">
      <section className="aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={225}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </section>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <section className="flex gap-3">
          <Button asChild variant="primary" size="sm" className="flex-1">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </a>
          </Button>
          <Button asChild variant="primary" size="sm" className="flex-1">
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        </section>
      </CardContent>
    </Card>
  );
}
