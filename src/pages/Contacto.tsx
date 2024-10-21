import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el mensaje de contacto
    console.log('Mensaje de contacto:', formData);
    setEnviado(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Información de contacto</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Mail className="mr-2 text-accessible-blue" size={20} aria-hidden="true" />
              <span>info@talleresaccesibles.edu</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 text-accessible-blue" size={20} aria-hidden="true" />
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center">
              <MapPin className="mr-2 text-accessible-blue" size={20} aria-hidden="true" />
              <span>Calle Universidad 123, Ciudad Universitaria</span>
            </li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Horario de atención</h2>
          <p>Lunes a Viernes: 9:00 AM - 5:00 PM</p>
          <p>Sábados: 10:00 AM - 2:00 PM</p>
          <p>Domingos y festivos: Cerrado</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Envíanos un mensaje</h2>
          {enviado ? (
            <div className="bg-green-100 dark:bg-green-800 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 px-4 py-3 rounded" role="alert">
              <p className="font-bold">¡Mensaje enviado con éxito!</p>
              <p>Gracias por contactarnos. Te responderemos lo antes posible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block mb-1 font-medium">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block mb-1 font-medium">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  aria-required="true"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-accessible-blue text-white py-2 px-4 rounded-md hover-accessible-blue transition duration-300 flex items-center"
              >
                <Send className="mr-2" size={20} aria-hidden="true" />
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacto;