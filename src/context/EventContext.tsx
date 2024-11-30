import React, { createContext, useContext, useState } from 'react';
import { Event } from '../types/event';
import { MOCK_EVENTS } from '../data/mockEvents';

interface EventContextType {
  events: Event[];
  addEvent: (event: Omit<Event, 'id'>) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export function EventProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<Event[]>(MOCK_EVENTS);

  const addEvent = (newEvent: Omit<Event, 'id'>) => {
    // Créer un nouvel ID unique basé sur un timestamp
    const newId = Date.now().toString();
    
    // Créer un nouvel événement en conservant toutes ses propriétés
    const eventWithId: Event = {
      ...newEvent,
      id: newId
    };

    // Ajouter le nouvel événement à la liste
    setEvents(prevEvents => [...prevEvents, eventWithId]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
}
