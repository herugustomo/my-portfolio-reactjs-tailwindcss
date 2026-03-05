export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Heru Gustomo. All rights reserved.
          </p>
          {/* Right - Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
