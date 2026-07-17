import { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import ContentModal from "./components/ContentModal";
import Footer from "./components/Footer";
import { SECTIONS, type SectionId } from "./data/content";

export default function App() {
  const [active, setActive] = useState<SectionId | null>(null);

  const open = useCallback((id: SectionId) => setActive(id), []);
  const close = useCallback(() => setActive(null), []);

  // Lock body scroll while the modal is open
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const activeSection = SECTIONS.find((s) => s.id === active) ?? null;

  return (
    <div className="min-h-screen bg-[#050110] font-sans text-[#f5f2ee] antialiased">
      <Navbar />
      <main>
        <Hero />
        <Sections onOpen={open} />
      </main>
      <Footer />

      <AnimatePresence>
        {activeSection && (
          <ContentModal
            key={activeSection.id}
            section={activeSection}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
