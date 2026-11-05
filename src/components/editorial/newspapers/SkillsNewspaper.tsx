import React from 'react';
import { SkillCategory, SKILL_CATEGORIES_DATA } from '../data/skills';
import { ArrowLeft, ArrowRight, Code2 } from 'lucide-react';
import { PhysicalNewspaperDeck } from '../shared/PhysicalNewspaperDeck';

interface SkillsNewspaperProps {
  pageIndex: number;
  onPageChange: (newIndex: number) => void;
}

export const SkillsNewspaper: React.FC<SkillsNewspaperProps> = ({
  pageIndex,
  onPageChange,
}) => {
  const renderSingleSkillSheet = (
    category: SkillCategory,
    sheetIndex: number,
    totalCount: number,
    onPrev: () => void,
    onNext: () => void,
    onSelectPage: (idx: number) => void,
    isFlipping: boolean
  ) => {
    const isFirst = sheetIndex === 0;
    const isLast = sheetIndex === totalCount - 1;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '620px' }}>
        {/* Masthead */}
        <header className="newspaper-masthead">
          <div className="masthead-top-dateline">
            <span>VOL. XVIII · COMPILATION 2026</span>
            <span>✦ INDEX OF TECHNICAL CAPABILITY · PEER REVIEWED ✦</span>
            <span>COMPUTATIONAL TAXONOMY</span>
            <span>DAILY CIRCULATION</span>
          </div>

          <h1 className="masthead-main-title">THE TECHNICAL JOURNAL</h1>

          <div className="masthead-subtitle-bar">
            <span>A COMPENDIUM OF COMPUTING, MACHINE INTELLIGENCE & DATA SYSTEMS</span>
            <span className="masthead-sheet-counter">
              FOLIO 0{sheetIndex + 1} OF 0{totalCount}
            </span>
            <span>CATEGORY: {category.name.toUpperCase()}</span>
          </div>
        </header>

        {/* Single-Category Editorial Layout */}
        <div className="single-sheet-grid" style={{ flexGrow: 1 }}>
          {/* Left Column: Category Narrative */}
          <div className="single-sheet-lead-col">
            <div className="news-caps-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Code2 size={13} />
              <span>[{category.sectionCode}] · SPECIALIZED DOMAIN REPORT</span>
            </div>

            <h2 className="sheet-article-headline">{category.headline}</h2>

            <p className="sheet-article-deck">{category.overview}</p>

            <div className="sheet-byline">
              <span>ANALYSIS BY MOHAMED NIFRAS</span>
              <span>·</span>
              <span>TECHNICAL CAPABILITY REPORT</span>
            </div>

            <p className="sheet-body-text sheet-drop-cap">
              Every production system constructed under this discipline adheres to strict requirements of operational latency, modular software design, and verifiable reproducibility.
            </p>

            <p className="sheet-body-text">
              By maintaining focused mastery rather than superficial breadth, computational logic is architected with deep algorithmic understanding across both high-level framework wrappers and foundational mathematical principles.
            </p>
          </div>

          {/* Right Column: High-Density Technical Item Breakdown */}
          <div className="single-sheet-supporting-col">
            <div className="news-col-header">
              VERIFIED CORE CAPABILITIES & REPERTOIRE
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {category.skills.map((skill) => (
                <div key={skill.name} className="news-skill-card">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 'var(--space-1)',
                    }}
                  >
                    <h4 className="news-skill-title">
                      {skill.name}
                    </h4>

                    {skill.tag && (
                      <span className="news-skill-tag">
                        {skill.tag}
                      </span>
                    )}
                  </div>

                  <p className="news-skill-desc">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="news-status-footer">
              ASSESSMENT: 100% PRODUCTION VERIFIED · NO FABRICATED METRICS
            </div>
          </div>
        </div>

        {/* Sheet Footer with Physical Page Turn Navigation */}
        <footer className="newspaper-sheet-footer">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            disabled={isFlipping || isFirst}
            className="sheet-nav-btn"
            aria-label="Previous Skill Sheet"
          >
            <ArrowLeft size={13} />
            <span>Previous Discipline</span>
          </button>

          {/* Sheet Folio Number Indicators */}
          <div className="sheet-page-indicator-track">
            {SKILL_CATEGORIES_DATA.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectPage(i);
                }}
                disabled={isFlipping}
                className={`sheet-page-dot ${i === sheetIndex ? 'active' : ''}`}
                title={`Turn to Folio ${i + 1}`}
                aria-label={`Turn to Folio ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            disabled={isFlipping || isLast}
            className="sheet-nav-btn"
            aria-label="Next Skill Sheet"
          >
            <span>{isLast ? 'Final Discipline' : 'Next Discipline'}</span>
            {!isLast && <ArrowRight size={13} />}
          </button>
        </footer>
      </div>
    );
  };

  return (
    <PhysicalNewspaperDeck<SkillCategory>
      publicationTitle="THE TECHNICAL JOURNAL"
      items={SKILL_CATEGORIES_DATA}
      currentIndex={pageIndex}
      onPageChange={onPageChange}
      renderSheet={renderSingleSkillSheet}
    />
  );
};
