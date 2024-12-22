import React from 'react';
import { Calendar } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2 relative">
      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-200" />
      <div className="relative flex items-center space-x-2">
        <Calendar className="h-8 w-8 text-white" />
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
          EMS
        </span>
      </div>
    </div>
  );
}