import React from 'react';
import { ProjectItem } from '../../data/projects';
import { PageFigureVisual } from '../../shared/PageFigureVisual';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedProjectProps {
  project: ProjectItem;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project }) => {
  return (
    <article className="featured-project-article">
      {/* Editorial Category Kicker */}
      <div
        style={{
          fontFamily: 'var(--news-font-mono)',
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--news-ink-muted)',
          marginBottom: '0.5rem',
        }}
      >
        ★ LEAD FEATURE · {project.dateStamp}
      </div>

      {/* Dominant Headline */}
      <h2 className="lead-article-headline">{project.headline}</h2>

      {/* Lead Deck */}
      <p className="lead-article-deck">{project.leadParagraph}</p>

      {/* Byline & KPI */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <div className="article-byline" style={{ marginBottom: 0 }}>
          <span>DISPATCH BY MOHAMED NIFRAS</span>
          <span>·</span>
          <span>EDGE NEURAL RUNTIMES</span>
        </div>

        {project.kpiHighlight && (
          <div className="editorial-kpi-badge">
            <span className="editorial-kpi-val">{project.kpiHighlight.value}</span>
            <span className="editorial-kpi-lbl">{project.kpiHighlight.label}</span>
          </div>
        )}
      </div>

      {/* Technical Schematic Image */}
      {project.imagePlaceholder && (
        <PageFigureVisual
          type={project.imagePlaceholder.type}
          figureNo={project.imagePlaceholder.figureNo}
          caption={project.imagePlaceholder.caption}
        />
      )}

      {/* Editorial Body Paragraphs with Drop Cap */}
      {project.editorialReport.map((p, idx) => (
        <p key={idx} className={`article-body-text ${idx === 0 ? 'drop-cap' : ''}`}>
          {p}
        </p>
      ))}

      {/* Technology Tags & Repository Link */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--news-rule)' }}>
        <div className="news-tag-group" style={{ margin: 0 }}>
          {project.technologies.map((tech) => (
            <span key={tech} className="news-tag">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="news-link-btn"
        >
          <span>Examine Flagship Repository</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
    </article>
  );
};

