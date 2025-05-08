import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Video, Mail, Twitter, Linkedin, Star, ArrowLeft } from 'lucide-react';
import FeedbackModal from '../components/FeedbackModal';

// 🔹 Step 1: Simulated mentors data
const mentorsData = [
  {
    id: '1',
    name: 'Rahul Sharma',
    title: 'Senior Software Engineer',
    company: 'Microsoft',
    email: 'rahul@microsoft.com',
    twitter: 'https://twitter.com/rahulsharma',
    linkedin: 'https://linkedin.com/in/rahulsharma'
  },
  {
    id: '2',
    name: 'Priya Desai',
    title: 'Product Manager',
    company: 'Google',
    email: 'priya@google.com',
    twitter: 'https://twitter.com/priyadesai',
    linkedin: 'https://linkedin.com/in/priyadesai'
  }
];

// 🔹 Step 2: Simulated API function
const getMentorById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mentor = mentorsData.find(m => m.id === id);
      resolve(mentor);
    }, 300); // Simulating network delay
  });
};

const MySessions = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [mentors, setMentors] = useState({});
  const [selectedSession, setSelectedSession] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // 🔹 Step 3: Sample session data
  const sessions = [
    {
      id: '1',
      mentorId: '1',
      date: new Date('2025-05-06'),
      time: '10:00 AM',
      videoLink: 'https://meet.google.com/abc-defg-hij',
      status: 'upcoming'
    },
    {
      id: '2',
      mentorId: '2',
      date: new Date('2025-04-30'),
      time: '3:00 PM',
      videoLink: '',
      status: 'past'
    }
  ];

  // 🔹 Step 4: Fetch mentor data on mount
  useEffect(() => {
    const loadMentors = async () => {
      const ids = [...new Set(sessions.map(s => s.mentorId))];
      const results = await Promise.all(ids.map(id => getMentorById(id)));
      const map = {};
      results.forEach(m => {
        if (m) map[m.id] = m;
      });
      setMentors(map);
    };

    loadMentors();
  }, []);

  const handleFeedbackSubmit = (rating, feedback) => {
    console.log('Feedback submitted:', { rating, feedback, session: selectedSession });
    setShowFeedback(false);
  };

  const renderSessionCard = (session) => {
    const mentor = mentors[session.mentorId];
    if (!mentor) return <div key={session.id}>Loading mentor info...</div>;

    return (
      <div key={session.id} className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">{mentor.name}</h3>
            <p className="text-sm text-gray-600">{mentor.title} @ {mentor.company}</p>
          </div>
          <div className="text-sm text-gray-500 flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {session.date.toLocaleDateString()} at {session.time}
          </div>
        </div>

        {session.status === 'upcoming' ? (
          <div className="mt-4 flex justify-between items-center">
            {session.videoLink && (
              <a
                href={session.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                <Video className="w-4 h-4 mr-1" />
                Join Video Call
              </a>
            )}
            <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
              Cancel Session
            </button>
          </div>
        ) : (
          <div className="mt-4 flex justify-between items-center">
            <div className="flex gap-3">
              <a href={mentor.email} className="text-gray-600"><Mail className="w-4 h-4" /></a>
              <a href={mentor.twitter} className="text-blue-400"><Twitter className="w-4 h-4" /></a>
              <a href={mentor.linkedin} className="text-blue-600"><Linkedin className="w-4 h-4" /></a>
            </div>
            <button
              onClick={() => {
                setSelectedSession({ ...session, mentor });
                setShowFeedback(true);
              }}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 flex items-center"
            >
              <Star className="w-4 h-4 mr-1" />
              Rate Now
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-4">
        <Link to="/" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to all mentors
        </Link>
      </div>

      <div className="bg-white shadow rounded overflow-hidden">
        <div className="flex">
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === 'upcoming'
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Sessions
          </button>
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === 'past'
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'bg-gray-100 text-gray-600'
            }`}
            onClick={() => setActiveTab('past')}
          >
            Past Sessions
          </button>
        </div>

        <div className="p-4 space-y-4">
          {sessions
            .filter((s) => s.status === activeTab)
            .map(renderSessionCard)}
        </div>
      </div>

      {showFeedback && selectedSession && (
        <FeedbackModal
          mentor={selectedSession.mentor}
          onClose={() => setShowFeedback(false)}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  );
};

export default MySessions;
