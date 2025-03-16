"use client";  // Aggiungi questa riga per forzare il rendering lato client

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa lo stylesheet di AOS

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inizializza AOS
  }, []);

  return null; // Non ha bisogno di rendere nulla
}
