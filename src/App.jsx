import Navbar from './components/Navbar';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mt-8">{t('main.title')}</h1>
      </main>
    </div>
  );
}

export default App;
