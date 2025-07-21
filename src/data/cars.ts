
export interface Car {
  id: number;
  name: string;
  modelSrc: string;
  color: string;
  scale: number;
}

export const cars: Car[] = [
  {
    id: 1,
    name: 'BMW M3',
    modelSrc: '/models/bmw_m3_e30.glb',
    color: '#FF073A',
    scale: 6,
  },
  {
    id: 2,
    name: 'Nexus RX',
    modelSrc: '/models/nexus_rx.glb', 
    color: '#898AC4', 
    scale: 6.3,
  },
  {
    id: 3,
    name: 'BMW X7',
    modelSrc: '/models/bmw_x7_m60i.glb',
    color: '#F8F8FF', 
    scale: 6.4,
  },
  {
    id: 4,
    name: 'Chevrolet',
    modelSrc: '/models/chevrolet_bolt_ev.glb',
    color: '#22d3ee', 
    scale: 6.5,
  },
  {
    id: 5,
    name: 'lambo',
    modelSrc: '/models/yellow-car.glb',
    color: '#FFFF33', 
    scale: 5.3,
  },

];