export interface PlanetData {
  id: string;
  name: string;
  galaxy: string;
  diameter: string;
  lengthOfDay: string;
  temperature: string;
  color: string;
  emissiveColor?: string;
  emissiveIntensity?: number;
  emissive?: boolean;          
  textureUrl?: string;        
  size: number;
  orbitRadius: number;        
  orbitAngle: number;          
  rotationSpeed: number;       
  isSun?: boolean;            
}

export const PLANETS: PlanetData[] = [
  {
    id: 'sun',
    name: 'SUN',
    galaxy: 'Milky Way',
    diameter: '1,392,684 km',
    lengthOfDay: '---',
    temperature: '6000 Kelvin',
    color: '#ff4500',
    emissiveColor: '#ff2200',
    emissiveIntensity: 2.5,
    emissive: true,
    size: 2.8,
    orbitRadius: 0,
    orbitAngle: 0,
    rotationSpeed: 0.04,
    isSun: true,
    textureUrl: '/textures/sun.png',
  },
  {
    id: 'mercury',
    name: 'MERCURY',
    galaxy: 'Milky Way',
    diameter: '4,879 km',
    lengthOfDay: '4,222 hours',
    temperature: '430°C (Day)',
    color: '#8c8c94',
    textureUrl: '/textures/mercury.png',
    size: 0.42,
    orbitRadius: 5.8,
    orbitAngle: 0,            
    rotationSpeed: 0.018,
  },
  {
    id: 'earth',
    name: 'EARTH',
    galaxy: 'Milky Way',
    diameter: '12,742 km',      
    lengthOfDay: '24 hours',    
    temperature: '15°C (avg)',  
    color: '#3f54ba',
    textureUrl: '/textures/earth.png',
    size: 0.5,
    orbitRadius: 3.5,
    orbitAngle: Math.PI * 0.55, // bottom area
    rotationSpeed: 0.02,
  },
];