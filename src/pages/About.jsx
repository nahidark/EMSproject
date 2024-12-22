import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About EMS</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          Event Management System (EMS) is your one-stop solution for discovering,
          creating, and managing events. Whether you're an event organizer or an
          attendee, our platform makes it easy to connect with the events that
          matter to you.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          We strive to create a seamless experience for event organizers and
          attendees alike, making it simple to discover and participate in events
          that enrich our communities.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Have questions or suggestions? Reach out to us at support@ems.com
        </p>
      </div>
    </div>
  );
}