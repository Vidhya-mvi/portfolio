import { useState } from "react";
import { FaDownload, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section
      id="resume"
      className="py-20 px-6 bg-white dark:bg-bgDark text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          You can view or download my resume below.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
         
          <a
            href="/Vidhya.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition"
          >
            <FaDownload />
            Download Resume
          </a>

          
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition"
          >
            {showPreview ? <FaEyeSlash /> : <FaEye />}
            {showPreview ? "Hide Preview" : "Show Preview"}
          </button>
        </div>

        
        {showPreview && (
          <div className="w-full h-[750px] border border-gray-300 rounded-md overflow-hidden shadow-lg transition-all duration-500">
            <iframe
              src="/Vidhya.pdf"
              className="w-full h-full"
              title="Resume Preview"
              frameBorder="0"
            />
          </div>
        )}
      </div>
    </section>
  );
}
