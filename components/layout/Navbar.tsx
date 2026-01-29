"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
// Importamos la configuración centralizada
import { SITE_CONFIG } from "@/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-lazaro-accent text-white fixed top-0 w-full z-50 shadow-md transition-all duration-300">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* LOGO DINÁMICO */}
          <Link href="/" className="flex flex-col group">
            <span className="text-2xl font-serif font-bold text-lazaro-gold tracking-wide group-hover:text-white transition-colors">
              LÁZARO
            </span>
            <span className="text-[10px] text-gray-300 tracking-[0.2em] font-sans uppercase">
              Inmobiliaria
            </span>
          </Link>

          {/* MENÚ ESCRITORIO (Mapeado desde constantes) */}
          <div className="hidden md:flex space-x-8 items-center font-sans text-sm tracking-wide">
            {SITE_CONFIG.navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-lazaro-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              href="/contacto" 
              className="bg-lazaro-gold text-white px-6 py-2.5 rounded-sm font-medium hover:bg-lazaro-goldHover transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              <span>CONTACTAR</span>
            </Link>
          </div>

          {/* MENÚ MÓVIL */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-lazaro-gold p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* DESPLEGABLE MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-lazaro-accent border-t border-gray-800 absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col font-sans">
            {SITE_CONFIG.navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="block py-3 border-b border-gray-700 hover:text-lazaro-gold" 
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contacto" 
              className="block py-3 text-lazaro-gold font-bold mt-2" 
              onClick={() => setIsOpen(false)}
            >
              CONTACTAR AHORA
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}