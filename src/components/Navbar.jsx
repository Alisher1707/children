import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    <nav className="w-full bg-white border-b border-gray-200 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[70px]">
        {/* Left side menu */}
        <ul className="flex list-none m-0 p-0 gap-8 items-center">
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

        {/* Right side menu */}
        <div className="flex items-center gap-6">
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

          <button className="bg-white border-2 rounded-full px-6 py-2.5 text-sm font-medium cursor-pointer transition-all whitespace-nowrap hover:bg-gray-50" style={{ color: '#544695', borderColor: '#544695' }}>
            {t('navbar.contact_button')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
