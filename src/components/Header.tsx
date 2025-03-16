"use client";  // Forza il rendering lato client

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Icone per il menu hamburger

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Stato del menu mobile
  const [scrolling, setScrolling] = useState(false); // Stato per l'animazione del ridimensionamento

  // Funzione per gestire lo scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true); // Aggiungi classe per quando si scorre verso il basso
    } else {
      setScrolling(false); // Rimuovi la classe quando si è in cima
    }
  };

  // Usa useEffect per aggiungere l'evento di scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Rimuovi l'evento quando il componente viene smontato
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle del menu mobile
  };

  return (
    <header
      className={`transition-all duration-300 ease-in-out fixed top-0 left-0 w-full z-50 ${
        scrolling ? "h-16 bg-black bg-opacity-90" : "h-24 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          BlockRoots
        </Link>

        {/* Menu per Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="#about" className="text-white hover:text-grey-400">About</Link>
          <Link href="#how-it-works" className="text-white hover:text-grey-400">How It Works</Link>
          <Link href="#roadmap" className="text-white hover:text-grey-400">Roadmap</Link>
          <Link href="#budget" className="text-white hover:text-grey-400">Budget</Link>
          <Link href="#rewards" className="text-white hover:text-grey-400">Rewards</Link>
          <Link href="#contact" className="text-white hover:text-grey-400">Contact</Link>
          {/* Button CTA */}
          <Link href="/dashboard" className="px-6 py-3 bg-grey-900 hover:bg-grey-700 text-white font-semibold rounded-lg shadow-md">
            Login
          </Link>
        </nav>

        {/* Menu Hamburger per dispositivi mobili */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <FaTimes size={30} />
            ) : (
              <FaBars size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile (visibile solo quando è aperto) */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-70 absolute top-0 left-0 w-full p-6">
          <nav className="space-y-4">
            <Link href="#about" className="text-white hover:text-grey-400">About</Link>
            <Link href="#how-it-works" className="text-white hover:text-grey-400">How It Works</Link>
            <Link href="#roadmap" className="text-white hover:text-grey-400">Roadmap</Link>
            <Link href="#budget" className="text-white hover:text-grey-400">Budget</Link>
            <Link href="#rewards" className="text-white hover:text-grey-400">Rewards</Link>
            <Link href="#contact" className="text-white hover:text-grey-400">Contact</Link>
            <Link href="#join" className="block w-full text-center px-6 py-3 bg-grey-900 hover:bg-grey-700 text-white font-semibold rounded-lg shadow-md">
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
