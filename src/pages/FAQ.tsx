import React, { useState } from 'react';
import { Plus, Minus, Phone, Mail } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is Physiotherapy?',
      answer: 'Physiotherapy is a branch of Medicine that focuses on restoring, maintaining and enhancing physical function, especially after an injury, illness or disability.'
    },
    {
      question: 'Why do I feel pains in my body?',
      answer: 'Pains around your body can be as a result of infections, inflammations, injuries, stress or underlying issues. If you are experiencing pains around your body, it\'s best you consult with a doctor to determine the cause and receive appropriate treatment.'
    },
    {
      question: 'How long will my Physiotherapy sessions last?',
      answer: 'It depends on your diagnosis and treatment specific to your body type and condition. At most 90 minutes.'
    },
    {
      question: 'What should I wear to my appointment?',
      answer: 'You should wear free, loose and comfortable clothing that\'s free to move and exercise in.'
    },
    {
      question: 'Do you acknowledge Insurance referrals?',
      answer: 'Yes! All type of insurances. Our Clinic is open to all types of Insurance.'
    },
    {
      question: 'What should I expect at my first visit?',
      answer: 'A warm reception by the clinic staff both Clinical and non-clinical staff, you\'ll be assigned to a doctor for expert and thorough Consultation, Evaluation, Diagnosis and Treatment plan specific to your diagnosis.'
    },
    {
      question: 'How private are my sessions?',
      answer: 'Our personalized care is top-notch. One patient at a time. The settings and ambience of our Clinic gives our patients the privacy they desire.'
    },
    {
      question: 'Can I come with someone for my sessions?',
      answer: 'Yes! You can come with a family member or a chaperon if need be. At most 1 person in the treatment cubicle.'
    },
    {
      question: 'Do you offer home visits?',
      answer: 'Yes! We started as a home-service provider and continue to offer in-home physiotherapy services. This is particularly beneficial for patients with mobility limitations, post-operative recovery, elderly patients, or those who prefer the comfort of their own environment. Contact us to discuss home visit availability in your area.'
    },
    {
      question: 'What is your Refund and Cancellation Policy?',
      answer: 'If you are not satisfied with our services (of which we doubt), you are free to cancel your appointments after 3 days. Please give us 24 hours notice before your next appointment of your desire to cancel. And refunds of unused services would be granted. Thank you.'
    },
    {
      question: 'What conditions do you treat at Adidian Physiotherapy Clinic?',
      answer: 'We treat a wide range of conditions including chronic pain, sports injuries, post-operative rehabilitation, neurological conditions (stroke, spinal cord injuries), cardiovascular rehabilitation, pediatric conditions, geriatric issues, women\'s health concerns, and workplace injuries. Our comprehensive approach covers preventive, rehabilitative, therapeutic, and specialized services.'
    },
    {
      question: 'What are your clinic hours?',
      answer: 'Our clinic is open Monday through Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 4:00 PM. We also offer Sunday appointments by special arrangement. For home visits and emergency consultations, we provide flexible scheduling to accommodate your needs.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, treatments, and what to expect 
              at Adidian Physiotherapy Clinic.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="text-blue-600 flex-shrink-0" size={20} />
                  ) : (
                    <Plus className="text-blue-600 flex-shrink-0" size={20} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img

              src='image_nine.jpg'
                // src="https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Black physiotherapist consulting with patient"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Still Have Questions?</h2>
              <p className="text-gray-600 leading-relaxed">
                Our friendly and knowledgeable team is here to help you with any additional questions 
                or concerns you may have. We believe in transparent communication and want to ensure 
                you feel completely comfortable before starting your treatment journey with us.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Us Directly</h4>
                    <p className="text-gray-600">Speak with our team for immediate answers</p>
                    <a href="tel:07065873379" className="text-blue-600 font-semibold">070-6587-3379</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Send Us an Email</h4>
                    <p className="text-gray-600">Get detailed responses to your questions</p>
                    <a href="mailto:info@adidianphysiotherapyclinic.com" className="text-blue-600 font-semibold">
                      info@adidianphysiotherapyclinic.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't let questions hold you back from getting the care you need. Contact us today 
            and take the first step towards your recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07065873379"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call: 070-6587-3379</span>
            </a>
            <a
              href="mailto:info@adidianphysiotherapyclinic.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold inline-flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;