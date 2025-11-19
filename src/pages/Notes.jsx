import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Notes = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const notes = [
    { id: 1, title: 'Note 1' },
    { id: 2, title: 'Note 2' },
    { id: 3, title: 'Note 3' },
    { id: 4, title: 'Note 4' },
  ];

  return (
    <div className="h-screen bg-gradient-to-b from-[#0099FF] to-[#0077CC] flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-sm bg-white shadow-2xl relative flex flex-col" style={{ height: 'calc(100vh - 2rem)' }}>
        {/* Header */}
        <div className="px-8 pt-8 pb-4 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-gray-900 text-xl font-semibold">
            Заметки
          </h1>
          <button
            onClick={() => navigate('/add-note')}
            className="text-blue-600 text-2xl font-light hover:opacity-80"
          >
            +
          </button>
        </div>

        {/* Subtitle */}
        <div className="px-8 py-4">
          <h2 className="text-gray-900 text-lg font-semibold">
            Выберите заметки
          </h2>
        </div>

        {/* Notes List */}
        <div className="flex-1 overflow-y-auto px-8 pb-4">
          <div className="space-y-3">
            {notes.map((note) => (
              <button
                key={note.id}
                onClick={() => navigate(`/notes/${note.id}`)}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl p-4 flex items-center justify-between transition-all"
              >
                <span className="text-blue-600 text-base font-medium">{note.title}</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex justify-around items-center">
            {/* Home */}
            <button
              onClick={() => navigate('/book-selection')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs font-medium">Главная</span>
            </button>

            {/* Notes */}
            <button className="flex flex-col items-center gap-1 text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-xs font-medium">Заметки</span>
            </button>

            {/* Settings */}
            <button
              onClick={() => navigate('/settings')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs font-medium">Настройки</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
