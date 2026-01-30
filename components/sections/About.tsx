import Image from "next/image";
import { SITE_CONFIG } from "@/constants";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* BLOQUE 1: NUESTRA HISTORIA (Texto Izq - Imagen Der) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Texto */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <h2 className="text-lazaro-gold font-sans text-sm tracking-[0.2em] uppercase font-bold">
                Sobre Nosotros
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-lazaro-blue font-bold leading-tight">
                Nuestra Historia
              </h3>
              <div className="w-20 h-1 bg-lazaro-gold"></div>
            </div>

            <div className="text-gray-600 space-y-6 text-lg font-light leading-relaxed">
              <p>
                Tras más de <strong className="text-lazaro-blue font-medium">10 años en el sector inmobiliario</strong>, 
                decidimos dar un paso adelante y crear <strong>{SITE_CONFIG.name}</strong>.
              </p>
              <p>
                Nuestra experiencia en la intermediación nos permite ofrecer un servicio excepcional y 
                personalizado a nuestros clientes. No somos una franquicia más; somos vecinos que conocen 
                cada calle y cada edificio.
              </p>
              <p>
                Entendemos que comprar o vender una vivienda es una de las decisiones más importantes de tu vida, 
                y por eso trabajamos con transparencia absoluta.
              </p>
            </div>

            {/* Datos de contacto rápidos */}
            <div className="pt-4 flex flex-col sm:flex-row gap-8 border-t border-gray-100">
                <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Llámanos</span>
                    <a href={`tel:${SITE_CONFIG.contact.phone1.replace(/\s/g, '')}`} className="text-xl font-serif text-lazaro-blue hover:text-lazaro-gold transition-colors">
                        {SITE_CONFIG.contact.phone1}
                    </a>
                </div>
                <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Visítanos</span>
                    <p className="text-base text-gray-700 font-medium">
                        Santa Isabel 73, Zaragoza
                    </p>
                </div>
            </div>
          </div>

          {/* Imagen (Logo) */}
          <div className="relative h-[500px] w-full bg-lazaro-100 rounded-lg overflow-hidden shadow-2xl group">
             <Image
                src="/logo.png" 
                alt="Lázaro Inmobiliaria"
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority 
             />
             <div className="absolute -bottom-6 -left-6 bg-lazaro-gold text-white p-8 rounded-sm shadow-xl hidden md:block z-10">
                <p className="text-3xl font-serif font-bold">10+</p>
                <p className="text-sm uppercase tracking-wider opacity-90">Años de experiencia</p>
             </div>
          </div>

        </div>

        {/* BLOQUE 2: SERVICIOS INTEGRALES (Imagen Izq - Texto Der) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Imagen (Cercanía/Reunión) */}
          {/* 'order-last md:order-first' hace que en móvil salga la foto debajo, pero en PC a la izquierda */}
          <div className="relative h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-2xl group order-last md:order-first">
             <Image
                // Foto de stock: Agente hablando amistosamente con clientes (Cercanía)
                src="/logo.png"
                alt="Servicio cercano y profesional"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
             />
             {/* Overlay sutil al hacer hover */}
             <div className="absolute inset-0 bg-lazaro-blue/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Texto */}
          <div className="space-y-8 animate-in slide-in-from-right duration-700">
            <div className="space-y-4">
              <h2 className="text-lazaro-gold font-sans text-sm tracking-[0.2em] uppercase font-bold">
                ¿Qué hacemos?
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-lazaro-blue font-bold leading-tight">
                Servicios Integrales
              </h3>
              <div className="w-20 h-1 bg-lazaro-gold"></div>
            </div>

            <div className="text-gray-600 space-y-6 text-lg font-light leading-relaxed">
              <p>
                En <strong>{SITE_CONFIG.name}</strong>, nos especializamos en la compra y venta de inmuebles, 
                brindando una gestión integral en cada transacción. 
              </p>
              <p>
                Nos comprometemos a garantizar un proceso seguro y profesional para nuestros clientes,
                ocupándonos de cada detalle para que tú solo disfrutes del resultado.
              </p>
              
              {/* Cita destacada */}
              <blockquote className="border-l-4 border-lazaro-gold pl-6 py-2 mt-4">
                <p className="text-2xl font-serif text-lazaro-blue italic">
                  Vecinos ayudando a vecinos.
                </p>
              </blockquote>
            </div>

            <button className="inline-block mt-4 text-lazaro-gold font-medium border-b border-lazaro-gold hover:text-lazaro-blue hover:border-lazaro-blue transition-all pb-1 tracking-wide uppercase text-sm">
              Ver todos nuestros servicios
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}