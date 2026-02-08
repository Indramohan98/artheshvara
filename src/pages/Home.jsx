import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import BuildInfluence from "../components/BuildInfluence";
import Logos from "../components/Logos";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
      <Hero />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <About />
        <Services />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BuildInfluence />
        <Logos />
      </div>
    </main>
  );
}