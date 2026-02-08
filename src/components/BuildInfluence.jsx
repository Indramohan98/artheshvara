import Card from "./Card";
import logo from "../assets/logo.png";

export default function BuildInfluence() {
  return (
    <Card className="text-center flex flex-col h-full">
      {/* Top heading */}
      <div className="mb-2">
        <h2 className="text-base md:text-lg font-normal text-white leading-relaxed">
          Expars e fire ohore cclwer
        </h2>
        <h2 className="text-base md:text-lg font-normal text-white leading-relaxed">
          aotiwect in groing menrurs.
        </h2>
        
        <p className="text-xs text-gray-500 mt-3 italic">
          Pioneering UltraSheen sageontiene esitoos.
        </p>
      </div>

      {/* Center logo with frame effect */}
      <div className="flex-1 flex items-center justify-center mb-4">
        <div className="relative w-40 h-40">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-yellow-500/30 blur-3xl"></div>
          {/* Logo */}
          <img 
            src={logo} 
            alt="Artheshvara Logo" 
            className="w-full h-full object-contain relative z-10"
          />
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-4 mb-2">
        <p className="text-sm md:text-base text-yellow-400 font-medium">
          Build influence that lasts.
        </p>
      </div>
    </Card>
  );
}