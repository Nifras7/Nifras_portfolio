import React from 'react';

export const SkillsMasthead: React.FC = () => {
  return (
    <header className="newspaper-masthead">
      {/* Top Dateline */}
      <div className="masthead-top-dateline">
        <span>VOL. XVIII · COMPILATION 2026</span>
        <span>INDEX OF TECHNICAL COMPETENCY</span>
        <span>PEER-REVIEWED TAXONOMY</span>
        <span>SECTION: MACHINE INTELLIGENCE & SYSTEMS</span>
      </div>

      {/* Main Publication Name */}
      <h1 className="masthead-main-title">THE TECHNICAL JOURNAL</h1>

      {/* Subtitle Bar */}
      <div className="masthead-subtitle-bar">
        <span>A COMPENDIUM OF COMPUTING, MACHINE INTELLIGENCE & DATA ARCHITECTURES</span>
        <span className="masthead-subtitle">"Rigorous engineering across algorithmic logic and distributed data persistence"</span>
        <span>TAXONOMY: VERIFIED</span>
      </div>
    </header>
  );
};

