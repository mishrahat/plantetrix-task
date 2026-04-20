import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Ring } from '@react-three/drei';
import * as THREE from 'three';

interface BgPlanetData {
  radius: number;
  speed: number;
  size: number;
  color: string;
  angleOffset: number;
  yOffset: number;
}

const BG_PLANETS: BgPlanetData[] = [
  { radius: 3, speed: 0.1, size: 0.15, color: '#38bdf8', angleOffset: 0, yOffset: 0.5 }, // Light blue
  { radius: 4, speed: 0.08, size: 0.08, color: '#fbbf24', angleOffset: Math.PI / 2, yOffset: -0.8 }, // Small yellow
  { radius: 5, speed: 0.05, size: 0.2, color: '#fca5a5', angleOffset: Math.PI, yOffset: 0.2 }, // Pinkish
  { radius: 6, speed: 0.04, size: 0.25, color: '#d97706', angleOffset: Math.PI * 1.5, yOffset: -0.5 }, // Orange
  { radius: 3.5, speed: 0.12, size: 0.1, color: '#94a3b8', angleOffset: Math.PI * 0.75, yOffset: 1.2 }, // Grey
];

export function BackgroundPlanets() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    
    // Rotate the whole group slowly
    groupRef.current.rotation.y = t * 0.05;
    
    // Also add a slight floating motion
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.1;
  });

  return (
    <group ref={groupRef} position={[0, -0.8, -2]} rotation={[-0.2, 0, 0]}>
      {/* Concentric orbit rings */}
      {[2, 3, 4, 5, 6, 7].map((radius, i) => (
        <Ring key={`ring-${i}`} args={[radius, radius + 0.02, 64]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.05 - (i * 0.005)} side={THREE.DoubleSide} />
        </Ring>
      ))}

      {/* Background Planets */}
      {BG_PLANETS.map((planet, i) => {
        // Calculate static position based on radius and angle
        const x = Math.cos(planet.angleOffset) * planet.radius;
        const z = Math.sin(planet.angleOffset) * planet.radius;
        
        return (
          <Sphere key={i} args={[planet.size, 32, 32]} position={[x, planet.yOffset, z]}>
            <meshStandardMaterial 
              color={planet.color} 
              roughness={0.6}
              metalness={0.1}
              emissive={new THREE.Color(planet.color)}
              emissiveIntensity={0.2}
            />
          </Sphere>
        );
      })}
    </group>
  );
}
