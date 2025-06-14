export default function LayeredButtonGetInTouch() {
  return (
    <div className="relative inline-block group">
      {/* Camada 3 (mais distante no hover) */}
      <div className="absolute inset-0 bg-blue-500 rounded border-2 border-black 
                      translate-x-0 translate-y-0 
                      group-hover:translate-x-4 group-hover:translate-y-4 
                      opacity-100 transition-all duration-300 z-0">
      </div>

      {/* Camada 2 (distância média no hover) */}
      <div className="absolute inset-0 bg-green-500 rounded border-2 border-black 
                      translate-x-0 translate-y-0 
                      group-hover:translate-x-2 group-hover:translate-y-2 
                      opacity-100 transition-all duration-300 z-10">
      </div>

      {/* Botão principal */}
      <button className="relative z-20 px-6 py-3 bg-yellow-400 text-black font-bold 
                         rounded border-2 border-black shadow-md transition-all duration-300">
        Send me an email
      </button>
    </div>
  );
}
