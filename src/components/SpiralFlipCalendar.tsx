import React, { useEffect, useRef } from 'react';

const SKILLS = [
  'AI Engineer',
  'Data Analyst',
  'ML Developer',
  'LLM Architect',
  'Python Developer',
];

const HOLD = 4000;
const FLIP = 1250;
const RING_COUNT = 10;

export const SpiralFlipCalendar: React.FC = () => {
  const calRef = useRef<HTMLSpanElement>(null);
  const leafRef = useRef<HTMLSpanElement>(null);
  const faceRef = useRef<HTMLSpanElement>(null);
  const rearRef = useRef<HTMLSpanElement>(null);
  const underRef = useRef<HTMLSpanElement>(null);

  const faceWordRef = useRef<HTMLSpanElement>(null);
  const faceNoRef = useRef<HTMLSpanElement>(null);
  const underWordRef = useRef<HTMLSpanElement>(null);
  const underNoRef = useRef<HTMLSpanElement>(null);

  const curIndexRef = useRef<number>(0); // Start on 01 / 05 AI Engineer
  const flippingRef = useRef<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const paint = (wordEl: HTMLSpanElement | null, noEl: HTMLSpanElement | null, idx: number) => {
    if (!wordEl || !noEl) return;
    const skill = SKILLS[idx];
    wordEl.textContent = skill;
    // Scale font size proportionally so longer words fit with zero overflow inside the 7.2em card
    wordEl.style.fontSize = skill === 'Python Developer' ? '0.70em' : '0.78em';
    noEl.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(SKILLS.length).padStart(2, '0')}`;
  };

  const triggerFlip = () => {
    if (flippingRef.current || document.hidden) return;
    flippingRef.current = true;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    const leaf = leafRef.current;
    const face = faceRef.current;
    const rear = rearRef.current;
    const under = underRef.current;
    const cal = calRef.current;

    const nextIdx = (curIndexRef.current + 1) % SKILLS.length;

    // Paint the under page with the next skill waiting below
    paint(underWordRef.current, underNoRef.current, nextIdx);

    if (leaf && face && rear && under && typeof leaf.animate === 'function') {
      // 1. Hardware accelerated 3D leaf turn
      const timing: KeyframeAnimationOptions = {
        duration: FLIP,
        easing: 'cubic-bezier(.5, .05, .2, 1)',
        fill: 'forwards',
      };

      const anim = leaf.animate(
        [
          { transform: 'translateZ(.004em) rotateX(0deg)' },
          { transform: 'translateZ(.004em) rotateX(352deg)' },
        ],
        timing
      );

      // 2. Face opacity cross-fade right as leaf reaches perpendicular edge
      face.animate(
        [
          { opacity: 1 },
          { opacity: 1, offset: 0.285 },
          { opacity: 0, offset: 0.295 },
          { opacity: 0 },
        ],
        { duration: FLIP, easing: 'linear', fill: 'forwards' }
      );

      // 3. Rear paper illumination
      rear.animate(
        [
          { filter: 'brightness(1)' },
          { filter: 'brightness(1.02)', offset: 0.29 },
          { filter: 'brightness(.96)', offset: 0.45 },
          { filter: 'brightness(.9)' },
        ],
        { duration: FLIP, easing: 'linear', fill: 'forwards' }
      );

      // 4. Subtle contact shade on the flipping face
      const faceShade = face.querySelector('.cal__shade');
      if (faceShade) {
        faceShade.animate(
          [
            { opacity: 0 },
            { opacity: 0.45, offset: 0.2 },
            { opacity: 0, offset: 0.275 },
            { opacity: 0 },
          ],
          { duration: FLIP, easing: 'linear', fill: 'forwards' }
        );
      }

      // 5. Under-page shadow revealing as top leaf lifts
      const underShade = under.querySelector('.cal__shade');
      if (underShade) {
        underShade.animate(
          [{ opacity: 0.7 }, { opacity: 0 }],
          { duration: FLIP * 0.9, easing: 'cubic-bezier(.3, .6, .4, 1)', fill: 'forwards' }
        );
      }

      anim.onfinish = () => {
        curIndexRef.current = nextIdx;

        // Update the leaf face with what is now active
        paint(faceWordRef.current, faceNoRef.current, curIndexRef.current);

        // Cancel active animations to reset clean GPU transform
        leaf.getAnimations({ subtree: true }).forEach((a) => a.cancel());
        cal?.querySelectorAll('.cal__shade').forEach((sh) => sh.getAnimations().forEach((a) => a.cancel()));

        leaf.style.transform = 'translateZ(.004em) rotateX(0deg)';
        face.style.opacity = '1';

        // Prepare the under page with the next upcoming skill
        const followingIdx = (curIndexRef.current + 1) % SKILLS.length;
        paint(underWordRef.current, underNoRef.current, followingIdx);

        flippingRef.current = false;
        timerRef.current = setTimeout(triggerFlip, HOLD);
      };
    } else {
      curIndexRef.current = nextIdx;
      flippingRef.current = false;
      timerRef.current = setTimeout(triggerFlip, HOLD);
    }
  };

  useEffect(() => {
    // Initial paint
    paint(faceWordRef.current, faceNoRef.current, curIndexRef.current);
    const nextIdx = (curIndexRef.current + 1) % SKILLS.length;
    paint(underWordRef.current, underNoRef.current, nextIdx);

    timerRef.current = setTimeout(triggerFlip, HOLD);

    return () => {
      if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      className="cal rv"
      id="cal"
      ref={calRef}
      onClick={triggerFlip}
      title="Click to flip discipline"
      style={{
        ['--cal-w' as unknown as string]: '7.2em',
      }}
    >
      <span className="cal__body">
        {/* Dark Desk Wedge / Stand */}
        <span className="cal__stand"></span>

        {/* Stack of Pages */}
        <span className="cal__stack">
          {/* Back Paper */}
          <span className="cal__back">
            <span className="cal__holes">
              {Array.from({ length: RING_COUNT }).map((_, i) => (
                <i key={i} />
              ))}
            </span>
          </span>

          {/* Under Page (Waits beneath during flip) */}
          <span className="cal__page" data-under ref={underRef}>
            <span className="cal__holes">
              {Array.from({ length: RING_COUNT }).map((_, i) => (
                <i key={i} />
              ))}
            </span>
            <span className="cal__word" ref={underWordRef}>
              Data Analyst
            </span>
            <span className="cal__no" ref={underNoRef}>
              02 / 05
            </span>
            <span className="cal__shade"></span>
          </span>

          {/* Active Flipping Leaf */}
          <span className="cal__leaf" ref={leafRef}>
            {/* Front of leaf */}
            <span className="cal__face" ref={faceRef}>
              <span className="cal__holes">
                {Array.from({ length: RING_COUNT }).map((_, i) => (
                  <i key={i} />
                ))}
              </span>
              <span className="cal__word" ref={faceWordRef}>
                AI Engineer
              </span>
              <span className="cal__no" ref={faceNoRef}>
                01 / 05
              </span>
              <span className="cal__shade"></span>
            </span>

            {/* Rear of leaf */}
            <span className="cal__rear" ref={rearRef}>
              <span className="cal__holes">
                {Array.from({ length: RING_COUNT }).map((_, i) => (
                  <i key={i} />
                ))}
              </span>
            </span>
          </span>
        </span>

        {/* Exactly 10 Metallic Wire Rings */}
        <span className="cal__rings">
          {Array.from({ length: RING_COUNT }).map((_, i) => (
            <i key={i} />
          ))}
        </span>
      </span>

      <span className="cal__measure" aria-hidden="true" />
    </span>
  );
};
