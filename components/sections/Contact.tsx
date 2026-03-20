import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/constants";

export default function Contact() {
  return (
    <section id="contacto" className="bg-lazaro-50 py-24 relative overflow-hidden">
      
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lazaro-gold/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABECERA DE SECCIÓN */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-lazaro-gold font-sans text-sm tracking-[0.2em] uppercase font-bold">
            Comunícate con nosotros
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-lazaro-blue font-bold leading-tight">
            O, aún mejor, ¡ven a visitarnos!
          </h3>
          <p className="text-gray-600 text-lg font-light">
            Nos encanta recibir a nuestros clientes, así que ven en cualquier momento durante las horas de oficina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* COLUMNA IZQUIERDA: DATOS */}
          <div className="space-y-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-lazaro-100">
            
            {/* Dirección */}
            <div className="space-y-4">
               <h4 className="text-2xl font-serif text-lazaro-blue font-bold flex items-center gap-3">
                 <MapPin className="text-lazaro-gold" />
                 {SITE_CONFIG.name}
               </h4>
               <p className="text-gray-600 text-lg leading-relaxed pl-9">
                 {SITE_CONFIG.contact.address}
               </p>
            </div>

            {/* Teléfonos y Email */}
            <div className="space-y-6 pl-9">
               <div className="flex flex-col space-y-2">
                 <span className="text-xs text-gray-400 uppercase tracking-wider">Llámanos</span>
                 <a href={`tel:${SITE_CONFIG.contact.phone1.replace(/\s/g, '')}`} className="text-xl font-medium text-lazaro-blue hover:text-lazaro-gold transition-colors flex items-center gap-2">
                    <Phone size={18} /> {SITE_CONFIG.contact.phone1}
                 </a>
                 <a href={`tel:${SITE_CONFIG.contact.phone2.replace(/\s/g, '')}`} className="text-xl font-medium text-lazaro-blue hover:text-lazaro-gold transition-colors flex items-center gap-2">
                    <Phone size={18} /> {SITE_CONFIG.contact.phone2}
                 </a>
               </div>

               <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                 <span className="text-xs text-gray-400 uppercase tracking-wider">Escríbenos</span>
                 <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-lg text-lazaro-blue hover:text-lazaro-gold transition-colors flex items-center gap-2 break-all">
                    <Mail size={18} /> {SITE_CONFIG.contact.email}
                 </a>
               </div>
            </div>

            {/* Horario */}
            <div className="bg-lazaro-blue/5 p-6 rounded-lg space-y-3">
               <h5 className="font-bold text-lazaro-blue flex items-center gap-2">
                 <Clock size={18} className="text-lazaro-gold"/> Horario
               </h5>
               <p className="text-gray-600">
                 Lunes a Viernes: <span className="font-medium text-lazaro-blue">09:30 – 14:00</span> y <span className="font-medium text-lazaro-blue">17:00 – 20:00</span>
               </p>
               <p className="text-sm text-gray-400 italic">Sábados y Domingos con cita previa.</p>
            </div>

            {/* Botón de acción */}
            <a 
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="w-full bg-lazaro-blue hover:bg-lazaro-blue/90 text-white py-4 rounded font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-wide text-sm shadow-lg group"
            >
              Contacta con nosotros
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </a>

          </div>


          {/* COLUMNA DERECHA: MAPA */}
          <div className="h-[500px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl border-4 border-white relative">
             {/* IFRAME DE GOOGLE MAPS (Av. Santa Isabel 73) */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.598688463583!2d-0.8447886234676166!3d41.66446897126588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5915050519f7b1%3A0x66f6004f21469038!2sAv.%20Sta.%20Isabel%2C%2073%2C%2050016%20Zaragoza!5e0!3m2!1ses!2ses!4v1709500000000!5m2!1ses!2ses" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale hover:grayscale-0 transition-all duration-500" // Efecto elegante: mapa en gris que se colorea al pasar el ratón
             ></iframe>
             
             {/* Etiqueta flotante sobre el mapa */}
             <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded shadow-lg text-xs font-bold text-lazaro-blue pointer-events-none">
                📍 Estamos aquí
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}