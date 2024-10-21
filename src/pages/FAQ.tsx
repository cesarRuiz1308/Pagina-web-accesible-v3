import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    pregunta: '¿Cómo puedo inscribirme en un taller?',
    respuesta: 'Para inscribirte en un taller, visita la página de "Inscripción" y completa el formulario con tus datos personales y el taller de tu interés. Una vez enviado, recibirás un correo electrónico de confirmación con más detalles.'
  },
  {
    pregunta: '¿Los talleres tienen algún costo?',
    respuesta: 'La mayoría de nuestros talleres son gratuitos para estudiantes universitarios. Sin embargo, algunos talleres especializados pueden tener un costo mínimo. La información sobre costos se proporciona en la descripción de cada taller.'
  },
  {
    pregunta: '¿Qué tipo de adaptaciones ofrecen para estudiantes con discapacidad?',
    respuesta: 'Ofrecemos una variedad de adaptaciones según las necesidades individuales, incluyendo materiales en formatos accesibles, intérpretes de lengua de señas, subtítulos en tiempo real para talleres en línea, y espacios físicos accesibles para talleres presenciales. Por favor, indica tus necesidades específicas en el formulario de inscripción.'
  },
  {
    pregunta: '¿Puedo cancelar mi inscripción a un taller?',
    respuesta: 'Sí, puedes cancelar tu inscripción hasta 48 horas antes del inicio del taller. Para hacerlo, envía un correo electrónico a cancelaciones@talleresaccesibles.edu con tu nombre y el nombre del taller.'
  },
  {
    pregunta: '¿Ofrecen certificados de participación?',
    respuesta: 'Sí, ofrecemos certificados digitales de participación para todos los talleres completados. El certificado se enviará por correo electrónico dentro de los 7 días posteriores a la finalización del taller.'
  },
  {
    pregunta: '¿Cómo puedo proponer un nuevo taller o tema?',
    respuesta: 'Valoramos tus sugerencias. Puedes proponer nuevos talleres o temas enviando un correo electrónicoa propuestas@talleresaccesibles.edu con una breve descripción de tu idea y por qué crees que sería beneficiosa para la comunidad universitaria.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full text-left p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-semibold">{faq.pregunta}</span>
              {openIndex === index ? <ChevronUp size={20} aria-hidden="true" /> : <ChevronDown size={20} aria-hidden="true" />}
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`p-4 bg-white dark:bg-gray-800 ${openIndex === index ? 'block' : 'hidden'}`}
            >
              <p>{faq.respuesta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;