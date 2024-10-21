import React, { useState } from 'react';
import { Settings } from 'lucide-react';

const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeFontSize = (size: number) => {
    setFontSize(size);
    document.documentElement.style.fontSize = `${size}%`;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  return (
    <div className="fixed top-20 right-4 z-50">
      <button
        onClick={toggleMenu}
        className="bg-accessible-green text-white p-2 rounded-full shadow-lg"
        aria-expanded={isOpen}
        aria-label="Abrir menú de accesibilidad"
      >
        <Settings size={24} />
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Opciones de accesibilidad</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="font-size" className="block mb-1">Tamaño de fuente</label>
              <input
                type="range"
                id="font-size"
                min="80"
                max="150"
                value={fontSize}
                onChange={(e) => changeFontSize(Number(e.target.value))}
                className="w-full"
              />
            </div>
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={toggleHighContrast}
                  className="mr-2"
                />
                Alto contraste
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu;