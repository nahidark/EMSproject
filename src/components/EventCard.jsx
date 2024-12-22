import React from 'react';
import { Calendar, MapPin, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

export default function EventCard({ event }) {
  return (
    <div className="glass-card overflow-hidden">
      <div className="relative">
        <img
          src={event.image_url}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 gradient-text">{event.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{event.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar className="h-4 w-4 mr-2 text-indigo-500" />
            <span>{format(new Date(event.date), 'PPP')}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="h-4 w-4 mr-2 text-indigo-500" />
            <span>{event.location}</span>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <DollarSign className="h-4 w-4 mr-2 text-indigo-500" />
            <span>${event.price}</span>
          </div>

          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Users className="h-4 w-4 mr-2 text-indigo-500" />
            <span>{event.capacity} spots</span>
          </div>
        </div>
        
        <Link
          to={`/events/${event.id}`}
          className="mt-6 inline-block w-full text-center py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}