import React from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { letter: 'A', word: 'Accessibility', description: 'We make quality care accessible to everyone' },
    { letter: 'D', word: 'Diligence', description: 'We approach every case with careful attention' },
    { letter: 'I', word: 'Innovative', description: 'We use cutting-edge techniques and treatments' },
    { letter: 'D', word: 'Distinguished', description: 'We maintain the highest standards of excellence' },
    { letter: 'I', word: 'Industrious', description: 'We work tirelessly for your recovery' },
    { letter: 'A', word: 'Affordability', description: 'We provide exceptional value for our services' },
    { letter: 'N', word: 'Noble', description: 'We serve with integrity and compassion' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Adidian Physiotherapy Clinic</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 2023, we've grown from a home-service provider to a leading physiotherapy clinic, 
            driven by our commitment to exceptional patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/5794057/pexels-photo-5794057.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Black physiotherapist with patient"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed">
                Adidian Physiotherapy Clinic began as a home-service care provider, moving from one patient's 
                house to the next, rendering exceptional services. Our ever-growing desire to provide the best 
                physical therapy intervention motivated us to establish this practice. We employ competent, 
                licensed, goal-oriented physiotherapists with both academic prowess and clinical excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center p-8 bg-blue-50 rounded-xl">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Goal</h3>
            <p className="text-gray-600 text-sm">
              Deliver personalized, evidence-based physiotherapy services in a compassionate environment.
            </p>
          </div>

          <div className="text-center p-8 bg-green-50 rounded-xl">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              Help people get back to living life free from pain and discomfort, full of energy and vitality.
            </p>
          </div>

          <div className="text-center p-8 bg-purple-50 rounded-xl">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm">
              Revolutionize physiotherapy by providing pioneering, evidence-based treatments that transform lives.
            </p>
          </div>

          <div className="text-center p-8 bg-orange-50 rounded-xl">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Community</h3>
            <p className="text-gray-600 text-sm">
              Serving everyone from infants to elderly, workers, athletes, and families seeking healing.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">We Stand For ADIDIAN</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  {value.letter}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{value.word}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;