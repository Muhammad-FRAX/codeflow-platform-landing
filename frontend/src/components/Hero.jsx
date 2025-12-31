import React, { useEffect } from "react";
import { ChevronDown } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples } from "../data/CodeExamples";

// Export
export default function Hero() {
  // State variables
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = React.useState("App.jsx");

  // useEffect to control the mouse position for the radial gradient
  useEffect(() => {
    function hadndleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", hadndleMouseMove);

    return () => window.removeEventListener("mousemove", hadndleMouseMove);
  }, []);

  // Render the Hero component
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(118, 167, 246, 0.15), transparent 40%)`,
        }}
      />
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative order-2 w-full">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10 ">
          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:w-[350px] lg:w-[450px] border border-white/5 ">
            {/* IDE HEADER */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10 ">
              <div className="flex space-x-2 items-center">
                <div className="flex space-x-1 sm:space-x-2 items-center">
                  <div className="w-2 h-2 sm:h-3 sm:w-3 rounded-full bg-red-500 " />
                  <div className="w-2 h-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500 " />
                  <div className="w-2 h-2 sm:h-3 sm:w-3 rounded-full bg-green-500 " />
                </div>
                <span className="text-xs sm:text-sm text-gray-300">
                  CodeFlow AI
                </span>
              </div>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            </div>
            <div className="p-3 sm:p-4 relative h-full">
              {/* File tabs */}
              <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto ">
                <button
                  onClick={() => setActiveTab("App.jsx")}
                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                    activeTab === "App.jsx"
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                  } transition-all duration-200 whitespace-nowrap`}
                >
                  App.jsx
                </button>
                <button
                  onClick={() => setActiveTab("Hero.jsx")}
                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                    activeTab === "Hero.jsx"
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                  } transition-all duration-200 whitespace-nowrap`}
                >
                  Hero.jsx
                </button>
                <button
                  onClick={() => setActiveTab("Navbar.jsx")}
                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                    activeTab === "Navbar.jsx"
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                  } transition-all duration-200 whitespace-nowrap`}
                >
                  Navbar.jsx
                </button>
              </div>

              {/* Code content */}
              <div className="relative overflow-hidden flex-grow ">
                <SyntaxHighlighter language="javascript">
                  {codeExamples[activeTab]}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
