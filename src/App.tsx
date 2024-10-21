import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CatalogoTalleres from './pages/CatalogoTalleres';
import DetallesTaller from './pages/DetallesTaller';
import Calendario from './pages/Calendario';
import Inscripcion from './pages/Inscripcion';
import FAQ from './pages/FAQ';
import Contacto from './pages/Contacto';
import Foro from './pages/Foro';
import Testimonios from './pages/Testimonios';
import NotificationCenter from './components/NotificationCenter';
import AccessibilityMenu from './components/AccessibilityMenu';

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <a href="#main-content" className="skip-link">
              Saltar al contenido principal
            </a>
            <Header />
            <AccessibilityMenu />
            <NotificationCenter />
            <main id="main-content" className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<CatalogoTalleres />} />
                <Route path="/taller/:id" element={<DetallesTaller />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/inscripcion" element={<Inscripcion />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/foro" element={<Foro />} />
                <Route path="/testimonios" element={<Testimonios />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;