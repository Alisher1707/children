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
    <section className="px-4 sm:px-6 lg:px-8 bg-white" style={{ paddingTop: '2rem', paddingBottom: '2rem', marginTop: '60px', marginBottom: '40px' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header with navigation - Desktop only */}
        <div className="hidden lg:flex justify-between items-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-inter" style={{ color: '#544695' }}>
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

        {/* Mobile Title */}
        <h2 className="lg:hidden text-xl sm:text-2xl font-bold font-inter mb-6 text-center sm:text-left" style={{ color: '#544695' }}>
          {t('testimonials.title')}
        </h2>

        {/* Testimonials cards */}
        <div className="flex flex-col items-center">
          {/* Desktop: 3 cards carousel */}
          <div className="hidden lg:block overflow-hidden w-full">
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
                      <h3 className="font-bold text-sm sm:text-base text-gray-800 font-inter">{testimonial.name}</h3>
                      <p className="text-xs sm:text-sm font-inter" style={{ color: '#544695' }}>{testimonial.book}</p>
                    </div>
                  </div>

                  {/* Review text */}
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-inter">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: 1 card with navigation below */}
          <div className="lg:hidden w-full max-w-md mx-auto">
            <div className="bg-purple-50 rounded-2xl p-5 mb-4">
              {/* User info */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                  <img
                    src={testimonials[currentIndex % testimonials.length].avatar}
                    alt={testimonials[currentIndex % testimonials.length].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-800 font-inter">
                    {testimonials[currentIndex % testimonials.length].name}
                  </h3>
                  <p className="text-xs font-inter" style={{ color: '#544695' }}>
                    {testimonials[currentIndex % testimonials.length].book}
                  </p>
                </div>
              </div>

              {/* Review text */}
              <p className="text-gray-700 text-sm leading-relaxed font-inter">
                {testimonials[currentIndex % testimonials.length].text}
              </p>
            </div>

            {/* Mobile Navigation buttons */}
            <div className="flex justify-center gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity border-2 rounded-full"
                style={{ borderColor: '#D351B9' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="#D351B9" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity border-2 rounded-full"
                style={{ borderColor: '#D351B9' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="#D351B9" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
