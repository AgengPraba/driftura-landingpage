import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Group, Box3, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';

function CarModel({ src, scale }: { src: string; scale: number }) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(src);

  useEffect(() => {
    if (group.current) {
      const box = new Box3().setFromObject(scene);
      const center = new Vector3();
      box.getCenter(center);
      // Pusatkan objek ke titik tengah
      scene.position.sub(center);
    }
  }, [scene]);

    useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005; // ubah angka ini untuk kecepatan
    }
  });

  return (
    <group ref={group} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

export default CarModel;
