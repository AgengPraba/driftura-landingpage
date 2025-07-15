

function Navbar() {
  const menuItems = ['Home', 'Model', 'Inventory', 'Contact Us'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-white font-sans">
      <div className="navbar bg-transparent px-8 py-4">
        {/* Logo di kiri tidak ikut */}
        <div className="flex-1">
          {/* Bagian ini sengaja dikosongkan agar item menu ke kanan */}
        </div>

        {/* Menu di kanan */}
        <div className="flex-none gap-8 items-center">
          <ul className="menu menu-horizontal px-1 text-md">
            {menuItems.map((item) => (
              <li key={item}>
                <a className="hover:text-gray-300">{item}</a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;