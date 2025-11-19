import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookReader = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const pageContent = `The Hobson family had been meaning to buy some new furniture for ages, but somehow they never got round to it. There were always so many other things to do. Then one day there was a big shout from Joe's room.

The rest of the family ran to see what was the matter.

Joe's desk had collapsed. There were bits of wood and pens and papers all over the floor. And in the middle was - Joe!

"I was just doing my homework," he said, "and then - bang! The desk broke. Everything fell over. I was so surprised that I fell over too!"

Bella giggled. "You do look funny!"

"That decides it," said Mum. "We need to buy some new furniture before anything else breaks. Bella needs a new bed, and Joe definitely needs a desk, so that he can do his homework."

So that weekend, the family got up early, and set off for the big furniture store outside town.`;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-[#0099FF] to-[#0077CC] flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-sm bg-gray-100 shadow-2xl relative flex flex-col" style={{ height: 'calc(100vh - 2rem)' }}>
        {/* Header */}
        <div className="px-6 pt-6 pb-4 bg-white border-b border-gray-200 flex items-center justify-center">
          <button
            onClick={() => navigate(`/book/${id}`)}
            className="absolute left-6 text-gray-700 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-gray-900 text-lg font-semibold">
            Children English Book {id}
          </h1>
        </div>

        {/* Page Navigation */}
        <div className="px-6 py-3 bg-white border-b border-gray-200 flex items-center justify-between">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`text-gray-700 ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:text-gray-900'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-gray-700 text-sm font-medium">
            Страница: {currentPage}
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`text-gray-700 ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:text-gray-900'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 bg-white">
          <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
            {pageContent}
          </div>
        </div>

        {/* Audio Controls */}
        <div className="px-6 py-4 bg-white border-t border-gray-200">
          <div className="flex items-center justify-center gap-3">
            {/* Play button */}
            <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            {/* Pause button */}
            <button className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            </button>

            {/* Previous button */}
            <button className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
            </button>

            {/* Next button */}
            <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 18l2-2V8l-2-2v12zM6 6v12l8.5-6z" />
              </svg>
            </button>

            {/* Settings button */}
            <button className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </button>

            {/* Volume button */}
            <button className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookReader;
