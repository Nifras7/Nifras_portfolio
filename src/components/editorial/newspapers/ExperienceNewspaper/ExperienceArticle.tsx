import React from 'react';
import { ExperienceStory } from '../../data/experience';
import { Building2, Calendar, MapPin } from 'lucide-react';

interface ExperienceArticleProps {
  story: ExperienceStory;
  isLead?: boolean;
}

export const ExperienceArticle: React.FC<ExperienceArticleProps> = ({ story, isLead = false }) => {
  return (
    <article
      style={{
        paddingBottom: '2rem',
        marginBottom: '2rem',
        borderBottom: isLead ? '2px solid var(--news-rule-heavy)' : '1px solid var(--news-rule)',
      }}
    >
      {/* Top Organization Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          fontFamily: 'var(--news-font-mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--news-ink-muted)',
          marginBottom: '0.65rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--news-ink)', fontWeight: 700 }}>
          <Building2 size={13} />
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

      {/* Headline */}
      <h3
        style={{
          fontFamily: 'var(--news-font-serif)',
          fontSize: isLead ? 'clamp(1.6rem, 3vw, 2.25rem)' : '1.35rem',
          fontWeight: 600,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: 'var(--news-ink)',
          marginBottom: '0.75rem',
        }}
      >
        {story.headline}
      </h3>

      {/* Role Tag & Byline */}
      <div className="article-byline">
        <span style={{ fontWeight: 700, color: 'var(--news-ink)' }}>ROLE: {story.role.toUpperCase()}</span>
        <span>·</span>
        <span>{story.byline}</span>
        {story.verifiedProject && (
          <>
            <span>·</span>
            <span style={{ color: 'var(--news-ink)', fontStyle: 'italic' }}>PROJECT: {story.verifiedProject}</span>
          </>
        )}
      </div>

      {/* Lead Paragraph */}
      <p
        className={`article-body-text ${isLead ? 'drop-cap' : ''}`}
        style={{
          fontStyle: isLead ? 'italic' : 'normal',
          fontSize: isLead ? '1.05rem' : '0.9375rem',
          lineHeight: 1.6,
        }}
      >
        {story.leadParagraph}
      </p>

      {/* Supporting Paragraphs */}
      {story.paragraphs.map((para, pIdx) => (
        <p key={pIdx} className="article-body-text">
          {para}
        </p>
      ))}

      {/* Key Deliverables Bullet Points in Newspaper Box */}
      <div
        style={{
          background: 'var(--news-paper-dark)',
          border: '1px solid var(--news-rule)',
          borderLeft: '3px solid var(--news-ink)',
          padding: '1rem 1.25rem',
          margin: '1.25rem 0',
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
            marginBottom: '0.65rem',
          }}
        >
          SUMMARY OF FIELD CONTRIBUTIONS & OUTPUTS:
        </div>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
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
              <span style={{ color: 'var(--news-ink)', fontWeight: 700 }}>—</span>
              <span>{contrib}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technology Labels */}
      <div className="news-tag-group">
        {story.technologies.map((tech) => (
          <span key={tech} className="news-tag">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

