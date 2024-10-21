import React, { useState } from 'react';

type Mensaje = {
  id: number;
  usuario: string;
  contenido: string;
  fecha: Date;
};

const mensajesIniciales: Mensaje[] = [
  { id: 1, usuario: 'Ana', contenido: '¿Alguien ha tomado el taller de programación accesible? ¿Qué les pareció?', fecha: new Date('2024-03-15T10:30:00') },
  { id: 2, usuario: 'Carlos', contenido: 'Sí, yo lo tomé el mes pasado. Fue muy útil, aprendí mucho sobre cómo hacer sitios web más accesibles.', fecha: new Date('2024-03-15T11:15:00') },
];

const Foro: React.FC = () => {
  const [mensajes, setMensajes] = useState<Mensaje[]>(mensajesIniciales);
  const [nuevoMensaje, setNuevoMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nuevoMensaje.trim()) {
      const mensaje: Mensaje = {
        id: mensajes.length + 1,
        usuario: 'Usuario', // En una aplicación real, esto vendría del usuario autenticado
        contenido: nuevoMensaje,
        fecha: new Date(),
      };
      setMensajes([...mensajes, mensaje]);
      setNuevoMensaje('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Foro de Discusión</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Mensajes recientes</h2>
        <ul className="space-y-4">
          {mensajes.map(mensaje => (
            <li key={mensaje.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold">{mensaje.usuario}</span>
                <span className="text-sm text-gray-500">{mensaje.fecha.toLocaleString()}</span>
              </div>
              <p>{mensaje.contenido}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Publicar un nuevo mensaje</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nuevoMensaje" className="block mb-2 font-medium">Tu mensaje</label>
            <textarea
              id="nuevoMensaje"
              value={nuevoMensaje}
              onChange={(e) => setNuevoMensaje(e.target.value)}
              required
              rows={4}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              aria-required="true"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Publicar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Foro;