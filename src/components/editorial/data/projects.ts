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
    type: 'vision' | 'clustering' | 'retail' | 'churn' | 'forecasting' | 'semantic' | 'forensics';
  };
  githubUrl: string;
  liveDemoUrl?: string;
  dateStamp: string;
  featured?: boolean;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'ai-hiring-assistant',
    name: 'AI Hiring Assistant',
    headline: 'Autonomous Resume Screening & Semantic Job Matching System',
    leadParagraph:
      'An intelligent recruitment intelligence platform powered by Python, LangChain, Streamlit, and Gemini that converts unstructured resume PDFs into structured candidate vectors and executes semantic cosine job alignment.',
    editorialReport: [
      'Engineered multi-stage candidate information extraction with LangChain prompts, parsing professional experience, core skills, and educational qualifications into standardized schemas.',
      'Calculated high-dimensional semantic cosine similarity vectors between candidate credentials and target job specifications, reducing screening cycle times while preserving recruitment auditability.',
    ],
    technologies: ['Python', 'Streamlit', 'LangChain', 'Gemini 2.5 Pro', 'Vector Embeddings', 'PyPDF2'],
    kpiHighlight: {
      value: '94.6%',
      label: 'Job Alignment Precision',
    },
    imagePlaceholder: {
      figureNo: 'Fig. 01',
      caption: 'Multi-dimensional vector cosine alignment: candidate tensor vs job requirement specification.',
      type: 'semantic',
    },
    githubUrl: 'https://github.com/Nifras7/AI-hiring-Assistant',
    dateStamp: 'EDITION 2026 · SPECIAL REPORT',
    featured: true,
  },
  {
    id: 'verilens',
    name: 'VeriLens',
    headline: 'Privacy-First Digital Content Verification & Forensic Suite',
    leadParagraph:
      'A local-first digital provenance and forensic inspection platform built with React, TypeScript, and Vite that performs cryptographic C2PA manifest verification and deep EXIF metadata sanitization.',
    editorialReport: [
      'Architected zero-cloud-leakage client-side forensic analysis pipelines, allowing sensitive media verification without sending assets over network boundaries.',
      'Integrated cryptographic hash validations, error-level analysis (ELA), and C2PA provenance chain checks to detect deepfake synthesis and metadata tampering.',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'C2PA Protocol', 'Web Crypto', 'Capacitor'],
    kpiHighlight: {
      value: '0ms',
      label: 'Cloud Leak (Local-First)',
    },
    imagePlaceholder: {
      figureNo: 'Fig. 02',
      caption: 'Local-first forensic provenance pipeline: cryptographic assertion and tamper proofing.',
      type: 'forensics',
    },
    githubUrl: 'https://github.com/Nifras7/VeriLens',
    dateStamp: 'DISPATCH 2026 · APPLIED CYBER-FORENSICS',
    featured: true,
  },
  {
    id: 'retail-analytics',
    name: 'AI-Powered Retail Analytics',
    headline: 'Enterprise Natural Language-to-SQL Retail Intelligence',
    leadParagraph:
      'An enterprise AI retail analytics chatbot that converts conversational business queries into optimized SQL to deliver real-time KPI metrics, revenue projections, and automated visualizations.',
    editorialReport: [
      'Synthesized LangChain SQL agents with database schema introspection to translate ad-hoc management inquiries into validated relational queries with zero hallucinations.',
      'Delivered dynamic interactive visualizations and inventory stock anomaly alerts directly to retail operational category leads via an intuitive Streamlit interface.',
    ],
    technologies: ['Python', 'LangChain', 'Gemini API', 'SQLite', 'Streamlit', 'Pandas'],
    kpiHighlight: {
      value: '98.2%',
      label: 'Query Translation Accuracy',
    },
    imagePlaceholder: {
      figureNo: 'Fig. 03',
      caption: 'Seasonal cyclicality decomposition and inventory buffer safety simulations.',
      type: 'retail',
    },
    githubUrl: 'https://github.com/Nifras7/AI_Powered_Retail_Analytics',
    dateStamp: 'DISPATCH 2026 · APPLIED ML',
    featured: false,
  },
  {
    id: 'customer-behavior',
    name: 'Customer Behavior Analysis',
    headline: 'End-to-End Enterprise Customer Analytics & RFM Segmentation',
    leadParagraph:
      'A complete, industry-standard corporate data analytics workflow analyzing transactional customer records using RFM behavioral clustering models to guide high-conversion retention campaigns.',
    editorialReport: [
      'Executed end-to-end data preparation, outlier filtering, and multivariate statistical clustering across multi-parameter corporate customer datasets.',
      'Translated RFM segment cohorts into interactive Power BI executive dashboards tracking behavioral migration, frequency metrics, and customer lifetime value (LTV).',
    ],
    technologies: ['Python', 'SQL', 'Power BI', 'Pandas', 'Scikit-learn', 'Excel'],
    kpiHighlight: {
      value: '4 Cohorts',
      label: 'Distinct RFM Segments',
    },
    imagePlaceholder: {
      figureNo: 'Fig. 04',
      caption: 'Three-dimensional feature clustering projection across Recency, Frequency & Monetary scores.',
      type: 'clustering',
    },
    githubUrl: 'https://github.com/Nifras7/Customer_Behavior_Analysis',
    dateStamp: 'DISPATCH 2025 · DATA ANALYTICS',
    featured: false,
  },
  {
    id: 'sales-forecasting',
    name: 'Sales Forecasting',
    headline: 'Time-Series Revenue & Demand Prediction Architecture',
    leadParagraph:
      'A machine learning sales forecasting system built with Python, Pandas, and XGBoost that predicts future commercial demand by analyzing historical transaction patterns and underlying seasonal trends.',
    editorialReport: [
      'Engineered lag features, rolling window averages, and cyclical holiday anomaly indicators to model complex purchasing patterns across fiscal periods.',
      'Evaluated model variance against cross-validated error metrics to supply dependable demand projections that support inventory buffers and financial planning.',
    ],
    technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    kpiHighlight: {
      value: '±3.8%',
      label: 'Forecast Error Margin',
    },
    imagePlaceholder: {
      figureNo: 'Fig. 05',
      caption: 'Additive trend decomposition with calibrated 95% Bayesian uncertainty envelopes.',
      type: 'forecasting',
    },
    githubUrl: 'https://github.com/Nifras7/Sales_Forecasting',
    dateStamp: 'DISPATCH 2025 · TIME SERIES',
    featured: false,
  },
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
      figureNo: 'Fig. 06',
      caption: 'Neural bounding tensor distribution & spatial detection matrix telemetry.',
      type: 'vision',
    },
    githubUrl: 'https://github.com/Nifras7/VisionForage',
    dateStamp: 'EDITION 2026 · SPECIAL REPORT',
    featured: false,
  },
];
