import React from 'react';

const ProfileContent = ({ mentor, activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed">{mentor.about}</p>
          </div>
        );

      case 'education':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-6">
              {mentor.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.years}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'expertise':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Areas of Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {mentor.expertise.map((item, index) => (
                <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-gray-800 mb-2">{item.area}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {mentor.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        );

      case 'experience':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
            <div className="space-y-8">
              {mentor.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-800">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full ml-4">
      {/* Added ml-4 to shift the content slightly to the right */}
      {renderContent()}
    </div>
  );
};

export default ProfileContent;
