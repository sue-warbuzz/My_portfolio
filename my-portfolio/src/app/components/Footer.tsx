export default function Footer() {
    return (
      <footer className="bg-[#0f172a] border-t border-gray-700 text-gray-400 py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Manu Sharma. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              href="https://github.com/sue-warbuzz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              Resume
            </a>
            <a
              href="mailto:you@example.com"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    )
  }
  