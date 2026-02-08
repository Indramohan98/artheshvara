import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mb-4">
      {/* Logo with icon */}
      <div className="flex items-center gap-2">
        <img 
          src={logo} 
          alt="Artheshvara" 
          className="w-8 h-8 md:w-10 md:h-10 object-contain"
        />
        <h1 className="text-yellow-400 font-semibold tracking-wide text-sm md:text-base">
          ARTHESHVARA
        </h1>
      </div>

      {/* Navigation links */}
      <div className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm text-gray-300">
        <a className="hover:text-yellow-400 cursor-pointer transition-colors">Partnerships</a>
        <a className="hover:text-yellow-400 cursor-pointer transition-colors">Anti kits</a>
        <a className="hover:text-yellow-400 cursor-pointer transition-colors">Competent</a>
      </div>
    </nav>
  );
}