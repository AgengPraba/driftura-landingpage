
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
    name: 'Audi PB-18',
    modelSrc: '/models/bmw_m3_e30.glb',
    color: '#EB5B00',
    scale: 8,
  },
  {
    id: 2,
    name: 'Nexus RX',
    modelSrc: '/models/nexus_rx.glb', 
    color: '#898AC4', 
    scale: 3.5,
  },
  {
    id: 3,
    name: 'COROLLA',
    modelSrc: '/models/bmw_x7_m60i.glb',
    color: '#9AA6B2', 
    scale: 5,
  },
  {
    id: 4,
    name: 'MUSTANG',
    modelSrc: '/models/chevrolet_bolt_ev.glb',
    color: '#DCD0A8', 
    scale: 6,
  },
  {
    id: 5,
    name: 'lambo',
    modelSrc: '/models/yellow-car.glb',
    color: '#FFCC00', 
    scale: 6,
  },

];