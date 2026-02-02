import { SITE_CONFIG } from "@/constants";
import FlipCard from "@/components/cards/FlipCard";     // Tu componente móvil
import FeatureRow from "@/components/ui/FeatureRow"; // Tu nuevo componente escritorio

export default function About() {
  return (
    <section className="py-12 md:py-24 bg-white">
      
      {/* ==============================================
          VISTA MÓVIL: CARRUSEL (FlipCards)
      =============================================== */}
      <div className="md:hidden space-y-4">
        <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest">
          ← Desliza y Toca →
        </p>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-8 no-scrollbar">
            
            {/* CARD 1: Historia */}
            <FlipCard 
                subtitle="Sobre Nosotros"
                title="Nuestra Historia"
                imageSrc="/logo.png" 
                imageAlt="Historia Lázaro"
            >
                 <div className="text-gray-600 space-y-4 text-base font-light leading-relaxed">
                    <p>Tras más de <strong className="text-lazaro-blue font-medium">10 años en el sector</strong>, creamos <strong>{SITE_CONFIG.name}</strong>.</p>
                    <p>No somos una franquicia más; somos vecinos que conocen cada calle.</p>
                    <div className="pt-2 border-t border-gray-100 mt-2">
                        <span className="block text-xs text-gray-400 uppercase">Llámanos</span>
                        <p className="font-serif text-lazaro-blue">{SITE_CONFIG.contact.phone1}</p>
                    </div>
                </div>
            </FlipCard>

            {/* CARD 2: Servicios */}
            <FlipCard 
                subtitle="¿Qué hacemos?"
                title="Servicios Integrales"
                imageSrc="/logo.png" 
                imageAlt="Servicios Inmobiliarios"
            >
                 <div className="text-gray-600 space-y-4 text-base font-light leading-relaxed">
                    <p>Nos especializamos en la compra y venta de inmuebles con gestión integral.</p>
                    <p>Garantizamos un proceso seguro y profesional.</p>
                    <blockquote className="border-l-2 border-lazaro-gold pl-4 py-1 mt-2">
                        <p className="text-lg font-serif text-lazaro-blue italic">Vecinos ayudando a vecinos.</p>
                    </blockquote>
                </div>
            </FlipCard>
        </div>
      </div>


      {/* VISTA ESCRITORIO */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* BLOQUE 1: Historia */}
        <FeatureRow
            subtitle="Sobre Nosotros"
            title="Nuestra Historia"
            imageSrc="/logo.png"
            imageAlt="Lázaro Inmobiliaria"
            imageLeft={false}
            // --- AQUÍ ESTÁ EL CAMBIO ---
            imageOverlay={
                // Usamos 'bottom-0 left-0' para pegarlo a la esquina inferior
                // Usamos 'w-full md:w-auto' para que en pantallas pequeñas ocupe todo el ancho (se lee mejor)
                <div className="absolute bottom-0 left-0 bg-lazaro-gold text-white p-6 md:p-8 z-10 w-full md:w-auto">
                    <p className="text-3xl font-serif font-bold">10+</p>
                    <p className="text-xs md:text-sm uppercase tracking-wider opacity-90">Años de experiencia</p>
                </div>
            }
            // ---------------------------
        >
            <p>
                Tras más de <strong className="text-lazaro-blue font-medium">10 años en el sector inmobiliario</strong>, 
                decidimos dar un paso adelante y crear <strong>{SITE_CONFIG.name}</strong>.
            </p>
            {/* ... resto del texto y contacto ... */}
             <p>
                Nuestra experiencia en la intermediación nos permite ofrecer un servicio excepcional y 
                personalizado a nuestros clientes.
            </p>
            <p>
                Entendemos que comprar o vender una vivienda es una de las decisiones más importantes de tu vida, 
                y por eso trabajamos con transparencia absoluta.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-8 border-t border-gray-100">
                <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Llámanos</span>
                    <a href={`tel:${SITE_CONFIG.contact.phone1.replace(/\s/g, '')}`} className="text-xl font-serif text-lazaro-blue hover:text-lazaro-gold transition-colors">
                        {SITE_CONFIG.contact.phone1}
                    </a>
                </div>
                <div>
                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">Visítanos</span>
                    <p className="text-base text-gray-700 font-medium">Santa Isabel 73, Zaragoza</p>
                </div>
            </div>
        </FeatureRow>


        {/* BLOQUE 2: Servicios (ESTE SE QUEDA SIN BADGE) */}
        <FeatureRow
            subtitle="¿Qué hacemos?"
            title="Servicios Integrales"
            imageSrc="/logo.png"
            imageAlt="Servicio cercano"
            imageLeft={true}
            // Aquí NO pasamos imageOverlay, así que no sale nada
        >
           {/* ... texto del segundo bloque ... */}
           <p>
                En <strong>{SITE_CONFIG.name}</strong>, nos especializamos en la compra y venta de inmuebles, 
                brindando una gestión integral en cada transacción. 
            </p>
            <p>
                Nos comprometemos a garantizar un proceso seguro y profesional para nuestros clientes,
                ocupándonos de cada detalle.
            </p>
            
            <blockquote className="border-l-4 border-lazaro-gold pl-6 py-2 mt-4">
                <p className="text-2xl font-serif text-lazaro-blue italic">
                  Vecinos ayudando a vecinos.
                </p>
            </blockquote>

            <button className="inline-block mt-4 text-lazaro-gold font-medium border-b border-lazaro-gold hover:text-lazaro-blue hover:border-lazaro-blue transition-all pb-1 tracking-wide uppercase text-sm">
              Ver todos nuestros servicios
            </button>
        </FeatureRow>

      </div>
    </section>
  );
}