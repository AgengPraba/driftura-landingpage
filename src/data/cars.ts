
export interface Car {
  id: number;
  name: string;
  modelSrc: string;
  color: string;
}

export const cars: Car[] = [
  {
    id: 1,
    name: 'F8 TRIBUTO',
    modelSrc: '/models/police-car.glb', 
    color: '#D40000', 
  },
  {
    id: 2,
    name: 'AVENTADOR',
    modelSrc: '/models/audi_pb18_e_tron_low_poly_3d.glb',
    color: '#FFD700',
  },
  {
    id: 3,
    name: '720S',
    modelSrc: '/models/generic_sedan_car.glb',
    color: '#FF8800', 
  },
];