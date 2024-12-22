import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Mail, Phone, MapPin, Building } from 'lucide-react';

export default function UserProfile() {
  const { user } = useAuth();
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-20 w-20 rounded-full bg-indigo-100 flex items-center justify-center">
          <span className="text-2xl font-bold text-indigo-600">
            {user?.email?.[0]?.toUpperCase()}
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{user?.email}</h2>
          <p className="text-gray-500">Member since {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <Mail className="h-5 w-5" />
          <span>{user?.email}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Phone className="h-5 w-5" />
          <span>Not provided</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="h-5 w-5" />
          <span>Not provided</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Building className="h-5 w-5" />
          <span>Not provided</span>
        </div>
      </div>
    </div>
  );
}