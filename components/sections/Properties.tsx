import { ExternalLink, Home } from "lucide-react";

export default function Properties() {
  const IDEALISTA_URL = "https://www.idealista.com/pro/tecnocasa-santa-isabel/"; 

  return (
    <section id="propiedades" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tarjeta CTA (Call To Action) */}
        <div className="bg-lazaro-50 rounded-3xl p-8 md:p-16 text-center border border-lazaro-100 shadow-lg relative overflow-hidden group">
          
          {/* Icono decorativo de fondo */}
          <div className="absolute -top-10 -right-10 text-lazaro-gold/10 group-hover:text-lazaro-gold/20 transition-colors duration-700 pointer-events-none">
            <Home size={250} />
          </div>

          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            
            <div className="space-y-4">
              <h2 className="text-lazaro-gold font-sans text-sm tracking-[0.2em] uppercase font-bold">
                Catálogo de Inmuebles
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif text-lazaro-blue font-bold leading-tight">
                Encuentra tu próximo hogar
              </h3>
            </div>

            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Para ofrecerte la información más actualizada, con galerías de fotos completas y disponibilidad en tiempo real, gestionamos nuestra cartera directamente a través de nuestro portal profesional en <strong className="font-semibold text-lazaro-blue">Idealista</strong>.
            </p>
            
            <div className="pt-4">
              <a 
                href={IDEALISTA_URL}
                target="_blank" // Abre en pestaña nueva
                rel="noopener noreferrer" // Por seguridad al abrir pestañas nuevas
                className="inline-flex items-center gap-3 bg-lazaro-blue hover:bg-lazaro-blue/90 text-white px-8 py-4 rounded font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-1 uppercase tracking-wider text-sm"
              >
                Ver propiedades en Idealista
                <ExternalLink size={18} />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}