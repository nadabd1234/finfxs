import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Services';
import Showcase from './pages/Showcase';
import Contact from './pages/Contact';
import Platforms from './pages/Platform';
import RiskManagement from './pages/services/RiskManagement';
import DealingSupport from './pages/services/DealingSupport';
import PlatformSupport from './pages/services/PlatformSupport';
import CRMSupport from './pages/services/CRMSupport';
import CustomDevelopment from './pages/services/CustomDevelopment';

function App() {

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Features />} />
            <Route path="/services/risk-management" element={<RiskManagement />} />
            <Route path="/services/dealing-support" element={<DealingSupport />} />
            <Route path="/services/platform-support" element={<PlatformSupport />} />
            <Route path="/services/crm-support" element={<CRMSupport />} />
            <Route path="/services/custom-development" element={<CustomDevelopment />} />
            <Route path="/demo" element={<Showcase />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/platform" element={<Platforms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
