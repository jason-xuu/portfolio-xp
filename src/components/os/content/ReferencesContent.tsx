import React, { useState } from 'react';

const ReferencesContent: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rain Duan",
      role: "Senior Software Dev",
      company: "Doordash",
      image: "👦🏻",
      text: "Jason's passion for coding and problem-solving is evident in every project he tackles. His dedication as a software developer is truly inspiring."
    },
    {
      id: 2,
      name: "Damien Dhingra",
      role: "Co-Founder/COO",
      company: "Omnisynk AI",
      image: "👨🏾",
      text: "Working with Jason has been a game changer. His attention to detail and drive to constantly improve as a developer are unmatched."
    },
    {
      id: 3,
      name: "Joann J. Hill",
      role: "Senior Federal Executive",
      company: "U.S. Department of Commerce",
      image: "👩🏿‍💼",
      text: "Jason demonstrated exceptional initiative and technical acumen. His work exploring generative AI and distributed storage technologies led to actionable insights for minority business enterprises, including a detailed analysis report with federal market applications. His contributions supported our mission to drive innovation and promote technology adoption across underserved business communities."
    },
    {
      id: 4,
      name: "Chengxin Xu",
      role: "Assistant Professor",
      company: "Seattle University",
      image: "👨🏻‍🎓",
      text: "Jason provided valuable academic guidance during my data-driven research on retirement communities. His support was key as I automated data collection with Python, conducted statistical analysis in Excel, and visualized trends with pandas and matplotlib. His feedback helped me present clear, actionable insights to stakeholders while maintaining robust version control using Git."
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0].id);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-blue-800 mb-4">References & Testimonials</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-6">
          {/* Current Testimonial */}
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`${activeTestimonial === testimonial.id ? 'block' : 'hidden'} space-y-4`}
            >
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl">
                    {testimonial.image}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    "
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="italic text-gray-600 mb-4">"{testimonial.text}"</p>
                <h3 className="font-semibold text-blue-700">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
              </div>
            </div>
          ))}
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(testimonial.id)}
                className={`w-3 h-3 rounded-full ${
                  activeTestimonial === testimonial.id ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`View testimonial from ${testimonial.name}`}
              />
            ))}
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex border-t border-gray-200">
          <button
            onClick={() => {
              const currentIndex = testimonials.findIndex(t => t.id === activeTestimonial);
              const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
              setActiveTestimonial(testimonials[prevIndex].id);
            }}
            className="flex-1 py-3 bg-gray-50 hover:bg-gray-100 text-blue-700 font-medium border-r border-gray-200"
          >
            Previous
          </button>
          <button
            onClick={() => {
              const currentIndex = testimonials.findIndex(t => t.id === activeTestimonial);
              const nextIndex = (currentIndex + 1) % testimonials.length;
              setActiveTestimonial(testimonials[nextIndex].id);
            }}
            className="flex-1 py-3 bg-gray-50 hover:bg-gray-100 text-blue-700 font-medium"
          >
            Next
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <h3 className="font-semibold text-blue-700 mb-2">References Available</h3>
          <p className="text-gray-600 text-sm">
            Professional references are available upon request. Please contact me directly for their contact information.
          </p>
        </div>
        
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <h3 className="font-semibold text-blue-700 mb-2">Additional Feedback</h3>
          <p className="text-gray-600 text-sm">
            Check out my LinkedIn profile for more recommendations and endorsements from colleagues and clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferencesContent;
