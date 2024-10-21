import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-accessible-green text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Talleres Accesibles</Link>
          <nav className="hidden md:flex items-center space-x-4" aria-label="Navegación principal">
            <ul className="flex space-x-4">
              <li><Link to="/catalogo" className="hover:underline">Catálogo</Link></li>
              <li><Link to="/calendario" className="hover:underline">Calendario</Link></li>
              <li><Link to="/inscripcion" className="hover:underline">Inscripción</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/contacto" className="hover:underline">Contacto</Link></li>
              <li><Link to="/foro" className="hover:underline">Foro</Link></li>
              <li><Link to="/testimonios" className="hover:underline">Testimonios</Link></li>
            </ul>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full hover-accessible-green transition-colors"
              aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="mr-4 p-2 rounded-full hover-accessible-green transition-colors"
              aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <nav id="mobile-menu" className="md:hidden" aria-label="Navegación móvil">
          <ul className="flex flex-col space-y-2 p-4">
            <li><Link to="/catalogo" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>Catálogo</Link></li>
            <li><Link to="/calendario" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>Calendario</Link></li>
            <li><Link to="/inscripcion" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>Inscripción</Link></li>
            <li><Link to="/faq" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
            <li><Link to="/contacto" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
            <li><Link to="/foro" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>Foro</Link></li>
            <li><Link to="/testimonios" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>Testimonios</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;