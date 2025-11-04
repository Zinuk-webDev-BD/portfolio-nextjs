'use client';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MyWork from "../../components/MyWork"; // Ensure MyWork.jsx path is correct

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <section className="pt-24 pb-16 px-6 text-center bg-gradient-to-r from-purple-700 via-pink-500 to-red-500">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          My Projects Portfolio
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Welcome to my projects page. Here you'll find highlights of my work 
          in web development, showcasing skills in modern technologies and design.
        </p>
        <a 
          href="#mywork" 
          className="inline-block px-6 py-3 rounded-full bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition-colors duration-300"
        >
          Explore My Work
        </a>
      </section>

      <MyWork />
      <Footer />
    </div>
  );
}
