import Link from 'next/link';import Image from "next/image";

import Navbar from "../components/Navbar";import Navbar from "../components/Navbar";

import Footer from "../components/Footer";import Footer from "../components/Footer";

import prof from '../../public/502909348_4079488505703572_2549706419031312301_n.jpg'

export default function Home() {import projct1 from '../../public/canvix.png'

  return (import projct2 from '../../public/nexton.png'

    <div className="min-h-screen bg-gray-50">import project3 from '../../public/bike.png'

      <Navbar />

      export default function Home() {

      {/* Hero Section */}  return (

      <section className="min-h-screen pt-20 px-4 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">    <div className="min-h-screen bg-gray-50">

        <div className="max-w-6xl mx-auto text-center">      <Navbar />

          <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to My Portfolio</h1>      

          <p className="text-xl text-gray-600 mb-8">Full Stack Developer | Creative Problem Solver | Tech Enthusiast</p>      {/* Hero Section */}

          <Link       <section className="pt-20 pb-12 px-4 text-center bg-gradient-to-b from-blue-50 to-white">

            href="/contact"        <div className="max-w-6xl mx-auto pt-16">

            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"          

          >          <h1 className="text-5xl font-bold text-gray-900 mb-6">Welcome to My Portfolio</h1>

            Get in Touch          <p className="text-xl text-gray-600 mb-8">Full Stack Developer | Creative Problem Solver | Tech Enthusiast</p>

          </Link>          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">

        </div>            Get in Touch

      </section>          </button>

        </div>

      <Footer />      </section>

    </div>

  );      {/* About Section */}

}      <section id="about" className="py-16 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={prof}
                alt="Profile"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg  mb-6 text-white">
                I'm a passionate developer with expertise in building modern web applications.
                With a strong foundation in both frontend and backend technologies,
                I create seamless digital experiences that solve real-world problems.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <p>React, Next.js, Tailwind CSS</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold mb-2">Backend</h3>
                  <p>Node</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Frontend Skills */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  HTML5/CSS3
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  JavaScript/ES6+
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  React.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Next.js
                </li>
              </ul>
            </div>

            {/* Styling Skills */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Styling</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  CSS Modules
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Styled Components
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Material UI
                </li>
              </ul>
            </div>

            {/* Backend Skills */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Node.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Express.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  RESTful APIs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  MongoDB
                </li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Git/GitHub
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  VS Code
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Webpack
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  npm/yarn
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={projct1}
                alt="Project 1"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Canvix.</h3>
                <p className="text-gray-600 mb-4">its a singel page web site created with react ,Tailwind </p>
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">React</span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded">tailwind</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={projct2}
                alt="Project 2"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ecommarce - nexton.</h3>
                <p className="text-gray-600 mb-4">its a ecommarce website created with react ,tailwind ,api fetch, auth , </p>
                <div className="flex space-x-2">
                  <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded">React</span>
                  <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded">Tailwind</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={project3}
                alt="Project 3"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">scooter</h3>
                <p className="text-gray-600 mb-4">its a online ebike store.</p>
                <div className="flex space-x-2">
                  <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded">html</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">css</span>
                  <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded">javascript</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-white">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
