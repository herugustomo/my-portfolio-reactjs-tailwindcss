import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Description */}
          <div>
            <p className="text-gray-400 leading-relaxed mb-6">
              I am a Frontend Developer focused on building clean, responsive,
              and modern web interfaces using React JS and Tailwind CSS.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              I enjoy turning ideas into real digital experiences with attention
              to detail, performance, and user experience.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Currently focused on improving my skills and building strong
              portfolio projects to work with clients and companies worldwide.
            </p>
          </div>
          {/* Right - Quick Info */}
          <div className="space-y-6">
            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Experience</h3>
              <p className="text-gray-400 text-sm">
                Building personal and freelance web projects.
              </p>
            </div>
            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Specialization</h3>
              <p className="text-gray-400 text-sm">
                React JS, Tailwind CSS, Responsive Design.
              </p>
            </div>
            <div className="border border-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Goal</h3>
              <p className="text-gray-400 text-sm">
                Become a professional frontend developer and work with
                real-world clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
