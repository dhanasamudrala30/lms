import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import BookingConfirmation from './BookingConfirmation';

const Calendar = ({ mentor, onClose, onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '01:00 PM', '02:00 PM', 
    '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = new Date().toDateString() === date.toDateString();
      const isSelected = selectedDate?.toDateString() === date.toDateString();
      const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
      
      days.push(
        <button
          key={day}
          disabled={isPast}
          onClick={() => setSelectedDate(date)}
          className={`h-10 w-10 rounded-full flex items-center justify-center text-sm transition-colors
            ${isPast ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-blue-100'}
            ${isToday ? 'border border-blue-500' : ''}
            ${isSelected ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
          `}
        >
          {day}
        </button>
      );
    }
    
    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleBookSession = async () => {
    if (selectedDate && selectedTime) {
      setIsBooking(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsBooking(false);
      setShowConfirmation(true);
      onDateSelect(selectedDate, selectedTime);
    }
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  if (showConfirmation && selectedDate && selectedTime) {
    return (
      <BookingConfirmation
        mentor={mentor}
        date={selectedDate}
        time={selectedTime}
        onClose={onClose}
      />
    );
  }

  if (isBooking) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Processing your booking</h3>
          <p className="text-gray-600">Please wait while we confirm your session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Book a Session</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <button onClick={handlePrevMonth} className="p-1 rounded-full hover:bg-gray-100">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h3 className="font-medium text-gray-800">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <button onClick={handleNextMonth} className="p-1 rounded-full hover:bg-gray-100">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-4">
            {dayNames.map(day => (
              <div key={day} className="h-10 flex items-center justify-center text-xs text-gray-500">
                {day}
              </div>
            ))}
            {renderCalendarDays()}
          </div>
          
          {selectedDate && (
            <>
              <h4 className="font-medium text-gray-800 mb-2">
                Select Time - {selectedDate.toLocaleDateString()}
              </h4>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-3 py-2 text-sm rounded-md transition-colors
                      ${selectedTime === time 
                        ? 'bg-blue-600 text-white' 
                        : 'border border-gray-300 hover:bg-gray-100'}
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </>
          )}
          
          <button
            onClick={handleBookSession}
            disabled={!selectedDate || !selectedTime}
            className={`w-full py-2 rounded-md transition-colors ${
              selectedDate && selectedTime
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
