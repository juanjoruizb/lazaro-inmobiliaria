import Link from "next/link";
import Image from "next/image";
import { Search, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/constants";
// Si quieres el buscador, recuerda importarlo:
// import GlassSearchBar from "@/components/ui/GlassSearchBar";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* 1. IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/v1_zaragoza_cielo_hero.png" 
          alt="Vista aérea de Zaragoza al atardecer"
          fill 
          className="object-cover" 
          priority 
          quality={100} 
        />

        {/* Overlay (Capa oscura) */}
        <div className="absolute inset-0 bg-lazaro-blue/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* 2. CONTENIDO */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-10">
        
        <div className="space-y-6 mb-12">
          {/* Eslogan pequeño */}
          <span className="inline-block py-1 px-3 border border-lazaro-gold/50 rounded-full text-lazaro-gold text-xs md:text-sm font-sans tracking-[0.2em] uppercase bg-lazaro-blue/80 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-3 duration-700">
            {SITE_CONFIG.hero_1 || "Gestión Inmobiliaria"}
          </span>
          
          {/* Título Principal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 leading-tight">
            {SITE_CONFIG.slogan}
          </h1>

          {/* Barra Horizontal blanca */}
          <div className="h-1 w-60 md:w-180 bg-white mx-auto my-6 md:my-8 rounded-full shadow-sm animate-in fade-in zoom-in duration-1000 delay-150"></div>

          {/* Descripción */}
          <p className="text-base md:text-xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 px-2">
            {SITE_CONFIG.description}
          </p>
        </div>

      </div>
    </section>
  );
}