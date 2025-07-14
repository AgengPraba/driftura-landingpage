import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Lights from './Lights'
import Product from './Product'

export default function CanvasWrapper() {
  return (
    <Canvas camera={{ position: [-7, 3, 7], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <Lights />
      <Product />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
