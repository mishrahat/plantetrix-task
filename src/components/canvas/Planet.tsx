import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import type { PlanetData } from '../../utils/constants';

interface PlanetProps {
  planet: PlanetData;
  isActive: boolean;
  index: number;
  activeIndex: number;
}

export function Planet({ planet, isActive, index, activeIndex }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!meshRef.current || !groupRef.current) return;
    
    // Slow rotation for the planet surface
    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.x += 0.0005;

    // Target values
    const targetScale = isActive ? 2.5 : 0.001; // Can't be exactly 0 for some bounding boxes, so 0.001
    
    // Determine position based on if it's before or after the current active index
    let targetX = 0;
    if (!isActive) {
      targetX = index > activeIndex ? 10 : -10;
    }
    
    // Base Y is lower for the active planet so it doesn't overlap text
    const baseY = isActive ? -0.8 : 0;
    const targetY = baseY + (isActive ? Math.sin(state.clock.elapsedTime) * 0.1 : 0); // Anti-gravity floating

    // Smooth lerping using delta for framerate independence
    const lerpFactor = 1 - Math.exp(-delta * 5); // Smooth dampening

    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), lerpFactor);
    groupRef.current.position.lerp(new THREE.Vector3(targetX, targetY, 0), lerpFactor);
  });

  const materialProps = planet.emissive
    ? {
        color: planet.color,
        emissive: new THREE.Color(planet.color),
        emissiveIntensity: 2,
        toneMapped: false,
      }
    : {
        color: planet.color,
        roughness: 0.8,
        metalness: 0.2,
      };

  return (
    <group ref={groupRef} scale={0.001}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <meshStandardMaterial {...materialProps} />
      </Sphere>
    </group>
  );
}
