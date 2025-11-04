'use client';
import React from 'react';

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Responsive portfolio website built with React and CSS.",
    link: "https://github.com/Zinuk-webDev-BD/portfolio",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A simple todo app built using React hooks.",
    link: "https://github.com/Zinuk-webDev-BD/todo-app",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Live weather forecast using OpenWeather API.",
    link: "https://github.com/Zinuk-webDev-BD/weather-app",
  },
  {
    id: 4,
    title: "Multiple Input Counter",
    description: "Add/remove multiple counters and track values individually.",
    link: "https://github.com/Zinuk-webDev-BD/multiple-input-counter",
  },
  {
    id: 5,
    title: "Blog Website with Comments",
    description: "Simple blog site where users can comment on posts.",
    link: "https://github.com/Zinuk-webDev-BD/blog-comments",
  },
  {
    id: 6,
    title: "Notes App",
    description: "Create, save, and view notes. Responsive and clean UI.",
    link: "https://github.com/Zinuk-webDev-BD/notes-app",
  },
  {
    id: 7,
    title: "Rock Paper Scissors Game",
    description: "Interactive rock-paper-scissors game with score tracking.",
    link: "https://github.com/Zinuk-webDev-BD/rock-paper-scissors",
  },
];

const MyWork = () => {
  return (
    <section id="mywork" className="py-16 bg-gray-900 text-gray-100 relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My <span className="text-pink-400">Work</span>
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ id, title, description, link }) => (
          <div
            key={id}
            className="relative bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 group overflow-hidden border border-pink-500 hover:border-pink-400"
          >
            {/* Floating shine effect */}
            <div className="absolute -top-16 -left-16 w-40 h-40 bg-pink-400 opacity-20 rounded-full blur-3xl animate-animate-shine pointer-events-none"></div>
            
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-pink-400 transition-colors duration-300">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-full bg-pink-400 text-gray-900 font-semibold hover:bg-pink-300 transition-colors duration-300"
            >
              View Code
            </a>
          </div>
        ))}
      </div>

      {/* Optional background floating circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-pink-500 opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-500 opacity-10 rounded-full animate-float animation-delay-2000"></div>
      </div>

      <style jsx>{`
        @keyframes animate-shine {
          0% { transform: translate(-50%, -50%) rotate(0deg); opacity: 0.1; }
          50% { transform: translate(-50%, -50%) rotate(45deg); opacity: 0.3; }
          100% { transform: translate(-50%, -50%) rotate(90deg); opacity: 0.1; }
        }
        .animate-animate-shine {
          animation: animate-shine 3s infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default MyWork;
