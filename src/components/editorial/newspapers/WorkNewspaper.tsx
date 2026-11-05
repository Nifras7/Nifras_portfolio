import React from 'react';
import { ProjectItem, PROJECTS_DATA } from '../data/projects';
import { PageFigureVisual } from '../shared/PageFigureVisual';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PhysicalNewspaperDeck } from '../shared/PhysicalNewspaperDeck';

interface WorkNewspaperProps {
  pageIndex: number;
  onPageChange: (newIndex: number) => void;
}

export const WorkNewspaper: React.FC<WorkNewspaperProps> = ({
  pageIndex,
  onPageChange,
}) => {
  const renderSingleProjectSheet = (
    project: ProjectItem,
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
            <span>VOL. XXVI · NO. 104</span>
            <span>✦ CHENNAI ARCHIVES · SPECIAL REPORT ✦</span>
            <span>DAILY TECHNICAL CIRCULATION</span>
            <span>EST. 2024</span>
          </div>

          <h1 className="masthead-main-title">THE WORK CHRONICLE</h1>

          <div className="masthead-subtitle-bar">
            <span>SELECTED ENGINEERING & AI PROJECTS</span>
            <span className="masthead-sheet-counter">
              FOLIO 0{sheetIndex + 1} OF 0{totalCount}
            </span>
            <span>DISPATCH: {project.name.toUpperCase()}</span>
          </div>
        </header>

        {/* Single-Project Editorial Layout */}
        <div className="single-sheet-grid" style={{ flexGrow: 1 }}>
          {/* Left Editorial Narrative Column */}
          <div className="single-sheet-lead-col">
            <div className="news-caps-label">
              ★ SPECIAL INVESTIGATION · {project.dateStamp}
            </div>

            <h2 className="sheet-article-headline">{project.headline}</h2>

            <p className="sheet-article-deck">{project.leadParagraph}</p>

            <div className="sheet-byline">
              <span>DISPATCH BY MOHAMED NIFRAS</span>
              <span>·</span>
              <span>AI ENGINEER & DATA SPECIALIST</span>
            </div>

            {project.editorialReport.map((p, idx) => (
              <p key={idx} className={`sheet-body-text ${idx === 0 ? 'sheet-drop-cap' : ''}`}>
                {p}
              </p>
            ))}
          </div>

          {/* Right Supporting Visual & Technical Telemetry Column */}
          <div className="single-sheet-supporting-col">
            <div className="news-col-header">
              <span>TELEMETRY & SCHEMATIC</span>
              {project.kpiHighlight && (
                <span style={{ color: 'var(--news-ink-muted)' }}>{project.kpiHighlight.label}</span>
              )}
            </div>

            {/* KPI Highlight */}
            {project.kpiHighlight && (
              <div className="editorial-kpi-badge" style={{ marginBottom: 'var(--space-3)' }}>
                <span className="editorial-kpi-val">{project.kpiHighlight.value}</span>
                <span className="editorial-kpi-lbl">{project.kpiHighlight.label}</span>
              </div>
            )}

            {/* Technical Diagram */}
            {project.imagePlaceholder && (
              <PageFigureVisual
                type={project.imagePlaceholder.type}
                figureNo={project.imagePlaceholder.figureNo}
                caption={project.imagePlaceholder.caption}
              />
            )}

            {/* Technologies */}
            <div style={{ marginTop: 'var(--space-2)' }}>
              <div className="news-field-header">
                DEPLOYED STACK & LIBRARIES:
              </div>
              <div className="news-tag-group" style={{ margin: 0 }}>
                {project.technologies.map((tech) => (
                  <span key={tech} className="news-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Repository Link */}
            <div style={{ marginTop: 'auto', paddingTop: '1.25rem' }}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link-btn"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={(e) => e.stopPropagation()}
              >
                <span>Examine Project Repository</span>
                <ArrowUpRight size={13} />
              </a>
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
            aria-label="Previous Project Sheet"
          >
            <ArrowLeft size={13} />
            <span>Previous Sheet</span>
          </button>

          {/* Sheet Folio Number Indicators */}
          <div className="sheet-page-indicator-track">
            {PROJECTS_DATA.map((_, i) => (
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
            aria-label="Next Project Sheet"
          >
            <span>{isLast ? 'Final Sheet' : 'Next Sheet'}</span>
            {!isLast && <ArrowRight size={13} />}
          </button>
        </footer>
      </div>
    );
  };

  return (
    <PhysicalNewspaperDeck<ProjectItem>
      publicationTitle="THE WORK CHRONICLE"
      items={PROJECTS_DATA}
      currentIndex={pageIndex}
      onPageChange={onPageChange}
      renderSheet={renderSingleProjectSheet}
    />
  );
};
