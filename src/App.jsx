import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import hero from "./assets/heroBanner.jpg";

// function App() {
//   return (
//     <div className="flex flex-col h-full lg:min-h-screen w-full items-center bg-black overflow-x-hidden">
//       <Header />
//       <img
//         src={hero}
//         alt="hero_banner"
//         className="absolute h-[200vh] lg:h-full w-full z-0 opacity-25"
//       />
//       <main className="flex-grow w-full flex flex-col items-center justify-start">
//         <Routes>
//           <Route path="/" element={<HeroSection />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }
function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-black overflow-x-hidden relative">
      <Header />

      {/* Background image should be behind everything */}
      <img
        src={hero}
        alt="hero_banner"
        className="absolute top-0 left-0 h-full w-full z-0 opacity-25 object-cover"
      />

      {/* Main content should be relatively positioned to layer over the bg */}
      <main className="flex-grow w-full flex flex-col items-center justify-start z-10 relative">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
