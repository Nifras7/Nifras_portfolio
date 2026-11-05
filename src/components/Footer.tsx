import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serifFont = "'EB Garamond', Georgia, 'Times New Roman', serif";

  return (
    <footer
      style={{
        borderTop: '1px solid var(--line)',
        backgroundColor: 'var(--background)',
        padding: '4.5rem 0 3.5rem',
        position: 'relative',
        fontFamily: serifFont,
      }}
    >
      <div className="shell">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand & Introduction */}
          <div style={{ maxWidth: '440px' }}>
            <h3
              style={{
                fontFamily: serifFont,
                fontSize: '1.85rem',
                fontWeight: 600,
                letterSpacing: '-0.015em',
                color: 'var(--foreground)',
                marginBottom: '0.65rem',
              }}
            >
              Mohamed Nifras
            </h3>
            <p
              style={{
                fontFamily: serifFont,
                fontSize: '1.05rem',
                lineHeight: 1.6,
                color: 'var(--muted)',
                marginBottom: '1.5rem',
              }}
            >
              CEO of AIstratX. AI Engineer & Data Analyst building intelligent computational frameworks that transform metrics into decisions.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://github.com/Nifras7"
                target="_blank"
                rel="noopener noreferrer"
                className="chip"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.45rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  fontFamily: serifFont,
                  color: 'var(--foreground)',
                  transition: 'background-color 0.2s ease',
                }}
              >
                <GithubIcon size={14} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '3.5rem', flexWrap: 'wrap' }}>
            <div>
              <h4
                style={{
                  fontFamily: serifFont,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--muted)',
                  marginBottom: '1rem',
                }}
              >
                Navigation
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <li>
                  <a href="#home" style={{ fontFamily: serifFont, fontSize: '1rem', color: 'var(--foreground)', opacity: 0.85 }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#work" style={{ fontFamily: serifFont, fontSize: '1rem', color: 'var(--foreground)', opacity: 0.85 }}>
                    Work
                  </a>
                </li>
                <li>
                  <a href="#skills" style={{ fontFamily: serifFont, fontSize: '1rem', color: 'var(--foreground)', opacity: 0.85 }}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" style={{ fontFamily: serifFont, fontSize: '1rem', color: 'var(--foreground)', opacity: 0.85 }}>
                    Experience
                  </a>
                </li>
                <li>
                  <button onClick={onOpenContact} style={{ fontFamily: serifFont, fontSize: '1rem', color: 'var(--foreground)', opacity: 0.85 }}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4
                style={{
                  fontFamily: serifFont,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--muted)',
                  marginBottom: '1rem',
                }}
              >
                Availability
              </h4>
              <p style={{ fontFamily: serifFont, fontSize: '0.975rem', color: 'var(--foreground)', opacity: 0.85, lineHeight: 1.6, maxWidth: '220px' }}>
                Available for enterprise consulting, AI engineering, and technical advisory.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid var(--line)',
            fontSize: '0.875rem',
            fontFamily: serifFont,
            color: 'var(--muted)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>© {new Date().getFullYear()} Mohamed Nifras. All rights reserved.</div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--foreground)',
              fontSize: '0.875rem',
              fontWeight: 600,
              fontFamily: serifFont,
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

