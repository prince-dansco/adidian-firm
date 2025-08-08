import React from 'react';
import { Shield, Activity, Zap, Waves, Stethoscope, Users, Brain, Heart } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Preventive Services',
      icon: Shield,
      color: 'bg-blue-50 text-blue-600',
      services: [
        'Health education and wellness programs',
        'Injury prevention and risk assessment',
        'Ergonomic consultations',
        'Fitness and exercise programs'
      ]
    },
    {
      title: 'Rehabilitative Services',
      icon: Activity,
      color: 'bg-green-50 text-green-600',
      services: [
        'Pain management (headaches, chronic pain)',
        'Orthopedic rehabilitation (sports injury, post-op)',
        'Neurological rehabilitation (stroke, spinal cord)',
        'Cardiovascular rehabilitation',
        'Pediatric rehabilitation',
        'Geriatric physiotherapy'
      ]
    },
    {
      title: 'Therapeutic Services',
      icon: Zap,
      color: 'bg-purple-50 text-purple-600',
      services: [
        'Manual therapy',
        'Exercise therapy',
        'Electrotherapy',
        'Hydrotherapy',
        'Pain management'
      ]
    },
    {
      title: 'Specialized Services',
      icon: Waves,
      color: 'bg-orange-50 text-orange-600',
      services: [
        'Sports physiotherapy',
        "Women's health physiotherapy",
        'Occupational health physiotherapy',
        'Prosthetics and orthotics placement',
        'Relaxation massages and spa'
      ]
    },
    {
      title: 'Diagnostic Services',
      icon: Stethoscope,
      color: 'bg-red-50 text-red-600',
      services: [
        'Biomechanical assessment',
        'Movement analysis',
        'Functional capacity evaluation',
        'Neurological assessment'
      ]
    },
    {
      title: 'Supportive Services',
      icon: Heart,
      color: 'bg-pink-50 text-pink-600',
      services: [
        'Disability support and advocacy',
        'Chronic disease management',
        'Palliative care',
        'Mental health support'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of physiotherapy services in Abuja, customized to meet your specific needs 
            and help you achieve optimal health and wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-6`}>
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Consultation Options</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Physical Consultation</h4>
                    <p className="text-gray-600">In-person sessions at our clinic for hands-on treatment</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Brain className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Phone Consultation</h4>
                    <p className="text-gray-600">Remote consultations for assessment and guidance</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-200 font-semibold">
                  Book Your Consultation
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Black physiotherapist consulting with patient"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;