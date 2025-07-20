import { useState } from 'react';
import { cars} from '../data/cars';
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

  const currentCar = cars[currentIndex];

  return (
    // Gunakan CSS variable '--theme-color' untuk warna dinamis
    <section 
      style={{ '--theme-color': currentCar.color } as React.CSSProperties}
      className="h-screen w-full grid grid-cols-[30%_70%] font-sans relative"
    >
      {/* Kolom Kiri Berwarna */}
      <div className="bg-[var(--theme-color)] z-0 h-full flex flex-col justify-between p-8 transition-colors duration-700">
        <div>
          <h1 className="text-2xl font-bold text-white">Luxury Cars</h1>
        </div>
        <div>
          <button className="flex items-center gap-3 text-white">
            <PlayCircle size={48} />
            <span className="font-semibold">Watch Video</span>
          </button>
        </div>
      </div>

      {/* Kolom Kanan (Konten Utama) */}
      <div className="bg-black z-0 h-full relative overflow-hidden flex items-center justify-center">
        {/* Teks Nama Mobil di Belakang */}
        <h1 className="absolute z-5 text-[25vw] lg:text-[20vw] font-extrabold text-white uppercase">
          {currentCar.name}
        </h1>

        {/* Gambar Mobil di Depan */}
        <div className="w-full h-full flex items-center justify-center relative z-10">
        
            <Canvas key={currentCar.modelSrc}  camera={{ position: [-7, 3, 7], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
             <CarModel src={currentCar.modelSrc} />
            <OrbitControls enableZoom={false} />
          </Canvas>

  
        </div>

        {/* Tombol Navigasi */}
        <button onClick={handlePrevious} className="absolute left-8 z-20 text-white font-semibold">Previous</button>
        <button onClick={handleNext} className="absolute right-8 z-20 text-white font-semibold">Next</button>

        {/* URL Website */}
        <div className="absolute bottom-8 z-20 text-center w-full">
            <p className="text-white">Our Website : <span className="text-[var(--theme-color)] font-bold transition-colors duration-700">www.luxurycars.com</span></p>
        </div>
      </div>
    </section>
  );
}

export default Gallery;

lorem ipsum dolor sit amet