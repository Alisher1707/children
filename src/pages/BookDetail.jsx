import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const BookDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { language, changeLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const books = [
    { id: 1, title: 'Children English Book 1', image: '/images/kitob-1.png', name: 'Children English' },
    { id: 2, title: 'Children English Book 2', image: '/images/kitob-2.png', name: 'Children English' },
    { id: 3, title: 'Children English Book 3', image: '/images/kitob-3.png', name: 'Children English' },
  ];

  const book = books.find(b => b.id === parseInt(id));

  const languages = [
    { value: 'ru', label: 'Русский язык', flag: 'https://flagcdn.com/w40/ru.png' },
    { value: 'uz', label: "O'zbek tili", flag: 'https://flagcdn.com/w40/uz.png' },
    { value: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  ];

  return (
    <div className="h-screen bg-white flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-sm bg-gradient-to-b from-[#0099FF] to-[#0077CC] shadow-2xl relative flex flex-col" style={{ height: 'calc(100vh - 2rem)' }}>
        {/* Back button */}
        <button
          onClick={() => navigate('/book-selection')}
          className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all z-10"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Book Title */}
        <div className="pt-6 pb-4 text-center">
          <h1 className="text-white text-xl font-semibold px-16">
            {book?.title}
          </h1>
        </div>

        {/* Book Image */}
        <div className="flex-1 flex items-start justify-center pt-8 pb-8">
          <div className="relative" style={{ width: '250px', height: '300px' }}>
            <img
              src={book?.image}
              alt={book?.title}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-transparent px-8 pb-8">
          {/* Book Name */}
          <h2 className="text-white text-center text-lg font-semibold mb-4">
            {book?.name}
          </h2>

          {/* Language Selection Label */}
          <p className="text-white text-sm mb-3">Выберите язык</p>

          {/* Custom Language Dropdown */}
          <div className="relative mb-6">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-white rounded-lg px-4 py-3 flex items-center justify-between text-gray-700 font-medium"
            >
              <span className="flex items-center gap-2">
                <img
                  src={languages.find(l => l.value === language)?.flag}
                  alt="flag"
                  className="w-6 h-4 object-cover"
                />
                <span>{languages.find(l => l.value === language)?.label}</span>
              </span>
              <svg className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-lg shadow-lg overflow-hidden z-20 max-h-48 overflow-y-auto">
                {languages.map((lang) => (
                  <button
                    key={lang.value}
                    onClick={() => {
                      changeLanguage(lang.value);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-3 flex items-center gap-2 hover:bg-gray-50 transition-colors text-left"
                  >
                    <img
                      src={lang.flag}
                      alt="flag"
                      className="w-6 h-4 object-cover"
                    />
                    <span className="text-gray-700 font-medium">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Read Book Button */}
          <button
            onClick={() => navigate(`/book/${id}/read`)}
            className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Читать книгу
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
