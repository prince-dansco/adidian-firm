import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    'Pain Management',
    'Sports Injury Rehabilitation',
    'Neurological Rehabilitation',
    'Women\'s Health Physiotherapy',
    'Pediatric Physiotherapy',
    'Occupational Therapy'
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/team', label: 'Meet the Team' },
    { path: '/testimonials', label: 'Patient Testimonials' },
    { path: '/faq', label: 'FAQs' },
    { path: '/resources', label: 'Health Resources' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Adidian Physiotherapy</h3>
              <p className="text-gray-300 leading-relaxed">
                Restoring mobility and empowering wellness through personalized, evidence-based 
                physiotherapy services in a compassionate environment.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/adidianphysiotherapy" 
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/adidianphysiotherapy" 
                className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors duration-200"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/adidianphysiotherapy" 
                className="bg-blue-800 p-2 rounded-full hover:bg-blue-900 transition-colors duration-200"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1" size={20} />
                <div>
                  <p className="text-gray-300">
                    No 32 Lord Lugard Street<br />
                    Area 11, Garki, Abuja<br />
                    Beside Efab Properties Ltd
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={20} />
                <a 
                  href="tel:07065873379" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  070-6587-3379
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={20} />
                <a 
                  href="mailto:adidianphysiotherapyclinic@gmail.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  adidianphysiotherapyclinic@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold text-blue-400 mb-2">Office Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024 Adidian Physiotherapy Clinic. All rights reserved.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <div className="flex justify-center md:justify-end space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/hipaa" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  HIPAA Compliance
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              We stand for ADIDIAN: Accessibility, Diligence, Innovation, Distinguished care, 
              Industrious approach, Affordability, and Noble service.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;