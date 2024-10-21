import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';

// Tipos para los talleres y categorías
type Categoria = 'habilidades-sociales' | 'desarrollo-personal' | 'academico';

type Taller = {
  id: number;
  titulo: string;
  categoria: Categoria;
  descripcion: string;
  formato: 'presencial' | 'en-linea' | 'hibrido';
};

// Datos de ejemplo
const talleres: Taller[] = [
  {
    id: 1,
    titulo: 'Habilidades de comunicación efectiva',
    categoria: 'habilidades-sociales',
    descripcion: 'Aprende técnicas para mejorar tu comunicación verbal y no verbal.',
    formato: 'presencial',
  },
  {
    id: 2,
    titulo: 'Gestión del tiempo y organización',
    categoria: 'desarrollo-personal',
    descripcion: 'Estrategias para optimizar tu tiempo y mejorar tu productividad.',
    formato: 'en-linea',
  },
  {
    id: 3,
    titulo: 'Técnicas de estudio adaptadas',
    categoria: 'academico',
    descripcion: 'Métodos de estudio personalizados para diferentes estilos de aprendizaje.',
    formato: 'hibrido',
  },
  // Agrega más talleres aquí...
];

const CatalogoTalleres: React.FC = () => {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState<Categoria | 'todas'>('todas');
  const [formatoFiltro, setFormatoFiltro] = useState<'todos' | 'presencial' | 'en-linea' | 'hibrido'>('todos');

  const talleresFiltrados = talleres.filter((taller) => {
    const coincideBusqueda = taller.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                             taller.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriaFiltro === 'todas' || taller.categoria === categoriaFiltro;
    const coincideFormato = formatoFiltro === 'todos' || taller.formato === formatoFiltro;
    return coincideBusqueda && coincideCategoria && coincideFormato;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Catálogo de Talleres</h1>
      
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex-grow">
          <label htmlFor="busqueda" className="sr-only">Buscar talleres</label>
          <div className="relative">
            <input
              type="text"
              id="busqueda"
              placeholder="Buscar talleres..."
              className="w-full p-2 pl-10 border rounded-md"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} aria-hidden="true" />
          </div>
        </div>
        
        <div className="flex gap-4">
          <div>
            <label htmlFor="categoria" className="block text-sm font-medium mb-1">Categoría</label>
            <select
              id="categoria"
              className="block w-full p-2 border rounded-md"
              value={categoriaFiltro}
              onChange={(e) => setCategoriaFiltro(e.target.value as Categoria | 'todas')}
            >
              <option value="todas">Todas las categorías</option>
              <option value="habilidades-sociales">Habilidades sociales</option>
              <option value="desarrollo-personal">Desarrollo personal</option>
              <option value="academico">Académico</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="formato" className="block text-sm font-medium mb-1">Formato</label>
            <select
              id="formato"
              className="block w-full p-2 border rounded-md"
              value={formatoFiltro}
              onChange={(e) => setFormatoFiltro(e.target.value as 'todos' | 'presencial' | 'en-linea' | 'hibrido')}
            >
              <option value="todos">Todos los formatos</option>
              <option value="presencial">Presencial</option>
              <option value="en-linea">En línea</option>
              <option value="hibrido">Híbrido</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
        {talleresFiltrados.map((taller) => (
          <div key={taller.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" role="listitem">
            <h2 className="text-xl font-semibold mb-2">{taller.titulo}</h2>
            <p className="mb-4">{taller.descripcion}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-accessible-blue">{taller.categoria.replace('-', ' ')}</span>
              <span className="text-sm font-medium text-green-600 dark:text-green-400">{taller.formato}</span>
            </div>
            <Link
              to={`/taller/${taller.id}`}
              className="mt-4 inline-block bg-accessible-blue text-white px-4 py-2 rounded hover-accessible-blue transition duration-300"
            >
              Ver detalles
            </Link>
          </div>
        ))}
      </div>

      {talleresFiltrados.length === 0 && (
        <p className="text-center mt-8" role="alert">No se encontraron talleres que coincidan con los criterios de búsqueda.</p>
      )}
    </div>
  );
};

export default CatalogoTalleres;