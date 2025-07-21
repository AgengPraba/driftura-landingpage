import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white font-sans">
      <div className="navbar px-8 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold neon-text">Driftura</div>

        <ul className="menu menu-horizontal gap-6 text-md">
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
