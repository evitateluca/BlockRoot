"use client";  // Forza il rendering lato client

import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"; // Icone per i social

export default function Team() {
  return (
    <section id="team" className="py-16 bg-black text-white">
      <div className="hr-line"></div>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
          Meet the Team
        </h2>
        <p className="text-lg text-gray-400 mb-12" data-aos="fade-up">
          Our team is made up of passionate individuals who are dedicated to making BlockRoots a success.
        </p>

        {/* Team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Member 1 */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg glass-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-400 mb-4">CEO & Founder</p>
            <p className="text-gray-500 mb-4">
              John has over 10 years of experience in the blockchain and cryptocurrency industry. He founded BlockRoots with a vision to revolutionize mining.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl text-blue-600 hover:text-blue-400" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl text-blue-400 hover:text-blue-300" />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl text-gray-600 hover:text-gray-400" />
              </a>
            </div>
          </div>

          {/* Member 2 */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg glass-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-400 mb-4">Chief Technology Officer</p>
            <p className="text-gray-500 mb-4">
              Jane is an expert in blockchain development and has been working in the tech industry for over 8 years. She oversees all the technical aspects of BlockRoots.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl text-blue-600 hover:text-blue-400" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl text-blue-400 hover:text-blue-300" />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl text-gray-600 hover:text-gray-400" />
              </a>
            </div>
          </div>

          {/* Member 3 */}
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg glass-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Member 3"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Alex Johnson</h3>
            <p className="text-gray-400 mb-4">Marketing & Community Lead</p>
            <p className="text-gray-500 mb-4">
              Alex is responsible for managing the marketing and community outreach efforts. With a background in digital marketing, he strives to build a strong community around BlockRoots.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl text-blue-600 hover:text-blue-400" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl text-blue-400 hover:text-blue-300" />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl text-gray-600 hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
