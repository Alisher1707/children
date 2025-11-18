import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SmsVerification = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleBack = () => {
    navigate('/login');
  };

  const handleNumberClick = (num) => {
    const emptyIndex = code.findIndex((digit) => digit === '');
    if (emptyIndex !== -1) {
      const newCode = [...code];
      newCode[emptyIndex] = num.toString();
      setCode(newCode);
    }
  };

  const handleDelete = () => {
    const lastFilledIndex = code.map((digit, index) => digit !== '' ? index : -1).filter(i => i !== -1).pop();
    if (lastFilledIndex !== undefined) {
      const newCode = [...code];
      newCode[lastFilledIndex] = '';
      setCode(newCode);
    }
  };

  const handleLogin = () => {
    if (code.every(digit => digit !== '')) {
      console.log('Login with code:', code.join(''));
      navigate('/user-data');
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(59);
      setCode(['', '', '', '']);
      console.log('Resend SMS');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
        <div className="flex flex-col px-8 py-10">
          {/* Title */}
          <h1 className="text-gray-900 text-xl font-semibold mb-2 mt-6">
            {t('smsVerification.title')}
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {t('smsVerification.sentTo')}
          </p>

          {/* Code inputs */}
          <div className="flex gap-3 mb-4">
            {code.map((digit, index) => (
              <div
                key={index}
                className="flex-1 h-14 border-2 border-gray-300 rounded-xl flex items-center justify-center text-xl font-medium text-gray-900 bg-white"
              >
                {digit}
              </div>
            ))}
          </div>

          {/* Resend link */}
          <div className="flex items-center gap-2 mb-8">
            <button
              onClick={handleResend}
              disabled={timer > 0}
              className="text-sm flex items-center gap-2 text-blue-500 hover:text-blue-600"
            >
              <span>{t('smsVerification.resendIn')} {formatTime(timer)}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>

          {/* Number keyboard */}
          <div className="w-full">
            <div className="grid grid-cols-3 gap-3 mb-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  onClick={() => handleNumberClick(num)}
                  className="h-16 bg-gray-50 rounded-2xl text-3xl font-light text-gray-900 hover:bg-gray-100 transition-all active:scale-95"
                >
                  {num}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div></div>
              <button
                onClick={() => handleNumberClick(0)}
                className="h-16 bg-gray-50 rounded-2xl text-3xl font-light text-gray-900 hover:bg-gray-100 transition-all active:scale-95"
              >
                0
              </button>
              <button
                onClick={handleDelete}
                className="h-16 bg-gray-50 rounded-2xl flex items-center justify-center hover:bg-gray-100 transition-all active:scale-95"
              >
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                </svg>
              </button>
            </div>

            {/* Login button */}
            <button
              onClick={handleLogin}
              disabled={!code.every(digit => digit !== '')}
              className="w-full rounded-xl px-6 py-3 text-white font-semibold text-base bg-blue-500 hover:bg-blue-600 transition-all"
            >
              {t('smsVerification.loginButton')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsVerification;
