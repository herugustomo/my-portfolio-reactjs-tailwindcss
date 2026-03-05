const skills = [
  {
    name: "HTML",
    desc: "Semantic & accessible markup",
  },
  {
    name: "CSS",
    desc: "Modern layout & responsive design",
  },
  {
    name: "JavaScript",
    desc: "ES6+, DOM manipulation",
  },
  {
    name: "React JS",
    desc: "Component-based UI development",
  },
  {
    name: "Tailwind CSS",
    desc: "Utility-first styling",
  },
  {
    name: "Git",
    desc: "Version control & collaboration",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Skill</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Technologies and tools I use to build modern and responsive web
          applications.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border border-gray-800 rounded-xl p-6 hover:border-blue-800 transition hover:-translate-y-2 hover:shadow-lg shadow-blue-800"
            >
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
