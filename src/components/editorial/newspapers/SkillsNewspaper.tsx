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
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--news-font-mono)',
                fontSize: '0.6875rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--news-ink-muted)',
                marginBottom: '0.5rem',
              }}
            >
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
            <div
              style={{
                paddingBottom: '0.5rem',
                marginBottom: '0.85rem',
                borderBottom: '2px solid var(--news-rule-heavy)',
                fontFamily: 'var(--news-font-mono)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--news-ink)',
              }}
            >
              VERIFIED CORE CAPABILITIES & REPERTOIRE
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    padding: '0.85rem 1rem',
                    background: 'var(--news-paper-dark)',
                    border: '1px solid var(--news-rule)',
                    borderRadius: '2px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.4rem',
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: 'var(--news-font-sans)',
                        fontSize: '0.9375rem',
                        fontWeight: 700,
                        color: 'var(--news-ink)',
                        margin: 0,
                      }}
                    >
                      {skill.name}
                    </h4>

                    {skill.tag && (
                      <span
                        style={{
                          fontFamily: 'var(--news-font-mono)',
                          fontSize: '0.625rem',
                          padding: '0.15rem 0.45rem',
                          background: 'var(--news-ink)',
                          color: 'var(--news-paper)',
                          borderRadius: '2px',
                          fontWeight: 600,
                          letterSpacing: '0.05em',
                        }}
                      >
                        {skill.tag}
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--news-font-sans)',
                      fontSize: '0.8125rem',
                      lineHeight: 1.5,
                      color: 'var(--news-ink-muted)',
                      margin: 0,
                    }}
                  >
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 'auto',
                paddingTop: '1rem',
                fontFamily: 'var(--news-font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--news-ink-muted)',
                borderTop: '1px solid var(--news-rule)',
              }}
            >
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
