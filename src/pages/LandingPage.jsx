import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Ticket, ArrowRight } from 'lucide-react';
import EventCard from '../components/EventCard';
import { useEvents } from '../hooks/useEvents';

export default function LandingPage() {
  const { featuredEvents } = useEvents();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-repeat" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover & Create<br />Amazing Events
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of event enthusiasts and create unforgettable experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="glass inline-flex items-center px-8 py-3 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              Browse Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/create-event"
              className="bg-white/10 backdrop-blur-sm inline-flex items-center px-8 py-3 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              Create Event
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <Calendar className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 gradient-text">Find Events</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discover events that match your interests
              </p>
            </div>
            <div className="glass-card p-8 text-center">
              <Ticket className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 gradient-text">Easy Booking</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Book tickets in just a few clicks
              </p>
            </div>
            <div className="glass-card p-8 text-center">
              <Users className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 gradient-text">Connect</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join a community of event enthusiasts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold gradient-text mb-12 text-center">
            Featured Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}