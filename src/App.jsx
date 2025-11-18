import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LanguageSection from './components/LanguageSection';
import VoicePenSection from './components/VoicePenSection';
import BenefitsSection from './components/BenefitsSection';
import AudioCoursesSection from './components/AudioCoursesSection';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      <main className="w-full max-w-[1920px] mx-auto">
        <Hero />
        <LanguageSection />
        <VoicePenSection />
        <BenefitsSection />
        <AudioCoursesSection />
        <TestimonialsSection />
      </main>
    </div>
  );
}

export default App;
