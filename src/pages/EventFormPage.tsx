import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Image as ImageIcon } from 'lucide-react';
import { useEvents } from '../context/EventContext';
import { Event } from '../types/event';

type EventFormData = Omit<Event, 'id'>;

export function EventFormPage() {
  const navigate = useNavigate();
  const { addEvent } = useEvents();
  const [formData, setFormData] = useState<EventFormData>({
    title: '',
    shortDescription: '',
    description: '',
    date: '',
    location: '',
    type: 'public',
    imageUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer un nouvel événement avec les données du formulaire
    const newEvent: EventFormData = {
      title: formData.title,
      shortDescription: formData.shortDescription,
      description: formData.description,
      date: formData.date,
      location: formData.location,
      type: formData.type,
      imageUrl: formData.imageUrl
    };

    // Ajouter l'événement et rediriger
    addEvent(newEvent);
    navigate('/events');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Créer un événement</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Titre de l'événement */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Titre de l'événement *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Description courte */}
          <div>
            <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700">
              Description courte *
            </label>
            <input
              type="text"
              id="shortDescription"
              name="shortDescription"
              required
              value={formData.shortDescription}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Bref aperçu de l'événement"
            />
          </div>

          {/* Description complète */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description complète *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Description détaillée de l'événement"
            />
          </div>

          {/* Date et Lieu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date de l'événement *
              </label>
              <div className="mt-1 relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 pl-10 pr-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Lieu *
              </label>
              <div className="mt-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 pl-10 pr-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Lieu de l'événement"
                />
              </div>
            </div>
          </div>

          {/* Type d'événement */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Type d'événement *
            </label>
            <select
              id="type"
              name="type"
              required
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="public">Public</option>
              <option value="private">Privé</option>
            </select>
          </div>

          {/* Image de l'événement */}
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
              Image de l'événement *
            </label>
            <div className="mt-1 relative">
              <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                required
                value={formData.imageUrl}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 pl-10 pr-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="URL de l'image"
              />
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/events')}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Créer l'événement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}