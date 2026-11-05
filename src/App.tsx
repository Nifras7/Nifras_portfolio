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
      {/* 1. Static Navigation Bar - PRESERVED */}
      <ReplicaNavbar onOpenContact={handleOpenContact} />

      {/* 2. Hero Section - PRESERVED */}
      <main id="main">
        <ReplicaHero
          onOpenHireModal={handleOpenContact}
          onSeeWork={handleSeeWork}
        />
      </main>

      {/* 3. Three Independent Editorial Newspaper Experiences */}
      <NewspaperController />

      {/* 4. Editorial Footer - PRESERVED */}
      <Footer onOpenContact={handleOpenContact} />

      {/* 5. Inquiry / Contact Popover Modal - PRESERVED */}
      <HireModal
        isOpen={hireModalOpen}
        onClose={() => setHireModalOpen(false)}
      />
    </>
  );
};

export default App;
