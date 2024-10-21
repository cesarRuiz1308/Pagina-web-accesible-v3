import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useNotification } from '../contexts/NotificationContext';

const Inscripcion: React.FC = () => {
  const { addNotification } = useNotification();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    tallerId: '',
    necesidadesEspeciales: '',
    aceptaTerminos: false
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos del formulario a un servidor
    console.log('Datos del formulario:', formData);
    setEnviado(true);
    addNotification('success', 'Inscripción exitosa', 'Tu inscripción ha sido recibida. Pronto recibirás más información.');
  };

  if (enviado) {
    return (
      <div className="text-center" role="alert">
        <CheckCircle className="mx-auto text-green-500 mb-4" size={64} aria-hidden="true" />
        <h2 className="text-2xl font-bold mb-2">¡Inscripción enviada con éxito!</h2>
        <p className="mb-4">Gracias por inscribirte. Pronto recibirás un correo electrónico con más detalles sobre el taller.</p>
        <button
          onClick={() => setEnviado(false)}
          className="bg-accessible-green text-white px-4 py-2 rounded hover-accessible-green transition duration-300"
        >
          Volver al formulario
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Formulario de Inscripción</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="tallerId">Taller</label>
          <select
            id="tallerId"
            name="tallerId"
            value={formData.tallerId}
            onChange={handleChange}
            required
            aria-required="true"
          >
            <option value="">Selecciona un taller</option>
            <option value="1">Habilidades de comunicación efectiva</option>
            <option value="2">Introducción a la programación accesible</option>
            <option value="3">Técnicas de estudio adaptadas</option>
          </select>
        </div>
        <div>
          <label htmlFor="necesidadesEspeciales">Necesidades especiales o adaptaciones requeridas</label>
          <textarea
            id="necesidadesEspeciales"
            name="necesidadesEspeciales"
            value={formData.necesidadesEspeciales}
            onChange={handleChange}
            rows={4}
          ></textarea>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="aceptaTerminos"
            name="aceptaTerminos"
            checked={formData.aceptaTerminos}
            onChange={handleChange}
            required
            aria-required="true"
          />
          <label htmlFor="aceptaTerminos" className="ml-2">
            Acepto los términos y condiciones
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-accessible-green text-white py-2 px-4 rounded-md hover-accessible-green transition duration-300"
        >
          Enviar inscripción
        </button>
      </form>
    </div>
  );
};

export default Inscripcion;