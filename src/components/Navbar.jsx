import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Hamburger & close icons

function Navbar() {
  const location = useLocation(); // Track current route
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        
        {/* Logo + Company Name */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo" className="h-8 md:h-10 object-contain" />
          <h1 className="text-sm md:text-lg font-bold text-yellow-400 whitespace-nowrap">
            MUNDRA CONSTRUCTION LIMITED
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {isHome && (
            <>
              <a href="#services" className="hover:text-yellow-400 transition font-bold">Services</a>
              <a href="#projects" className="hover:text-yellow-400 transition font-bold">Projects</a>
              <a href="#about" className="hover:text-yellow-400 transition font-bold">Why Us</a>
              <Link
                to="/gallery"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-2xl font-bold shadow-md transform hover:scale-105 transition duration-300"
              >
                Gallery
              </Link>
            </>
          )}
          {location.pathname.toLowerCase() === "/gallery" && (
            <Link
              to="/"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-2xl font-bold shadow-md transform hover:scale-105 transition duration-300"
            >
              Back to Home
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-yellow-400 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800 flex flex-col px-6 py-4 space-y-4">
          {isHome && (
            <>
              <a href="#services" onClick={toggleMenu} className="hover:text-yellow-400 font-bold">Services</a>
              <a href="#projects" onClick={toggleMenu} className="hover:text-yellow-400 font-bold">Projects</a>
              <a href="#about" onClick={toggleMenu} className="hover:text-yellow-400 font-bold">Why Us</a>
              <Link
                to="/gallery"
                onClick={toggleMenu}
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-2xl font-bold shadow-md text-center"
              >
                Gallery
              </Link>
            </>
          )}
          {location.pathname.toLowerCase() === "/gallery" && (
            <Link
              to="/"
              onClick={toggleMenu}
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-2xl font-bold shadow-md text-center"
            >
              Back to Home
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
