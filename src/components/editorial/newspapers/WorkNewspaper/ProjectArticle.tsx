import React from 'react';
import { ProjectItem } from '../../data/projects';
import { ArrowUpRight } from 'lucide-react';
import { PageFigureVisual } from '../../shared/PageFigureVisual';

interface ProjectArticleProps {
  project: ProjectItem;
  showFigure?: boolean;
}

export const ProjectArticle: React.FC<ProjectArticleProps> = ({ project, showFigure = false }) => {
  return (
    <article className="secondary-article">
      {/* Article Kicker & Date */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'var(--news-font-mono)',
          fontSize: '0.6875rem',
          color: 'var(--news-ink-muted)',
          marginBottom: '0.35rem',
        }}
      >
        <span style={{ fontWeight: 600, color: 'var(--news-ink-soft)' }}>{project.name.toUpperCase()}</span>
        <span>{project.dateStamp}</span>
      </div>

      {/* Secondary Headline */}
      <h3 className="secondary-headline">{project.headline}</h3>

      {/* Lead Paragraph */}
      <p
        style={{
          fontFamily: 'var(--news-font-sans)',
          fontSize: '0.875rem',
          lineHeight: 1.6,
          color: 'var(--news-ink-soft)',
          marginBottom: '0.75rem',
        }}
      >
        {project.leadParagraph}
      </p>

      {/* Optional Diagram for selected articles */}
      {showFigure && project.imagePlaceholder && (
        <PageFigureVisual
          type={project.imagePlaceholder.type}
          figureNo={project.imagePlaceholder.figureNo}
          caption={project.imagePlaceholder.caption}
        />
      )}

      {/* KPI highlight if present */}
      {project.kpiHighlight && !showFigure && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.35rem 0.65rem',
            background: 'var(--news-paper-dark)',
            border: '1px solid var(--news-rule)',
            borderRadius: '2px',
            marginBottom: '0.75rem',
          }}
        >
          <span style={{ fontFamily: 'var(--news-font-mono)', fontWeight: 700, fontSize: '0.875rem' }}>
            {project.kpiHighlight.value}
          </span>
          <span style={{ fontFamily: 'var(--news-font-sans)', fontSize: '0.6875rem', color: 'var(--news-ink-muted)' }}>
            {project.kpiHighlight.label}
          </span>
        </div>
      )}

      {/* Technology Tags & Direct Repository Link */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
        <div className="news-tag-group" style={{ margin: 0 }}>
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="news-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="news-tag">+{project.technologies.length - 3}</span>
          )}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="news-link-btn"
          style={{ fontSize: '0.6875rem', padding: '0.25rem 0.55rem' }}
        >
          <span>Examine</span>
          <ArrowUpRight size={11} />
        </a>
      </div>
    </article>
  );
};

