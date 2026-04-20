import { useEffect, useRef, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scene } from './components/canvas/Scene';
import { Overlay } from './components/ui/Overlay';
import { Loader } from './components/ui/Loader';
import { usePlanetStore } from './store/usePlanetStore';
import { PLANETS } from './utils/constants';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const setActivePlanetIndex = usePlanetStore((state) => state.setActivePlanetIndex);
  const setScrollProgress = usePlanetStore((state) => state.setScrollProgress);

  useEffect(() => {
    if (!containerRef.current) return;

    // We have 3 planets, so scroll length is 300vh
    const totalPlanets = PLANETS.length;
    
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${totalPlanets * 100}%`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        // Math.floor will calculate the current planet from progress [0, 1]
        // multiply by (totalPlanets - 0.01) to ensure it never reaches the array out of bounds
        const newIndex = Math.floor(self.progress * (totalPlanets - 0.01));
        setActivePlanetIndex(newIndex);
        setScrollProgress(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [setActivePlanetIndex]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-space-dark text-white overflow-hidden">
      {/* 3D Canvas Layer */}
      <Scene />

      {/* DOM Overlay Layer */}
      <Suspense fallback={<Loader />}>
        <Overlay />
      </Suspense>
    </div>
  );
}

export default App;
