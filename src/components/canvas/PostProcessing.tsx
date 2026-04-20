import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';

export function PostProcessing() {
  return (
    <EffectComposer>
      <Bloom 
        intensity={0.8} 
        luminanceThreshold={0.4} 
        luminanceSmoothing={0.8} 
        mipmapBlur 
      />
      <Vignette eskil={false} offset={0.1} darkness={0.8} />
    </EffectComposer>
  );
}
