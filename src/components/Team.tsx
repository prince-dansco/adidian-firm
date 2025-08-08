import React from 'react';
import { Award, GraduationCap, Heart, Star } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Diana Adidiam',
      role: 'Lead Physiotherapist & Clinic Director',
      image: 'https://images.pexels.com/photos/7659731/pexels-photo-7659731.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Michael Johnson',
      role: 'Senior Physiotherapy Doctor',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Sarah Williams',
      role: 'Occupational Therapist',
      image: 'https://images.pexels.com/photos/7659652/pexels-photo-7659652.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. James Thompson',
      role: 'Hydrotherapy Expert',
      image: 'https://images.pexels.com/photos/5407205/pexels-photo-5407205.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const qualifications = [
    {
      icon: GraduationCap,
      title: 'Licensed Physiotherapy Doctors',
      description: 'Fully licensed professionals with advanced degrees'
    },
    {
      icon: Award,
      title: 'Experienced Occupational Therapists',
      description: 'Specialized in workplace and daily living rehabilitation'
    },
    {
      icon: Heart,
      title: 'Certified Ergonomists',
      description: 'Experts in workplace safety and injury prevention'
    },
    {
      icon: Star,
      title: 'Hydrotherapy Specialists',
      description: 'Advanced training in water-based rehabilitation'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Adidian Physiotherapy Clinic became a leading provider of excellent physiotherapy services 
            by employing the best gifted hands in the field of health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Professional Qualifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualifications.map((qual, index) => {
              const IconComponent = qual.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="text-blue-600" size={36} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{qual.title}</h4>
                  <p className="text-gray-600 text-sm">{qual.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Our team combines academic excellence with clinical expertise to provide compassionate, 
            evidence-based care that transforms lives.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-200 font-semibold">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;