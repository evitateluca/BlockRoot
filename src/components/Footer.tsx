import { FaFacebook, FaTwitter, FaLinkedin, FaTelegram } from "react-icons/fa"; // Importiamo le icone social

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="hr-line-footer"></div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonna 1: Link alle pagine */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#about" className="hover:text-green-400">About</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-green-400">How It Works</a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-green-400">Roadmap</a>
              </li>
              <li>
                <a href="#budget" className="hover:text-green-400">Budget</a>
              </li>
              <li>
                <a href="#rewards" className="hover:text-green-400">Rewards</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* Colonna 2: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaLinkedin size={30} />
              </a>
              <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaTelegram size={30} />
              </a>
            </div>
          </div>

          {/* Colonna 3: Copyright e Informazioni */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-4">support@blockroots.com</p>
            <p className="text-gray-400">© 2024 BlockRoots. All Rights Reserved.</p>
            <div className="mt-4">
              <a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a> | 
              <a href="/privacy" className="text-gray-400 hover:text-white"> Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
