import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900 text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-pink-400">
          Hi, I’m Zinuk ✨
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          I’m a web developer who loves turning ideas into sleek, interactive digital experiences.
          I blend design, logic, and creativity to build websites that are both functional and visually striking.
        </p>
      </section>

      {/* About + Pattern Section */}
      <section className="px-6 py-20 md:py-32 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-16 w-48 h-48 bg-teal-400/20 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-pink-300">About Me</h2>
            <p className="text-gray-200 leading-relaxed">
              I specialize in building responsive, user-friendly web applications with React and Next.js.
              My goal is to create interfaces that are not only functional but also visually engaging.
            </p>
            <p className="text-gray-200 leading-relaxed">
              From brainstorming ideas to deploying live websites, I enjoy every step of the process.
              Constant learning and experimentation drive my journey.
            </p>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/10 hover:border-pink-400 transition-all duration-500">
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">My Motivation</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-100">
              <li>Turning creative concepts into clean, functional code</li>
              <li>Designing elegant solutions for complex problems</li>
              <li>Continuous growth and learning new technologies</li>
              <li>Delivering meaningful experiences for users</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-indigo-800 via-purple-700 to-fuchsia-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Skills & Expertise ⚡
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)"] },
              { title: "Backend", skills: ["Node.js", "Express.js", "MongoDB", "API Integration"] },
              { title: "Design Tools", skills: ["Figma", "Canva", "Framer Motion", "Git/GitHub"] },
              { title: "Other Skills", skills: ["REST API", "Vercel Deployment", "Firebase", "SEO"] },
            ].map((box, i) => (
              <div
                key={i}
                className="bg-white/10 p-6 rounded-3xl backdrop-blur-md border border-white/10 shadow-xl hover:scale-105 hover:border-pink-400 hover:shadow-pink-400/40 transition-transform duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-pink-200">{box.title}</h3>
                <ul className="space-y-2">
                  {box.skills.map((skill, j) => (
                    <li
                      key={j}
                      className="flex items-center text-gray-200 hover:text-white transition-transform hover:translate-x-2"
                    >
                      <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="px-6 py-16 text-center bg-gray-900 relative">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let's Build Something Amazing!</h2>
          <p className="text-gray-300">
            If you have a project in mind, I’d love to help you bring it to life. Reach out and let's create together.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 text-white bg-pink-400 rounded-full font-semibold hover:bg-pink-300 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Floating pattern circles */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-teal-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full animate-ping"></div>
      </section>

      <Footer />
    </div>
  );
}
