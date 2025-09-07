import { ThemeProvider } from './components/ThemeProvider';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="relative">
        <HeroSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
