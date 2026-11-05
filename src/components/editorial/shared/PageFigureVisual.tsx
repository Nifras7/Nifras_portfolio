import React from 'react';

interface PageFigureVisualProps {
  type: 'vision' | 'clustering' | 'retail' | 'churn' | 'forecasting';
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
        return (
          <svg viewBox="0 0 420 190" style={{ width: '100%', height: '100%' }}>
            {/* Vintage engraving background lines */}
            <defs>
              <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(44, 37, 32, 0.08)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="420" height="190" fill="url(#hatch)" />

            {/* Vintage Double Frame */}
            <rect x="8" y="8" width="404" height="174" fill="none" stroke="#2C2520" strokeWidth="1.2" />
            <rect x="12" y="12" width="396" height="166" fill="none" stroke="#2C2520" strokeWidth="0.5" />

            {/* Crosshairs with tick marks */}
            <line x1="210" y1="20" x2="210" y2="170" stroke="#2C2520" strokeWidth="0.8" />
            <line x1="30" y1="95" x2="390" y2="95" stroke="#2C2520" strokeWidth="0.8" />

            {/* Primary Neural Detection Box with Corner Brackets */}
            <rect x="75" y="40" width="135" height="100" fill="none" stroke="#2C2520" strokeWidth="1.5" />
            <path d="M 68 33 L 82 33 M 68 33 L 68 47" fill="none" stroke="#2C2520" strokeWidth="1.5" />
            <path d="M 217 33 L 203 33 M 217 33 L 217 47" fill="none" stroke="#2C2520" strokeWidth="1.5" />
            <path d="M 68 147 L 82 147 M 68 147 L 68 133" fill="none" stroke="#2C2520" strokeWidth="1.5" />
            <path d="M 217 147 L 203 147 M 217 147 L 217 133" fill="none" stroke="#2C2520" strokeWidth="1.5" />

            {/* Plate Label Tag */}
            <rect x="75" y="27" width="90" height="14" fill="#2C2520" />
            <text x="80" y="38" fill="#F4EEDD" fontSize="9" fontFamily="'EB Garamond', Georgia, serif" fontWeight="700" letterSpacing="0.05em">
              OBJECT CLASSIFIER I
            </text>

            {/* Secondary Box */}
            <rect x="235" y="55" width="125" height="85" fill="none" stroke="#5C534C" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="235" y="43" width="85" height="13" fill="#5C534C" />
            <text x="240" y="53" fill="#F4EEDD" fontSize="8.5" fontFamily="'EB Garamond', Georgia, serif" fontWeight="600">
              TARGET REGION II
            </text>

            {/* Engraved Plate Legend */}
            <text x="30" y="172" fill="#5C534C" fontSize="9.5" fontFamily="'EB Garamond', Georgia, serif" fontStyle="italic">
              Plate I. — Real-time spatial feature tracking and matrix coordinate projection.
            </text>
          </svg>
        );

      case 'clustering':
        return (
          <svg viewBox="0 0 420 190" style={{ width: '100%', height: '100%' }}>
            {/* Vintage Double Frame */}
            <rect x="8" y="8" width="404" height="174" fill="none" stroke="#2C2520" strokeWidth="1.2" />
            <rect x="12" y="12" width="396" height="166" fill="none" stroke="#2C2520" strokeWidth="0.5" />

            {/* Coordinate Axes with Vintage Arrowheads */}
            <line x1="50" y1="150" x2="380" y2="150" stroke="#2C2520" strokeWidth="1.2" />
            <line x1="50" y1="25" x2="50" y2="150" stroke="#2C2520" strokeWidth="1.2" />
            
            <text x="310" y="165" fill="#2C2520" fontSize="10" fontFamily="'EB Garamond', Georgia, serif" fontStyle="italic">
              Recency Factor (R) ⟶
            </text>
            <text x="25" y="35" fill="#2C2520" fontSize="10" fontFamily="'EB Garamond', Georgia, serif" fontStyle="italic" transform="rotate(-90 25,35)">
              Monetary Value (M) ⟶
            </text>

            {/* Cluster A: Champions */}
            <ellipse cx="285" cy="55" rx="55" ry="30" fill="none" stroke="#2C2520" strokeWidth="1.2" strokeDasharray="4 2" />
            <circle cx="275" cy="50" r="3.5" fill="#2C2520" />
            <circle cx="295" cy="60" r="4" fill="#2C2520" />
            <circle cx="285" cy="65" r="3" fill="#2C2520" />
            <circle cx="265" cy="55" r="3" fill="#2C2520" />
            <text x="250" y="38" fill="#2C2520" fontSize="10" fontFamily="'EB Garamond', Georgia, serif" fontWeight="700">
              CLUSTER A: CORE COHORT
            </text>

            {/* Cluster B: At Risk */}
            <ellipse cx="130" cy="115" rx="45" ry="25" fill="none" stroke="#5C534C" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="120" cy="110" r="3" fill="#5C534C" />
            <circle cx="140" cy="120" r="3" fill="#5C534C" />
            <circle cx="125" cy="125" r="2.5" fill="#5C534C" />
            <text x="100" y="100" fill="#5C534C" fontSize="9.5" fontFamily="'EB Garamond', Georgia, serif" fontWeight="700">
              CLUSTER B: AT RISK
            </text>

            {/* Cluster C: Mid-Tier */}
            <circle cx="205" cy="90" r="3" fill="#38322D" />
            <circle cx="220" cy="95" r="3.5" fill="#38322D" />
            <circle cx="195" cy="100" r="2.5" fill="#38322D" />

            <text x="60" y="172" fill="#5C534C" fontSize="9.5" fontFamily="'EB Garamond', Georgia, serif" fontStyle="italic">
              Plate II. — Unsupervised geometric clustering of transactional customer records.
            </text>
          </svg>
        );

      case 'retail':
        return (
          <svg viewBox="0 0 420 190" style={{ width: '100%', height: '100%' }}>
            {/* Vintage Double Frame */}
            <rect x="8" y="8" width="404" height="174" fill="none" stroke="#2C2520" strokeWidth="1.2" />
            <rect x="12" y="12" width="396" height="166" fill="none" stroke="#2C2520" strokeWidth="0.5" />

            {/* Axes */}
            <line x1="50" y1="145" x2="380" y2="145" stroke="#2C2520" strokeWidth="1.2" />
            <line x1="50" y1="25" x2="50" y2="145" stroke="#2C2520" strokeWidth="1.2" />

            {/* Vintage Cross-Hatched Bar Chart */}
            <defs>
              <pattern id="barHatch" width="4" height="4" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="4" stroke="#2C2520" strokeWidth="0.8" />
              </pattern>
            </defs>

            <rect x="75" y="105" width="20" height="40" fill="url(#barHatch)" stroke="#2C2520" strokeWidth="1" />
            <rect x="105" y="90" width="20" height="55" fill="url(#barHatch)" stroke="#2C2520" strokeWidth="1" />
            <rect x="135" y="75" width="20" height="70" fill="url(#barHatch)" stroke="#2C2520" strokeWidth="1" />
            <rect x="165" y="95" width="20" height="50" fill="url(#barHatch)" stroke="#2C2520" strokeWidth="1" />
            <rect x="195" y="60" width="20" height="85" fill="#2C2520" />

            {/* Curved Seasonal Trajectory */}
            <path
              d="M 205 60 Q 255 35 295 65 T 375 45"
              fill="none"
              stroke="#2C2520"
              strokeWidth="2.2"
              strokeDasharray="4 2"
            />
            <circle cx="295" cy="65" r="4" fill="#2C2520" />
            <circle cx="375" cy="45" r="4" fill="#2C2520" />

            {/* Threshold Line */}
            <line x1="50" y1="50" x2="380" y2="50" stroke="#5C534C" strokeWidth="0.8" strokeDasharray="2 2" />
            <text x="290" y="44" fill="#5C534C" fontSize="9" fontFamily="'EB Garamond', Georgia, serif" fontStyle="italic">
              Safety Stock Threshold
            </text>

            <text x="60" y="168" fill="#5C534C" fontSize="9.5" fontFamily="'EB Garamond', Georgia, serif" fontStyle="italic">
              Plate III. — Seasonal demand velocity and inventory equilibrium forecast.
            </text>
          </svg>
        );

      case 'churn':
        return (
          <svg viewBox="0 0 420 190" style={{ width: '100%', height: '100%' }}>
            {/* Vintage Double Frame */}
            <rect x="8" y="8" width="404" height="174" fill="none" stroke="#2C2520" strokeWidth="1.2" />
            <rect x="12" y="12" width="396" height="166" fill="none" stroke="#2C2520" strokeWidth="0.5" />

            {/* Diagonal baseline */}
            <line x1="60" y1="145" x2="360" y2="35" stroke="#968F8A" strokeWidth="1" strokeDasharray="3 3" />

            {/* ROC Curve */}
            <path
              d="M 60 145 C 80 75, 120 40, 360 35"
              fill="none"
              stroke="#2C2520"
              strokeWidth="2.5"
            />

            {/* Axes */}
            <line x1="60" y1="145" x2="370" y2="145" stroke="#2C2520" strokeWidth="1.2" />
            <line x1="60" y1="25" x2="60" y2="145" stroke="#2C2520" strokeWidth="1.2" />

            <text x="75" y="50" fill="#2C2520" fontSize="13" fontFamily="'EB Garamond', Georgia, serif" fontWeight="700">
              AUC Metric = 0.892
            </text>
            <text x="200" y="162" fill="#5C534C" fontSize="9.5" fontFamily="'EB Garamond', Georgia, serif" fontStyle="italic">
              False Positive Rate ⟶
            </text>
            <text x="25" y="35" fill="#5C534C" fontSize="9.5" fontFamily="'EB Garamond', Georgia, serif" fontStyle="italic" transform="rotate(-90 25,35)">
              True Positive Rate ⟶
            </text>
          </svg>
        );

      case 'forecasting':
        return (
          <svg viewBox="0 0 420 190" style={{ width: '100%', height: '100%' }}>
            {/* Vintage Double Frame */}
            <rect x="8" y="8" width="404" height="174" fill="none" stroke="#2C2520" strokeWidth="1.2" />
            <rect x="12" y="12" width="396" height="166" fill="none" stroke="#2C2520" strokeWidth="0.5" />

            {/* Uncertainty envelope with hatching */}
            <path
              d="M 60 100 Q 160 70 240 85 T 370 40 L 370 75 Q 240 120 160 105 T 60 135 Z"
              fill="rgba(44, 37, 32, 0.12)"
              stroke="#2C2520"
              strokeWidth="0.6"
              strokeDasharray="2 2"
            />

            {/* Median Trend Line */}
            <path
              d="M 60 115 Q 160 85 240 100 T 370 58"
              fill="none"
              stroke="#2C2520"
              strokeWidth="2.2"
            />

            {/* Axes */}
            <line x1="60" y1="145" x2="380" y2="145" stroke="#2C2520" strokeWidth="1.2" />
            <line x1="60" y1="25" x2="60" y2="145" stroke="#2C2520" strokeWidth="1.2" />

            <circle cx="240" cy="100" r="3.5" fill="#2C2520" />
            <circle cx="370" cy="58" r="4" fill="#2C2520" />

            <text x="80" y="162" fill="#5C534C" fontSize="9" fontFamily="'EB Garamond', Georgia, serif">Quarter I</text>
            <text x="165" y="162" fill="#5C534C" fontSize="9" fontFamily="'EB Garamond', Georgia, serif">Quarter II</text>
            <text x="250" y="162" fill="#5C534C" fontSize="9" fontFamily="'EB Garamond', Georgia, serif">Quarter III</text>
            <text x="335" y="162" fill="#2C2520" fontSize="9" fontFamily="'EB Garamond', Georgia, serif" fontWeight="700">Quarter IV (EST.)</text>

            <text x="250" y="40" fill="#2C2520" fontSize="9.5" fontFamily="'EB Garamond', Georgia, serif" fontStyle="italic">
              95% Bayesian Confidence Envelope
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
