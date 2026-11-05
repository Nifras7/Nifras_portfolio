import React, { useState, useRef, useEffect, useCallback } from 'react';

interface PhysicalNewspaperDeckProps<T> {
  publicationTitle: string;
  items: T[];
  currentIndex: number;
  onPageChange: (newIndex: number) => void;
  renderSheet: (
    item: T,
    pageIndex: number,
    totalCount: number,
    onPrev: () => void,
    onNext: () => void,
    onSelectPage: (idx: number) => void,
    isFlipping: boolean
  ) => React.ReactNode;
}

export function PhysicalNewspaperDeck<T>({
  items,
  currentIndex,
  onPageChange,
  renderSheet,
}: PhysicalNewspaperDeckProps<T>) {
  const [underIndex, setUnderIndex] = useState<number>(
    items.length > 1 ? (currentIndex + 1) % items.length : currentIndex
  );
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'forward' | 'backward'>('forward');

  const deckRef = useRef<HTMLDivElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const activeAnimationsRef = useRef<Animation[]>([]);
  const touchStartXRef = useRef<number>(0);

  const clearAnimations = useCallback(() => {
    activeAnimationsRef.current.forEach((anim) => {
      try {
        anim.cancel();
      } catch {
        // ignore cancellation errors
      }
    });
    activeAnimationsRef.current = [];
  }, []);

  useEffect(() => {
    return () => clearAnimations();
  }, [clearAnimations]);

  const flipTo = useCallback(
    (targetIndex: number, direction: 'forward' | 'backward' = 'forward') => {
      if (
        isFlipping ||
        targetIndex === currentIndex ||
        targetIndex < 0 ||
        targetIndex >= items.length
      ) {
        return;
      }

      clearAnimations();
      setIsFlipping(true);
      setFlipDirection(direction);

      const leaf = leafRef.current;
      const front = frontRef.current;
      const back = backRef.current;

      // Fallback for reduced motion or non-supporting browsers
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!leaf || !front || !back || typeof leaf.animate !== 'function' || prefersReducedMotion) {
        onPageChange(targetIndex);
        setUnderIndex((targetIndex + 1) % items.length);
        setIsFlipping(false);
        return;
      }

      const FLIP_DURATION = 600; // 600ms authentic newspaper page-turn

      if (direction === 'forward') {
        // Forward turn: Under page displays target item, top leaf turns left (0deg -> -180deg)
        setUnderIndex(targetIndex);

        const leafAnim = leaf.animate(
          [
            { transform: 'rotateY(0deg)', boxShadow: 'var(--shadow-sm)' },
            { transform: 'rotateY(-90deg) skewY(-1deg)', offset: 0.5 },
            { transform: 'rotateY(-180deg)', boxShadow: 'var(--shadow-lg)' },
          ],
          {
            duration: FLIP_DURATION,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            fill: 'none',
          }
        );

        const frontAnim = front.animate(
          [
            { opacity: 1, filter: 'brightness(1)' },
            { opacity: 1, filter: 'brightness(1.03)', offset: 0.38 },
            { opacity: 0, filter: 'brightness(0.92)', offset: 0.49 },
            { opacity: 0, filter: 'brightness(0.9)' },
          ],
          { duration: FLIP_DURATION, easing: 'linear', fill: 'none' }
        );

        const backAnim = back.animate(
          [
            { filter: 'brightness(0.88)' },
            { filter: 'brightness(1.04)', offset: 0.52 },
            { filter: 'brightness(0.98)' },
          ],
          { duration: FLIP_DURATION, easing: 'linear', fill: 'none' }
        );

        activeAnimationsRef.current = [leafAnim, frontAnim, backAnim];

        leafAnim.onfinish = () => {
          clearAnimations();
          onPageChange(targetIndex);
          setUnderIndex((targetIndex + 1) % items.length);
          setIsFlipping(false);
          leaf.style.transform = 'rotateY(0deg)';
          front.style.opacity = '1';
        };

        leafAnim.oncancel = () => {
          setIsFlipping(false);
          leaf.style.transform = 'rotateY(0deg)';
          front.style.opacity = '1';
        };
      } else {
        // Backward turn: Destination page turns back into position (-180deg -> 0deg)
        setUnderIndex(currentIndex);

        const leafAnim = leaf.animate(
          [
            { transform: 'rotateY(-180deg)', boxShadow: 'var(--shadow-lg)' },
            { transform: 'rotateY(-90deg) skewY(1deg)', offset: 0.5 },
            { transform: 'rotateY(0deg)', boxShadow: 'var(--shadow-sm)' },
          ],
          {
            duration: FLIP_DURATION,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            fill: 'none',
          }
        );

        const frontAnim = front.animate(
          [
            { opacity: 0, filter: 'brightness(0.9)' },
            { opacity: 0, filter: 'brightness(0.92)', offset: 0.49 },
            { opacity: 1, filter: 'brightness(1.03)', offset: 0.62 },
            { opacity: 1, filter: 'brightness(1)' },
          ],
          { duration: FLIP_DURATION, easing: 'linear', fill: 'none' }
        );

        const backAnim = back.animate(
          [
            { filter: 'brightness(0.98)' },
            { filter: 'brightness(1.04)', offset: 0.48 },
            { filter: 'brightness(0.88)' },
          ],
          { duration: FLIP_DURATION, easing: 'linear', fill: 'none' }
        );

        activeAnimationsRef.current = [leafAnim, frontAnim, backAnim];

        leafAnim.onfinish = () => {
          clearAnimations();
          onPageChange(targetIndex);
          setUnderIndex((targetIndex + 1) % items.length);
          setIsFlipping(false);
          leaf.style.transform = 'rotateY(0deg)';
          front.style.opacity = '1';
        };

        leafAnim.oncancel = () => {
          setIsFlipping(false);
          leaf.style.transform = 'rotateY(0deg)';
          front.style.opacity = '1';
        };
      }
    },
    [isFlipping, currentIndex, items.length, clearAnimations, onPageChange]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      flipTo(currentIndex + 1, 'forward');
    }
  }, [currentIndex, items.length, flipTo]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      flipTo(currentIndex - 1, 'backward');
    }
  }, [currentIndex, flipTo]);

  const handleSelectPage = useCallback(
    (target: number) => {
      if (target !== currentIndex && !isFlipping) {
        flipTo(target, target > currentIndex ? 'forward' : 'backward');
      }
    },
    [currentIndex, isFlipping, flipTo]
  );

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch Swipe Navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const leafItem =
    isFlipping && flipDirection === 'backward' ? items[underIndex] : items[currentIndex];
  const underItem =
    isFlipping && flipDirection === 'forward' ? items[underIndex] : items[currentIndex];

  return (
    <div
      ref={deckRef}
      className="newspaper-physical-deck"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Physical Newspaper Sheet Reader"
    >
      {/* 1. UNDER SHEET (Revealed beneath during physical page turn) */}
      <div className="newspaper-under-sheet">
        {renderSheet(
          underItem,
          isFlipping && flipDirection === 'forward' ? underIndex : currentIndex,
          items.length,
          handlePrev,
          handleNext,
          handleSelectPage,
          isFlipping
        )}
      </div>

      {/* 2. TURNING LEAF (3D turning page) */}
      <div
        ref={leafRef}
        className="newspaper-turning-leaf"
        style={{
          transform: 'rotateY(0deg)',
          pointerEvents: isFlipping ? 'none' : 'auto',
        }}
      >
        {/* Front Face: The outgoing newspaper sheet */}
        <div ref={frontRef} className="newspaper-leaf-front">
          {renderSheet(
            leafItem,
            isFlipping && flipDirection === 'backward' ? underIndex : currentIndex,
            items.length,
            handlePrev,
            handleNext,
            handleSelectPage,
            isFlipping
          )}
        </div>

        {/* Back Face: The reverse newsprint texture */}
        <div ref={backRef} className="newspaper-leaf-back">
          <div
            style={{
              fontSize: 'var(--text-lg)',
              fontWeight: 'var(--fw-heading)',
              letterSpacing: 'var(--tracking-caps)',
              textTransform: 'uppercase',
              color: 'var(--news-ink-muted)',
              opacity: 0.45,
            }}
          >
            DISPATCH ARCHIVES
          </div>
          <div
            className="news-caps-label"
            style={{
              color: 'var(--news-ink-subtle)',
              marginTop: 'var(--space-2)',
            }}
          >
            MOHAMED NIFRAS · COMPILATION 2026
          </div>
        </div>
      </div>
    </div>
  );
}

