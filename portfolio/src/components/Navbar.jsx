import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  const toggleDark = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-bgDark text-black dark:text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide cursor-pointer text-primary dark:text-white">
          Vidhya M
        </h1>

        <div className="flex gap-6 items-center text-sm md:text-base">
          <Link
            to="projects"
            smooth
            duration={500}
            className="cursor-pointer hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link
            to="resume"
            smooth
            duration={500}
            className="cursor-pointer hover:text-primary transition-colors"
          >
            Resume
          </Link>

          <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
          >
            {dark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
