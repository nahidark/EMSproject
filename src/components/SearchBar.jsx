import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search events..."
        className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-dark-primary transition-all duration-200"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </form>
  );
}