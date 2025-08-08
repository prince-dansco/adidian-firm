import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Phone, ArrowLeft } from 'lucide-react';
import { blogDatas } from '../components/blogData'; 

const  BlogPostDetails = () => {
  const { serviceId } = useParams();
  
  const post = blogDatas[serviceId];

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1508569756727-9f6d54696f7f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {post.title}
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              {post.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.7',
                fontSize: '1.1rem'
              }}
            />
          </div>
        </div>
      </section>

      {/* Related Services */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Services</h2>
            <p className="text-xl text-gray-600">
              Explore our other specialized physiotherapy services
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(blogData)
              .filter(service => service.id !== serviceId) 
              .slice(0, 3) 
              .map((service) => (
                <div key={service.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={service?.image}
                    alt={service.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.shortDescription}
                  </p>
                  <Link
                    to={`/blog/${service.id}`}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
          </div> *

        
        </div>
      </section> */}

      {/* Call to Action */}
       <section className="py-20 bg-blue-600 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold mb-4">
                  Ready to Start Your Healing Journey?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Take the first step towards a pain-free, active lifestyle. Our
                  expert team is here to help you achieve your health goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold inline-flex items-center justify-center space-x-2"
                  >
                    <Calendar size={20} />
                    <span>Book Appointment</span>
                  </Link>
                  <a
                    href="tel:07065873379"
                    className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold inline-flex items-center justify-center space-x-2"
                  >
                    <Phone size={20} />
                    <span>Call: 070-6587-3379</span>
                  </a>
                </div>
              </div>
            </section>
    </div>
  );
};

export default BlogPostDetails;