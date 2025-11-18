import { useLanguage } from '../context/LanguageContext';

const VoicePenSection = () => {
  const { t } = useLanguage();

  const features = [
    { id: 1, text: t('voicePen.feature1') },
    { id: 2, text: t('voicePen.feature2') },
    { id: 3, text: t('voicePen.feature3') },
    { id: 4, text: t('voicePen.feature4') }
  ];

  const steps = [
    {
      id: 1,
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      ),
      title: t('voicePen.step1Title'),
      description: t('voicePen.step1Desc'),
      bgColor: 'linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%)'
    },
    {
      id: 2,
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: t('voicePen.step2Title'),
      description: t('voicePen.step2Desc'),
      bgColor: 'linear-gradient(135deg, #6B8DD6 0%, #4A6FA5 100%)'
    },
    {
      id: 3,
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      ),
      title: t('voicePen.step3Title'),
      description: t('voicePen.step3Desc'),
      bgColor: 'linear-gradient(135deg, #B24BF3 0%, #8E44AD 100%)'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Voice Pen Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 mb-16">
          {/* Left side - Image */}
          <div className="relative flex-shrink-0 flex items-start gap-0">
            {/* Video button */}
            <button className="z-20 bg-purple-700 text-white rounded-full flex items-center gap-3 shadow-lg hover:bg-purple-800 transition-all mt-20" style={{ backgroundColor: '#6B4FA0', width: '220px', height: '55px', paddingLeft: '25px' }}>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-700 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="text-sm font-medium">{t('voicePen.videoButton')}</span>
            </button>

            {/* Circular background with concentric circles */}
            <div className="w-[380px] h-[380px] rounded-full flex items-center justify-center relative -ml-8" style={{ background: 'linear-gradient(135deg, #E98F8E 0%, #EEAE8C 100%)' }}>
              {/* Wave effect */}
              <div className="absolute inset-0 rounded-full flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 380 380">
                  {/* Right side waves */}
                  <path d="M 270 180 Q 290 180 300 190" fill="none" stroke="white" strokeWidth="3" opacity="0.6" strokeLinecap="round"/>
                  <path d="M 270 180 Q 300 180 320 200" fill="none" stroke="white" strokeWidth="3" opacity="0.5" strokeLinecap="round"/>
                  <path d="M 270 180 Q 310 180 335 205" fill="none" stroke="white" strokeWidth="3" opacity="0.4" strokeLinecap="round"/>

                  <path d="M 270 200 Q 290 200 300 210" fill="none" stroke="white" strokeWidth="3" opacity="0.6" strokeLinecap="round"/>
                  <path d="M 270 200 Q 300 200 320 220" fill="none" stroke="white" strokeWidth="3" opacity="0.5" strokeLinecap="round"/>
                  <path d="M 270 200 Q 310 200 335 225" fill="none" stroke="white" strokeWidth="3" opacity="0.4" strokeLinecap="round"/>

                  {/* Left side waves */}
                  <path d="M 110 180 Q 90 180 80 190" fill="none" stroke="white" strokeWidth="3" opacity="0.6" strokeLinecap="round"/>
                  <path d="M 110 180 Q 80 180 60 200" fill="none" stroke="white" strokeWidth="3" opacity="0.5" strokeLinecap="round"/>
                  <path d="M 110 180 Q 70 180 45 205" fill="none" stroke="white" strokeWidth="3" opacity="0.4" strokeLinecap="round"/>

                  <path d="M 110 200 Q 90 200 80 210" fill="none" stroke="white" strokeWidth="3" opacity="0.6" strokeLinecap="round"/>
                  <path d="M 110 200 Q 80 200 60 220" fill="none" stroke="white" strokeWidth="3" opacity="0.5" strokeLinecap="round"/>
                  <path d="M 110 200 Q 70 200 45 225" fill="none" stroke="white" strokeWidth="3" opacity="0.4" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Voice pen image */}
              <div className="z-10 relative -mt-24 -ml-8">
                <img src="/images/ruchka.png" alt={t('voicePen.imagePlaceholder')} className="w-96 h-96 object-contain drop-shadow-2xl transform -rotate-[18deg]" />
              </div>
            </div>
          </div>

          {/* Right side - Text and features */}
          <div className="flex flex-col items-start max-w-lg">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#5B4891' }}>
              {t('voicePen.title')}
            </h2>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <p className="text-gray-700 text-lg">{feature.text}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-all">
              {t('voicePen.orderButton')}
            </button>
          </div>
        </div>

        {/* Steps Cards Section */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className="rounded-2xl p-4 text-white shadow-lg relative overflow-hidden"
              style={{ background: step.bgColor, width: '280px', height: '130px' }}
            >
              {/* Decorative pattern */}
              <div className="absolute bottom-0 right-0 opacity-10">
                <div className="transform scale-125">
                  {step.icon}
                </div>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="mb-1">
                  <div className="w-7 h-7">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-0.5">
                    {step.id}. {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-white text-opacity-90 text-xs">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicePenSection;
