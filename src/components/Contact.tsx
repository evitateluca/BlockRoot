"use client";  // Forza il rendering lato client

import { useState } from "react";
import { FaTelegram, FaTwitter, FaReddit } from "react-icons/fa"; // Icone per i social

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gestione dell'invio del modulo (ad esempio inviarlo al server o a un servizio)
    console.log("Form Submitted", { email, message });
  };

  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="hr-line"></div>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
          Contact & Community
        </h2>

        <p className="text-lg text-gray-400 mb-12" data-aos="fade-up">
          Get in touch with us or join our community to stay up-to-date with the latest developments.
        </p>

        {/* Modulo di contatto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg glass-card">
            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-black text-white border border-gray-600"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full p-3 rounded-lg bg-black text-white border border-gray-600"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Sezione Community */}
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Join Our Community</h3>
            <p className="text-gray-400 mb-6">
              Stay connected with the community through our social channels and be the first to know about updates and developments.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://t.me/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400 text-3xl"
              >
                <FaTelegram />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-3xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.reddit.com/r/yourcommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-500 text-3xl"
              >
                <FaReddit />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-400">Or subscribe to our newsletter for updates:</p>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="flex items-center justify-center">
                  <input
                    type="email"
                    className="w-2/3 p-3 rounded-lg bg-black text-white border border-gray-600"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-500 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md ml-4"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
