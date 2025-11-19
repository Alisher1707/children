import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const books = [
    {
      id: 1,
      title: t('languageSection.bookTitle'),
      subtitle: t('languageSection.book1'),
      image: '/images/kitob-1.png',
      bgColor: '#E8F0FF'
    },
    {
      id: 2,
      title: t('languageSection.bookTitle'),
      subtitle: t('languageSection.book2'),
      image: '/images/kitob-2.png',
      bgColor: '#FFE8E0'
    },
    {
      id: 3,
      title: t('languageSection.bookTitle'),
      subtitle: t('languageSection.book3'),
      image: '/images/kitob-3.png',
      bgColor: '#F3E8FF'
    }
  ];

  const languages = [
    { flag: '/images/1.png', name: 'Book 1' },
    { flag: '/images/2.png', name: 'Book 2' },
    { flag: '/images/3.png', name: 'Book 3' },
    { flag: '/images/4.png', name: 'Book 4' },
    { flag: '/images/5.png', name: 'Book 5' },
    { flag: '/images/6.png', name: 'Book 6' },
    { flag: '/images/7.png', name: 'Book 7' },
    { flag: '/images/8.png', name: 'Book 8' }
  ];

  const nextBook = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const prevBook = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">

          {/* Left side - Title, flags and button */}
          <div className="flex flex-col items-start w-full lg:w-auto lg:flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight" style={{ color: '#5B4891', fontFamily: 'Inter, sans-serif' }}>
              {t('languageSection.title')}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>{t('languageSection.subtitle')}</p>

            {/* Language flags grid - 4 columns, 2 rows */}
            <div className="grid grid-cols-4 gap-4 sm:gap-5 mb-10 w-full max-w-xs">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow"
                >
                  <img src={lang.flag} alt={lang.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="font-semibold px-10 py-3.5 rounded-full text-white text-base transition-all shadow-lg hover:shadow-xl hover:scale-105"
              style={{ background: 'linear-gradient(to right, #8F2ADC, #D351B9)' }}>
              {t('languageSection.orderButton')}
            </button>
          </div>

          {/* Right side - Book cards */}
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            {/* Desktop: show 3 books in a row */}
            <div className="hidden lg:flex gap-5 sm:gap-6">
              {books.slice(0, 3).map((book) => (
                <div
                  key={book.id}
                  className="rounded-3xl p-7 flex flex-col items-center shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                  style={{ backgroundColor: book.bgColor, width: '240px' }}
                >
                  <div className="mb-5">
                    <img src={book.image} alt={book.title} className="w-44 h-52 object-contain" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-1">{book.title}</h3>
                  <p className="text-base text-gray-600">{book.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Mobile: show 2 books side by side with navigation */}
            <div className="lg:hidden flex flex-col items-center">
              <div className="flex gap-3 sm:gap-4 mb-4">
                {[currentIndex, (currentIndex + 1) % books.length].map((index) => {
                  const book = books[index];
                  return (
                    <div
                      key={book.id}
                      className="rounded-2xl p-4 flex flex-col items-center shadow-lg"
                      style={{ backgroundColor: book.bgColor, width: '160px' }}
                    >
                      <div className="mb-3">
                        <img src={book.image} alt={book.title} className="w-32 h-40 object-contain" />
                      </div>
                      <h3 className="font-bold text-sm text-gray-800 mb-1 text-center">{book.title}</h3>
                      <p className="text-xs text-gray-600">{book.subtitle}</p>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prevBook}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextBook}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
