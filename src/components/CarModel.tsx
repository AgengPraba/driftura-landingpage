import { useGLTF } from '@react-three/drei';


function CarModel(props: { src: string; }) {
  const { scene } = useGLTF(props.src);

  return (

      <primitive object={scene} scale={1.5} />
  )    
}


export default CarModel;