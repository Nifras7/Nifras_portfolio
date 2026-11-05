import React, { useState } from 'react';
import { ReplicaNavbar } from './components/ReplicaNavbar';
import { ReplicaHero } from './components/ReplicaHero';
import { NewspaperController } from './components/editorial/NewspaperController';
import { Footer } from './components/Footer';
import { HireModal } from './components/HireModal';

export const App: React.FC = () => {
  const [hireModalOpen, setHireModalOpen] = useState<boolean>(false);

  const handleOpenContact = () => {
    setHireModalOpen(true);
  };

  const handleSeeWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* 1. Sticky Editorial Navigation Bar */}
      <ReplicaNavbar onOpenContact={handleOpenContact} />

      <main id="main">
        {/* 2. Hero Section with Analog Flip Calendar & B&W Portrait */}
        <ReplicaHero
          onOpenHireModal={handleOpenContact}
          onSeeWork={handleSeeWork}
        />

        {/* 3. Three Independent Editorial Physical Broadside Newspapers */}
        <NewspaperController />
      </main>

      {/* 4. Editorial Broadside Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* 5. Inquiry / Direct Contact Modal */}
      <HireModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
      />
    </>
  );
};

export default App;
