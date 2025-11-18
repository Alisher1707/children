import { useLanguage } from '../context/LanguageContext';

const AudioCoursesSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { id: 1, shape: 'star', color: '#5CC5E8', text: t('audioCourses.benefit1') },
    { id: 2, shape: 'star', color: '#5B5FA8', text: t('audioCourses.benefit2') },
    { id: 3, shape: 'circle', color: '#F8C451', text: t('audioCourses.benefit3') },
    { id: 4, shape: 'star', color: '#4CAF50', text: t('audioCourses.benefit4') }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-16 text-center" style={{ color: '#5B4891' }}>
          {t('audioCourses.title')}
        </h2>

        {/* Benefits with wavy line */}
        <div className="relative mb-20">
          {/* SVG Wave Line */}
          <svg className="w-full h-32 absolute top-0 left-0" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60" fill="none" stroke="#D0D0D0" strokeWidth="2"/>
          </svg>

          {/* Benefits badges */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.id} className="flex flex-col items-center">
                {/* Badge */}
                <div className="relative mb-6">
                  {benefit.shape === 'star' ? (
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          d="M50,10 L61,35 L88,35 L66,52 L77,77 L50,60 L23,77 L34,52 L12,35 L39,35 Z"
                          fill={benefit.color}
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                        {String(benefit.id).padStart(2, '0')}
                      </span>
                    </div>
                  ) : (
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: benefit.color }}
                    >
                      {String(benefit.id).padStart(2, '0')}
                    </div>
                  )}
                </div>

                {/* Text */}
                <p className="text-center text-sm text-gray-700 max-w-[200px]">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
          {/* Left Card - Discount */}
          <div className="md:w-[58%] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[400px]" style={{ backgroundColor: '#c4e1f3' }}>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#5B4891' }}>
                {t('audioCourses.discountTitle')}
                <span className="text-5xl ml-2" style={{ color: '#FF6B6B' }}>10%</span>
              </h3>

              <p className="text-sm text-gray-600 mb-2">
                {t('audioCourses.discountStart')}: <span className="font-bold">25 mart</span>
              </p>
              <p className="text-sm text-gray-600 mb-6">
                {t('audioCourses.discountEnd')}: <span className="font-bold">24 aprel</span>
              </p>

              <p className="text-lg font-bold mb-2" style={{ color: '#5B4891' }}>
                {t('audioCourses.priceLabel')}
              </p>
              <p className="text-gray-400 line-through text-xl mb-1">
                1.200.000 so'm
              </p>
              <p className="text-4xl font-bold" style={{ color: '#FF6B6B' }}>
                533.000 so'm
              </p>
            </div>

            {/* Book images */}
            <div className="absolute bottom-0 right-0 w-80 h-64">
              {/* Pink background semi-circle from bottom-right corner */}
              <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-pink-200 rounded-full opacity-40"></div>

              {/* Books positioned inside the semi-circle */}
              <div className="absolute bottom-0 right-0 flex items-end -space-x-12">
                {/* Book 1 - Left */}
                <img
                  src="/images/kitob-1.png"
                  alt="Book 1"
                  className="w-28 h-36 object-contain transform rotate-[-30deg] z-10 drop-shadow-xl"
                />

                {/* Book 2 - Center (Main) */}
                <img
                  src="/images/kitob-2.png"
                  alt="Book 2"
                  className="w-36 h-44 object-contain transform rotate-[-18deg] z-20 drop-shadow-2xl mb-2"
                />

                {/* Book 3 - Right */}
                <img
                  src="/images/kitob-3.png"
                  alt="Book 3"
                  className="w-28 h-36 object-contain transform rotate-[-10deg] z-10 drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Card - Form */}
          <div className="md:w-[42%] rounded-3xl p-8 flex flex-col justify-between min-h-[400px]" style={{ backgroundColor: '#c4e1f3ff' }}>
            <div>
              <h3 className="text-lg font-bold mb-6" style={{ color: '#5B4891' }}>
                {t('audioCourses.formTitle')}
              </h3>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={t('audioCourses.namePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder={t('audioCourses.phonePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="agreement"
                    className="mt-1"
                  />
                  <label htmlFor="agreement" className="text-xs text-gray-600">
                    {t('audioCourses.agreement')}
                  </label>
                </div>

                <div className="pt-10">
                  <button
                    type="submit"
                    className="text-white px-10 py-2.5 rounded-full font-semibold transition-colors text-base"
                    style={{ background: 'linear-gradient(to right, #8F2ADC, #D351B9)' }}
                  >
                    {t('audioCourses.submitButton')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioCoursesSection;
