import React, { useState, useEffect } from 'react';
import MentorCard from '../components/MentorCard';
import { Search, Filter } from 'lucide-react';
import { getMentors } from '../api/mentors';

const MentorsList = () => {
  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const data = await getMentors();
        setMentors(data);
        setFilteredMentors(data);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMentors();
  }, []);
  
  useEffect(() => {
    let result = mentors;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        mentor => 
          mentor.name.toLowerCase().includes(query) || 
          mentor.title.toLowerCase().includes(query) || 
          mentor.company.toLowerCase().includes(query) ||
          mentor.skills.some(skill => skill.toLowerCase().includes(query))
      );
    }
    
    if (selectedDomain && selectedDomain !== 'All Domains') {
      result = result.filter(mentor => 
        mentor.domains.includes(selectedDomain)
      );
    }
    
    if (selectedService && selectedService !== 'All Services') {
      if (selectedService === 'Free') {
        result = result.filter(mentor => 
          mentor.services.some(service => service.toLowerCase().includes('free'))
        );
      } else if (selectedService === 'Paid') {
        result = result.filter(mentor => 
          mentor.services.some(service => !service.toLowerCase().includes('free'))
        );
      }
    }
    
    setFilteredMentors(result);
  }, [searchQuery, selectedDomain, selectedService, mentors]);
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleDomainChange = (e) => {
    setSelectedDomain(e.target.value);
  };
  
  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };
  
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDomain('');
    setSelectedService('');
  };
  
  const domains = ['All Domains', ...Array.from(new Set(mentors.flatMap(mentor => mentor.domains)))];
  const services = ['All Services', 'Free', 'Paid'];
  
  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by Mentor Name or Industry"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={selectedDomain}
            onChange={handleDomainChange}
            className="w-full md:w-48 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {domains.map((domain, index) => (
              <option key={index} value={domain}>{domain}</option>
            ))}
          </select>
          
          <select
            value={selectedService}
            onChange={handleServiceChange}
            className="w-full md:w-48 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
          
          {(searchQuery || selectedDomain || selectedService) && (
            <button
              onClick={clearFilters}
              className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
          {filteredMentors.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">No mentors found</h3>
              <p className="text-gray-500">Try adjusting your search or filters</p>
              <button 
                onClick={clearFilters} 
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MentorsList;
