import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-12 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>

      <div className="flex flex-col sm:flex-row sm:justify-center gap-6 mb-8 text-center">
        <div className="flex items-center gap-2 justify-center">
          <FaEnvelope className="text-primary" />
          <a href="mailto:vidhyavi.vp@gmail.com" className="hover:underline">
            vidhyavi.vp@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <FaPhone className="text-primary" />
          <a
            href="https://wa.me/919633313965"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            WhatsApp
          </a>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <FaGithub className="text-primary" />
          <a
            href="https://github.com/Vidhya-mvi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <FaLinkedin className="text-primary" />
          <a
            href="https://www.linkedin.com/in/vidhya-m18/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Vidhya M. All rights reserved.
      </p>
    </footer>
  );
}
