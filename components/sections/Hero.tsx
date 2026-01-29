import Link from "next/link";
import { Search, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/constants";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* 1. VÍDEO DE FONDO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Este es un vídeo de stock de ciudad aérea tipo Zaragoza/Madrid. 
              Cuando tengáis el vuestro, solo cambiamos esta URL */}
          <source src="https://videos.pexels.com/video-files/2053100/2053100-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>

        {/* Capa oscura para que se lea el texto (Overlay) */}
        <div className="absolute inset-0 bg-lazaro-blue/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. CONTENIDO */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-10">
        
        <div className="space-y-6 mb-12">
          {/* Eslogan pequeño */}
          <span className="inline-block py-1 px-3 border border-lazaro-gold/50 rounded-full text-lazaro-gold text-xs md:text-sm font-sans tracking-[0.2em] uppercase bg-lazaro-blue/80 backdrop-blur-sm">
            Gestión Inmobiliaria Integral
          </span>
          
          {/* Título Principal */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white drop-shadow-2xl">
            {SITE_CONFIG.slogan}
          </h1>

          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed">
            {SITE_CONFIG.description}
          </p>
        </div>

        {/* Buscador (Estilo Cristal) */}
        <div className="bg-white/95 backdrop-blur-md p-3 rounded-lg shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-2 border border-white/20">
          <div className="flex-grow flex items-center bg-gray-50 rounded px-4 py-3 border border-gray-200 focus-within:border-lazaro-gold transition-colors">
            <MapPin className="text-gray-400 mr-3" size={20} />
            <input 
              type="text" 
              placeholder="¿Buscas piso en Santa Isabel, Centro...?" 
              className="bg-transparent w-full outline-none text-gray-700 placeholder:text-gray-400 font-sans"
            />
          </div>
          <button className="bg-lazaro-gold hover:bg-lazaro-goldHover text-white px-8 py-4 rounded font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-wide text-sm md:text-base shadow-lg">
            <Search size={18} />
            Buscar
          </button>
        </div>

      </div>
    </section>
  );
}