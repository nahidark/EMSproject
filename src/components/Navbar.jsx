import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth.js';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-lg shadow-lg transition-colors duration-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-12">
            <Link to="/" className="group">
              <Logo />
            </Link>
            <SearchBar onSearch={(query) => console.log('Search:', query)} />
          </div>

          <div className="flex items-center space-x-8">
            <Link to="/events" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Events
            </Link>
            <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About Us
            </Link>
            <ThemeToggle />
            {user ? (
              <UserMenu />
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}