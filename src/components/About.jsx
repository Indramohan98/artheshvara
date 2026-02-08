import Card from "./Card";
import logo from "../assets/logo.png";

export default function About() {
  return (
    <Card className="text-center">
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <div className="relative w-24 h-24 md:w-28 md:h-28">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-yellow-500/20 blur-2xl" />
          {/* Logo Image */}
          <img 
            src={logo} 
            alt="Artheshvara Logo" 
            className="w-full h-full object-contain relative z-10"
          />
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
        About Artheshvara
      </h2>

      <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6 max-w-md mx-auto">
        Artheshvara is a global influencer partnership company built of authority, strategy, and collaborate with creators who shape strech and deliver measurable impact.
      </p>

      {/* CTA Button */}
      <button className="px-6 md:px-7 py-2.5 md:py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-sm md:text-base font-semibold hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300">
        Start a Partnership
      </button>
    </Card>
  );
}