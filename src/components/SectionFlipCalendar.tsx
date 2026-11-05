import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

export interface CalendarItem {
  pageNo: string;
  stamp: string;
  stampIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  technologies?: string[];
  bulletPoints?: string[];
  link?: string;
  linkText?: string;
}

interface SectionFlipCalendarProps {
  items: CalendarItem[];
  ringsCount?: number;
  minHeight?: string;
}

export const SectionFlipCalendar: React.FC<SectionFlipCalendarProps> = ({
  items,
  ringsCount = 24,
  minHeight = '420px',
}) => {
  const [curIdx, setCurIdx] = useState<number>(0);
  const [underIdx, setUnderIdx] = useState<number>(items.length > 1 ? 1 : 0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward'>('forward');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const leafRef = useRef<HTMLDivElement>(null);
  const faceRef = useRef<HTMLDivElement>(null);
  const rearRef = useRef<HTMLDivElement>(null);
  const activeAnimationsRef = useRef<Animation[]>([]);

  // Cancel any running animations on unmount or before new flip
  const clearAnimations = () => {
    activeAnimationsRef.current.forEach((anim) => {
      try {
        anim.cancel();
      } catch {
        // ignore cancellation errors
      }
    });
    activeAnimationsRef.current = [];
  };

  useEffect(() => {
    return () => clearAnimations();
  }, []);

  const flipTo = (targetIdx: number, direction: 'forward' | 'backward' = 'forward') => {
    if (isFlipping || targetIdx === curIdx || items.length <= 1) return;
    if (targetIdx < 0 || targetIdx >= items.length) return;

    clearAnimations();
    setIsFlipping(true);
    setFlipDirection(direction);

    const leaf = leafRef.current;
    const face = faceRef.current;
    const rear = rearRef.current;

    if (!leaf || !face || !rear || typeof leaf.animate !== 'function') {
      setCurIdx(targetIdx);
      setUnderIdx((targetIdx + 1) % items.length);
      setIsFlipping(false);
      return;
    }

    const FLIP_DURATION = 650;

    if (direction === 'forward') {
      // FORWARD FLIP: Under page shows the destination; top leaf flips up & away
      setUnderIdx(targetIdx);

      const leafAnim = leaf.animate(
        [
          { transform: 'translateZ(.004em) rotateX(0deg)' },
          { transform: 'translateZ(.004em) rotateX(180deg)' },
        ],
        {
          duration: FLIP_DURATION,
          easing: 'cubic-bezier(0.4, 0.05, 0.2, 1)',
          fill: 'none',
        }
      );

      const faceAnim = face.animate(
        [
          { opacity: 1, filter: 'brightness(1)' },
          { opacity: 1, filter: 'brightness(1.03)', offset: 0.38 },
          { opacity: 0, filter: 'brightness(0.92)', offset: 0.49 },
          { opacity: 0, filter: 'brightness(0.9)' },
        ],
        { duration: FLIP_DURATION, easing: 'linear', fill: 'none' }
      );

      const rearAnim = rear.animate(
        [
          { filter: 'brightness(0.88)' },
          { filter: 'brightness(1.04)', offset: 0.52 },
          { filter: 'brightness(0.98)' },
        ],
        { duration: FLIP_DURATION, easing: 'linear', fill: 'none' }
      );

      activeAnimationsRef.current = [leafAnim, faceAnim, rearAnim];

      leafAnim.onfinish = () => {
        clearAnimations();
        setCurIdx(targetIdx);
        setUnderIdx((targetIdx + 1) % items.length);
        setIsFlipping(false);
        leaf.style.transform = 'translateZ(.004em) rotateX(0deg)';
        face.style.opacity = '1';
      };

      leafAnim.oncancel = () => {
        setIsFlipping(false);
        leaf.style.transform = 'translateZ(.004em) rotateX(0deg)';
        face.style.opacity = '1';
      };
    } else {
      // BACKWARD FLIP: Target page flips down from top onto the current page
      setUnderIdx(curIdx);

      const leafAnim = leaf.animate(
        [
          { transform: 'translateZ(.004em) rotateX(180deg)' },
          { transform: 'translateZ(.004em) rotateX(0deg)' },
        ],
        {
          duration: FLIP_DURATION,
          easing: 'cubic-bezier(0.2, 0.8, 0.25, 1)',
          fill: 'none',
        }
      );

      const faceAnim = face.animate(
        [
          { opacity: 0, filter: 'brightness(0.9)' },
          { opacity: 0, filter: 'brightness(0.92)', offset: 0.49 },
          { opacity: 1, filter: 'brightness(1.03)', offset: 0.62 },
          { opacity: 1, filter: 'brightness(1)' },
        ],
        { duration: FLIP_DURATION, easing: 'linear', fill: 'none' }
      );

      const rearAnim = rear.animate(
        [
          { filter: 'brightness(0.98)' },
          { filter: 'brightness(1.04)', offset: 0.48 },
          { filter: 'brightness(0.88)' },
        ],
        { duration: FLIP_DURATION, easing: 'linear', fill: 'none' }
      );

      activeAnimationsRef.current = [leafAnim, faceAnim, rearAnim];

      leafAnim.onfinish = () => {
        clearAnimations();
        setCurIdx(targetIdx);
        setUnderIdx((targetIdx + 1) % items.length);
        setIsFlipping(false);
        leaf.style.transform = 'translateZ(.004em) rotateX(0deg)';
        face.style.opacity = '1';
      };

      leafAnim.oncancel = () => {
        setIsFlipping(false);
        leaf.style.transform = 'translateZ(.004em) rotateX(0deg)';
        face.style.opacity = '1';
      };
    }
  };

  // 3-second Auto Flip with smooth transition and pause-on-hover
  useEffect(() => {
    if (isHovered || isFlipping || items.length <= 1) return;

    const timer = setTimeout(() => {
      const nextIdx = (curIdx + 1) % items.length;
      flipTo(nextIdx, 'forward');
    }, 3000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curIdx, isHovered, isFlipping, items.length]);

  const handleNext = () => {
    if (isFlipping) return;
    const nextIdx = (curIdx + 1) % items.length;
    flipTo(nextIdx, 'forward');
  };

  const handlePrev = () => {
    if (isFlipping) return;
    const prevIdx = (curIdx - 1 + items.length) % items.length;
    flipTo(prevIdx, 'backward');
  };

  const flippingLeafItem =
    isFlipping && flipDirection === 'backward' ? items[underIdx] : items[curIdx];

  const underPageItem =
    isFlipping && flipDirection === 'forward' ? items[underIdx] : items[curIdx];

  const renderContent = (item: CalendarItem) => {
    return (
      <div className="cal-pad-content">
        {/* Top Header: Stamp & Page Number */}
        <div className="cal-pad-header">
          <div className="cal-pad-stamp">
            {item.stampIcon}
            <span>{item.stamp}</span>
          </div>
          <div className="cal-pad-no">{item.pageNo}</div>
        </div>

        {/* Title & Subtitle */}
        <div style={{ marginBottom: '0.85rem' }}>
          <h3
            style={{
              fontSize: 'clamp(1.15rem, 2.2vw, 1.45rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: 'var(--foreground)',
              lineHeight: 1.2,
              marginBottom: '0.25rem',
            }}
          >
            {item.title}
          </h3>
          {item.subtitle && (
            <p
              style={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--accent)',
                opacity: 0.9,
              }}
            >
              {item.subtitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '0.9rem',
            lineHeight: 1.6,
            color: 'var(--foreground)',
            opacity: 0.85,
            marginBottom: '1.15rem',
            maxWidth: '100%',
          }}
        >
          {item.description}
        </p>

        {/* Bullet Points (if any) */}
        {item.bulletPoints && item.bulletPoints.length > 0 && (
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 1.15rem 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {item.bulletPoints.map((bp, bIdx) => (
              <li
                key={bIdx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  fontSize: '0.825rem',
                  lineHeight: 1.55,
                  color: 'var(--foreground)',
                  opacity: 0.88,
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    marginTop: '0.45rem',
                    flexShrink: 0,
                  }}
                />
                <span>{bp}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Bottom Technologies / Badges & Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.85rem',
            paddingTop: '1.15rem',
            borderTop: '1px solid var(--line)',
          }}
        >
          {item.technologies && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {item.technologies.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--chip-bg)',
                    border: '1px solid var(--chip-line)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'var(--foreground)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill--dark"
              style={{ padding: '0.45rem 1rem', fontSize: '0.75rem', marginLeft: 'auto' }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="pill__in" style={{ padding: 0, gap: '0.4rem' }}>
                <span>{item.linkText || 'View Project'}</span>
                <ArrowUpRight size={13} />
              </span>
            </a>
          )}
        </div>

        {/* Inside-Calendar Navigation Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.65rem',
            paddingTop: '0.9rem',
            marginTop: '1rem',
            borderTop: '1px dashed rgba(0, 0, 0, 0.1)',
          }}
        > 
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            disabled={isFlipping}
            className="chip"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.85rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              borderRadius: '9999px',
              backgroundColor: 'var(--chip-bg)',
              color: 'var(--foreground)',
              border: '1px solid var(--chip-line)',
              cursor: 'pointer',
              opacity: 1,
              transition: 'opacity 0.2s ease',
            }}
          >
            <ArrowLeft size={13} />
            <span>Prev</span>
          </button>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (i !== curIdx && !isFlipping) {
                    flipTo(i, i < curIdx ? 'backward' : 'forward');
                  }
                }}
                title={`Page ${i + 1} of ${items.length}`}
                style={{
                  width: i === curIdx ? '20px' : '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  backgroundColor:
                    i === curIdx ? 'var(--foreground)' : 'rgba(var(--fg-rgb), 0.25)',
                  border: 'none',
                  padding: 0,
                  cursor: i === curIdx ? 'default' : 'pointer',
                  transition: 'all 0.25s ease',
                }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            disabled={isFlipping}
            className="chip"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.85rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              borderRadius: '9999px',
              backgroundColor: 'var(--chip-bg)',
              color: 'var(--foreground)',
              border: '1px solid var(--chip-line)',
              cursor: 'pointer',
              opacity: 1,
              transition: 'opacity 0.2s ease',
            }}
          >
            <span>Next</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '100%',
        perspective: '1800px',
        position: 'relative',
      }}
    >
      {/* Punched Holes along full top width */}
      <div
        style={{
          position: 'absolute',
          top: '11px',
          left: '2rem',
          right: '2rem',
          height: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          pointerEvents: 'none',
          zIndex: 15,
        }}
        aria-hidden="true"
      >
        {Array.from({ length: ringsCount }).map((_, i) => (
          <span
            key={i}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: 'rgba(26, 24, 24, 0.16)',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.18)',
            }}
          />
        ))}
      </div>

      {/* Metallic Spiral Rings arching over full top width */}
      <div
        style={{
          position: 'absolute',
          top: '-14px',
          left: '2rem',
          right: '2rem',
          height: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          pointerEvents: 'none',
          zIndex: 30,
        }}
        aria-hidden="true"
      >
        {Array.from({ length: ringsCount }).map((_, i) => (
          <span
            key={i}
            style={{
              width: '10px',
              height: '32px',
              borderRadius: '5px',
              border: '2px solid #a9a9a9',
              borderLeftColor: '#f0f0f0',
              borderTopColor: '#ffffff',
              borderRightColor: '#686868',
              borderBottomColor: '#8a8a8a',
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.45) 0%, rgba(200,200,200,0.15) 50%, rgba(0,0,0,0.25) 100%)',
              filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.35))',
            }}
          />
        ))}
      </div>

      {/* Full-width Calendar Deck: Click anywhere to flip */}
      <div
        className="cal-book-deck"
        onClick={() => {
          if (!isFlipping) {
            handleNext();
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title="Click to flip to next page"
        style={{
          position: 'relative',
          borderRadius: '1.5rem',
          minHeight,
          cursor: 'pointer',
          zIndex: 5,
          userSelect: 'none',
          width: '100%',
        }}
      >
        {/* UNDER PAGE: Waits beneath during flip */}
        <div
          className="cal-book-page cal-book-under"
          style={{
            position: 'relative',
            borderRadius: '1.5rem',
            background: 'linear-gradient(180deg, #fdfcf9 0%, #f4f1ea 100%)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: `
              0 1px 0 #d8d4cb,
              0 3px 0 #f6f4ef,
              0 5px 0 #d0cbc1,
              0 7px 0 #f2f0ea,
              0 9px 0 #c8c3b8,
              0 11px 0 #e9e6df,
              0 13px 0 #aaa498,
              0 24px 48px -8px rgba(0, 0, 0, 0.2)
            `,
            padding: '2.75rem clamp(1.5rem, 4vw, 3rem) 2.25rem',
            width: '100%',
          }}
        >
          {renderContent(underPageItem)}
        </div>

        {/* FLIPPING TOP LEAF */}
        <div
          ref={leafRef}
          className="cal-book-leaf"
          style={{
            position: 'absolute',
            inset: 0,
            transformOrigin: '50% 0',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(.004em) rotateX(0deg)',
            willChange: 'transform',
            zIndex: 10,
          }}
        >
          {/* Front Face */}
          <div
            ref={faceRef}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '1.5rem',
              background: 'linear-gradient(180deg, #fdfcf9 0%, #f4f1ea 100%)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: `
                0 1px 0 #d8d4cb,
                0 3px 0 #f6f4ef,
                0 5px 0 #d0cbc1,
                0 7px 0 #f2f0ea,
                0 9px 0 #c8c3b8,
                0 11px 0 #e9e6df,
                0 13px 0 #aaa498,
                0 24px 48px -8px rgba(0, 0, 0, 0.2)
              `,
              padding: '2.75rem clamp(1.5rem, 4vw, 3rem) 2.25rem',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              width: '100%',
            }}
          >
            {renderContent(flippingLeafItem)}
          </div>

          {/* Rear Face of turning page */}
          <div
            ref={rearRef}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '1.5rem',
              background: 'linear-gradient(0deg, #e9e6df 0%, #d9d5cc 100%)',
              transform: 'rotateX(180deg)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              boxShadow: 'inset 0 0 24px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFlipCalendar;
