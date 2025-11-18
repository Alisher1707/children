import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const PhoneRegistration = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [phone, setPhone] = useState('');

  const handleBack = () => {
    navigate('/login');
  };

  const handleSendSMS = () => {
    if (phone) {
      console.log('Send SMS to:', phone);
      navigate('/sms-verification');
    }
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
            {t('phoneRegistration.title')}
          </h1>

          {/* Phone input */}
          <div className="w-full mb-8">
            <div className="relative">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998"
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900 text-lg"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-[18rem]">
            {t('phoneRegistration.description')}
          </p>

          {/* Send SMS button */}
          <button
            onClick={handleSendSMS}
            className="w-full rounded-xl px-6 py-4 text-white font-semibold text-lg bg-blue-500 hover:bg-blue-600 transition-all"
          >
            {t('phoneRegistration.sendButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneRegistration;
