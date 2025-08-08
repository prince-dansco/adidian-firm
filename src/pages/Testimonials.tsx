import React from 'react';
import { Star, Quote } from 'lucide-react';
// import Image1 from '../../public/first.jpeg'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Opluwa John Asokoro',
      condition: 'Back Pain Recovery',
      // image: 'https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhdGllbnR8ZW58MHx8MHx8fDA%3D',
      quote: "After months of chronic back pain, I thought I'd never feel normal again. The team at Adidian helped me get back to playing with my children pain-free. Their personalized approach made all the difference.",
      rating: 5,
      location: 'Abuja'
    },
    {
      name: 'George Daniel Garki',
      condition: 'Sports Injury Rehabilitation',
      // image: 'https://images.pexels.com/photos/5794063/pexels-photo-5794063.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: "As an athlete, I was devastated by my knee injury. Dr. Diana and her team not only helped me recover but made me stronger than before. I'm back on the field and performing better than ever.",
      rating: 5,
      location: 'Garki'
    },
    {
      name: 'Mrs. Catherine Onate Area 11',
      condition: 'Post-Pregnancy Recovery',
      // image: 'https://plus.unsplash.com/premium_photo-1731410157812-f3a6a559e8af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGF0aWVudCUyMGJsYWNrfGVufDB8fDB8fHww',
      quote: "The women's health physiotherapy program was exactly what I needed after childbirth. The team understood my unique needs as a new mother and helped me regain my strength and confidence.",
      rating: 5,
      location: 'Area 11'
    },
    {
      name: 'Mrs. Grace Essien Gwarinpa',
      condition: 'Stroke Recovery',
      // image: 'https://images.unsplash.com/photo-1632054229892-21103035a686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGF0aWVudCUyMGJsYWNrfGVufDB8fDB8fHww',
      quote: "After my stroke, I didn't think I'd walk again. The neurological rehabilitation program at Adidian gave me hope and helped me achieve what doctors said was impossible. I'm walking and living independently again.",
      rating: 5,
      location: 'Wuse'
    },
    {
      name: 'Mrs. Arziki Wakawa Wuse',
      condition: 'Chronic Pain Management',
      // image: 'https://images.unsplash.com/photo-1550792404-f62d4ce3bb3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhdGllbnR8ZW58MHx8MHx8fDA%3D',
      quote: "I had tried everything for my chronic pain - multiple doctors, medications, other therapies. Nothing worked until I came to Adidian. Their holistic approach finally gave me the relief I'd been seeking for years.",
      rating: 5,
      location: 'Maitama'
    },
    {
      name: 'Engr. Ehidiamen Okoyomon Maitama',
      condition: 'Workplace Injury Recovery',
      // image: 'https://images.pexels.com/photos/5794058/pexels-photo-5794058.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: "My workplace injury left me unable to work for months. The occupational therapy program helped me not only recover but also prevented future injuries. I'm back to work and feeling stronger than ever.",
      rating: 5,
      location: 'Central Area'
    },
    {
      name: 'Ifechukwu Ugwu Kubwa',
      condition: 'Pediatric Physiotherapy',
      // image: 'https://images.unsplash.com/photo-1550792404-f62d4ce3bb3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhdGllbnR8ZW58MHx8MHx8fDA%3D',
      quote: "My son had developmental delays, and I was worried about her future. The pediatric team at Adidian worked miracles. She's now meeting all her milestones and thriving. I'm forever grateful.",
      rating: 5,
      location: 'Kubwa'
    },
    {
      name: 'Emmanuel Okafor',
      condition: 'Geriatric Care',
      // image: 'https://images.pexels.com/photos/5407205/pexels-photo-5407205.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: "At 75, I thought my mobility issues were just part of aging. Adidian's geriatric physiotherapy program proved me wrong. I'm more active now than I've been in years, and my balance has improved significantly.",
      rating: 5,
      location: 'Central Business Districk'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Happy Patients' },
    { number: '98%', label: 'Success Rate' },
    { number: '2+', label: 'Years of Service' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Patient Success Stories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our patients about their journey to recovery and how Adidian Physiotherapy 
              Clinic has transformed their lives across Abuja and surrounding areas.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{testimonial.condition}</p>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
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
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recovery Journeys</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the transformation stories of our patients through their recovery process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
              src='image_five.jpg'
                alt="Before and after physiotherapy treatment"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">From Pain to Performance</h3>
                <p className="text-gray-600 mb-4">
                  Watch how our comprehensive treatment approach helped athletes return to peak performance 
                  after serious injuries.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  View Success Stories →
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
              src='image_two.jpg'
                // src="https://images.pexels.com/photos/5794057/pexels-photo-5794057.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Elderly patient regaining mobility"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Restoring Independence</h3>
                <p className="text-gray-600 mb-4">
                  Discover how our geriatric physiotherapy programs help elderly patients regain 
                  independence and improve quality of life.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  View Success Stories →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied patients who have transformed their lives with our expert care. 
            Your journey to recovery starts with a single call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07065873379"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              Call: 070-6587-3379
            </a>
            <a
              href="mailto:info@adidianphysiotherapyclinic.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold"
            >
              Book Consultation Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;