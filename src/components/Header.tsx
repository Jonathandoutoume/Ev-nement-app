import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <span className="text-3xl logo-text text-indigo-600">Event<span className="text-gray-800">Hub</span></span>
          </Link>
          
          <div className="hidden sm:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Accueil</Link>
            <Link to="/events" className="text-gray-700 hover:text-indigo-600">Événements</Link>
            <Link to="/create-event" className="text-gray-700 hover:text-indigo-600">Créer un événement</Link>
          </div>
          
          <div className="hidden sm:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Se Connecter</Link>
            <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">S'inscrire</Link>
          </div>

          <button 
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-indigo-600 px-2 py-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/events" 
                className="text-gray-700 hover:text-indigo-600 px-2 py-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Événements
              </Link>
              <Link 
                to="/create-event" 
                className="text-gray-700 hover:text-indigo-600 px-2 py-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Créer un événement
              </Link>
              <div className="border-t border-gray-200 pt-4">
                <Link 
                  to="/login" 
                  className="block text-gray-700 hover:text-indigo-600 px-2 py-1 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Se Connecter
                </Link>
                <Link 
                  to="/signup" 
                  className="block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}