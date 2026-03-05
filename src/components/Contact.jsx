import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Interested in working together? Feel free to reach out through the
          form or contact me directly.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">herugt21@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/heru-gustomo-b324b1282/"
                className="text-gray-400 text-sm hover:underline"
              >
                linkedin.com/in/heru-gustomo
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/herugustomo"
                className="text-gray-400 text-sm hover:underline"
              >
                github.com/herugustomo
              </a>
            </div>
          </div>
          {/* Right - Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                placeholder="Youre name"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                placeholder="Youre email"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                placeholder="Youre message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-xl font-medium"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
