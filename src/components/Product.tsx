import { useGLTF } from '@react-three/drei'

export default function Product() {
  const { scene } = useGLTF('/models/police-car.glb')
  return <primitive object={scene} scale={1.5} />
}
