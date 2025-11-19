import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const BookSelection = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const books = [
    { id: 1, title: 'Children English', image: '/images/kitob-1.png' },
    { id: 2, title: 'Children English', image: '/images/kitob-2.png' },
    { id: 3, title: 'Children English', image: '/images/kitob-3.png' },
  ];

  const handleBack = () => {
    navigate('/user-data');
  };

  return (
    <div className="h-screen bg-gradient-to-b from-[#0099FF] to-[#0077CC] flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-sm bg-white shadow-2xl relative flex flex-col" style={{ height: 'calc(100vh - 2rem)' }}>
        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-6 left-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all z-10"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Header */}
        <div className="px-8 pt-16 pb-4 text-center">
          <h1 className="text-gray-900 text-xl font-semibold">
            {t('bookSelection.home')}
          </h1>
        </div>

        {/* Books section */}
        <div className="flex-1 overflow-y-auto px-8 py-4">
          <h2 className="text-gray-900 text-base font-semibold mb-4">
            {t('bookSelection.title')}
          </h2>
          <div className="space-y-3">
            {books.map((book) => (
              <div
                key={book.id}
                onClick={() => navigate(`/book/${book.id}`)}
                className="bg-gray-50 rounded-xl p-4 flex items-center justify-between hover:bg-gray-100 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-16 h-20 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/64x80?text=Book';
                    }}
                  />
                  <span className="text-blue-600 text-base font-medium">
                    {book.title}
                  </span>
                </div>
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex justify-around items-center">
            {/* Home */}
            <button className="flex flex-col items-center gap-1 text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs font-medium">{t('bookSelection.home')}</span>
            </button>

            {/* Notes */}
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-xs font-medium">{t('bookSelection.notes')}</span>
            </button>

            {/* Settings */}
            <button
              onClick={() => navigate('/settings')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs font-medium">{t('bookSelection.settings')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSelection;
