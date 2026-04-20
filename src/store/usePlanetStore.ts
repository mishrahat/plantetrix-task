import { create } from 'zustand';

interface PlanetState {
  activePlanetIndex: number;
  scrollProgress: number;
  setActivePlanetIndex: (index: number) => void;
  setScrollProgress: (progress: number) => void;
}

export const usePlanetStore = create<PlanetState>((set) => ({
  activePlanetIndex: 0,
  scrollProgress: 0,
  setActivePlanetIndex: (index) => set({ activePlanetIndex: index }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
}));
