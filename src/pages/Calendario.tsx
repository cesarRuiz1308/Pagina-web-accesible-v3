import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

// Tipos
type Evento = {
  id: number;
  titulo: string;
  fecha: Date;
  categoria: string;
};

// Datos de ejemplo
const eventos: Evento[] = [
  { id: 1, titulo: 'Habilidades de comunicación efectiva', fecha: new Date(2024, 4, 15), categoria: 'habilidades-sociales' },
  { id: 2, titulo: 'Introducción a la programación accesible', fecha: new Date(2024, 4, 22), categoria: 'academico' },
  { id: 3, titulo: 'Técnicas de estudio adaptadas', fecha: new Date(2024, 5, 1), categoria: 'academico' },
  // Agrega más eventos aquí...
];

const Calendario: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const filteredEvents = eventos.filter(evento => 
    selectedCategory === 'todas' || evento.categoria === selectedCategory
  );

  const getEventsForDate = (date: Date) => {
    return filteredEvents.filter(evento => 
      evento.fecha.getDate() === date.getDate() &&
      evento.fecha.getMonth() === date.getMonth() &&
      evento.fecha.getFullYear() === date.getFullYear()
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Calendario de Eventos</h1>

      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={prevMonth} className="mr-4" aria-label="Mes anterior">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-xl font-semibold">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <button onClick={nextMonth} className="ml-4" aria-label="Mes siguiente">
            <ChevronRight size={24} />
          </button>
        </div>
        <div>
          <label htmlFor="categoria" className="mr-2">Filtrar por categoría:</label>
          <select
            id="categoria"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-md p-1 dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="todas">Todas</option>
            <option value="habilidades-sociales">Habilidades sociales</option>
            <option value="desarrollo-personal">Desarrollo personal</option>
            <option value="academico">Académico</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2" role="table" aria-label="Calendario de eventos">
        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
          <div key={day} className="text-center font-semibold p-2" role="columnheader">{day}</div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="p-2" role="cell" aria-hidden="true"></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), index + 1);
          const eventsForDate = getEventsForDate(date);
          return (
            <div key={index} className="border p-2 min-h-[100px] dark:border-gray-700" role="cell">
              <div className="font-semibold mb-1">{index + 1}</div>
              {eventsForDate.map(evento => (
                <Link
                  key={evento.id}
                  to={`/taller/${evento.id}`}
                  className="block text-sm bg-blue-100 dark:bg-blue-900 p-1 mb-1 rounded hover:bg-blue-200 dark:hover:bg-blue-800"
                >
                  {evento.titulo}
                </Link>
              ))}
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Próximos eventos</h3>
        <ul className="space-y-2">
          {filteredEvents
            .filter(evento => evento.fecha >= new Date())
            .sort((a, b) => a.fecha.getTime() - b.fecha.getTime())
            .slice(0, 5)
            .map(evento => (
              <li key={evento.id} className="flex items-center">
                <CalendarIcon className="mr-2 text-accessible-blue" size={20} aria-hidden="true" />
                <span className="mr-2">{evento.fecha.toLocaleDateString()}</span>
                <Link to={`/taller/${evento.id}`} className="text-accessible-blue hover:underline">
                  {evento.titulo}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendario;