import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const EditProfile = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [name, setName] = useState('Alisher');
  const [surname, setSurname] = useState('Yusupov');

  const handleBack = () => {
    navigate('/settings');
  };

  const handleSave = () => {
    console.log('Save profile:', { name, surname });
    navigate('/settings');
  };

  const handleClearName = () => {
    setName('');
  };

  const handleClearSurname = () => {
    setSurname('');
  };

  return (
    <div className="h-screen bg-gradient-to-b from-[#0099FF] to-[#0077CC] flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-sm h-fit bg-white shadow-2xl relative">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-6 left-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all z-10"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Content */}
        <div className="flex flex-col px-8 py-16">
          {/* Title */}
          <h1 className="text-gray-900 text-2xl font-semibold mb-8 mt-10">
            {t('editProfile.title')}
          </h1>

          {/* Name input */}
          <div className="w-full mb-6">
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('editProfile.namePlaceholder')}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900 text-base"
              />
              {name && (
                <button
                  onClick={handleClearName}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Surname input */}
          <div className="w-full mb-[18rem]">
            <div className="relative">
              <input
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder={t('editProfile.surnamePlaceholder')}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900 text-base"
              />
              {surname && (
                <button
                  onClick={handleClearSurname}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Save button */}
          <button
            onClick={handleSave}
            className="w-full rounded-xl px-6 py-4 text-white font-semibold text-lg bg-blue-500 hover:bg-blue-600 transition-all"
          >
            {t('editProfile.saveButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
