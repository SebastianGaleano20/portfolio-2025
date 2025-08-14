import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "#",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-portfolio-green smooth-transition transform hover:scale-110 focus:text-portfolio-green focus:outline-none focus:ring-2 focus:ring-portfolio-green focus:ring-offset-2 focus:ring-offset-black rounded-md p-1"
                  aria-label={social.name}
                  target={social.name === "Email" ? "_self" : "_blank"}
                  rel={
                    social.name === "Email" ? undefined : "noopener noreferrer"
                  }
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
