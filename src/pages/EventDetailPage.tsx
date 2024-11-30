import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Share2, ExternalLink, Trash2 } from 'lucide-react';
import { Event } from '../types/event';
import { MOCK_EVENTS } from '../data/mockEvents';

export function EventDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = MOCK_EVENTS.find(e => e.id === id);

  if (!event) {
    return <div className="text-center py-12">Événement non trouvé</div>;
  }

  const handleDelete = () => {
    // Dans une vraie application, on ferait un appel API ici
    // Pour l'instant, on simule juste la suppression en redirigeant
    navigate('/events');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-[80vh] w-full">
          <img 
            src={event.imageUrl} 
            alt={event.title}
            className="absolute inset-0 w-full h-full object-contain bg-gray-900"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-4xl font-bold text-white mb-2">{event.title}</h1>
            <div className="flex items-center space-x-4 text-white">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                event.type === 'public' ? 'bg-green-500/80' : 'bg-blue-500/80'
              }`}>
                {event.type === 'public' ? 'Public' : 'Privé'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mt-6 space-y-4">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{new Date(event.date).toLocaleDateString()}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">À propos de l'événement</h2>
            <p className="text-gray-600 whitespace-pre-line">{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}