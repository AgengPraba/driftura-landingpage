import { cars } from '../data/cars';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { Box3, Vector3 } from 'three';
import { CarIcon, CalendarIcon } from 'lucide-react';
import * as THREE from 'three';


function RotatingCar({ src, visible, scale = [5, 5, 5] }: { src: string; visible: boolean; scale?: number | [number, number, number] }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(src);

  useEffect(() => {
      if (group.current) {
        const box = new Box3().setFromObject(scene);
        const center = new Vector3();
        box.getCenter(center);
        scene.position.sub(center);
      }
  }, [scene]);

  useFrame((_, delta) => {
    if (visible && group.current) {
      group.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={group} scale={scale} visible={visible}>
      <primitive object={scene} />
    </group>
  );
}

export default function Home() {
  const [currentCar, setCurrentCar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCar((prev) => (prev + 1) % cars.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-6 md:px-20 md:mt-[-80px]">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20 overflow-hidden">
       <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight neon-text animate-pulse">
            Welcome to <span className="text-white">Driftura Showroom</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Dive into our world of <span className="text-cyan-300 font-semibold">high-performance</span> and <span className="text-cyan-300 font-semibold">cutting-edge</span> automotive design — all visualized in breathtaking <span className="text-white font-medium">3D experience</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="cursor-pointer neon-button px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
              <CarIcon className="w-5 h-5" />
              Explore Now
            </button>
            <button className="cursor-pointer px-6 py-3 border border-cyan-400 text-white rounded-lg hover:bg-cyan-800 transition duration-300 flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              Book Test Drive
            </button>
          </div>
        </div>

        <div className="w-full h-96 md:h-screen flex items-center justify-center overflow-hidden md: mt-[-80px]">
          <Canvas camera={{ position: [0, 0, 6], fov: 100 }} className='pointer-events-none'>
            <ambientLight intensity={2} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" />

            {cars.map((car, idx) => (
                <RotatingCar key={car.id} src={car.modelSrc} visible={idx === currentCar} />
            ))}

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              target={[0, 1, 0]}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
