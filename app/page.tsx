import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      
      {/* Sección temporal de "Propiedades Próximamente" (Foto 4) */}
      <section className="py-24 bg-lazaro-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-lazaro-blue mb-4">
            Nuestras Propiedades
          </h2>
          <p className="text-gray-500 mb-8">
            Estamos seleccionando las mejores viviendas para ti. <br />
            Muy pronto podrás ver nuestro catálogo completo aquí.
          </p>
          <div className="inline-block px-6 py-3 border border-lazaro-blue/20 rounded text-lazaro-blue text-sm uppercase tracking-widest">
            Próximamente
          </div>
        </div>
      </section>
    </main>
  );
}