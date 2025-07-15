import Navbar from './components/Navbar.tsx';
// import Home from './sections/Home.tsx';
import Gallery from './sections/Gallery.tsx';
// import Services from './sections/Services.tsx';
// import Contact from './sections/Contact.tsx';
import './index.css'

function App() {
  return (
    <div className="bg-base-100 text-base-content">
      <Navbar />
      <main>
        {/* <Home /> */}
        <Gallery />
        {/* <Services />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;