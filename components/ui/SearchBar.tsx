import { Search, MapPin } from "lucide-react";

export default function GlassSearchBar() {
  return (
    <div className="bg-white/95 backdrop-blur-md p-3 rounded-lg shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-2 border border-white/20 animate-in fade-in zoom-in duration-1000 delay-300">
      
      <div className="flex-grow flex items-center bg-gray-50 rounded px-4 py-3 border border-gray-200 focus-within:border-lazaro-gold transition-colors">
        <MapPin className="text-gray-400 mr-3" size={20} />
        <input 
          type="text" 
          placeholder="¿Buscas piso en Santa Isabel, Centro...?" 
          className="bg-transparent w-full outline-none text-gray-700 placeholder:text-gray-400 font-sans"
        />
      </div>
      
      <button className="bg-lazaro-gold hover:bg-lazaro-goldHover text-white px-8 py-4 rounded font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-wide text-sm md:text-base shadow-lg cursor-pointer">
        <Search size={18} />
        Buscar
      </button>

    </div>
  );
}