import React from 'react';
import { SkillCategory as SkillCategoryType } from '../../data/skills';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <section
      style={{
        paddingBottom: '1.75rem',
        marginBottom: '1.75rem',
        borderBottom: '1px solid var(--news-rule)',
      }}
    >
      {/* Category Code Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'var(--news-font-mono)',
          fontSize: '0.6875rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--news-ink-muted)',
          marginBottom: '0.35rem',
        }}
      >
        <span>[{category.sectionCode}]</span>
        <span style={{ fontWeight: 600, color: 'var(--news-ink)' }}>{category.name.toUpperCase()}</span>
      </div>

      {/* Category Headline */}
      <h3
        style={{
          fontFamily: 'var(--news-font-serif)',
          fontSize: '1.35rem',
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: '-0.015em',
          color: 'var(--news-ink)',
          marginBottom: '0.5rem',
        }}
      >
        {category.headline}
      </h3>

      {/* Overview brief */}
      <p
        style={{
          fontFamily: 'var(--news-font-sans)',
          fontSize: '0.875rem',
          lineHeight: 1.55,
          color: 'var(--news-ink-soft)',
          marginBottom: '1rem',
        }}
      >
        {category.overview}
      </p>

      {/* Skills Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '0.75rem',
        }}
      >
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            style={{
              padding: '0.75rem 0.85rem',
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
                marginBottom: '0.35rem',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--news-font-sans)',
                  fontSize: '0.875rem',
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
                    padding: '0.1rem 0.4rem',
                    background: 'var(--news-ink)',
                    color: 'var(--news-paper)',
                    borderRadius: '2px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                  }}
                >
                  {skill.tag}
                </span>
              )}
            </div>

            <p
              style={{
                fontFamily: 'var(--news-font-sans)',
                fontSize: '0.78125rem',
                lineHeight: 1.45,
                color: 'var(--news-ink-muted)',
                margin: 0,
              }}
            >
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

