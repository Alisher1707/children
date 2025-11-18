import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Login = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleBack = () => {
    navigate('/');
  };

  const handleContinue = () => {
    // Bu yerda telefon raqam orqali kirish logikasi bo'ladi
    console.log('Continue with phone number');
    navigate('/sms-verification');
  };

  const handleGoogleSignIn = () => {
    // Bu yerda Google orqali kirish logikasi bo'ladi
    console.log('Sign in with Google');
  };

  const handleRegister = () => {
    // Bu yerda registratsiya sahifasiga o'tish
    console.log('Navigate to registration');
    navigate('/phone-registration');
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
        <div className="flex flex-col items-center px-8 py-12">
          {/* Logo */}
          <div className="mb-6">
            <div className="w-28 h-28 flex items-center justify-center">
              <img
                src="/images/loginpage-img.png"
                alt="PlayBook Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-gray-900 text-3xl font-bold text-center mb-8">
            {t('login.title')}
          </h1>

          {/* Phone input */}
          <div className="w-full mb-5">
            <label className="block text-gray-700 text-sm mb-2">
              {t('login.phoneLabel')}
            </label>
            <div className="relative">
              <input
                type="tel"
                placeholder="+998"
                className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-gray-900"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Or divider */}
          <div className="w-full flex items-center gap-4 my-5">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">{t('login.or')}</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google sign in button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full border-2 border-blue-500 rounded-lg px-6 py-3 flex items-center justify-center gap-3 hover:bg-blue-50 transition-all mb-6"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-blue-500 font-medium">{t('login.googleButton')}</span>
          </button>

          {/* Registration info */}
          <p className="text-gray-600 text-sm text-center mb-4">
            {t('login.notRegistered')}
          </p>

          {/* Registration button */}
          <button
            onClick={handleRegister}
            className="w-full border-2 border-gray-300 rounded-lg px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 transition-all mb-5"
          >
            {t('login.registerButton')}
          </button>

          {/* Continue button */}
          <button
            onClick={handleContinue}
            className="w-full bg-blue-500 rounded-lg px-6 py-3.5 text-white font-bold text-lg hover:bg-blue-600 transition-all shadow-lg"
          >
            {t('login.continueButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
