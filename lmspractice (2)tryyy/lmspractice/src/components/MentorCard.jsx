import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, UserCircle } from 'lucide-react';

const MentorCard = ({ mentor }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/profile/${mentor.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-2px] flex flex-col h-full text-sm">
      <div className="p-4 flex-1">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center space-x-3">
            {mentor.avatar ? (
              <img 
                src={mentor.avatar} 
                alt={`${mentor.name}`} 
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
            ) : (
              <UserCircle className="w-10 h-10 text-gray-400" />
            )}
            <div>
              <h3 className="text-base font-semibold text-gray-800">{mentor.name}</h3>
              <p className="text-xs text-gray-600">{mentor.title} @ {mentor.company}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 font-medium text-sm">{mentor.rating}</span>
          </div>
        </div>

        <div className="mb-2">
          <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
            mentor.availability === 'Available' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {mentor.availability}
          </div>
        </div>

        <div className="text-xs text-gray-600 mb-3">
          {mentor.experience.length > 0 && (
            <p>{mentor.experience[0].role} at {mentor.experience[0].company}</p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.skills.slice(0, 3).map((skill, index) => (
            <span 
              key={index} 
              className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 pb-4">
        <button
          onClick={handleViewProfile}
          className="w-full py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
        >
          See profile
        </button>
      </div>
    </div>
  );
};

export default MentorCard;
