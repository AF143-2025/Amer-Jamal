import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackgroundCanvas } from './components/layout/BackgroundCanvas';
import { CommandPalette } from './components/search/CommandPalette';
import { useCommandPalette } from './hooks/useCommandPalette';

// Core Platform Pages
import { HomePage } from './pages/HomePage';
import { ToolsPage } from './pages/ToolsPage';
import { RoadmapPage } from './pages/RoadmapPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { PlatformsPage } from './pages/PlatformsPage';
import { ProgrammingPage } from './pages/ProgrammingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top or hash helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export const App: React.FC = () => {
  const { isOpen, open, close } = useCommandPalette();

  return (
    <div className="relative flex flex-col min-h-screen bg-[var(--color-bg)] text-slate-900 transition-colors duration-200 selection:bg-cyan-600 selection:text-white">
      {/* Architectural Background Canvas */}
      <BackgroundCanvas />

      <ScrollToTop />
      
      {/* Top Navigation */}
      <Navbar onOpenCommandPalette={open} />

      {/* Global Command Palette (Ctrl + K) */}
      <CommandPalette isOpen={isOpen} onClose={close} />

      {/* Main Content Viewport */}
      <main className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/platforms" element={<PlatformsPage />} />
          <Route path="/programming" element={<ProgrammingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

