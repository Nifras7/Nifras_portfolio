export interface ProjectItem {
  id: string;
  name: string;
  headline: string;
  leadParagraph: string;
  editorialReport: string[];
  technologies: string[];
  kpiHighlight?: {
    value: string;
    label: string;
  };
  imagePlaceholder?: {
    caption: string;
    figureNo: string;
    type: 'vision' | 'clustering' | 'retail' | 'churn' | 'forecasting';
  };
  githubUrl: string;
  liveDemoUrl?: string;
  dateStamp: string;
  featured?: boolean;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'vision-forage',
    name: 'VisionForage',
    headline: 'Real-time Computer Vision & Spatial Recognition Architecture',
    leadParagraph:
      'Engineered an edge-deployable computer vision intelligence pipeline featuring deep convolutional detection networks and OpenCV frame transformation for high-speed multi-class object localization.',
    editorialReport: [
      'Built around ultra-low latency frame ingestion pipelines, VisionForage coordinates neural bounding box prediction, spatial feature tracking, and automated target scoring across real-time video streams.',
      'Optimized matrix mathematical transformations to maximize GPU kernel throughput and maintain steady frame-rate telemetry in constrained inference environments.',
    ],
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'NumPy', 'Matplotlib'],
    kpiHighlight: {
      value: '<18ms',
      label: 'Edge Inference Latency',
    },
    imagePlaceholder: {
      figureNo: 'Fig. 01',
      caption: 'Neural bounding tensor distribution & spatial detection matrix telemetry.',
      type: 'vision',
    },
    githubUrl: 'https://github.com/Nifras7/VisionForage',
    dateStamp: 'EDITION 2026 · SPECIAL REPORT',
    featured: true,
  },
  {
    id: 'customer-behavior',
    name: 'Customer Behavior Analysis',
    headline: 'Multi-Cohort Behavioral Clustering & Transactional Segmentation',
    leadParagraph:
      'Segmenting multi-dimensional corporate transactional records using RFM behavioral clustering models to uncover hidden customer lifecycle traits and guide high-conversion retention campaigns.',
    editorialReport: [
      'Executed end-to-end exploratory telemetry, outlier isolation, and multivariate K-Means cluster validation across expansive transactional datasets.',
      'Translated behavioral segment indicators into automated executive dashboards tracking cohort migration and commercial lifetime value.',
    ],
    technologies: ['SQL', 'Python', 'Power BI', 'Scikit-learn', 'Excel'],
    kpiHighlight: {
      value: '4 Cohorts',
      label: 'Distinct RFM Segments',
    },
    imagePlaceholder: {
      figureNo: 'Fig. 02',
      caption: 'Three-dimensional feature clustering projection across Recency, Frequency & Monetary scores.',
      type: 'clustering',
    },
    githubUrl: 'https://github.com/Nifras7/customer-behaviour-analysis',
    dateStamp: 'DISPATCH 2025 · DATA ANALYTICS',
    featured: false,
  },
  {
    id: 'retail-analytics',
    name: 'AI-Powered Retail Analytics',
    headline: 'Predictive Stock Optimization & Commercial Demand Intelligence',
    leadParagraph:
      'An end-to-end commercial inventory forecasting engine that optimizes supply chain buffers and forecasts multi-branch retail demand using statistical moving regressions.',
    editorialReport: [
      'Synthesized historical transactional velocity with seasonal purchasing patterns to eliminate stockout anomalies and calibrate safety stock thresholds.',
      'Deployed an interactive analytical control panel delivering automated reorder recommendations to operational category leads.',
    ],
    technologies: ['Python', 'SQL', 'Streamlit', 'Statsmodels', 'Pandas'],
    kpiHighlight: {
      value: '92.4%',
      label: 'Demand Forecast Accuracy',
    },
    imagePlaceholder: {
      figureNo: 'Fig. 03',
      caption: 'Seasonal cyclicality decomposition and inventory buffer safety simulations.',
      type: 'retail',
    },
    githubUrl: 'https://github.com/Nifras7/ai-powered-retail-analytics',
    dateStamp: 'DISPATCH 2026 · APPLIED ML',
    featured: false,
  },
  {
    id: 'telecom-churn',
    name: 'Telecom Customer Churn Prediction',
    headline: 'Subscriber Attrition Risk Telemetry & Proactive Mitigation',
    leadParagraph:
      'Predictive machine learning classification architecture identifying early indicators of subscriber attrition across multi-parameter telecom customer telemetry datasets.',
    editorialReport: [
      'Trained supervised gradient boosting and random forest classifiers with cross-validated feature importance weighting across billing, contract length, and support tickets.',
      'Built executive BI reporting dashboards isolating high-risk cohorts to deploy automated retention incentives before contract lapses.',
    ],
    technologies: ['Python', 'SQL', 'Scikit-learn', 'Power BI', 'Excel'],
    kpiHighlight: {
      value: '0.89 AUC',
      label: 'Model Discrimination Score',
    },
    imagePlaceholder: {
      figureNo: 'Fig. 04',
      caption: 'Receiver operating characteristic curves and feature importance weight hierarchies.',
      type: 'churn',
    },
    githubUrl: 'https://github.com/Nifras7/customer-churn-analysis',
    dateStamp: 'DISPATCH 2025 · PREDICTIVE BI',
    featured: false,
  },
  {
    id: 'sales-forecasting',
    name: 'Sales Forecasting',
    headline: 'Time-Series Revenue Margin Projections & Horizon Horizon Modeling',
    leadParagraph:
      'Time-series forecasting architecture leveraging additive decomposition models to project enterprise commercial demand and gross revenue margins with calibrated uncertainty intervals.',
    editorialReport: [
      'Configured multiplicative seasonal parameters and holiday anomaly caps within Facebook Prophet to model irregular annual demand spikes.',
      'Supplied robust variance estimates enabling finance teams to project baseline capital requirements across upcoming fiscal quarters.',
    ],
    technologies: ['Python', 'Prophet', 'Pandas', 'Flask', 'Matplotlib'],
    kpiHighlight: {
      value: '±4.1%',
      label: 'Variance Confidence Margin',
    },
    imagePlaceholder: {
      figureNo: 'Fig. 05',
      caption: 'Additive trend decomposition with calibrated 95% Bayesian uncertainty envelopes.',
      type: 'forecasting',
    },
    githubUrl: 'https://github.com/Nifras7/sales-forecasting',
    dateStamp: 'DISPATCH 2025 · TIME SERIES',
    featured: false,
  },
];

