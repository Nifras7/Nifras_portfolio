import React, { useRef, useEffect } from 'react';

interface PageFlipTransitionProps {
  currentIndex: number;
  direction: 'forward' | 'backward';
  isAnimating: boolean;
  children: React.ReactNode;
  onAnimationEnd: () => void;
}

export const PageFlipTransition: React.FC<PageFlipTransitionProps> = ({
  currentIndex,
  direction,
  isAnimating,
  children,
  onAnimationEnd,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<Animation | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !isAnimating) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const anim = el.animate(
        [{ opacity: 0 }, { opacity: 1 }],
        { duration: 250, easing: 'ease-out', fill: 'forwards' }
      );
      anim.onfinish = () => onAnimationEnd();
      return;
    }

    const DURATION = 500;

    // 3D vertical edge paper turn
    if (direction === 'forward') {
      // Arrive from right side like a broadsheet turn
      el.style.transformOrigin = 'left center';
      const anim = el.animate(
        [
          { transform: 'rotateY(30deg) scale(0.98)', opacity: 0, filter: 'brightness(0.92)' },
          { transform: 'rotateY(0deg) scale(1)', opacity: 1, filter: 'brightness(1)' },
        ],
        {
          duration: DURATION,
          easing: 'cubic-bezier(0.2, 0.8, 0.25, 1)',
          fill: 'none',
        }
      );
      animRef.current = anim;
      anim.onfinish = () => {
        el.style.transform = '';
        el.style.opacity = '1';
        el.style.filter = '';
        onAnimationEnd();
      };
    } else {
      // Arrive backwards from left side
      el.style.transformOrigin = 'right center';
      const anim = el.animate(
        [
          { transform: 'rotateY(-30deg) scale(0.98)', opacity: 0, filter: 'brightness(0.92)' },
          { transform: 'rotateY(0deg) scale(1)', opacity: 1, filter: 'brightness(1)' },
        ],
        {
          duration: DURATION,
          easing: 'cubic-bezier(0.2, 0.8, 0.25, 1)',
          fill: 'none',
        }
      );
      animRef.current = anim;
      anim.onfinish = () => {
        el.style.transform = '';
        el.style.opacity = '1';
        el.style.filter = '';
        onAnimationEnd();
      };
    }

    return () => {
      if (animRef.current) {
        try {
          animRef.current.cancel();
        } catch {
          // ignore cleanup errors
        }
      }
    };
  }, [currentIndex, isAnimating, direction, onAnimationEnd]);

  return (
    <div
      ref={containerRef}
      className="newspaper-stage-container"
      style={{
        width: '100%',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};
