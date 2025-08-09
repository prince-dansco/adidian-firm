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
      image: "https://media.istockphoto.com/id/1405986129/photo/doctor-physiotherapist-doing-healing-treatment-on-mans-back.jpg?s=612x612&w=0&k=20&c=B4zWk1T1FleknnsNF8hd8r6kv2OqqsGsqn1NGNDWeeI=",
      description:
        "Comprehensive pain relief solutions for chronic and acute conditions using evidence-based techniques.",
    },
    {
      id: "sports-rehabilitation",
      title: "Sports Rehabilitation",
      image: "https://elements-resized.envatousercontent.com/elements-video-cover-images/f25e2ae9-22b9-4fd9-ba75-3e8fd18795f6/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=4df7fdc8e3bbfb62358abc157bf79da8ff6390ce8d690851c516f3f063803848",
      description:
        "Specialized treatment for sports injuries and performance enhancement for athletes of all levels.",
    },
    {
      id: "womens-health",
      title: "Women's Health",
      image:"https://media.istockphoto.com/id/1058368650/photo/performing-a-thorough-checkup-on-her-patient.jpg?s=612x612&w=0&k=20&c=7Q7XcsIu9tnXxqL_eHZiar9TIEbQkqYIR-_RI_E5AlQ=",
      // image: "data:image/jpeg;base64,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",
      description:
        "Specialized physiotherapy for women's health, including pre-natal and post-partum care.",
    },
    {
      id: "neurological-rehabilitation",
      title: "Neurological Rehabilitation",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVb7Ep8arvL4u2cV2j2ngcq05-G5aGKluFA&s",
      description:
        "Specialized therapy for neurological conditions to improve function and independence.",
    },
    {
      id: "occupational-therapy",
      title: "Occupational Therapy and Ergonomics",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCps2Pn14nfHHxeHY3PbYhrdDLOssQ5fzGQ&s',
      // image:'https://www.shutterstock.com/image-photo/young-female-african-american-athlete-260nw-1726404145.jpg',
      description:
        "Workplace ergonomics and occupational health solutions to prevent work-related injuries.",
    },
    {
      id: "pediatrics",
      title: "Pediatrics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGx0nRyk_bU7nY3VeeeGrX7HyWmQxkvShOCA&s",
      description:
        "Specialized physiotherapy services for children and adolescents.",
    },
    {
      id: "geriatric-care",
      title: "Geriatric Care",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFE2_zgn9Oja5F5R6y6uB8nbKEN1fLq7wGYw&s",
      description:
        "Specialized physiotherapy services for older adults to maintain independence and quality of life.",
    },
    {
      id: "cardiovascular-rehabilitation",
      title: "Cardiovascular Rehabilitation",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-qtkjMxogniB_ZhVyazq7I1BwvE8UkGE3g&s",
      description:
        "Specialized rehabilitation for heart conditions and cardiovascular health improvement.",
    },
    {
      id: "relaxation-massage",
      title: "Relaxation Massage",
      image: "download_one.jpeg",
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
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

              <div className="grid grid-col-2 md:grid-col-3 items-center space-x-8 text-sm text-gray-600">
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

              <div className="absolute -bottom-6 -left-4 md:-left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>

              <div className="absolute -top-6 -right-4 md:-right-6 bg-white p-6 rounded-xl shadow-lg">
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
