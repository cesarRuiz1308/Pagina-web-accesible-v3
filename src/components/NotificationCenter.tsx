import React from 'react';
import { useNotification } from '../contexts/NotificationContext';
import { X } from 'lucide-react';

const NotificationCenter: React.FC = () => {
  const { notifications, removeNotification } = useNotification();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2" role="alert" aria-live="polite">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg shadow-md flex justify-between items-start max-w-sm ${
            notification.type === 'success' ? 'bg-green-100 text-green-800' :
            notification.type === 'error' ? 'bg-red-100 text-red-800' :
            'bg-blue-100 text-blue-800'
          }`}
        >
          <div>
            <h3 className="font-bold">{notification.title}</h3>
            <p>{notification.message}</p>
          </div>
          <button
            onClick={() => removeNotification(notification.id)}
            className="ml-4 text-gray-500 hover:text-gray-700"
            aria-label="Cerrar notificación"
          >
            <X size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationCenter;