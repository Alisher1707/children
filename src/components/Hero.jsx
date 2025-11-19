import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const books = [
    { id: 1, image: '/images/kitob-1.png' },
    { id: 2, image: '/images/kitob-2.png' },
    { id: 3, image: '/images/kitob-3.png' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % books.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + books.length) % books.length);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 rounded-3xl mx-4 sm:mx-6 lg:mx-8"
      style={{
        background: 'linear-gradient(135deg, #544695 0%, #754088 100%)'
      }}>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Left content */}
          <div className="flex-1 z-10 text-center lg:text-left w-full">
            {/* Main heading */}
            <h1 className="text-white text-xl sm:text-2xl lg:text-4xl font-bold mb-2 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t('hero.title')}
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3 leading-tight" style={{ color: '#FFD89C', fontFamily: 'Inter, sans-serif' }}>
              {t('hero.discount')} <span className="text-white">{t('hero.subtitle')}</span>
            </h2>

            {/* Description */}
            <p className="text-white text-xs sm:text-sm lg:text-base mb-4 leading-relaxed opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t('hero.description')}
            </p>

            <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-5 w-full">
              {/* Button */}
              <button className="font-semibold px-8 sm:px-10 lg:px-8 py-3 sm:py-3.5 lg:py-3 rounded-full text-sm sm:text-base transition-all shadow-lg w-full sm:w-auto" style={{ backgroundColor: '#C6E5F9', color: '#5D4592' }}>
                {t('hero.button')}
              </button>

              {/* Delivery info */}
              <div className="flex items-center gap-3 border-2 border-white border-opacity-30 rounded-2xl px-4 py-2.5 w-full sm:w-auto">
                <div className="flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 5h14v10H0z" opacity="0.8"/>
                    <path d="M2 7h8v1.5H2zm0 3h6v1.5H2z"/>
                    <path d="M14 9h2.5l2.5 3v3h-5z" opacity="0.8"/>
                    <path d="M15 11h2l1.5 2H15z"/>
                    <circle cx="5" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M7 18h8" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="text-white">
                  <p className="font-bold text-sm">{t('hero.delivery.title')}</p>
                  <p className="text-xs opacity-90">{t('hero.delivery.subtitle')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Books display */}
          <div className="flex-1 flex flex-col items-center justify-center relative w-full lg:w-auto">
            <div className="relative scale-90 sm:scale-95 lg:scale-100">
              {/* 10% Discount badge */}
              <div className="absolute -left-2 sm:left-0 lg:left-2 z-40" style={{ top: '-10px' }}>
                <img src="/svg/10%25%20chegirma.svg" alt="10% chegirma" className="w-14 h-14 sm:w-16 sm:h-16 lg:w-24 lg:h-24" />
              </div>

              {/* Book images */}
              <div className="relative w-[260px] sm:w-[300px] lg:w-[320px] h-[220px] sm:h-[250px] lg:h-[280px]">
                {books.map((book, index) => (
                  <img
                    key={book.id}
                    src={book.image}
                    alt={`Book ${book.id}`}
                    className={`absolute transition-all duration-500 ${
                      index === currentSlide
                        ? 'w-40 h-52 sm:w-48 sm:h-60 lg:w-52 lg:h-64 z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100'
                        : index === (currentSlide + 1) % books.length
                        ? 'w-32 h-44 sm:w-40 sm:h-52 lg:w-44 lg:h-56 z-20 left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 scale-90 opacity-70'
                        : 'w-32 h-44 sm:w-40 sm:h-52 lg:w-44 lg:h-56 z-10 left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 scale-90 opacity-70'
                    }`}
                  />
                ))}
              </div>

              {/* Ellipse background with arrows positioned below books */}
              <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 w-[320px] sm:w-[380px] lg:w-[450px] h-[100px] sm:h-[110px] lg:h-[120px]">
                <svg className="w-full h-full" viewBox="0 0 450 120">
                  {/* Ellipse */}
                  <ellipse cx="225" cy="30" rx="220" ry="50" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                  {/* Left arrow */}
                  <path d="M10 30 L70 30 M40 15 L10 30 L40 45" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                  {/* Right arrow */}
                  <path d="M380 30 L440 30 M410 15 L440 30 L410 45" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                </svg>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-2 z-40 mt-6 sm:mt-8 lg:mt-12">
              <button
                onClick={prevSlide}
                className="bg-white text-purple-700 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="bg-white text-purple-700 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all shadow-lg"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
