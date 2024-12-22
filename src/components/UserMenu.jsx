import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, LogOut, Ticket, Settings, UserCircle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
      >
        <User className="h-8 w-8 p-1 rounded-full bg-gray-100" />
        <span>{user.email}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Link
              to="/profile"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <UserCircle className="h-4 w-4 mr-2" />
              Profile
            </Link>
            <Link
              to="/my-tickets"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Ticket className="h-4 w-4 mr-2" />
              My Tickets
            </Link>
            <Link
              to="/settings"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Link>
            <hr className="my-1" />
            <button
              onClick={signOut}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}