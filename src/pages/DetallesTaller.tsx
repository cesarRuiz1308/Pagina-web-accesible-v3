import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, User, FileText, Monitor, Package } from 'lucide-react';

// Tipo para los detalles del taller
type DetallesTaller = {
  id: number;
  titulo: string;
  descripcion: string;
  horario: string;
  lugar: string;
  profesor: string;
  requisitos: string[];
  formato: 'presencial' | 'en-linea' | 'hibrido';
  materiales: string[];
};

// Datos de ejemplo (en una aplicación real, estos datos vendrían de una API o base de datos)
const tallerEjemplo: DetallesTaller = {
  id: 1,
  titulo: 'Habilidades de comunicación efectiva',
  descripcion: 'Este taller está diseñado para mejorar tus habilidades de comunicación verbal y no verbal. Aprenderás técnicas para expresarte con claridad, escuchar activamente y comunicarte de manera asertiva en diferentes contextos sociales y profesionales.',
  horario: 'Lunes y miércoles, 15:00 - 17:00',
  lugar: 'Aula 101, Edificio de Ciencias Sociales',
  profesor: 'Dra. María Rodríguez',
  requisitos: ['Ser estudiante universitario', 'Disposición para participar en actividades grupales'],
  formato: 'presencial',
  materiales: ['Cuaderno', 'Bolígrafo', 'Dispositivo con acceso a internet (opcional)'],
};

const DetallesTaller: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // En una aplicación real, aquí se haría una llamada a una API para obtener los detalles del taller con el ID proporcionado
  const taller = tallerEjemplo; // Simulamos que hemos obtenido los datos del taller

  if (!taller) {
    return <div role="alert">Taller no encontrado</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4">{taller.titulo}</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Descripción</h2>
        <p>{taller.descripcion}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Detalles del taller</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Calendar className="mr-2 text-accessible-blue" size={20} aria-hidden="true" />
              <span><strong>Horario:</strong> {taller.horario}</span>
            </li>
            <li className="flex items-center">
              <MapPin className="mr-2 text-accessible-blue" size={20} aria-hidden="true" />
              <span><strong>Lugar:</strong> {taller.lugar}</span>
            </li>
            <li className="flex items-center">
              <User className="mr-2 text-accessible-blue" size={20} aria-hidden="true" />
              <span><strong>Profesor:</strong> {taller.profesor}</span>
            </li>
            <li className="flex items-center">
              <Monitor className="mr-2 text-accessible-blue" size={20} aria-hidden="true" />
              <span><strong>Formato:</strong> {taller.formato}</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-2">Requisitos</h2>
          <ul className="list-disc list-inside space-y-1">
            {taller.requisitos.map((requisito, index) => (
              <li key={index}>{requisito}</li>
            ))}
          </ul>
          
          <h2 className="text-xl font-semibold mt-4 mb-2">Materiales necesarios</h2>
          <ul className="list-disc list-inside space-y-1">
            {taller.materiales.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <Link to="/catalogo" className="text-accessible-blue hover:underline flex items-center">
          <FileText className="mr-1" size={20} aria-hidden="true" />
          Volver al catálogo
        </Link>
        <Link
          to="/inscripcion"
          className="bg-accessible-blue text-white px-6 py-2 rounded-lg hover-accessible-blue transition duration-300 flex items-center"
        >
          <Package className="mr-2" size={20} aria-hidden="true" />
          Inscribirse
        </Link>
      </div>
    </div>
  );
};

export default DetallesTaller;