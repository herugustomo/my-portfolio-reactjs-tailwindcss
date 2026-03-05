import { Menu, Section, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-wide">Heru GT</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-400">
          <a
            href="#about"
            className={`hover:text-blue-500 ${activeSection === "about" ? "text-blue-500 font-semibold" : ""}`}
          >
            About
          </a>
          <a
            href="#skills"
            className={`hover:text-blue-500 ${activeSection === "skills" ? "text-blue-500 font-semibold" : ""}`}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`hover:text-blue-500 ${activeSection === "projects" ? "text-blue-500 font-semibold" : ""}`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`hover:text-blue-500 ${activeSection === "contact" ? "text-blue-500 font-semibold" : ""}`}
          >
            Contact
          </a>
        </ul>

        {/* Hamburger Menu */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* Library Icon lucide-react */}
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed left-0 w-full bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 text-xl transition-all duration-300 ${isOpen ? "top-16 h-[calc(100vh-4rem)] opacity-100" : "top-16 h-0 opacity-0 overflow-hidden"}`}
        >
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-500"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
