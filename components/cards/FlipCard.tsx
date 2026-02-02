"use client"; // Importante: Este componente usa useState, así que debe ser cliente

import { useState } from "react";
import Image from "next/image";
import { Repeat } from "lucide-react";

interface FlipCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

export default function FlipCard({ title, subtitle, imageSrc, imageAlt, children }: FlipCardProps) {
  const [showImage, setShowImage] = useState(false);

  return (
    <div 
      onClick={() => setShowImage(!showImage)}
      className="min-w-[90vw] h-[550px] snap-center relative cursor-pointer perspective-1000 group"
    >
      {/* Contenedor que gira */}
      <div className={`relative w-full h-full duration-700 preserve-3d transition-all ${showImage ? "rotate-y-180" : ""}`} style={{ transformStyle: "preserve-3d" }}>
        
        {/* --- CARA DELANTERA (TEXTO) --- */}
        <div className="absolute inset-0 backface-hidden bg-white border border-gray-100 rounded-2xl p-8 shadow-xl flex flex-col justify-center overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
            <div className="space-y-4 mb-4">
              <h2 className="text-lazaro-gold text-xs tracking-[0.2em] uppercase font-bold">{subtitle}</h2>
              <h3 className="text-3xl font-serif text-lazaro-blue font-bold">{title}</h3>
              <div className="w-16 h-1 bg-lazaro-gold"></div>
            </div>
            
            {/* Contenido del texto */}
            <div className="flex-grow overflow-y-auto no-scrollbar">
              {children}
            </div>

            {/* Indicador de "Tap" (Negro con texto blanco, como pediste) */}
            <div className="mt-6 flex items-center justify-center text-xs text-white font-medium bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full animate-pulse border border-white/20">
               <Repeat size={14} className="mr-2"/> Toca para ver la foto
            </div>
        </div>

        {/* --- CARA TRASERA (IMAGEN) --- */}
        <div 
            className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl rotate-y-180 bg-lazaro-blue" 
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
            <Image 
                src={imageSrc} 
                alt={imageAlt} 
                fill 
                className="object-cover" 
            />
            
            {/* Capa oscura suave */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Indicador de Girar (Abajo) */}
            <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center z-10">
                <div className="flex items-center gap-2 text-xs text-white font-medium bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full animate-pulse border border-white/20">
                    <Repeat size={14} /> 
                    Toca para leer el texto
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}