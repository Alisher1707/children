import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Abdullaev Javohir",
      book: t('testimonials.book1'),
      text: t('testimonials.text1'),
      avatar: "/images/testimonals.png"
    },
    {
      id: 2,
      name: "Karimova Gulnora",
      book: t('testimonials.book1'),
      text: t('testimonials.text1'),
      avatar: "/images/testimonals-women.jpg"
    },
    {
      id: 3,
      name: "Toshmatov Jasur",
      book: t('testimonials.book1'),
      text: t('testimonials.text1'),
      avatar: "/images/testimonals-man2.jpg"
    },
    {
      id: 4,
      name: "Rahimova Dilnoza",
      book: t('testimonials.book1'),
      text: t('testimonials.text1'),
      avatar: "/images/testimonals-women2.jpg"
    },
    {
      id: 5,
      name: "Alimov Sardor",
      book: t('testimonials.book1'),
      text: t('testimonials.text1'),
      avatar: "/images/testimonals-man1.jpg"
    }
  ];

  useEffect(() => {
    if (currentIndex === testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 500);
    } else if (currentIndex === -1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length - 1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 500);
    }
  }, [currentIndex, testimonials.length]);

  const nextSlide = () => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (isTransitioning) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-white" style={{ paddingTop: '3rem', paddingBottom: '3rem', marginTop: '120px', marginBottom: '60px' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#544695' }}>
            {t('testimonials.title')}
          </h2>

          {/* Navigation buttons */}
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:opacity-80 transition-opacity relative"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #8F2ADC, #D351B9) border-box',
                border: '2px solid transparent',
                borderRadius: '50%'
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="url(#gradient)" viewBox="0 0 24 24">
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
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              style={{ background: 'linear-gradient(to right, #8F2ADC, #D351B9)' }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials cards */}
        <div className="overflow-hidden">
          <div
            className={`flex gap-4 sm:gap-6 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex * 1.5}rem))` }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-purple-50 rounded-2xl p-5 sm:p-6 min-h-[180px] sm:min-h-[200px] flex-shrink-0"
                style={{ width: 'calc(33.333% - 1rem)' }}
              >
              {/* User info */}
              <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-800">{testimonial.name}</h3>
                  <p className="text-xs sm:text-sm text-purple-600">{testimonial.book}</p>
                </div>
              </div>

              {/* Review text */}
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
