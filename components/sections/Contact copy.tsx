"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Map as MapIcon, Repeat } from "lucide-react";
import { SITE_CONFIG } from "@/constants";

export default function Contact() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    // IMPORTANTE: Aquí hemos añadido el id="contacto" para el menú
    <section id="contacto" className="bg-lazaro-50 py-16 md:py-24 relative overflow-hidden">
      
      {/* Línea dorada decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lazaro-gold/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABECERA */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4">
          <h2 className="text-lazaro-gold font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
            Comunícate con nosotros
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-lazaro-blue font-bold leading-tight">
            Ven a visitarnos
          </h3>
          <p className="text-gray-600 text-base md:text-lg font-light hidden md:block">
            Nos encanta recibir a nuestros clientes. Ven a vernos en nuestro horario de oficina.
          </p>
        </div>

        {/* ==============================================================
            TAREA 6: AJUSTE VISTA MÓVIL (TARJETA GIRATORIA)
            ============================================================== */}
        <div className="md:hidden perspective-1000 min-h-[450px] w-full cursor-pointer group" onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`relative w-full h-full min-h-[450px] duration-700 preserve-3d transition-all ${isFlipped ? "rotate-y-180" : ""}`} style={{ transformStyle: "preserve-3d" }}>
                
                {/* --- CARA DELANTERA (DATOS) --- */}
                <div className="absolute inset-0 backface-hidden bg-white rounded-2xl p-6 shadow-xl border border-lazaro-100 flex flex-col justify-between" style={{ backfaceVisibility: "hidden" }}>
                    
                    <div>
                        <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
                            <div className="bg-lazaro-50 p-3 rounded-full text-lazaro-gold">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h4 className="font-serif text-xl text-lazaro-blue font-bold">Horario</h4>
                                <p className="text-xs text-gray-400">Toca para ver el mapa</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-1 bg-gray-50 p-4 rounded-lg">
                                <p className="text-sm font-bold text-lazaro-blue uppercase tracking-wider mb-2">Lunes a Viernes</p>
                                <div className="flex justify-between text-gray-600 text-base font-light">
                                    <span>Mañanas:</span>
                                    <span className="font-medium">09:30 – 13:30</span>
                                </div>
                                <div className="flex justify-between text-gray-600 text-base font-light">
                                    <span>Tardes:</span>
                                    <span className="font-medium">17:00 – 20:00</span>
                                </div>
                            </div>
                            
                            <div className="px-2">
                                <p className="text-sm font-bold text-lazaro-blue uppercase tracking-wider mb-1">Dirección</p>
                                <p className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                                    <MapPin size={18} className="text-lazaro-gold mt-1 shrink-0" />
                                    {SITE_CONFIG.contact.address}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Botón visual (no hace falta onClick porque toda la tarjeta gira) */}
                    <div className="w-full bg-lazaro-blue text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-sm mt-4 shadow-md">
                        <MapIcon size={18} />
                        Ver Mapa
                    </div>
                </div>

                {/* --- CARA TRASERA (MAPA) --- */}
                <div 
                    className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl rotate-y-180 bg-gray-100 border-4 border-white" 
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    {/* Reemplaza este src por el enlace real de "Insertar mapa" de Google Maps */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.781846505342!2d-0.8354972!3d41.6599806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914c62c9540c7%3A0xc3f64c67bf3c0f44!2sAv.%20de%20Santa%20Isabel%2C%2073%2C%2050016%20Zaragoza!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
                        <div className="bg-white/90 backdrop-blur text-lazaro-blue px-6 py-2 rounded-full shadow-lg text-xs font-bold flex items-center gap-2 border border-gray-200 uppercase tracking-wide">
                            <Repeat size={14} /> Volver a los horarios
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* ==============================================================
            TAREA 5: AJUSTE VISTA ESCRITORIO (WEB)
            ============================================================== */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
          
          {/* COLUMNA IZQUIERDA: DATOS */}
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-lazaro-100 flex flex-col justify-center space-y-10">
            
            <div className="space-y-4">
               <h4 className="text-2xl font-serif text-lazaro-blue font-bold flex items-center gap-3">
                 <MapPin className="text-lazaro-gold" size={28} />
                 Ubicación
               </h4>
               <p className="text-gray-600 text-lg leading-relaxed pl-10">
                 {SITE_CONFIG.contact.address}
               </p>
            </div>

            <div className="space-y-4 pl-10">
                 <a href={`tel:${SITE_CONFIG.contact.phone1.replace(/\s/g, '')}`} className="text-xl font-medium text-lazaro-blue hover:text-lazaro-gold transition-colors flex items-center gap-3">
                    <Phone size={20} /> {SITE_CONFIG.contact.phone1}
                 </a>
                 <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-lg text-lazaro-blue hover:text-lazaro-gold transition-colors flex items-center gap-3">
                    <Mail size={20} /> {SITE_CONFIG.contact.email}
                 </a>
            </div>

            <div className="bg-lazaro-50 p-6 rounded-xl space-y-3 border border-lazaro-100">
               <h5 className="font-bold text-lazaro-blue flex items-center gap-2 uppercase tracking-wide text-sm">
                 <Clock size={16} className="text-lazaro-gold"/> Horario de oficina
               </h5>
               <div className="space-y-1 text-gray-600">
                 <p className="flex justify-between"><span className="text-sm uppercase text-gray-400">Mañanas</span> <span className="font-medium text-lazaro-blue">09:30 – 13:30</span></p>
                 <p className="flex justify-between"><span className="text-sm uppercase text-gray-400">Tardes</span> <span className="font-medium text-lazaro-blue">17:00 – 20:00</span></p>
               </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: MAPA FIJO */}
          <div className="min-h-[500px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl border-4 border-white relative group">
             {/* Reemplaza este src también */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.781846505342!2d-0.8354972!3d41.6599806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914c62c9540c7%3A0xc3f64c67bf3c0f44!2sAv.%20de%20Santa%20Isabel%2C%2073%2C%2050016%20Zaragoza!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale group-hover:grayscale-0 transition-all duration-700" 
             ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}