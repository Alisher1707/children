import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LanguageSection from './components/LanguageSection';
import VoicePenSection from './components/VoicePenSection';
import BenefitsSection from './components/BenefitsSection';
import AudioCoursesSection from './components/AudioCoursesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import Login from './pages/Login';
import SmsVerification from './pages/SmsVerification';
import PhoneRegistration from './pages/PhoneRegistration';
import UserData from './pages/UserData';
import BookSelection from './pages/BookSelection';
import Settings from './pages/Settings';
import EditProfile from './pages/EditProfile';
import UserAgreement from './pages/UserAgreement';
import AppLanguage from './pages/AppLanguage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
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
            <Footer />
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/sms-verification" element={<SmsVerification />} />
        <Route path="/phone-registration" element={<PhoneRegistration />} />
        <Route path="/user-data" element={<UserData />} />
        <Route path="/book-selection" element={<BookSelection />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/agreement" element={<UserAgreement />} />
        <Route path="/app-language" element={<AppLanguage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
