import { useState } from 'react';
import { cars } from '../data/cars';
import { PlayCircle } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CarModel from '../components/CarModel';

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? cars.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === cars.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const isMobile = window.innerWidth < 768;

  const currentCar = cars[currentIndex];

  return (
    <section 
      style={{ '--theme-color': currentCar.color } as React.CSSProperties}
      className="h-screen w-full grid grid-cols-[30%_70%] font-sans relative overflow-hidden"
    >
      <div className="bg-[var(--theme-color)] z-0 h-full flex flex-col justify-between p-8 transition-colors duration-700">
        <div>

        </div>
        <div className='cursor-pointer hidden md:flex'>
          <button className="flex items-center gap-3 text-white drop-shadow-[0_0_10px_var(--theme-color)] hover:scale-105 transition-transform">
            <PlayCircle size={48} />
            <span className="font-semibold">Watch Video</span>
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br text-shadow-neon from-black via-[#0f0f1f] to-black z-0 h-full flex items-center justify-center">
        <h1 className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-[10vw] text-center w-full md:text-[15vw] font-extrabold text-white uppercase ">
          {currentCar.name}
        </h1>

        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-6 z-10 w-full h-full">
          <Canvas key={currentCar.modelSrc}  camera={{ position: [0, 1, 8], fov: 50 }}>
            <ambientLight intensity={3} />
            <directionalLight position={[5, 5, 5]} intensity={10} />
            <CarModel src={currentCar.modelSrc} scale={isMobile? 3 :currentCar.scale} />
            <OrbitControls
              target={[0, 1, 0]}
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2}
             />
          </Canvas>
        </div>

        {/* Tombol Navigasi */}
        <button onClick={handlePrevious} className="absolute left-0 z-20 text-gray-800 text-xl font-semibold border-b-2 cursor-pointer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Previous</button>
        <button onClick={handleNext} className="absolute right-0 z-20 text-[var(--theme-color)] text-xl font-semibold border-b-2 cursor-pointer">Next&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>

        {/* URL Website */}
        {/* <div className="absolute bottom-8 z-20 text-center w-full">
            <p className="text-white">Our Website : <span className="text-[var(--theme-color)] font-bold transition-colors duration-700">www.dri.com</span></p>
        </div> */}
      </div>
    </section>
  );
}

export default Gallery;