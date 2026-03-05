const projects = [
  {
    title: "Personal Portfolio",
    desc: "A modern personal portfolio website built with React JS and Tailwind CSS.",
    tech: ["React JS", "Tailwind CSS"],
    demo: "Live Demo",
    github: "GitHub",
  },
  {
    title: "Landing Page Website",
    desc: "Responsive landing page design focused on clean UI and performance.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "Live Demo",
    github: "GitHub",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Here are some of the projects I have built to improve my skills and
          solve real problems.
        </p>
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Card */}
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-800 rounded-xl p-6 hover:border-blue-800 transition hover:-translate-y-2 shadow-blue-800 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{project.desc}</p>
              <div className="flex gap-4 text-sm text-blue-500 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-blue-400 transition">
                  {project.demo}
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  {project.github}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
