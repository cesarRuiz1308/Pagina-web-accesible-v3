import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Talleres Accesibles</h1>
        <p className="text-xl mb-6">Descubre y participa en talleres diseñados para estudiantes universitarios con discapacidad.</p>
        <Link to="/catalogo" className="btn btn-primary">
          Explorar talleres
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="card">
          <BookOpen className="w-12 h-12 text-accessible-green mb-4" aria-hidden="true" />
          <h2 className="text-xl font-semibold mb-2">Variedad de talleres</h2>
          <p>Ofrecemos una amplia gama de talleres en diferentes áreas para potenciar tus habilidades.</p>
        </div>
        <div className="card">
          <Calendar className="w-12 h-12 text-accessible-green mb-4" aria-hidden="true" />
          <h2 className="text-xl font-semibold mb-2">Flexibilidad</h2>
          <p>Talleres en diferentes horarios y formatos para adaptarse a tus necesidades.</p>
        </div>
        <div className="card">
          <Users className="w-12 h-12 text-accessible-green mb-4" aria-hidden="true" />
          <h2 className="text-xl font-semibold mb-2">Comunidad inclusiva</h2>
          <p>Únete a una comunidad de estudiantes y profesores comprometidos con la inclusión.</p>
        </div>
      </section>

      <section className="bg-gray-200 dark:bg-gray-700 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Próximos talleres destacados</h2>
        <ul className="space-y-4">
          <li className="bg-white dark:bg-gray-800 p-4 rounded-md shadow">
            <h3 className="font-semibold">Habilidades de comunicación efectiva</h3>
            <p>Fecha: 15 de mayo, 2024 | Formato: Presencial</p>
          </li>
          <li className="bg-white dark:bg-gray-800 p-4 rounded-md shadow">
            <h3 className="font-semibold">Introducción a la programación accesible</h3>
            <p>Fecha: 22 de mayo, 2024 | Formato: En línea</p>
          </li>
          <li className="bg-white dark:bg-gray-800 p-4 rounded-md shadow">
            <h3 className="font-semibold">Técnicas de estudio adaptadas</h3>
            <p>Fecha: 1 de junio, 2024 | Formato: Híbrido</p>
          </li>
        </ul>
        <div className="mt-6 text-center">
          <Link to="/calendario" className="text-accessible-green hover:underline">Ver todos los talleres programados</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;