import { useNavigate, useParams } from 'react-router-dom';

const NoteDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const noteContent = `The Hobson family had been meaning to buy some new furniture for ages, but somehow they never got round to it. There were always so many other things to do. Then one day there was a big shout from Joe's room.

The rest of the family ran to see what was the matter.

Joe's desk had collapsed. There were bits of wood and pens and papers all over the floor. And in the middle was - Joe!

"I was just doing my homework," he said, "and then - bang! The desk broke. Everything fell over. I was so surprised that I fell over too!"

Bella giggled. "You do look funny!"

"That decides it," said Mum. "We need to buy some new furniture before anything else breaks. Bella needs a new bed, and Joe definitely needs a desk, so that he can do his homework."

So that weekend, the family got up early, and set off for the big furniture store outside town.`;

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
            Note {id}
          </h1>
          <button className="text-red-500 hover:text-red-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
            {noteContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;
