"use client";


export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/MuhammadYusufResume.pdf";
    link.download = "MuhammadYusufResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Muhammad Yusuf Nasrulloh
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl text-blue-300 mb-8 font-medium">
          Full Stack Developer | React & Node.js Expert
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          Professional Full Stack Developer from Tashkent, Uzbekistan specializing in React, Node.js, TypeScript, and modern web technologies. Creating clean, functional, and user-friendly applications with cutting-edge solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-xl"
          >
            View My Work
          </button>

          <button
            onClick={downloadResume}
            className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}
