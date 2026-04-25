import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, useTexture } from '@react-three/drei'; // added useTexture here
import * as THREE from 'three';
import type { PlanetData } from '../../utils/constants';

interface PlanetProps {
  planet: PlanetData;
  isActive: boolean;
  index: number;
  activeIndex: number;
}





function PlanetMaterial({ planet }: { planet: PlanetData }) {


  
  return <meshBasicMaterial map={texture} transparent={true}  />;
}
 
// Fallback when no textureUrl — plain color, no hook needed
function PlanetMaterialPlain({ planet }: { planet: PlanetData }) {
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
 
  return <meshStandardMaterial {...materialProps} />;
}

export function Planet({ planet, isActive, index, activeIndex }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const texture = useTexture(planet.textureUrl!);
 
  useFrame((state, delta) => {
    if (!meshRef.current || !groupRef.current) return;
 
    const targetScale = isActive ? 2.5 : 0.001;
 
    let targetX = 0;
    if (!isActive) {
      targetX = index > activeIndex ? 10 : -10;
    }
 
    const baseY = isActive ? -0.8 : 0;
    const targetY = baseY + (isActive ? Math.sin(state.clock.elapsedTime) * 0.1 : 0);
 
    const lerpFactor = 1 - Math.exp(-delta * 5);
 
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), lerpFactor);
    groupRef.current.position.lerp(new THREE.Vector3(targetX, targetY, 0), lerpFactor);
  });
 
  return (
    <group ref={groupRef} scale={0.001}>
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />         
      <meshBasicMaterial
        map={texture}
        transparent={true}                    
        alphaTest={0.1}                        
      />
    </mesh>
  </group>
  );
}
