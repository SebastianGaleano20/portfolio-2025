import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  projectUrl: string;
  codeUrl: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  projectUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <Card className="bg-white border-0 shadow-md hover:shadow-xl smooth-transition transform hover:-translate-y-2 hover:scale-105 overflow-hidden group">
      <div className="aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={225}
          className="w-full h-full object-cover smooth-transition group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-portfolio-green text-portfolio-green hover:bg-portfolio-green hover:text-white smooth-transition bg-transparent focus:ring-2 focus:ring-portfolio-green focus:ring-offset-2"
            asChild
          >
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Project
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-100 smooth-transition bg-transparent focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            asChild
          >
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
