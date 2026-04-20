export interface PlanetData {
  id: string;
  name: string;
  galaxy: string;
  diameter: string;
  lengthOfDay: string;
  temperature: string;
  color: string;
  emissive?: boolean;
}

export const PLANETS: PlanetData[] = [
  {
    id: 'sun',
    name: 'SUN',
    galaxy: 'Milky Way',
    diameter: '1,392,684 km',
    lengthOfDay: '...',
    temperature: '6000 Kelvin',
    color: '#ff4500',
    emissive: true,
  },
  {
    id: 'mercury',
    name: 'MERCURY',
    galaxy: 'Milky Way',
    diameter: '4,879 km',
    lengthOfDay: '4,222 hours',
    temperature: '430°C (Day)',
    color: '#8c8c94',
  },
  {
    id: 'neptune',
    name: 'NEPTUNE',
    galaxy: 'Milky Way',
    diameter: '49,244 km',
    lengthOfDay: '16 hours',
    temperature: '-214°C',
    color: '#3f54ba',
  }
];
