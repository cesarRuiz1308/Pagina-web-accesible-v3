import React from 'react';

type Testimonio = {
  id: number;
  nombre: string;
  taller: string;
  contenido: string;
  imagen: string;
};

const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: 'María González',
    taller: 'Habilidades de comunicación efectiva',
    contenido: 'Este taller me ayudó a superar mi miedo a hablar en público. Ahora me siento más segura al expresar mis ideas.',
    imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    nombre: 'Juan Pérez',
    taller: 'Introducción a la programación accesible',
    contenido: 'Aprendí cómo crear sitios web que todos puedan usar. Es increíble cómo pequeños cambios pueden marcar una gran diferencia.',
    imagen: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    nombre: 'Ana Rodríguez',
    taller: 'Técnicas de estudio adaptadas',
    contenido: 'Gracias a este taller, descubrí métodos de estudio que se adaptan a mi forma de aprender. Mis calificaciones han mejorado notablemente.',
    imagen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

const Testimonios: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Testimonios de Estudiantes</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonios.map(testimonio => (
          <div key={testimonio.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <img
              src={testimonio.imagen}
              alt={`Foto de ${testimonio.nombre}`}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">{testimonio.nombre}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">{testimonio.taller}</p>
            <p className="text-gray-700 dark:text-gray-300">{testimonio.contenido}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonios;