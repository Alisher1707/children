import { useLanguage } from '../context/LanguageContext';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      id: 1,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      title: t('benefits.card1Title'),
      description: t('benefits.card1Desc'),
      bgColor: '#E6F0FF',
      iconColor: '#6B7FD7',
      decorativeIcon: (
        <svg className="w-40 h-40 opacity-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    },
    {
      id: 2,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: t('benefits.card2Title'),
      description: t('benefits.card2Desc'),
      bgColor: '#FFE8E8',
      iconColor: '#FF6B6B',
      decorativeIcon: (
        <svg className="w-40 h-40 opacity-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      id: 3,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      ),
      title: t('benefits.card3Title'),
      description: t('benefits.card3Desc'),
      bgColor: '#F3E5F5',
      iconColor: '#AB47BC',
      decorativeIcon: (
        <svg className="w-40 h-40 opacity-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      )
    },
    {
      id: 4,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: t('benefits.card4Title'),
      description: t('benefits.card4Desc'),
      bgColor: '#FFFBEA',
      iconColor: '#F5C542',
      decorativeIcon: (
        <svg className="w-40 h-40 opacity-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      id: 5,
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/>
        </svg>
      ),
      title: t('benefits.card5Title'),
      description: t('benefits.card5Desc'),
      bgColor: '#E0F9F4',
      iconColor: '#26A69A',
      decorativeIcon: (
        <svg className="w-40 h-40 opacity-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Title card */}
            <div className="rounded-2xl p-6 relative overflow-hidden">
              <h2 className="text-2xl font-bold mb-2 leading-tight" style={{ color: '#5B4891' }}>
                {t('benefits.title')}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('benefits.subtitle')}
              </p>
            </div>

            {/* First 2 benefit cards */}
            {benefits.slice(0, 2).map((benefit) => (
              <div
                key={benefit.id}
                className="rounded-2xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105"
                style={{ backgroundColor: benefit.bgColor, minHeight: '240px' }}
              >
                {/* Decorative icon in background */}
                <div className="absolute bottom-3 right-3 opacity-10" style={{ color: benefit.iconColor }}>
                  <div className="w-24 h-24">{benefit.decorativeIcon}</div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-3" style={{ color: benefit.iconColor }}>
                    <div className="w-12 h-12">{benefit.icon}</div>
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: benefit.iconColor }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {benefits.slice(2, 5).map((benefit) => (
              <div
                key={benefit.id}
                className="rounded-2xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105"
                style={{ backgroundColor: benefit.bgColor, minHeight: '240px' }}
              >
                {/* Decorative icon in background */}
                <div className="absolute bottom-3 right-3 opacity-10" style={{ color: benefit.iconColor }}>
                  <div className="w-24 h-24">{benefit.decorativeIcon}</div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-3" style={{ color: benefit.iconColor }}>
                    <div className="w-12 h-12">{benefit.icon}</div>
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: benefit.iconColor }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
