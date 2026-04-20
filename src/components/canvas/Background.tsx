import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

export function Background() {
  const starsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!starsRef.current) return;
    
    // Subtle parallax shift based on mouse position
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    // Smooth lerp for the background rotation
    starsRef.current.rotation.x = THREE.MathUtils.lerp(
      starsRef.current.rotation.x,
      mouseY * 0.05,
      0.05
    );
    starsRef.current.rotation.y = THREE.MathUtils.lerp(
      starsRef.current.rotation.y,
      mouseX * 0.05,
      0.05
    );
    
    // Slow continuous rotation
    starsRef.current.rotation.z -= 0.0002;
  });

  return (
    <Stars 
      ref={starsRef}
      radius={100} 
      depth={50} 
      count={5000} 
      factor={4} 
      saturation={0} 
      fade 
      speed={1} 
    />
  );
}
