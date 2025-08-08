import React from 'react';
import { Calendar, Phone, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Restoring Mobility,{' '}
              <span className="text-blue-600">Empowering Wellness</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              At Adidian Physiotherapy Clinic, we deliver personalized, evidence-based 
              physiotherapy services in a compassionate environment, empowering you to 
              achieve optimal health and live life free from pain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105">
                <Calendar size={20} />
                <span className="font-semibold">Book Appointment</span>
                <ArrowRight size={16} />
              </button>
              
              <a
                href="tel:07065873379"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <Phone size={20} />
                <span className="font-semibold">Call Now</span>
              </a>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Licensed Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Evidence-Based Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Personalized Treatment</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5473186/pexels-photo-5473186.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Black physiotherapist working with patient"
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600">2+</div>
              <div className="text-sm text-gray-600">Years of Excellence</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;