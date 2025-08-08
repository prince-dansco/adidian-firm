import React from 'react';
import { BookOpen, Mic, Video, FileText } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Health Resources & Education</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access valuable health information, expert advice, and educational content to support 
              your wellness journey and physiotherapy treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">FAQs</h3>
              <p className="text-gray-600 mb-6">
                Find answers to frequently asked questions about physiotherapy, treatments, and our services.
              </p>
              <a
                href="/faq"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                View FAQs
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Health Blogs</h3>
              <p className="text-gray-600 mb-6">
                Read expert articles on physiotherapy, wellness tips, injury prevention, and recovery strategies.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 font-semibold">
                Coming Soon
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Podcasts</h3>
              <p className="text-gray-600 mb-6">
                Listen to expert discussions on health topics, patient success stories, and wellness advice.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-200 font-semibold">
                Coming Soon
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Webinars</h3>
              <p className="text-gray-600 mb-6">
                Join live educational sessions with our physiotherapy experts and health professionals.
              </p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors duration-200 font-semibold">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Health Content</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preview of upcoming educational content from our expert team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
              src='image_seven.jpg'
                // src="https://images.pexels.com/photos/7659655/pexels-photo-7659655.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Black woman doing physiotherapy exercises"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">BLOG POST</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Understanding Chronic Pain Management</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn about effective strategies for managing chronic pain through physiotherapy and lifestyle changes.
                </p>
                <span className="text-gray-500 text-xs">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
              src='image_four.jpg'
                // src="https://images.pexels.com/photos/5794063/pexels-photo-5794063.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Black athlete in rehabilitation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-purple-600 font-semibold mb-2">PODCAST</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sports Injury Prevention & Recovery</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Expert discussion on preventing sports injuries and optimizing recovery for athletes.
                </p>
                <span className="text-gray-500 text-xs">Coming Soon</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
              src='image_ten.jpg'
                // src="https://images.pexels.com/photos/7659729/pexels-photo-7659729.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Black woman with baby in postnatal care"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-orange-600 font-semibold mb-2">WEBINAR</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Women's Health & Postnatal Recovery</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Live session covering physiotherapy approaches for women's health and postnatal recovery.
                </p>
                <span className="text-gray-500 text-xs">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Health Tips</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to receive the latest health tips, physiotherapy advice, and updates on our educational content.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;