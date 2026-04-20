import { Header } from './Header';
import { Footer } from './Footer';
import { PLANETS } from '../../utils/constants';
import { usePlanetStore } from '../../store/usePlanetStore';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Overlay() {
  const activePlanetIndex = usePlanetStore((state) => state.activePlanetIndex);
  
  const planet = PLANETS[activePlanetIndex];
  // Calculate next and prev. Wrap around the array using modulo.
  const prevPlanet = PLANETS[(activePlanetIndex - 1 + PLANETS.length) % PLANETS.length];
  const nextPlanet = PLANETS[(activePlanetIndex + 1) % PLANETS.length];

  const contentRef = useRef<HTMLDivElement>(null);

  // Subtle fade/slide in animation when planet changes
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [activePlanetIndex]);

  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-between overflow-hidden pointer-events-none">
      <div className="pointer-events-auto">
        <Header />
      </div>

      <main className="flex-1 flex flex-col items-center pt-32 relative pointer-events-none">
        <div ref={contentRef} className="flex flex-col items-center w-full">
          <h2 className="text-4xl font-bold tracking-[0.2em] uppercase mb-8 drop-shadow-lg z-20">
            {planet.name}
          </h2>

          <div className="flex gap-16 text-center z-20">
            <div>
              <h3 className="text-white/60 text-sm font-semibold tracking-wider mb-2">GALAXY</h3>
              <p className="text-sm">{planet.galaxy}</p>
            </div>
            <div>
              <h3 className="text-white/60 text-sm font-semibold tracking-wider mb-2">DIAMETER</h3>
              <p className="text-sm">{planet.diameter}</p>
            </div>
            <div>
              <h3 className="text-white/60 text-sm font-semibold tracking-wider mb-2">LENGTH OF DAY</h3>
              <p className="text-sm">{planet.lengthOfDay}</p>
            </div>
            <div>
              <h3 className="text-white/60 text-sm font-semibold tracking-wider mb-2">AVERAGE TEMPERATURE</h3>
              <p className="text-sm">{planet.temperature}</p>
            </div>
          </div>
        </div>

        {/* Side planet labels */}
        <div className="absolute inset-x-0 top-1/2 flex justify-between px-16 w-full items-center z-20">
          <div className="text-3xl font-light tracking-[0.2em] text-white/50">{prevPlanet.name}</div>
          <div className="text-3xl font-light tracking-[0.2em] text-white/50">{nextPlanet.name}</div>
        </div>
        
      </main>

      {/* Blurred foreground planets in footer area */}
      <div className="absolute bottom-10 left-[40%] w-16 h-16 rounded-full bg-orange-600 blur-[6px] opacity-70 z-20 pointer-events-none"></div>
      <div className="absolute bottom-2 left-[55%] w-10 h-10 rounded-full bg-gray-300 blur-[4px] opacity-60 z-20 pointer-events-none"></div>
      <div className="absolute -bottom-6 right-[20%] w-24 h-24 rounded-full bg-blue-500 blur-[8px] opacity-80 z-20 pointer-events-none"></div>

      <div className="pointer-events-auto">
        <Footer />
      </div>
    </div>
  );
}
