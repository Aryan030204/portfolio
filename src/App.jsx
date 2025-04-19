import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import hero from "./assets/heroBanner.jpg";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-black overflow-x-hidden relative">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <img
        src={hero}
        alt="hero_banner"
        className="absolute top-0 left-0 h-full w-full z-0 opacity-25 object-cover"
      />

      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col items-center justify-start z-10 relative px-4">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
