import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NewspaperNavigationProps {
  currentIndex: number;
  totalCount: number;
  onSelectIndex: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  isAnimating: boolean;
}

const PUBLICATIONS = [
  { id: 'work', title: 'The Work Chronicle', tag: 'PROJECTS & AI' },
  { id: 'experience', title: 'The Career Times', tag: 'EXPERIENCE' },
  { id: 'skills', title: 'The Technical Journal', tag: 'STACK & SKILLS' },
];

export const NewspaperNavigation: React.FC<NewspaperNavigationProps> = ({
  currentIndex,
  totalCount,
  onSelectIndex,
  onPrev,
  onNext,
  isAnimating,
}) => {
  return (
    <div className="newspaper-controller-bar">
      {/* Newspaper Selection Tabs */}
      <div className="newspaper-selector-tabs" role="tablist" aria-label="Editorial Publications">
        {PUBLICATIONS.map((pub, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={pub.id}
              role="tab"
              aria-selected={isActive}
              tabIndex={0}
              disabled={isAnimating}
              className={`newspaper-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectIndex(idx)}
            >
              <span className="newspaper-tab-num">0{idx + 1}</span>
              <span>{pub.title}</span>
            </button>
          );
        })}
      </div>

      {/* Navigation Controls: Prev / Next & Indicators */}
      <div className="newspaper-nav-controls">
        <span
          style={{
            fontFamily: 'var(--news-font-mono)',
            fontSize: '0.6875rem',
            color: 'var(--muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginRight: '0.5rem',
          }}
        >
          ISSUE 0{currentIndex + 1} / 0{totalCount}
        </span>

        <button
          type="button"
          onClick={onPrev}
          disabled={isAnimating || currentIndex === 0}
          className="newspaper-nav-btn"
          aria-label="Previous Newspaper"
        >
          <ArrowLeft size={14} />
          <span>Previous</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={isAnimating || currentIndex === totalCount - 1}
          className="newspaper-nav-btn"
          aria-label="Next Newspaper"
        >
          <span>Next</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
