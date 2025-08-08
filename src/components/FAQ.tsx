import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What conditions do you treat at Adidian Physiotherapy Clinic?',
      answer: 'We treat a wide range of conditions including chronic pain, sports injuries, post-operative rehabilitation, neurological conditions (stroke, spinal cord injuries), cardiovascular rehabilitation, pediatric conditions, geriatric issues, women\'s health concerns, and workplace injuries. Our comprehensive approach covers preventive, rehabilitative, therapeutic, and specialized services.'
    },
    {
      question: 'Do I need a referral from a doctor to book an appointment?',
      answer: 'While a doctor\'s referral can be helpful for insurance purposes and provides us with additional medical context, it is not required to book an appointment with us. You can contact us directly to schedule a consultation. Our licensed physiotherapists will conduct a thorough assessment and develop a personalized treatment plan for you.'
    },
    {
      question: 'What should I expect during my first visit?',
      answer: 'During your first visit, we\'ll conduct a comprehensive assessment including your medical history, current symptoms, and physical examination. We\'ll discuss your goals and concerns, perform movement analysis if needed, and develop a personalized treatment plan. This initial consultation typically takes 60-90 minutes to ensure we fully understand your condition and needs.'
    },
    {
      question: 'How long does each treatment session last?',
      answer: 'Treatment sessions typically last 45-60 minutes, depending on your specific needs and treatment plan. The duration may vary based on the type of therapy required, your condition, and your individual response to treatment. We ensure adequate time for effective treatment without rushing your care.'
    },
    {
      question: 'Do you offer home visits?',
      answer: 'Yes! We started as a home-service provider and continue to offer in-home physiotherapy services. This is particularly beneficial for patients with mobility limitations, post-operative recovery, elderly patients, or those who prefer the comfort of their own environment. Contact us to discuss home visit availability in your area.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including cash, bank transfers, and major insurance plans. We believe in making quality physiotherapy care accessible and affordable. Contact us to discuss payment options and any insurance coverage you may have.'
    },
    {
      question: 'How many sessions will I need?',
      answer: 'The number of sessions varies greatly depending on your condition, severity, individual response to treatment, and personal goals. Some patients see improvement in 3-4 sessions, while others with complex conditions may need ongoing care. We\'ll regularly assess your progress and adjust your treatment plan accordingly, always keeping you informed about your expected timeline.'
    },
    {
      question: 'Do you treat children and elderly patients?',
      answer: 'Absolutely! We provide specialized care for patients of all ages, from infants to elderly individuals. Our pediatric services address developmental delays and childhood injuries, while our geriatric physiotherapy focuses on age-related conditions, arthritis, balance issues, and fall prevention. Our team is trained to work with the unique needs of each age group.'
    },
    {
      question: 'What makes Adidian Physiotherapy Clinic different from other clinics?',
      answer: 'We stand by our ADIDIAN values: Accessibility, Diligence, Innovation, Distinguished care, Industrious approach, Affordability, and Noble service. We employ only licensed, experienced physiotherapists and use evidence-based treatments. Our personalized approach, combined with our commitment to patient satisfaction and community service, sets us apart in providing exceptional care.'
    },
    {
      question: 'Can I book a phone consultation?',
      answer: 'Yes, we offer both physical and phone consultations. Phone consultations are excellent for initial assessments, follow-up discussions, exercise program reviews, and when in-person visits aren\'t possible. However, hands-on treatment typically requires in-person sessions. We\'ll help determine the best consultation type for your specific needs.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services, treatments, and what to expect 
            at Adidian Physiotherapy Clinic.
          </p>
        </div>

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

        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Our friendly team is here to help you with any additional questions or concerns you may have.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="tel:07065873379"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Call Us: 070-6587-3379
            </a>
            <button className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 font-semibold">
              Send Us a Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;