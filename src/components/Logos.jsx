import Card from "./Card";
import netflixLogo from "../assets/Netflix.PNG";
import amazonLogo from "../assets/Amazon.PNG";
import metaLogo from "../assets/Meta.PNG";
import plexLogo from "../assets/plex-logo.svg";
import TikTokLogo from "../assets/Spotify.png";
import disneyLogo from "../assets/disney.svg";

export default function Logos() {

  const handlePartershipClick = () => {
    // window.open('https://docs.google.com/forms/d/e/1FAIpQLSe361oHxCkdJj5y2CLnAgyzfCQonptbe2GV9u00NNMx2lUB1A/viewform?embedded=true%22');
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSe361oHxCkdJj5y2CLnAgyzfCQonptbe2GV9u00NNMx2lUB1A/viewform?embedded=true%22';
  };

  return (
    <Card className="text-center flex flex-col justify-between h-full">
      {/* Header text */}
      <div>
        <p className="text-xs text-gray-500 mb-8 uppercase tracking-wider">
          Logos displayed represent platform Amasub Prime Video
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8 max-w-md mx-auto items-center">
          {/* Row 1 */}
          <div className="flex items-center justify-center">
            <img 
              src={netflixLogo} 
              alt="Netflix" 
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
          <div className="flex items-center justify-center">
            <img 
              src={amazonLogo} 
              alt="Amazon" 
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
            />
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-center">
            <img 
              src={plexLogo} 
              alt="plex" 
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
          <div className="flex items-center justify-center">
            <img 
              src={metaLogo} 
              alt="Meta" 
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
            />
          </div>

          {/* Row 3 */}
          <div className="flex items-center justify-center">
            <img 
              src={disneyLogo} 
              alt="Disney Hotstar" 
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
          <div className="flex items-center justify-center">
            <img 
              src={TikTokLogo} 
              alt="YouTube" 
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="mt-auto pt-6 border-t border-gray-800">
        <p className="text-xs md:text-sm text-gray-400 mb-4 leading-relaxed">
          Logos displayed represent and campaign and se ensuring official endorsement.
        </p>

        {/* CTA Button */}
        <button 
          onClick={handlePartershipClick}
          className="px-6 md:px-8 py-2.5 md:py-3 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-sm md:text-base font-semibold hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 mb-4">
          Start a Partnership
        </button>

        {/* Bottom quote */}
        <p className="text-xs text-gray-500 italic">
          <span className="text-yellow-500">❝❝</span> Great influence are combine-gep-questionote.
        </p>
      </div>
    </Card>
  );
}