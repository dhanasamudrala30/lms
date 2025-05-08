import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-gray-800 hover:text-blue-600 transition-colors">
          <Briefcase className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-semibold">Industry Expert Mentors</h1>
        </Link>
        <Link 
          to="/my-sessions" 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          My Sessions
        </Link>
      </div>
    </header>
  );
};

export default Header;
