import { useLanguage } from '../context/LanguageContext';

const LanguageSection = () => {
  const { t } = useLanguage();

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
    },
    {
      id: 4,
      title: 'Children English',
      subtitle: 'BOOK 4',
      image: '/images/4.png',
      bgColor: '#E8FFE8'
    },
    {
      id: 5,
      title: 'Children English',
      subtitle: 'BOOK 5',
      image: '/images/5.png',
      bgColor: '#FFFFE8'
    },
    {
      id: 6,
      title: 'Children English',
      subtitle: 'BOOK 6',
      image: '/images/6.png',
      bgColor: '#FFE8F0'
    },
    {
      id: 7,
      title: 'Children English',
      subtitle: 'BOOK 7',
      image: '/images/7.png',
      bgColor: '#E8F0FF'
    },
    {
      id: 8,
      title: 'Children English',
      subtitle: 'BOOK 8',
      image: '/images/8.png',
      bgColor: '#FFE8E0'
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

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left side - Title, flags and button */}
          <div className="flex flex-col items-start flex-1">
            <h2 className="text-5xl font-bold mb-3" style={{ color: '#5B4891' }}>
              {t('languageSection.title')}
            </h2>
            <p className="text-gray-600 text-lg mb-8">{t('languageSection.subtitle')}</p>

            {/* Language flags grid */}
            <div className="grid grid-cols-4 gap-5 mb-10">
              {languages.map((lang, index) => (
                <div key={index} className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 shadow-md">
                  <img src={lang.flag} alt={lang.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="font-semibold px-10 py-3.5 rounded-full text-white text-base transition-all shadow-lg hover:shadow-xl" style={{ background: 'linear-gradient(to right, #8F2ADC, #D351B9)' }}>
              {t('languageSection.orderButton')}
            </button>
          </div>

          {/* Right side - Book cards */}
          <div className="flex gap-6 flex-1 justify-end">
            {books.slice(0, 3).map((book) => (
              <div
                key={book.id}
                className="rounded-3xl p-7 flex flex-col items-center shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: book.bgColor, width: '260px' }}
              >
                <div className="mb-5">
                  <img src={book.image} alt={book.title} className="w-44 h-52 object-contain" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-1">{book.title}</h3>
                <p className="text-base text-gray-600">{book.subtitle}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
