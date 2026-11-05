import React from 'react';

export const ExperienceMasthead: React.FC = () => {
  return (
    <header className="newspaper-masthead">
      {/* Top Dateline */}
      <div className="masthead-top-dateline">
        <span>VOL. XII · NO. 88</span>
        <span>CAREER & INDUSTRIAL TENURES</span>
        <span>VERIFIED RECORD OF SERVICE</span>
        <span>PERIOD: 2023–2026</span>
      </div>

      {/* Main Publication Name */}
      <h1 className="masthead-main-title">THE CAREER TIMES</h1>

      {/* Subtitle Bar */}
      <div className="masthead-subtitle-bar">
        <span>FIELD DISPATCHES: PROFESSIONAL EXPERIENCE & ENGINEERING JOURNEY</span>
        <span className="masthead-subtitle">"A chronological journal of analytical and algorithmic practice"</span>
        <span>SECTION: INDUSTRIAL MILESTONES</span>
      </div>
    </header>
  );
};

