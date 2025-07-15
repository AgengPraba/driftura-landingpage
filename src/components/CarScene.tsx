// CarScene.jsx
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CarModel from './CarModel';

type CarSceneProps = {
  modelSrc: string;
};

export default function CarScene({ modelSrc }: CarSceneProps) {
  return (
    <Canvas camera={{ position: [-7, 3, 7], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/* Optional: Tambahkan Environment untuk pencahayaan realistis */}
      <Suspense fallback={<div>Loading 3D Model...</div>}>
        <CarModel src={modelSrc} />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
