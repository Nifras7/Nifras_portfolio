import React from 'react';

export const WorkMasthead: React.FC = () => {
  return (
    <header className="newspaper-masthead">
      {/* Top Dateline */}
      <div className="masthead-top-dateline">
        <span>VOL. XXVI · NO. 104</span>
        <span>CHENNAI · GLOBAL DISPATCH</span>
        <span>DAILY TECHNICAL CIRCULATION</span>
        <span>EST. 2024</span>
      </div>

      {/* Main Publication Name */}
      <h1 className="masthead-main-title">THE WORK CHRONICLE</h1>

      {/* Subtitle Bar */}
      <div className="masthead-subtitle-bar">
        <span>SPECIAL EDITION: SELECTED ENGINEERING & AI PROJECTS</span>
        <span className="masthead-subtitle">"Transforming computational intelligence into deployable systems"</span>
        <span>PRICE: FREE INTELLECT</span>
      </div>
    </header>
  );
};

