import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Ring } from '@react-three/drei';

// Each background planet — fixed position, no orbit animation
interface BgPlanetData {
  textureUrl: string;
  size: number;
  position: [number, number, number];
}

const BG_PLANETS: BgPlanetData[] = [
  // Left side — large, partially cropped (Neptune in design)
  { textureUrl: '/textures/neptune.png', size: 1.8, position: [-7.5, 0, 0] },
  // Left side inner — smaller teal planet (Uranus)
  { textureUrl: '/textures/uranus.png', size: 0.6, position: [-4, 0.3, -1] },
  // Right side — large, partially cropped (Mercury in design)
  { textureUrl: '/textures/mercury.png', size: 1.8, position: [7.5, 0, 0] },
  // Bottom small planets visible in design
  { textureUrl: '/textures/venus.png',   size: 0.35, position: [-1.5, -2.5, -1] },
  { textureUrl: '/textures/jupiter.png', size: 0.5,  position: [2.5, -2, -1] },
];

// Each planet is its own component so useTexture is always called unconditionally
function BgPlanet({ planet }: { planet: BgPlanetData }) {
  const texture = useTexture(planet.textureUrl);

  return (
    <mesh position={planet.position}>
      <planeGeometry args={[planet.size * 2, planet.size * 2]} />
      <meshBasicMaterial
        map={texture}
        transparent={true}
        alphaTest={0.1}
      />
    </mesh>
  );
}

export function BackgroundPlanets() {
  return (
    // No rotation, no animation on the group — planets are fixed in space
    <group position={[0, -0.8, -2]} rotation={[-0.2, 0, 0]}>
      {/* Orbit rings — same as before */}
      {[2, 3, 4, 5, 6, 7].map((radius, i) => (
        <Ring key={`ring-${i}`} args={[radius, radius + 0.02, 64]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.05 - i * 0.005}
            side={THREE.DoubleSide}
          />
        </Ring>
      ))}

      {/* Background planets with actual textures, fixed positions */}
      {BG_PLANETS.map((planet, i) => (
        <BgPlanet key={i} planet={planet} />
      ))}
    </group>
  );
}