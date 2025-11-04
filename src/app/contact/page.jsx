'use client';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-pink-900 to-red-900 text-gray-100">
      <Navbar />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-pink-400 mb-12 tracking-wider">
            Let's <span className="text-yellow-400">Connect</span>
          </h2>

          <p className="text-center text-gray-200 mb-12">
            Got a project idea, collaboration, or just want to say hi? Fill out the form below and I'll get back to you soon!
          </p>

          <form className="space-y-8 bg-gray-800/70 p-8 rounded-3xl backdrop-blur-md shadow-lg border border-pink-500">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="peer w-full px-4 py-3 rounded-xl bg-gray-900 border border-pink-400 text-gray-200 focus:outline-none focus:border-pink-300 transition-colors"
                />
                <label className="absolute left-4 top-3 text-gray-400 text-sm peer-focus:text-pink-300 transition-all pointer-events-none">
                  Name
                </label>
              </div>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="peer w-full px-4 py-3 rounded-xl bg-gray-900 border border-pink-400 text-gray-200 focus:outline-none focus:border-pink-300 transition-colors"
                />
                <label className="absolute left-4 top-3 text-gray-400 text-sm peer-focus:text-pink-300 transition-all pointer-events-none">
                  Email
                </label>
              </div>
            </div>

            <div className="relative group">
              <textarea
                placeholder="Your Message"
                className="peer w-full px-4 py-4 rounded-xl bg-gray-900 border border-pink-400 text-gray-200 focus:outline-none focus:border-pink-300 transition-colors h-40 resize-none"
              ></textarea>
              <label className="absolute left-4 top-4 text-gray-400 text-sm peer-focus:text-pink-300 transition-all pointer-events-none">
                Message
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="relative inline-block px-10 py-3 font-semibold rounded-full text-gray-900 bg-pink-400 hover:bg-pink-300 transition-all duration-300 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300 rounded-full"></span>
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Background floating circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-500 opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-500 opacity-10 rounded-full animate-float animation-delay-2000"></div>
        </div>

        <style jsx>{`
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

      <Footer />
    </div>
  );
}
