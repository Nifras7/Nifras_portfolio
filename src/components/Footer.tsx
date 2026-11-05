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

  return (
    <footer className="site-footer">
      <div className="shell">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 'var(--space-8)',
            marginBottom: 'var(--space-12)',
          }}
        >
          {/* Brand & Introduction */}
          <div className="footer-brand">
            <h3 className="footer-name">Mohamed Nifras</h3>
            <p className="footer-desc">
              CEO of AIstratX. AI Engineer & Data Analyst building intelligent computational frameworks that transform metrics into decisions.
            </p>
            <div>
              <a
                href="https://github.com/Nifras7"
                target="_blank"
                rel="noopener noreferrer"
                className="chip"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-2) var(--space-4)',
                  fontWeight: 'var(--fw-emphasis)',
                  color: 'var(--foreground)',
                }}
              >
                <GithubIcon size={14} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
            <div>
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#home" className="footer-link-item">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#work" className="footer-link-item">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#skills" className="footer-link-item">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" className="footer-link-item">
                    Experience
                  </a>
                </li>
                <li>
                  <button onClick={onOpenContact} className="footer-link-item">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Availability</h4>
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--foreground)',
                  opacity: 0.85,
                  lineHeight: 'var(--lh-body)',
                  maxWidth: '220px',
                }}
              >
                Available for enterprise consulting, AI engineering, and technical advisory.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="footer-bottom-bar">
          <div>© {new Date().getFullYear()} Mohamed Nifras. All rights reserved.</div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              color: 'var(--foreground)',
              fontSize: 'var(--text-sm)',
              fontWeight: 'var(--fw-emphasis)',
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
