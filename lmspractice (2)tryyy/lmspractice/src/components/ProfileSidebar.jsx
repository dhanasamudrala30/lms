import React from 'react';
import {
  UserCircle,
  BookOpen,
  Award,
  Briefcase,
  BookMarked,
  Calendar
} from 'lucide-react';

const ProfileSidebar = ({
  mentor,
  activeSection,
  onSectionChange,
  onBookSession
}) => {
  const sections = [
    { id: 'about', label: 'About', icon: <UserCircle className="w-5 h-5" /> },
    { id: 'education', label: 'Education', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'expertise', label: 'Expertise', icon: <Award className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <BookMarked className="w-5 h-5" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
  ];

  return (
    <div className="w-full md:w-72 lg:w-80 bg-white rounded-lg shadow-md p-6 ml-4">
      {/* Increased width to w-72 for medium screens and w-80 for large screens */}
      <div className="flex flex-col items-center mb-6">
        {mentor.avatar ? (
          <img
            src={mentor.avatar}
            alt={mentor.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 mb-3"
          />
        ) : (
          <UserCircle className="w-24 h-24 text-gray-400 mb-3" />
        )}
        <h2 className="text-xl font-semibold text-center">{mentor.name}</h2>
        <p className="text-sm text-gray-600 text-center">
          {mentor.title} @ {mentor.company}
        </p>

        <div className="mt-2 flex items-center">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
              mentor.availability === 'Available'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {mentor.availability}
          </span>
        </div>
      </div>

      <nav className="mb-6">
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onSectionChange(section.id)}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-md transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-100 text-blue-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {section.icon}
                <span>{section.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={onBookSession}
        className="w-full flex items-center justify-center space-x-2 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        <Calendar className="w-5 h-5" />
        <span>Book Session</span>
      </button>
    </div>
  );
};

export default ProfileSidebar;
