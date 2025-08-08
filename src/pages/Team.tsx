import React from 'react';
import { Award, GraduationCap, Heart, Star } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Diana Daniel. O.',
      role: 'Licensed and Experienced',
      image: 'image_nine.jpg',
      specialties: ['Physiotherapist (DPT)', ' Ergonomist', 'Hydrotherapist'],
      experience: '5+ years'
    },
    {
      name: 'Dr. C. J. Otikpa',
      role: "Womens health and wellness coach",
      image: 'fine_doc.jpg',
      specialties: ['Physiotherapist (DPT)'],
      experience: '4+ years'
    },
    
  ];

  const qualifications = [
    {
      icon: GraduationCap,
      title: 'Licensed Physiotherapy Doctors',
      description: 'Fully licensed professionals with advanced degrees and continuous education'
    },
    {
      icon: Award,
      title: 'Experienced Occupational Therapists',
      description: 'Specialized in workplace rehabilitation and daily living skills'
    },
    {
      icon: Heart,
      title: 'Certified Ergonomists',
      description: 'Experts in workplace safety, injury prevention, and ergonomic solutions'
    },
    {
      icon: Star,
      title: 'Hydrotherapy Specialists',
      description: 'Advanced training in water-based rehabilitation and aquatic therapy'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adidian Physiotherapy Clinic became a leading provider of excellent physiotherapy services 
              by employing the best gifted hands in the field of health.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-20">
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
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">Experience: {member.experience}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-col gap-0.5">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="text-lg  text-blue-800 px-2 py-1 font-bold">
                          {specialty}
                        </span>
                      ))}
                    
                    </div>
                  </div>
                  
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Qualifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Professional Qualifications</h2>
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
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
              src='image_eight.jpg'
                alt="Black healthcare team collaborating"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Team Philosophy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our success stems from employing competent, licensed, goal-oriented physiotherapists 
                who possess both academic prowess and clinical excellence. We believe in providing 
                the best incomparable services to our patients through continuous learning and 
                compassionate care.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Academic excellence combined with practical clinical experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Continuous professional development and training</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Patient-centered approach with compassionate care</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">Evidence-based treatment methods and innovative techniques</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Meet Our Team?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our team combines academic excellence with clinical expertise to provide compassionate, 
            evidence-based care that transforms lives.
          </p>
          <a
            href="tel:07065873379"
            className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;