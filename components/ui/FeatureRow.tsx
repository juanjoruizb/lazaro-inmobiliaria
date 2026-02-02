import Image from "next/image";
import React from "react";

interface FeatureRowProps {
  subtitle: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  imageLeft?: boolean;
  imageOverlay?: React.ReactNode;
}

export default function FeatureRow({
  subtitle,
  title,
  imageSrc,
  imageAlt,
  children,
  imageLeft = false,
  imageOverlay,
}: FeatureRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      {/* 1. TEXTO */}
      <div className={`space-y-8 animate-in slide-in-from-${imageLeft ? "right" : "left"} duration-700`}>
        <div className="space-y-4">
          <h2 className="text-lazaro-gold font-sans text-sm tracking-[0.2em] uppercase font-bold">
            {subtitle}
          </h2>
          <h3 className="text-5xl font-serif text-lazaro-blue font-bold leading-tight">
            {title}
          </h3>
          <div className="w-20 h-1 bg-lazaro-gold"></div>
        </div>
        <div className="text-gray-600 space-y-6 text-lg font-light leading-relaxed">
            {children}
        </div>
      </div>

      {/* 2. IMAGEN Y OVERLAY */}
      <div className={`relative h-[500px] w-full rounded-lg shadow-2xl overflow-hidden group ${imageLeft ? "md:order-first" : ""}`}>
         
         {/* La imagen ocupa todo el espacio */}
         <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
         />
         
         {/* Capa oscura sutil al pasar el ratón */}
         <div className="absolute inset-0 bg-lazaro-blue/10 group-hover:bg-transparent transition-colors duration-500"></div>
         
         {/* Aquí pintamos tu etiqueta (encima de la foto, dentro del recuadro) */}
         {imageOverlay}

      </div>

    </div>
  );
}