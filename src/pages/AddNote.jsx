import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNote = () => {
  const navigate = useNavigate();
  const [noteText, setNoteText] = useState('');

  const handleSave = () => {
    // Save note logic here
    navigate('/notes');
  };

  return (
    <div className="h-screen bg-gradient-to-b from-[#0099FF] to-[#0077CC] flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-sm bg-white shadow-2xl relative flex flex-col" style={{ height: 'calc(100vh - 2rem)' }}>
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-200 flex items-center justify-between">
          <button
            onClick={() => navigate('/notes')}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-gray-900 text-lg font-semibold">
            Добавить заметку
          </h1>
          <button className="text-red-500 hover:text-red-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col">
          <h2 className="text-gray-900 text-lg font-semibold mb-4">
            Введите текст
          </h2>

          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            className="flex-1 w-full p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700"
            placeholder=""
          />
        </div>

        {/* Save Button */}
        <div className="px-6 pb-6">
          <button
            onClick={handleSave}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
