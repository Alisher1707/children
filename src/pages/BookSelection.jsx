import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookSelection = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const books = [
    { id: 1, title: 'Children English', subtitle: 'BOOK 1', image: '/images/kitob-1.png', bgColor: '#E8F4FF' },
    { id: 2, title: 'Children English', subtitle: 'BOOK 2', image: '/images/kitob-2.png', bgColor: '#FFE8E0' },
    { id: 3, title: 'Children English', subtitle: 'BOOK 3', image: '/images/kitob-3.png', bgColor: '#E8F4FF' },
  ];

  const languages = [
    { code: 'en', flag: '🇬🇧' },
    { code: 'uz', flag: '🇺🇿' },
    { code: 'ru', flag: '🇷🇺' },
    { code: 'ar', flag: '🇸🇦' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'ko', flag: '🇰🇷' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'zh', flag: '🇨🇳' },
  ];

  const nextBook = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const prevBook = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  const getVisibleBooks = () => {
    const first = books[currentIndex];
    const second = books[(currentIndex + 1) % books.length];
    return [first, second];
  };

  const visibleBooks = getVisibleBooks();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-gray-800 text-xl sm:text-2xl font-bold mb-2">
            TEST - 8ta tilda
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Ingliz tilini o'rganing
          </p>

          {/* Buy Button */}
          <button
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-full mb-6 transition-all shadow-lg"
            onClick={() => navigate('/order')}
          >
            Buyurtma berish
          </button>

          {/* Language Flags */}
          <div className="flex justify-between items-center">
            {languages.map((lang) => (
              <div
                key={lang.code}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center text-xl sm:text-2xl cursor-pointer hover:scale-110 transition-transform border border-gray-200"
              >
                {lang.flag}
              </div>
            ))}
          </div>
        </div>

        {/* Books Display */}
        <div className="flex flex-col items-center py-6">
          {/* Books Container - 2 books side by side */}
          <div className="flex gap-3 sm:gap-4 mb-6">
            {visibleBooks.map((book, index) => (
              <div
                key={book.id}
                onClick={() => navigate(`/book/${book.id}`)}
                className="flex flex-col items-center cursor-pointer transform hover:scale-105 transition-all rounded-2xl p-3 sm:p-4 shadow-lg"
                style={{ backgroundColor: book.bgColor }}
              >
                <div className="mb-2">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-28 h-36 sm:w-32 sm:h-40 object-contain rounded-lg"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/128x160?text=Book';
                    }}
                  />
                </div>
                <p className="text-gray-800 text-xs sm:text-sm font-semibold text-center">{book.title}</p>
                <p className="text-gray-600 text-xs font-medium">{book.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevBook}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextBook}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSelection;
