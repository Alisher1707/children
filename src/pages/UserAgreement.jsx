import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const UserAgreement = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0099FF] to-[#0077CC] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md mb-[18rem] relative">
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
        <div className="px-8 pt-6 pb-6">
          <h2 className="text-lg font-bold text-gray-800">
            {t('userAgreement.title')}
          </h2>
        </div>

        {/* Content */}
        <div className="px-8 pb-12">
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              The Hobson family had been meaning to buy some new furniture for ages, but somehow they never got round to it. There were always so many other things to do. Then one day there was a big shout from Joe's room.
            </p>
            <p>
              The rest of the family ran to see what was the matter.
            </p>
            <p>
              Joe's desk had collapsed. There were bits of wood and pens and papers all over the floor. And in the middle was - Joe!
            </p>
            <p>
              "I was just doing my homework," he said, "and then - bang! The desk broke. Everything fell over. I was surprised that I fell over too!"
            </p>
            <p>
              Bella giggled. "You do look funny!"
            </p>
            <p>
              "That decides it," said Mum. "We need to buy some new furniture before anything else breaks. Bella needs a new bed. And Joe definitely needs a desk, so that he can do his homework."
            </p>
            <p>
              So that weekend, the family got up early, and set off for the big furniture store outside town.
            </p>
            <p>
              It was huge.
            </p>
            <p>
              The family had a trolley which they wheeled around the displays. There was so much furniture, some of it was arranged like in a real house.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAgreement;
