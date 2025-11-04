import Link from "next/link";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Section with cards */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* About Card */}
          <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-bold mb-3">About Me</h3>
            <p className="text-gray-100 leading-relaxed">
              Passionate web developer crafting modern web experiences. Let’s 
              create something amazing together!
            </p>
          </div>

          {/* Quick Links Card */}
          <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link === "Home" ? "/" : `#${link.toLowerCase()}`} 
                    className="hover:text-yellow-300 transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Card */}
          <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-bold mb-3">Contact</h3>
            <ul className="space-y-2 text-gray-100">
              <li><span className="font-semibold">Email:</span> zinuk758@gmail.com</li>
              <li><span className="font-semibold">Location:</span> Dhaka, Bangladesh</li>
            </ul>
            <div className="mt-4 flex gap-4 text-2xl">
              <Link href="https://www.facebook.com/kazinigar.kazinigar" className="hover:text-yellow-300 transition-colors">
                <FaFacebookSquare />
              </Link>
              <Link href="https://github.com/Zinuk-webDev-BD" className="hover:text-yellow-300 transition-colors">
                <FaGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/kazi-nigar-5598a9272/" className="hover:text-yellow-300 transition-colors">
                <FaLinkedin />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-white/30 pt-6 text-center text-gray-100 text-sm">
          © {new Date().getFullYear()} All rights reserved by Kazi Nigar Sultana Zinuk.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
