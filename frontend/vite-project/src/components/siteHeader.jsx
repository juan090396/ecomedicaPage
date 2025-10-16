import { useState } from "react";
import { Menu, X } from "lucide-react"; // iconos minimalistas

export default function siteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-700">
            EML
          </span>
          <span className="text-xl font-bold text-blue-700">
            Clínica Ecomédica Lab
          </span>
        </div>

        {/* Boton version movil */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-700"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Secciones */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
                <a href="#aboutUs" className="hover:text-blue-600 transition">
                Conocenos
                </a>
            </li>

            <li>
                <a href="#servicios" className="hover:text-blue-600 transition">
                Servicios
                </a>
            </li>

            <li>
                <a href="#doctores" className="hover:text-blue-600 transition">
                Doctores
                </a>
            </li>

            <li>
                <a href="#citas" className="hover:text-blue-600 transition">
                Agendar Cita
                </a>
            </li>

            <li>
                <a href="#testimonios" className="hover:text-blue-600 transition">
                Testimonios
                </a>
            </li>

            <li>
                <a href="#contacto" className="hover:text-blue-600 transition">
                Contacto
                </a>
            </li>

          </ul>
        </nav>
      </div>

      {/* Navegacion version movil */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <li>
                <a href="#aboutUs" className="hover:text-blue-600 transition">
                Conocenos
                </a>
            </li>
            
            <li>
                <a href="#servicios" onClick={closeMenu} className="hover:text-blue-600">
                Servicios
              </a>
            </li>

            <li>
              <a href="#doctores" onClick={closeMenu} className="hover:text-blue-600">
                Doctores
              </a>
            </li>

            <li>
              <a href="#citas" onClick={closeMenu} className="hover:text-blue-600">
                Agendar Cita
              </a>
            </li>

            <li>
              <a href="#testimonios" onClick={closeMenu} className="hover:text-blue-600">
                Testimonios
              </a>
            </li>

            <li>
              <a href="#contacto" onClick={closeMenu} className="hover:text-blue-600">
                Contacto
              </a>
            </li>

          </ul>
        </nav>
      )}
    </header>
  );
}
