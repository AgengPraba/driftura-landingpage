export default function Lights() {
  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} />
    </>
  )
}
