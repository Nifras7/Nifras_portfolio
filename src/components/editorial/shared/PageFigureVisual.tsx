import React from 'react';

interface PageFigureVisualProps {
  type: string;
  figureNo: string;
  caption: string;
}

export const PageFigureVisual: React.FC<PageFigureVisualProps> = ({
  type,
  figureNo,
  caption,
}) => {
  const renderVisual = () => {
    switch (type) {
      case 'vision':
      case 'spatial':
        return (
          <svg viewBox="0 0 420 190" style={{ width: '100%', height: '100%' }}>
            <defs>
              <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="var(--news-rule)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="420" height="190" fill="url(#hatch)" />

            {/* Vintage Double Frame */}
            <rect x="8" y="8" width="404" height="174" fill="none" stroke="var(--news-ink)" strokeWidth="1.2" />
            <rect x="12" y="12" width="396" height="166" fill="none" stroke="var(--news-ink)" strokeWidth="0.5" />

            {/* Crosshairs with tick marks */}
            <line x1="210" y1="20" x2="210" y2="170" stroke="var(--news-ink)" strokeWidth="0.8" />
            <line x1="30" y1="95" x2="390" y2="95" stroke="var(--news-ink)" strokeWidth="0.8" />

            {/* Primary Neural Detection Box with Corner Brackets */}
            <rect x="75" y="40" width="135" height="100" fill="none" stroke="var(--news-ink)" strokeWidth="1.5" />
            <path d="M 68 33 L 82 33 M 68 33 L 68 47" fill="none" stroke="var(--news-ink)" strokeWidth="1.5" />
            <path d="M 217 33 L 203 33 M 217 33 L 217 47" fill="none" stroke="var(--news-ink)" strokeWidth="1.5" />
            <path d="M 68 147 L 82 147 M 68 147 L 68 133" fill="none" stroke="var(--news-ink)" strokeWidth="1.5" />
            <path d="M 217 147 L 203 147 M 217 147 L 217 133" fill="none" stroke="var(--news-ink)" strokeWidth="1.5" />

            {/* Plate Label Tag */}
            <rect x="75" y="27" width="112" height="14" fill="var(--news-ink)" />
            <text x="80" y="38" fill="var(--news-paper)" fontSize="9" fontWeight="var(--fw-heading)" letterSpacing="var(--tracking-caps)">
              OBJECT CLASSIFIER I
            </text>

            {/* Secondary Box */}
            <rect x="235" y="55" width="125" height="85" fill="none" stroke="var(--news-ink-muted)" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="235" y="43" width="104" height="13" fill="var(--news-ink-muted)" />
            <text x="240" y="53" fill="var(--news-paper)" fontSize="8.5" fontWeight="var(--fw-emphasis)">
              TARGET REGION II
            </text>

            {/* Engraved Plate Legend */}
            <text x="30" y="172" fill="var(--news-ink-muted)" fontSize="9.5" fontStyle="italic">
              Plate I. — Real-time spatial feature tracking and matrix coordinate projection.
            </text>
          </svg>
        );

      case 'clustering':
        return (
          <svg viewBox="0 0 420 190" style={{ width: '100%', height: '100%' }}>
            {/* Vintage Double Frame */}
            <rect x="8" y="8" width="404" height="174" fill="none" stroke="var(--news-ink)" strokeWidth="1.2" />
            <rect x="12" y="12" width="396" height="166" fill="none" stroke="var(--news-ink)" strokeWidth="0.5" />

            {/* Coordinate Axes with Vintage Arrowheads */}
            <line x1="50" y1="150" x2="380" y2="150" stroke="var(--news-ink)" strokeWidth="1.2" />
            <line x1="50" y1="25" x2="50" y2="150" stroke="var(--news-ink)" strokeWidth="1.2" />
            
            <text x="310" y="165" fill="var(--news-ink)" fontSize="10" fontStyle="italic">
              Recency Factor (R) ⟶
            </text>
            <text x="25" y="35" fill="var(--news-ink)" fontSize="10" fontStyle="italic" transform="rotate(-90 25,35)">
              Monetary Value (M) ⟶
            </text>

            {/* Cluster A: Champions */}
            <ellipse cx="285" cy="55" rx="55" ry="30" fill="none" stroke="var(--news-ink)" strokeWidth="1.2" strokeDasharray="4 2" />
            <circle cx="275" cy="50" r="3.5" fill="var(--news-ink)" />
            <circle cx="295" cy="60" r="4" fill="var(--news-ink)" />
            <circle cx="285" cy="65" r="3" fill="var(--news-ink)" />
            <circle cx="265" cy="55" r="3" fill="var(--news-ink)" />
            <text x="250" y="38" fill="var(--news-ink)" fontSize="10" fontWeight="var(--fw-heading)">
              CLUSTER A: CORE COHORT
            </text>

            {/* Cluster B: At Risk */}
            <ellipse cx="130" cy="115" rx="45" ry="25" fill="none" stroke="var(--news-ink-muted)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="120" cy="110" r="3" fill="var(--news-ink-muted)" />
            <circle cx="140" cy="120" r="3" fill="var(--news-ink-muted)" />
            <circle cx="125" cy="125" r="2.5" fill="var(--news-ink-muted)" />
            <text x="100" y="100" fill="var(--news-ink-muted)" fontSize="9.5" fontWeight="var(--fw-heading)">
              CLUSTER B: AT RISK
            </text>

            {/* Cluster C: Mid-Tier */}
            <circle cx="205" cy="90" r="3" fill="var(--news-ink-soft)" />
            <circle cx="220" cy="95" r="3.5" fill="var(--news-ink-soft)" />
            <circle cx="195" cy="100" r="2.5" fill="var(--news-ink-soft)" />

            <text x="60" y="172" fill="var(--news-ink-muted)" fontSize="9.5" fontStyle="italic">
              Plate II. — Unsupervised geometric clustering of transactional customer records.
            </text>
          </svg>
        );

      case 'retail':
        return (
          <svg viewBox="0 0 420 190" style={{ width: '100%', height: '100%' }}>
            {/* Vintage Double Frame */}
            <rect x="8" y="8" width="404" height="174" fill="none" stroke="var(--news-ink)" strokeWidth="1.2" />
            <rect x="12" y="12" width="396" height="166" fill="none" stroke="var(--news-ink)" strokeWidth="0.5" />

            {/* Axes */}
            <line x1="50" y1="145" x2="380" y2="145" stroke="var(--news-ink)" strokeWidth="1.2" />
            <line x1="50" y1="25" x2="50" y2="145" stroke="var(--news-ink)" strokeWidth="1.2" />

            {/* Vintage Cross-Hatched Bar Chart */}
            <defs>
              <pattern id="barHatch" width="4" height="4" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="4" stroke="var(--news-ink)" strokeWidth="0.8" />
              </pattern>
            </defs>

            <rect x="75" y="105" width="20" height="40" fill="url(#barHatch)" stroke="var(--news-ink)" strokeWidth="1" />
            <rect x="105" y="90" width="20" height="55" fill="url(#barHatch)" stroke="var(--news-ink)" strokeWidth="1" />
            <rect x="135" y="75" width="20" height="70" fill="url(#barHatch)" stroke="var(--news-ink)" strokeWidth="1" />
            <rect x="165" y="95" width="20" height="50" fill="url(#barHatch)" stroke="var(--news-ink)" strokeWidth="1" />
            <rect x="195" y="60" width="20" height="85" fill="var(--news-ink)" />

            {/* Curved Seasonal Trajectory */}
            <path
              d="M 205 60 Q 255 35 295 65 T 375 45"
              fill="none"
              stroke="var(--news-ink)"
              strokeWidth="2.2"
              strokeDasharray="4 2"
            />
            <circle cx="295" cy="65" r="4" fill="var(--news-ink)" />
            <circle cx="375" cy="45" r="4" fill="var(--news-ink)" />

            {/* Threshold Line */}
            <line x1="50" y1="50" x2="380" y2="50" stroke="var(--news-ink-muted)" strokeWidth="0.8" strokeDasharray="2 2" />
            <text x="290" y="44" fill="var(--news-ink-muted)" fontSize="9" fontStyle="italic">
              Safety Stock Threshold
            </text>

            <text x="60" y="168" fill="var(--news-ink-muted)" fontSize="9.5" fontStyle="italic">
              Plate III. — Seasonal demand velocity and inventory equilibrium forecast.
            </text>
          </svg>
        );

      case 'churn':
        return (
          <svg viewBox="0 0 420 190" style={{ width: '100%', height: '100%' }}>
            {/* Vintage Double Frame */}
            <rect x="8" y="8" width="404" height="174" fill="none" stroke="var(--news-ink)" strokeWidth="1.2" />
            <rect x="12" y="12" width="396" height="166" fill="none" stroke="var(--news-ink)" strokeWidth="0.5" />

            {/* Diagonal baseline */}
            <line x1="60" y1="145" x2="360" y2="35" stroke="var(--news-ink-subtle)" strokeWidth="1" strokeDasharray="3 3" />

            {/* ROC Curve */}
            <path
              d="M 60 145 C 80 75, 120 40, 360 35"
              fill="none"
              stroke="var(--news-ink)"
              strokeWidth="2.5"
            />

            {/* Axes */}
            <line x1="60" y1="145" x2="370" y2="145" stroke="var(--news-ink)" strokeWidth="1.2" />
            <line x1="60" y1="25" x2="60" y2="145" stroke="var(--news-ink)" strokeWidth="1.2" />

            <text x="75" y="50" fill="var(--news-ink)" fontSize="13" fontWeight="var(--fw-heading)">
              AUC Metric = 0.892
            </text>
            <text x="200" y="162" fill="var(--news-ink-muted)" fontSize="9.5" fontStyle="italic">
              False Positive Rate ⟶
            </text>
            <text x="25" y="35" fill="var(--news-ink-muted)" fontSize="9.5" fontStyle="italic" transform="rotate(-90 25,35)">
              True Positive Rate ⟶
            </text>
          </svg>
        );

      case 'forecasting':
        return (
          <svg viewBox="0 0 420 190" style={{ width: '100%', height: '100%' }}>
            {/* Vintage Double Frame */}
            <rect x="8" y="8" width="404" height="174" fill="none" stroke="var(--news-ink)" strokeWidth="1.2" />
            <rect x="12" y="12" width="396" height="166" fill="none" stroke="var(--news-ink)" strokeWidth="0.5" />

            {/* Uncertainty envelope with hatching */}
            <path
              d="M 60 100 Q 160 70 240 85 T 370 40 L 370 75 Q 240 120 160 105 T 60 135 Z"
              fill="var(--news-rule)"
              stroke="var(--news-ink)"
              strokeWidth="0.6"
              strokeDasharray="2 2"
            />

            {/* Median Trend Line */}
            <path
              d="M 60 115 Q 160 85 240 100 T 370 58"
              fill="none"
              stroke="var(--news-ink)"
              strokeWidth="2.2"
            />

            {/* Axes */}
            <line x1="60" y1="145" x2="380" y2="145" stroke="var(--news-ink)" strokeWidth="1.2" />
            <line x1="60" y1="25" x2="60" y2="145" stroke="var(--news-ink)" strokeWidth="1.2" />

            <circle cx="240" cy="100" r="3.5" fill="var(--news-ink)" />
            <circle cx="370" cy="58" r="4" fill="var(--news-ink)" />

            <text x="80" y="162" fill="var(--news-ink-muted)" fontSize="9">Quarter I</text>
            <text x="165" y="162" fill="var(--news-ink-muted)" fontSize="9">Quarter II</text>
            <text x="250" y="162" fill="var(--news-ink-muted)" fontSize="9">Quarter III</text>
            <text x="335" y="162" fill="var(--news-ink)" fontSize="9" fontWeight="var(--fw-heading)">Quarter IV (EST.)</text>

            <text x="250" y="40" fill="var(--news-ink)" fontSize="9.5" fontStyle="italic">
              95% Bayesian Confidence Envelope
            </text>
          </svg>
        );

      case 'semantic':
        return (
          <svg viewBox="0 0 420 190" style={{ width: '100%', height: '100%' }}>
            {/* Vintage Double Frame */}
            <rect x="8" y="8" width="404" height="174" fill="none" stroke="var(--news-ink)" strokeWidth="1.2" />
            <rect x="12" y="12" width="396" height="166" fill="none" stroke="var(--news-ink)" strokeWidth="0.5" />

            {/* Radar / Embedding Coordinate Grid */}
            <circle cx="210" cy="95" r="65" fill="none" stroke="var(--news-rule)" strokeWidth="0.8" strokeDasharray="3 3" />
            <circle cx="210" cy="95" r="45" fill="none" stroke="var(--news-rule)" strokeWidth="0.8" />
            <circle cx="210" cy="95" r="25" fill="none" stroke="var(--news-rule)" strokeWidth="0.8" />
            <line x1="145" y1="95" x2="275" y2="95" stroke="var(--news-ink)" strokeWidth="0.8" />
            <line x1="210" y1="30" x2="210" y2="160" stroke="var(--news-ink)" strokeWidth="0.8" />

            {/* Vector Alignment Polygons */}
            <polygon
              points="210,48 252,80 238,130 182,125 168,78"
              fill="var(--news-rule)"
              stroke="var(--news-ink)"
              strokeWidth="1.5"
            />
            <polygon
              points="210,55 245,85 230,122 190,118 175,82"
              fill="none"
              stroke="var(--news-ink-muted)"
              strokeWidth="1.2"
              strokeDasharray="4 2"
            />

            {/* Nodes */}
            <circle cx="210" cy="48" r="3.5" fill="var(--news-ink)" />
            <circle cx="252" cy="80" r="3.5" fill="var(--news-ink)" />
            <circle cx="238" cy="130" r="3.5" fill="var(--news-ink)" />
            <circle cx="182" cy="125" r="3.5" fill="var(--news-ink)" />
            <circle cx="168" cy="78" r="3.5" fill="var(--news-ink)" />

            <text x="210" y="38" textAnchor="middle" fill="var(--news-ink)" fontSize="8.5" fontWeight="var(--fw-heading)">
              TECHNICAL SKILL MATCH
            </text>
            <text x="280" y="85" fill="var(--news-ink-muted)" fontSize="8">EXPERIENCE</text>
            <text x="250" y="142" fill="var(--news-ink-muted)" fontSize="8">DOMAIN FIT</text>
            <text x="140" y="135" fill="var(--news-ink-muted)" fontSize="8">EDUCATION</text>
            <text x="130" y="80" fill="var(--news-ink-muted)" fontSize="8">KEYWORDS</text>

            <text x="35" y="172" fill="var(--news-ink-muted)" fontSize="9" fontStyle="italic">
              Plate I. — Multi-dimensional vector cosine alignment: candidate tensor vs job requirement specification.
            </text>
          </svg>
        );

      case 'forensics':
        return (
          <svg viewBox="0 0 420 190" style={{ width: '100%', height: '100%' }}>
            {/* Vintage Double Frame */}
            <rect x="8" y="8" width="404" height="174" fill="none" stroke="var(--news-ink)" strokeWidth="1.2" />
            <rect x="12" y="12" width="396" height="166" fill="none" stroke="var(--news-ink)" strokeWidth="0.5" />

            {/* Cryptographic Manifest Chain Block 1 */}
            <rect x="45" y="55" width="90" height="70" fill="none" stroke="var(--news-ink)" strokeWidth="1.5" />
            <rect x="45" y="55" width="90" height="18" fill="var(--news-ink)" />
            <text x="90" y="68" textAnchor="middle" fill="var(--news-paper)" fontSize="8.5" fontWeight="var(--fw-heading)">
              EXIF / METADATA
            </text>
            <text x="55" y="88" fill="var(--news-ink-muted)" fontSize="7.5">SHA-256 Digest</text>
            <text x="55" y="102" fill="var(--news-ink-muted)" fontSize="7.5">Sanitized: OK</text>
            <text x="55" y="116" fill="var(--news-ink)" fontSize="8" fontWeight="var(--fw-emphasis)">Verified 0-Leak</text>

            {/* Connecting Arrow 1 */}
            <line x1="135" y1="90" x2="175" y2="90" stroke="var(--news-ink)" strokeWidth="1.5" />
            <polygon points="175,90 167,86 167,94" fill="var(--news-ink)" />

            {/* Cryptographic Manifest Chain Block 2 */}
            <rect x="175" y="45" width="105" height="90" fill="var(--news-rule)" stroke="var(--news-ink)" strokeWidth="2" />
            <rect x="175" y="45" width="105" height="20" fill="var(--news-ink)" />
            <text x="227" y="59" textAnchor="middle" fill="var(--news-paper)" fontSize="8.5" fontWeight="var(--fw-heading)">
              C2PA MANIFEST
            </text>
            <text x="185" y="80" fill="var(--news-ink)" fontSize="8">Signature Valid</text>
            <text x="185" y="94" fill="var(--news-ink-muted)" fontSize="7.5">Cert: X.509 RSA</text>
            <text x="185" y="108" fill="var(--news-ink-muted)" fontSize="7.5">Provenance: Trust</text>
            <text x="185" y="122" fill="var(--news-ink)" fontSize="8" fontWeight="var(--fw-emphasis)">Integrity 100%</text>

            {/* Connecting Arrow 2 */}
            <line x1="280" y1="90" x2="315" y2="90" stroke="var(--news-ink)" strokeWidth="1.5" />
            <polygon points="315,90 307,86 307,94" fill="var(--news-ink)" />

            {/* Forensic Output Block 3 */}
            <rect x="315" y="55" width="80" height="70" fill="none" stroke="var(--news-ink)" strokeWidth="1.5" />
            <rect x="315" y="55" width="80" height="18" fill="var(--news-ink)" />
            <text x="355" y="68" textAnchor="middle" fill="var(--news-paper)" fontSize="8.5" fontWeight="var(--fw-heading)">
              ELA ANALYSIS
            </text>
            <text x="325" y="88" fill="var(--news-ink-muted)" fontSize="7.5">Error Level: Lo</text>
            <text x="325" y="102" fill="var(--news-ink-muted)" fontSize="7.5">Compression: Eq</text>
            <text x="325" y="116" fill="var(--news-ink)" fontSize="8" fontWeight="var(--fw-emphasis)">Authentic</text>

            <text x="35" y="172" fill="var(--news-ink-muted)" fontSize="9" fontStyle="italic">
              Plate II. — Local-first forensic provenance pipeline: cryptographic assertion and tamper proofing.
            </text>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <figure className="editorial-figure">
      <div className="figure-canvas-box">{renderVisual()}</div>
      <figcaption className="figure-caption">
        <strong>{figureNo}.</strong> — {caption}
      </figcaption>
    </figure>
  );
};
