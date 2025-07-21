import { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { cars } from './data/cars';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './sections/Home.tsx';
import Gallery from './sections/Gallery.tsx';
import Services from './sections/Services.tsx';
import Contact from './sections/Contact.tsx';
import './index.css'

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    cars.forEach((car) => {
      useGLTF.preload(car.modelSrc); 
    });
    setTimeout(() => {
      setReady(true);
    }, 500);
  }, []);

  if (!ready) return <div className="h-screen flex items-center justify-center"><span className="loading loading-spinner loading-xl"></span></div>;
  return (
    <div className=" bg-gradient-to-br from-black via-[#0f0f1f] to-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;