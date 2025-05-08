import React from 'react';
import { CheckCircle, Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookingConfirmation = ({ mentor, date, time, onClose }) => {
  const navigate = useNavigate();

  const handleViewSessions = () => {
    navigate('/my-sessions');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Session Booked!</h3>
          <p className="text-gray-600">Your mentoring session has been confirmed</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <p className="font-medium text-gray-800">Date</p>
              <p className="text-gray-600">{date.toLocaleDateString()}</p>
            </div>
          </div>

          <div className="flex items-center">
            <Clock className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <p className="font-medium text-gray-800">Time</p>
              <p className="text-gray-600">{time}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p className="font-medium text-gray-800">Mentor</p>
            <p className="text-gray-600">{mentor.name}</p>
            <p className="text-sm text-gray-500">{mentor.title} @ {mentor.company}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleViewSessions}
            className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            My Sessions
          </button>
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
