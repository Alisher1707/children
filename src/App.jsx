import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      <main className="w-full max-w-[1920px] mx-auto">
        <Hero />
      </main>
    </div>
  );
}

export default App;
