import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const LanguageModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { changeLanguage } = useLanguage();

  if (!isOpen) return null;

  const handleLanguageSelect = (lang) => {
    changeLanguage(lang);
    onClose();
    navigate('/login');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-sm shadow-2xl overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #0099FF 0%, #0077CC 100%)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all z-10"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="flex flex-col items-center px-8 py-20">
            {/* Logo */}
            <div className="mb-8 bg-white rounded-2xl p-4 shadow-lg">
              <div className="w-28 h-28 flex items-center justify-center">
                <img
                  src="/images/loginpage-img.png"
                  alt="PlayBook Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-white text-2xl font-bold text-center mb-2">
              Добро пожаловать
            </h2>
            <h3 className="text-white text-xl font-semibold text-center mb-8">
              на AngelsBook!
            </h3>

            {/* Language selector label */}
            <p className="text-white text-sm mb-20">Выберите язык:</p>

            {/* Language buttons */}
            <div className="w-full space-y-3">
              {/* Uzbek language */}
              <button
                onClick={() => handleLanguageSelect('uz')}
                className="w-full bg-white rounded-xl px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-all shadow-md hover:shadow-lg group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0" style={{ backgroundColor: '#0099FF' }}>
                    <img
                      src="/images/2.png"
                      alt="Uzbekistan Flag"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <span className="hidden text-white text-xs font-bold">UZ</span>
                  </div>
                  <span className="text-gray-800 font-medium text-base">Узбекский язык</span>
                </div>
                <img src="/svg/arrow-right-solid-full.svg" alt="arrow" className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ filter: 'brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1742%) hue-rotate(193deg) brightness(101%) contrast(101%)' }} />
              </button>

              {/* Russian language */}
              <button
                onClick={() => handleLanguageSelect('ru')}
                className="w-full bg-white rounded-xl px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-all shadow-md hover:shadow-lg group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0" style={{ backgroundColor: '#FF4444' }}>
                    <img
                      src="/images/3.png"
                      alt="Russia Flag"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <span className="hidden text-white text-xs font-bold">RU</span>
                  </div>
                  <span className="text-gray-800 font-medium text-base">Русский язык</span>
                </div>
                <img src="/svg/arrow-right-solid-full.svg" alt="arrow" className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ filter: 'brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1742%) hue-rotate(193deg) brightness(101%) contrast(101%)' }} />
              </button>

              {/* English language */}
              <button
                onClick={() => handleLanguageSelect('en')}
                className="w-full bg-white rounded-xl px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-all shadow-md hover:shadow-lg group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0" style={{ backgroundColor: '#0066CC' }}>
                    <img
                      src="/images/1.png"
                      alt="UK Flag"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <span className="hidden text-white text-xs font-bold">EN</span>
                  </div>
                  <span className="text-gray-800 font-medium text-base">English</span>
                </div>
                <img src="/svg/arrow-right-solid-full.svg" alt="arrow" className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ filter: 'brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(1742%) hue-rotate(193deg) brightness(101%) contrast(101%)' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageModal;
