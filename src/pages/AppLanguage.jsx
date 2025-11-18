import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const AppLanguage = () => {
  const navigate = useNavigate();
  const { t, language, changeLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const languages = [
    { code: 'uz', label: t('appLanguage.uzbek') },
    { code: 'ru', label: t('appLanguage.russian') },
    { code: 'en', label: t('appLanguage.english') }
  ];

  const handleSave = () => {
    changeLanguage(selectedLanguage);
    navigate('/settings');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0099FF] to-[#0077CC] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md mb-[32rem] relative">
        {/* Header */}
        <div className="flex items-center pt-6 pb-8 px-6 border-b border-gray-100 shadow-sm">
          <button
            onClick={() => navigate('/settings')}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-800 flex-1 text-center pr-6">
            {t('settings.title')}
          </h1>
        </div>

        {/* Title */}
        <div className="px-8 pt-14 pb-12">
          <h2 className="text-lg font-bold text-gray-800">
            {t('appLanguage.title')}
          </h2>
        </div>

        {/* Language Options */}
        <div className="px-8 pb-14 space-y-7">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className="w-full flex items-center justify-between p-7 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-800 font-medium">{lang.label}</span>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedLanguage === lang.code
                  ? 'border-blue-500'
                  : 'border-gray-300'
              }`}>
                {selectedLanguage === lang.code && (
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Save Button */}
        <div className="px-8 pb-16">
          <button
            onClick={handleSave}
            className="w-full bg-blue-500 text-white py-4 rounded-md font-semibold hover:bg-blue-600 transition-colors"
          >
            {t('appLanguage.saveButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppLanguage;
