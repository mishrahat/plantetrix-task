import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Planet } from './Planet';
import { Background } from './Background';
import { BackgroundPlanets } from './BackgroundPlanets';
import { PostProcessing } from './PostProcessing';
import { PLANETS } from '../../utils/constants';
import { usePlanetStore } from '../../store/usePlanetStore';

export function Scene() {
  const activePlanetIndex = usePlanetStore((state) => state.activePlanetIndex);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Removed solid color background since we have a CSS radial gradient on body */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <Suspense fallback={null}>
          <Background />
          <BackgroundPlanets />
          
          <group>
            {PLANETS.map((planet, index) => {
              const isActive = index === activePlanetIndex;
              return (
                <Planet 
                  key={planet.id} 
                  planet={planet} 
                  isActive={isActive} 
                  index={index}
                  activeIndex={activePlanetIndex}
                />
              );
            })}
          </group>

          <PostProcessing />
        </Suspense>
      </Canvas>
    </div>
  );
}
