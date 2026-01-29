import Image from "next/image";
import { SITE_CONFIG } from "@/constants";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Texto */}
          <div className="space-y-8">
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

          {/* COLUMNA DERECHA: Imagen */}
          <div className="relative h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
             {/* Usamos una foto de oficina/reunión profesional */}
             <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop')"
                }}
             />
             {/* Cuadro flotante decorativo */}
             <div className="absolute -bottom-6 -left-6 bg-lazaro-gold text-white p-8 rounded-sm shadow-xl hidden md:block">
                <p className="text-3xl font-serif font-bold">10+</p>
                <p className="text-sm uppercase tracking-wider opacity-90">Años de experiencia</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}