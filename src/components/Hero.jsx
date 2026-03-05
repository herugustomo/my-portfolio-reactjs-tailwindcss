import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <p className="text-gray-400 mb-4">Hi, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Heru Gustomo
          </h1>
          <h2 className="text-2xl md:text-6xl font-semibold text-blue-500 mb-6">
            Frontend Developer
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            I build modern and responsive websites using React JS and Tailwind
            CSS. Focused on clean design, performance, and user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-rounded-xl font-medium">
              View Projects
            </button>
            <button className="px-6 py-3 border-2 border-gray-600  hover:border-white transition rounded-xl">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
