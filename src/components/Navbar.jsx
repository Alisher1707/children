import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageModal from './LanguageModal';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setActiveDropdown(null);
  };

  const languageLabels = {
    uz: 'Uzb',
    ru: 'Рус',
    en: 'Eng'
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 sticky top-0 z-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[70px]">
        {/* Mobile Navigation - Left side */}
        <div className="lg:hidden">
          {/* Logo */}
          <h1 className="text-2xl font-bold" style={{ color: '#FF6B9D' }}>LOGO</h1>
        </div>

        {/* Mobile Navigation - Right side */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Language selector */}
          <div className="relative">
            <button
              className="flex items-center gap-1 text-gray-800 text-sm font-medium bg-transparent border-none cursor-pointer py-2 hover:text-gray-600 transition-colors"
              onClick={() => toggleDropdown('mobile-language')}
            >
              {languageLabels[language]}
              <svg className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${activeDropdown === 'mobile-language' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'mobile-language' && (
              <ul className="absolute top-full right-0 bg-white border border-gray-200 rounded-lg shadow-lg list-none mt-2 py-2 min-w-[100px] z-[1001]">
                <li>
                  <button
                    onClick={() => handleLanguageChange('uz')}
                    className="w-full text-left block px-5 py-3 text-gray-800 no-underline text-sm hover:bg-gray-50 transition-colors bg-transparent border-none cursor-pointer"
                  >
                    Uzb
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageChange('ru')}
                    className="w-full text-left block px-5 py-3 text-gray-800 no-underline text-sm hover:bg-gray-50 transition-colors bg-transparent border-none cursor-pointer"
                  >
                    Рус
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="w-full text-left block px-5 py-3 text-gray-800 no-underline text-sm hover:bg-gray-50 transition-colors bg-transparent border-none cursor-pointer"
                  >
                    Eng
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Contact button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white border-2 rounded-full px-4 py-2 text-xs font-medium cursor-pointer transition-all whitespace-nowrap hover:bg-gray-50"
            style={{ color: '#544695', borderColor: '#544695' }}
          >
            {t('navbar.contact_button')}
          </button>

          {/* Hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800 p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Left side - Logo and Language */}
        <div className="hidden lg:flex items-center gap-10">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: '#FF6B9D' }}>LOGO</h1>
          </div>

          <div className="relative">
            <button
              className="flex items-center gap-1 text-gray-800 text-sm font-medium bg-transparent border-none cursor-pointer py-2 hover:text-gray-600 transition-colors"
              onClick={() => toggleDropdown('language')}
            >
              {languageLabels[language]}
              <svg className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${activeDropdown === 'language' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'language' && (
              <ul className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg list-none mt-2 py-2 min-w-[100px] z-[1001]">
                <li>
                  <button
                    onClick={() => handleLanguageChange('uz')}
                    className="w-full text-left block px-5 py-3 text-gray-800 no-underline text-sm hover:bg-gray-50 transition-colors bg-transparent border-none cursor-pointer"
                  >
                    Uzb
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageChange('ru')}
                    className="w-full text-left block px-5 py-3 text-gray-800 no-underline text-sm hover:bg-gray-50 transition-colors bg-transparent border-none cursor-pointer"
                  >
                    Рус
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="w-full text-left block px-5 py-3 text-gray-800 no-underline text-sm hover:bg-gray-50 transition-colors bg-transparent border-none cursor-pointer"
                  >
                    Eng
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Center menu */}
        <ul className="hidden lg:flex list-none m-0 p-0 gap-10 items-center">
          <li className="relative">
            <a href="#" className="text-gray-800 text-sm font-medium no-underline py-2 hover:text-gray-600 transition-colors">
              {t('navbar.home')}
            </a>
          </li>

          <li className="relative">
            <button
              className="flex items-center gap-1 text-gray-800 text-sm font-medium bg-transparent border-none cursor-pointer py-2 hover:text-gray-600 transition-colors"
              onClick={() => toggleDropdown('projects')}
            >
              {t('navbar.projects')}
              <svg className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${activeDropdown === 'projects' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'projects' && (
              <ul className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg list-none mt-2 py-2 min-w-[180px] z-[1001]">
                <li><a href="#" className="block px-5 py-3 text-gray-800 no-underline text-sm hover:bg-gray-50 transition-colors">{t('projects.project1')}</a></li>
                <li><a href="#" className="block px-5 py-3 text-gray-800 no-underline text-sm hover:bg-gray-50 transition-colors">{t('projects.project2')}</a></li>
                <li><a href="#" className="block px-5 py-3 text-gray-800 no-underline text-sm hover:bg-gray-50 transition-colors">{t('projects.project3')}</a></li>
              </ul>
            )}
          </li>

          <li className="relative">
            <button
              className="flex items-center gap-1 text-gray-800 text-sm font-medium bg-transparent border-none cursor-pointer py-2 hover:text-gray-600 transition-colors"
              onClick={() => toggleDropdown('services')}
            >
              {t('navbar.services')}
              <svg className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'services' && (
              <ul className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg list-none mt-2 py-2 min-w-[180px] z-[1001]">
                <li><a href="#" className="block px-5 py-3 text-gray-800 no-underline text-sm hover:bg-gray-50 transition-colors">{t('services.service1')}</a></li>
                <li><a href="#" className="block px-5 py-3 text-gray-800 no-underline text-sm hover:bg-gray-50 transition-colors">{t('services.service2')}</a></li>
                <li><a href="#" className="block px-5 py-3 text-gray-800 no-underline text-sm hover:bg-gray-50 transition-colors">{t('services.service3')}</a></li>
              </ul>
            )}
          </li>

          <li className="relative">
            <a href="#" className="text-gray-800 text-sm font-medium no-underline py-2 hover:text-gray-600 transition-colors">
              {t('navbar.contacts')}
            </a>
          </li>
        </ul>

        {/* Right side - Contact button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white border-2 rounded-full px-6 py-2.5 text-sm font-medium cursor-pointer transition-all whitespace-nowrap hover:bg-gray-50"
            style={{ color: '#544695', borderColor: '#544695' }}
          >
            {t('navbar.contact_button')}
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <ul className="flex flex-col list-none m-0 p-0">
            <li className="border-b border-gray-100">
              <a href="#" className="block px-4 py-3 text-gray-800 text-sm font-medium no-underline hover:bg-gray-50 transition-colors">
                {t('navbar.home')}
              </a>
            </li>

            <li className="border-b border-gray-100">
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-gray-800 text-sm font-medium bg-transparent border-none cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleDropdown('mobile-projects')}
              >
                {t('navbar.projects')}
                <svg className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${activeDropdown === 'mobile-projects' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-projects' && (
                <ul className="bg-gray-50 list-none m-0 p-0">
                  <li><a href="#" className="block px-8 py-2 text-gray-700 no-underline text-sm hover:bg-gray-100 transition-colors">{t('projects.project1')}</a></li>
                  <li><a href="#" className="block px-8 py-2 text-gray-700 no-underline text-sm hover:bg-gray-100 transition-colors">{t('projects.project2')}</a></li>
                  <li><a href="#" className="block px-8 py-2 text-gray-700 no-underline text-sm hover:bg-gray-100 transition-colors">{t('projects.project3')}</a></li>
                </ul>
              )}
            </li>

            <li className="border-b border-gray-100">
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-gray-800 text-sm font-medium bg-transparent border-none cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleDropdown('mobile-services')}
              >
                {t('navbar.services')}
                <svg className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-services' && (
                <ul className="bg-gray-50 list-none m-0 p-0">
                  <li><a href="#" className="block px-8 py-2 text-gray-700 no-underline text-sm hover:bg-gray-100 transition-colors">{t('services.service1')}</a></li>
                  <li><a href="#" className="block px-8 py-2 text-gray-700 no-underline text-sm hover:bg-gray-100 transition-colors">{t('services.service2')}</a></li>
                  <li><a href="#" className="block px-8 py-2 text-gray-700 no-underline text-sm hover:bg-gray-100 transition-colors">{t('services.service3')}</a></li>
                </ul>
              )}
            </li>

            <li className="border-b border-gray-100">
              <a href="#" className="block px-4 py-3 text-gray-800 text-sm font-medium no-underline hover:bg-gray-50 transition-colors">
                {t('navbar.contacts')}
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Language Modal */}
      <LanguageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
