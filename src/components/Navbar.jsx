import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // Track current route
  const isHome = location.pathname === "/";

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

          {/* Normal links only on Home */}
          {isHome && (
            <>
              <a href="#services" className="hover:text-yellow-400 transition font-bold">Services</a>
              <a href="#projects" className="hover:text-yellow-400 transition font-bold">Projects</a>
              <a href="#about" className="hover:text-yellow-400 transition font-bold">Why Us</a>
            </>
          )}

          {/* Gallery / Back button */}
          {isHome && (
            <Link
              to="/gallery"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-2xl font-bold shadow-md transform hover:scale-105 transition duration-300"
            >
              Gallery
            </Link>
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

        {/* Mobile Menu (optional) */}
        {/* You can add hamburger menu here if needed */}
      </div>
    </nav>
  );
}

export default Navbar;