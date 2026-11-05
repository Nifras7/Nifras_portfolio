import React, { useEffect, useRef } from 'react';
import { SpiralFlipCalendar } from './SpiralFlipCalendar';

interface ReplicaHeroProps {
  onOpenHireModal?: () => void;
  onSeeWork?: () => void;
}

export const ReplicaHero: React.FC<ReplicaHeroProps> = ({
  onOpenHireModal,
  onSeeWork,
}) => {
  const figRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Liquid color reveal hover effect on portrait
  useEffect(() => {
    const stage = figRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;

    // Check if touch or mobile
    if (window.matchMedia('(max-width: 1023.98px), (hover: none)').matches) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const colImg = new Image();
    colImg.src = '/images/nifras_bw.png';

    const mask = document.createElement('canvas');
    const maskCtx = mask.getContext('2d');
    if (!maskCtx) return;

    let W = 1, H = 1;
    let brushRadius = 140 * dpr;
    const points: Array<{ x: number; y: number; r: number; alpha: number }> = [];
    let running = false;
    let animId = 0;

    function resize() {
      const rect = stage!.getBoundingClientRect();
      W = Math.max(1, Math.round(rect.width * dpr));
      H = Math.max(1, Math.round(rect.height * dpr));
      canvas!.width = W;
      canvas!.height = H;
      mask.width = W;
      mask.height = H;
      brushRadius = 140 * dpr;
    }

    function draw() {
      if (!ctx || !maskCtx) return;

      // Decay points
      maskCtx.clearRect(0, 0, W, H);
      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        p.alpha -= 0.018;
        if (p.alpha <= 0) {
          points.splice(i, 1);
          continue;
        }

        const radG = maskCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        radG.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
        radG.addColorStop(0.65, `rgba(255, 255, 255, ${p.alpha * 0.5})`);
        radG.addColorStop(1, 'rgba(255, 255, 255, 0)');

        maskCtx.fillStyle = radG;
        maskCtx.beginPath();
        maskCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        maskCtx.fill();
      }

      // Draw color image onto canvas masked by mask
      ctx.clearRect(0, 0, W, H);
      if (points.length > 0 && colImg.naturalWidth) {
        // Draw color image
        const s = Math.min(W / colImg.naturalWidth, H / colImg.naturalHeight);
        const dw = colImg.naturalWidth * s;
        const dh = colImg.naturalHeight * s;
        const dx = (W - dw) / 2;
        const dy = H - dh;

        ctx.save();
        ctx.drawImage(colImg, dx, dy, dw, dh);
        ctx.globalCompositeOperation = 'destination-in';
        ctx.drawImage(mask, 0, 0);
        ctx.restore();
      }

      if (points.length > 0) {
        animId = requestAnimationFrame(draw);
      } else {
        running = false;
        ctx.clearRect(0, 0, W, H);
      }
    }

    const onPointerMove = (e: MouseEvent) => {
      const rect = stage!.getBoundingClientRect();
      const x = (e.clientX - rect.left) * dpr;
      const y = (e.clientY - rect.top) * dpr;

      points.push({ x, y, r: brushRadius, alpha: 0.95 });
      if (points.length > 25) points.shift();

      if (!running) {
        running = true;
        animId = requestAnimationFrame(draw);
      }
    };

    stage.addEventListener('mousemove', onPointerMove);
    window.addEventListener('resize', resize);
    resize();

    return () => {
      stage.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="home" className="hero" aria-label="Introduction">
        {/* Vignette Overlay */}
        <div className="hero__vig" aria-hidden="true" />

        {/* Hero Stage with Portrait */}
        <div className="hero__stage">
          <div className="fig" id="fig" ref={figRef}>
            <img
              id="figBase"
              src="/images/nifras_bw.png"
              alt="Mohamed Nifras"
              decoding="async"
            />
            <canvas id="figCanvas" ref={canvasRef} aria-hidden="true" />
          </div>
        </div>

        {/* Hero Content: Headline, Calendar & Action CTAs */}
        <div className="shell hero__content">
          <div className="hero__left">
            <p className="eyebrow rv" style={{ fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif", fontStyle: 'italic', fontSize: '1.05rem', letterSpacing: '0.03em' }}>
              CEO of AIstratX · Open to opportunities
            </p>
            <h1 className="h1" style={{ fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif", fontWeight: 700, letterSpacing: '-0.015em' }}>
              <span className="line"><span>Hi, I'm Nifras.</span></span>
              <span className="line"><span className="soft">I am an</span></span>
              <span className="cal-line">
                <SpiralFlipCalendar />
              </span>
            </h1>

            <div className="ctas rv" style={{ fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif" }}>
              <button
                className="pill pill--dark pill--arrow"
                onClick={onOpenHireModal}
                style={{ fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif", fontSize: '1rem', letterSpacing: '0.03em' }}
              >
                <span className="pill__in">
                  Start a project
                  <span className="pill__badge">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </span>
              </button>

              <a
                className="pill pill--outline"
                href="https://github.com/Nifras7"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif", fontSize: '1rem', letterSpacing: '0.03em' }}
              >
                <span className="pill__in">Explore GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Ticker Status Bar */}
        <div className="shell hero__bar rv" style={{ fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif", fontSize: '1rem' }}>
          <span>AI & Data Systems</span>
          <span className="mid" style={{ fontStyle: 'italic' }}>Chennai, India · Remote-First</span>
          <span
            className="scroll"
            onClick={onSeeWork}
            role="button"
            tabIndex={0}
            style={{ fontFamily: "'EB Garamond', Georgia, 'Times New Roman', serif" }}
          >
            Scroll to explore <i aria-hidden="true">↓</i>
          </span>
        </div>
      </section>
  );
};
