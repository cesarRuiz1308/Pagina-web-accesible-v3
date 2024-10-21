import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';

const Perfil: React.FC = () => {
  const { user, updateUser } = useUser();
  const [formData, setFormData] = useState({
    nombre: user?.nombre || '',
    email: user?.email || '',
    intereses: user?.intereses || [],
    necesidadesEspeciales: user?.necesidadesEspeciales || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleInteresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      intereses: checked
        ? [...prevData.intereses, value]
        : prevData.intereses.filter(interes => interes !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser(formData);
    alert('Perfil actualizado con éxito');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>
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
          <fieldset>
            <legend className="mb-2 font-medium">Intereses</legend>
            <div className="space-y-2">
              {['Tecnología', 'Arte', 'Ciencias', 'Humanidades', 'Deportes'].map(interes => (
                <label key={interes} className="flex items-center">
                  <input
                    type="checkbox"
                    name="intereses"
                    value={interes}
                    checked={formData.intereses.includes(interes)}
                    onChange={handleInteresChange}
                    className="mr-2"
                  />
                  {interes}
                </label>
              ))}
            </div>
          </fieldset>
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
        <button type="submit" className="btn btn-primary">
          Actualizar perfil
        </button>
      </form>
    </div>
  );
};

export default Perfil;