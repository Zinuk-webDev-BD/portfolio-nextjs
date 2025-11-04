'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-xl fixed w-full z-20" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl md:text-3xl font-extrabold text-white tracking-wider hover:text-yellow-300 transition-colors">
              Zinuk
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-white hover:text-yellow-300 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-300 font-medium transition-colors">
              About
            </Link>
            <Link href="/about#skills" className="text-white hover:text-yellow-300 font-medium transition-colors">
              Skills
            </Link>
            <Link href="/projects" className="text-white hover:text-yellow-300 font-medium transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-white hover:text-yellow-300 font-medium transition-colors">
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="px-5 py-2 text-purple-700 bg-yellow-300 rounded-full font-semibold hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white outline-none focus:ring-2 focus:ring-yellow-300 rounded-md p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-4 space-y-3 sm:px-6 bg-gradient-to-b from-purple-600 via-pink-500 to-red-500">
              <Link
                href="/"
                className="block px-3 py-2 text-white font-medium hover:text-yellow-300 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white font-medium hover:text-yellow-300 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/about#skills"
                className="block px-3 py-2 text-white font-medium hover:text-yellow-300 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="block px-3 py-2 text-white font-medium hover:text-yellow-300 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white font-medium hover:text-yellow-300 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 mt-2 text-purple-700 bg-yellow-300 rounded-full text-center font-semibold hover:bg-yellow-400 hover:text-purple-900 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
