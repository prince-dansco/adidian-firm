import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Phone,
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
} from "lucide-react";

const Home: React.FC = () => {
  const services = [
    {
      id: "pain-management",
      title: "Pain Management",
      image: "image_four.jpg",
      description:
        "Comprehensive pain relief solutions for chronic and acute conditions using evidence-based techniques.",
    },
    {
      id: "sports-rehabilitation",
      title: "Sports Rehabilitation",
      image: "image_six.jpg",
      description:
        "Specialized treatment for sports injuries and performance enhancement for athletes of all levels.",
    },
    {
      id: "womens-health",
      title: "Women's Health",
      image: "image_ten_one.jpg",
      description:
        "Specialized physiotherapy for women's health, including pre-natal and post-partum care.",
    },
    {
      id: "neurological-rehabilitation",
      title: "Neurological Rehabilitation",
      image: "image_two.jpg",
      description:
        "Specialized therapy for neurological conditions to improve function and independence.",
    },
    {
      id: "occupational-therapy",
      title: "Occupational Therapy and Ergonomics",
      image: "image_five.jpg",
      description:
        "Workplace ergonomics and occupational health solutions to prevent work-related injuries.",
    },
    {
      id: "pediatrics",
      title: "Pediatrics",
      image: "image_seven.jpg",
      description:
        "Specialized physiotherapy services for children and adolescents.",
    },
    {
      id: "geriatric-care",
      title: "Geriatric Care",
      image: "image_ten.jpg",
      description:
        "Specialized physiotherapy services for older adults to maintain independence and quality of life.",
    },
    {
      id: "cardiovascular-rehabilitation",
      title: "Cardiovascular Rehabilitation",
      image: "image_one.jpg",
      description:
        "Specialized rehabilitation for heart conditions and cardiovascular health improvement.",
    },
    {
      id: "relaxation-massage",
      title: "Relaxation Massage",
      image: "image_three.jpg",
      description:
        "Specialized rehabilitation for heart conditions and cardiovascular health improvement.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Restoring Mobility,{" "}
                <span className="text-blue-600">Empowering Wellness</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                At Adidian Physiotherapy Clinic, we deliver personalized,
                evidence-based physiotherapy services in a compassionate
                environment, empowering you to achieve optimal health and live
                life free from pain.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Calendar size={20} />
                  <span className="font-semibold">Book Appointment</span>
                  <ArrowRight size={16} />
                </Link>

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
                  src="image_nine.jpg"
                  // src="https://images.pexels.com/photos/7659731/pexels-photo-7659731.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Black physiotherapist working with patient"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">
                  Patient Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Adidian?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand for ADIDIAN values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Goal</h3>
              <p className="text-gray-600 text-sm">
                Deliver personalized, evidence-based physiotherapy services in a
                compassionate environment.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm">
                Help people get back to living life free from pain and
                discomfort, full of energy and vitality.
              </p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm">
                Revolutionize physiotherapy by providing pioneering,
                evidence-based treatments that transform lives.
              </p>
            </div>

            <div className="text-center p-8 bg-orange-50 rounded-xl">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Our Community
              </h3>
              <p className="text-gray-600 text-sm">
                Serving everyone from infants to elderly, workers, athletes, and
                families seeking healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive physiotherapy services tailored to your unique needs
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <img
              src='image_four.jpg'
                // src="https://images.pexels.com/photos/7659652/pexels-photo-7659652.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Black woman receiving physiotherapy treatment"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pain Management</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive pain relief solutions for chronic and acute conditions using evidence-based techniques.
              </p>
              <Link
                to={`/blog/${this.id}`}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <img
              src='image_six.jpg'
                // src="https://images.pexels.com/photos/5794063/pexels-photo-5794063.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Black athlete receiving sports physiotherapy"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sports Rehabilitation</h3>
              <p className="text-gray-600 mb-4">
                Specialized treatment for sports injuries and performance enhancement for athletes of all levels.
              </p>
              <Link
                to={`/blog/${this.id}`}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <img
              src='image_ten_one.jpg'
                alt="Black woman with baby receiving postnatal care"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Women's Health</h3>
              <p className="text-gray-600 mb-4">
                Specialized physiotherapy for women's health, including pre-natal and post-partum care.
              </p>
              <Link
                to={`/blog/${this.id}`}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <img
              src='image_two.jpg'
                alt="Black woman with baby receiving postnatal care"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Neurological Rehabilitation
</h3>
              <p className="text-gray-600 mb-4">
                Specialized physiotherapy for women's health, including pre-natal and post-partum care.
              </p>
              <Link
                to={`/blog/${this.id}`}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <img
              src='image_five.jpg'
                alt="Black woman with baby receiving postnatal care"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Occupational Therapy and Ergonomics
</h3>
              <p className="text-gray-600 mb-4">
                Specialized physiotherapy for women's health, including pre-natal and post-partum care.
              </p>
              <Link
                to={`/blog/${this.id}`}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <img
              src='image_seven.jpg'
                alt="Black woman with baby receiving postnatal care"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pediatrics
</h3>
              <p className="text-gray-600 mb-4">
                Specialized physiotherapy for women's health, including pre-natal and post-partum care.
              </p>
              <Link
                to={`/blog/${this.id}`}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <img
              src='image_ten.jpg'
                alt="Black woman with baby receiving postnatal care"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Geriatric care
</h3>
              <p className="text-gray-600 mb-4">
                Specialized physiotherapy for women's health, including pre-natal and post-partum care.
              </p>
              <Link
                to={`/blog/${this.id}`}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <img
              src='image_one.jpg'
                alt="Black woman with baby receiving postnatal care"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cardiovascular Rehabilitation</h3>
              <p className="text-gray-600 mb-4">
                Specialized physiotherapy for women's health, including pre-natal and post-partum care.
              </p>
              <Link
                to={`/blog/${this.id}`}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>

          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={`/blog/${service.id}`}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-200 font-semibold inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Home;
