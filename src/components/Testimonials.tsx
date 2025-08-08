import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Amara Johnson',
      condition: 'Back Pain Recovery',
      image: 'https://images.pexels.com/photos/7659659/pexels-photo-7659659.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: "After months of chronic back pain, I thought I'd never feel normal again. The team at Adidian helped me get back to playing with my children pain-free. Their personalized approach made all the difference.",
      rating: 5
    },
    {
      name: 'Marcus Williams',
      condition: 'Sports Injury Rehabilitation',
      image: 'https://images.pexels.com/photos/5794063/pexels-photo-5794063.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: "As an athlete, I was devastated by my knee injury. Dr. Diana and her team not only helped me recover but made me stronger than before. I'm back on the field and performing better than ever.",
      rating: 5
    },
    {
      name: 'Grace Thompson',
      condition: 'Post-Pregnancy Recovery',
      image: 'https://images.pexels.com/photos/7659729/pexels-photo-7659729.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: "The women's health physiotherapy program was exactly what I needed after childbirth. The team understood my unique needs as a new mother and helped me regain my strength and confidence.",
      rating: 5
    },
    {
      name: 'David Brown',
      condition: 'Stroke Recovery',
      image: 'https://images.pexels.com/photos/5407204/pexels-photo-5407204.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: "After my stroke, I didn't think I'd walk again. The neurological rehabilitation program at Adidian gave me hope and helped me achieve what doctors said was impossible. I'm walking and living independently again.",
      rating: 5
    },
    {
      name: 'Angela Davis',
      condition: 'Chronic Pain Management',
      image: 'https://images.pexels.com/photos/7659655/pexels-photo-7659655.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: "I had tried everything for my chronic pain - multiple doctors, medications, other therapies. Nothing worked until I came to Adidian. Their holistic approach finally gave me the relief I'd been seeking for years.",
      rating: 5
    },
    {
      name: 'Robert Jackson',
      condition: 'Workplace Injury Recovery',
      image: 'https://images.pexels.com/photos/5794058/pexels-photo-5794058.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: "My workplace injury left me unable to work for months. The occupational therapy program helped me not only recover but also prevented future injuries. I'm back to work and feeling stronger than ever.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our patients about their journey to recovery and how Adidian Physiotherapy 
            Clinic has transformed their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-blue-600 text-sm">{testimonial.condition}</p>
                </div>
              </div>

              <div className="mb-4">
                <Quote className="text-blue-200 mb-2" size={24} />
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>

              <div className="flex space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Recovery Journey?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied patients who have transformed their lives with our expert care.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold">
            Book Your Consultation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;