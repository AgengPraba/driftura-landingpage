import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';


function Navbar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);


  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white font-sans">
      {/* Desktop Navbar */}
      <div className="navbar px-8 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-white">Driftura</div>
        <div className="">
          {/* Mobile Menu Toggle  */}
            <button
              onClick={toggleMenu}
              className="md:hidden block text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isOpen && (
              <div className="md:hidden bg-black px-6 pb-4 w-full absolute top-16 left-0 right-0 z-50">
                <ul className="flex flex-col gap-4 text-lg mt-2">
                  {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`hover:text-gray-300 ${
                        location.pathname === item.path ? 'font-semibold text-white neon-text' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                 ))}
                </ul>
              </div>
            )}
        </div>
        <ul className="menu menu-horizontal gap-6 text-md hidden md:flex">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`hover:text-gray-300 ${
                  location.pathname === item.path ? 'font-semibold text-white neon-text' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
