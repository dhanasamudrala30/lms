import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileContent from '../components/ProfileContent';
import Calendar from '../components/Calendar';
import { getMentorById } from '../api/mentors';

const MentorProfile = () => {
  const { id } = useParams();
  const [mentor, setMentor] = useState(null);
  const [activeSection, setActiveSection] = useState('about');
  const [showCalendar, setShowCalendar] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        if (id) {
          const data = await getMentorById(id);
          setMentor(data);
        }
      } catch (error) {
        console.error('Error fetching mentor:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, [id]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleBookSession = () => {
    setShowCalendar(true);
  };

  const handleDateSelect = (date, time) => {
    alert(`Session booked with ${mentor?.name} on ${date.toLocaleDateString()} at ${time}`);
    setShowCalendar(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!mentor) {
    return (
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Mentor not found</h2>
        <Link to="/" className="text-blue-600 hover:underline">Back to all mentors</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to all mentors
        </Link>
      </div>

      {/* No gap between cards */}
      <div className="flex justify-center items-start gap-0 max-w-6xl mx-auto px-2 py-4">
        <ProfileSidebar
          mentor={mentor}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          onBookSession={handleBookSession}
        />
        <ProfileContent mentor={mentor} activeSection={activeSection} />
      </div>

      {showCalendar && (
        <Calendar
          onClose={() => setShowCalendar(false)}
          onDateSelect={handleDateSelect}
        />
      )}
    </div>
  );
};

export default MentorProfile;
