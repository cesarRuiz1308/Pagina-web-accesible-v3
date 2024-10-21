import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Talleres Accesibles</h2>
            <p>Brindando oportunidades de aprendizaje inclusivo para todos los estudiantes universitarios.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/catalogo" className="hover:underline">Catálogo de talleres</Link></li>
              <li><Link to="/calendario" className="hover:underline">Calendario de eventos</Link></li>
              <li><Link to="/inscripcion" className="hover:underline">Formulario de inscripción</Link></li>
              <li><Link to="/faq" className="hover:underline">Preguntas frecuentes</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p>Email: info@talleresaccesibles.edu</p>
            <p>Teléfono: (123) 456-7890</p>
            <p>Dirección: Calle Universidad 123, Ciudad Universitaria</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Talleres Accesibles. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;