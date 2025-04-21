
import React, { useState } from 'react';

const ReferencesContent: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Engineering Manager",
      company: "Tech Innovations Inc.",
      image: "👨‍💼",
      text: "Jason is one of the most talented developers I've had the pleasure to work with. His problem-solving skills and attention to detail make him an invaluable team member. He consistently delivers high-quality code and is always willing to help others."
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Lead Developer",
      company: "DataSolutions Corp",
      image: "👩‍💻",
      text: "Working with Jason was a great experience. He approaches problems methodically and creates elegant solutions. His understanding of both frontend and backend technologies allowed our project to be completed ahead of schedule. I would gladly work with him again."
    },
    {
      id: 3,
      name: "Dr. Michael Lee",
      role: "Professor",
      company: "University of Technology",
      image: "👨‍🏫",
      text: "As Jason's academic advisor, I witnessed his exceptional dedication to learning and applying complex concepts. His research contributions were significant, and his ability to explain technical concepts clearly sets him apart. He has a bright future ahead."
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "SoftServe Solutions",
      image: "👩‍💼",
      text: "Jason's technical expertise combined with his understanding of user needs made him an essential part of our product development. He's not just a coder – he thinks about the big picture and how technology can solve real problems."
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
