import Card from "./Card";
import Navbar from "./Navbar";
import logo from "../assets/logo.PNG";

export default function Hero() {
  return (
    <Card className="text-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <Navbar />

        {/* Logo */}
        <div className="mt-8 md:mt-12 mb-6 md:mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
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

        {/* Heading */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white px-4">
          Powering Influence for Global Brands
        </h1>

        {/* Subheading */}
        <p className="text-gray-400 max-w-xl mx-auto mt-4 md:mt-5 text-sm md:text-base px-4">
          We connect brands with influential voice through strategy-led, global creator partnerships.
        </p>

        {/* CTA Button */}
        <button className="mt-6 md:mt-8 px-6 md:px-8 py-2.5 md:py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-sm md:text-base font-semibold hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300">
          Start a Partnership
        </button>

        {/* Bottom spacing */}
        <div className="h-4 md:h-6"></div>
      </div>
    </Card>
  );
}