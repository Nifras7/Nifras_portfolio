import React from 'react';
import { ExperienceStory, EXPERIENCES_DATA } from '../../data/experience';
import { ArrowLeft, ArrowRight, Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PhysicalNewspaperDeck } from '../../shared/PhysicalNewspaperDeck';

interface ExperienceNewspaperProps {
  pageIndex: number;
  onPageChange: (newIndex: number) => void;
}

// Exactly 2 primary verified experiences as required by Master Prompt
const VERIFIED_EXPERIENCES = EXPERIENCES_DATA.slice(0, 2);

export const ExperienceNewspaper: React.FC<ExperienceNewspaperProps> = ({
  pageIndex,
  onPageChange,
}) => {
  const renderSingleExperienceSheet = (
    story: ExperienceStory,
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
            <span>VOL. XII · NO. 88</span>
            <span>✦ FIELD DISPATCH ARCHIVES · INDUSTRIAL RECORD ✦</span>
            <span>VERIFIED SERVICE LOGS</span>
            <span>PERIOD: 2023–2026</span>
          </div>

          <h1 className="masthead-main-title">THE CAREER TIMES</h1>

          <div className="masthead-subtitle-bar">
            <span>PROFESSIONAL EXPERIENCE & ENGINEERING JOURNEY</span>
            <span className="masthead-sheet-counter">
              FOLIO 0{sheetIndex + 1} OF 0{totalCount}
            </span>
            <span>TENURE: {story.company.toUpperCase()}</span>
          </div>
        </header>

        {/* Single-Experience Editorial Layout */}
        <div className="single-sheet-grid" style={{ flexGrow: 1 }}>
          {/* Left Column: Organization & Narrative */}
          <div className="single-sheet-lead-col">
            {/* Company Metadata Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem',
                fontFamily: 'var(--news-font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--news-ink-muted)',
                marginBottom: '0.65rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--news-ink)', fontWeight: 700 }}>
                <Building2 size={14} />
                <span>{story.company}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Calendar size={12} />
                  {story.duration}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={12} />
                  {story.location}
                </span>
              </div>
            </div>

            <h2 className="sheet-article-headline">{story.headline}</h2>

            <div className="sheet-byline">
              <span style={{ fontWeight: 700, color: 'var(--news-ink)' }}>DESIGNATION: {story.role.toUpperCase()}</span>
              <span>·</span>
              <span>{story.byline}</span>
              {story.verifiedProject && (
                <>
                  <span>·</span>
                  <span style={{ color: 'var(--news-ink)', fontStyle: 'italic' }}>VERIFIED PROJECT: {story.verifiedProject}</span>
                </>
              )}
            </div>

            <p className="sheet-body-text sheet-drop-cap" style={{ fontSize: '1rem', fontStyle: 'italic' }}>
              {story.leadParagraph}
            </p>

            {story.paragraphs.map((para, pIdx) => (
              <p key={pIdx} className="sheet-body-text">
                {para}
              </p>
            ))}
          </div>

          {/* Right Column: Key Deliverables & Certified Stack */}
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
              RECORD OF DUTIES & DELIVERABLES
            </div>

            {/* Boxed Summary of Contributions */}
            <div
              style={{
                background: 'var(--news-paper-dark)',
                border: '1px solid var(--news-rule)',
                borderLeft: '3px solid var(--news-ink)',
                padding: '1.15rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--news-font-mono)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--news-ink)',
                  marginBottom: '0.75rem',
                }}
              >
                DELIVERED OUTPUTS & IMPACT:
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                }}
              >
                {story.bulletContributions.map((contrib, cIdx) => (
                  <li
                    key={cIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      fontFamily: 'var(--news-font-sans)',
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                      color: 'var(--news-ink-soft)',
                    }}
                  >
                    <CheckCircle2 size={13} style={{ color: 'var(--news-ink)', marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Technologies */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--news-font-mono)',
                  fontSize: '0.625rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--news-ink-muted)',
                  marginBottom: '0.35rem',
                }}
              >
                VERIFIED TOOLSET & TECHNOLOGIES:
              </div>
              <div className="news-tag-group" style={{ margin: 0 }}>
                {story.technologies.map((tech) => (
                  <span key={tech} className="news-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Verification Stamp Box */}
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
              STATUS: AUDITED INDUSTRIAL TENURE · VERIFIED
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
            aria-label="Previous Experience Sheet"
          >
            <ArrowLeft size={13} />
            <span>Previous Sheet</span>
          </button>

          {/* Sheet Folio Number Indicators */}
          <div className="sheet-page-indicator-track">
            {VERIFIED_EXPERIENCES.map((_, i) => (
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
            aria-label="Next Experience Sheet"
          >
            <span>{isLast ? 'Final Sheet' : 'Next Sheet'}</span>
            {!isLast && <ArrowRight size={13} />}
          </button>
        </footer>
      </div>
    );
  };

  return (
    <PhysicalNewspaperDeck<ExperienceStory>
      publicationTitle="THE CAREER TIMES"
      items={VERIFIED_EXPERIENCES}
      currentIndex={pageIndex}
      onPageChange={onPageChange}
      renderSheet={renderSingleExperienceSheet}
    />
  );
};
