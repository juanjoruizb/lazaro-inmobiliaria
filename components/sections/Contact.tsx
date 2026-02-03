"use client"; // Necesario para el efecto flip (useState)

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, Repeat, Map as MapIcon } from "lucide-react";
import { SITE_CONFIG } from "@/constants";

export default function Contact() {
  // Estado para el Flip en móvil
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="bg-lazaro-50 py-12 md:py-24 relative overflow-hidden">
      
      {/* Decoración fondo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lazaro-gold/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABECERA */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4 md:space-y-6">
          <h2 className="text-lazaro-gold font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
            Comunícate con nosotros
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-lazaro-blue font-bold leading-tight">
            Ven a visitarnos
          </h3>
          <p className="text-gray-600 text-base md:text-lg font-light hidden md:block">
            Nos encanta recibir a nuestros clientes, así que ven en cualquier momento durante las horas de oficina.
          </p>
        </div>

        {/* ==============================================================
            VISTA MÓVIL: TARJETA GIRATORIA (INFO <-> MAPA)
            ============================================================== */}
        <div className="md:hidden perspective-1000 h-[500px] w-full cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`relative w-full h-full duration-700 preserve-3d transition-all ${isFlipped ? "rotate-y-180" : ""}`} style={{ transformStyle: "preserve-3d" }}>
                
                {/* --- CARA DELANTERA (DATOS Y HORARIOS) --- */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-2xl p-8 shadow-xl border border-lazaro-100 flex flex-col justify-between" style={{ backfaceVisibility: "hidden" }}>
                    
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-lazaro-50 p-3 rounded-full text-lazaro-gold">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h4 className="font-serif text-xl text-lazaro-blue font-bold">Horario de Atención</h4>
                                <p className="text-xs text-gray-400">Toca para ver el mapa</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-lazaro-blue uppercase tracking-wider">Lunes a Viernes</p>
                                <p className="text-gray-600 text-lg">09:30 – 13:30</p>
                                <p className="text-gray-600 text-lg">17:00 – 20:00</p>
                            </div>
                            
                            <div className="pt-4 border-t border-gray-100">
                                <p className="text-sm font-bold text-lazaro-blue uppercase tracking-wider mb-1">Dirección</p>
                                <p className="text-gray-600 leading-relaxed">
                                    {SITE_CONFIG.contact.address}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-lazaro-blue text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-sm animate-pulse mt-4">
                        <MapIcon size={18} />
                        Ver Mapa de Ubicación
                    </div>
                </div>

                {/* --- CARA TRASERA (MAPA) --- */}
                <div 
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl rotate-y-180 bg-gray-100 border-4 border-white" 
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.566735467385!2d-0.8548989234986548!3d41.6651268712653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd59150654766c1f%3A0x705856417769910!2sAv.%20Sta.%20Isabel%2C%2073%2C%2050016%20Zaragoza!5e0!3m2!1ses!2ses!4v1709669547635!5m2!1ses!2ses" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    
                    {/* Botón flotante para volver */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
                        <div className="bg-white/90 backdrop-blur text-lazaro-blue px-4 py-2 rounded-full shadow-lg text-xs font-bold flex items-center gap-2 border border-gray-200">
                            <Repeat size={14} /> Volver a los horarios
                        </div>
                    </div>
                </div>

            </div>
        </div>


        {/* ==============================================================
            VISTA ESCRITORIO: GRID CLÁSICO (DATOS IZQ - MAPA DER)
            ============================================================== */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* COLUMNA IZQUIERDA: DATOS */}
          <div className="space-y-12 bg-white p-12 rounded-2xl shadow-sm border border-lazaro-100 h-[500px] flex flex-col justify-center">
            
            <div className="space-y-4">
               <h4 className="text-2xl font-serif text-lazaro-blue font-bold flex items-center gap-3">
                 <MapPin className="text-lazaro-gold" />
                 {SITE_CONFIG.name}
               </h4>
               <p className="text-gray-600 text-lg leading-relaxed pl-9">
                 {SITE_CONFIG.contact.address}
               </p>
            </div>

            <div className="space-y-6 pl-9">
               <div className="flex flex-col space-y-2">
                 <a href={`tel:${SITE_CONFIG.contact.phone1.replace(/\s/g, '')}`} className="text-xl font-medium text-lazaro-blue hover:text-lazaro-gold transition-colors flex items-center gap-2">
                    <Phone size={18} /> {SITE_CONFIG.contact.phone1}
                 </a>
                 <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-lg text-lazaro-blue hover:text-lazaro-gold transition-colors flex items-center gap-2">
                    <Mail size={18} /> {SITE_CONFIG.contact.email}
                 </a>
               </div>
            </div>

            <div className="bg-lazaro-blue/5 p-6 rounded-lg space-y-2">
               <h5 className="font-bold text-lazaro-blue flex items-center gap-2">
                 <Clock size={18} className="text-lazaro-gold"/> Horario
               </h5>
               <p className="text-gray-600 text-sm">
                 L-V: <span className="font-medium text-lazaro-blue">09:30–13:30</span> y <span className="font-medium text-lazaro-blue">17:00–20:00</span>
               </p>
            </div>
          </div>

          {/* COLUMNA DERECHA: MAPA FIJO */}
          <div className="h-[500px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl border-4 border-white relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.566735467385!2d-0.8548989234986548!3d41.6651268712653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd59150654766c1f%3A0x705856417769910!2sAv.%20Sta.%20Isabel%2C%2073%2C%2050016%20Zaragoza!5e0!3m2!1ses!2ses!4v1709669547635!5m2!1ses!2ses" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale hover:grayscale-0 transition-all duration-500" 
             ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}   