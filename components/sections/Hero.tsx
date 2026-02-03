import Link from "next/link";
import Image from "next/image";
import { Search, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/constants";
// Si quieres el buscador, recuerda importarlo:
// import GlassSearchBar from "@/components/ui/GlassSearchBar";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gray-200">
      
    {/* 1. VIDEO DE FONDO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          // Usamos la imagen anterior como "poster" (se muestra mientras carga el video)
          poster="/hero/v1_zaragoza_cielo_hero.png"
          // Estas clases hacen que el video cubra todo el fondo sin deformarse
          className="object-cover w-full h-full"
        >
          {/* CAMBIA 'nombre-de-tu-video.mp4' POR EL NOMBRE REAL DE TU ARCHIVO */}
          <source src="/hero/v1_zaragoza_cielo_hero_video.mp4" type="video/mp4" />
          {/* Si tuvieras formato webm también podrías añadirlo aquí como fallback */}
          Tu navegador no soporta videos HTML5.
        </video>

        {/* Overlay (Mantener las capas oscuras para que se lea el texto) */}
        <div className="absolute inset-0 bg-lazaro-blue/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* 2. CONTENIDO */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-10">
        
        <div className="space-y-6 mb-12">

          
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