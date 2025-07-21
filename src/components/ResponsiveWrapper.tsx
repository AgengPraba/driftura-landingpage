import { useThree } from '@react-three/fiber';

function ResponsiveWrapper({ children }: { children: React.ReactNode }) {
  const { size } = useThree();

  const scale: [number, number, number] = size.width < 600 ? [1, 1, 1 ] : [1.2, 1.2, 1.2];
  const position: [number, number, number] = size.width < 768 ? [0, -0.5, 0] : [0, 0, 0];

  return (
    <group scale={scale} position={position}>
      {children}
    </group>
  );
}

export default ResponsiveWrapper;
