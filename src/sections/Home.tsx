import { cars } from '../data/cars';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { Box3, Vector3 } from 'three';
import * as THREE from 'three';


function RotatingCar({ src, visible }: { src: string; visible: boolean }) {
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
    <group ref={group} scale={[5, 5, 5]} visible={visible}>
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
    <div className="min-h-screen  text-white flex items-center justify-center px-6 md:px-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">

        {/* TEXT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight neon-text">
            Welcome to <span className="text-white">Driftura Showroom</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Explore our exclusive selection of high-performance vehicles in stunning 3D. Where the future of driving meets design.
          </p>
          <div className="flex gap-4">
            <button className="neon-button px-6 py-3 rounded-lg font-semibold">
              Explore Now
            </button>
            <button className="px-6 py-3 border border-cyan-400 text-white rounded-lg hover:bg-cyan-800 transition duration-300">
              Book Test Drive
            </button>
          </div>
        </div>

        <div className="w-full h-96 flex items-center justify-center relative">
          <Canvas camera={{ position: [0, 1.5, 6], fov: 100 }}>
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
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
