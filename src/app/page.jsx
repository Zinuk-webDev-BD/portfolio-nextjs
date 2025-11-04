'use client';
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  // Simple floating circles animation
  const [circles, setCircles] = useState([]);
  useEffect(() => {
    const newCircles = Array.from({ length: 6 }).map(() => ({
      size: Math.random() * 80 + 40,
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
      duration: Math.random() * 10 + 5,
      color: ["#C084FC", "#F472B6", "#60A5FA", "#34D399"][Math.floor(Math.random() * 4)]
    }));
    setCircles(newCircles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center max-w-6xl mx-auto px-6 py-28 text-center">
        {circles.map((c, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30 animate-float"
            style={{
              width: c.size,
              height: c.size,
              top: `${c.top}%`,
              left: `${c.left}%`,
              backgroundColor: c.color,
              animationDuration: `${c.duration}s`,
            }}
          ></div>
        ))}

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 z-10 relative">
          Hi, I'm <span className="text-indigo-600">Kazi Nigar Sultana Zinuk</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 z-10 relative">
          Welcome to My Portfolio
        </h2>
        <p className="text-base md:text-xl text-gray-700 mb-8 max-w-2xl z-10 relative">
          Full Stack Developer & Creative Problem Solver. I build interactive and visually appealing web applications.
        </p>
        <div className="flex space-x-4 z-10 relative">
          <a
            href="/contact"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#about"
            className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-800">About Me</h2>
          <p className="text-gray-700 md:text-lg">
            I'm a passionate web developer who loves blending creativity with code. I specialize in React, Next.js, Tailwind CSS, and building responsive, user-friendly web applications.
          </p>
          <p className="text-gray-700 md:text-lg">
            My mission is to create modern, performant websites that solve problems and provide excellent user experiences.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-900 text-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-pink-400">My Skills & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Frontend", items: ["React.js", "Next.js", "Tailwind", "JavaScript"] },
              { title: "Backend", items: ["Node.js", "Express.js", "MongoDB", "API Integration"] },
              { title: "Design", items: ["Figma", "Canva", "Framer Motion", "Git/GitHub"] },
              { title: "Other", items: ["REST API", "Vercel Deployment", "Firebase", "SEO"] },
            ].map((box, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-pink-400/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-pink-200">{box.title}</h3>
                <ul className="space-y-2">
                  {box.items.map((item, j) => (
                    <li key={j} className="text-gray-200 flex items-center">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </div>
  );
}
