import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Abduyaminov Akmal",
      book: t('testimonials.book1'),
      text: t('testimonials.text1'),
      avatar: "/images/avatar1.jpg"
    },
    {
      id: 2,
      name: "Abduyaminov Akmal",
      book: t('testimonials.book1'),
      text: t('testimonials.text1'),
      avatar: "/images/avatar2.jpg"
    },
    {
      id: 3,
      name: "Abduyaminov Akmal",
      book: t('testimonials.book1'),
      text: t('testimonials.text1'),
      avatar: "/images/avatar3.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 px-4 bg-white mb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#8F2ADC] to-[#D351B9] bg-clip-text text-transparent">
            {t('testimonials.title')}
          </h2>

          {/* Navigation buttons */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity relative"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #8F2ADC, #D351B9) border-box',
                border: '2px solid transparent',
                borderRadius: '50%'
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="url(#gradient)" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8F2ADC" />
                    <stop offset="100%" stopColor="#D351B9" />
                  </linearGradient>
                </defs>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              style={{ background: 'linear-gradient(to right, #8F2ADC, #D351B9)' }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="bg-purple-50 rounded-2xl p-6 transition-all duration-300 min-h-[200px]"
            >
              {/* User info */}
              <div className="flex items-start gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center text-purple-700 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-purple-600">{testimonial.book}</p>
                </div>
              </div>

              {/* Review text */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
